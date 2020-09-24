(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('RptMixerTotalizercontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RptMixerTotalizerService'];

    app.config(function ($httpProvider) {

    });


    function controller($scope, $timeout, uiGridConstants, RptMixerTotalizerService) {
        

        $scope.gridOptions = {
            showGridFooter: true,
            enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 20,
            rowHeight: 33,

            enableFiltering: true,
            columnDefs: [
{
    field: 'DataDatetime', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DataDatetime; },
cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},

 {
     field: 'Line', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Line; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'Production_Order', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Production_Order; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Cheese_Code', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Cheese_Code; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Data_group', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data_group; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Label', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Label; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'DataDate', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DataDate; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'DataTime', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DataTime; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'DataValue', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DataValue; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Source', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Source; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'MIC', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.MIC; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'HiddenRecord', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.HiddenRecord; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Record_UID', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Record_UID; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Sequence', type: 'number', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.Sequence; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

  {
      field: 'LSL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LSL; },
      cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
  },
 {
     field: 'Target', type: 'number', width: '10%', cellTooltip: function (row) { return row.entity.Target; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'USL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.USL; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'AvgValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AvgValue; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
    {
        field: 'STDEVValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.STDEVValue; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'KPI_ReportName', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.KPI_ReportName; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'KPI_RD_Name', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.KPI_RD_Name; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'DisplaySpecs', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DisplaySpecs; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestProductionOrder', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestProductionOrder; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestLSL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestLSL; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestTarget', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestTarget; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestUSL', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestUSL; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestAvgValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestAvgValue; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'LatestSTDDEVValue', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.LatestSTDDEVValue; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'ReportingKey', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ReportingKey; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'TotalLbsPerPO', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TotalLbsPerPO; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'EndLbsPerPO', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.EndLbsPerPO; },
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
            console.log("this is " + SDateValue );
            console.log("this is " + EDateValue );

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            console.log("this is " + plant );

//Service Call
            //console.log(options);
            RptMixerTotalizerService.getmixertotalizer(plant, ProductionOrderValue, LineValue,ProductCodeValue,SDateValue,EDateValue).success(function (data) {
                if (data == null || data.MixerTotalizerRptList == null || data.MixerTotalizerRptList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.MixerTotalizerRptList.length
                    );



                    var MixerTotalizerRptList = data.MixerTotalizerRptList;

                    //  console.log("RptDriverList" + RptDriverList);

                    $scope.gridOptions.data = MixerTotalizerRptList;
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
