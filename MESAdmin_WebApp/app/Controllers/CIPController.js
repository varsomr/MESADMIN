(function () {
    angular
        .module('myApp')
        .controller('CIPcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'CIPService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, CIPService) {

        $scope.gridOptionsMANTEMP = {
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

                { field: 'UnitDesc', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'UnitValue', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'Timestamp', width: '50%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }


            ],
        };



        $scope.showGridMANTEMP = function () {
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

        $scope.GridfromButtonMANTEMP = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }


            else {
                // $scope.loadGrid();
                $scope.refreshGridMANTEMP();
            }
        }

        $scope.GridfromButtonMANTEMPAll = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }


            else {
                // $scope.loadGrid();
                document.getElementById("UnitDesc").value = "";
                $scope.refreshGridMANTEMP();
            }
        }



        $scope.loadGridMANTEMP = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            majorgroup = document.getElementById("UnitDesc").value;
            majorgroup1 = 'sel';

            if (majorgroup == '') {
                majorgroup = '0';
            }
            if (majorgroup1 == '') {
                majorgroup1 = '0';
            }


            CIPService.getCIPMANTEMP(plant, majorgroup, majorgroup1).success(function (data) {
                if (data == null || data.CIPMANTEMPList == null || data.CIPMANTEMPList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsMANTEMP.paginationPageSizes.push(
                        data.CIPMANTEMPList.length
                    );
                    var CIPMANTEMPList = data.CIPMANTEMPList;
                    $scope.gridOptionsMANTEMP.data = CIPMANTEMPList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })






        }

        $scope.gridOptionsMANTEMP.onRegisterApi = function (gridApi) {
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

                    document.getElementById('UnitDesc').value = row.entity.UnitDesc;
                    document.getElementById('UnitValue').value = row.entity.UnitValue;
                    document.getElementById('timestampid').value = row.entity.Timestamp;






                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        document.getElementById('UnitDesc').value = "";
                        document.getElementById('UnitValue').value = "";
                        document.getElementById('timestampid').value = "";

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }




        $scope.refreshGridMANTEMP = function () {
            console.log('refresh grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsMANTEMP.data = [];

            $timeout(function () {
                $scope.loadGridMANTEMP();
            }, 1000);
        }




        $scope.gridOptionsTITRSETUP = {
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
            rowTemplate:
            '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',
            columnDefs: [
                { field: 'SkidDesc', displayName: 'SkidDesc', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'chemicaltype', displayName: 'ChemicalType', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'maxT', displayName: 'Max', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'minT', displayName: 'Min', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'titrations', displayName: 'Titration', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'unitsT', displayName: 'Units', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'enabledT', displayName: 'Enabled', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'TitrationSetupKey', displayName: 'ID', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'IsExpired', displayName: 'IsExpired', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
            ],
        };

        $scope.GridfromButtonTITRSETUP = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }
            else {
                // $scope.loadGridTITRSETUP();
                $scope.refreshGridTITRSETUP();
            }
        }

        //$scope.GridfromButtonTITRSETUPOper = function () {

        //    if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
        //        alert("Please Select a Plant");
        //        return false;

        //    }
        //    else {

        //        $scope.refreshGridTITRSETUP();
        //    }
        //}

        $scope.loadGridTITRSETUP = function () {
            $scope.loading = true;
            console.log('loading grid');

            var plant = document.getElementById('VATPlantOff').value;
            var majorgroup = '0'; //document.getElementById('CircuitOperT').value;
            var majorgroup1 = '0'; //document.getElementById('ChemicalTypeOperT').value;

            //if (majorgroup == '') {
            //    majorgroup = '0';
            //}
            //if (majorgroup1 == '') {
            //    majorgroup1 = '0';
            //}
            var majorgroup2 = 'sel';

            CIPService.getCIPTITRSETUP(plant, majorgroup, majorgroup1, majorgroup2).success(function (data) {
                if (data == null || data.CIPTITRSETUPList == null || data.CIPTITRSETUPList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                }


                else {
                    $scope.gridOptionsTITRSETUP.paginationPageSizes.push(
                        data.CIPTITRSETUPList.length
                    );
                    var CIPTITRSETUPList = data.CIPTITRSETUPList;
                    $scope.gridOptionsTITRSETUP.data = CIPTITRSETUPList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })


        }

        $scope.gridOptionsTITRSETUP.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {
                    console.log('push');
                    document.getElementById('CircuitT').value = row.entity.SkidDesc;
                    //document.getElementById('CircuitDD').isSelected = row.entity.circuit;
                    document.getElementById('ChemicalTypeT').value = row.entity.chemicaltype;
                    document.getElementById('MaxT').value = row.entity.maxT;
                    document.getElementById('MinT').value = row.entity.minT;
                    document.getElementById('TitrationsT').value = row.entity.titrations;
                    document.getElementById('UnitsT').value = row.entity.unitsT;
                    document.getElementById('EnabledT').value = row.entity.enabledT;
                    document.getElementById('TitrationKeyValue').value = row.entity.TitrationSetupKey;
                    if (row.entity.enabledT == "True") {
                        document.getElementById('chkEnabledT').checked = true;

                    }
                    else {
                        document.getElementById('chkEnabledT').checked = false;

                    }
                    if (row.entity.IsExpired == "True") {
                        document.getElementById('TitrationEntryHolder').style.backgroundColor = 'red';
                        document.getElementById('TitrationEntry1').style.backgroundColor = 'red';
                        document.getElementById('TitrationEntry2').style.backgroundColor = 'red';
                        document.getElementById('TitrationEntry3').style.backgroundColor = 'red';
                        document.getElementById('TitrationEntry4').style.backgroundColor = 'red';
                        document.getElementById('IsExpired').style.visibility = "initial";
                        document.getElementById('IsExpired').value = "EXPIRED!";



                    }
                    else {
                        document.getElementById('TitrationEntryHolder').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry1').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry2').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry3').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry4').style.backgroundColor = 'black';
                        document.getElementById('IsExpired').style.visibility = "hidden";
                        document.getElementById('IsExpired').value = "EXPIRED!";

                    }







                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        document.getElementById('CircuitT').value = "";
                        document.getElementById('CircuitDD').value = "Select Circuit";
                        document.getElementById('ChemicalTypeT').value = "";
                        document.getElementById('MaxT').value = "";
                        document.getElementById('MinT').value = "";
                        document.getElementById('TitrationsT').value = "";
                        document.getElementById('UnitsT').value = "";
                        document.getElementById('EnabledT').value = "";
                        document.getElementById('chkEnabledT').checked = false;
                        document.getElementById('TitrationKeyValue').value = "";
                        document.getElementById('TitrationEntryHolder').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry1').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry2').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry3').style.backgroundColor = 'black';
                        document.getElementById('TitrationEntry4').style.backgroundColor = 'black';
                        document.getElementById('IsExpired').style.visibility = "hidden";
                        document.getElementById('IsExpired').value = "EXPIRED!";

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });

        }


        $scope.gridOptionsTITRSETUPOper = {
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
            rowTemplate:
            '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',
            columnDefs: [
                { field: 'SkidDesc', displayName: 'SkidDesc', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'chemicaltype', displayName: 'ChemicalType', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'maxT', displayName: 'Max', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'minT', displayName: 'Min', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'titrations', displayName: 'TitrationOper', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'unitsT', displayName: 'Units', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'enabledT', displayName: 'Enabled', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'TitrationSetupKey', displayName: 'ID', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'IsExpired', displayName: 'IsExpired', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
            ],
        };

        $scope.GridfromButtonTITRSETUPOper = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }
            else {
                $scope.refreshGridTITRSETUPOper();
            }
        }



        $scope.loadGridTITRSETUPOper = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            var majorgroup = document.getElementById('CircuitOperT').value;
            var majorgroup1 = document.getElementById('ChemicalTypeOperT').value;

            if (majorgroup == '') {
                majorgroup = '0';
            }
            if (majorgroup1 == '') {
                majorgroup1 = '0';
            }
            var majorgroup2 = 'sel';
            //majorgroup = 'sel';
            //startdate = document.getElementById('startdate').value;
            //date = document.getElementById('date').value;
            //check = document.getElementById('rptheader').checked;

            CIPService.getCIPTITRSETUP(plant, majorgroup, majorgroup1, majorgroup2).success(function (data) {
                if (data == null || data.CIPTITRSETUPList == null || data.CIPTITRSETUPList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                }


                else if (data.CIPTITRSETUPList.length == 1) {

                    // document.getElementById('CircuitOperT').value = row.entity.SkidDesc;


                    //var chemType = row.entity.chemicaltype;
                    //document.getElementById('ChemicalTypeOperT').value = chemType;
                    //$scope.listChemical();

                    document.getElementById('MaxOperT').value = data.CIPTITRSETUPList[0].maxT;
                    document.getElementById('MinOperT').value = data.CIPTITRSETUPList[0].minT;
                    document.getElementById('TitrationOpersT').value = data.CIPTITRSETUPList[0].titrations;
                    document.getElementById('UnitsOperT').value = data.CIPTITRSETUPList[0].unitsT;
                    document.getElementById('EnabledOperT').value = data.CIPTITRSETUPList[0].enabledT;
                    document.getElementById('TitrationOperKeyValue').value = data.CIPTITRSETUPList[0].TitrationSetupKey;
                    if (data.CIPTITRSETUPList[0].enabledT == "True") {
                        document.getElementById('chkEnabledOperT').checked = true;

                    }
                    else {
                        document.getElementById('chkEnabledOperT').checked = false;

                    }
                    if (data.CIPTITRSETUPList[0].IsExpired == "True") {
                        document.getElementById('TitrationOperEntryHolder').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry1').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry2').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry3').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry4').style.backgroundColor = 'red';
                        document.getElementById('IsExpiredOper').style.visibility = "initial";
                        document.getElementById('IsExpiredOper').value = "EXPIRED!";
                        document.getElementById('TitrationOpersT').style.backgroundColor = 'lightyellow';
                        document.getElementById("TitrationOpersT").focus();



                    }
                    else {
                        document.getElementById('TitrationOperEntryHolder').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry1').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry2').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry3').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry4').style.backgroundColor = 'black';
                        document.getElementById('IsExpiredOper').style.visibility = "hidden";
                        document.getElementById('IsExpiredOper').value = "EXPIRED!";
                        document.getElementById('TitrationOpersT').style.backgroundColor = 'lightyellow';
                        document.getElementById("TitrationOpersT").focus();

                    }
                    $scope.gridOptionsTITRSETUP.paginationPageSizes.push(
                        data.CIPTITRSETUPList.length
                    );
                    var CIPTITRSETUPList = data.CIPTITRSETUPList;
                    $scope.gridOptionsTITRSETUPOper.data = CIPTITRSETUPList;
                    $scope.error = false;

                }

                else {
                    $scope.gridOptionsTITRSETUP.paginationPageSizes.push(
                        data.CIPTITRSETUPList.length
                    );
                    var CIPTITRSETUPList = data.CIPTITRSETUPList;
                    $scope.gridOptionsTITRSETUPOper.data = CIPTITRSETUPList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })

        }

        $scope.gridOptionsTITRSETUPOper.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {
                    console.log('push');
                    document.getElementById('CircuitOperT').value = row.entity.SkidDesc;
                    //document.getElementById('CircuitOperDD').isSelected = row.entity.circuit;

                    var chemType = row.entity.chemicaltype;
                    document.getElementById('ChemicalTypeOperT').value = chemType;
                    $scope.listChemical();

                    document.getElementById('MaxOperT').value = row.entity.maxT;
                    document.getElementById('MinOperT').value = row.entity.minT;
                    // document.getElementById('TitrationOpersT').value = row.entity.titrations;
                    document.getElementById('UnitsOperT').value = row.entity.unitsT;
                    document.getElementById('EnabledOperT').value = row.entity.enabledT;
                    document.getElementById('TitrationOperKeyValue').value = row.entity.TitrationSetupKey;
                    if (row.entity.enabledT == "True") {
                        document.getElementById('chkEnabledOperT').checked = true;

                    }
                    else {
                        document.getElementById('chkEnabledOperT').checked = false;

                    }
                    if (row.entity.IsExpired == "True") {
                        document.getElementById('TitrationOperEntryHolder').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry1').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry2').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry3').style.backgroundColor = 'red';
                        document.getElementById('TitrationOperEntry4').style.backgroundColor = 'red';
                        document.getElementById('IsExpiredOper').style.visibility = "initial";
                        document.getElementById('IsExpiredOper').value = "EXPIRED!";
                        document.getElementById('TitrationOpersT').style.backgroundColor = 'lightyellow';
                        document.getElementById("TitrationOpersT").focus();



                    }
                    else {
                        document.getElementById('TitrationOperEntryHolder').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry1').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry2').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry3').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry4').style.backgroundColor = 'black';
                        document.getElementById('IsExpiredOper').style.visibility = "hidden";
                        document.getElementById('IsExpiredOper').value = "EXPIRED!";
                        document.getElementById('TitrationOpersT').style.backgroundColor = 'lightyellow';
                        document.getElementById("TitrationOpersT").focus();

                    }







                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        document.getElementById('CircuitOperT').value = "";
                        document.getElementById('CircuitOperDD').value = "Select Circuit";
                        document.getElementById('ChemicalTypeOperT').value = "";
                        document.getElementById('MaxOperT').value = "";
                        document.getElementById('MinOperT').value = "";
                        document.getElementById('TitrationOpersT').value = "";
                        document.getElementById('UnitsOperT').value = "";
                        document.getElementById('EnabledOperT').value = "";
                        document.getElementById('chkEnabledOperT').checked = false;
                        document.getElementById('TitrationOperKeyValue').value = "";
                        document.getElementById('TitrationOperEntryHolder').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry1').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry2').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry3').style.backgroundColor = 'black';
                        document.getElementById('TitrationOperEntry4').style.backgroundColor = 'black';
                        document.getElementById('IsExpiredOper').style.visibility = "hidden";
                        document.getElementById('IsExpiredOper').value = "EXPIRED!";

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });

        }


        $scope.CircuitList = null;
        $scope.listCircuit = function () {
            plant = document.getElementById('VATPlantOff').value;
            var crcname = [];
            CIPService.listCircuit(plant).success(function (data) {
                //  console.log('Listed Ongoing Projects' + data.listProjectList[0]);

                var crclist = JSON.stringify(data);

                var JSONObject = JSON.parse(crclist);

                for (var i = 0; i < JSONObject["listCircuit"].length; i++) {
                    crcname.push(JSONObject["listCircuit"][i]["CircuitDesc"])

                }
                $scope.CircuitList = crcname;

            });
        }
        $scope.listCircuit();





        $scope.ChemicalList = null;
        $scope.listChemical = function () {

            plant = document.getElementById('VATPlantOff').value;
            chemical = document.getElementById('CircuitOperT').value;
            var cmcname = [];
            CIPService.listChemical(plant, chemical).success(function (data) {
                var cmclist = JSON.stringify(data);

                var JSONObject = JSON.parse(cmclist);

                for (var i = 0; i < JSONObject["listChemical"].length; i++) {
                    cmcname.push(JSONObject["listChemical"][i]["ChemicalDesc"])

                }
                $scope.ChemicalList = cmcname;

            });
        }
        // $scope.listChemical();



        $scope.MTempUnitsList = null;
        $scope.listMTempUnitsList = function () {

            plant = document.getElementById('VATPlantOff').value;
            var cmcname = [];
            CIPService.listMTempUnitsList(plant).success(function (data) {
                var cmclist = JSON.stringify(data);

                var JSONObject = JSON.parse(cmclist);

                for (var i = 0; i < JSONObject["listMTempUnitsList"].length; i++) {
                    cmcname.push(JSONObject["listMTempUnitsList"][i]["UnitDesc"])

                }
                $scope.MTempUnitsList = cmcname;

            });
        }
        $scope.listMTempUnitsList();


        $scope.checkUserGroup = function () {
            $scope.listUserRole();
             //if (document.getElementById('LoggedInGroup').value == "admin") {
             //    $scope.Expand1T9('AdminBHolder', '17');
             //   }
             //   else {
             //    alert("Not Authorized");
             //   }
        }


        //$scope.UserRoleList = null;
        $scope.listUserRole = function () {

            plant = document.getElementById('VATPlantOff').value;
            username = document.getElementById('LoggedIn').value;
            var usname = [];
            CIPService.listUserRole(plant, username).success(function (data) {
                var ulist = JSON.stringify(data);

                var JSONObject = JSON.parse(ulist);
                var CIPUserGroup = JSONObject.CIPLoginList.length;
                if (CIPUserGroup == 1){
                //for (var i = 0; i < JSONObject["listUserRole"].length; i++) {
                    usname.push(JSONObject["CIPLoginList"][0]["role"])
                //usname.push(JSONObject["CIPLoginList"][0]["AccessLevel"])
                }
                $scope.UserRoleList = usname;
                document.getElementById('LoggedInGroup').value = usname;
                if (document.getElementById('LoggedInGroup').value=="Admin"){
                    document.getElementById("17").disabled = false;
                    $scope.Expand1T9('AdminBHolder', '17');
                }
                else {
                    alert("Not Authorized!")
                    document.getElementById("17").disabled = true;
                    }
               
            });
        }
        //$scope.listUserRole();



        $scope.rowFormatter = function (row) {

            return row.entity.IsExpired === 'True';
        };


        $scope.refreshGridTITRSETUP = function () {
            console.log('refreshTITRSETUP grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsTITRSETUP.data = [];

            $timeout(function () {
                $scope.loadGridTITRSETUP();
            }, 1000);
        }

        $scope.refreshGridTITRSETUPOper = function () {
            console.log('refreshTITRSETUPOper grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsTITRSETUPOper.data = [];

            $timeout(function () {
                $scope.loadGridTITRSETUPOper();
            }, 1000);
        }

        $scope.gridOptionsCHEMENTRY = {
            //enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
            //enableVerticalScrollbar: uiGridConstants.scrollbars.NEVER,
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

                { field: 'ChemicalName', displayName: 'Name', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ChemicalTypeDesc', displayName: 'Type', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'ChemicalCost', displayName: 'Cost', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
                , { field: 'EUName', displayName: 'Units', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }


            ],
        };

        $scope.GridfromButtonCHEMENTRY = function () {

            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select a Plant");
                return false;

            }
            else {
                // $scope.loadGridCHEMENTRY();
                $scope.refreshGridCHEMENTRY();
            }
        }

        $scope.loadGridCHEMENTRY = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            majorgroup = 'sel';
            //startdate = document.getElementById('startdate').value;
            //date = document.getElementById('date').value;
            //check = document.getElementById('rptheader').checked;

            CIPService.getCIPCHEMENTRY(plant, majorgroup).success(function (data) {
                if (data == null || data.CIPCHEMENTRYList == null || data.CIPCHEMENTRYList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsCHEMENTRY.paginationPageSizes.push(
                        data.CIPCHEMENTRYList.length
                    );
                    var CIPCHEMENTRYList = data.CIPCHEMENTRYList;
                    $scope.gridOptionsCHEMENTRY.data = CIPCHEMENTRYList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })

        }

        $scope.gridOptionsCHEMENTRY.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {
                    console.log('push');
                    document.getElementById('name').value = row.entity.ChemicalName;
                    document.getElementById('type').value = row.entity.ChemicalTypeDesc;
                    document.getElementById('cost').value = row.entity.ChemicalCost;
                    document.getElementById('units').value = row.entity.EUName;
                    document.getElementById('ChemicalKey').value = row.entity.ChemicalKey;

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        document.getElementById('name').value = "";
                        document.getElementById('type').value = "";
                        document.getElementById('cost').value = "";
                        document.getElementById('units').value = "";
                        document.getElementById('ChemicalKey').value = "";

                        document.getElementById('InputForm').style.width = '0';
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });

        }


        $scope.refreshGridCHEMENTRY = function () {
            console.log('refreshCHEMENTRY grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsCHEMENTRY.data = [];

            $timeout(function () {
                $scope.loadGridCHEMENTRY();
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
        $scope.openDIVMOD = function (nav, area) {
            document.getElementById('mysidenavRightIntro').style.width = '0';
            document.getElementById('mysidenavRightMANTEMP').style.width = '0';
            document.getElementById('mysidenavRightCHEMENTRY').style.width = '0';
            document.getElementById('mysidenavRightREPORT').style.width = '0';
            document.getElementById('mysidenavRightTITRSETUP').style.width = '0';
            document.getElementById('mysidenavRightTITRSETUPOper').style.width = '0';
            document.getElementById('mysidenavRightLogIn').style.width = '0';
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

        $scope.openDIVReport = function (nav, area) {
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

            var url = 'http://' + document.getElementById('VATPlantOff').value + 'c2012lit' + area;
            console.log(url);
            $('#ReportDisplay').attr('src', url);




        }
        $scope.refreshOnSelect = function () {
            var btnName;
            btnName = '#' + document.getElementById('majorgroup').value;

            console.log(btnName);
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);
        }


        $scope.addCIPTITRSETUP = function (ActionValue) {

            var PlantValue = document.getElementById('VATPlantOff').value;
            var titrationsValue = document.getElementById('TitrationsT').value;
            var SkidDescValue = document.getElementById('CircuitT').value;
            var chemicaltypeValue = document.getElementById('ChemicalTypeT').value;
            var unitsTValue = document.getElementById('UnitsT').value;
            var enabledTValue = document.getElementById('EnabledT').value;
            var maxTValue = document.getElementById('MaxT').value;
            var minTValue = document.getElementById('MinT').value;
            var TitrationKeyValue = document.getElementById('TitrationKeyValue').value;
            //if (ActionValue == 'ins'||) {
            //    var TitrationKeyValue = "";
            //}
            //else {
            //   var TitrationKeyValue = document.getElementById('TitrationKeyValue').value;
            //}
            console.log('New Issue Added');
            CIPService.addCIPTITRSETUP(PlantValue,
                titrationsValue,
                SkidDescValue,
                chemicaltypeValue,
                unitsTValue,
                enabledTValue,
                maxTValue,
                minTValue,
                TitrationKeyValue,
                ActionValue).success(function (data) {
                    $scope.clearTBTITRSETUP();

                });

        }


        $scope.addCIPTITRSETUPOper = function (ActionValue) {

            var PlantValue = document.getElementById('VATPlantOff').value;
            var titrationsValue = document.getElementById('TitrationOpersT').value;
            var SkidDescValue = document.getElementById('CircuitOperT').value;
            var chemicaltypeValue = document.getElementById('ChemicalTypeOperT').value;
            var unitsTValue = document.getElementById('UnitsOperT').value;
            var enabledTValue = document.getElementById('EnabledOperT').value;
            var maxTValue = document.getElementById('MaxOperT').value;
            var minTValue = document.getElementById('MinOperT').value;
            var TitrationKeyValue = document.getElementById('TitrationOperKeyValue').value;
            console.log('New Issue Added');
            CIPService.addCIPTITRSETUP(PlantValue,
                titrationsValue,
                SkidDescValue,
                chemicaltypeValue,
                unitsTValue,
                enabledTValue,
                maxTValue,
                minTValue,
                TitrationKeyValue,
                ActionValue).success(function (data) {
                    $scope.clearTBTITRSETUPOper();
                    //document.getElementById('getTITRSETUPOper').click();
                    $scope.GridfromButtonTITRSETUPOper();


                });


        }

        $scope.SaveAllTITRSETUP = function () {
            $scope.addCIPTITRSETUP('upd');
            var btnName;
            btnName = '#getTITRSETUP';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBTITRSETUP();
        }
        $scope.SaveAllTITRSETUPOper = function () {

            if (document.getElementById('TitrationOpersT').value == null || document.getElementById('TitrationOpersT').value == "Select a Plant" || document.getElementById('TitrationOpersT').value == "") {
                alert("Please Enter Titration Value");
                //return false;
                //openDropdown("sel");
            }
            else {
                $scope.addCIPTITRSETUPOper('upd');
                var btnName;
                btnName = '#getTITRSETUP';
                $timeout(function () {
                    $(btnName).trigger('click');

                }, 0);


                $scope.clearTBTITRSETUPOper();
            }
        }

        $scope.InsertTITRSETUP = function () {
            $scope.addCIPTITRSETUP('ins');
            var btnName;
            btnName = '#getTITRSETUP';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBTITRSETUP();
        }

        $scope.DeleteAllTITRSETUP = function () {
            $scope.addCIPTITRSETUP('del');
            var btnName;
            btnName = '#getTITRSETUP';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBTITRSETUP();
        }

        $scope.clearTBTITRSETUP = function () {

            document.getElementById('CircuitT').value = "";
            document.getElementById('CircuitDD').value = "Select Circuit";
            document.getElementById('ChemicalTypeT').value = "";
            document.getElementById('MaxT').value = "";
            document.getElementById('MinT').value = "";
            document.getElementById('TitrationsT').value = "";
            document.getElementById('UnitsT').value = "";
            document.getElementById('EnabledT').value = "";
            document.getElementById('chkEnabledT').checked = false;
            document.getElementById('TitrationKeyValue').value = "";
        }
        $scope.clearTBTITRSETUPOper = function () {

            document.getElementById('CircuitOperT').value = "";
            document.getElementById('CircuitOperDD').value = "Select Circuit";
            document.getElementById('ChemicalTypeOperT').value = "";
            document.getElementById('MaxOperT').value = "";
            document.getElementById('MinOperT').value = "";
            document.getElementById('TitrationOpersT').value = "";
            document.getElementById('UnitsOperT').value = "";
            document.getElementById('EnabledOperT').value = "";
            document.getElementById('chkEnabledOperT').checked = false;
            document.getElementById('TitrationOperKeyValue').value = "";




        }



        $scope.addCIPMANTEMP = function (actionValue) {

            var plantValue = document.getElementById('VATPlantOff').value
            var UnitDescValue = document.getElementById('UnitDesc').value;
            var UnitValueValue = document.getElementById('UnitValue').value;
            var TimestampValue = document.getElementById('timestampid').value;

            console.log('New Issue Added');
            CIPService.addCIPMANTEMP(plantValue, UnitDescValue, UnitValueValue, TimestampValue, actionValue).success(function (data) {
                $scope.clearTBMANTEMP();





            });
            //}
        }

        $scope.addAllMANTEMP = function () {
            $scope.addCIPMANTEMP('ins');
            var btnName;
            btnName = '#getMANTEMP';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBMANTEMP();
        }


        $scope.SaveAllMANTEMP = function () {
            $scope.addCIPMANTEMP('upd');
            var btnName;
            btnName = '#getMANTEMP';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBMANTEMP();
        }



        $scope.DeleteAllMANTEMP = function () {
            $scope.addCIPMANTEMP('del');
            var btnName;
            btnName = '#getMANTEMP';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBMANTEMP();
        }

        $scope.clearTBMANTEMP = function () {
            document.getElementById('UnitDesc').value = "";
            document.getElementById('UnitValue').value = "";
            document.getElementById('timestampid').value = "";

        }


        $scope.addCIPCHEMENTRY = function (actionValue) {

            var PlantValue = document.getElementById('VATPlantOff').value
            var ChemicalNameValue = document.getElementById('name').value;
            var ChemicalTypeKeyValue = document.getElementById('type').value;
            var ChemicalCostValue = document.getElementById('cost').value;
            var ChemicalCostEUKeyValue = document.getElementById('units').value;
            if (actionValue == 'ins') {
                var ChemicalKeyValue = "";
            }
            else {
                var ChemicalKeyValue = document.getElementById('ChemicalKey').value;
            }

            console.log('New Issue Added');
            CIPService.addCIPCHEMENTRY(PlantValue, ChemicalNameValue, ChemicalTypeKeyValue, ChemicalCostValue, ChemicalCostEUKeyValue, ChemicalKeyValue, actionValue).success(function (data) {
                $scope.clearTBCHEMENTRY();

            });
            //}
        }


        $scope.SaveAllCHEMENTRY = function () {
            $scope.addCIPCHEMENTRY('upd');
            var btnName;
            btnName = '#getCHEMENTRY';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBCHEMENTRY();
        }

        $scope.InsertCHEMENTRY = function () {
            $scope.addCIPCHEMENTRY('ins');
            var btnName;
            btnName = '#getCHEMENTRY';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBCHEMENTRY();
        }

        $scope.DeleteAllCHEMENTRY = function () {
            $scope.addCIPCHEMENTRY('del');
            var btnName;
            btnName = '#getCHEMENTRY';
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);


            $scope.clearTBCHEMENTRY();
        }

        $scope.clearTBCHEMENTRY = function () {

            document.getElementById('name').value = "";
            document.getElementById('type').value = "";
            document.getElementById('cost').value = "";
            document.getElementById('units').value = "";
            document.getElementById('ChemicalKey').value = "";

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

        $scope.assignT = function (TB, MSG) {
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



        $scope.maximize = function () {

            //var url = document.getElementById('Reports').src;
            //var tabOrWindow = window.location.href = url;
            //tabOrWindow.focus();
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



        $scope.SelectElement = function (id, valueToSelect) {
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

        $scope.function_action = function (url) {

             //#####Retrieve action#####//
             var Pname = 'uname';
             
             if (!url) url = window.location.href;
             Pname = Pname.replace(/[\[\]]/g, "\\$&");
             var regex = new RegExp("[?&]" + Pname + "(=([^&#]*)|&|#|$)"),
                 results = regex.exec(url);
             if (!results) return null;
             if (!results[2]) return '';
             var pid = decodeURIComponent(results[2].replace(/\+/g, " "))
             console.log(pid + '=uname');
             
             document.getElementById('LoggedIn').value = pid;
             $scope.openDIVMOD('mysidenavRightIntro', '');
            // $scope.listUserRole();
         }
        $scope.function_action();


      

        $scope.Expand1T9 = function (area, btn) {
            //console.log(data);
            if (document.getElementById(area).style.visibility == "collapse") {

                document.getElementById(area).style.visibility = "inherit";
                document.getElementById(area).style.height = '100%';
                document.getElementById(btn).style.backgroundColor = 'darkgreen';
                document.getElementById(btn).style.borderColor = 'darkgreen';

            }
            else {

                document.getElementById(area).style.visibility = "collapse";
                document.getElementById(area).style.height = '0';
                document.getElementById(btn).style.backgroundColor = 'black';
                document.getElementById(btn).style.borderColor = '#201e1e';
            }

            //if (document.getElementById('DashboardHolder').style.height == '0') {
            //    document.getElementById('DashboardHolder').style.height = '100%';
            //}
            //else {
            //    document.getElementById('DashboardHolder').style.height = '0';
            //}

         }

        $scope.login = function () {



            plant = document.getElementById('VATPlantOff').value;
            username = document.getElementById('username').value;
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
                document.getElementById('LoggedInGroup').value = usname;
                if (document.getElementById('LoggedInGroup').value == "Admin" ||document.getElementById('LoggedInGroup').value == "Oper" ) {
                    //document.getElementById("17").disabled = false;
                    //$scope.Expand1T9('AdminBHolder', '17');
                    window.open('#/CIP?plant=' + document.getElementById('VATPlantOff').value + '&uname=' + username, "_self");
                }
                else {
                    alert("Not Authorized!")
                    document.getElementById("17").disabled = true;
                }

            });


            

        }

        $scope.completePWDBox = function () {
            
                document.getElementById('password').value='**********';
            
        }

        //####Autopopulate screen function area#################//

        // Display of date
        //let today = new Date().toISOString().substr(0, 10);
        //document.querySelector("#timestampid").value = today;
        //document.querySelector("#startdate").value = today;
        var sttime = new Date().toLocaleString();
        sttime = sttime.replace(/,\s?/g, " ");
        document.getElementById('timestampid').value = sttime;

        //$("#TitrationOperEntry3").load("?control=msgs", {}, function () {
        //    $('#TitrationOpersT').focus();
        //}); 

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


function ChooseChemicalOper(data) {
    console.log(data);
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("ChemicalTypeOperT").value = dataRec;

    //document.getElementsByClassName('getTITRSETUPOper1').click();
    $("#getTITRSETUPOper1")[0].click();


    //var btnName;
    //btnName = '#getTITRSETUPOper1';
    //$timeout(function () {
    //    $(btnName).trigger('click');

    //}, 0);




}



function ChooseMTEMPUnits(data) {
    console.log(data);
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("UnitDesc").value = dataRec;
    $("#getMANTEMP1")[0].click();


}


//$scope.function_one = function (url) {
//    var name = 'uname';
//    //function function_two(name, url) {
//    if (!url) url = window.location.href;
//    name = name.replace(/[\[\]]/g, "\\$&");
//    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//        results = regex.exec(url);
//    if (!results) return null;
//    if (!results[2]) return '';
//    var uid = decodeURIComponent(results[2].replace(/\+/g, " "))
//    $scope.title = uid;
//    document.getElementById('LoggedIn').value = uid;
//}
//$scope.function_one();
