(function () {
   

    angular
        .module('myApp')
        .controller('RetriveConscontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RetriveConsService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RetriveConsService) {

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
     field: 'sublot_no', width: '15%', enableCellEdit: false,
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
     field: 'spare3', width: '10%', enableCellEdit: false,
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
           
            if (document.getElementById('POCE').value == null || document.getElementById('POCE').value == "" || document.getElementById('POCE').value == "PO or Batch#")
            {
                wo_id = '1234567';
            }
            else
            {
                 wo_id = document.getElementById('POCE').value;
            }
            console.log("this is @" + plant + wo_id +" and PO# "+wo_id);

            //console.log(options);
            RetriveConsService.getConsumption(plant,wo_id).success(function (data) {
                if (data == null || data.ConsumptionList == null || data.ConsumptionList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ConsumptionList.length
                    );
                    var ConsumptionList = data.ConsumptionList;
                    $scope.gridOptions.data = ConsumptionList;
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
                    document.getElementById('POC').value = row.entity.PO;
                    document.getElementById('itemC').value = row.entity.Item;
                    document.getElementById('OperationC').value = row.entity.Operation;
                    document.getElementById('BatchC').value = row.entity.Batch;
                    document.getElementById('sublot_noC').value = row.entity.Batch;
                    document.getElementById('ReasonCodeC').value = row.entity.ReasonCode;
                    document.getElementById('WorkCenterC').value = row.entity.WorkCenter;
                    document.getElementById('JobStatusC').value = row.entity.JobStatus;
                    document.getElementById('ent_idC').value = row.entity.ent_id;
                    document.getElementById('to_ent_idC').value = row.entity.to_ent_id;
                    document.getElementById('qtyC').value = row.entity.qty;
                    document.getElementById('SentToSAPC').value = row.entity.SentToSAP;
                    document.getElementById('commentsC').value = row.entity.comments;
                    document.getElementById('spare1C').value = row.entity.spare1;
                    document.getElementById('spare2C').value = row.entity.spare2;
                    document.getElementById('spare3C').value = row.entity.spare3;
                    document.getElementById('spare4C').value = row.entity.spare4;
                    document.getElementById('last_edit_byC').value = row.entity.last_edit_by;
                    document.getElementById('last_edit_atC').value = row.entity.last_edit_at;
                    document.getElementById('created_at_utcC').value = row.entity.created_at_utc;
                    document.getElementById('created_at_localC').value = row.entity.created_at_local;
                    //$scope.openDIV('mysidenavRightSummaryC');
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
                document.getElementById('mysidenavRightCons').style.width = '0';
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

                document.getElementById('POC').value = '';
                document.getElementById('POC').value = '';
                document.getElementById('itemC').value = '';
                document.getElementById('OperationC').value = '';
                document.getElementById('BatchC').value = '';
                document.getElementById('sublot_noC').value = '';
                document.getElementById('ReasonCodeC').value = '';
                document.getElementById('WorkCenterC').value = '';
                document.getElementById('JobStatusC').value = '';
                document.getElementById('ent_idC').value = '';
                document.getElementById('to_ent_idC').value = '';
                document.getElementById('qtyC').value = '';
                document.getElementById('SentToSAPC').value = '';
                document.getElementById('commentsC').value = '';
                document.getElementById('spare1C').value = '';
                document.getElementById('spare2C').value = '';
                document.getElementById('spare3C').value = '';
                document.getElementById('spare4C').value = '';
                document.getElementById('last_edit_byC').value = '';
                document.getElementById('last_edit_atC').value = '';
                document.getElementById('created_at_utcC').value = '';
                document.getElementById('created_at_localC').value = '';

            }

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            $scope.exportDriver = function () {
                if (document.getElementById('POCE').value == null || document.getElementById('POCE').value == "" || document.getElementById('POCE').value == "PO or Batch#") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('POCE').value;
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





