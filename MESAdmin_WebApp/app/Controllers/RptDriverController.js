(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('RptDrivercontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RptDriverService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RptDriverService) {

        $scope.gridOptions = {
            showGridFooter: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            enableCellEdit: false,
            onRegisterApi: registerGridApi,
            enableFiltering: true,
            enableGridMenu: false,
            rowHeight: 30,

            enableFiltering: true,
            columnDefs: [
{
    field: 'ID', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ID; },
cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'ReportName', width: '15%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ReportName; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'DefType', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DefType; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'CodeSection', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.CodeSection; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Department', width: '7%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Department; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'Area', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Area; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'SubArea', width: '7%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.SubArea; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Line', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Line; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Display', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Display; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Sequence', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Sequence; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Label', width: '7%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Label; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Source', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Source; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Tag', type: 'number', enableCellEdit: false, width: '15%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Tag; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

  {
      field: 'AttributeID', type: 'number', width: '7%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AttributeID; },
      cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
  },
 {
     field: 'DOPKey', type: 'number', width: '10%',  cellTooltip: function (row) { return row.entity.DOPKey; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'AttributeName', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AttributeName; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'MIC', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.MIC; },
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
    {
        field: 'Data1', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data1; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data2', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data2; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data3', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data3; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data4', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data4; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data5', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data5; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data6', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data6; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data7', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data7; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data8', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data8; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data9', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data9; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data10', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data10; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data11', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data11; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data12', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data12; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data13', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data13; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data14', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data14; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data15', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data15; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data16', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data16; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   }, {
       field: 'Data17', type: 'number', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Data17; },
       cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
   },
            ],
        };


        $("#plant").change(function () {
            var plant = this.value;
            window.plant = plant;
            //console.log("this is " + plant );
            document.getElementById('VATPlantOff').value = plant;

       


        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            console.log("this is " + plant );

            //console.log(options);
            RptDriverService.getRptDriver(plant).success(function (data) {
                if (data == null || data.RptDriverList == null || data.RptDriverList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.RptDriverList.length
                    );



                    var RptDriverList = data.RptDriverList;

                    //  console.log("RptDriverList" + RptDriverList);

                    $scope.gridOptions.data = RptDriverList;
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

        $scope.filterGender = function () {

            console.log($scope.gridApi.grid.columns);
            //document.getElementById('CompleteTask').value = $scope.gridApi.grid.options.totalItems;
            $scope.gridApi.grid.columns[8].filter.term = $scope.term;


        };

        $scope.rowFormatter = function (row) {

            return row.entity.Status === '4-Complete';
        };

        function registerGridApi(gridApi) {
            $scope.gridApi = gridApi;
        }

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
                GridService.saveRptDriverconfig(id, colname, colval);
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

            $scope.VatMsgOff = function () {
                var VATPlantOffValue = document.getElementById('VATPlantOff').value
                console.log('TurnOFF VAT Pressed');
                RptDriverService.VatMsgOff(VATPlantOffValue).success(function (data) {


                    // $scope.gridApi.core.refresh();
                   // $scope.loadGrid();
                   
                });
            }

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            $scope.exportDriver = function () {
                console.log('Export Driver Recordset');
                window.open('http://denm2008mesadm:93/api/Message/getRptDriver/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
            }



        }
    }



})();
