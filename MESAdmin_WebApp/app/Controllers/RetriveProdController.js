(function () {
    angular
        .module('myApp')
        .controller('RetriveProdcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RetriveProdService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RetriveProdService) {

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
    field: 'PO', width: '15%', enableCellEdit: false, 
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
},
{
    field: 'Operation', width: '15%', enableCellEdit: false,
cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'Item', width: '15%', enableCellEdit: false, 
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'Batch', width: '15%', enableCellEdit: false, 
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'ReasonCode', width: '15%', enableCellEdit: false, 
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'WorkCenter', width: '15%', enableCellEdit: false, 
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
{
    field: 'JobStatus', width: '15%', enableCellEdit: false, 
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'ent_id', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'to_ent_id', width: '15%', enableCellEdit: false, 
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'qty', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'SentToSAP', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },

 {
     field: 'comments', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'spare1', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'spare2', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'spare3', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'spare4', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'last_edit_by', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'last_edit_at', width: '15%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
{
    field: 'created_at_utc', width: '20%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
 },
 {
     field: 'created_at_local', width: '20%', enableCellEdit: false,
     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
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
            if (document.getElementById('POPE').value == null || document.getElementById('POPE').value == "" ||document.getElementById('POPE').value == "PO or Batch#" ) {
                wo_id = '1234567';
            }
            else {
                wo_id = document.getElementById('POPE').value;
            }
           
            console.log("this is @" + plant +" and PO# is " + wo_id);

            //console.log(options);
            RetriveProdService.getProduction(plant, wo_id).success(function (data) {
                if (data == null || data.ProductionList == null || data.ProductionList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ProductionList.length
                    );
                    var ProductionList = data.ProductionList;
                    $scope.gridOptions.data =ProductionList;
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
                        document.getElementById('POP').value = row.entity.PO;
                        document.getElementById('itemP').value = row.entity.Item;
                        document.getElementById('OperationP').value = row.entity.Operation;
                        document.getElementById('BatchP').value = row.entity.Batch;
                        document.getElementById('ReasonCode').value = row.entity.ReasonCode;
                        document.getElementById('WorkCenter').value = row.entity.WorkCenter;
                        document.getElementById('JobStatus').value = row.entity.JobStatus;
                        document.getElementById('ent_id').value = row.entity.ent_id;
                        document.getElementById('to_ent_id').value = row.entity.to_ent_id;
                        document.getElementById('qty').value = row.entity.qty;
                        document.getElementById('SentToSAP').value = row.entity.SentToSAP;
                        document.getElementById('comments').value = row.entity.comments;
                        document.getElementById('spare1').value = row.entity.spare1;
                        document.getElementById('spare2').value = row.entity.spare2;
                        document.getElementById('spare3').value = row.entity.spare3;
                        document.getElementById('spare4').value = row.entity.spare4;
                        document.getElementById('last_edit_by').value = row.entity.last_edit_by;
                        document.getElementById('last_edit_at').value = row.entity.last_edit_at;
                        document.getElementById('created_at_utc').value = row.entity.created_at_utc;
                        document.getElementById('created_at_local').value = row.entity.created_at_local;
                       // $scope.openDIV('mysidenavRightSummaryP'); 
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
                document.getElementById('mysidenavRightProd').style.width = '0';
            }    

            $scope.Undo = function () {

                document.getElementById('POP').value = '';
                document.getElementById('itemP').value = '';
                document.getElementById('OperationP').value = '';
                document.getElementById('BatchP').value = '';
                document.getElementById('ReasonCode').value = '';
                document.getElementById('WorkCenter').value = '';
                document.getElementById('JobStatus').value = '';
                document.getElementById('ent_id').value = '';
                document.getElementById('to_ent_id').value = '';
                document.getElementById('qty').value = '';
                document.getElementById('SentToSAP').value = '';
                document.getElementById('comments').value = '';
                document.getElementById('spare1').value = '';
                document.getElementById('spare2').value = '';
                document.getElementById('spare3').value = '';
                document.getElementById('spare4').value = '';
                document.getElementById('last_edit_by').value = '';
                document.getElementById('last_edit_at').value = '';
                document.getElementById('created_at_utc').value = '';
                document.getElementById('created_at_local').value = '';

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
                if (document.getElementById('POPE').value == null || document.getElementById('POPE').value == "" || document.getElementById('POPE').value == "PO or Batch#") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('POPE').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getProduction/' + document.getElementById('VATPlantOff').value + "/" + wo_id, '_blank', 'resizable=yes')
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





