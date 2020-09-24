(function () {
    angular
        .module('myApp')
        .controller('CIPWashescontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'CIPService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, CIPService) {

        $scope.gridOptionsReviewEntry = {
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

                { field: 'ReviewKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewName', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'NameType', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewStatus', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewComment', width: '50%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewReason', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewTime', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'WashKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewStatusKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewStatusNum', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ReviewStatusDesc', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }



            ],
        };



        $scope.showGridReviewEntry = function () {
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

        $scope.GridfromButtonReviewEntry = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }


            else {
                // $scope.loadGrid();
                $scope.refreshGridReviewEntry();
            }
        }



        $scope.loadGridReviewEntry = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            majorgroup = 'sel';
            washkey = document.getElementById('ReviewEntryID').value;
            CIPService.getCIPReviewEntry(plant, washkey, majorgroup).success(function (data) {
                if (data == null || data.CIPReviewEntryList == null || data.CIPReviewEntryList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                }
                else if (data.CIPReviewEntryList.length == 1) {
                    var reviewcm = data.CIPReviewEntryList[0].ReviewComment;
                    console.log(data.CIPReviewEntryList[0]);

                    document.getElementById('reviewComment').value = reviewcm;
                    document.getElementById('reviewtimestamp').value = data.CIPReviewEntryList[0].ReviewTime;
                    document.getElementById('ReviewKey').value = data.CIPReviewEntryList[0].ReviewKey;
                    document.getElementById('reviewReason').value = data.CIPReviewEntryList[0].ReviewReason;
                    document.getElementById('reviewName').value = data.CIPReviewEntryList[0].ReviewName;
                    $scope.gridOptionsReviewEntry.paginationPageSizes.push(
                        data.CIPReviewEntryList.length
                    );
                    var CIPReviewEntryList = data.CIPReviewEntryList;
                    $scope.gridOptionsReviewEntry.data = CIPReviewEntryList;
                    $scope.error = false;

                }
                else {
                    $scope.gridOptionsReviewEntry.paginationPageSizes.push(
                        data.CIPReviewEntryList.length
                    );
                    var CIPReviewEntryList = data.CIPReviewEntryList;
                    $scope.gridOptionsReviewEntry.data = CIPReviewEntryList;
                    $scope.error = false;

                }
            }).finally(function () { $scope.loading = false; })

        }




        $scope.gridOptionsReviewEntry.onRegisterApi = function (gridApi) {
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

                    document.getElementById('ReviewEntryID').value = row.entity.WashKey;
                    document.getElementById('ReviewKey').value = row.entity.ReviewKey;
                    document.getElementById('reviewComment').value = row.entity.ReviewComment;
                    document.getElementById('reviewReason').value = row.entity.ReviewReason;
                    document.getElementById('reviewtimestamp').value = row.entity.ReviewTime;

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }
            });
        }
        




        $scope.refreshGridReviewEntry = function () {
            console.log('refresh grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsReviewEntry.data = [];

            $timeout(function () {
                $scope.loadGridReviewEntry();
            }, 1000);
        }





        $scope.gridOptionsVerifyDataEntry = {
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

                { field: 'VerifyKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyName', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'NameType', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyStatus', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyComment', width: '50%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyReason', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyTime', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'WashKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyStatusKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyStatusNum', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'VerifyStatusDesc', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }



            ],
        };



        $scope.showGridVerifyDataEntry = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            //document.getElementById(elementId).style.display = 'block';
        }




        $scope.GridfromButtonVerifyDataEntry = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }


            else {
                // $scope.loadGrid();
                $scope.refreshGridVerifyDataEntry();
            }
        }



        $scope.loadGridVerifyDataEntry = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            majorgroup = 'sel';
            washkey = document.getElementById('VerifyDataEntryID').value;
            CIPService.getCIPVerifyDataEntry(plant, washkey, majorgroup).success(function (data) {
                if (data == null || data.CIPVerifyDataEntryList == null || data.CIPVerifyDataEntryList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else if (data.CIPVerifyDataEntryList.length == 1) {
                    var verifydatacm = data.CIPVerifyDataEntryList[0].VerifyComment;
                    console.log(data.CIPVerifyDataEntryList[0]);

                    document.getElementById('ValidateComment').value = verifydatacm;
                    document.getElementById('Vreviewtimestamp').value = data.CIPVerifyDataEntryList[0].VerifyTime;
                    document.getElementById('ValidateReason').value = data.CIPVerifyDataEntryList[0].VerifyReason;
                    document.getElementById('VerifyDataKey').value = data.CIPVerifyDataEntryList[0].VerifyKey;
                    document.getElementById('verifyName').value = data.CIPVerifyDataEntryList[0].VerifyName;
                    $scope.gridOptionsVerifyDataEntry.paginationPageSizes.push(
                        data.CIPVerifyDataEntryList.length
                    );
                    var CIPVerifyDataEntryList = data.CIPVerifyDataEntryList;
                    $scope.gridOptionsVerifyDataEntry.data = CIPVerifyDataEntryList;
                    $scope.error = false;

                } else {
                    $scope.gridOptionsVerifyDataEntry.paginationPageSizes.push(
                        data.CIPVerifyDataEntryList.length
                    );
                    var CIPVerifyDataEntryList = data.CIPVerifyDataEntryList;
                    $scope.gridOptionsVerifyDataEntry.data = CIPVerifyDataEntryList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })






        }

        $scope.gridOptionsVerifyDataEntry.onRegisterApi = function (gridApi) {
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
                    
                    //document.getElementById('ValidateComment').value= data.CIPVerifyDataEntryList[0].VerifyComment; 
                    //document.getElementById('Vreviewtimestamp').value = data.CIPVerifyDataEntryList[0].VerifyTime;
                    //document.getElementById('ValidateReason').value = data.CIPVerifyDataEntryList[0].VerifyReason;
                    //document.getElementById('VerifyDataKey').value = data.CIPVerifyDataEntryList[0].VerifyKey;
                    //document.getElementById('verifyName').value = data.CIPVerifyDataEntryList[0].VerifyName;






                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //document.getElementById('UnitDesc').value = "";
                        //document.getElementById('UnitValue').value = "";
                        //document.getElementById('timestampid').value = "";

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }




        $scope.refreshGridVerifyDataEntry = function () {
            console.log('refresh grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsVerifyDataEntry.data = [];

            $timeout(function () {
                $scope.loadGridVerifyDataEntry();
            }, 1000);
        }





        $scope.gridOptionsNotes = {
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

                { field: 'NotesKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'NotesName', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'NotesComment', width: '50%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'NotesTime', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }



            ],
        };



        $scope.showGridNotes = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            //document.getElementById(elementId).style.display = 'block';
        }




        $scope.GridfromButtonNotes = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }


            else {
                // $scope.loadGrid();
                $scope.refreshGridNotes();
            }
        }



        $scope.loadGridNotes = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            majorgroup = 'sel';
            washkey = document.getElementById('NotesID').value;
            CIPService.getCIPNotes(plant, washkey, majorgroup).success(function (data) {
                if (data == null || data.CIPNotesList == null || data.CIPNotesList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                }
                else if (data.CIPNotesList.length == 1) {
                    var notescm = data.CIPNotesList[0].NotesComment;
                    console.log(data.CIPNotesList[0]);

                    document.getElementById('notescomment').value = notescm;
                    document.getElementById('noteseventtime').value = data.CIPNotesList[0].NotesTime;
                    document.getElementById('notesusername').value = data.CIPNotesList[0].NotesName;
                    document.getElementById('NotesKey').value = data.CIPNotesList[0].NotesKey;

                    $scope.gridOptionsNotes.paginationPageSizes.push(
                        data.CIPNotesList.length
                    );
                    var CIPNotesList = data.CIPNotesList;
                    $scope.gridOptionsNotes.data = CIPNotesList;
                    $scope.error = false;

                }

                else {
                    $scope.gridOptionsNotes.paginationPageSizes.push(
                        data.CIPNotesList.length
                    );
                    var CIPNotesList = data.CIPNotesList;
                    $scope.gridOptionsNotes.data = CIPNotesList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })






        }

        $scope.gridOptionsNotes.onRegisterApi = function (gridApi) {
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
                    //document.getElementById('notescomment').value = data.CIPNotesList[0].NotesComment;
                    //document.getElementById('noteseventtime').value = data.CIPNotesList[0].NotesTime;
                    //document.getElementById('notesusername').value = data.CIPNotesList[0].NotesName;
                    //document.getElementById('NotesKey').value = data.CIPNotesList[0].NotesKey;






                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //var notescm = data.CIPNotesList[0].NotesComment;
                        //console.log(data.CIPNotesList[0]);

                        //document.getElementById('notescomment').value = notescm;
                        //document.getElementById('noteseventtime').value = data.CIPNotesList[0].NotesTime;
                        //document.getElementById('notesusername').value = data.CIPNotesList[0].NotesName;
                        //document.getElementById('NotesKey').value = data.CIPNotesList[0].NotesKey;

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }




        $scope.refreshGridNotes = function () {
            console.log('refresh grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsNotes.data = [];

            $timeout(function () {
                $scope.loadGridNotes();
            }, 1000);
        }







        $scope.gridOptionsPCQI = {
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

                { field: 'PCQIKey', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'PCQIName', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'PCQIComment', width: '50%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'PCQITime', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }



            ],
        };



        $scope.showGridPCQI = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            //document.getElementById(elementId).style.display = 'block';
        }




        $scope.GridfromButtonPCQI = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }


            else {
                // $scope.loadGrid();
                $scope.refreshGridPCQI();
            }
        }



        $scope.loadGridPCQI = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            majorgroup = 'sel';
            washkey = document.getElementById('PCQIID').value;
            CIPService.getCIPPCQI(plant, washkey, majorgroup).success(function (data) {
                if (data == null || data.CIPPCQIList == null || data.CIPPCQIList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                }
                else if (data.CIPPCQIList.length == 1) {
                    var PCQIcm = data.CIPPCQIList[0].PCQIComment;
                    console.log(data.CIPPCQIList[0]);

                    document.getElementById('PCQIcomment').value = PCQIcm;
                    document.getElementById('PCQIusername').value = data.CIPPCQIList[0].PCQIName;
                    document.getElementById('PCQIKey').value = data.CIPPCQIList[0].PCQIKey;
                    $scope.gridOptionsPCQI.paginationPageSizes.push(
                        data.CIPPCQIList.length
                    );
                    var CIPPCQIList = data.CIPPCQIList;
                    $scope.gridOptionsPCQI.data = CIPPCQIList;
                    $scope.error = false;

                }

                else {
                    $scope.gridOptionsPCQI.paginationPageSizes.push(
                        data.CIPPCQIList.length
                    );
                    var CIPPCQIList = data.CIPPCQIList;
                    $scope.gridOptionsPCQI.data = CIPPCQIList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })






        }

        $scope.gridOptionsPCQI.onRegisterApi = function (gridApi) {
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
                    //document.getElementById('PCQIcomment').value = data.CIPPCQIList[0].PCQIComment;
                    //document.getElementById('PCQIeventtime').value = data.CIPPCQIList[0].PCQITime;
                    //document.getElementById('PCQIusername').value = data.CIPPCQIList[0].PCQIName;
                    //document.getElementById('PCQIKey').value = data.CIPPCQIList[0].PCQIKey;






                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //var PCQIcm = data.CIPPCQIList[0].PCQIComment;
                        //console.log(data.CIPPCQIList[0]);

                        //document.getElementById('PCQIcomment').value = PCQIcm;
                        //document.getElementById('PCQIeventtime').value = data.CIPPCQIList[0].PCQITime;
                        //document.getElementById('PCQIusername').value = data.CIPPCQIList[0].PCQIName;
                        //document.getElementById('PCQIKey').value = data.CIPPCQIList[0].PCQIKey;

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }




        $scope.refreshGridPCQI = function () {
            console.log('refresh grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsPCQI.data = [];

            $timeout(function () {
                $scope.loadGridPCQI();
            }, 1000);
        }


        $scope.getTimeStamp =function(controlname){
            var sttime = new Date().toLocaleString();
            sttime = sttime.replace(/,\s?/g, " ");
            document.getElementById(controlname).value = sttime;
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
            window.open('http://denm2008mesadm:93/api/Message/getCIP/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
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
                    document.getElementById('ReviewEntry').style.width = '0';
                    document.getElementById('VerifyDataEntry').style.width = '0';
                    document.getElementById('Notes').style.width = '0';
                    document.getElementById('PCQI').style.width = '0';
                    document.getElementById(nav).style.width = '95%';
                    document.getElementById('majorgroup').value = area;

                    var btnName;
                    btnName = '#get' + area ;

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
                            document.getElementById('mysidenavRightTITRSETUP').style.width = '0';
                            document.getElementById('mysidenavRightTITRSETUPOper').style.width = '0';
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

        
         $scope.addCIPReviewEntry = function (actionValue) {

            var plantValue = document.getElementById('VATPlantOff').value
            var ReviewKeyValue = document.getElementById('ReviewKey').value;
            var WashKeyValue = document.getElementById('ReviewEntryID').value;
            var ReviewNameValue = document.getElementById('verifiedby').value;
            var ReviewCommentValue = document.getElementById('reviewComment').value;
            var ReviewReasonValue = document.getElementById('reviewReason').value;
            //var ActionValue = actionValue;
            
                console.log('New Issue Added');
                CIPService.addCIPReviewEntry(plantValue, ReviewKeyValue, WashKeyValue, ReviewNameValue, ReviewCommentValue, ReviewReasonValue, actionValue ).success(function (data) {
                    $scope.clearTBCIPReviewEntry();





                });
            //}
         }
        $scope.InsertCIPReviewEntry = function () {
                     $scope.addCIPReviewEntry('ins');
                    var btnName;
                    btnName = '#getReviewEntry';
                    $timeout(function () {
                        $(btnName).trigger('click');
            
                    }, 0);


                    // $scope.clearTBCIPReviewEntry();
                    // location.reload();
                 }

         $scope.SaveAllCIPReviewEntry = function () {
             $scope.addCIPReviewEntry('upd');
            var btnName;
            btnName = '#getReviewEntry';
            $timeout(function () {
                $(btnName).trigger('click');
            
            }, 0);


            // $scope.clearTBCIPReviewEntry();
            // location.reload();
         }

         $scope.DeleteCIPReviewEntry = function () {
            $scope.addCIPReviewEntry('del');
            var btnName;
            btnName = '#getReviewEntry';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBCIPReviewEntry();
        }

        $scope.clearTBCIPReviewEntry = function () {
            document.getElementById('reviewReason').value = "";
            document.getElementById('reviewComment').value = "";
            document.getElementById('ReviewKey').value= "";
            //document.getElementById('ReviewEntryID').value= "";
            //document.getElementById('reviewReason').value= "";
            //document.getElementById('reviewComment').value= "";
            
        }


        $scope.addCIPVerifyDataEntry = function (actionValue) {

            var plantValue = document.getElementById('VATPlantOff').value
            var VerifyKeyValue = document.getElementById('VerifyDataKey').value;
            var WashKeyValue = document.getElementById('VerifyDataEntryID').value;
            var VerifyNameValue = document.getElementById('Vverifiedby').value;
            var VerifyCommentValue = document.getElementById('ValidateComment').value;
            var VerifyReasonValue = document.getElementById('ValidateReason').value;
            //var ActionValue = actionValue;

            console.log('New Issue Added');
            CIPService.addCIPVerifyDataEntry(plantValue, VerifyKeyValue, WashKeyValue, VerifyNameValue, VerifyCommentValue, VerifyReasonValue, actionValue).success(function (data) {
                $scope.clearTBCIPVerifyDataEntry();





            });
            //}
        }

        $scope.InsertCIPVerifyDataEntry = function () {
                    $scope.addCIPVerifyDataEntry('ins');
           
                    var btnName;
                    btnName = '#getVerifyDataEntry';
                    $timeout(function () {
                        $(btnName).trigger('click');

                    }, 0);


                    //$scope.clearTBCIPVerifyDataEntry();
                    //location.reload();
                }
        $scope.SaveAllCIPVerifyDataEntry = function () {
            $scope.addCIPVerifyDataEntry('upd');
           
            var btnName;
            btnName = '#getVerifyDataEntry';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            //$scope.clearTBCIPVerifyDataEntry();
            //location.reload();
        }

        $scope.DeleteCIPVerifyDataEntry = function () {
            $scope.addCIPVerifyDataEntry('del');
            var btnName;
            btnName = '#getVerifyDataEntry';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBCIPVerifyDataEntry();
        }

        $scope.clearTBCIPVerifyDataEntry = function () {
            document.getElementById('reviewReason').value = "";
            document.getElementById('reviewComment').value = "";
            document.getElementById('ReviewKey').value = "";
        }

        $scope.addCIPNotes = function (actionValue) {
            var plantValue = document.getElementById('VATPlantOff').value
            var NotesKeyValue = document.getElementById('NotesKey').value;
            var WashKeyValue = document.getElementById('NotesID').value;
            var NotesNameValue = document.getElementById('notesusername').value;
            var NotesCommentValue = document.getElementById('notescomment').value;
            var NotesTimeValue = document.getElementById('noteseventtime').value;
            console.log('New Issue Added');
            CIPService.addCIPNotes(plantValue, NotesKeyValue, WashKeyValue, NotesNameValue, NotesCommentValue, NotesTimeValue, actionValue).success(function (data) {
                $scope.clearTBCIPNotes();
            });
        }
        $scope.InsertCIPNotes = function () {
            $scope.addCIPNotes('ins');

            var btnName;
            btnName = '#getNotes';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            //$scope.clearTBCIPVerifyDataEntry();
            //location.reload();
        }
        $scope.SaveCIPNotes = function () {
            $scope.addCIPNotes('upd');

            var btnName;
            btnName = '#getNotes';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);
        }
        $scope.DeleteCIPNotes = function () {
            $scope.addCIPNotes('del');
            var btnName;
            btnName = '#getNotes';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBCIPNotes();
        }
        $scope.clearTBCIPNotes = function () {
            document.getElementById('noteseventtime').value = "";
            document.getElementById('notescomment').value = "";
            document.getElementById('notesusername').value = "";
            document.getElementById('NotesKey').value = "";
            
        }



        $scope.addCIPPCQI = function (actionValue) {
            var PlantValue = document.getElementById('VATPlantOff').value
            var PCQIKeyValue = document.getElementById('PCQIKey').value;
            var WashKeyValue = document.getElementById('PCQIID').value;
            var PCQINameValue = document.getElementById('PCQIusername').value;
            var PCQICommentValue = document.getElementById('PCQIcomment').value;
            var PCQITimeValue = document.getElementById('Pstarttime').value;
            var PCQIActionValue = actionValue;
            var PCQIStatusValue = document.getElementById('PCQIstatus').value;
            var PCQIWashConcateValue = document.getElementById('PCQIwashconcate').value;



            console.log('New Issue Added');
            CIPService.addCIPPCQI(PlantValue, PCQIKeyValue, WashKeyValue, PCQINameValue, PCQICommentValue, PCQITimeValue, PCQIActionValue, PCQIStatusValue, PCQIWashConcateValue).success(function (data) {
                $scope.clearTBCIPPCQI();
            });
        }
        $scope.InsertCIPPCQI = function () {
            $scope.addCIPPCQI('ins');

            var btnName;
            btnName = '#getPCQI';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            //$scope.clearTBCIPVerifyDataEntry();
            //location.reload();
        }
        $scope.SaveCIPPCQI = function () {
            $scope.addCIPPCQI('upd');

            var btnName;
            btnName = '#getPCQI';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);
        }

        $scope.DeleteCIPPCQI = function () {
            $scope.addCIPPCQI('del');
            var btnName;
            btnName = '#getPCQI';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBCIPPCQI();
        }

        $scope.clearTBCIPPCQI = function () {
            document.getElementById('PCQIwashconcate').value = "";
            document.getElementById('PCQIstatus').value = "";
            document.getElementById('PCQIcomment').value = "";
            document.getElementById('PCQIusername').value = "";
            document.getElementById('PCQIKey').value = "";
            document.getElementById('PCQIID').value = "";

        }




        $scope.EnableBoxes = function () {
            document.getElementById("area").disabled = false;
            document.getElementById('metertag').disabled = false;
            document.getElementById('currentdateval').disabled = false;
            document.getElementById('goal').disabled = false;


           
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

        
         $scope.maximize=function() {
             var plant = document.getElementById('VATPlantOff').value;
             console.log(plant);
             if (plant != 'DEN') {

                 var url = 'http://' + plant + 'c2012lit/Reports/Pages/Folder.aspx?ItemPath=%2fLRS%2fCIP&ViewMode=List';
                 console.log(url);
             }
             else {
                 var url = 'http://' + plant + 'c2012pltlit/Reports/Pages/Folder.aspx?ItemPath=%2fLRS%2fCIP&ViewMode=List';
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
             $scope.SelectElement("plant", pid);
             $scope.SelectElement("VATPlantOff", pid);
         }
         $scope.function_one();

         $scope.function_ID = function (url) {

             //#####Retrieve ID#####//
             var Pname = 'ID';

             if (!url) url = window.location.href;
             Pname = Pname.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + Pname + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pid = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(pid + '=pid');

             document.getElementById('ReviewEntryID').value = pid;
             document.getElementById('VerifyDataEntryID').value = pid;
             document.getElementById('NotesID').value = pid;
             document.getElementById('PCQIID').value = pid;


             //#####Retrieve CIPSystem#####//
             var PSystem = 'System';

             if (!url) url = window.location.href;
             PSystem = PSystem.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + PSystem + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pSystem = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(pSystem + '=pSystem');

             document.getElementById('CIPSystem').value = pSystem;
             document.getElementById('VCIPSystem').value = pSystem;
             document.getElementById('NCIPSystem').value = pSystem;
             document.getElementById('PCIPSystem').value = pSystem;

             //#####Retrieve CIPCircuit#####//
             var PCircuit = 'Circuit';

             if (!url) url = window.location.href;
             PCircuit = PCircuit.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + PCircuit + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pCircuit = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(pCircuit + '=pCircuit');

             document.getElementById('circuitwashed').value = pCircuit;
             document.getElementById('Vcircuitwashed').value = pCircuit;
             document.getElementById('Ncircuitwashed').value = pCircuit;
             document.getElementById('Pcircuitwashed').value = pCircuit;

             //#####Retrieve StartTime#####//
             var PStartTime = 'StartTime';

             if (!url) url = window.location.href;
             PStartTime = PStartTime.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + PStartTime + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pStartTime = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(pStartTime + '=pStartTime');

             document.getElementById('starttime').value = pStartTime;
             document.getElementById('Vstarttime').value = pStartTime;
             document.getElementById('Nstarttime').value = pStartTime;
             document.getElementById('Pstarttime').value = pStartTime;


             //#####Retrieve USER'S NAME #####//
             var Puname = 'uname';

             if (!url) url = window.location.href;
             Puname = Puname.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + Puname + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var puname = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(puname + '=puname');

             document.getElementById('notesusername').value = puname;
             document.getElementById('Vverifiedby').value = puname;
             document.getElementById('verifiedby').value = puname;
             document.getElementById('PCQIusername').value = puname;

             plant = document.getElementById('VATPlantOff').value;
             username = puname;
             var usname = [];
             CIPService.listUserRole(plant, username).success(function (data) {
                 var ulist = JSON.stringify(data);

                 var JSONObject = JSON.parse(ulist);
                 var CIPUserGroup = JSONObject.CIPLoginList.length;
                 if (CIPUserGroup == 1) {
                     //for (var i = 0; i < JSONObject["listUserRole"].length; i++) {
                     usname.push(JSONObject["CIPLoginList"][0]["role"])
                     //usname.push(JSONObject["CIPLoginList"][0]["AccessLevel"])
                 }
                 $scope.UserRoleList = usname;
                 //document.getElementById('LoggedInGroup').value = usname;
                 if (usname == "Admin" ) { //|| usname == "Oper")|| usname == "Oper")
                     document.getElementById('LoggedIn').value = username;
                     document.getElementById('LoggedInGroup').value = usname;
                     //$scope.Expand1T9('AdminBHolder', '17');
                     //window.open('#/CIP?plant=' + document.getElementById('VATPlantOff').value + '&uname=' + username, "_self");
                 }
                 else {
                     alert("Not Authorized!");

                     window.close();

                 }
             });
                 
             

             //#####Retrieve STATUS #####//
             var Pstatus = 'PStatus';

             if (!url) url = window.location.href;
             Pstatus = Pstatus.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + Pstatus + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pstatus = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(pstatus + '=pstatus');

            
             document.getElementById('PCQIstatus').value = pstatus;

            //#####Retrieve PWashConcate #####//
             var PWashConcate = 'PWashConcate';

            if (!url) url = window.location.href;
            PWashConcate = PWashConcate.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + PWashConcate + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            var pWashConcate = decodeURIComponent(results[2].replace(/\+/g, " "))
            console.log(pWashConcate + '=pWashConcate');

            
            document.getElementById('PCQIwashconcate').value = pWashConcate;

             
         }
         $scope.function_ID();

         $scope.function_action = function (url) {

             //#####Retrieve action#####//
             var Pname = 'action';
             
             if (!url) url = window.location.href;
             Pname = Pname.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + Pname + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pid = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(pid + '=pid');
             
             //document.getElementById('ProjectNameD').value = pid;

             $scope.openDIVMOD(pid, pid);
         }
         $scope.function_action();

        
         


          $scope.Expand1T9=function() {
             //console.log(data);
             if (document.getElementById('2').style.visibility == "hidden") {
                 document.getElementById('2').style.visibility = "initial";
                 document.getElementById('3').style.visibility = "initial";
                 document.getElementById('4').style.visibility = "initial";
                 document.getElementById('5').style.visibility = "initial";
                 document.getElementById('6').style.visibility = "initial";
                 document.getElementById('7').style.visibility = "initial";
                 document.getElementById('8').style.visibility = "initial";
                 document.getElementById('9').style.visibility = "initial";

             }
             else {
                 document.getElementById('2').style.visibility = "hidden";
                 document.getElementById('3').style.visibility = "hidden";
                 document.getElementById('4').style.visibility = "hidden";
                 document.getElementById('5').style.visibility = "hidden";
                 document.getElementById('6').style.visibility = "hidden";
                 document.getElementById('7').style.visibility = "hidden";
                 document.getElementById('8').style.visibility = "hidden";
                 document.getElementById('9').style.visibility = "hidden";

             }

         }

        //####Autopopulate screen function area#################//
        
       // Display of date
        // document.getElementById('timestampid').value = Date();
        
        //####End Autopopulate screen function area#################//

    }





    

   
})();



function ChooseCircuit(data) {
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("CircuitT").value = dataRec;

}

function ChooseCircuitOper(data) {
    console.log(data);
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("CircuitOperT").value = dataRec;

    document.getElementById('getChemicalDD').click();
    //$scope.listChemical(dataRec);

}






