(function () {
   

    angular
        .module('myApp')
        .controller('RetriveLabelcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RetriveLabelService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RetriveLabelService) {

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
                {
                    field: 'Type', width: '20%', enableCellEdit: false
                },
                {
                    field: 'PalletNumberBottom', width: '25%', enableCellEdit: false
                },
                {
                    field: 'PalletNumberTop', width: '20%', enableCellEdit: false
                },
                {
                    field: 'ProductionOrder', width: '20%', enableCellEdit: false
                },
                {
                    field: 'Item', width: '20%', enableCellEdit: false
                },
                {
                    field: 'CheeseName', width: '20%', enableCellEdit: false
                },
                {
                    field: 'PrintArea', width: '20%', enableCellEdit: false
                },
                {
                    field: 'NetWeightBottom', width: '20%', enableCellEdit: false
                },
                {
                    field: 'NetWeightTop', width: '20%', enableCellEdit: false
                },
                {
                    field: 'ProductionDate', width: '20%', enableCellEdit: false
                },
                {
                    field: 'PrintedDate', width: '20%', enableCellEdit: false
                },
                {
                    field: 'Sku', width: '20%', enableCellEdit: false
                },
                {
                    field: 'LfcProductCode', width: '20%', enableCellEdit: false
                },
                {
                    field: 'PrintType', width: '20%', enableCellEdit: false
                },
                {
                    field: 'CommentTop', width: '20%', enableCellEdit: false
                },
                {
                    field: 'CommentBottom', width: '20%', enableCellEdit: false
                },
                {
                    field: 'SentToSAP', width: '20%', enableCellEdit: false
                },
                {
                    field: 'LicensePlate', width: '20%', enableCellEdit: false
                },
                {
                    field: 'Plackard', width: '20%', enableCellEdit: false
                },
                {
                    field: 'Variables', width: '20%', enableCellEdit: false
                },



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
            if (document.getElementById('POLE').value == null || document.getElementById('POLE').value == "" || document.getElementById('POLE').value == "PO or Pallet#Bottom" ) {
               wo_id = '1234567'; 
            }
            else {
                wo_id = document.getElementById('POLE').value;
            }
            console.log("this is " + plant+ " and value "+wo_id);
            
            RetriveLabelService.getLabel(plant, wo_id).success(function (data) {
                if (data == null || data.ProdLabelList == null || data.ProdLabelList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ProdLabelList.length
                    );
                    var ProdLabelList = data.ProdLabelList;
                    $scope.gridOptions.data = ProdLabelList;
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


                if (row.isSelected) {  

                    console.log('push');
                    document.getElementById('Type').value = row.entity.Type;
                    document.getElementById('PalletNumberBottom').value = row.entity.PalletNumberBottom;
                    document.getElementById('PalletNumberTop').value = row.entity.PalletNumberTop;
                    document.getElementById('ProductionOrderL').value = row.entity.ProductionOrder;
                    document.getElementById('ItemL').value = row.entity.Item;
                    document.getElementById('CheeseName').value = row.entity.CheeseName;
                    document.getElementById('PrintArea').value = row.entity.PrintArea;
                    document.getElementById('NetWeightBottom').value = row.entity.NetWeightBottom;
                    document.getElementById('NetWeightTop').value = row.entity.NetWeightTop;
                    document.getElementById('ProductionDate').value = row.entity.ProductionDate;
                    document.getElementById('PrintedDate').value = row.entity.PrintedDate;
                    document.getElementById('Sku').value = row.entity.Sku;
                    document.getElementById('LfcProductCode').value = row.entity.LfcProductCode;
                    document.getElementById('PrintType').value = row.entity.PrintType;
                    document.getElementById('CommentTop').value = row.entity.CommentTop;
                    document.getElementById('CommentBottom').value = row.entity.CommentBottom;
                    document.getElementById('SentToSAPL').value = row.entity.SentToSAP;
                    document.getElementById('LicensePlate').value = row.entity.LicensePlate;
                    document.getElementById('Plackard').value = row.entity.Plackard;
                    document.getElementById('Variables').innerHTML = row.entity.Variables;
                   // $scope.openDIV('mysidenavRightSummaryL');
                   // $scope.showInputInsp('sumL');
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
                document.getElementById('mysidenavRightLabel').style.width = '0';
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

                document.getElementById('Type').value = '';
                document.getElementById('PalletNumberBottom').value = '';
                document.getElementById('PalletNumberTop').value = '';
                document.getElementById('ProductionOrderL').value = '';
                document.getElementById('ItemL').value = '';
                document.getElementById('CheeseName').value = '';
                document.getElementById('PrintArea').value = '';
                document.getElementById('NetWeightBottom').value = '';
                document.getElementById('NetWeightTop').value = '';
                document.getElementById('ProductionDate').value = '';
                document.getElementById('PrintedDate').value = '';
                document.getElementById('Sku').value = '';
                document.getElementById('LfcProductCode').value = '';
                document.getElementById('PrintType').value = '';
                document.getElementById('CommentTop').value = '';
                document.getElementById('CommentBottom').value = '';
                document.getElementById('SentToSAP').value = '';
                document.getElementById('LicensePlate').value = '';
                document.getElementById('Plackard').value = '';
                document.getElementById('Variables').innerHTML = '';


            }

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            $scope.exportDriver = function () {
                console.log('Export Driver Recordset');
                if (document.getElementById('POLE').value == null || document.getElementById('POLE').value == "" || document.getElementById('POLE').value == "PO or Pallet#Bottom") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('POLE').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getProdLabel/' + document.getElementById('VATPlantOff').value + "/" + wo_id, '_blank', 'resizable=yes')
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



            $scope.showInputInsp = function (INP, caller) {

                document.getElementById('sumL').style.display = "none";
                document.getElementById('sumQ').style.display = "none";
                document.getElementById('sumC').style.display = "none";
                document.getElementById('sumP').style.display = "none";
                document.getElementById('sumT').style.display = "none";
                document.getElementById('sumI').style.display = "none";
                document.getElementById(INP).style.display = "block";
                document.getElementById(caller).style.display = "block";
            }


        }
    }

   
})();





