(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('ProjectListcontroller', controller).controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ProjectListService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $timeout, uiGridConstants, ProjectListService) {

        $scope.gridOptions = {
            showGridFooter: true,
            enableSelectionBatchEvent: true,
            paginationPageSizes: [5, 10, 10],
            paginationPageSize: 60,
            rowHeight: 30,
 
		

            enableFiltering: true,
            columnDefs: [

                { field: 'ProjectName', width: '5%', cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectStepName', width: '15%', cellTooltip: function (row) { return row.entity.ProjectStepName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Priority', width: '5%', cellTooltip: function (row) { return row.entity.Priority; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Description', width: '5%', cellTooltip: function (row) { return row.entity.Description; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectLifeCycle', width: '10%', cellTooltip: function (row) { return row.entity.ProjectLifeCycle; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectType', width: '5%', cellTooltip: function (row) { return row.entity.ProjectType; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TicketNum', width: '5%', cellTooltip: function (row) { return row.entity.TicketNum; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjIdeation', width: '2%', cellTooltip: function (row) { return row.entity.ProjIdeation; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectScope', width: '5%', cellTooltip: function (row) { return row.entity.ProjectScope; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectStatus', width: '5%', cellTooltip: function (row) { return row.entity.ProjectStatus; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ESTTotalHours', width: '5%', cellTooltip: function (row) { return row.entity.ESTTotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'NumofPMResource', width: '2%', cellTooltip: function (row) { return row.entity.NumofPMResource; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'NumofBAResources', width: '2%', cellTooltip: function (row) { return row.entity.NumofBAResources; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'NumofAPPSResources', width: '2%', cellTooltip: function (row) { return row.entity.NumofAPPSResources; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'PMName', width: '5%', cellTooltip: function (row) { return row.entity.PMName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'BAResourceName1', width: '5%', cellTooltip: function (row) { return row.entity.BAResourceName1; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'BAResource1Status', width: '5%', cellTooltip: function (row) { return row.entity.BAResource1Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'HoursSpentBA1', width: '5%', cellTooltip: function (row) { return row.entity.HoursSpentBA1; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'BAResourceName2', width: '5%', cellTooltip: function (row) { return row.entity.BAResourceName2; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'BAResource2Status', width: '5%', cellTooltip: function (row) { return row.entity.BAResource2Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'HoursSpentBA2', width: '5%', cellTooltip: function (row) { return row.entity.HoursSpentBA2; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalHoursSpentBA', width: '5%', cellTooltip: function (row) { return row.entity.TotalHoursSpentBA; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'APPSResourceName1', width: '5%', cellTooltip: function (row) { return row.entity.APPSResourceName1; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'APPSResource1Status', width: '5%', cellTooltip: function (row) { return row.entity.APPSResource1Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'HoursSpentAPPS1', width: '5%', cellTooltip: function (row) { return row.entity.HoursSpentAPPS1; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'APPSResourceName2', width: '5%', cellTooltip: function (row) { return row.entity.APPSResourceName2; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'APPSResource2Status', width: '5%', cellTooltip: function (row) { return row.entity.APPSResource2Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'HoursSpentAPPS2', width: '5%', cellTooltip: function (row) { return row.entity.HoursSpentAPPS2; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'APPSResourceName3', width: '5%', cellTooltip: function (row) { return row.entity.APPSResourceName3; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'APPSResource3Status', width: '5%', cellTooltip: function (row) { return row.entity.APPSResource3Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'HoursSpentAPPS3', width: '5%', cellTooltip: function (row) { return row.entity.HoursSpentAPPS3; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'APPSResourceName4', width: '5%', cellTooltip: function (row) { return row.entity.APPSResourceName4; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'APPSResource4Status', width: '5%', cellTooltip: function (row) { return row.entity.APPSResource4Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'HoursSpentAPPS4', width: '5%', cellTooltip: function (row) { return row.entity.HoursSpentAPPS4; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalHoursSpentAPPS', width: '5%', cellTooltip: function (row) { return row.entity.TotalHoursSpentAPPS; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'InsertDateTime', width: '2%', cellTooltip: function (row) { return row.entity.InsertDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'InsertUserName', width: '2%', cellTooltip: function (row) { return row.entity.InsertUserName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'UpdateDateTime', width: '2%', cellTooltip: function (row) { return row.entity.UpdateDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'UpdateUserName', width: '2%', cellTooltip: function (row) { return row.entity.UpdateUserName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Predecessor', width: '5%', cellTooltip: function (row) { return row.entity.Predecessor; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'PercentComplete', width: '5%', cellTooltip: function (row) { return row.entity.PercentComplete; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EstStartDate', width: '5%', cellTooltip: function (row) { return row.entity.EstStartDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EstCompleteDate', width: '5%', cellTooltip: function (row) { return row.entity.EstCompleteDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'row_id', width: '2%', cellTooltip: function (row) { return row.entity.row_id; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }


            ],
        };




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
        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.ObjectId);


                if (row.isSelected) {  //rowchecked 
                    ///---------  if(objarray) doesnt have row.entity.id
                    console.log('push');
                    if (objarray.indexOf(row.entity.ObjectId) == -1) {
                        objarray.push(row.entity.ObjectId);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.ObjectId) != -1) {
                        console.log("pop");
                        //if(oobjarray has this objectid)
                        objarray.splice(objarray.indexOf(row.entity.ObjectId), 1)
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

                //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
                $scope.loading = true;

                $scope.gridOptions.data = [];

                $timeout(function () {
                    $scope.loadGrid();
                }, 1000);
            }
            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }



        }
    }

    function controllerstaticgrid($scope, uiGridConstants, ProjectListService) {




        $scope.loadGrid2 = function () {

            console.log('loading services grid');

            //console.log(options);
            ProjectListService.getService().success(function (data) {
                if (data == null || data.ServicesList == null || data.ServicesList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions2.paginationPageSizes.push(
                        data.ServicesList.length
                    );

                    var ServicesList = data.ServicesList;


                    $scope.gridOptions2.data = ServicesList;
                    // console.log($scope.gridOptions2.data);
                    $scope.error = false;
                }
                $scope.loading = true;/*Loading data.. code*/
            }).finally(function () { $scope.loading = false; }) /*Loading data.. code*/
        }


        $scope.gridOptions2 = {

            showGridFooter: true,
            enableSelectionBatchEvent: true,
            columnDefs: [{
    field: 'Recipe', width: '12%', cellTooltip: function (row) { return row.entity.Recipe; },
                cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
            },
{
    field: 'TestArea', width: '15%', cellTooltip: function (row) { return row.entity.TestArea; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Testcycle', width: '15%', cellTooltip: function (row) { return row.entity.Testcycle; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'WorkOrder', width: '15%', cellTooltip: function (row) { return row.entity.WorkOrder; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'/*, visible:false */
},
{
    field: 'Item', width: '15%'/*, visible:false */, cellTooltip: function (row) { return row.entity.Item; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Quantity' ,width: '8%'/*, visible:false */, cellTooltip: function (row) { return row.entity.Quantity; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'WorkCenter', width: '15%', cellTooltip: function (row) { return row.entity.WorkCenter; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Operation', width: '8%', cellTooltip: function (row) { return row.entity.Operation; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'InspectionLot', width: '15%', cellTooltip: function (row) { return row.entity.InspectionLot; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare1', width: '15%', cellTooltip: function (row) { return row.entity.Spare1; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare2', width: '15%', cellTooltip: function (row) { return row.entity.Spare2; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare3', width: '15%', cellTooltip: function (row) { return row.entity.Spare3; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare4', width: '15%', cellTooltip: function (row) { return row.entity.Spare4; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare5', width: '15%', cellTooltip: function (row) { return row.entity.Spare5; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'InsertTime', type:'date', width: '12%', cellTooltip: function (row) { return row.entity.InsertTime; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'RowId', type: 'number', width: '8%', cellTooltip: function (row) { return row.entity.RowId; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
}
            ],
            enableFiltering: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 20,
            rowHeight: 33
        };

        $scope.loadGrid2();

        // $scope.gridWidth2 = window.innerWidth * 0.74 + 'px';
        $scope.gridOptions2.onRegisterApi = function (gridApi) {
            $scope.gridApi2 = gridApi;

            var servarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                //  console.log('row selected ' + row.entity.LocationId);


                if (row.isSelected) {  //rowchecked 
                    ///---------  if(objarray) doesnt have row.entity.id
                    console.log('push service');
                    if (servarray.indexOf(row.entity.LocationId) == -1) {
                        servarray.push(row.entity.LocationId);
                    }
                }
                else
                    if (servarray.indexOf(row.entity.LocationId) != -1) {
                        console.log("pop service");
                        //if(oobjarray has this objectid)
                        servarray.splice(servarray.indexOf(row.entity.LocationId), 1)
                    }

            });

            $scope.refreshServiceGrid = function () {
                //  console.log('refresh Service grid');
                $scope.loading = true;
                $scope.loadGrid2(); /* Reload the entire Grid  on click of refresh button*/
            }



            $scope.reprocessObject = function () {
                // alert ("Do you want to reprocess the selected messages?");
                console.log('reprocess grid');

                console.log(objarray);
                ProjectListService.reprocessObject(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                    objarray.length = 0;

                });
            }
        }
    }

})();
