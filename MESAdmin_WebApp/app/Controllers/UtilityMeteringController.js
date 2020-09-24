(function () {
    angular
        .module('myApp')
        .controller('UtilityMeteringcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'UtilityMeteringService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, UtilityMeteringService) {

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
                
                { field: 'Area', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'MeterTag', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'CurrentDate_Value', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'PriorDay_Value', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'SevenDayAvg_Value', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'Goal', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'IsManual', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'MajorGroup', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                
                
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
            $scope.setTimeDisplay();
       });

     $("#date").change(function () {
         var ts = this.value;
         window.ts = ts;
         //console.log("this is " + plant );
        var tss = $scope.formatDTtoString(ts);
         document.getElementById('LocalTime').value = 'Selected Date: ' + tss;
         //$scope.setTimeDisplay();
     });



     $scope.formatDTtoString = function (inStr) {
         //var date = new Date(inputDate);
         //if (!isNaN(date.getTime())) {
         //    // Months use 0 index.
         //    return date.getMonth() + 1 + '/' + date.getDate() +'/' + date.getFullYear();
            
         //}
         if ((typeof inStr == 'undefined') || (inStr == null) ||
             (inStr.length <= 0)) {
             return '';
         }
         var year = inStr.substring(0, 4);
         var month = inStr.substring(5, 7);
         var day = inStr.substring(8, 10);
         return month + '/' + day + '/' + year;
     }


     $scope.GridfromButton = function () {
         
         if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "" || document.getElementById('majorgroup').value == "" || document.getElementById('date').value == "") {
             alert("Please Select a Plant");
             return false;
             
         }

         
         else {
            // $scope.loadGrid();
             $scope.refreshGrid();
         }
       }

        

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            majorgroup = document.getElementById('majorgroup').value;
            startdate = document.getElementById('startdate').value;
            date = document.getElementById('date').value ;
            check = document.getElementById('rptheader').checked;
            
            UtilityMeteringService.getUtilityMetering(plant, majorgroup, date).success(function (data) {
                if (data == null || data.UtilityMeteringList == null || data.UtilityMeteringList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.UtilityMeteringList.length
                    );
                    var UtilityMeteringList = data.UtilityMeteringList;
                    $scope.gridOptions.data = UtilityMeteringList;
                    $scope.error = false;
                }
                
            }).finally(function () { $scope.loading = false; })




            if (plant != 'DEN') {
                var url = 'http://' + plant + 'c2012lit/ReportServer?%2fLRS%2f1_Plant_General%2fUtility+Meter%2fWaterUsageDashBoard+-+Shrinked&rs:Command=Render&StProdDate=' + startdate + '&ProdDate=' + date + '&MajorGroup=' + majorgroup + '&rc:Toolbar=' + check + '';
                console.log(url);
                $('#Report' + majorgroup).attr('src', url);
            }
            else {
                 var url = 'http://' + plant + 'c2012pltlit/ReportServer?%2fLRS%2f1_Plant_General%2fUtility+Meter%2fWaterUsageDashBoard+-+Shrinked&rs:Command=Render&StProdDate=' + startdate + '&ProdDate=' + date + '&MajorGroup=' + majorgroup + '&rc:Toolbar=' + check + '';
                                console.log(url);
                                $('#Report' + majorgroup).attr('src', url);

            }

        }

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {  //rowchecked 
                    ///---------  if(objarray) doesnt have row.entity.id
                    console.log('push');

                    document.getElementById('area').value = row.entity.Area;
                    document.getElementById('metertag').value = row.entity.MeterTag;
                    document.getElementById('currentdateval').value = row.entity.CurrentDate_Value;
                    document.getElementById('goal').value = row.entity.Goal;
                    document.getElementById('priordatevalue').value = row.entity.PriorDay_Value;
                    document.getElementById('sevendayavgvalue').value = row.entity.SevenDayAvg_Value;
                    
                    document.getElementById('ismanual').value = row.entity.IsManual;
                    document.getElementById('majorgroup').value = row.entity.MajorGroup;
                    
                    if (row.entity.IsManual == "True") {
                        console.log(row.entity.IsManual+'=Truecase');
                        $scope.openDIV('InputForm');
                        document.getElementById('currentdateval').disabled = false;
                        
                        
                        document.getElementById('priordatevalue').disabled = true;
                        document.getElementById('sevendayavgvalue').disabled = true;

                    }
                    else {
                        console.log(row.entity.IsManual + '=Falsecase');
                        $scope.openDIV('InputForm');
                        document.getElementById('currentdateval').disabled = true;
                        document.getElementById('priordatevalue').disabled = true;
                        document.getElementById('sevendayavgvalue').disabled = true;
                    }

                   // $scope.enabledisable();



                        if (objarray.indexOf(row.entity.row_id) == -1) {
                            objarray.push(row.entity.row_id);
                        
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        $scope.clearTB();
                        document.getElementById('InputForm').style.width = '0';
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });


           

        }

        

        $scope.popSummary = function () {
            document.getElementById('mysidenavRightProd').style.width = '0';
        }

        $scope.Undo = function () {



        }
		
        $scope.CloseInputBox = function () {

			document.getElementById('InputForm').style.width = '0';

        }		

        $scope.popSummary = function () {
            document.getElementById('mysidenavRightProd').style.width = '0';
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
                //document.getElementById('ProcessTB').placeholder = sd  +' in '+ 'DD-MM-YYYY';
                $scope.openDIV('mysidenavRightINV');

            }
            //document.getElementById('ProcessTB').focus();

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
            window.open('http://denm2008mesadm:80/api/Message/getUtilityMetering/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
        }

        $scope.openNav = function (nav) {
            document.getElementById(nav).style.width = "95%";
            document.getElementById(nav).style.zIndex = "999";
        }

        $scope.closeNav = function (nav) {
            document.getElementById(nav).style.width = "0";
        }

        $scope.closeAll = function () {
            document.getElementById('mysidenavRightIntro').style.width = '0';
            document.getElementById('mysidenavRightFW').style.width = '0';
            document.getElementById('mysidenavRightCW').style.width = '0';
            document.getElementById('mysidenavRightEL').style.width = '0';
            document.getElementById('mysidenavRightGS').style.width = '0';
            document.getElementById('InputForm').style.width = '0';
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
                    document.getElementById('mysidenavRightFW').style.width = '0';
                    document.getElementById('mysidenavRightCW').style.width = '0';
                    document.getElementById('mysidenavRightEL').style.width = '0';
                    document.getElementById('mysidenavRightGS').style.width = '0';
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


         $scope.refreshOnSelect = function ()
         {
             var btnName;
             btnName = '#' + document.getElementById('majorgroup').value;

             console.log(btnName);
             $timeout(function () {
                 $(btnName).trigger('click');

             }, 0);
         }

        $scope.addUtilityMetering = function () {

            //if (document.getElementById('ProcessINC').value == null || document.getElementById('ProcessINC').value == "") {
            //    alert("Ticket Number Must be entered");
            //    return false;
            //}
            //else {
            var plantValue = document.getElementById('VATPlantOff').value
            var majorgroupValue = document.getElementById('majorgroup').value
            var areaValue = document.getElementById('area').value
            var metertagValue = document.getElementById('metertag').value
            var currentdatevalValue = document.getElementById('date').value
            var currdateValue = document.getElementById('currentdateval').value
            var goalValue = document.getElementById('goal').value
            
                console.log('New Issue Added');
                UtilityMeteringService.addUtilityMetering(plantValue, majorgroupValue, areaValue, metertagValue, currentdatevalValue, currdateValue, goalValue ).success(function (data) {

                    //UtilityMeteringService.addUtilityMetering().success(function (data) {
                    //if (document.getElementById('Type').value != 'ChangeRequest')
                    //{
                    // $scope.gridApi.core.refresh();
                    // $scope.loadGrid();

                    $scope.clearTB();





                });
            //}
         }

        $scope.SaveAll = function () {
            $scope.addUtilityMetering();
            //$scope.refreshGrid();
            var param;
            param = document.getElementById('majorgroup').value;
            var btnName;
            btnName = '#' + param;
            $timeout(function () {
                $(btnName).trigger('click');
            
            }, 0);


            $scope.clearTB();
        }

        $scope.clearTB = function () {
            document.getElementById('area').value = "";
            document.getElementById('metertag').value = "";
            document.getElementById('currentdateval').value = "";
            document.getElementById('priordatevalue').value = "";
            document.getElementById('sevendayavgvalue').value = "";
            document.getElementById('goal').value = "";
            document.getElementById('ismanual').value = "";
            
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

         $scope.setTimeDisplay = function () {

             //Set Display date for Start and Stop date
             let today = new Date().toISOString().substr(0, 10);
             
             document.querySelector("#startdate").value = today;
             document.querySelector("#date").value = today;
             var tss = $scope.formatDTtoString(today);
             document.getElementById('LocalTime').value = 'Selected Date# ' + tss;
             ////Set Local Timestamp display
             //var pl = document.getElementById('VATPlantOff').value
             //if (pl == "TRA" || pl == "LEM" || pl == "LEW")
             //{
             //    var tz = "America/Los_Angeles";
             //}
             //else if (pl == "WAV" || pl == "ALN" || pl == "REM"){
             //   var tz = "America/New_York";
             //}
             //else
             //{
             //   var tz = "America/Denver";
             //}
            
             //var getTS = new Date().toLocaleString("en-US", { timeZone: tz });
             //document.querySelector("#LocalTime").value = getTS;
             //var tsz = getTS.toISOString().substr(0, 10);
             


             var isChecked = document.getElementById("rptheader").checked;
            
             
          
                 
         }

        //####Autopopulate screen function area#################//
        
         $scope.setTimeDisplay();
         
        //####End Autopopulate screen function area#################//

    }





    

   
})();





