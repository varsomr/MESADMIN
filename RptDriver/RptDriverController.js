(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('DisplayGridcontroller', controller).controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RptDriverService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $timeout, uiGridConstants, RptDriverService) {

        $scope.gridOptions = {
            showGridFooter: true,
            enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 20,
            rowHeight: 33,

            enableFiltering: true,
            columnDefs: [

 {
                    field: 'ReportName', width: '10%', cellTooltip: function (row) { return row.entity.ReportName; },
 cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="WorkOrder">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'DefType', width: '10%', cellTooltip: function (row) { return row.entity.DefType; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'CodeSection', width: '10%', cellTooltip: function (row) { return row.entity.CodeSection; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Department', width: '10%', cellTooltip: function (row) { return row.entity.Department; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Operation', width: '10%', cellTooltip: function (row) { return row.entity.Operation; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Area', width: '10%', cellTooltip: function (row) { return row.entity.Area; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'SubArea', width: '10%', cellTooltip: function (row) { return row.entity.SubArea; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Line', width: '10%', cellTooltip: function (row) { return row.entity.Line; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Display', width: '10%', cellTooltip: function (row) { return row.entity.Display; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Sequence', width: '10%', cellTooltip: function (row) { return row.entity.Sequence; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Label', width: '10%', cellTooltip: function (row) { return row.entity.Label; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Source', width: '10%', cellTooltip: function (row) { return row.entity.Source; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Tag', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Tag; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

  {
      field: 'AttributeID', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AttributeID; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'DOPKey', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DOPKey; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'AttributeName', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AttributeName; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'MIC', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.MIC; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 }
            ],
        };




        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            //console.log(options);
            RptDriverService.get().success(function (data) {
                if (data == null || data.MessageList == null || data.MessageList.length == 0) {
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
                $scope.lastCellEdited = ' ID: ' + rowEntity.RowId + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;

               // $scope.lastCellEdited = 
                var id = rowEntity.RowId;
                var colname = colDef.name;
                var colval = newValue;
                RptDriverService.saveTestConfig(id, colname, colval);
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

    function controllerstaticgrid($scope, uiGridConstants, RptDriverService) {




        $scope.loadGrid2 = function () {

            console.log('loading services grid');

            //console.log(options);
            RptDriverService.getService().success(function (data) {
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
    field: 'TestArea', width: '10%', cellTooltip: function (row) { return row.entity.TestArea; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Testcycle', width: '10%', cellTooltip: function (row) { return row.entity.Testcycle; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'WorkOrder', width: '10%', cellTooltip: function (row) { return row.entity.WorkOrder; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'/*, visible:false */
},
{
    field: 'Item', width: '10%'/*, visible:false */, cellTooltip: function (row) { return row.entity.Item; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Quantity' ,width: '8%'/*, visible:false */, cellTooltip: function (row) { return row.entity.Quantity; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'WorkCenter', width: '10%', cellTooltip: function (row) { return row.entity.WorkCenter; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Operation', width: '8%', cellTooltip: function (row) { return row.entity.Operation; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'InspectionLot', width: '10%', cellTooltip: function (row) { return row.entity.InspectionLot; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare1', width: '10%', cellTooltip: function (row) { return row.entity.Spare1; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare2', width: '10%', cellTooltip: function (row) { return row.entity.Spare2; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare3', width: '10%', cellTooltip: function (row) { return row.entity.Spare3; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare4', width: '10%', cellTooltip: function (row) { return row.entity.Spare4; },
    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Spare5', width: '10%', cellTooltip: function (row) { return row.entity.Spare5; },
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

        }
    }

})();
