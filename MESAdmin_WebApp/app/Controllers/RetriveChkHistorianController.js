(function () {
   

    angular
        .module('myApp')
        .controller('RetriveChkHistoriancontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'OneStopSupportService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, OneStopSupportService) {

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
                    field: 'ReportName', width: '10%', enableCellEdit: false
                },
                {
                    field: 'Area', width: '10%', enableCellEdit: false
                },
                {
                    field: 'CodeSection', width: '10%', enableCellEdit: false
                },
                {
                    field: 'Sequence', width: '10%', enableCellEdit: false
                },
                {
                    field: 'Label', width: '10%', enableCellEdit: false
                },
                {
                    field: 'Tier1Tag', width: '10%', enableCellEdit: false
                },
                {
                    field: 'Tier2Tag', width: '10%', enableCellEdit: false
                },
                {
                    field: 'Tier2Value', width: '10%', enableCellEdit: false
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
            if (document.getElementById('PTAG').value == null || document.getElementById('PTAG').value == "" || document.getElementById('PTAG').value == "PO or Pallet#Bottom" ) {
               wo_id = '1234567'; 
            }
            else {
                wo_id = document.getElementById('PTAG').value;
            }
            console.log("this is " + plant+ " and value "+wo_id);
            
            OneStopSupportService.getChkHistorian(plant, wo_id).success(function (data) {
                if (data == null || data.ChkHistorianList == null || data.ChkHistorianList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ChkHistorianList.length
                    );
                    var ChkHistorianList = data.ChkHistorianList;
                    $scope.gridOptions.data = ChkHistorianList;
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
                    document.getElementById('ReportName').value = row.entity.ReportName;
                    document.getElementById('Area').value = row.entity.Area;
                    document.getElementById('CodeSection').value = row.entity.CodeSection;
                    document.getElementById('Sequence').value = row.entity.Sequence;
                    document.getElementById('Label').value = row.entity.Label;
                    document.getElementById('Tier1Tag').value = row.entity.Tier1Tag;
                    document.getElementById('Tier2Tag').value = row.entity.Tier2Tag;
                    document.getElementById('Tier2Value').value = row.entity.Tier2Value;
                   
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
                document.getElementById('mysidenavRightChkHistorian').style.width = '0';
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

                document.getElementById('ReportName').value = '';
                document.getElementById('Area').value = '';
                document.getElementById('CodeSection').value = '';
                document.getElementById('Sequence').value = '';
                document.getElementById('Label').value = '';
                document.getElementById('Tier1Tag').value = '';
                document.getElementById('Tier2Tag').value = '';
                document.getElementById('Tier2Value').value = '';


            }

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            $scope.exportDriver = function () {
                console.log('Export Driver Recordset');
                if (document.getElementById('PTAG').value == null || document.getElementById('PTAG').value == "" || document.getElementById('PTAG').value == "PO or Pallet#Bottom") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('PTAG').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getChkHistorian/' + document.getElementById('VATPlantOff').value + "/" + wo_id, '_blank', 'resizable=yes')
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





