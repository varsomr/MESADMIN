(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('LRSWebcontroller', controller);//.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'uiGridGroupingConstants', 'uiGridExporterService', 'uiGridExporterConstants', 'LRSWebService','DefectService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $timeout, uiGridConstants, uiGridGroupingConstants, uiGridExporterService, uiGridExporterConstants, LRSWebService, DefectService) {


 

        $scope.rowFormatter = function (row) {


            //var results = +document.getElementById("CompleteTask").value;
            //document.getElementById('CompleteTask').value = results + 1;


            if (row.entity.ProjectLifeCycle === 'ApprovedForRollout') {
                row.entity.ProjectLifeCycle.style.backgroundColor = "green";
                console.log(row);
            }

            return row.entity.ProjectScope === '4-Complete';

        };

        $scope.rowFormatterRelease = function (row) {

            return row.entity.ProjectType === 'ApprovedForRollout';
        };
        $scope.rowFormatterProject = function (row) {

            return row.entity.ProjectStatus === '4-Complete';
        };


        function registerGridApi(gridApi) {
            $scope.gridApi = gridApi;
        }


        $scope.skillsFunc = function () {
            var job = document.getElementById('ProjectName').value;
            console.log(job);
            $scope.gridApi.grid.getColumn('ProjectName').filters[0] = {
                term: job
            };
            $scope.ScrAdjust();
        };

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');
            var handle = 'normal';
            var sql = 'none';
            //console.log(options);
            LRSWebService.get(handle, sql).success(function (data) {
                if (data === null || data.MessageList === null || data.MessageList.length === 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.MessageList.length
                    );

                    var MessageList = data.MessageList;

                    //console.log(MessageList);

                    $scope.gridOptions.data = MessageList;
                    //console.log("this is data" + $scope.gridOptions.data)

                    $scope.SetGrid();

                    $scope.error = false;
                }
                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; });
            //   . error(function (data) {

            //});
        };
        // $scope.loadGrid();



        $scope.SetGrid = function () {

            document.getElementById("ProjStat").value = '2-In Progress';
            $scope.SelProjStatus();

            var btnName;
            btnName = '#' + 'showFirst';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);
        };


        $scope.exportCSV = function () {
            var exportService = uiGridExporterService;
            var grid = $scope.gridApi.grid;
            var fileName = "myfile.csv";

            exportService.loadAllDataIfNeeded(grid, uiGridExporterConstants.VISIBLE, uiGridExporterConstants.VISIBLE).then(function () {
                var exportColumnHeaders = exportService.getColumnHeaders(grid, uiGridExporterConstants.VISIBLE);

                $scope.gridApi.selection.selectAllVisibleRows();

                var exportData = exportService.getData(grid, uiGridExporterConstants.SELECTED, uiGridExporterConstants.VISIBLE);
                var csvContent = exportService.formatAsCsv(exportColumnHeaders, exportData, grid.options.exporterCsvColumnSeparator);
                exportService.downloadFile(fileName, csvContent, grid.options.exporterOlderExcelCompatibility);
                $scope.gridApi.selection.clearSelectedRows();
            });
        };

        $scope.changeGroupingMEMBER = function () {
            $scope.gridApi.grouping.clearGrouping();
            $scope.gridApi.grouping.groupColumn('APPSResourceName1');
            $scope.gridApi.grouping.aggregateColumn('ProjectName', uiGridGroupingConstants.aggregation.COUNT);
        };

        $scope.changeGroupingPROJECT = function () {
            $scope.gridApi.grouping.clearGrouping();
            $scope.gridApi.grouping.groupColumn('ProjectName');
            $scope.gridApi.grouping.groupPriority = 0;
            $scope.gridApi.grouping.groupColumn('ProjectLifeCycle');
            $scope.gridApi.grouping.groupPriority = 1;
            $scope.gridApi.grouping.aggregateColumn('APPSResourceName1', uiGridGroupingConstants.aggregation.COUNT);
            $scope.doSort();
            //
        };

        $scope.toggleFilter = function () {
            $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
            $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        };
        $scope.toggleRow = function (rowNum) {
            $scope.gridApi.treeBase.toggleRowTreeState($scope.gridApi.grid.renderContainers.body.visibleRowCache[rowNum]);
            document.getElementById("ProjStat").value = '2-In Progress';
            $scope.SelProjStatus();
        };

    

        $scope.doSort = function () {
            $scope.gridOptions.columnDefs[0].sort.direction =
                $scope.gridOptions.columnDefs[0].sort.direction === 'asc' ? 'desc' : 'asc';
            grid.refresh();
        };
        $scope.SelectProjStatus = function (data) {

            document.getElementById("ProjStat").value = data.value;

        };
        $scope.SelProjStatus = function () {
            job = document.getElementById('ProjStat').value;
            console.log(job + '=job');
            $scope.gridApi.grid.getColumn('ProjectStatus').filters[0] = {
                term: job
            };
        };
        $scope.function_one = function (url) {
            var name = 'uname';
            //function function_two(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            // return decodeURIComponent(results[2].replace(/\+/g, " "));
            var uid = decodeURIComponent(results[2].replace(/\+/g, " "))
            $scope.title = uid;
            //alert(uid)
            document.getElementById('LoggedIn').value = uid;   //(decodeURIComponent(results[2].replace(/\+/g, " ")));
            document.getElementById('LoggedInUserDASH').value = uid;
            document.getElementById('LoggedInUserDASHDD').value = uid;//}

        };
        $scope.function_one();


        //###################StageGating
        if (document.getElementById('LoggedIn').value !== "") {
            //if (document.getElementById('LoggedIn').value === "hasanif" || document.getElementById('LoggedIn').value === "haywood") {
            //    //document.getElementById('TaskApproval').style.pointerEvents = 'auto';
            //    document.getElementById('mysidenavTBoxes').style.pointerEvents = 'auto';

            //}
            ////else if (document.getElementById('LoggedIn').value != "haywood") {
            ////    document.getElementById('TaskApproval').style.pointerEvents = 'none';
            ////}

            //else {
            //        //document.getElementById('TaskApproval').style.pointerEvents = 'none';
            //        document.getElementById('mysidenavTBoxes').style.pointerEvents = 'none';
            //}


        }

        else {
            //alert('Please LogIn');
            document.getElementById('uid').value = "Please LogIn"
            document.getElementById('uid').style.Color = 'yellow';
            document.getElementById('uid').style.backgroundColor = 'red';
        }
        //##################End StageGating



        
        //########################END GRID 1 FUNCTIONALITIES#######################////////////

        //######################Calendar Event###########################//

        $scope.calendardate = function (nav) {


            $(nav).datepicker();


        };
        $(function () {
            $("#EstStartDate").datepicker();
            $("#EstCompleteDate").datepicker();
            $("#EstStartDateD").datepicker();
            $("#EstCompleteDateD").datepicker();
        });

        //######################END Calendar Event###########################//

        //## Grid Adjust####################//

        $scope.randomSize = function (nav, ty) {
            var newHeight; //= Math.floor(Math.random() * (300 - 100 + 1) + 300);
            var newWidth; //= Math.floor(Math.random() * (600 - 200 + 1) + 200);
            if ($(window).width() < 600) {
                if (ty === 'hs') {
                    //newHeight = 85;
                    newHeight = $(window).height() - $(window).height() * 0.7;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.4;
                }
                //newWidth = 400;
                newWidth = $(window).width() - $(window).width() * 0.08;
                // document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 1300) {
                if (ty === 'hs') {
                    newHeight = 85;
                    //newHeight = $(window).height() - $(window).height() * 0.08;
                }
                else {
                    newHeight = 85;
                    //newHeight = $(window).height() - $(window).height() * 0.04;
                }
                //newWidth = 1200;
                newWidth = 99; //$(window).width() - $(window).width() * 0.08;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 2000) {
                if (ty === 'hs') {
                    newHeight = $(window).height() - $(window).height() * 0.03;
                    //newHeight = 40;
                }
                else {
                    //newHeight = 40;
                    newHeight = $(window).height() - $(window).height() * 0.04;
                }
                // newWidth = 1800;
                newWidth = 99;//$(window).width()-$(window).width() * 0.01;// - $(window).width() * 0.02;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }

            else {
                if (ty === 'hs') {
                    newHeight = $(window).height() - $(window).height() * 0.07;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.05;
                }
                //newWidth = 1800;
                newWidth = $(window).width() - $(window).width() * 0.08;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }

            angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'vh');
            angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'vw');

            //console.log(nav + '-' + newHeight + '-' + newWidth);

        };


        $scope.ScrAdjust = function () {

            //$scope.randomSize('grid', 'hs');

            $scope.randomSize('gridTasks', 'qs');
            $scope.randomSize('gridCM', 'qs');
            //$scope.randomSize('gridEst', 'qs');
        };



        //## END Grid Adjust####################//

        //################## Modal ############//
        $scope.cancelModal = function (nav) {
            document.getElementById(nav).style.display = "none";

        };

        $scope.openModal = function (nav) {
            console.log(nav);
            document.getElementById(nav).style.display = 'block';
        };



        $scope.openModalStartMenu = function (nav) {

            if (document.getElementById(nav).style.visibility === 'hidden') {
                event.stopPropagation();
                document.getElementById(nav).style.visibility = 'visible';

            }
            else {
                document.getElementById(nav).style.visibility = 'hidden';
            }
        };

        $scope.openSpecialScreens = function (nav, area) {
            $scope.openModal(nav);

            var btnName;
            btnName = '#' + area;


            console.log(btnName);

            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);

            //var btnNameBottom = btnName + 'Bottom';
            //console.log(btnNameBottom);
            //$timeout(function () {
            //    $(btnNameBottom).trigger('click');

            //}, 0);
            if (nav === 'mysidenavRightQuality') {
                $scope.randomSize('gridQuality', 'hs');
            }
            else if (nav === 'mysidenavRightCons') {
                $scope.randomSize('gridCons', 'hs');
            }
            else if (nav === 'mysidenavRightProd') {
                $scope.randomSize('gridProd', 'hs');
            }
            else if (nav === 'mysidenavRightLabel') {
                $scope.randomSize('gridLabel', 'hs');
            }
            else if (nav === 'mysidenavRightLIT') {
                $scope.randomSize('grid', 'hs');
            }
            else if (nav === 'mysidenavRightTruck') {
                $scope.randomSize('gridMR', 'hs');
            }
        };


        $scope.openSpecialScreensMain = function (nav, area, op) {


            var res = area.substring(4);

            var tr;

            if (res === 'Prod') {
                document.getElementById(area).value = op;
                $scope.openSpecialScreens('mysidenavRightProd', 'POPEbtnAll');
            }
            else if (res === 'Cons') {
                document.getElementById(area).value = op;
                $scope.openSpecialScreens('mysidenavRightCons', 'POCEbtnAll');

            }
            else if (res === 'Quality') {
                document.getElementById(area).value = op;
                $scope.openSpecialScreens('mysidenavRightQuality', 'POQEbtnAll');

            }
            else if (res === 'Label') {
                document.getElementById(area).value = op;
                $scope.openSpecialScreens('mysidenavRightLabel', 'POLEbtnAll');

            }


            else if (res === 'MilkRec') {
                document.getElementById(area).value = op;
                $scope.openSpecialScreens('mysidenavRightTruck', 'POTEbtnAll');

            }
            else if (res === 'LITIN2164') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }
            else if (res === 'LITIN2165') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }
            else if (res === 'LITIN2071') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }
            else if (res === 'LITIN2080MT101') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }

            else if (res === 'LITIN2080MT102') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }

            else if (res === 'LITIN2080MT261') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }

            else if (res === 'LITIN2080MT262') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }

            else if (res === 'LITIN2080MT501') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }

            else if (res === 'LITIN2080MT701') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }

            else if (res === 'LITIN0055') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }

            else if (res === 'LITIN2166') {
                tr = res.substring(3);
                document.getElementById(area.substring(0, 7)).value = op;
                document.getElementById('Tranx').value = tr;

                $scope.openSpecialScreens('mysidenavRightLIT', 'POLTbtn');

            }


        };





        //################## End Modal ############//

        //COMMON FUNCTIONS 

        $scope.deleteMainProject = function () {
            console.log('Project Deleted');
            console.log(objarray);
            LRSWebService.deleteMainProject(objarray).success(function (data) {

                // $scope.gridApi.core.refresh();
                $scope.loadGrid();
            });
        };

        $scope.addMainProject = function () {


            if (document.getElementById('ProjectName').value === "" || document.getElementById('ProjectName').value === null) {

                alert('Select A Project from the Left Grid!');
            }
            else {



                var ProjectNameValue = document.getElementById('ProjectName').value;
                var DescriptionValue = document.getElementById('Description').value;
                var requestorValue = document.getElementById('requestor').value;
                var EstTotalHoursValue = document.getElementById('EstTotalHours').value;
                var EstStartDateDValue = $scope.FormatDT(document.getElementById('EstStartDateD').value);
                var EstCompleteDateDValue = $scope.FormatDT(document.getElementById('EstCompleteDateD').value);
                var PriorityValue = document.getElementById('Priority').value;
                var StatusValue = document.getElementById('StatusID').value;
                var row_idValue = document.getElementById('row_id').value;

                if (StatusValue !== '0-PendingApproval') {

                    LRSWebService.addMainProject(ProjectNameValue, DescriptionValue, requestorValue, EstTotalHoursValue, EstStartDateDValue, EstCompleteDateDValue, PriorityValue, StatusValue, row_idValue).success(function (data) {


                        // $scope.gridApi.core.refresh();

                        document.getElementById('ProjectName').value = "";
                        document.getElementById('CompleteRatio').value = "";
                        document.getElementById('Description').value = "";
                        document.getElementById('requestor').value = "";
                        document.getElementById('EstTotalHours').value = "";
                        document.getElementById('EstStartDate').value = "";
                        document.getElementById('EstStartDateD').value = "";
                        document.getElementById('EstCompleteDate').value = "";
                        document.getElementById('EstCompleteDateD').value = "";
                        document.getElementById('Priority').value = "";
                        document.getElementById('PriorityDropdown').value = "";
                        document.getElementById('StatusID').value = "";
                        document.getElementById('StatusDropdown').value = "";
                        document.getElementById('HoursSpent').value = "";
                        document.getElementById('row_id').value = "";
                        $scope.cancelModal('mysidenavRightDash');
                        $scope.refreshGrid();

                    });
                    console.log('New Project Added');
                }
                else {

                    if (document.getElementById('LoggedIn').value === "hasanif" || document.getElementById('LoggedIn').value === "haywood") {

                        LRSWebService.addMainProject(ProjectNameValue, DescriptionValue, requestorValue, EstTotalHoursValue, EstStartDateDValue, EstCompleteDateDValue, PriorityValue, StatusValue, row_idValue).success(function (data) {


                            // $scope.gridApi.core.refresh();

                            document.getElementById('ProjectName').value = "";
                            document.getElementById('CompleteRatio').value = "";
                            document.getElementById('Description').value = "";
                            document.getElementById('requestor').value = "";
                            document.getElementById('EstTotalHours').value = "";
                            document.getElementById('EstStartDate').value = "";
                            document.getElementById('EstStartDateD').value = "";
                            document.getElementById('EstCompleteDate').value = "";
                            document.getElementById('EstCompleteDateD').value = "";
                            document.getElementById('Priority').value = "";
                            document.getElementById('PriorityDropdown').value = "";
                            document.getElementById('StatusID').value = "";
                            document.getElementById('StatusDropdown').value = "";
                            document.getElementById('HoursSpent').value = "";
                            document.getElementById('row_id').value = "";

                            $scope.cancelModal('mysidenavRightDash');
                            $scope.refreshGrid();

                        });
                        console.log('New Project Added2');
                    }

                    else {
                        alert('Not Authorized!');
                    }


                }
                $scope.loadGrid();

            }

        };

        $scope.ApproveProject = function () {
            if (document.getElementById('ProjectName').value === "" || document.getElementById('ProjectName').value === null) {

                alert('Select A Project from the Left Grid!');
            }
            else {

                document.getElementById('StatusID').value = '1-NOTStarted'
                $scope.addMainProject();
            }
        };


        $scope.LoadTask = function () {
            $('#TaskDisplay').trigger('click');

        };
        $scope.LoadEstimates = function () {
            $('#EstDisplay').trigger('click');

        };
        $scope.LoadCM = function () {
            $('#CMDisplay').trigger('click');

        };
        $scope.clearFilters = function () {
            console.log('Clear Filters');
            $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
        };

        $scope.closeAll = function () {
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightCons').style.width = '0';
            document.getElementById('mysidenavRightProd').style.width = '0';
            document.getElementById('mysidenavRightSummary').style.width = '0';
            document.getElementById('mysidenavRightTruck').style.width = '0';
            document.getElementById('mysidenavRightQuality').style.width = '0';
            document.getElementById('mysidenavRightLabel').style.width = '0';
            document.getElementById('mysidenavRightINV').style.width = '0';
            document.getElementById('mysidenavRightTicket').style.width = '0';
        };

        $scope.openDIV = function (nav) {

            //document.getElementById('mysidenavRightLabel').style.width = '0';
            //document.getElementById('mysidenavRightINV').style.width = '0';
            //document.getElementById('mysidenavRightTicket').style.width = '0';
            document.getElementById(nav).style.width = '90.352%';
        };

        $scope.ProjectDDList = null;
        $scope.listProjectDD = function () {

            var prjname = [];
            LRSWebService.listProjectDD().success(function (data) {
                //  console.log('Listed Ongoing Projects' + data.listProjectList[0]);

                var prjlist = JSON.stringify(data);

                var JSONObject = JSON.parse(prjlist);
                //console.log(JSONObject["listProjectList"].length);
                for (var i = 0; i < JSONObject["listProjectDD"].length; i++) {
                    prjname.push(JSONObject["listProjectDD"][i]["ProjectDDName"])
                    //console.log(prjname);
                }
                $scope.ProjectDDList = prjname;
                // console.log($scope.ProjectsList);
                //$scope.loadGrid();
            });
        };
        //$scope.listProjectDD();





      

        $scope.FormatDT = function (date) {
            var d = new Date(date),


                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');

            //   date: new Date(),
            //   time: new Date($filter('d')(new Date(), 'yyyy-MM-dd HH:mm'))


        }

        $scope.FormatTM = function (date) {
            var d = new Date(date),
                // var e = new Timestamp(date),

                hour = '' + (d.getHours() + 1),
                minute = '' + d.getMinutes(),
                second = d.getSeconds();

            if (hour.length < 2) hour = '0' + hour;
            if (minute.length < 2) minute = '0' + minute;
            if (second.length < 2) second = '0' + second;
            return [hour, minute, second].join(':');
            //return [d];


        }

        $scope.getTimeStamp = function (controlname) {
            var d = new Date();
            //sttime = sttime.replace(/,\s?/g, " ");
            //sttime = sttime.split(' ')[0];



            //  var d = new Date(date),
            month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            var sttime = [year, month, day].join('-');

            document.getElementById(controlname).value = sttime;
        };


        //####Autopopulate screen function area#################//
        $scope.FormatDTSlash = function (date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [month, day, year].join('/');

        };




        $scope.AutoPopulateDATE = function () {
            var sttime = new Date().toLocaleString();
            sttime = sttime.replace(/,\s?/g, " ");
            var sttimeY = new Date();
            sttimeY.setDate(sttimeY.getDate() + 1);
            sttimeY = sttimeY.getFullYear() + '-' + (sttimeY.getMonth() + 1) + '-' + sttimeY.getDate();
            sttimeY = sttimeY.replace(/,\s?/g, " ");
            document.getElementById('MainClock').value = $scope.FormatDTSlash(sttimeY);

        };
       // $scope.AutoPopulateDATE();


        addEventListener("click", function () {
            var
                el = document.documentElement
                , rfs =
                    el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                ;
            //rfs.call(el);
            // $scope.ScrAdjust();

            document.getElementById("start-menu-modal").style.visibility = 'hidden';
        });




    }

 

})();

function ChooseProjectNameDD(data) {
    
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("ProjectName").value= dataRec;


}
function ChooseStatus(data) {
    var dataRec = data.value.replace(/string:/g, "")
    
    document.getElementById("StatusID").value = dataRec;


}

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
   // var id = setInterval(frame, 100);
    var percent = document.getElementById("CompleteRatio").value
    
    document.getElementById("percent1").value = percent.substr(0, percent.indexOf('/'));
    document.getElementById("percent2").value = /[^/]*$/.exec(percent)[0];
    var complete = (document.getElementById("percent1").value / document.getElementById("percent2").value) * 100;
    complete = Math.round(complete * 100) / 100;
    document.getElementById("percent").value = complete;
    document.getElementById("myBar").innerHTML = complete +'%'; 
    //function frame() {
    //    if (width >= 100) {
    //        clearInterval(id);
    //    } else {
    //       // width++;
    //        //width=23;
            width = 0;
            elem.style.width = width + '%';
            width = complete;
            elem.style.width = width + '%';
            document.getElementById("percent1").value = "";
            document.getElementById("percent2").value = "";
            document.getElementById("percent").value = "";

            

    //    }
    //}

            if (complete > 0 && complete < 11) {
                document.getElementById('progimage').src = '../pmI.png';
            }
            else if (complete > 10 && complete < 21)
            {
                document.getElementById('progimage').src = '../pmA.png';
            }
            else if (complete > 21 && complete < 71) {
                document.getElementById('progimage').src = '../pmD.png';
            }
            else if (complete > 70 && complete < 101) {
                document.getElementById('progimage').src = '../pmR.png';
            }
            else {
                document.getElementById('progimage').src = '../pm.png';
            }
}
function retract() {
    var elem = document.getElementById("myBar");
    var width = 1;
   // var id = setInterval(frame, 100);
    //function frame() {
        //if (width >= 100) {
        //    clearInterval(id);
        //} else {
            // width++;
            //width=23;
            width = 0;
            elem.style.width = width + '%';
            document.getElementById("percent1").value = "";
            document.getElementById("percent2").value = "";
            document.getElementById("percent").value = "";
            document.getElementById("myBar").innerHTML = "";

        //}
   // }
            document.getElementById('progimage').src = '../pm.png';
}



var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML === this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt === y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


$(document).ready(function () {
    clockUpdate();
    setInterval(clockUpdate, 1000);
})

function clockUpdate() {
    var date = new Date();
    $('.digital-clock').css({ 'color': '#fff', 'text-shadow': '0 0 6px #ff0' });
    function addZero(x) {
        if (x < 10) {
            return x = '0' + x;
        } else {
            return x;
        }
    }

    function twelveHour(x) {
        if (x > 12) {
            return x = x - 12;
        } else if (x === 0) {
            return x = 12;
        } else {
            return x;
        }
    }

    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());

    $('.digital-clock').text(h + ':' + m + ':' + s)
}



