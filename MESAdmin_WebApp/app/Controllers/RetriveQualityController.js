(function () {
    angular
        .module('myApp')
        .controller('RetriveQualitycontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RetriveQualityService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RetriveQualityService) {

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
                    field: 'SerialNumber', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'ProductionOrder', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'LotID', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Name', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'SavedSampleTime', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'SampleTime', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Value', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'USL', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Target', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'LSL', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Alarms', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Label', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Flag', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Comment', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Cp', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Cpk', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'IgnoreSample', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'WorkCenter', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Status', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Spare1', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Spare2', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Spare3', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Spare4', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Spare5', width: '15%', enableCellEdit: false,
                    cellTemplate: '<div class=ui-grid-cell-contents wrap white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'SampleID', width: '15%', enableCellEdit: false,
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
            if (document.getElementById('POQE').value == null || document.getElementById('POQE').value == "" || document.getElementById('POQE').value == "PO or SampleSN") {
                wo_id = '1234567';
            }
            else {
                wo_id = document.getElementById('POQE').value;
            }
            console.log("this is " + plant+ "and Value "+wo_id);

            //console.log(options);
            RetriveQualityService.getQuality(plant, wo_id).success(function (data) {
                if (data == null || data.QualityList == null || data.QualityList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.QualityList.length
                    );
                    var QualityList = data.QualityList;
                    $scope.gridOptions.data =QualityList;
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
                    document.getElementById('SerialNumber').value = row.entity.SerialNumber;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    document.getElementById('LotIDQ').value = row.entity.LotID;
                    document.getElementById('Name').value = row.entity.Name;
                    document.getElementById('SavedSampleTime').value = row.entity.SavedSampleTime;
                    document.getElementById('SampleTime').value = row.entity.SampleTime;
                    document.getElementById('ValueQ').value = row.entity.Value;
                    document.getElementById('USL').value = row.entity.USL;
                    document.getElementById('Target').value = row.entity.Target;
                    document.getElementById('LSL').value = row.entity.LSL;
                    document.getElementById('Alarms').value = row.entity.Alarms;
                    document.getElementById('Label').value = row.entity.Label;
                    document.getElementById('Flag').value = row.entity.Flag;
                    document.getElementById('Comment').value = row.entity.Comment;
                    document.getElementById('Cp').value = row.entity.Cp;
                    document.getElementById('Cpk').value = row.entity.Cpk;
                    document.getElementById('IgnoreSample').value = row.entity.IgnoreSample;
                    document.getElementById('StatusQ').value = row.entity.Status;
                    document.getElementById('Spare1Q').value = row.entity.Spare1;
                    document.getElementById('Spare2Q').value = row.entity.Spare2;
                    document.getElementById('Spare3Q').value = row.entity.Spare3;
                    document.getElementById('Spare4Q').value = row.entity.Spare4;
                    document.getElementById('Spare5Q').value = row.entity.Spare5;
                    document.getElementById('SampleID').value = row.entity.SampleID;
                       // $scope.openDIV('mysidenavRightSummaryQ'); 
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
                document.getElementById('mysidenavRightQuality').style.width = '0';
            }    

            $scope.Undo = function () {

                document.getElementById('SerialNumber').value = "";
                document.getElementById('ProductionOrder').value = "";
                document.getElementById('LotIDQ').value = "";
                document.getElementById('Name').value = "";
                document.getElementById('SavedSampleTime').value = "";
                document.getElementById('SampleTime').value = "";
                document.getElementById('ValueQ').value = "";
                document.getElementById('USL').value = "";
                document.getElementById('Target').value = "";
                document.getElementById('LSL').value = "";
                document.getElementById('Alarms').value = "";
                document.getElementById('Label').value = "";
                document.getElementById('Flag').value = "";
                document.getElementById('Comment').value = "";
                document.getElementById('Cp').value = "";
                document.getElementById('Cpk').value = "";
                document.getElementById('IgnoreSample').value = "";
                document.getElementById('StatusQ').value = "";
                document.getElementById('Spare1Q').value = "";
                document.getElementById('Spare2Q').value = "";
                document.getElementById('Spare3Q').value = "";
                document.getElementById('Spare4Q').value = "";
                document.getElementById('Spare5Q').value = "";
                document.getElementById('SampleID').value = "";


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
                if (document.getElementById('POQE').value == null || document.getElementById('POQE').value == "" || document.getElementById('POQE').value == "PO or SampleSN") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('POQE').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getQuality/' + document.getElementById('VATPlantOff').value + "/" + wo_id, '_blank', 'resizable=yes')
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





