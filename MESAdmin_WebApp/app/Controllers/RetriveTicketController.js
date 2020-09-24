(function () {
    angular
        .module('myApp')
        .controller('RetriveTicketcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'RetriveTicketService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, RetriveTicketService) {

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
                { field: 'Category', width: '10%' },
                { field: 'IncidentType', width: '10%' },
                { field: 'IncidentID', width: '10%' },
                { field: 'ShortDescription', width: '30%' },
                { field: 'TotalApps', width: '10%' },
                { field: 'TotalReports', width: '10%' },
                { field: 'TotalIncidents', width: '10%' },
                { field: 'TotalSRVRequests', width: '10%' },


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
         //if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
         //    alert("Please Select A Plant from the Dropdown");
         //    return false;
         //}
         //else {
             $scope.loadGrid();
         //}
       }

        

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            if (document.getElementById('POTK').value == null || document.getElementById('POTK').value == "" ||document.getElementById('POTK').value == "Ticket#" ) {
                wo_id = '1234567';
            }
            else {
                wo_id = document.getElementById('POTK').value;
            }
           
            console.log("this is Ticket# " + wo_id);

            //console.log(options);
            RetriveTicketService.getTicket(wo_id).success(function (data) {
                if (data == null || data.TicketList == null || data.TicketList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.TicketList.length
                    );
                    var TicketList = data.TicketList;
                    $scope.gridOptions.data =TicketList;
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
                        //document.getElementById('Category').value = row.entity.Category;
                        //document.getElementById('IncidentType').value = row.entity.IncidentType;
                        //document.getElementById('IncidentID').value = row.entity.IncidentID;
                        //document.getElementById('ShortDescription').value = row.entity.ShortDescription;
                        document.getElementById('TotalApps').value = row.entity.TotalApps;
                        document.getElementById('TotalReports').value = row.entity.TotalReports;
                        document.getElementById('TotalIncidents').value = row.entity.TotalIncidents;
                        document.getElementById('TotalSRVRequests').value = row.entity.TotalSRVRequests;

                        var url; //You can get this url dynamically from an ajax request or from a form etc
                        var tot;
                        var tat;
                        var assign;
                        tot = row.entity.TotalApps;
                        tat = row.entity.TotalReports;
                        assign = 'Ticket_Ratio';

                        url = "app\\Views\\ChartTicket.html?" + "Test1=" + tot + "&Test2=" + tat + "&assign=" + assign;
                        // To Do : A function to populate url with a valid url from any method you prefer.
                        console.log(url);
                        setURL(url)
                        //$scope.openDIV('mysidenavRightSummary'); 
                        if (objarray.indexOf(row.entity.IncidentID) == -1) {
                            objarray.push(row.entity.IncidentID);
                        
                    }
                }
                else
                    if (objarray.indexOf(row.entity.IncidentID) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        $scope.Undo();
                        objarray.splice(objarray.indexOf(row.entity.IncidentID), 1)
                    }

            });
            gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
                $scope.lastCellEdited = ' ID: ' + rowEntity.InidentID + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;

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

                //document.getElementById('Category').value = '';
                //document.getElementById('IncidentType').value = '';
                //document.getElementById('IncidentID').value = '';
                //document.getElementById('ShortDescription').value = '';
                document.getElementById('TotalApps').value = '';
                document.getElementById('TotalReports').value = '';
                document.getElementById('TotalIncidents').value = '';
                document.getElementById('TotalSRVRequests').value = '';

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
                if (document.getElementById('POTK').value == null || document.getElementById('POTK').value == "" || document.getElementById('POTK').value == "Ticket#") {
                    wo_id = '1234567';
                }
                else {
                    wo_id = document.getElementById('POTK').value;
                }
                window.open('http://denm2008mesadm:93/api/Message/getTicket/' + document.getElementById('VATPlantOff').value + "/" + document.getElementById('POTK').value, '_blank', 'resizable=yes')
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
                document.getElementById('mysidenavRightTicket').style.width = '0';
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
                document.getElementById('mysidenavRightTicket').style.width = '0';
                document.getElementById(nav).style.width = '90.352%';
            } 

        }
    }





    

   
})();





