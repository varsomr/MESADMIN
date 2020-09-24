(function () {
    angular
        .module('myApp')
        .controller('RetriveINVcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RetriveINVService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RetriveINVService) {

        $scope.gridOptions = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,
            columnDefs: [
                { field: 'Production_Date', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Material_Number', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Material_Description', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Silo_ID', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Silo_Level', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Silo_RTD', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Chem_Sample_ID', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Chem_Sample_Time', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Fat', displayName: 'FAT%', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Protein', displayName: 'Protein%', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Solids', displayName: 'Solids%', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SNF', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalSolids', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Babcock', displayName: 'Babcock%',width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TA', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'pH', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Micro_Sample_ID', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Micro_Sample_Time', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Sort_Order', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },


            ],
        };


     
       $scope.showGrid = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            //document.getElementById(elementId).style.display = 'block';
        }



     $("#plant").change(function () {
            var plant = this.value;
            window.plant = plant;
            //console.log("this is " + plant );
            document.getElementById('VATPlantOff').value = plant;
       });

     $scope.GridfromButton = function () {
         if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
             alert("Please Select A Plant from the Dropdown");
             return false;
         }
         else {
             if (document.getElementById('POIE').value == null || document.getElementById('POIE').value == "mm/dd/yyyy" || document.getElementById('POIE').value == "") {
                 alert("Please Select A Date");
                 return false;
             }
            else{
                 $scope.loadGrid();
             }
         }
       }

        

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            if (document.getElementById('POIE').value == null || document.getElementById('POIE').value == "" ||document.getElementById('POIE').value == "INVDate" ) {
                var d = new Date();
                var n = d.getDate();
                var m = d.getMonth();
                var y = d.getFullYear();
                //wo_id = y+'-'+m+'-'+n;
                wo_id = d;
            }
            else {
                wo_id = document.getElementById('POIE').value;
            }
           
            console.log("this is @" + plant +" and PO# is " + wo_id);

            //console.log(options);
            RetriveINVService.getSiloINV(plant, wo_id).success(function (data) {
                if (data == null || data.SiloINVList == null || data.SiloINVList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.SiloINVList.length
                    );
                    var SiloINVList = data.SiloINVList;
                    $scope.gridOptions.data = SiloINVList;
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
                    document.getElementById('Production_Date').value = row.entity.Production_Date;
                    document.getElementById('Material_Number').value = row.entity.Material_Number;
                    document.getElementById('Material_Description').value = row.entity.Material_Description;
                    document.getElementById('Silo_ID').value = row.entity.Silo_ID;
                    document.getElementById('Silo_Level').value = row.entity.Silo_Level;
                    document.getElementById('Silo_RTD').value = row.entity.Silo_RTD;
                    document.getElementById('Chem_Sample_ID').value = row.entity.Chem_Sample_ID;
                    document.getElementById('Chem_Sample_Time').value = row.entity.Chem_Sample_Time;
                    document.getElementById('Fat').value = row.entity.Fat;
                    document.getElementById('Protein').value = row.entity.Protein;
                    document.getElementById('Solids').value = row.entity.Solids;
                    document.getElementById('SNF').value = row.entity.SNF;
                    document.getElementById('TotalSolids').value = row.entity.TotalSolids;
                    document.getElementById('Babcock').value = row.entity.Babcock;
                    document.getElementById('TA').value = row.entity.TA;
                    document.getElementById('pH').value = row.entity.pH;
                    document.getElementById('Micro_Sample_ID').value = row.entity.Micro_Sample_ID;
                    document.getElementById('Micro_Sample_Time').value = row.entity.Micro_Sample_Time;
                    document.getElementById('Sort_Order').value = row.entity.Sort_Order;

                       // $scope.openDIV('mysidenavRightSummaryI'); 
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

            $scope.popSummary = function () {
                document.getElementById('mysidenavRightINV').style.width = '0';
            }    

            $scope.Undo = function () {

                document.getElementById('Production_Date').value = '';
                document.getElementById('Material_Number').value = '';
                document.getElementById('Material_Description').value = '';
                document.getElementById('Silo_ID').value = '';
                document.getElementById('Silo_Level').value = '';
                document.getElementById('Silo_RTD').value = '';
                document.getElementById('Chem_Sample_ID').value = '';
                document.getElementById('Chem_Sample_Time').value = '';
                document.getElementById('Fat').value = '';
                document.getElementById('Protein').value = '';
                document.getElementById('Solids').value = '';
                document.getElementById('SNF').value = '';
                document.getElementById('TotalSolids').value = '';
                document.getElementById('Babcock').value = '';
                document.getElementById('TA').value = '';
                document.getElementById('pH').value = '';
                document.getElementById('Micro_Sample_ID').value = '';
                document.getElementById('Micro_Sample_Time').value = '';
                document.getElementById('Sort_Order').value = '';


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

           

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            $scope.exportDriver = function () {
                console.log('Export Driver Recordset');
                if (document.getElementById('POIE').value == null || document.getElementById('POIE').value == "" || document.getElementById('POIE').value == "PO or Batch#") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('POIE').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getSiloINV/' + document.getElementById('VATPlantOff').value + "/" + document.getElementById('POIE').value, '_blank', 'resizable=yes')
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
                document.getElementById('mysidenavRightSummaryI').style.width = '0';
                document.getElementById('mysidenavRightSummaryT').style.width = '0';
                document.getElementById('mysidenavRightSummaryP').style.width = '0';
                document.getElementById('mysidenavRightSummaryC').style.width = '0';
                document.getElementById('mysidenavRightSummaryQ').style.width = '0';
                document.getElementById('mysidenavRightSummaryL').style.width = '0';
                document.getElementById('mysidenavRightTruck').style.width = '0';
                document.getElementById('mysidenavRightQuality').style.width = '0';
                document.getElementById('mysidenavRightLabel').style.width = '0';
                document.getElementById('mysidenavRightINV').style.width = '0';
                document.getElementById('mysidenavRightTicket').style.width = '0';
            }

            $scope.openDIV = function (nav) {
                document.getElementById('mysidenavRightMain').style.width = '0';
                document.getElementById('mysidenavRightCons').style.width = '0';
                document.getElementById('mysidenavRightProd').style.width = '0';
                document.getElementById('mysidenavRightSummaryI').style.width = '0';
                document.getElementById('mysidenavRightSummaryT').style.width = '0';
                document.getElementById('mysidenavRightSummaryP').style.width = '0';
                document.getElementById('mysidenavRightSummaryC').style.width = '0';
                document.getElementById('mysidenavRightSummaryQ').style.width = '0';
                document.getElementById('mysidenavRightSummaryL').style.width = '0';
                document.getElementById('mysidenavRightTruck').style.width = '0';
                document.getElementById('mysidenavRightQuality').style.width = '0';
                document.getElementById('mysidenavRightLabel').style.width = '0';
                document.getElementById('mysidenavRightINV').style.width = '0';
                document.getElementById('mysidenavRightTicket').style.width = '0';
                document.getElementById(nav).style.width = '90.352%';
            } 

        }
    }





    

   
})();





