(function () {
    angular
        .module('myApp')
        .controller('processmappingcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'processmappingService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, processmappingService) {

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
                { field: 'Title', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'IssueAreaTB1', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'IssueAreaTB2', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'NumSteps', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB1', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg1', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB2', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg2', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB3', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg3', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB4', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg4', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB5', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg5', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB6', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg6', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB7', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg7', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB8', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg8', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB9', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg9', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTB10', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProcessTBMsg10', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'InsertDateTime', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'row_id', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

            ],
        };


     
       $scope.showGrid = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            //document.getElementById(elementId).style.display = 'block';
        }



     //$("#plant").change(function () {
     //       var plant = this.value;
     //       window.plant = plant;
     //       //console.log("this is " + plant );
     //       document.getElementById('VATPlantOff').value = plant;
     //  });

     $scope.GridfromButton = function () {
         document.getElementById('mysidenavRightMain').style.width = '0';
         document.getElementById('mysidenavRightImage').style.width = '0';
         document.getElementById('mysidenavRightGrid').style.width = '90.352%';

         
         //$scope.loadGrid();
        // $scope.refreshGrid();
         //jQuery('#btnGrid').click();
       }

        

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            //console.log(options);
            processmappingService.getProcessDoc().success(function (data) {
                if (data == null || data.ProcessDocList == null || data.ProcessDocList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ProcessDocList.length
                    
                    );

                    var ProcessDocList = data.ProcessDocList;

                    $scope.gridOptions.data = ProcessDocList;

                    $scope.error = false;
                   
                }
                
            }).finally(function () { $scope.loading = false; })
            
        }

      //  $scope.loadGrid();
        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
             // console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);

                
                if (row.isSelected) {  //rowchecked 
                    ///---------  if(objarray) doesnt have row.entity.id
                    console.log('push');
                    document.getElementById('Title').value = row.entity.Title;
                    document.getElementById('IssueAreaTB1').value = row.entity.IssueAreaTB1;
                    document.getElementById('IssueAreaTB2').value = row.entity.IssueAreaTB2;
                    document.getElementById('NumSteps').value = row.entity.NumSteps;
                    document.getElementById('ProcessTB1').value = row.entity.ProcessTB1;
                    var str1 = row.entity.ProcessTBMsg1;
                    $scope.populateImg('my-div', 'Base64Output1', '#photo-id1', str1);
                    
                    document.getElementById('ProcessTB2').value = row.entity.ProcessTB2;
                    //document.getElementById('my-div1').innerHTML = row.entity.ProcessTBMsg2;
                    var str2 = row.entity.ProcessTBMsg2;
                    $scope.populateImg('my-div1', 'Base64Output2', '#photo-id2', str2);

                    document.getElementById('ProcessTB3').value = row.entity.ProcessTB3;
                    //document.getElementById('my-div2').innerHTML = row.entity.ProcessTBMsg3;
                    var str3 = row.entity.ProcessTBMsg3;
                    $scope.populateImg('my-div2', 'Base64Output3', '#photo-id3', str3);

                    document.getElementById('ProcessTB4').value = row.entity.ProcessTB4;
                    //document.getElementById('my-div3').innerHTML = row.entity.ProcessTBMsg4;
                    var str4 = row.entity.ProcessTBMsg4;
                    $scope.populateImg('my-div3', 'Base64Output4', '#photo-id4', str4);

                    document.getElementById('ProcessTB5').value = row.entity.ProcessTB5;
                    //document.getElementById('my-div4').innerHTML = row.entity.ProcessTBMsg5;
                    var str5 = row.entity.ProcessTBMsg5;
                    $scope.populateImg('my-div4', 'Base64Output5', '#photo-id5', str5);

                    document.getElementById('ProcessTB6').value = row.entity.ProcessTB6;
                    //document.getElementById('my-div5').innerHTML = row.entity.ProcessTBMsg6;
                    var str6 = row.entity.ProcessTBMsg6;
                    $scope.populateImg('my-div5', 'Base64Output6', '#photo-id6', str6);

                    document.getElementById('ProcessTB7').value = row.entity.ProcessTB7;
                    //document.getElementById('my-div6').innerHTML = row.entity.ProcessTBMsg7;
                    var str7 = row.entity.ProcessTBMsg7;
                    $scope.populateImg('my-div6', 'Base64Output7', '#photo-id7', str7);

                    document.getElementById('ProcessTB8').value = row.entity.ProcessTB8;
                    //document.getElementById('my-div7').innerHTML = row.entity.ProcessTBMsg8;
                    var str8 = row.entity.ProcessTBMsg8;
                    $scope.populateImg('my-div7', 'Base64Output8', '#photo-id8', str8);

                    document.getElementById('ProcessTB9').value = row.entity.ProcessTB9;
                    //document.getElementById('my-div8').innerHTML = row.entity.ProcessTBMsg9;
                    var str9 = row.entity.ProcessTBMsg9;
                    $scope.populateImg('my-div8', 'Base64Output9', '#photo-id9', str9);

                    document.getElementById('ProcessTB10').value = row.entity.ProcessTB10;
                    //document.getElementById('my-div9').innerHTML = row.entity.ProcessTBMsg10;
                    var str10 = row.entity.ProcessTBMsg10;
                    $scope.populateImg('my-div9', 'Base64Output10', '#photo-id10', str10);

                    document.getElementById('mysidenavRightGrid').style.width = '0';
                    document.getElementById('mysidenavRightMain').style.width = '90.352%';
                    $scope.Steps();

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


           

        }

        //$scope.popSummary = function () {
        //    document.getElementById('mysidenavRightProd').style.width = '0';
        //}

        $scope.Undo = function () {

            

        }

        $scope.populateImg = function (mydiv, Base64Output, photoid,str) {
            document.getElementById(mydiv).innerHTML = str.split(' $#$: ')[0];
            document.getElementById(Base64Output).value = str.split(' $#$: ')[1];
            var ImageBox = document.getElementById(Base64Output).value;
            $(photoid).attr("src", ImageBox);

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
            //var paramPH = '#' + param
            //var sd = $(paramPH).attr('placeholder');

            //$('label[for^="' + sd + '"]').fadeIn();
            //console.log(paramPH, sd);
            //if (sd != 'INVDate') {
            //    document.getElementById('ProcessTB').value = '';
            //    document.getElementById('ProcessTB').placeholder = sd;
            //}
            //else {
            //    //document.getElementById('ProcessTB').placeholder = sd  +' in '+ 'DD-MM-YYYY';
            //    $scope.openDIV('mysidenavRightINV');

            //}
            ////document.getElementById('ProcessTB').focus();

        }


        $scope.copy2 = function (param, area) {
            document.getElementById('IATo1').value = param;
            document.getElementById('IssueAreaTB2').value = area;
            //var paramPH = '#' + param
            //var sd = $(paramPH).attr('placeholder');

            //$('label[for^="' + sd + '"]').fadeIn();
            //console.log(paramPH, sd);

            ////document.getElementById('ProcessTB').focus();

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
            window.open('http://denm2008mesadm:93/api/Message/getCasesValidation/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
        }

        $scope.openNav = function (nav) {
            document.getElementById(nav).style.width = "90.352%";
            document.getElementById(nav).style.zIndex = "999";
           // $scope.convertImageToBase64();
          //  $scope.DIVtoCANVAS();
        }

        $scope.closeNav = function (nav) {
            document.getElementById(nav).style.width = "0";
        }

        $scope.maximize = function (nav) {
            //document.getElementById('placeholder').style.width = "90.352%";
            //document.getElementById('placeholder').style.height= "100%";
            //document.getElementById('placeholder').style.width = "0";
            //document.getElementById('placeholder').style.height= "0";
            //document.getElementById('content').style.width = "100%";

            //do while (nav < 5) {
            //document.getElementById('1').style.width = "0";
            //document.getElementById('1').style.height = "0";
            //    document.getElementById('2').style.width = "0";
            //    document.getElementById('2').style.height = "0";
            //    document.getElementById('3').style.width = "0";
            //    document.getElementById('3').style.height = "0";
            //    document.getElementById('4').style.width = "0";
            //    document.getElementById('4').style.height = "0"; 
            //    document.getElementById('5').style.width = "0";
            //    document.getElementById('5').style.height = "0";
            document.getElementById('placeholder').style.display = "none";
            document.getElementById('1').style.display = "none";

            document.getElementById('2').style.display = "none";
            document.getElementById('3').style.display = "none";
            document.getElementById('4').style.display = "none";
            document.getElementById('5').style.display = "none";
            document.getElementById('6').style.display = "none";
            document.getElementById('7').style.display = "none";
            document.getElementById('8').style.display = "none";
            document.getElementById('9').style.display = "none";
            document.getElementById('10').style.display = "none";
            document.getElementById(nav).style.display = "block";
                document.getElementById(nav).style.width = "1200px";
                document.getElementById(nav).style.height = "600px";
                document.getElementById('my-div').style.width = "100%";
                document.getElementById('my-div').style.height = "90%";
            //}
            //nav++;
        }

        $scope.restore = function (nav) {
            //document.getElementById('placeholder').style.width = "90.352%";
            //document.getElementById('placeholder').style.height= "15%";
            document.getElementById('placeholder').style.display = "block";
            document.getElementById('1').style.display = "block";
            document.getElementById('2').style.display = "block";
            document.getElementById('3').style.display = "block";
            document.getElementById('4').style.display = "block";
            document.getElementById('5').style.display = "block";
            document.getElementById('6').style.display = "block";
            document.getElementById('7').style.display = "block";
            document.getElementById('8').style.display = "block";
            document.getElementById('9').style.display = "block";
            document.getElementById('10').style.display = "block";
            document.getElementById(nav).style.width = "360px";
            //document.getElementById(nav).style.height = "200px";
            //document.getElementById(nav).style.width = "100%";
            document.getElementById(nav).style.height = "50%";
            //document.getElementById('my-div').style.width = "360px";
            //document.getElementById('my-div').style.height = "200px";

            //document.getElementById('my-div').style.padding = "10px";
            
        }


        $scope.closeAll = function () {
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightCons').style.width = '0';
            document.getElementById('mysidenavRightProd').style.width = '0';
            document.getElementById('mysidenavRightSummary').style.width = '0';
            document.getElementById('mysidenavRightTruck').style.width = '0';
            document.getElementById('mysidenavRightQuality').style.width = '0';
            document.getElementById('mysidenavRightLabel').style.width = '0';
            document.getElementById('mysidenavRightINV').style.width = '0';
            document.getElementById('mysidenavRightTicket').style.width = '0';
        }

        $scope.openDIV = function (nav) {
            console.log(nav);
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightGrid').style.width = '0';
            document.getElementById('mysidenavRightImage').style.width = '0';
            document.getElementById(nav).style.width = '90.352%';
        }

        $scope.addProcessDoc = function () {

            if (document.getElementById('Title').value == null || document.getElementById('Title').value == "") {
                alert("Document Title must be entered");
                return false;
            }
            else {

                var TitleValue = document.getElementById('Title').value
                var IssueAreaTB1Value = document.getElementById('IssueAreaTB1').value
                var IssueAreaTB2Value = document.getElementById('IssueAreaTB2').value
                var NumStepsValue = document.getElementById('NumSteps').value
                var ProcessTB1Value = document.getElementById('ProcessTB1').value
                var ProcessTBMSG1Value = document.getElementById('my-div').innerHTML  + ' $#$: ' + document.getElementById('Base64Output1').value
                var ProcessTB2Value = document.getElementById('ProcessTB2').value
                var ProcessTBMSG2Value = document.getElementById('my-div1').innerHTML + ' $#$: ' + document.getElementById('Base64Output2').value
                var ProcessTB3Value = document.getElementById('ProcessTB3').value
                var ProcessTBMSG3Value = document.getElementById('my-div2').innerHTML + ' $#$: ' + document.getElementById('Base64Output3').value
                var ProcessTB4Value = document.getElementById('ProcessTB4').value
                var ProcessTBMSG4Value = document.getElementById('my-div3').innerHTML + ' $#$: ' + document.getElementById('Base64Output4').value
                var ProcessTB5Value = document.getElementById('ProcessTB5').value 
                var ProcessTBMSG5Value = document.getElementById('my-div4').innerHTML + ' $#$: ' + document.getElementById('Base64Output5').value
                var ProcessTB6Value = document.getElementById('ProcessTB6').value
                var ProcessTBMSG6Value = document.getElementById('my-div5').innerHTML + ' $#$: ' + document.getElementById('Base64Output6').value
                var ProcessTB7Value = document.getElementById('ProcessTB7').value
                var ProcessTBMSG7Value = document.getElementById('my-div6').innerHTML + ' $#$: ' + document.getElementById('Base64Output7').value
                var ProcessTB8Value = document.getElementById('ProcessTB8').value
                var ProcessTBMSG8Value = document.getElementById('my-div7').innerHTML + ' $#$: ' + document.getElementById('Base64Output8').value
                var ProcessTB9Value = document.getElementById('ProcessTB9').value
                var ProcessTBMSG9Value = document.getElementById('my-div8').innerHTML + ' $#$: ' + document.getElementById('Base64Output9').value
                var ProcessTB10Value = document.getElementById('ProcessTB10').value
                var ProcessTBMSG10Value = document.getElementById('my-div9').innerHTML + ' $#$: ' + document.getElementById('Base64Output10').value

                //var d = new Date();
                //var CreateDateValue = '2018-06-13';

                console.log('New Issue Added');
                processmappingService.addProcessDoc(TitleValue, IssueAreaTB1Value, IssueAreaTB2Value, NumStepsValue, ProcessTB1Value, ProcessTBMSG1Value, ProcessTB2Value, ProcessTBMSG2Value, ProcessTB3Value, ProcessTBMSG3Value, ProcessTB4Value, ProcessTBMSG4Value, ProcessTB5Value, ProcessTBMSG5Value, ProcessTB6Value, ProcessTBMSG6Value, ProcessTB7Value, ProcessTBMSG7Value, ProcessTB8Value, ProcessTBMSG8Value, ProcessTB9Value, ProcessTBMSG9Value, ProcessTB10Value, ProcessTBMSG10Value).success(function (data) {
                    
                   





                });
            }
        }

        ////###################Canvas Image to Base64Img
        //$scope.convertImageToBase64=function() {
        //    console.log('newConvertFunction');
        //    var c = document.getElementById("myCanvas");
        //    var ctx = c.getContext("2d");
        //    var img = document.getElementById("my-div");
        //    ctx.drawImage(img, 10, 10);
        //    alert(c.toDataURL());
        //}
        ////###############################################

        $scope.clearTB = function () {
            document.getElementById('Title').value = "";
            document.getElementById('IssueAreaTB1').value = "";
            document.getElementById('IssueAreaTB2').value = "";
            document.getElementById('NumSteps').value = "";
            document.getElementById('ProcessTB1').value = "";
            document.getElementById('my-div').value = "";
            document.getElementById('my-div1').value = "";
            document.getElementById('ProcessTB2').value = "";
            document.getElementById('my-div2').value = "";
            document.getElementById('ProcessTB3').value = "";
            document.getElementById('my-div3').value = "";
            document.getElementById('ProcessTB4').value = "";
            document.getElementById('my-div4').value = "";
            document.getElementById('ProcessTB5').value = "";
            document.getElementById('my-div5').value = "";
            document.getElementById('ProcessTB6').value = "";
            document.getElementById('my-div6').value = "";
            document.getElementById('ProcessTB7').value = "";
            document.getElementById('my-div7').value = "";
            document.getElementById('ProcessTB8').value = "";
            document.getElementById('my-div8').value = "";
            document.getElementById('ProcessTB9').value = "";
            document.getElementById('my-div9').value = "";
            document.getElementById('ProcessTB10').value = "";
           



        }
        $scope.onBlur = function ($UpdateonBlur) {

            if (document.getElementById('Title').value == null || document.getElementById('Title').value == "") {
                alert("Document Title must be entered");
                return false;
            }
            else {
                var count = 0;
                $('#content').find('input[type="text"]').each(function () {
                    if ($.trim($(this).val()).length) {
                        count += 1
                        // alert("Filled Value=" + $(this).val());
                    }
                });
                //alert("Total Input Count=" + $('#container').find('input[type="text"]').length + "//Filled Inputs Count=" + count);

                document.getElementById('NumSteps').value = count;
                $scope.addProcessDoc();
            }

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

        $('.editable').each(function () {
            this.contentEditable = true;
        });

        //$('#NumSteps').on('input', function () {
        //    if ($(this).val() == 0)
        //        $('#myDiv').hide();
        //    else
        //        $('#myDiv').show();
        //});

        $('#NumSteps').on('input', function () {
            var j = $(this).val();
            var i = 1;
            while (i <= j) {
            $('#' + i).show();
            
            i++;
            }
        });


        $scope.Steps = function () {
            var j = $('#NumSteps').val();
            var i = 1;
            while (i <= j) {
                $('#' + i).show();

                i++;
            }

        }

        //############################################ cOPY pASTE iMAGE INTO A DIV#############################

        var PasteImage = function (el) {
            this._el = el;
            this._listenForPaste();
        };

        PasteImage.prototype._getImageFromContentEditableOnNextTick = function () {
            var self = this;

            // We need to wait until the next tick as Firefox will not have added the image to our
            // contenteditable element
            setTimeout(function () {
                self._getImageFromContentEditable();
            });
        };

        PasteImage.prototype._getURLObj = function () {
            return window.URL || window.webkitURL;
        };

        PasteImage.prototype._pasteImage = function (image) {
            this.emit('paste-image', image);
        };

        PasteImage.prototype._pasteImageSource = function (src) {
            var self = this,
                image = new Image();

            image.onload = function () {
                self._pasteImage(image);
            };

            image.src = src;
        };


        PasteImage.prototype._onPaste = function (e) {

            // We need to check if event.clipboardData is supported (Chrome & IE)
            if (e.clipboardData && e.clipboardData.items) {

                // Get the items from the clipboard
                var items = e.clipboardData.items;

                // Loop through all items, looking for any kind of image
                for (var i = 0; i < items.length; i++) {
                    if (items[i].type.indexOf('image') !== -1) {
                        // We need to represent the image as a file
                        var blob = items[i].getAsFile();

                        // Use a URL or webkitURL (whichever is available to the browser) to create a
                        // temporary URL to the object
                        var URLObj = this._getURLObj();
                        var source = URLObj.createObjectURL(blob);

                        // The URL can then be used as the source of an image
                        this._pasteImageSource(source);

                        // Prevent the image (or URL) from being pasted into the contenteditable element
                        e.preventDefault();
                    }
                }
            } else {
                // If we can't handle clipboard data directly (Firefox & Safari), we need to read what was
                // pasted from the contenteditable element
                this._getImageFromContentEditableOnNextTick();
            }
        };

        PasteImage.prototype._listenForPaste = function () {
            var self = this;

            self._origOnPaste = self._el.onpaste;

            self._el.addEventListener('paste', function (e) {

                self._onPaste(e);

                // Preserve an existing onpaste event handler
                if (self._origOnPaste) {
                    self._origOnPaste.apply(this, arguments);
                }

            });
        };

        // TODO: use EventEmitter instead
        PasteImage.prototype.on = function (event, callback) {
            this._callback = callback;
        };

        // TODO: use EventEmitter instead
        PasteImage.prototype.emit = function (event, arg) {
            this._callback(arg);
        };

        PasteImage.prototype._loadImage = function (src) {
            return new Promise(function (resolve) {
                var img = new Image();
                img.onload = function () {
                    resolve(img);
                };
                img.src = src;
            });
        };

        PasteImage.prototype._findFirstImage = function () {
            var self = this;

            return new Promise(function (resolve) {
                for (var i in self._el.childNodes) {
                    var node = self._el.childNodes[i];

                    // Is the element an image?
                    if (node.tagName === 'IMG') {

                        resolve(node);

                    } else if (node.childNodes[0]) { // Are there children?

                        // If you copy an image from within Safari and then paste it within Safari, the image can be
                        // nested somewhere under the contenteditable element.
                        var imgs = node.getElementsByTagName('img');

                        if (imgs) {
                            resolve(imgs[0]);
                        }

                    }

                }

                // No image found so just resolve
                resolve();
            });
        };

        PasteImage.prototype._removeFirstImage = function () {
            var self = this;

            return self._findFirstImage().then(function (img) {
                if (img) {
                    // In Safari if we copy and image and then paste an image within Safari we need to construct a
                    // proper image from the blob as Safari doesn't do this for us. Moreover, we need to wait for
                    // our converted image to be loaded before removing the image from the DOM as otherwise there
                    // can be a race condition where we remove the image before it has been loaded and this
                    // apparently stops the loading process.
                    console, log(img);
                    return self._loadImage(img.src).then(function (loadedImage) {
                        img.parentElement.removeChild(img);

                        return loadedImage;
                    });
                }
            });
        };

        PasteImage.prototype._getImageFromContentEditable = function () {
            var self = this;

            this._removeFirstImage().then(function (img) {
                // Process the pasted image
                self._pasteImage(img);
                
            });
        };

        // -----

        var pasteImage = new PasteImage(document.getElementById('my-div'));
        var pasteImage1 = new PasteImage(document.getElementById('my-div1'));
        var pasteImage2 = new PasteImage(document.getElementById('my-div2'));
        var pasteImage3 = new PasteImage(document.getElementById('my-div3'));
        var pasteImage4 = new PasteImage(document.getElementById('my-div4'));
        var pasteImage5 = new PasteImage(document.getElementById('my-div5'));
        var pasteImage6 = new PasteImage(document.getElementById('my-div6'));
        var pasteImage7 = new PasteImage(document.getElementById('my-div7'));
        var pasteImage8 = new PasteImage(document.getElementById('my-div8'));
        var pasteImage9 = new PasteImage(document.getElementById('my-div9'));

        pasteImage.on('paste-image', function (image) {
            document.getElementById('my-div').appendChild(image);
           // console.log("Here's is the Paste Image" +image);

            //var reader = new FileReader();
            //reader.readAsDataURL(image);
            //reader.onloadend = function () {
            //    base64data = reader.result;
            //    console.log(base64data);
            //}
   
            //"imageBlobBody"

            
        });
        pasteImage1.on('paste-image', function (image) {
            document.getElementById('my-div1').appendChild(image);
            document.getElementById('imageBlobBody').src(image);
           // console.log(image);
        });
        pasteImage2.on('paste-image', function (image) {
            document.getElementById('my-div2').appendChild(image);
        });
        pasteImage3.on('paste-image', function (image) {
            document.getElementById('my-div3').appendChild(image);
        });
        pasteImage4.on('paste-image', function (image) {
            document.getElementById('my-div4').appendChild(image);
        });
        pasteImage5.on('paste-image', function (image) {
            document.getElementById('my-div5').appendChild(image);
        });
        pasteImage6.on('paste-image', function (image) {
            document.getElementById('my-div6').appendChild(image);
        });
        pasteImage7.on('paste-image', function (image) {
            document.getElementById('my-div7').appendChild(image);
        });
        pasteImage8.on('paste-image', function (image) {
            document.getElementById('my-div8').appendChild(image);
        });
        pasteImage9.on('paste-image', function (image) {
            document.getElementById('my-div9').appendChild(image);
        });




        ////#######################Binary Image to HTML Image
        //function hexToBase64(str) {
        //    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
        //}

        //var img = new Image();
        //img.src = "data:image/jpeg;base64," + hexToBase64(getBinary());
        //document.body.appendChild(img);




        //function getBinary() {
        //    return 'ffd8ffe000114a464946000101010000000000000affdb004300080606070605080707070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720222c231c1c2837292c30313434341f27393d38323c2e333432ffdb0043010909090c0b0c180d0d1832211c213232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffc000110800f0014003012200021101031101ffda000c03010002110311003f00f2c16e492c491f4a4f2942b6133cf02a45dc549de323b523ef2bc37d287713f4180285c15e4f0714a6de30bc8fff005d39fe51ce4e0f34ddc338ce7fc690276d8698d4b0dcb9f4f6a5016352077edd69e5891d3000e7341400023a8a365762f41a403b76a0c9a70015b0aa41ee7d283818627afb5341009da79ce29fc8ab3ea2ed0b850091eb8a44c6e27691ee694b1dfea08c7e349e61e88dbb9e73ff00eaa3526c2b463277af7cfe1484296180003d29f1b004e738c77a6a323676e081c120d0d31b62850bcb26e0ddf3d28c023e5c7e1cd38e147de2a71f9d00337f13648eadcff3a4acd0b56862a6074e053582ee20af07be38a91948e00fc738a708c648cf3d714276ea2b5dd8836003804fa714ec2e72c4923a6074a7a1da02f43eb9a5565c9f9783d69a6c6a2ae302aab118f7c8a5223248dbdfad2ae7962d81d80c703de83b98608048e3d451bbb02d3615235e067207af41f4a7b01b40c9c5440e08033d7d69fbc2e5738c7b526812ee0a8aab80807d6808b81d0fae29490c0601ebc9cd27cabcf200345dec1beb61f903a8fa526f201000e4d26fe40cf07da8daac0f3c7b53e51dd0f45c8c8c669e220c4107071d4d363da8bb5738ed4ec9604f61ed4b5b82b88abb587cb839c6e14a54293ce3de90124f5e2958a0382dc1e94f50df41701875a53f2f738a43c0c75a504123b71de9301370ebd48a0b12410339a0158f240c93cd37712dc8e68b6a215770c938c8a9b76e42d9c8a8c01bb2391e94e73b41c600f4352cb57631d77019c027ad5360e9d18fcbc7ad5b762c3eee3351b1561839231d00a105ba151d8c60f279f7ce29924854631c7a9ed560ae189cf41dc55673b9c8279f4aa40ae96a590db1769193ed4c74c9527f0c1a8d14e377f163a9a1c92576a9e0f38ab71d74262db76648e8323976f4c9ce6937053938071e951c8a58679c1ec2a37242e48db9e319a957ea165d89cbee39183e99a40ec48e49c51501666c16271da9fb89f9b18c7008349a17a0f2ce4e33f2fa53800015e873d4543d57716ebe9fe34e2ac3041ca375e7914ec16d6e4bba22d827e6ef4c0e00f9700fa1a8885573f29cf7dc314e3f31dca074e7da92ba04efa8f42ece4bee00f4c54d9215109355627e0f3f993536f38e41e3ad17ec27a8f52b9ea4fb9a911cb29c1c907a9e9506e249ea01e9c52a31c36d391e98a6ee3ba2424282796f6a6890a9241e49c01480e18f1df9a6b920fca7209f4a9421ea43b163bbe94a482796efc5376c8a000a3e638eb4f0a475ebefdaaae87a11392662ac7b54aab9c7231513ed0fb59b934eda2323a81da8e604fa13124e323e940e382c588a66f1b802062845266207d739a9d4131cc0065c9033d877a78607201e48efcd47203d4a8e2915558eeda73eb9e2a93d01f71c072031da0f4e69e30a98ddf4f7a683c63ad0cc76818566c7a52bf704efb0be68c8c707be29cacbc9f9b3eb51638cf183cf14e2ff27ca781de9b8df61a69326dcb953b8119a08c49d6a00d9038e4fbe0d4a0f000c9c71cd165ba1264b838c753e9512fccb93f77b734b963d4633fa50a4670c00cf5e78a9d46b71e080011c8c5331df919a09c70bd3b507015720e7daa9213f305665391d3de9e1d769ddcfe34c0485e8452637739207b50d742aec71990f19cf351ab15dc40ebd29490bf2fe94c605870381e8695bb02b8d6c9073927bfa9a81b6aeec1008a987ddc372ddbdea0650d939dc4f4a3d464a53e5217af634d11e0e4be7be68689d9be53c638349b56263824e473b8e6aefa5c9b2e83245c2e7793dc8c546630e3be40a7317dd851843ea2938039c06f527ad4ead58942bc65b80d8603a74a448b770d80339e6972cc42ba83819e454b904f3d3e945dd8357a91ba966c039229591ce00271efde90118c90300e339a906d18382c7e8695ec36c88c58600bf27a9c9a7342b9e58039e3239a9c264e7664e69c6219ce3393dfb50d292d41ab95840d8ea739ce4d48212546d63c75a919021c050067207bd48b804aecc77e29b1dac42b01202b1cf3d338a0c6546e3c11c6e153ba0603d073488378237823e9475b86a46c84e31d7b0feb4c1195ce4e1b3c7a559c1c64738ef4a57249031c75a340b26cac10ae496c91e9d053ca1da70c79ef526cdc99f971ec3ad3c0e30063da930d080c28304e09cf14a632ec39e3e94637b83d48a95c79401c1e7b8e94aec1dec462319e48247346d05f82727b9e95216571c2e07d690fca557a0ed47a0bd04319c64b8e3a531177673d49eb5295f9872707b52940b82300f6a77637b11b46d9c6ec01edd694a0e3e6208e3229d80cdc9fc2948393c281f5eb4d362e844c32a5738cf7a455fa118a74bf310476ee05377f183920fb52682e22a658ed39f7ef53ee03008fc4d4782b8c67e952a8dc41229bd816fa815f9477e69ad8238e0fae29fb580e991dce7a52100f3bb06a6fa8eda8d4523a9393d334f6cf14ddad9c9a710588f4f7aa6030ae17683c53864703047ad0ec768071f8537824e09fa0352f70b75124c9e4f6a6b0181b73fca946f504e38cf7eb4c6e589e738c53616446ce4b10464f4e05364c81f74f34adc0dbd07ae2ab4c64da016229f2bb15a1718f9887191f8d461599b69fba3ad3c03cee27247a0e0d30364e0b727a73d69dec0d59d86c883036b6403de985428c87ed9c119a74ce4a8e32ca7a74a858eee768273ce7bd0b623c87ed72a70df363afb5294f972082c47ad3496518f940c75a7964560460e7a67ad4b6ba8ef762a94f950119faf3f954db5bcdda79cfbf4a40362eec1c1ec475a781f2976e1a9a7a0b5ea3892a4856393eb4f5dd81b88c0e99ef49bb2bdc2e7a67ad2ab024e06587a8c52d47610ab039e7269e1001d3ea6930dbb8c1cd3d7392071d88a2e1b8a532327a67352843d7924fad31b2adc0c8a90edc82393f4a77d013b89e5066c7f2a42b800039a936e1b238c8f5cd3c280c323814b61b6442208776464d4124673c0c55d2a4b6368c7bd24c988bb52b892d4cc4186249c73c71d2a43e637ca0803a8ef4a58ed21b03d6ac5b405977904827a7a53bdb70b5c64569b796ebd7029d241c8dadf87ad5c30ed652727d00ed43ae3a1e28b0ca9e5b6704e38e293c84dc0b0e957421c8f5ed51b4685b1c9ef46a8572b3c4a5b2a79ee2a29236006300d5c308c9ec3d86290a00807bd17b03453d995391934d8d7e6ebc0eb5759391c7e38a6329c10492dd33ed542499587762df283d314ec657b60d3c29e46dfd3ad376903d076e6a58d5869c291838a69c6fe0d23290c0939349b7e7cb73f4a61657dc95b6819cfb66908c80c06734ac7200dbc1149cb74238ed42b03b8df9b072b8146320738a52581191c9a8dc9dc36839ce39a346c6380c9cef6c0f4e951b60f5e4fa835223606d61d69ae097c139e3afa50c1ad0a9248390771fa0cfe551ca1bcb19e47b0ab12011f214935039050ff093db3424c76b3dcb2c1882993cf5c53638f04a90dd3800e69465c962b8f4e7ad2bbb15f978f5cf6a2e909f72b90ccc72a719ebd6930ec0045e9eb534ae4aed5231e98aaecca06368e7bd4bd497bea2ed2dd48c9e829023b950719078c526efe3008f7c53d5cac8accbd7a669cac81bd6e5a05820db924520ea012793d3de8dcdb06319f7142fde24e416ea339c50b4dc7cc891907cbc77e39a50a7258b1cfa1a4c7ca06e3c77ef4e53c1c6702815ee0aac1854abcf2a3907907bd3572720fd6a5660a00cf26806ec2b633c838a70070001d7d690f2006ce0fb54833f260719c1a4d0d0982473d7353a6ec1c8ce3da903003057e94f42724f18a7713d58eda46d38e292480e381c1e6a40ddb823353e0f419a4d32ac6148841201e73d056a5a4588802a703b556910fdac051c935ab1c602f4cfd4d56b60e847e580db7b535976b818c8f5a94a81c8e69082e31819f4a4040d0ee1bb3c0f7a85948e0753d4d5ac838fe1f6e94c7183c0cff5a2ec5ca4782b818c8a8e420a82573ed8a9c80c323af71e951c9953d88f4a340bb2209c67a71517cf920fcd8ab00e33ce09a8d9829181f8d34f51df5212bcf7cd46e9b492493f87153f25ce58608e29a72d9c364639a42bb2b4880e3070d498c8ea73e94b2aaf042f43512b3162719fa53d2c175b136d63821a9641839c7349e671c726958ee5ec09a5a80c3f376208a692578c75f5a712036771c629bcb3ee2dc8e9420d5a18dbc10dd80e47ad21258678047b52b06cb61873ea6a3182a471c7bd0c1214b864e7af4aacf1824bed3903b538ae32cbd714d0e8c4fcc485f5a1b29596e49b811b57f84f3c529cb0c67a73c5261172033638e076a8bcc6438cfca4e32473557be827b5d0f7e7a230c0a8028e7232bdb8a7cdb5f682dd391c6734d3cbe7923a6284ba93af4137e4e0e76f602a78802ca496207ad46383b80cf6ea39a7c4599bfba7d2a35bd90bd4b395c8c7071d290f007400f19e78a6b2e180cfe229e7eee501c7bd3ba435a2143724134fc2b3e4ff002a88e0f2d9f6a91095fae7814d8d2d49576eec0e062a40c0e4f4c0ec6a15273827b7414fcf960e01c7b525e616bee4f1e5b04938f714f0704e0d468e7a93c54c0392a002df4192680b6a380ee7f0a9919467839a89589f97dff2a9d723919c500d13469b8ee1f2f1c8f5a9b606c7cd83d454098c8393c8e953fcdb78fd6907a94e38c9bb24f15a023001eb54d30b70c49e7b0ab424f93192727b530eb717604191d3bd46cbf3820d3d890396ebda9a77363e5e3b9a2d629f71aeb90180fa9a8d80ce3153053b7afe1519c11d467de80229576af078a8d82e0e4e49a793d3e5073d4fa535bea001fad089e9a91be58600031db14c2a005c2e07a01c549cb723b53091d8e3b509822b903a85c1a0a9c50c58b600c0f614e620003900d2be80d9138c74f4e4540a39cf1f4ab2dbb69c62ab2afcf9dbce7a53076dc7e013fd33438c8c13de9a061c9f7e94e6239ce293d58d46e46770523ae7a669ac08e41e69cd86e7ae3a738c5461493cf5f5cd50bd0460a47cc326a3da54e77702a42768c926a26386cf506a6fae817132003f3126a093046720363f1a964c678393d7350c83e5c6483df8aaf5172b4cb585fe2ce7d306a09946ef99b3fcaadb0381b49c63d7a546c8c48e3381d68d56a5eccaaebb5381d39a500eec01dbbfa54cd1123a027a5089872486c0e39a443f2212111777e5cd4908620951ce290a8ce501001e066a78810c30051a87a8b8dca01c6ecf6a976009f302707b520ce08001c9eb52f000c1ed43f21a642ebb89ea17dc629ea88cc392053c918c1e3775a76dc100038a1eab506dec11aa0c8ce5a94c6369f98fd2948206157db38a91571c9e0ff5a03618a813951c9a950160a09a5504f247d6a45e393c034697d58add455c9e9c76ab11ae14eea600378c0e3b1a99558927b7d68d03d072aedefc54c30c460918f5a8c6ecf0141a567738f97f01536bb1a446a30ec4b139ee7935310aa405ce7d698158e39eb5212c32323f0aad87a8a4e782338a617038cf3e80d387cfd7033dea33165be9de8d83a0f2c02a8ef4d62bb80200f6a6b0cb01d0629002ce40e7d3349b12435f6e32a718a8a4000cf52695c90d8278a8cb36e008e29a01a41071920535a31824b7eb4ad90c1b6e4f4a46e40c600a2cc2e0c0838cfcbed51385e33fcea40a792c6985b9071d7b50088c95119da08a8410006e4d4d3921782307b5418ca8ec4d0ee16628258e4751eb4c76c73c9cd20072704e2976ed6272707b1a7604dbd869e3823a9a42d96ce79ec3148dc163bcd0c4b7cd9e9c63145ee26eec633e73c0249e86a2e8707b77a95b00363767d41a80a9da786e7be38345fa9492ea31989dd8c607bd44d86fba30bdb1531458e3041ebc9e3afe3555ddb96c118a77bb27d4d6dd85c29e3d0d4522ab1ce48cf5c548085523239ed8e951b0049001241fca95b52da4c6c91e00c1007af5a43b300798777b03cd2bb05c8241ee4544c464b229c76c351d2c2bdf41d8c1da4118fd6ac4790a32081eb9aad1019cc99271ebc559126c20120fa0cd297e22b58930bb3e56352600d996da3e95089376090067a034fc8246e6001f534f5d98ddf624df9639208edc735204000c9208e9cd423fd95efeb4aad93b79c6695b5b0acf6275cfbe33e9d69e814751d4f7a8d59b19033da9f9dca01c83d68bd9d85724c01d4f1ec29e1b3801863de981b000c64f7a6a80704e690f5e85889b24e0e4fb54c8dc649e7bd5551b581e99a9978196e95432c16e3b1cfb53b383c1e9512b020e509a78c9c6000295c4ddc7ae19b6e78149b8ab703bd337904e0722919d8b03ce3d0531ec4c705813d73d29030e7a81ef4d0d92090298cfbbae76d242e83e520f43c0a8c64966078c718a18e00dbfad0d263a106900d61c6323351b0ce589e4548c46dc9e3e950c8413c0e0f5c50b616c19c0cf240a8b38c6189e6a4c91819c0a63003000efc1a2f71a10330273914d25588ce69c4e081eb519009f97b502b6a4531eb83c1a84b0c1c03d3b54928258f3c76e298b90a3d0fa53d077e8264803029aeb919e7934fdad484ee1c9e73c714ae264636e0e78f6a466182318e6948dad9009f5143e42fcb8fc4553dee1a5f4236242fd7a8a854e2462858d4c01c8ea052b04ce57ef1eb9eb422acfa1598bb9c1dc4f7c542ca14ba15c71c1353c919dfbf351c87603941d7ad3ba432f803690477e2a2de4138007ae6a55525482719ef50edc101b381c7d6a5bee4bdb522932a7700377b1a6ee04ed60558e3000cfeb52c8a471d71d3b5336bb283bb91d4669dfb06b6b8d56e028eb9c751cd4e5c8db95230339aaeb92d8c839e73d2ad2920007a9ee6937712d44e18e413cf7ec2a50fb0aaf07dea2e36727049ec29d8c630783d9a9ec36878c8077727b54a186c01413ebdaa22cca982c467be6951970005e477a5a8244cac381b8fa1f6a797084e4e3eb51023610a3691c9a713bc63bd0f51bb327f3036319208ce69c1f681fa544a361181914af962b81c7ae6975d082ce410093cf6a54979dad93f5a803857c1f4f4e94e186201fbb4daea534cb9e69fe1e9edda904871c93cfa543b829039031d8d2b30fa629682270f804fad30c849e00f4f6a8c6e0bc1c0cfa530c8548ce79a698dad0b024032338fc68deadc735016054614e695724024e00a77d01f726dcaa0e5be94d6753cae39f5a88e33d680d9181806a7d43725662bcd46cf93d39f4a6b3e3a63207434ccf3927b7e54d075b0e69039db8e69a370e07eb4dc100907e99a767ae33ef479205bd818aeff998063fad34939f9579f5a55f5dd91d38e29acdb9cfa0a12d42c93229090473cd424e14f5cd4b28f7c7bd4672339e87de9ea2bea20e075268c0183d4d381c124a9c01eb4842e4b11cf614bd03a11480649dc314336d5076f247734f6e57920fa003a526718c818029ab0eeada0d2d919600923a0a8a6c9c15e077f6a99940c360fd2a22c4f05383d0e334d31a18c7cc1c3741d2abbc85b7211923b75ab25428c608cd44c369257803fce3153a0cbe57209c61aa1900e0e3e60715331eb8e4fbd42700e0a91ed4ef70e9a0c94131e79ebd8d204c827a1c74eb5310554820814d0adce1783c70696e66ae42b1b4720395c1eb818feb53852f8e71edeb4cd8bbc6e1c818eb52e559876e3b53f41dbb0df29830c63e949b0a93c9383526304b83dba52a1e413d3f2a616232ac4076191e9536dc0057078a47393caf1ec6a40a30a49391d33521e62293b718c67a8a7ed6c8c63a77a56cf041c63b7b50a03020e719eb40f5be8291f2e473c714a030e9d3bd280011cf00718a50727a60fbd090b6d002e79e49a7206270c70280b9ce58d08a41f973c537a0d0a3703918fc69fc9c03e9d41a4001eb8a43ce415073d0648fd6969b05c717ca70723eb4849001fbde82824260eddbedd69588db9e7342d862f6c91f8669926e241048140e4753ed4a7823b63bd085e821ddb79edeb4a01073bff0f4a18ee41dc9e38a682ab92321ba734268169a03632475f5349b7601df34360e4a8fc334d624609e78a2da8087739c12401d314bcfdefc283c9073cfb5285185c9c8a760b0a00e3d0521197c638eb4ee840c6453090d81c83ef5295c5a90cff330190a3dea32a40ea19a966556278c1f514ccec39079a760d3a8e04b67247d334dc9dd8dbc629c013923057f5a42c410001c9a3d4a5710e08ea29cb808dd38e9ef51b60939e39f4a760fd40a188256240e463d6a1c0cee2c4fa8e69cf210a78e3b6698191d39c9fe9420d861e012aa719c1c7351c987e438c8a95b038ea0fa5577243119e3a522b776344a13db8fd6987a01b81fa53f9e76b700544cdb509c6df539abd7b923b042939ce68c6d6183dbad394131fcd8e47e546303db1d6a760774228079c03e94ee4f55245048c6e1934e5258e71ce3b8a1aea82c2c6428e9934640e4f7e9426fe4ecdbe99eff0091a7380395e4f7cd0da0d10d0ab9e3208a9100192d5161b39c673522ee38dc78a177250e6277f5ebda9c383c8c73d2980924e053f706049073da9149d90e2a00cf34bb3af3c76a40c7039fa52860074cfe345920d6e212371079c7a53c60609c814c56c75e99a373640c134f5b0683998939eddb146ecb724f14027041e08fc6936f2181fa517d7501ee7246395f7a6b600c824fb0a424ff007a8277ede7140bc878c9193e9c0a33851c8cfbd460927e5e39a5258f19e6818e07382c78f6a5da0f38e6a23b8139e47bd0186ce7e61dc1142498ae4b8c646073519e467391e94a5b38032286c32e31f8d2bd98c68e7a741eb4b9209f4a42a30327b7514abf30e0d36160271907a9e94cc1cfb8ef4f27032581a6120b104e28bf615ec42c080c473ef9a8d47cd924e7d40a1fef9c734c1bc81b9be503b503d37241f7b23a9e338a0f7fe74d246770e86985b0080680bea3b201e79fc29464000b123d4f14c8d091c9ebd3148cc72776062851ec031f1ce33c77c5315fe60a08e4647ad2e7391bb83cd44ccc0962063a03c0fd69d90362b33636f19cf5a8a446623eee473c8a732fca3be7af34c7c0edfad295d32b45aa35be6518c800d21cb6368229482549e9480973c2e3df355bb1798d24827b7d697000c639349b89527a807d29cb1f420fd054ebd49d50297381d40a5e84120f269b9002f38c8c8a9076ef819029f418abbb236f209e7341619c134024000f18348cb819c7079eb4b50e82e09e4938cf4a3918c9cfa638a5c2e463278ef4104e493814c48149ec081ee314fce40f5a8f219c018dc3d69ca0e4e3b520bbb0a07bf3ef4f0df210714c0483cf5cf7a76ec1c9c5160ba132a31820f7a72b649c3734dc92d8c60528e33d39a3a8efa8fcb05cf1c9e69b93e99fc680f8c77349d091cd312771c0e73d707a8a696c05e0f5a18e48e948d9db8047d2818e0d91c9c1a681827249cf7a00c0c9c1edcf5a173ce7a63814059f41e7900e338ee680703078351824f03eb4a3691ea3d6905871c161c8ce738cf34b9c00003d3b76a63119009e33c52b37cdc1e946bd000329fbd9fad28240e9f8d3383ce48f5e29c1b2a327145afb05bb06dcb65b1f9714c3b492769cd2b95271d78f5a69c05a05a111c6460e0934636aec0463d297696181d475a611919e00fa669dee3683db8c76f6a6bc7f20e8477e28ea7b9e79e29b2364f0cca07519201ff1a1f613b820c8c6ee3a102895115b71208ed4a8c39db838a63805b2ca7eb8e28764c2f7d88a4457195a648a06d006e006768e00fc29d8dcc72081d88a405871c6e346da0ec46c32a495239e9402157eef4e41a52caab924e475cf7a88be598066dde98ed46fb8d246ba961c31a56c01ea7db8a42c7b720d19231c75ea4d36c2c9a1371e46ce3b538939190dee28c125b69a76ee305707d739a9bf527618501209e169d9c8f973ed40e48f51da82792776074c628761e8394e4f39e295493cb0cf3c0a68e0648c9a4f99877c66857063893d3a1f5a53ce324e4d2edce0e7a534e7770ddba1346ec962b0f9864fe9472a724f14756c3631f5a085c609e281f414e0aee2df88a5233caaf3eb4c38ea33d3f3a7630301bb7229356dc3c83cc039046071cd2f3bb38fcea30ad92bb453c061d4e4d5680388ce0e70694b1ea4f4a6125b39eb4abd064120548013bba75346369e70d4dda092d92b93d2941248e3029f989262f00e31d7d294e428ebd718a37139e9d69323f8b38f6a352d2ea0430cf00508cac371607df39a40e54824fe14ace5fe62320fad277ea2429018fd0d20c1e7774ed8a4dc073cd3483b483d5bde9a0438b027bd30a2a838fd295368c293d3b9a71da067033eb4ddc5d46a952003d4d22955241ebef4a3e5192064530866937738ed8a4deba86bd47139cf3c77a8d542640276fa673cd38e63c8cfe14c2731e7207d295c771013bf19a0673f310314c562a49c71db8a00c9e739cf5aa6fa206484104b0c007b544406185cf4ce2890395da18af3d719a63060d9dd9e28b5d89f7136fa671ee2a32bc1d8d93df8c538b301838e7a014c2142b83cf182692bf52b7d110c80614fe84f348493cab019eb814a54fdd319fc0678a8d9090549c01cf3d855db4d07668db76001d809f6a446ddce052160321813c5206e30cd53715b42461853ce3dc5303862319e9e94d725429dc31e80d01c939033ef491322519273410493bb919e9519dc5b8fcc53c6783d31479a1dbb0f25481cf4a4638c107f0a8c10493dc1a566040eb4f615dbd097df2727d29a410dcb7d78a8dfd4124f6a512e00dc08278c1a2d7025241c6ec5346d0bbb2719a8d0872493c8ec694367be71ef45ba3169b930c75c8a69396e0530b0419e84f5a0051c92013c8c9eb493d46c786249e0e31d4d293b98fcc40f6a8998eec76c707340603819068eb71ea89158061edeb48cdf3f2700d30b67b60fa539b38c8f4ef492b13a8e2c5540efeb8a4dc0af2df81a6eee0739c75e28cb1edc76e29a452155881b9ce3e94a1812d91f4c53369c71823d7342be40c63d0e29dd09a561d9c914a1c29c7cde9814dce0e0b61bebd29739ea39a5a5835b6a3f9078c0cd0df29ce69a1cf4cd37792c508f7cd0906a1907ad221cf39ef4aafb587ca06ef439a14eedc091b87a8a35e80239dac79a40c36f7c6290b166c03c67a50cc321508c77c8a4161c3391b8e7df18a491300303cd372ddc8c76e2924906d014e4f7a767d06ddc62e72c09c7e94f5dabf55eb4d56f941c9271d29bbbf2c73c53b8eead61cfb5c9e081f5fe950ba0dd9dc07af38a1db3ce3249f5c0fce90b10bf2f53c1a5aa64b8dd0631d0648f7c8a8643f30c3904f5cf6a919bcb8c82496278a894b22e4af1ee2a9b5d4ab6829e0727d38a8db952a5ce3bd39b6b64e72c3f4a85dba7a7af7a77049d8d40472bd33d48f5a14107e57181d2a10c30491ce280f9042f7e462a5e8f416e4c4ee6c7ca1bd97340e01519c67ad40253e61cf5e9814e0d952413cf5f4a485727ced50c4f14f8d8b2838c67ad41f747538073d697cc24f1f5c537aec3d09c124b6473ed4dc83d4542b212090d82c781d696460adb8d2f507d98f4651271b980e7e94e67e493c0ea2ab33ede7ae7dea42c177649e47714498ac892360c0f0073d69ca17271f962ab292771e9cf4149e60039c67da9dc5d342c090eec75ed4f0dc6deddeab8938cb61703ad2ac84f71b7d4d2bea3d16e4e30580423143e4b7bf4e2a062c3856cfa01ce68f336a64e4b1ec06286f4b8f544cefb48c9e3a5216057e63c540b3b337232a7d69fe661718fca9ea24efa0a5f1d0e57da9dbb237679a80b313c631485d410339cd1be8877bad09c39d9f375f6a53818da78f4a863900040e589a5f330e0b6067d075a7613253875fbe05316411f4cfe34c66dec0aff00faa9aef8caf73e86a6cdb1d9963cc0324e707d2959b1c8191eb5595f2370edd4f5a7094b0c0c60fb52db615ac580dc70323d7d29164c024e0007b75355fce0149e719c7e34a920da095fa1a76b6c80959c7a8a6f99f30538c7d6a379415e879e39f5a6b0503764fe7fe146a0fd49c30fef7d050c57393c1ed50798a8a7914d0f93ce42e3a50eeac0f72cee1823bfbd46cfb4f3c9f61513c8a00064191dcf1485894cee1cfbf5a1a77d41df61e003f3f42783ef4cde0fca79c9e38a85e42abdb39e71424c183638e0f0474a76ea1e63f70cec0a093c75a617508c8cdd3a522b755e873f8e6a2918123a6ef6a15dee0926f5246c6c1f3f4ed5132ae782ac6943011f4018f5e7ad465f3c1249c55596c87b5cffd9';
           
        //}

        ////#######################copy from DIV to Canvas
        $scope.CopyFromDIV = function () {
            if (!HTMLCanvasElement.prototype.toBlob) {
                Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                    value: function (callback, type, quality) {
                        var canvas = this;
                        setTimeout(function () {
                            var binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
                                len = binStr.length,
                                arr = new Uint8Array(len);

                            for (var i = 0; i < len; i++) {
                                arr[i] = binStr.charCodeAt(i);
                            }

                            callback(new Blob([arr], { type: type || 'image/png' }));
                        });
                    }
                });
            }

            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            //var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
            //    '<foreignObject width="100%" height="100%">' +
            //    '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
            //    '<em>I</em> like ' +
            //    '<span style="color:white; text-shadow:0 0 2px blue;">' +
            //    'cheese</span>' +
            //    '</div>' +
            //    '</foreignObject>' +
            //    '</svg>';
            var data = document.getElementById('svg1');

            data = encodeURIComponent(data);


            var img = new Image();

            img.onload = function () {
                ctx.drawImage(img, 0, 0);
                console.log(canvas.toDataURL());

                canvas.toBlob(function (blob) {
                    var newImg = document.createElement('img'),
                        url = URL.createObjectURL(blob);

                    newImg.onload = function () {
                        // no longer need to read the blob so it's revoked
                        URL.revokeObjectURL(url);
                    };

                    newImg.src = url;
                    document.body.appendChild(newImg);
                });
            }

            img.src = "data:image/svg+xml," + data

        }

        $scope.DIVtoCANVAS=function(){
            var svgText = document.getElementById("svg1").outerHTML;
            var myCanvas = document.getElementById("canvas");
            var ctxt = myCanvas.getContext("2d");

            function drawInlineSVG(ctx, rawSVG, callback) {

                var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                    domURL = self.URL || self.webkitURL || self,
                    url = domURL.createObjectURL(svg),
                    img = new Image;

                img.onload = function () {
                    ctx.drawImage(this, 0, 0);
                    domURL.revokeObjectURL(url);
                    callback(this);
                };

                img.src = url;
            }

            // usage:
            drawInlineSVG(ctxt, svgText, function () {
              //  console.log(canvas.toDataURL());  // -> PNG
                alert("see console for output...");
            });



        }

        ////#####################Copy from DIV to Canvas#########////

        ///######################Convert Imge to Base64#############///
        $('div[contenteditable]').bind('paste', function (e) {
            var data = e.originalEvent.clipboardData.items[0].getAsFile();

            var fr = new FileReader;

            fr.onloadend = function () {
               // alert(fr.result.substring(0, 100)); // fr.result is all data
                document.getElementById('Base64Output1').value = fr.result.substring(0, 100);
            };

            fr.readAsDataURL(data);


        });


        $scope.getSecondPart = function (str)
    {
        // function you can use:
        
            return str.split(' $#$: ')[0];
        
        // use the function:
        
    }
            
        //alert($scope.getSecondPart("sometext $#$: 20202")); 
           
         

            $scope.uploadFile = function (input,imgElem,Base64Output) {


                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.readAsDataURL(input.files[0]);
                    reader.onload = function (e) {

                        //$('#photo-id').attr('src', e.target.result);
                        $(imgElem).attr('src', e.target.result);
                        var canvas = document.createElement("canvas");
                        var imageElement = document.createElement("img");

                        imageElement.setAttribute = $('<img>', { src: e.target.result });
                        //imageElement.setAttribute = $(imgElem, { src: e.target.result });
                        
                        console.log({ src: e.target.result });
                        //var getBase64Str = { src: e.target.result }.toString();
                        //document.getElementById('Base64Output').value = getBase64Str;
                        //console.log(getBase64Str);
                       
                        var context = canvas.getContext("2d");
                        imageElement.setAttribute.load(function () {
                          //debugger;
                            canvas.width = this.width;
                            canvas.height = this.height;


                            context.drawImage(this, 0, 0);
                            var base64Image = canvas.toDataURL("image/png");
                            
                            var data = base64Image.replace(/^data:image\/\w+;base64,/, "");
                            //console.log(data);
                            document.getElementById(Base64Output).value = base64Image;
                            $("#imgElem2econdary").attr("src", base64Image);

                           // $scope.model.Logo = data;

                            // $scope.convertDataURIToBinary(data);
                        });
                      

                            



                    }


                }
               
         


            }

            
           
        //}

        ///######################Convert Imge to Base64#############///


        ////#######################Binary Image to HTML Image





        ////#####################save as document file#########////
        

        //function downloadInnerHtml(filename, elId, elId1) {
        //    debugger;
        //    var elHtml = document.getElementById(elId).innerHTML + document.getElementById(elId1).innerHTML;
        //    var link = document.createElement('a');
        //    link.setAttribute('download', filename);

        //    link.setAttribute('href', 'data:' + 'text/doc' + ';charset=utf-8,' + encodeURIComponent(elHtml));
        //    link.click();
        //}
        
        //var fileName = 'tags.doc'; // You can use the .txt extension if you want
        //downloadInnerHtml(fileName, 'main', 'main1');

        //#####################save as document file#########////


        //################ base64 to BLOB to Image#####//
            //function b64toBlob(b64Data, contentType, sliceSize) {
            //    contentType = contentType || '';
            //    sliceSize = sliceSize || 512;

            //    var byteCharacters = atob(b64Data);
            //    var byteArrays = [];

            //    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            //        var slice = byteCharacters.slice(offset, offset + sliceSize);

            //        var byteNumbers = new Array(slice.length);
            //        for (var i = 0; i < slice.length; i++) {
            //            byteNumbers[i] = slice.charCodeAt(i);
            //        }

            //        var byteArray = new Uint8Array(byteNumbers);

            //        byteArrays.push(byteArray);
            //    }

            //    var blob = new Blob(byteArrays, { type: contentType });
            //    return blob;
            //}


            //var contentType = 'image/png';
            //var b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
            ////var b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAREAAABcCAYAAABJJYGIAAAVNklEQVR4Ae3ca6ylZXUH8JdhZLDcCs';
            //var blob = b64toBlob(b64Data, contentType);
            //var blobUrl = URL.createObjectURL(blob);

            //var img = document.createElement('img');
            //img.src = blobUrl;
            ////document.body.appendChild(img);
            //document.getElementById("imgElem").appendChild(img);
        //################ base64 to BLOB to Image#####//



        function convertImgToDataURLviaCanvas(url, callback, outputFormat) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS');
                var ctx = canvas.getContext('2d');
                var dataURL;
                canvas.height = this.height;
                canvas.width = this.width;
                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                callback(dataURL);
                canvas = null;
                console.log(dataURL);
            };
            //img.src = url;
            img.src= document.getElementById('my-div').innerHTML;
            //console.log(url);
           
        }

        function convertFileToDataURLviaFileReader(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var reader = new FileReader();
                reader.onloadend = function () {
                    callback(reader.result);
                }
                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
            console.log(xhr);
        }

        $('#img2b64').submit(function (event) {
            var imageUrl = $(this).find('[name=url]').val();
            console.log(imageUrl);
            var convertType = $(this).find('[name=convertType]').val();
            var convertFunction = convertType === 'FileReader' ?
                convertFileToDataURLviaFileReader :
                convertImgToDataURLviaCanvas;

            convertFunction(imageUrl, function (base64Img) {
                $('.output')
                    .find('.textbox')
                    .val(base64Img)
                    .end()
                    .find('.link')
                    .attr('href', base64Img)
                    .text(base64Img)
                    .end()
                    .find('.img')
                    .attr('src', base64Img)
                    .end()
                    .find('.size')
                    .text(base64Img.length)
                    .end()
                    .find('.convertType')
                    .text(convertType)
                    .end()
                    .show()
            });

            event.preventDefault();
        });



    }





    

   
})();





