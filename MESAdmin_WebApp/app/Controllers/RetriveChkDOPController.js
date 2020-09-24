(function () {
   

    angular
        .module('myApp')
        .controller('RetriveChkDOPcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'OneStopSupportService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, OneStopSupportService) {

        $scope.gridOptions = {
            showGridFooter: true,
            //enableSelectionBatchEvent: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,
            autoResize: true,
            columnDefs: [
                { field: 'ProductionOrder', width: '*' },
                { field: 'Material', width: '*' },
                { field: 'Material_Desc', width: '*' },
                { field: 'Oper_Type', width: '*'},
                { field: 'Oper_id', width: '*'},
                { field: 'Current_State', width: '*'},
                { field: 'PODate', width: '*'}
                //{ width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }, 


            ],
        };


     
       $scope.showGrid = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            
        }



     $("#plant").change(function () {
            var plant = this.value;
            window.plant = plant;
            document.getElementById('VATPlantOff').value = plant;
       });

     $scope.GridfromButton = function () {
         if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
             alert("Please Select A Plant from the Dropdown");
             return false;

         }
         else {
             $scope.loadGrid();
         }
       }

        

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
           
            if (document.getElementById('PDOP').value == null || document.getElementById('PDOP').value == "" || document.getElementById('PDOP').value == "PO or Batch#")
            {
                wo_id = '1234567';
            }
            else
            {
                wo_id = document.getElementById('PDOP').value;
            }
            console.log("this is @" + plant + wo_id +" and PO# "+wo_id);

            //console.log(options);
            OneStopSupportService.getChkDOP(plant,wo_id).success(function (data) {
                if (data == null || data.ChkDOPList == null || data.ChkDOPList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ChkDOPList.length
                    );
                    var ChkDOPList = data.ChkDOPList;
                    $scope.gridOptions.data = ChkDOPList;
                    $scope.error = false;
                }
                
            }).finally(function () { $scope.loading = false; })
            
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
                    document.getElementById('PODate').value = row.entity.PODate;
                    document.getElementById('Oper_Type').value = row.entity.Oper_Type;
                    document.getElementById('Oper_id').value = row.entity.Oper_id;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    document.getElementById('Material').value = row.entity.Material;
                    document.getElementById('Material_Desc').value = row.entity.Material_Desc;
                    document.getElementById('Current_State').value = row.entity.Current_State;

                   // $scope.openDIV('mysidenavRightSummary');
                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                        if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        $scope.Undo();
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });
            //gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
            //    $scope.lastCellEdited = ' ID: ' + rowEntity.RowId + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;

            //    // $scope.lastCellEdited = 
            //    var id = rowEntity.RowId;
            //    var colname = colDef.name;
            //    var colval = newValue;
            //    GridService.saveRptDriverconfig(id, colname, colval);
            //    console.log('this is ' + $scope.lastCellEdited);
            //    $scope.$apply();
            //});

            $scope.popSummary = function () {
                document.getElementById('mysidenavRightChkDOP').style.width = '0';
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

            $scope.Undo = function () {

                document.getElementById('PODate').value = '';
                document.getElementById('Oper_Type').value = '';
                document.getElementById('Oper_id').value = '';
                document.getElementById('ProductionOrder').value = '';
                document.getElementById('Material').value = '';
                document.getElementById('Material_Desc').value = '';
                document.getElementById('Current_State').value = '';


            }

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            $scope.exportDriver = function () {
                if (document.getElementById('PDOP').value == null || document.getElementById('PDOP').value == "" || document.getElementById('PDOP').value == "PO#") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('PDOP').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getConsumption/' + document.getElementById('VATPlantOff').value +"/"+ wo_id, '_blank', 'resizable=yes')
            }

            $scope.openNav = function(nav) {
                document.getElementById(nav).style.width = "90.352%";
                document.getElementById(nav).style.zIndex= "999";
            }

            $scope.closeNav = function(nav) {
                document.getElementById(nav).style.width = "0";
            }

            $scope.closeAll = function () {
                document.getElementById('mysidenavRightMain').style.width = '0';
                document.getElementById('mysidenavRightCons').style.width = '0';
                document.getElementById('mysidenavRightProd').style.width = '0';
                document.getElementById('mysidenavRightSummaryT').style.width = '0';
                document.getElementById('mysidenavRightSummaryP').style.width = '0';
                document.getElementById('mysidenavRightSummaryC').style.width = '0';
                document.getElementById('mysidenavRightSummaryQ').style.width = '0';
                document.getElementById('mysidenavRightSummaryL').style.width = '0';
                document.getElementById('mysidenavRightSummaryI').style.width = '0';
                document.getElementById('mysidenavRightTruck').style.width = '0';
                document.getElementById('mysidenavRightQuality').style.width = '0';
                document.getElementById('mysidenavRightLabel').style.width = '0';
                document.getElementById('mysidenavRightINV').style.width = '0';
                document.getElementById('mysidenavRightChkDOP').style.width = '0';
                document.getElementById('mysidenavRightChkWS').style.width = '0';
                document.getElementById('mysidenavRightChkIN2175').style.width = '0';
                document.getElementById('mysidenavRightChkTag').style.width = '0';
            }

            $scope.openDIV = function (nav) {
                document.getElementById('mysidenavRightMain').style.width = '0';
                document.getElementById('mysidenavRightCons').style.width = '0';
                document.getElementById('mysidenavRightProd').style.width = '0';
                document.getElementById('mysidenavRightSummaryT').style.width = '0';
                document.getElementById('mysidenavRightSummaryP').style.width = '0';
                document.getElementById('mysidenavRightSummaryC').style.width = '0';
                document.getElementById('mysidenavRightSummaryQ').style.width = '0';
                document.getElementById('mysidenavRightSummaryL').style.width = '0';
                document.getElementById('mysidenavRightSummaryI').style.width = '0';
                document.getElementById('mysidenavRightTruck').style.width = '0';
                document.getElementById('mysidenavRightQuality').style.width = '0';
                document.getElementById('mysidenavRightLabel').style.width = '0';
                document.getElementById('mysidenavRightINV').style.width = '0';
                document.getElementById('mysidenavRightChkDOP').style.width = '0';
                document.getElementById('mysidenavRightChkWS').style.width = '0';
                document.getElementById('mysidenavRightChkIN2175').style.width = '0';
                document.getElementById('mysidenavRightChkTag').style.width = '0';
                document.getElementById(nav).style.width = '90.352%';
            } 


        }
    }

   
})();





