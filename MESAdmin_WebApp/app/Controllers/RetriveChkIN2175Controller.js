(function () {
   

    angular
        .module('myApp')
        .controller('RetriveChkIN2175controller', controller)

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
                { field: 'ReportName', width: '20%', enableCellEdit: false },
                { field: 'Area', width: '20%', enableCellEdit: false },
                { field: 'CodeSection', width: '20%', enableCellEdit: false },
                { field: 'Sequence', width: '20%', enableCellEdit: false },
                { field: 'Label', width: '20%', enableCellEdit: false },
                { field: 'MIC', width: '20%', enableCellEdit: false },
                { field: 'Last_Sampletime', width: '20%', enableCellEdit: false },



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
            if (document.getElementById('2175').value == null || document.getElementById('2175').value == "" || document.getElementById('2175').value == "PO or Pallet#Bottom" ) {
               wo_id = '1234567'; 
            }
            else {
                wo_id = document.getElementById('2175').value;
            }
            console.log("this is " + plant+ " and value "+wo_id);
            
            OneStopSupportService.getChkIN2175(plant, wo_id).success(function (data) {
                if (data == null || data.ChkIN2175List == null || data.ChkIN2175List.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ChkIN2175List.length
                    );
                    var ChkIN2175List = data.ChkIN2175List;
                    $scope.gridOptions.data = ChkIN2175List;
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
                    document.getElementById('MIC').value = row.entity.MIC;
                    document.getElementById('Last_Sampletime').value = row.entity.Last_Sampletime;
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


                document.getElementById('ReportName').value = '';
                document.getElementById('Area').value = '';
                document.getElementById('CodeSection').value = '';
                document.getElementById('Sequence').value = '';
                document.getElementById('Label').value = '';
                document.getElementById('MIC').value = '';
                document.getElementById('Last_Sampletime').value = '';


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
                window.open('http://denm2008mesadm:93/api/Message/getChkIN2175/' + document.getElementById('VATPlantOff').value + "/" + wo_id, '_blank', 'resizable=yes')
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





