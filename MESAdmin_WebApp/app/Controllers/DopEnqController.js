(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('DOPGridcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'DopService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $timeout, uiGridConstants, DopService) {

        $scope.gridOptions = {
            showGridFooter: true,
            enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 20,
            rowHeight: 33,

            enableFiltering: true,
            columnDefs: [
{
    field: 'ProductionDate', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProductionDate; },
cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'ProductionOrder', width: '10%', cellTooltip: function (row) { return row.entity.ProductionOrder; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Line', width: '10%', cellTooltip: function (row) { return row.entity.Line; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Material', width: '10%', cellTooltip: function (row) { return row.entity.Material; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'MaterialDescription', width: '10%', cellTooltip: function (row) { return row.entity.MaterialDescription; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'WorkCenter', width: '10%', cellTooltip: function (row) { return row.entity.WorkCenter; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'StorageBin ', width: '10%', cellTooltip: function (row) { return row.entity.StorageBin ; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'AttGroupName', width: '10%', cellTooltip: function (row) { return row.entity.AttGroupName; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'AttributeName', width: '10%', cellTooltip: function (row) { return row.entity.AttributeName; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'AttRank', width: '10%', cellTooltip: function (row) { return row.entity.AttRank; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'CodeSection', width: '10%', cellTooltip: function (row) { return row.entity.CodeSection; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Lower', width: '10%', cellTooltip: function (row) { return row.entity.Lower; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Target', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Target; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

  {
      field: 'Upper', type: 'number', width: '10%',  cellTooltip: function (row) { return row.entity.Upper; },
      cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
  },
 {
     field: 'GridPos', type: 'number', width: '10%',  cellTooltip: function (row) { return row.entity.GridPos; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'ReportingKey', type: 'number', width: '10%',  cellTooltip: function (row) { return row.entity.ReportingKey; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

            ],
        };




        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            //console.log(options);
           DopService.getDop().success(function (data) {
               if (data == null || data.DopEnquiryList == null || data.DopEnquiryList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.DopEnquiryList.length
                    );

                    var DopEnquiryList = data.DopEnquiryList;

                  //  console.log("DOPList" + DopEnquiryList);

                    $scope.gridOptions.data = DopEnquiryList;
                   //  console.log("this is data" + $scope.gridOptions.data)


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



})();
