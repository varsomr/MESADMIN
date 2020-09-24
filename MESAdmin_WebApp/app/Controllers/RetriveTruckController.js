(function () {
    angular
        .module('myApp')
        .controller('RetriveTruckcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RetriveTruckService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RetriveTruckService) {

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
            columnDefs: [
                {
                    field: 'TruckId', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ReceiptDate', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ItemType', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Item', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Status', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'SentTOSAP', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'LoadType', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'LoadNumber', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ScaleDown', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Tank1TruckId', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Tank2TruckId', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Route1', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Route2', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ScaleInTime', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ScaleOutTime', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ActualGross', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ActualTare', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ActualNet', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'HaulerId', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Trailer1Id', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Trailer2Id', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'TrailerLicense1', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'TrailerLicense2', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Btu1', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Btu2', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Fips1', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Fips2', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'OperatorInitials', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Comments', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Bay', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'BayInTime', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Silo1', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Silo2', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Silo3', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Silo4', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ScanCard', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Supervisor', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ManufactureDate', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'TruckInBayTime', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'RowId', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },



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
             $scope.loadGrid();
         }
       }

        

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            if (document.getElementById('POTE').value == null || document.getElementById('POTE').value == "" || document.getElementById('POTE').value == "TruckID or Material") {
                wo_id = '1234567';
            }
            else {
                wo_id = document.getElementById('POTE').value;
            }
            console.log("this is " + plant + " and value" + wo_id);

            //console.log(options);
            RetriveTruckService.getTruck(plant, wo_id).success(function (data) {
                if (data == null || data.TruckList == null || data.TruckList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.TruckList.length
                    );
                    var TruckList = data.TruckList;
                    $scope.gridOptions.data =TruckList;
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
                    document.getElementById('TruckId').value = row.entity.TruckId;
                    document.getElementById('ReceiptDate').value = row.entity.ReceiptDate;
                    document.getElementById('ItemType').value = row.entity.ItemType;
                    document.getElementById('Item').value = row.entity.Item;
                    document.getElementById('Status').value = row.entity.Status;
                    document.getElementById('SentTOSAPT').value = row.entity.SentTOSAP;
                    document.getElementById('LoadType').value = row.entity.LoadType;
                    document.getElementById('LoadNumber').value = row.entity.LoadNumber;
                    document.getElementById('ScaleDown').value = row.entity.ScaleDown;
                    document.getElementById('Tank1TruckId').value = row.entity.Tank1TruckId;
                    document.getElementById('Tank2TruckId').value = row.entity.Tank2TruckId;
                    document.getElementById('Route1').value = row.entity.Route1;
                    document.getElementById('Route2').value = row.entity.Route2;
                    document.getElementById('ScaleInTime').value = row.entity.ScaleInTime;
                    document.getElementById('ScaleOutTime').value = row.entity.ScaleOutTime;
                    document.getElementById('ActualGross').value = row.entity.ActualGross;
                    document.getElementById('ActualTare').value = row.entity.ActualTare;
                    document.getElementById('ActualNet').value = row.entity.ActualNet;
                    document.getElementById('HaulerId').value = row.entity.HaulerId;
                    document.getElementById('Trailer1Id').value = row.entity.Trailer1Id;
                    document.getElementById('Trailer2Id').value = row.entity.Trailer2Id;
                    document.getElementById('TrailerLicense1').value = row.entity.TrailerLicense1;
                    document.getElementById('TrailerLicense2').value = row.entity.TrailerLicense2;
                    document.getElementById('Btu1').value = row.entity.Btu1;
                    document.getElementById('Btu2').value = row.entity.Btu2;
                    document.getElementById('Fips1').value = row.entity.Fips1;
                    document.getElementById('Fips2').value = row.entity.Fips2;
                    document.getElementById('OperatorInitials').value = row.entity.OperatorInitials;
                    document.getElementById('Comments').value = row.entity.Comments;
                    document.getElementById('Bay').value = row.entity.Bay;
                    document.getElementById('BayInTime').value = row.entity.BayInTime;
                    document.getElementById('Silo1').value = row.entity.Silo1;
                    document.getElementById('Silo2').value = row.entity.Silo2;
                    document.getElementById('Silo3').value = row.entity.Silo3;
                    document.getElementById('Silo4').value = row.entity.Silo4;
                    document.getElementById('ScanCard').value = row.entity.ScanCard;
                    document.getElementById('Supervisor').value = row.entity.Supervisor;
                    document.getElementById('ManufactureDate').value = row.entity.ManufactureDate;
                    document.getElementById('TruckInBayTime').value = row.entity.TruckInBayTime;
                    document.getElementById('RowId').value = row.entity.RowId; document.getElementById('TruckId').value = row.entity.TruckId;
                    document.getElementById('ReceiptDate').value = row.entity.ReceiptDate;
                    document.getElementById('ItemType').value = row.entity.ItemType;
                    document.getElementById('Item').value = row.entity.Item;
                    document.getElementById('Status').value = row.entity.Status;
                    document.getElementById('SentTOSAPT').value = row.entity.SentTOSAP;
                    document.getElementById('LoadType').value = row.entity.LoadType;
                    document.getElementById('LoadNumber').value = row.entity.LoadNumber;
                    document.getElementById('ScaleDown').value = row.entity.ScaleDown;
                    document.getElementById('Tank1TruckId').value = row.entity.Tank1TruckId;
                    document.getElementById('Tank2TruckId').value = row.entity.Tank2TruckId;
                    document.getElementById('Route1').value = row.entity.Route1;
                    document.getElementById('Route2').value = row.entity.Route2;
                    document.getElementById('ScaleInTime').value = row.entity.ScaleInTime;
                    document.getElementById('ScaleOutTime').value = row.entity.ScaleOutTime;
                    document.getElementById('ActualGross').value = row.entity.ActualGross;
                    document.getElementById('ActualTare').value = row.entity.ActualTare;
                    document.getElementById('ActualNet').value = row.entity.ActualNet;
                    document.getElementById('HaulerId').value = row.entity.HaulerId;
                    document.getElementById('Trailer1Id').value = row.entity.Trailer1Id;
                    document.getElementById('Trailer2Id').value = row.entity.Trailer2Id;
                    document.getElementById('TrailerLicense1').value = row.entity.TrailerLicense1;
                    document.getElementById('TrailerLicense2').value = row.entity.TrailerLicense2;
                    document.getElementById('Btu1').value = row.entity.Btu1;
                    document.getElementById('Btu2').value = row.entity.Btu2;
                    document.getElementById('Fips1').value = row.entity.Fips1;
                    document.getElementById('Fips2').value = row.entity.Fips2;
                    document.getElementById('OperatorInitials').value = row.entity.OperatorInitials;
                    document.getElementById('Comments').value = row.entity.Comments;
                    document.getElementById('Bay').value = row.entity.Bay;
                    document.getElementById('BayInTime').value = row.entity.BayInTime;
                    document.getElementById('Silo1').value = row.entity.Silo1;
                    document.getElementById('Silo2').value = row.entity.Silo2;
                    document.getElementById('Silo3').value = row.entity.Silo3;
                    document.getElementById('Silo4').value = row.entity.Silo4;
                    document.getElementById('ScanCard').value = row.entity.ScanCard;
                    document.getElementById('Supervisor').value = row.entity.Supervisor;
                    document.getElementById('ManufactureDate').value = row.entity.ManufactureDate;
                    document.getElementById('TruckInBayTime').value = row.entity.TruckInBayTime;
                    document.getElementById('RowId').value = row.entity.RowId;
                        //$scope.openDIV('mysidenavRightSummaryT'); 
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


            $scope.popSummary = function () {
                document.getElementById('mysidenavRightTruck').style.width = '0';
            }    

            $scope.Undo = function () {

                document.getElementById('TruckId').value = '';
                document.getElementById('ReceiptDate').value = '';
                document.getElementById('ItemType').value = '';
                document.getElementById('Item').value = '';
                document.getElementById('Status').value = '';
                document.getElementById('SentTOSAPT').value = '';
                document.getElementById('LoadType').value = '';
                document.getElementById('LoadNumber').value = '';
                document.getElementById('ScaleDown').value = '';
                document.getElementById('Tank1TruckId').value = '';
                document.getElementById('Tank2TruckId').value = '';
                document.getElementById('Route1').value = '';
                document.getElementById('Route2').value = '';
                document.getElementById('ScaleInTime').value = '';
                document.getElementById('ScaleOutTime').value = '';
                document.getElementById('ActualGross').value = '';
                document.getElementById('ActualTare').value = '';
                document.getElementById('ActualNet').value = '';
                document.getElementById('HaulerId').value = '';
                document.getElementById('Trailer1Id').value = '';
                document.getElementById('Trailer2Id').value = '';
                document.getElementById('TrailerLicense1').value = '';
                document.getElementById('TrailerLicense2').value = '';
                document.getElementById('Btu1').value = '';
                document.getElementById('Btu2').value = '';
                document.getElementById('Fips1').value = '';
                document.getElementById('Fips2').value = '';
                document.getElementById('OperatorInitials').value = '';
                document.getElementById('Comments').value = '';
                document.getElementById('Bay').value = '';
                document.getElementById('BayInTime').value = '';
                document.getElementById('Silo1').value = '';
                document.getElementById('Silo2').value = '';
                document.getElementById('Silo3').value = '';
                document.getElementById('Silo4').value = '';
                document.getElementById('ScanCard').value = '';
                document.getElementById('Supervisor').value = '';
                document.getElementById('ManufactureDate').value = '';
                document.getElementById('TruckInBayTime').value = '';
                document.getElementById('RowId').value = '';
                document.getElementById('TruckId').value = '';
                document.getElementById('ReceiptDate').value = '';
                document.getElementById('ItemType').value = '';
                document.getElementById('Item').value = '';
                document.getElementById('Status').value = '';
                document.getElementById('SentTOSAP').value = '';
                document.getElementById('LoadType').value = '';
                document.getElementById('LoadNumber').value = '';
                document.getElementById('ScaleDown').value = '';
                document.getElementById('Tank1TruckId').value = '';
                document.getElementById('Tank2TruckId').value = '';
                document.getElementById('Route1').value = '';
                document.getElementById('Route2').value = '';
                document.getElementById('ScaleInTime').value = '';
                document.getElementById('ScaleOutTime').value = '';
                document.getElementById('ActualGross').value = '';
                document.getElementById('ActualTare').value = '';
                document.getElementById('ActualNet').value = '';
                document.getElementById('HaulerId').value = '';
                document.getElementById('Trailer1Id').value = '';
                document.getElementById('Trailer2Id').value = '';
                document.getElementById('TrailerLicense1').value = '';
                document.getElementById('TrailerLicense2').value = '';
                document.getElementById('Btu1').value = '';
                document.getElementById('Btu2').value = '';
                document.getElementById('Fips1').value = '';
                document.getElementById('Fips2').value = '';
                document.getElementById('OperatorInitials').value = '';
                document.getElementById('Comments').value = '';
                document.getElementById('Bay').value = '';
                document.getElementById('BayInTime').value = '';
                document.getElementById('Silo1').value = '';
                document.getElementById('Silo2').value = '';
                document.getElementById('Silo3').value = '';
                document.getElementById('Silo4').value = '';
                document.getElementById('ScanCard').value = '';
                document.getElementById('Supervisor').value = '';
                document.getElementById('ManufactureDate').value = '';
                document.getElementById('TruckInBayTime').value = '';
                document.getElementById('RowId').value = '';


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
                if (document.getElementById('POTE').value == null || document.getElementById('POTE').value == "" || document.getElementById('POTE').value == "TruckID or Material") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('POTE').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getTruck/' + document.getElementById('VATPlantOff').value+"/"+wo_id, '_blank', 'resizable=yes')
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





