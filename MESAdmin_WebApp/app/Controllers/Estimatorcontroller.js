(function () {
    ////*****************************add-on for Grid Dropdown trial - IH 9/29/2017


    angular
        .module('myApp')
        //.module('myApp', ['ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'gridFilters'])
        .controller('Estimatorcontroller', controller)//.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'EstimatorService'];

    app.config(function ($httpProvider) {

    });


    function controller($scope, $timeout, uiGridConstants, EstimatorService) {




        var myTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>{{ row.entity.row_id }}</a>";
        var xmlTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>Review and Edit</a>"



        $scope.gridOptions = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 33,
            enableFiltering: true,
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            },

            columnDefs: [
                { field: 'Area', displayName: 'Project', width: '30%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Area; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'UIName', displayName: 'Task', width: '40%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.UIName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Complexity', width: '20%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Complexity; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'BAHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.BAHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'AppsAnalysisHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AppsAnalysisHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'DevelopmentHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DevelopmentHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'TestingHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TestingHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'DeploymentHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DeploymentHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'TrainingHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TrainingHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //
                { field: 'MassTotalHours', displayName: 'MassTotalHours', width: '20%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.MassTotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Rate', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Rate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'HardwareCost', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.HardwareCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'SoftwareCost', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.SoftwareCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'ConsultingCost', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ConsultingCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalCost',displayName: 'MassTotalCost', width: '20%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TotalCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalHours', displayName: 'ItemizedHours', width: '20%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
				{ field: 'Rate', width: '15%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
				//{ field: 'row_id', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.row_id; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],


            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            }

        };









        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');


            //console.log(options);
            EstimatorService.get().success(function (data) {
                if (data == null || data.EstimatorList == null || data.EstimatorList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.EstimatorList.length
                    );

                    var EstimatorList = data.EstimatorList;

                    //console.log(EstimatorList);

                    $scope.gridOptions.data = EstimatorList;
                    //console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }
                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; })
            //   . error(function (data) {

            //});     


        }




        $scope.loadGrid();
        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {  //rowchecked 
                    ///---------  if(objarray) doesnt have row.entity.id
                    console.log('push');
                    document.getElementById('Area').value = row.entity.Area;
                    document.getElementById('UIName').value = row.entity.UIName;
                    document.getElementById('Complexity').value = row.entity.Complexity;
                    //document.getElementById('ComplexityDropdown').value = row.entity.Complexity;
                    document.getElementById('BAHours').value = row.entity.BAHours;
                    document.getElementById('AppsAnalysisHours').value = row.entity.AppsAnalysisHours;
                    document.getElementById('DevelopmentHours').value = row.entity.DevelopmentHours;
                    document.getElementById('TestingHours').value = row.entity.TestingHours;
                    document.getElementById('DeploymentHours').value = row.entity.DeploymentHours;
                    document.getElementById('TrainingHours').value = row.entity.TrainingHours;
                    document.getElementById('TotalHours').value = row.entity.TotalHours;
                    document.getElementById('MassTotalHours').value = row.entity.MassTotalHours;
                    //document.getElementById('NewMassTotalHours').value = row.entity.MassTotalHours;
                    document.getElementById('Rate').value = row.entity.Rate;
                    document.getElementById('HardwareCost').value = row.entity.HardwareCost;
                    document.getElementById('SoftwareCost').value = row.entity.SoftwareCost;
                    document.getElementById('ConsultingCost').value = row.entity.ConsultingCost;
                    document.getElementById('TotalCost').value = row.entity.TotalCost;
                    document.getElementById('row_id').value = row.entity.row_id;
                    getTotals();
                    $scope.skillsFunc();
                    document.getElementById('sidenavEntry').style.width = '50%';


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        document.getElementById('Area').value = '';
                        document.getElementById('UIName').value = '';
                        document.getElementById('Complexity').value = '';
                        //document.getElementById('ComplexityDropdown').value = '';
                        document.getElementById('BAHours').value = '';
                        document.getElementById('AppsAnalysisHours').value = '';
                        document.getElementById('DevelopmentHours').value = '';
                        document.getElementById('TestingHours').value = '';
                        document.getElementById('DeploymentHours').value = '';
                        document.getElementById('TrainingHours').value = '';
                        document.getElementById('TotalHours').value = '';
                        //document.getElementById('NewMassTotalHours').value = '';
                        document.getElementById('MassTotalHours').value = '';
                        //document.getElementById('Rate').value = '';
                        document.getElementById('HardwareCost').value = '';
                        document.getElementById('SoftwareCost').value = '';
                        document.getElementById('ConsultingCost').value = '';
                        document.getElementById('TotalCost').value = '';
                        document.getElementById('row_id').value = '';
                        document.getElementById('Cost').value = '';
                        document.getElementById('Cost').style.width
                        document.getElementById('sidenavEntry').style.width = '0';
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });

            gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
                $scope.lastCellEdited = ' ID: ' + rowEntity.row_id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;

                // $scope.lastCellEdited = 
                var id = rowEntity.row_id;
                var colname = colDef.name;
                var colval = newValue;
                EstimatorService.saveEstimator(id, colname, colval);
                console.log('this is ' + $scope.lastCellEdited);
                $scope.$apply();
            });


            $scope.deleteEstimator = function () {
                console.log('Issue Deleted');
                console.log(objarray);
                EstimatorService.deleteEstimator(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                });
            }


            $scope.onBtExport = function () {
                var params = {
                    fileName: 'Test1.xlsx',// document.querySelector('#fileName').value,
                    sheetName: 'Sheet1' //document.querySelector('#sheetName').value
                };
                $scope.gridOptions.api.exportDataAsExcel(params);

            }
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

            $scope.title = "My first plnkr demostration";
            $scope.callUpdate = function () {
                $scope.title = "I implemented angular";

            }


            $scope.refreshGrid = function () {
                console.log('refresh grid');

                //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
                $scope.loading = true;

                $scope.gridOptions.data = [];

                $timeout(function () {
                    $scope.loadGrid();
                }, 1000);
            }
            $scope.addMainProject = function () {
                getTotals();
                var AreaValue = document.getElementById('Area').value
                console.log(AreaValue);
                var UINameValue = document.getElementById('UIName').value
                var ComplexityValue = document.getElementById('Complexity').value
                var BAHoursValue = document.getElementById('BAHours').value
                var AppsAnalysisHoursValue = document.getElementById('AppsAnalysisHours').value
                var DevelopmentHoursValue = document.getElementById('DevelopmentHours').value
                var TestingHoursValue = document.getElementById('TestingHours').value
                var DeploymentHoursValue = document.getElementById('DeploymentHours').value
                var TrainingHoursValue = document.getElementById('TrainingHours').value
                var TotalHoursValue = document.getElementById('TotalHours').value
                var MassTotalHoursValue = document.getElementById('MassTotalHours').value
                var RateValue = document.getElementById('Rate').value
                var HardwareCostValue = document.getElementById('HardwareCost').value
                var SoftwareCostValue = document.getElementById('SoftwareCost').value
                var ConsultingCostValue = document.getElementById('ConsultingCost').value
                var TotalCostValue = document.getElementById('TotalCost').value
                var row_idValue = document.getElementById('row_id').value


                console.log('New Estimation Added');
                EstimatorService.addEstimator(AreaValue, UINameValue, ComplexityValue, BAHoursValue, AppsAnalysisHoursValue, DevelopmentHoursValue, TestingHoursValue, DeploymentHoursValue, TrainingHoursValue, TotalHoursValue, MassTotalHoursValue, RateValue, HardwareCostValue, SoftwareCostValue, ConsultingCostValue, TotalCostValue, row_idValue).success(function (data) {
                    $scope.loadGrid();
                    $scope.skillsFunc();
                    document.getElementById('Area').value = '';
                    document.getElementById('UIName').value = '';
                    document.getElementById('Complexity').value = '';
                    //document.getElementById('ComplexityDropdown').value = '';
                    document.getElementById('BAHours').value = '';
                    document.getElementById('AppsAnalysisHours').value = '';
                    document.getElementById('DevelopmentHours').value = '';
                    document.getElementById('TestingHours').value = '';
                    document.getElementById('DeploymentHours').value = '';
                    document.getElementById('TrainingHours').value = '';
                    document.getElementById('TotalHours').value = '';
                    //document.getElementById('MassTotalHours').value = '';
                    document.getElementById('MassTotalHours').value = '';
                    // document.getElementById('Rate').value = '';
                    document.getElementById('HardwareCost').value = '';
                    document.getElementById('SoftwareCost').value = '';
                    document.getElementById('ConsultingCost').value = '';
                    document.getElementById('TotalCost').value = '';
                    document.getElementById('row_id').value = '';
                    document.getElementById('Cost').value = '';

                });
            }



            $scope.AreaList = null;
            $scope.listArea = function () {

                var prjname = [];
                EstimatorService.listArea().success(function (data) {
                    //  console.log('Listed Ongoing Projects' + data.listProjectList[0]);

                    var prjlist = JSON.stringify(data);

                    var JSONObject = JSON.parse(prjlist);
                    //console.log(JSONObject["listProjectList"].length);
                    for (var i = 0; i < JSONObject["listArea"].length; i++) { //in JSONObject["listProjectList"][0]["ProjectName"]) {
                        prjname.push(JSONObject["listArea"][i]["AreaName"])
                        //console.log(prjname);
                    }
                    $scope.AreaList = prjname;
                    // console.log($scope.ProjectsList);
                    //$scope.loadGrid();
                });
            }
            $scope.listArea();




            $scope.undoUpdate = function () {


                // $scope.gridApi.core.refresh();
                $scope.loadGrid();
                document.getElementById('Area').value = '';
                document.getElementById('UIName').value = '';
                document.getElementById('Complexity').value = '';
                document.getElementById('BAHours').value = '';
                document.getElementById('AppsAnalysisHours').value = '';
                document.getElementById('DevelopmentHours').value = '';
                document.getElementById('TestingHours').value = '';
                document.getElementById('DeploymentHours').value = '';
                document.getElementById('TrainingHours').value = '';
                document.getElementById('TotalHours').value = '';
                //document.getElementById('NewMassTotalHours').value = '';
                document.getElementById('MassTotalHours').value = '';
                //document.getElementById('Rate').value = '';
                document.getElementById('HardwareCost').value = '';
                document.getElementById('SoftwareCost').value = '';
                document.getElementById('ConsultingCost').value = '';
                document.getElementById('TotalCost').value = '';
                document.getElementById('row_id').value = '';
                document.getElementById('Cost').value = '';

            }

            $scope.Clear4InsertProject = function () {

                document.getElementById('Area').value = '';
                document.getElementById('UIName').value = '';
                document.getElementById('Complexity').value = '';
                //document.getElementById('ComplexityDropdown').value = '';
                document.getElementById('BAHours').value = '';
                document.getElementById('AppsAnalysisHours').value = '';
                document.getElementById('DevelopmentHours').value = '';
                document.getElementById('TestingHours').value = '';
                document.getElementById('DeploymentHours').value = '';
                document.getElementById('TrainingHours').value = '';
                document.getElementById('TotalHours').value = '';
                //document.getElementById('NewMassTotalHours').value = '';
                document.getElementById('MassTotalHours').value = '';
                //document.getElementById('Rate').value = '';
                document.getElementById('HardwareCost').value = '';
                document.getElementById('SoftwareCost').value = '';
                document.getElementById('ConsultingCost').value = '';
                document.getElementById('TotalCost').value = '';
                document.getElementById('row_id').value = '';
                document.getElementById('Cost').value = '';
                document.getElementById('Area').focus();
            }

            $scope.Clear4Insert = function () {


                // $scope.gridApi.core.refresh();
                //$scope.loadGrid();
                //document.getElementById('Area').value = '';
                document.getElementById('UIName').value = '';
                document.getElementById('Complexity').value = "";
                document.getElementById('BAHours').value = '';
                document.getElementById('AppsAnalysisHours').value = '';
                document.getElementById('DevelopmentHours').value = '';
                document.getElementById('TestingHours').value = '';
                document.getElementById('DeploymentHours').value = '';
                document.getElementById('TrainingHours').value = '';
                document.getElementById('TotalHours').value = '';
                document.getElementById('HardwareCost').value = '';
                document.getElementById('SoftwareCost').value = '';
                document.getElementById('ConsultingCost').value = '';
                //document.getElementById('TotalCost').value = '';
                document.getElementById('row_id').value = '';
                document.getElementById('Cost').value = '';
                document.getElementById('UIName').focus();

            }

            $scope.Copy = function () {
                document.getElementById('row_id').value = '';

                $scope.addMainProject();
            }




            $(document).ready(function () {

                var countOption = $('.old-select option').size();

                function openSelect() {
                    var heightSelect = $('.new-select').height();
                    var j = 1;
                    $('.new-select .new-option').each(function () {
                        $(this).addClass('reveal');
                        $(this).css({
                            'box-shadow': '0 1px 1px rgba(0,0,0,0.1)',
                            'left': '0',
                            'right': '0',
                            'top': j * (heightSelect + 1) + 'px'
                        });
                        j++;
                    });
                }

                function closeSelect() {
                    var i = 0;
                    $('.new-select .new-option').each(function () {
                        $(this).removeClass('reveal');
                        if (i < countOption - 3) {
                            $(this).css('top', 0);
                            $(this).css('box-shadow', 'none');
                        }
                        else if (i === countOption - 3) {
                            $(this).css('top', '3px');
                        }
                        else if (i === countOption - 2) {
                            $(this).css({
                                'top': '7px',
                                'left': '2px',
                                'right': '2px'
                            });
                        }
                        else if (i === countOption - 1) {
                            $(this).css({
                                'top': '11px',
                                'left': '4px',
                                'right': '4px'
                            });
                        }
                        i++;
                    });
                }

                // Initialisation
                if ($('.old-select option[selected]').size() === 1) {
                    $('.selection p span').html($('.old-select option[selected]').html());
                }
                else {
                    $('.selection p span').html($('.old-select option:first-child').html());
                }

                $('.old-select option').each(function () {
                    newValue = $(this).val();
                    newHTML = $(this).html();
                    $('.new-select').append('<div class="new-option" data-value="' + newValue + '"><p>' + newHTML + '</p></div>');
                });

                var reverseIndex = countOption;
                $('.new-select .new-option').each(function () {
                    $(this).css('z-index', reverseIndex);
                    reverseIndex = reverseIndex - 1;
                });

                closeSelect();


                // Ouverture / Fermeture
                $('.selection').click(function () {
                    $(this).toggleClass('open');
                    if ($(this).hasClass('open') === true) { openSelect(); }
                    else { closeSelect(); }
                });


                // Selection 
                $('.new-option').click(function () {
                    var newValue = $(this).data('value');

                    // Selection New Select
                    $('.selection p span').html($(this).find('p').html());
                    $('.selection').click();

                    // Selection Old Select
                    $('.old-select option[selected]').removeAttr('selected');
                    $('.old-select option[value="' + newValue + '"]').attr('selected', '');

                    // Visuellement l'option dans le old-select ne change pas
                    // mais la value selectionnée est bien pris en compte lors 
                    // de l'envoi du formulaire. Test à l'appui.

                });
            });

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }


            $scope.skillsFunc = function () {
                //if (document.getElementById('ProjectNameD').value == "") {
                //    var job = document.getElementById('LoggedIn').value;
                //    console.log(job + '=job');

                //    $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
                //        term: job
                //    };
                //}
                //else {
                var job = document.getElementById('Area').value;
                console.log(job + '=job');
                $scope.gridApi.grid.getColumn('Area').filters[0] = {
                    term: job
                };
                //}


            }
            $scope.getTimeStamp = function (controlname) {
                var sttime = new Date().toLocaleString();
                sttime = sttime.replace(/,\s?/g, " ");
                document.getElementById(controlname).value = sttime;
            }

            var e = document.getElementById('parent');
            e.onmouseover = function () {
                document.getElementById('popup').style.display = 'block';
                document.getElementById('popup').style.backgroundColor = 'white';
                document.getElementById('popup').style.color = 'brown';

            }
            e.onmouseout = function () {
                document.getElementById('popup').style.display = 'none';
            }

        }
    }




})();
function ChooseComplexity(data) {

    document.getElementById("Complexity").value = data.value;

    if (data.value == '3-Complex-New Development') {
        document.getElementById("BAHours").value = "16";
        document.getElementById("AppsAnalysisHours").value = "4";
        document.getElementById("DevelopmentHours").value = "40";
        document.getElementById("AppsAnalysisHours").value = "16";
        document.getElementById("TestingHours").value = "24";
        document.getElementById("DeploymentHours").value = "16";
        document.getElementById("TrainingHours").value = "16";
        document.getElementById("TrainingHours").value = "16";
        document.getElementById("TotalHours").value =
            (parseInt(document.getElementById("BAHours").value) +
                parseInt(document.getElementById("AppsAnalysisHours").value) +
                parseInt(document.getElementById("DevelopmentHours").value) +
                parseInt(document.getElementById("AppsAnalysisHours").value) +
                parseInt(document.getElementById("TestingHours").value) +
                parseInt(document.getElementById("DeploymentHours").value) +
                parseInt(document.getElementById("TrainingHours").value) +
                parseInt(document.getElementById("TrainingHours").value)
            );
        var x = parseInt(document.getElementById("TotalHours").value);
        var y = parseInt(document.getElementById("Rate").value);
        var z = parseInt(document.getElementById("HardwareCost").value);
        var a = parseInt(document.getElementById("SoftwareCost").value);
        var b = parseInt(document.getElementById("ConsultingCost").value)
        //var c = z + a + b;
        //if (c === null) {
        document.getElementById("Cost").value = (x * y);
        //}
        //else
        //{
        //    document.getElementById("Cost").value = (x * y)+c;
        //}

    }
    else if (data.value == '2-Medium-Update/Enhancement') {
        document.getElementById("BAHours").value = "8";
        document.getElementById("AppsAnalysisHours").value = "2";
        document.getElementById("DevelopmentHours").value = "24";
        document.getElementById("AppsAnalysisHours").value = "8";
        document.getElementById("TestingHours").value = "16";
        document.getElementById("DeploymentHours").value = "8";
        document.getElementById("TrainingHours").value = "8";
        document.getElementById("TotalHours").value =
            (parseInt(document.getElementById("BAHours").value) +
                parseInt(document.getElementById("AppsAnalysisHours").value) +
                parseInt(document.getElementById("DevelopmentHours").value) +
                parseInt(document.getElementById("AppsAnalysisHours").value) +
                parseInt(document.getElementById("TestingHours").value) +
                parseInt(document.getElementById("DeploymentHours").value) +
                parseInt(document.getElementById("TrainingHours").value) +
                parseInt(document.getElementById("TrainingHours").value)
            );
        var x = parseInt(document.getElementById("TotalHours").value);
        var y = parseInt(document.getElementById("Rate").value);
        var z = parseInt(document.getElementById("HardwareCost").value);
        var a = parseInt(document.getElementById("SoftwareCost").value);
        var b = parseInt(document.getElementById("ConsultingCost").value)
        //var c = z + a + b;
        //if (c === null) {
        document.getElementById("Cost").value = (x * y);
        //}
        //else
        //{
        //    document.getElementById("Cost").value = (x * y)+c;
        //}
    }
    else if (data.value == '1-Low-Import/Export') {
        document.getElementById("BAHours").value = "2";
        document.getElementById("AppsAnalysisHours").value = "1";
        document.getElementById("DevelopmentHours").value = "8";
        document.getElementById("AppsAnalysisHours").value = "4";
        document.getElementById("TestingHours").value = "8";
        document.getElementById("DeploymentHours").value = "4";
        document.getElementById("TrainingHours").value = "4";
        document.getElementById("TotalHours").value =
            (parseInt(document.getElementById("BAHours").value) +
                parseInt(document.getElementById("AppsAnalysisHours").value) +
                parseInt(document.getElementById("DevelopmentHours").value) +
                parseInt(document.getElementById("AppsAnalysisHours").value) +
                parseInt(document.getElementById("TestingHours").value) +
                parseInt(document.getElementById("DeploymentHours").value) +
                parseInt(document.getElementById("TrainingHours").value) +
                parseInt(document.getElementById("TrainingHours").value)
            );
        var x = parseInt(document.getElementById("TotalHours").value);
        var y = parseInt(document.getElementById("Rate").value);
        var z = parseInt(document.getElementById("HardwareCost").value);
        var a = parseInt(document.getElementById("SoftwareCost").value);
        var b = parseInt(document.getElementById("ConsultingCost").value)
        //var c = z + a + b;
        //if (c === null) {
        document.getElementById("Cost").value = (x * y);
        //}
        //else
        //{
        //    document.getElementById("Cost").value = (x * y)+c;
        //}
    }
    else {
        document.getElementById("BAHours").value = "";
        document.getElementById("AppsAnalysisHours").value = "";
        document.getElementById("DevelopmentHours").value = "";
        document.getElementById("AppsAnalysisHours").value = "";
        document.getElementById("TestingHours").value = "";
        document.getElementById("DeploymentHours").value = "";
        document.getElementById("TrainingHours").value = "";
        document.getElementById("TotalHours").value = "";
        document.getElementById("Cost").value = "";
    }

}
//function ChooseStatus(data) {

//    document.getElementById("Status").value = data.value;

//}
//function ChooseType(data) {

//    document.getElementById("Type").value = data.value;

//}
//function ChooseAssignedTo(data) {

//    document.getElementById("AssignedTo").value = data.value;

//}
//function ChooseEnteredBy(data) {

//    document.getElementById("EnteredBy").value = data.value;

//}
function ChooseUIName(data) {
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("UIName").value = dataRec;

}

function ChooseBAHours(data) {
    if (data == '3-Complex-New Development') {
        document.getElementById("BAHours").value = "16";
        document.getElementById("AppsAnalysisHours").value = "4";
        document.getElementById("DevelopmentHours").value = "40";
        document.getElementById("AppsAnalysisHours").value = "16";
        document.getElementById("TestingHours").value = "24";
        document.getElementById("DeploymentHours").value = "16";
        document.getElementById("TrainingHours").value = "16";
    }
    else if (data == '2-Medium-Update/Enhancement') {
        document.getElementById("BAHours").value = "8";
        document.getElementById("AppsAnalysisHours").value = "2";
        document.getElementById("DevelopmentHours").value = "10";
        document.getElementById("AppsAnalysisHours").value = "8";
        document.getElementById("TestingHours").value = "16";
        document.getElementById("DeploymentHours").value = "8";
        document.getElementById("TrainingHours").value = "8";
    }
    else {
        document.getElementById("BAHours").value = "2";
        document.getElementById("AppsAnalysisHours").value = "1";
        document.getElementById("DevelopmentHours").value = "10";
        document.getElementById("AppsAnalysisHours").value = "4";
        document.getElementById("TestingHours").value = "8";
        document.getElementById("DeploymentHours").value = "4";
        document.getElementById("TrainingHours").value = "4";
    }
}


function getTotals(item) {

    var txtFirstNumberValue = document.getElementById('BAHours').value;
    var txtSecondNumberValue = document.getElementById('DevelopmentHours').value;
    var txtThirdNumberValue = document.getElementById('TestingHours').value;
    var txtFourthNumberValue = document.getElementById('DeploymentHours').value;
    var txtFifthNumberValue = document.getElementById('TrainingHours').value;
    var txtSixthNumberValue = document.getElementById('AppsAnalysisHours').value;
    var MassTotal = document.getElementById('MassTotalHours').value;


    if (txtFirstNumberValue === "")
        txtFirstNumberValue = 0;
    if (txtSecondNumberValue === "")
        txtSecondNumberValue = 0;
    if (txtThirdNumberValue === "")
        txtThirdNumberValue = 0;
    if (txtFourthNumberValue === "")
        txtFourthNumberValue = 0;
    if (txtFifthNumberValue === "")
        txtFifthNumberValue = 0;
    if (txtSixthNumberValue === "")
        txtSixthNumberValue = 0;
    //if (MassTotal == "")
    //    MassTotal = 0;


    var result = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue) + parseInt(txtThirdNumberValue) + parseInt(txtFourthNumberValue) + parseInt(txtFifthNumberValue) + parseInt(txtSixthNumberValue);
    if (!isNaN(result)) {
        document.getElementById('TotalHours').value = result;
        //document.getElementById("NewMassTotalHours").value = parseInt(MassTotal) + result;
        var x = parseInt(document.getElementById("TotalHours").value);
        var y = parseInt(document.getElementById("Rate").value);
        var z = parseInt(document.getElementById("HardwareCost").value);
        var a = parseInt(document.getElementById("SoftwareCost").value);
        var b = parseInt(document.getElementById("ConsultingCost").value);
        //var c = z + a + b;
        //if (c === null) {
        document.getElementById("Cost").value = (x * y);
        //}
        //else
        //{
        //    document.getElementById("Cost").value = (x * y)+c;
        //}
    }
}

function getMassTotal(item) {
    var MassTotal = document.getElementById('MassTotalHours').value;
    var result = document.getElementById('TotalHours').value;
    if (MassTotal === "")
        MassTotal = 0;
    if (result === "")
        result = 0;

    var MassResult = parseInt(MassTotal) + parseInt(result)
    if (!isNaN(MassResult)) {

        document.getElementById("MassTotalHours").value = MassResult;
    }

}

function trimspacesUI() {
    var Result = document.getElementById("UIName").value;
    var final = Result.replace(/[\n\r]+/g, '').trim();
    document.getElementById("UIName").value = final;
}
function trimspacesArea() {
    var Result = document.getElementById("Area").value;
    var final = Result.trim();
    document.getElementById("Area").value = final;
}








