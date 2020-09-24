(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('ProcessingMassBalanceController', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ProcessingMassBalanceService'];

    app.config(function ($httpProvider) {

    });


    function controller($scope, $timeout, uiGridConstants, ProcessingMassBalanceService) {
        

        $scope.gridOptions = {
            showGridFooter: true,
            enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 20,
            rowHeight: 33,

            enableFiltering: true,
            columnDefs: [
{
                    field: 'Plant', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Plant; },
cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'Line', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Line; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Production_Date', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Production_Date; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Production_Order', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Production_Order; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Material_Number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Material_Number; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'Oper_ID', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Oper_ID; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Area', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Area; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Weight_Date_Time', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Weight_Date_Time; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Weight_Time', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Weight_Time; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Weight_Name', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Weight_Name; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Weight_Value', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Weight_Value; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 
            ],
        };


       $("#plant").click(function () {
      //  $("#SubmitSP").click(function () {
           // var plant = this.value;
          //  window.plant = plant;
            //console.log("this is " + plant );
            //var ProductionOrderValue = document.getElementById('ProductionOrder').value
            //var LineValue = document.getElementById('Line').value
            //var ProductCodeValue = document.getElementById('ProductCode').value
            var SDateValue = document.getElementById('SDate').value
            var EDateValue = document.getElementById('EDate').value

            console.log("this is " + SDateValue);
            console.log("this is " + EDateValue);

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            //console.log("this is " + plant );

//Service Call
            //console.log(options);
            ProcessingMassBalanceService.getmass(SDateValue, EDateValue).success(function (data) {
                if (data == null || data.ProcessingMassBalanceList == null || data.ProcessingMassBalanceList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ProcessingMassBalanceList.length
                    );



                    var ProcessingMassBalanceList = data.ProcessingMassBalanceList;

                    //  console.log("RptDriverList" + RptDriverList);

                    $scope.gridOptions.data = ProcessingMassBalanceList;
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
                //console.log('refresh grid');

                ////$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
                //$scope.loading = true;

                //$scope.gridOptions.data = [];

                //$timeout(function () {
                //    $scope.loadGrid();
                //}, 1000);


                var SDateValue = document.getElementById('SDate').value
                var EDateValue = document.getElementById('EDate').value

                console.log("this is " + SDateValue);
                console.log("this is " + EDateValue);

                $scope.loadGrid = function () {
                    $scope.loading = true;
                    console.log('loading grid');

                    //console.log("this is " + plant );

                    //Service Call
                    //console.log(options);
                    ProcessingMassBalanceService.getmass(SDateValue, EDateValue).success(function (data) {
                        if (data == null || data.ProcessingMassBalanceList == null || data.ProcessingMassBalanceList.length == 0) {
                            $scope.error = true;
                            $scope.errorDescription = "No data found for selected criteria.";
                        } else {
                            $scope.gridOptions.paginationPageSizes.push(
                                data.ProcessingMassBalanceList.length
                            );



                            var ProcessingMassBalanceList = data.ProcessingMassBalanceList;

                            //  console.log("RptDriverList" + RptDriverList);

                            $scope.gridOptions.data = ProcessingMassBalanceList;
                            //  console.log("this is data" + $scope.gridOptions.data)


                            $scope.error = false;
                        }

                        // $scope.loading = false;
                    }).finally(function () { $scope.loading = false; })
                    //   . error(function (data) {


                    //});

                }




                $scope.loadGrid();


            }



            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }



        }
    }




})();
