(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('RptVatMakecontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RptVatMakeService'];

    app.config(function ($httpProvider) {

    });


    function controller($scope, $timeout, uiGridConstants, RptVatMakeService) {
        

        $scope.gridOptions = {
            showGridFooter: true,
            //enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 20,
            rowHeight: 33,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            enableFiltering: true,
            columnDefs: [
{
    field: 'Production_Date', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Production_Date; },
cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'ProductionOrder', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProductionOrder; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 
 {
     field: 'LineNumber', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LineNumber; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'LogicalVat', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LogicalVat; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'AttributeName', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AttributeName; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 //{
 //    field: 'Source', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Source; },
 //    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 //},
 {
     field: 'MIC', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.MIC; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 
   {
       field: 'LatestAvgValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestAvgValue; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestStdDevValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestStdDevValue; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   },
   
 {
       field: 'LatestLSL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestLSL; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestTarget', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestTarget; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestUSL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestUSL; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   },  
 {
     field: 'vLSL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.vLSL; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'vTarget', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.vTarget; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
    {
        field: 'vUSL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.vUSL; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'KPI_Report_Name', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.KPI_Report_Name; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'KPI_RD_Name', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.KPI_RD_Name; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'AvgValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AvgValue; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'SDevValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.SDevValue; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'DisplaySpecs', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DisplaySpecs; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestProductionOrder', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestProductionOrder; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   },  
 {
     field: 'Lot_No', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Lot_No; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Position', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Position; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'ReportSection', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ReportSection; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'PhysUnitNo', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.SoPhysUnitNource; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'ProductCode', type: 'number', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.ProductCode; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

  {
      field: 'ReportValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ReportValue; },
      cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
  },
 {
     field: 'Record_UID', type: 'number', width: '10%', cellTooltip: function (row) { return row.entity.DOPRecord_UIDKey; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

  {
       field: 'ReportingKey', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ReportingKey; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, 
            ],
        };


        $("#plant").change(function () {
            var plant = this.value;
            window.plant = plant;
            //console.log("this is " + plant );
            var ProductionOrderValue = document.getElementById('ProductionOrder').value
            var LineValue = document.getElementById('Line').value
            var ProductCodeValue = document.getElementById('ProductCode').value
            var SDateValue = document.getElementById('SDate').value
            var EDateValue = document.getElementById('EDate').value

            console.log("this is " + ProductionOrderValue);
            console.log("this is " + LineValue);
            console.log("this is " + ProductCodeValue);
            console.log("this is " + SDateValue);
            console.log("this is " + EDateValue);

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            console.log("this is " + plant );

//Service Call
            //console.log(options);
            RptVatMakeService.getvat(plant, ProductionOrderValue, LineValue, ProductCodeValue, SDateValue, EDateValue).success(function (data) {
                if (data == null || data.VATMakeRptList == null || data.VATMakeRptList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.VATMakeRptList.length
                    );



                    var VATMakeRptList = data.VATMakeRptList;

                    //  console.log("RptDriverList" + RptDriverList);

                    $scope.gridOptions.data = VATMakeRptList;
                    //  console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }

                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; })
            //   . error(function (data) {

    
                //});

        }
        
   


        $scope.loadGrid();
        });
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
