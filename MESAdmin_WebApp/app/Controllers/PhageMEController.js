(function () {
    angular
        .module('myApp')
        .controller('PhageMEcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'PhageMEService'];

    app.config(function ($httpProvider) {

    });




    function controller($scope, $timeout, uiGridConstants, PhageMEService) {
    

        $scope.gridOptionsPhageME = {
            showGridFooter: false,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            enableFiltering: false,
            enableCellEdit: false,
            enableGridMenu: false,
            columnDefs: [

                { field: 'ProductionDate', displayName: 'ProductionDate', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'Line', displayName: 'Line', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'Location', displayName: 'Location', width: '13%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'LogVatTankSilo', displayName: 'LogVatTankSilo', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'Phage', displayName: 'Phage', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ID', displayName: 'ID', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                
                
            ],
        };
        
        $scope.GridfromButtonPhageME = function () {

            //if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "" ) {
            //    alert("Please Select a Plant");
            //    return false;

            //}
            //else {
                $scope.refreshGridPhageME();
            //}
        }

        $scope.loadGridPhageME = function () {
            $scope.loading = true;
            console.log('loading grid');
            majorgroup = 'sel';
           

            PhageMEService.getPhageME(majorgroup).success(function (data) {
                if (data == null || data.PhageMEList == null || data.PhageMEList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsPhageME.paginationPageSizes.push(
                        data.PhageMEList.length
                    );
                    var PhageMEList = data.PhageMEList;
                    $scope.gridOptionsPhageME.data = PhageMEList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })
            
        }

        $scope.loadGridPhageME();

        $scope.FormatDT= function (date) {
           
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
            
        }

        $scope.gridOptionsPhageME.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {
                    console.log('push');
                  

                   
                    var d = new Date(row.entity.ProductionDate); // 5 years ago
                    document.getElementById('ProductionDate').value = $scope.FormatDT(d);
                    document.getElementById('Line').value = row.entity.Line;
                    document.getElementById('Location').value = row.entity.Location;
                    document.getElementById('LogVatTankSilo').value = row.entity.LogVatTankSilo;
                    document.getElementById('Phage').value = row.entity.Phage;
                    document.getElementById('ID').value = row.entity.ID;
                    

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        if (document.getElementById('chkEnabled').checked == false) {
                            document.getElementById('ProductionDate').value = "";
                            document.getElementById('Line').value = "";
                            document.getElementById('Location').value = "";
                            document.getElementById('LogVatTankSilo').value = "";
                            document.getElementById('Phage').value = "";
                            document.getElementById('ID').value = "";
                            document.getElementById('chkEnabled').checked = false;
                        }
                        
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });
            
        }

    


        $scope.refreshGridPhageME = function () {
            console.log('refreshPhageME grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsPhageME.data = [];

            $timeout(function () {
                $scope.loadGridPhageME();
            }, 1000);
        }



        

        $scope.copy = function (param, area) {
            document.getElementById('IATo1').value = param;
            document.getElementById('IssueAreaTB1').value = area;
            var paramPH = '#' + param
            var sd = $(paramPH).attr('placeholder');

            $('label[for^="' + sd + '"]').fadeIn();
            console.log(paramPH, sd);
            if (sd != 'INVDate') {
                document.getElementById('ProcessTB').value = '';
                document.getElementById('ProcessTB').placeholder = sd;
            }
            else {
            
                $scope.openDIV('mysidenavRightINV');

            }
            

        }

        $scope.copyToDIV = function () {
            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select A Plant from the Dropdown");
                //return false;
                //openDropdown("sel");
            }
            else {

                //document.getElementById('IATo1').value = '';
                //document.getElementById('IssueAreaTB1').value = '';
                var param;
                param = document.getElementById('IATo1').value;
                console.log(param);
                document.getElementById(param).value = document.getElementById('ProcessTB').value;
                console.log(document.getElementById(param).value);
                var btnName;
                btnName = '#' + param + 'btn';
                var fullarea = '#' + document.getElementById('IssueAreaTB1').value;
                console.log(btnName, fullarea);
                $timeout(function () {
                    $(btnName).trigger('click');
                    $(fullarea).trigger('click');
                }, 0);

            }
        }




        $scope.clearFilters = function () {
            console.log('Clear Filters');
            $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
        }


        $scope.exportDriver = function () {
            console.log('Export Driver Recordset');
            window.open('http://denm2008mesadm:93/api/Message/getPhageME/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
        }

        $scope.openNav = function (nav) {
            document.getElementById(nav).style.width = "95%";
            document.getElementById(nav).style.zIndex = "999";
        }

        $scope.closeNav = function (nav) {
            document.getElementById(nav).style.width = "0";
        }

        $scope.closeAll = function () {
            //document.getElementById('mysidenavRightIntro').style.width = '0';
            //document.getElementById('mysidenavRightFW').style.width = '0';
            //document.getElementById('mysidenavRightCW').style.width = '0';
            //document.getElementById('mysidenavRightEL').style.width = '0';
            //document.getElementById('mysidenavRightGS').style.width = '0';
            //document.getElementById('InputForm').style.width = '0';
        }

        $scope.openDIV = function (nav) {
            //document.getElementById('mysidenavRightIntro').style.width = '0';
            //document.getElementById('mysidenavRightFW').style.width = '0';
            //document.getElementById('mysidenavRightCW').style.width = '0';
            //document.getElementById('mysidenavRightEL').style.width = '0';
            //document.getElementById('mysidenavRightGS').style.width = '0';
            //document.getElementById('InputForm').style.width = '0';
            document.getElementById(nav).style.width = '47.5%';


        }
         $scope.openDIVMOD = function (nav,area) {
                    document.getElementById('mysidenavRightIntro').style.width = '0';
                    document.getElementById('mysidenavRightPhageME').style.width = '0';
                    document.getElementById('InputForm').style.width = '0';
                    document.getElementById(nav).style.width = '95%';
                    document.getElementById('majorgroup').value = area;

                    var btnName;
                    btnName = '#' + area;

                    console.log(btnName);
                    $timeout(function () {
                        $(btnName).trigger('click');

                    }, 0);


        }

        $scope.openDIVReport = function (nav,area) {
                            document.getElementById('mysidenavRightIntro').style.width = '0';
                            document.getElementById('mysidenavRightMANTEMP').style.width = '0';
                            document.getElementById('mysidenavRightCHEMENTRY').style.width = '0';
                            document.getElementById('mysidenavRightREPORT').style.width = '0';
                            document.getElementById('mysidenavRightPhageME').style.width = '0';
                            document.getElementById('InputForm').style.width = '0';
                            document.getElementById(nav).style.width = '95%';
                            //document.getElementById('majorgroup').value = area;

                            //var btnName;
                            //btnName = '#' + area;

                            //console.log(btnName);
                            //$timeout(function () {
                            //    $(btnName).trigger('click');

                            //}, 0);
                   
                            var url = 'http://' + document.getElementById('VATPlantOff').value + 'c2012lit'+area;
                                console.log(url);
                                $('#ReportDisplay').attr('src', url);

                            


                }
         $scope.refreshOnSelect = function ()
         {
             var btnName;
             btnName = '#' + document.getElementById('majorgroup').value;

             console.log(btnName);
             $timeout(function () {
                 $(btnName).trigger('click');

             }, 0);
         }

        $scope.addPhageME = function (action) {
            var IDValue = document.getElementById('ID').value
            var ProductionDateValue = document.getElementById('ProductionDate').value
            var LineValue = document.getElementById('Line').value
            var LocationValue = document.getElementById('Location').value
            var LogVatTankSiloValue = document.getElementById('LogVatTankSilo').value
            var PhageValue = document.getElementById('Phage').value
            var ActionValue = action;
            console.log('New Issue Added');
            PhageMEService.addPhageME(IDValue, ProductionDateValue, LineValue, LocationValue,LogVatTankSiloValue, PhageValue, ActionValue).success(function (data) {
            $scope.clearTB();
          });

         }

        $scope.SaveAll = function () {
            $scope.addPhageME('ins');
            //$scope.refreshGrid();
            var btnName;
            btnName = '#getPhageME';
            $timeout(function () {
                $(btnName).trigger('click');
            
            }, 0);


            $scope.clearTB();
        }
        $scope.DeleteAll = function () {
            $scope.addPhageME('del');
            //$scope.refreshGrid();
            var btnName;
            btnName = '#getPhageME';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTB();
        }
        $scope.UpdateAll = function () {
            $scope.addPhageME('upd');
            
            var btnName;
            btnName = '#getPhageME';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTB();
        }



        $scope.clearTB = function () {
            if (document.getElementById('chkEnabled').checked == false) {
                    document.getElementById('ProductionDate').value = "";
                    document.getElementById('Line').value = "";
                    document.getElementById('Location').value = "";
                    document.getElementById('LogVatTankSilo').value = "";
                    document.getElementById('Phage').value = "";
                    document.getElementById('ID').value = "";
                    document.getElementById('chkEnabled').checked = false;
            }
            
        }

        $scope.clearVals = function () {
            document.getElementById('currentdateval').value = "0.00";

            document.getElementById('goal').value = "0.00";


        }
        $scope.EnableBoxes = function () {
            
            document.getElementById("area").disabled = false;
            document.getElementById('metertag').disabled = false;
            document.getElementById('currentdateval').disabled = false;
            //document.getElementById('priordatevalue').disabled = false;
            //document.getElementById('sevendayavgvalue').disabled = false;
            document.getElementById('goal').disabled = false;
          //  document.getElementById('ismanual').disabled = false;


           
        }

        $scope.blurT = function (TB) {

            //document.getElementById(TB).value = "";
            //document.getElementById(TB).style.backgroundColor = 'transparent';

        }

        $scope.assignT = function (TB,MSG) {
            document.getElementById(TB).value = MSG;
            document.getElementById('MsgBox').value = MSG;
            document.getElementById('ProcessINC').style.backgroundColor = 'lightgreen';
            document.getElementById('ProcessINC').style.color = 'darkslategrey';
            document.getElementById('ProcessTBU').style.backgroundColor = 'lightgreen';
            document.getElementById('ProcessTBU').style.color = 'darkslategrey';
            document.getElementById('ProcessTBU').focus();
        }



        $scope.showInput = function (INP, caller) {

            document.getElementById('mysidenavRightEL').style.display = "none";
            document.getElementById('mysidenavRightGS').style.display = "none";

            document.getElementById(INP).style.display = "block";
            document.getElementById(caller).style.display = "block";



        }


        // $scope.ajaxStart=function() {

        //    document.getElementById("loading").style.display = 'block';
        //    document.getElementById("rptholder").style.display = 'none';


        //}


        //$scope.ajaxStop=function() {

        //    document.getElementById("loading").style.display = 'none';
        //    document.getElementById("rptholder").style.display = 'block';

        //}

         $scope.maximize=function() {

             //var url = document.getElementById('Reports').src;
            //var tabOrWindow = window.location.href = url;
            //tabOrWindow.focus();
             var plant = document.getElementById('VATPlantOff').value;
             console.log(plant);
             if (plant != 'DEN') {

                 var url = 'http://' + plant + 'c2012lit/Reports/Pages/Report.aspx?ItemPath=%2fLRS%2f1_Plant_General%2fUtility+Meter%2fWaterUsageDashBoard';
                 console.log(url);
             }
             else {
                 var url = 'http://' + plant + 'c2012pltlit/Reports/Pages/Report.aspx?ItemPath=%2fLRS%2f1_Plant_General%2fUtility+Meter%2fWaterUsageDashBoard';
                 console.log(url);
             }
            var tabOrWindow = window.open(url);
        }

         

          $scope.SelectElement=function(id, valueToSelect) {
             var element = document.getElementById(id);
             element.value = valueToSelect;
         }

         $scope.function_one = function (url) {
             var name = 'plant';
             
             if (!url) url = window.location.href;
             name = name.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pid = decodeURIComponent(results[2].replace(/\+/g, " "))
             $scope.title = pid;
            // alert(pid)
             //document.getElementById('plant').value = pid;   
             $scope.SelectElement("plant", pid);
            // plant
             $scope.SelectElement("VATPlantOff", pid);

             
          

         }
         $scope.function_one();


         


        //####Autopopulate screen function area#################//
        
       // Display of date
        //let today = new Date().toISOString().substr(0, 10);
        //document.querySelector("#timestampid").value = today;
        //document.querySelector("#startdate").value = today;
         //document.getElementById('timestampid').value = Date();

        //####End Autopopulate screen function area#################//

    }





    

   
})();



function ChooseCircuit(data) {
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("CircuitT").value = dataRec;

}

