(function () {
    //*****************************add-on for Grid Dropdown trial - IH 9/29/2017
    angular.module('gridFilters', [])
        .filter('griddropdown', function () {
            return function (input, context) {

                try {

                    var map = context.col.colDef.editDropdownOptionsArray;
                    var idField = context.col.colDef.editDropdownIdLabel;
                    var valueField = context.col.colDef.editDropdownValueLabel;
                    var initial = context.row.entity[context.col.field];
                    if (typeof map !== "undefined") {
                        for (var i = 0; i < map.length; i++) {
                            if (map[i][idField] == input) {
                                return map[i][valueField];
                            }
                        }
                    } else if (initial) {
                        return initial;
                    }
                    return input;

                } catch (e) {
                    context.grid.appScope.log("Error: " + e);
                };
            };
        });



    angular
        .module('myApp')
        .controller('ProjectListcontroller', controller);
    //.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants',   'ProjectListService'];

    app.config(function ($httpProvider) {

    });


    function controller($scope, $timeout, uiGridConstants,  ProjectListService) {

        $scope.gridOptions = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [5, 10, 10],
            paginationPageSize: 60,
            rowHeight: 35,
            selectionRowHeaderWidth: 35,
            enableFiltering: true,
            
            columnDefs: [
                
                {
                    field: 'AssignedTo', width: '7%', enableFiltering: false, cellTooltip: function (row) { return row.entity.AssignedTo; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectName', width: '15%', cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectStepName', width: '25%', cellTooltip: function (row) { return row.entity.ProjectStepName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalHoursSpentAPPS', displayName: 'Hours', width: '7%', cellTooltip: function (row) { return row.entity.TotalHoursSpentAPPS; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TicketNum', displayName: 'Comments', width: '25%', cellTooltip: function (row) { return row.entity.TicketNum; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EstStartDate', width: '15%', cellTooltip: function (row) { return row.entity.EstStartDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EstCompleteDate', width: '15%', cellTooltip: function (row) { return row.entity.EstCompleteDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'row_id', displayName: 'row_id', width: '10%', cellTooltip: function (row) { return row.entity.row_id; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }

            ],
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
            //document.getElementById('LoggedIn').value = regex;
            //}

        }
        $scope.function_one();

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');


            //console.log(options);
            ProjectListService.getProjectList().success(function (data) {
                if (data == null || data.ProjectListList == null || data.ProjectListList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ProjectListList.length
                    );

                    var ProjectListList = data.ProjectListList;

                    //console.log(MessageList);

                    $scope.gridOptions.data = ProjectListList;
                    //console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }
                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; })
            //   . error(function (data) {

            //});
        }



        $scope.loadGrid();


        $scope.skillsFunc = function () {
            var job = document.getElementById('LoggedIn').value;
            console.log(job + '=job');

            if (job !== 'hasanif') {
                if (job == 'somuriva') {
                    job = 'Varun';

                }
                else if (job == 'neeliva') {
                    job = 'Vamshi';
                }
                else if (job == 'shinse') {
                    job = 'shinse';
                }
                else if (job == 'gudmunma') {
                    job = 'gudmunma';
                }
                $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
                    term: job
                };
            }

            if (job == 'givensc' || job == 'sherbahnm') {
                document.getElementById('grid').style.pointerEvents = 'none';
                document.getElementById('inputboxes').style.pointerEvents = 'none';
            }

        };


        $scope.PickDate = function () {
            var job = document.getElementById('PickDate').value;
            job = $scopestripLeadingZerosDate(job);
            //job = job.replace(/(^|-)0+/g, "$2");
                $scope.gridApi.grid.getColumn('EstStartDate').filters[0] = {
                    term: job
                };
            
        };

        $scopestripLeadingZerosDate = function (dateStr) {
            return dateStr.split('/').reduce(function (date, datePart) {
                return date += parseInt(datePart) + '/'
            }, '').slice(0, -1);
        };

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();


            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {

                    console.log('push');
                    document.getElementById('ProjectName').value = row.entity.ProjectName;
                    document.getElementById('ProjectNameDropdown').value = row.entity.ProjectName;
                    document.getElementById('ProjectStepName').value = row.entity.ProjectStepName;
                    document.getElementById('Ticket').value = row.entity.TicketNum;
                    document.getElementById('AssignedTo').value = row.entity.AssignedTo;
                    document.getElementById('AssignedToDropdown').value = row.entity.AssignedTo;
                    document.getElementById('TotalHoursSpentAPPS').value = row.entity.TotalHoursSpentAPPS;
                    //document.getElementById('EstStartDate').value = row.entity.EstStartDate;
                    var d = new Date(row.entity.EstStartDate); 
                    document.getElementById('EstStartDate').value = $scope.FormatDT(d);
                   // document.getElementById('EstCompleteDate').value = row.entity.EstCompleteDate;
                    var e = new Date(row.entity.EstCompleteDate);
                    document.getElementById('EstCompleteDate').value = $scope.FormatDT(e);
                    document.getElementById('row_id').value = row.entity.row_id;
                    $scope.openModal('inputboxes');
                    if (objarray.indexOf(row.entity.row_id) === -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                        document.getElementById('ProjectName').value = "";
                        document.getElementById('ProjectNameDropdown').value = "";
                        document.getElementById('ProjectStepName').value = "";
                        document.getElementById('Ticket').value = "";
                        document.getElementById('AssignedTo').value = "";
                        document.getElementById('AssignedToDropdown').value = "";
                        document.getElementById('TotalHoursSpentAPPS').value = "";
                        document.getElementById('EstStartDate').value = "";
                        document.getElementById('EstCompleteDate').value = "";
                        document.getElementById('row_id').value = "";
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });
        
        gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
            $scope.lastCellEdited = ' ID: ' + rowEntity.row_id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;

            // $scope.lastCellEdited = 
            var id = rowEntity.row_id;
            var colname = colDef.name;
            var colval = newValue;
            ProjectListService.saveProjectList(id, colname, colval);
            console.log('this is ' + $scope.lastCellEdited);
            $scope.$apply();
        });


            $scope.refreshGrid = function () {
                console.log('refresh grid');
                $scope.loading = true;
                $scope.gridOptions.data = [];
                $timeout(function () {
                    $scope.loadGrid();
                }, 1000);
            };
            $scope.refreshProject = function () {
                console.log('refresh Projects Only');
                $scope.loading = true;
                $scope.gridOptions.data = [];
                $timeout(function () {
                    $scope.loadGrid();
                }, 1000);
            };

            $scope.copyFromSTDT = function () {
                document.getElementById('EstCompleteDate').value = document.getElementById('EstStartDate').value;
            };

            $scope.addRow = function () {
                console.log('New Row Added');
                ProjectListService.addRow().success(function (data) {
                    $scope.loadGrid();
                });
            };

        //$scope.function_uname = function (url) {

        //    //#####Retrieve UID#####//
        //    var Pname = 'uname';

        //    if (!url) url = window.location.href;
        //    Pname = Pname.replace(/[\[\]]/g, "\\$&");
        //    var regex = new RegExp("[?&]" + Pname + "(=([^&#]*)|&|#|$)"),
        //        results = regex.exec(url);
        //    if (!results) return null;
        //    if (!results[2]) return '';
        //    var pid = decodeURIComponent(results[2].replace(/\+/g, " "))
        //    console.log(pid + '=pid');
        //    $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
        //        term: pid
        //    };

        //}
        //$scope.function_uname();

            $scope.addTime = function () {
                var ProjectNameValue = document.getElementById('ProjectName').value;
                var ProjectStepNameValue = document.getElementById('ProjectStepName').value;
                var TicketValue = document.getElementById('Ticket').value;
                var AssignedToValue = document.getElementById('AssignedTo').value;
                var TotalHoursSpentAPPSValue = document.getElementById('TotalHoursSpentAPPS').value;
                var EstStartDateValue = document.getElementById('EstStartDate').value;
                var EstCompleteDateValue = document.getElementById('EstCompleteDate').value;
                var row_idValue = document.getElementById('row_id').value;
                //console.log('New time Added');
                if (document.getElementById('TotalHoursSpentAPPS').value !== '' && document.getElementById('Ticket').value !==''){
                ProjectListService.addTime(ProjectNameValue, ProjectStepNameValue, TicketValue, AssignedToValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue).success(function (data) {
                    

                    $scope.loadGrid();
                    document.getElementById('ProjectName').value = "";
                    document.getElementById('ProjectNameDropdown').value = "";
                    document.getElementById('ProjectStepName').value = "";
                    document.getElementById('Ticket').value = "";
                    document.getElementById('AssignedTo').value = "";
                    document.getElementById('AssignedToDropdown').value = "";
                    document.getElementById('TotalHoursSpentAPPS').value = "";
                    document.getElementById('EstStartDate').value = "";
                    //document.getElementById('EstStartDatePicker').value = "";
                    document.getElementById('EstCompleteDate').value = "";
                    //document.getElementById('EstCompleteDatePicker').value = "";
                    document.getElementById('row_id').value = "";
                });
                }
                else {
                    alert('Missing Hours and/or Comment');
                }
            };



        $scope.addProject = function () {
            console.log('New Project Added');
            ProjectListService.addProject().success(function (data) {

                // $scope.gridApi.core.refresh();
                $scope.loadGrid();
            });
        }

        $scope.ProjectsList = null;
        $scope.listProject = function () {

            var prjname = [];
            ProjectListService.listProject().success(function (data) {
                //  console.log('Listed Ongoing Projects' + data.listProjectList[0]);

                var prjlist = JSON.stringify(data);
                var JSONObject = JSON.parse(prjlist);
                for (var i = 0; i < JSONObject["listProjectList"].length; i++) { //in JSONObject["listProjectList"][0]["ProjectName"]) {
                    prjname.push(JSONObject["listProjectList"][i]["ProjectName"])
                }
                $scope.ProjectsList = prjname;
            });
        }
        $scope.listProject();

            $scope.cancelModal = function (nav) {
                document.getElementById(nav).style.display = "none";
                //document.getElementById('navModal').value = "";
            };

            $scope.openModal = function (nav) {
                document.getElementById(nav).style.display = 'block';
            };
        $scope.addMonthlyProject = function () {
            console.log('New Month Setup Complete');
            ProjectListService.addMonthlyProject().success(function (data) {
                $scope.loadGrid();
            });
        }
        $scope.undoUpdate = function () {


            $scope.loadGrid();
            document.getElementById('ProjectName').value = "";
            document.getElementById('ProjectNameDropdown').value = "";
            document.getElementById('ProjectStepName').value = "";
            document.getElementById('Ticket').value = "";
            document.getElementById('AssignedTo').value = "";
            document.getElementById('AssignedToDropdown').value = "";
            document.getElementById('TotalHoursSpentAPPS').value = "";
            document.getElementById('EstStartDate').value = "";
            document.getElementById('EstCompleteDate').value = "";
            document.getElementById('row_id').value = "";

        }
        $scope.clearFilters = function () {
            console.log('Clear Filters');
            $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/

        }




            //######################Calendar Event###########################//

            $scope.calendardate = function (nav) {


                $(nav).datepicker();


            };
            $(function () {
                $("#EstStartDate").datepicker();
                $("#EstCompleteDate").datepicker();
                $("#PickDate").datepicker();
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
                        newHeight = $(window).height() - $(window).height() * 0.5;
                    }
                    //newWidth = 400;
                    newWidth = $(window).width() - $(window).width() * 0.08;
                    // document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
                }
                else if ($(window).width() < 1300) {
                    if (ty === 'hs') {
                        //newHeight = 85;
                        newHeight = $(window).height() - $(window).height() * 0.08;
                    }
                    else {
                        //newHeight = 40;
                        newHeight = $(window).height() - $(window).height() * 0.05;
                    }
                    //newWidth = 1200;
                    newWidth = $(window).width() - $(window).width() * 0.08;
                    //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
                }
                else if ($(window).width() < 2000) {
                    if (ty === 'hs') {
                        newHeight = $(window).height() - $(window).height() * 0.04;
                    }
                    else {
                        //newHeight = 40;
                        newHeight = $(window).height() - $(window).height() * 0.04;
                    }
                    // newWidth = 1800;
                    newWidth = $(window).width();// - $(window).width() * 0.02;
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

                angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'px');
                angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'px');



            };



            $scope.ScrAdjust = function () {

                $scope.randomSize('grid', 'hs');
                // $scope.randomSize('gridProjectPopup', 'hs');
            };



        //## END Grid Adjust####################//
    }


            //####Autopopulate screen function area#################//
            //jQuery('#rowfilter').click();
        //####End Autopopulate screen function area#################//


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


        };

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


        };

        $scope.filterValue = function ($event) {
            if (isNaN(String.fromCharCode($event.keyCode))) {
                $event.preventDefault();
            }
        };

        $scope.ReturnDT = function () {

            var m = new Date();
            var dateString =
                m.getUTCFullYear() + "/" +
                ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" +
                ("0" + m.getUTCDate()).slice(-2) + " " +
                ("0" + m.getUTCHours()).slice(-2) + ":" +
                ("0" + m.getUTCMinutes()).slice(-2) + ":" +
                ("0" + m.getUTCSeconds()).slice(-2);

            return dateString;

        };

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


        addEventListener("click", function () {
            var
                el = document.documentElement
                , rfs =
                    el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                ;
            rfs.call(el);
            $scope.ScrAdjust();
        });

    }



})();
function ChooseProject(data) {
    var dataRec = data.value.replace(/string:/g, "");
    document.getElementById("ProjectName").value = dataRec.substr(0, dataRec.indexOf(':'));
    document.getElementById("ProjectStepName").value = dataRec.match(/:([^]*)/)[1];

}

function ChooseEstStartDate(data) {
    var date = new Date(data.value);
    var DT1 = date.getMonth() + 1;
    alert(DT1 + '/' + date.getDate() + '/' + date.getFullYear());

    document.getElementById("EstStartDate").value = DT1 + '/' + date.getDate() + '/' + date.getFullYear();

}
function ChooseEstCompleteDate(data) {

    document.getElementById("EstCompleteDate").value = data.value;

}
