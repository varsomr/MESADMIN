(function () {
    angular
        .module('myApp')
        .controller('OneStopGuidedSupportcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'OneStopGuidedSupportService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, OneStopGuidedSupportService) {

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
                { field: 'IncidentID', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ProcessInput', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ApplicationInput', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReportInput', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'LITInput', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'HardwareInput', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'SDTechName', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'CreateDate', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'row_id', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }

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
            if (document.getElementById('POPE').value == null || document.getElementById('POPE').value == "" || document.getElementById('POPE').value == "PO or Batch#") {
                wo_id = '1234567';
            }
            else {
                wo_id = document.getElementById('POPE').value;
            }

            console.log("this is @" + plant + " and PO# is " + wo_id);

            //console.log(options);
            OneStopGuidedSupportService.getOneStopSupport(plant).success(function (data) {
                if (data == null || data.getOneStopSupportList == null || data.ServDeskEntryList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ServDeskEntryList.length
                    );
                    var ServDeskEntryList = data.ServDeskEntryList;
                    $scope.gridOptions.data = ServDeskEntryList;
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
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {  //rowchecked 
                    ///---------  if(objarray) doesnt have row.entity.id
                    console.log('push');
                    //document.getElementById('POP').value = row.entity.PO;
                    //document.getElementById('itemP').value = row.entity.Item;
                    //document.getElementById('OperationP').value = row.entity.Operation;
                    //document.getElementById('BatchP').value = row.entity.Batch;
                    //document.getElementById('ReasonCode').value = row.entity.ReasonCode;
                    //document.getElementById('WorkCenter').value = row.entity.WorkCenter;
                    //document.getElementById('JobStatus').value = row.entity.JobStatus;
                    //document.getElementById('ent_id').value = row.entity.ent_id;
                    //document.getElementById('to_ent_id').value = row.entity.to_ent_id;
                    //document.getElementById('qty').value = row.entity.qty;
                    //document.getElementById('SentToSAP').value = row.entity.SentToSAP;
                    //document.getElementById('comments').value = row.entity.comments;
                    //document.getElementById('spare1').value = row.entity.spare1;
                    //document.getElementById('spare2').value = row.entity.spare2;
                    //document.getElementById('spare3').value = row.entity.spare3;
                    //document.getElementById('spare4').value = row.entity.spare4;
                    //document.getElementById('last_edit_by').value = row.entity.last_edit_by;
                    //document.getElementById('last_edit_at').value = row.entity.last_edit_at;
                    //document.getElementById('created_at_utc').value = row.entity.created_at_utc;
                    //document.getElementById('created_at_local').value = row.entity.created_at_local;
                    //$scope.openDIV('mysidenavRightSummary'); 
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

        $scope.popSummary = function () {
            document.getElementById('mysidenavRightProd').style.width = '0';
        }

        $scope.Undo = function () {

            //document.getElementById('PO').value = '';
            //document.getElementById('Operation').value = '';
            //document.getElementById('Item').value = '';
            //document.getElementById('Batch').value = '';
            //document.getElementById('ReasonCode').value = '';
            //document.getElementById('WorkCenter').value = '';
            //document.getElementById('JobStatus').value = '';
            //document.getElementById('ent_id').value = '';
            //document.getElementById('to_ent_id').value = '';
            //document.getElementById('qty').value = '';
            //document.getElementById('SentToSAP').value = '';
            //document.getElementById('comments').value = '';
            //document.getElementById('spare1').value = '';
            //document.getElementById('spare2').value = '';
            //document.getElementById('spare3').value = '';
            //document.getElementById('spare4').value = '';
            //document.getElementById('last_edit_by').value = '';
            //document.getElementById('last_edit_at').value = '';
            //document.getElementById('created_at_utc').value = '';
            //document.getElementById('created_at_local').value = '';

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
            window.open('http://denm2008mesadm:93/api/Message/getCasesValidation/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
        }

        $scope.openNav = function (nav) {
            document.getElementById(nav).style.width = "90.352%";
            document.getElementById(nav).style.zIndex = "999";
        }

        $scope.closeNav = function (nav) {
            document.getElementById(nav).style.width = "0";
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
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightCons').style.width = '0';
            document.getElementById('mysidenavRightProd').style.width = '0';
            document.getElementById('mysidenavRightSummary').style.width = '0';
            document.getElementById('mysidenavRightTruck').style.width = '0';
            document.getElementById('mysidenavRightQuality').style.width = '0';
            document.getElementById('mysidenavRightLabel').style.width = '0';
            document.getElementById('mysidenavRightINV').style.width = '0';
            document.getElementById('mysidenavRightTicket').style.width = '0';
            document.getElementById(nav).style.width = '90.352%';
        }

        $scope.addServDeskEntry = function () {

            if (document.getElementById('ProcessINC').value == null || document.getElementById('ProcessINC').value == "") {
                alert("Ticket Number Must be entered");
                return false;
            }
            else {

                var IncidentIDValue = document.getElementById('ProcessINC').value
                var ProcessInputValue = document.getElementById('IssueAreaTB1').value
                var ApplicationInputValue = document.getElementById('ProcessTB').value
                var ReportInputValue = document.getElementById('ProcessTBR').value
                var LITInputValue = document.getElementById('IssueAreaTBS').value
                var HardwareInputValue = document.getElementById('ProcessTBC').value
                var SDTechNameValue = document.getElementById('ProcessTBU').value
                //var d = new Date();
                var CreateDateValue = '2018-06-13';

                console.log('New Issue Added');
                OneStopGuidedSupportService.addServDeskEntry(IncidentIDValue, ProcessInputValue, ApplicationInputValue, ReportInputValue, LITInputValue, HardwareInputValue, SDTechNameValue, CreateDateValue).success(function (data) {

                    //OneStopGuidedSupportService.addServDeskEntry().success(function (data) {
                    //if (document.getElementById('Type').value != 'ChangeRequest')
                    //{
                    // $scope.gridApi.core.refresh();
                    // $scope.loadGrid();
                    alert("Your Input has been saved!")
                    $scope.clearTB();





                });
            }
        }

        $scope.clearTB = function () {
            document.getElementById('ProcessTBU').value = "";
            document.getElementById('ProcessINC').value = "";
            document.getElementById('IssueAreaTB1').value = "";
            document.getElementById('ProcessTB').value = "";
            document.getElementById('ProcessTBS').value = "";
            document.getElementById('ProcessTBR').value = "";
            document.getElementById('ProcessTBC').value = "";

        }

        $scope.blurT = function (TB) {

            //document.getElementById(TB).value = "";
            //document.getElementById(TB).style.backgroundColor = 'transparent';

        }

        $scope.assignT = function (TB, MSG) {
            document.getElementById(TB).value = MSG;
            document.getElementById('MsgBox').value = MSG;
            document.getElementById('ProcessINC').style.backgroundColor = 'lightgreen';
            document.getElementById('ProcessINC').style.color = 'darkslategrey';
            document.getElementById('ProcessTBU').style.backgroundColor = 'lightgreen';
            document.getElementById('ProcessTBU').style.color = 'darkslategrey';
            document.getElementById('ProcessTBU').focus();

        }
        $scope.openGuide = function (url) {

            newwindow = window.open(url, 'name', 'height=600px,width=800px');
            if (window.focus) { newwindow.focus() }
            return false;

        }

    }








})();





