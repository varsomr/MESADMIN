(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('ProjectRescontroller', controller)
    //.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ProjectResService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $timeout, uiGridConstants, ProjectResService) {

        $scope.gridOptions = {
            showGridFooter: true,
            enableSelectionBatchEvent: true,
            paginationPageSizes: [5, 10, 10],
            paginationPageSize: 60,
            rowHeight: 30,



            enableFiltering: true,
            columnDefs: [

                { field: 'ProjectName', width: '20%', cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Vamshi', displayName: 'Vamshi', width: '10%', cellTooltip: function (row) { return row.entity.Vamshi; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Varun', displayName: 'Varun', width: '10%', cellTooltip: function (row) { return row.entity.Varun; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Rory', displayName: 'Rory', width: '10%', cellTooltip: function (row) { return row.entity.Rory; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Abdel', displayName: 'Abdel', width: '10%', cellTooltip: function (row) { return row.entity.Abdel; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AssignedTo', displayName: 'AssignedTo', width: '10%', cellTooltip: function (row) { return row.entity.AssignedTo; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalHours', displayName: 'TotalHours', width: '9%', cellTooltip: function (row) { return row.entity.TotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EstTotal', displayName: 'EstTotalHours', width: '9%', cellTooltip: function (row) { return row.entity.EstTotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'PercentComplete', displayName: 'HoursUsed%', width: '10%', cellTooltip: function (row) { return row.entity.PercentComplete; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'InsertDateTime', width: '10%', cellTooltip: function (row) { return row.entity.InsertDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
               // { field: 'row_id', width: '2%', cellTooltip: function (row) { return row.entity.row_id; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                
            ],
        };




        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');


            //console.log(options);
            ProjectResService.getProjectRes().success(function (data) {
                if (data == null || data.ProjectResList == null || data.ProjectResList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ProjectResList.length
                    );

                    var ProjectResList = data.ProjectResList;

                    //console.log(MessageList);

                    $scope.gridOptions.data = ProjectResList;
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
            $scope.refreshProject = function () {
                console.log('refresh Projects Only');

                //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
                $scope.loading = true;

                $scope.gridOptions.data = [];

                $timeout(function () {
                    $scope.loadGrid();
                }, 1000);
            }

            $scope.addRow = function () {
                console.log('New Row Added');
                ProjectResService.addRow().success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                });
            }

            $scope.addProject = function () {
                console.log('New Project Added');
                ProjectListService.addProject().success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                });
            }
            $scope.addMonthlyProject = function () {
                console.log('New Month Setup Complete');
                ProjectListService.addMonthlyProject().success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                });
            }
            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
                
            }



        }
    }

   

})();
