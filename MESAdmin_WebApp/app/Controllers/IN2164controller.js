(function () {
    angular
        .module('myApp')
        .controller('IN2164controller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'IN2164Service'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, IN2164Service) {

        $scope.gridOptions = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 33,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,
            onRegisterApi: registerGridApi,

            rowTemplate:
            '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',
            columnDefs: [
                { field: 'ProductionOrderNumber', displayName: 'ProductionOrder', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MaterialNumber', displayName: 'Material', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalQuantity', displayName: 'QTY', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'ScheduledStartTime', displayName: 'SchdStartTime',width: '12%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'ScheduledEndTime', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'StorageLocationReceipt', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'FatProtRatio', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MilkProtein', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MilkFat', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'RetFactor', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Moisture', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Salt', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Fat', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'pH', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SetPH', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'NumVats', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProductionOrder_Id', displayName: 'POID', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],
        };



        $scope.showGrid = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            //document.getElementById(elementId).style.display = 'block';
        }



        $scope.GridfromButton = function () {
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightImage').style.width = '0';
            document.getElementById('mysidenavRightGrid').style.width = '90.352%';



        }

        function registerGridApi(gridApi) {
            $scope.gridApi = gridApi;
        }

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');

            //console.log(options);
            IN2164Service.getIN2164PO().success(function (data) {
                if (data == null || data.IN2164POList == null || data.IN2164POList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.IN2164POList.length

                    );

                    var IN2164POList = data.IN2164POList;

                    $scope.gridOptions.data = IN2164POList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }

        $scope.loadGrid();
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
                    document.getElementById('ProductionOrder_Id').value = row.entity.ProductionOrder_Id;
                    $scope.splitVersionPO('ProductionOrderNumber', 'Version', row.entity.ProductionOrderNumber);

                    //document.getElementById('ProductionOrderNumber').value = row.entity.ProductionOrderNumber;
                    document.getElementById('MaterialNumber').value = row.entity.MaterialNumber;
                    document.getElementById('TotalQuantity').value = row.entity.TotalQuantity;
                    document.getElementById('ScheduledStartTime').value = row.entity.ScheduledStartTime;
                    document.getElementById('ScheduledEndTime').value = row.entity.ScheduledEndTime;
                    document.getElementById('StorageLocationReceipt').value = row.entity.StorageLocationReceipt;
                    document.getElementById('FatProtRatio').value = row.entity.FatProtRatio;
                    document.getElementById('MilkProtein').value = row.entity.MilkProtein;
                    document.getElementById('MilkFat').value = row.entity.MilkFat;
                    document.getElementById('RetFactor').value = row.entity.RetFactor;
                    document.getElementById('Moisture').value = row.entity.Moisture;
                    document.getElementById('Salt').value = row.entity.Salt;
                    document.getElementById('Fat').value = row.entity.Fat;
                    document.getElementById('pH').value = row.entity.pH;
                    document.getElementById('SetPH').value = row.entity.SetPH;
                    document.getElementById('NumVats').value = row.entity.NumVats;

                    ////##########################Updating BOM and SPEC DIVs
                    document.getElementById('ProductionOrderBOM').value = row.entity.ProductionOrderNumber;
                    document.getElementById('ProductionOrderSpec').value = row.entity.ProductionOrderNumber;


                    //     document.getElementById("POInput").style.display = "block";

                    $scope.refreshGridBOMItem();
                    $scope.refreshGridSpec();


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //$scope.Undo();
                        document.getElementById('ProductionOrder_Id').value = "";
                        document.getElementById('ProductionOrderNumber').value = "";
                        document.getElementById('Version').value = "";
                        document.getElementById('MaterialNumber').value = "";
                        document.getElementById('TotalQuantity').value = "";
                        document.getElementById('ScheduledStartTime').value = "";
                        document.getElementById('ScheduledEndTime').value = "";
                        document.getElementById('StorageLocationReceipt').value = "";
                        document.getElementById('FatProtRatio').value = "";
                        document.getElementById('MilkProtein').value = "";
                        document.getElementById('MilkFat').value = "";
                        document.getElementById('RetFactor').value = "";
                        document.getElementById('Moisture').value = "";
                        document.getElementById('Salt').value = "";
                        document.getElementById('Fat').value = "";
                        document.getElementById('pH').value = "";
                        document.getElementById('SetPH').value = "";
                        document.getElementById('NumVats').value = "";

                        // document.getElementById("POInput").style.display = "none";



                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }




        $scope.refreshGrid = function () {
            console.log('refresh grid');
            $scope.loading = true;
            $scope.gridOptions.data = [];

            $timeout(function () {
                $scope.loadGrid();
            }, 2000);
        }

        //Schedule Grid Section###################

        $scope.gridOptionsSchedule = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 33,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,




            rowTemplate:
            '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',

            //'<div ng-class="{\'green\':true, \'blue\':row.entity.count==1 }"><div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell></div></div>',

            columnDefs: [
                { field: 'ProductionOrderNumber', displayName: 'ProductionOrder', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MaterialNumber', displayName: 'Material', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalQuantity', displayName: 'QTY', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProductionOrder_Id', displayName: 'POID', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],
        };


        $scope.loadGridSchedule = function () {
            $scope.loading = true;
            console.log('loading grid');

            //console.log(options);
            IN2164Service.getIN2164PO().success(function (data) {
                if (data == null || data.IN2164POList == null || data.IN2164POList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsSchedule.paginationPageSizes.push(
                        data.IN2164POList.length

                    );

                    var IN2164POList = data.IN2164POList;

                    $scope.gridOptionsSchedule.data = IN2164POList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }

        $scope.loadGridSchedule();
        $scope.gridOptionsSchedule.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);

                if (row.isSelected) {
                    //##########################Updating Schedule DIV
                    document.getElementById('POSchd').value = row.entity.ProductionOrderNumber;
                    $scope.splitVersion('POSchd', 'POVersionSchd', row.entity.ProductionOrderNumber);
                    document.getElementById('MaterialSchd').value = row.entity.MaterialNumber;
                    //document.getElementById('ProductionOrderBOM').value= row.entity.ProductionOrderNumber;
                    //document.getElementById('ProductionOrderSpec').value= row.entity.ProductionOrderNumber;
                    document.getElementById('POSchd').value = row.entity.ProductionOrderNumber;
                    document.getElementById('PO_IDSchd').value = row.entity.ProductionOrder_Id;

                    document.getElementById('scheduledPO').style.backgroundColor = '#223A5E';


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        document.getElementById('POSchd').value = "";
                        document.getElementById('POVersionSchd').value = "";
                        document.getElementById('MaterialSchd').value = "";
                        document.getElementById('PO_IDSchd').value = "";
                        document.getElementById('scheduledPO').style.backgroundColor = '#444';
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });
        }

        $scope.refreshGridSchedule = function () {
            console.log('refresh grid Schedule');
            $scope.loading = true;
            $scope.gridOptionsSchedule.data = [];



            $timeout(function () {
                $scope.loadGridSchedule();
            }, 2000);
        }

        //End Schedule Grid Section###################


        $scope.refreshGridBOMItem = function () {
            console.log('refresh BOM grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsBOMItem.data = [];

            $timeout(function () {
                $scope.loadGridBOMItem();
            }, 2000);
        }


        $scope.refreshGridSpec = function () {
            console.log('refresh Spec grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsSpec.data = [];

            $timeout(function () {
                $scope.loadGridSpec();
            }, 2000);
        }

        $scope.refresGridPOAll = function () {
            $scope.refreshGrid();
            //$scope.refreshGridBOMItem();
            //$scope.refreshGridSpec();
        }



        $scope.addIN2164PO = function () {
            var VersionNum;
            if (document.getElementById('Version').value == null || document.getElementById('Version').value == "") {
                alert("Version Number is blank");
                return false;
                //var VersionNum = 0;
            }
            else {
                var VersionNum = document.getElementById('Version').value;
                console.log(VersionNum);
            }

            if (document.getElementById('ProductionOrderNumber').value == null || document.getElementById('ProductionOrderNumber').value == "") {
                alert("Document ProductionOrderNumber is blank");
                return false;
            }
            else {


                var ProductionOrder_IdValue = document.getElementById("ProductionOrder_Id").value
                var ProductionOrderNumberValue = document.getElementById("ProductionOrderNumber").value + '_' + VersionNum
                var MaterialNumberValue = document.getElementById("MaterialNumber").value
                var TotalQuantityValue = document.getElementById("TotalQuantity").value
                var ScheduledStartTimeValue = document.getElementById('ScheduledStartTime').value
                var ScheduledEndTimeValue = document.getElementById('ScheduledEndTime').value
                var StorageLocationReceiptValue = document.getElementById('StorageLocationReceipt').value
                var FatProtRatioValue = document.getElementById('FatProtRatio').value
                var MilkProteinValue = document.getElementById('MilkProtein').value
                var MilkFatValue = document.getElementById('MilkFat').value
                var RetFactorValue = document.getElementById('RetFactor').value
                var MoistureValue = document.getElementById('Moisture').value
                var SaltValue = document.getElementById('Salt').value
                var FatValue = document.getElementById('Fat').value
                var pHValue = document.getElementById('pH').value
                var SetPHValue = document.getElementById('SetPH').value
                var NumVatsValue = document.getElementById('NumVats').value



                //var d = new Date();
                //var CreateDateValue = '2018-06-13';

                console.log('New PO Added');
                console.log(document.getElementById("ProductionOrder_Id").value);
                console.log(document.getElementById("ProductionOrderNumber").value);
                console.log(document.getElementById('MaterialNumber').value);
                IN2164Service.addIN2164PO(ProductionOrder_IdValue,
                    ProductionOrderNumberValue,
                    MaterialNumberValue,
                    TotalQuantityValue,
                    ScheduledStartTimeValue,
                    ScheduledEndTimeValue,
                    StorageLocationReceiptValue,
                    FatProtRatioValue,
                    MilkProteinValue,
                    MilkFatValue,
                    RetFactorValue,
                    MoistureValue,
                    SaltValue,
                    FatValue,
                    pHValue,
                    SetPHValue,
                    NumVatsValue).success(function (data) {


                        $scope.refreshGrid();




                    });
            }
        }



        $scope.clearTB = function () {

            document.getElementById('ProductionOrder_Id').value = "";
            document.getElementById('ProductionOrderNumber').value = "";
            document.getElementById('Version').value = "";
            document.getElementById('MaterialNumber').value = "";
            document.getElementById('TotalQuantity').value = "";
            document.getElementById('ScheduledStartTime').value = "";
            document.getElementById('ScheduledEndTime').value = "";
            document.getElementById('StorageLocationReceipt').value = "";
            document.getElementById('FatProtRatio').value = "";
            document.getElementById('MilkProtein').value = "";
            document.getElementById('MilkFat').value = "";
            document.getElementById('RetFactor').value = "";
            document.getElementById('Moisture').value = "";
            document.getElementById('Salt').value = "";
            document.getElementById('Fat').value = "";
            document.getElementById('pH').value = "";
            document.getElementById('SetPH').value = "";
            document.getElementById('NumVats').value = "";





        }

        $scope.clearTBBOM = function () {

            document.getElementById('BOMPosition').value = "";
            document.getElementById('ComponentMaterial').value = "";
            document.getElementById('ComponentQuantity').value = "";
            document.getElementById('OperationAssignment').value = "";
            document.getElementById('StorageLocation').value = "";
            document.getElementById('StorageLocationDesc').value = "";
            document.getElementById('RoutingOperationNumber').value = "";
            document.getElementById('OperationWorkCenter').value = "";
            document.getElementById('OperationShortText').value = "";
            document.getElementById('CoProductFlag').value = "";
            document.getElementById('NumVessels').value = "";
            document.getElementById('ProductionOrder_IdBOM').value = "";


        }
        $scope.clearTBSpec = function () {

            document.getElementById('Name').value = "";
            document.getElementById('Value').value = "";
            document.getElementById('Lower').value = "";
            document.getElementById('Upper').value = "";
            document.getElementById('DOPGroup').value = "";
            document.getElementById('Material').value = "";
            document.getElementById('POIDSpec_ID').value = "";
            document.getElementById('Spec_ID').value = "";

        }

        $scope.clearTBInsp = function () {

            document.getElementById('SpecificationName').value = '';
            document.getElementById('SpecificationVersion').value = '';
            document.getElementById('SpecificationDesc').value = '';
            document.getElementById('ProductionOrder').value = '';
            document.getElementById('InspectionLot').value = '';
            document.getElementById('Specification_IDInsp').value = '';

        }


        $scope.clearAttribute = function () {

            document.getElementById('AttributeName').value = "";
            document.getElementById('AttributeTitle').value = "";
            document.getElementById('AttributeGroup').value = "";
            document.getElementById('AttributeRank').value = "";
            document.getElementById('EntryLabelGroup').value = "";
            document.getElementById('AnalysisName').value = "";
            document.getElementById('TestRequired').value = "";
            document.getElementById('LimitsUOM').value = "";
            document.getElementById('USL').value = "";
            document.getElementById('Target').value = "";
            document.getElementById('LSL').value = "";
            document.getElementById('Spare1').value = "";
            document.getElementById('Spare2').value = "";
            document.getElementById('Spare3').value = "";
            document.getElementById('Spare4').value = "";
            document.getElementById('SaveReasonCodes').value = "";
            document.getElementById('Operation').value = "";
            document.getElementById('WorkCenter').value = "";
            document.getElementById('DisplayDigits').value = "";
            document.getElementById('ConfirmationNumber').value = "";
            document.getElementById('RecordingType').value = "";
            document.getElementById('AutoSave').value = "";
            document.getElementById('Specification_IDAttribute').value = "";


        }

        $scope.clearAttributeGroup = function () {

            document.getElementById('AttributeGroupName').value = "";
            document.getElementById('AttributeGroupDescription').value = "";
            document.getElementById('AutoGenerateSampleID').value = "";
            document.getElementById('Specification_IdAG').value = "";



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
                $scope.addIN2164PO();
            }

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

        $('.editable').each(function () {
            this.contentEditable = true;
        });



        //$('#NumSteps').on('input', function () {
        //    var j = $(this).val();
        //    var i = 1;
        //    while (i <= j) {
        //    $('#' + i).show();

        //    i++;
        //    }
        //});


        $scope.Steps = function () {
            var j = $('#NumSteps').val();
            var i = 1;
            while (i <= j) {
                $('#' + i).show();

                i++;
            }

        }




        //######################################Grid PO Dropdown########## for Inspection Lot page #############################




        $scope.gridOptionsDropDown = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 33,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,
            // onRegisterApi: registerGridApi,

            rowTemplate:
            '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',
            columnDefs: [
                { field: 'ProductionOrderNumber', displayName: 'ProductionOrder', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MaterialNumber', displayName: 'Material', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalQuantity', displayName: 'QTY', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'StorageLocationReceipt', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'FatProtRatio', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MilkProtein', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MilkFat', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'RetFactor', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Moisture', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Salt', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Fat', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'pH', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SetPH', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'NumVats', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProductionOrder_Id', displayName: 'POID', width: '15%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],
        };


        function registerGridApi(gridApi) {
            $scope.gridApi = gridApi;
        }

        $scope.loadGridDropDown = function () {
            $scope.loading = true;
            console.log('loading grid DropDown');

            //console.log(options);
            IN2164Service.getIN2164PO().success(function (data) {
                if (data == null || data.IN2164POList == null || data.IN2164POList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsDropDown.paginationPageSizes.push(
                        data.IN2164POList.length

                    );

                    var IN2164POList = data.IN2164POList;

                    $scope.gridOptionsDropDown.data = IN2164POList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }

        $scope.loadGridDropDown();
        $scope.gridOptionsDropDown.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);
                if (row.isSelected) {
                    console.log('push');

                    ////##########################Updating INSP and SPEC DIVs
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrderNumber;
                    document.getElementById('SpecificationName').value = row.entity.MaterialNumber;
                    document.getElementById('mysidenavRightPOPopup').style.width = '0';
                    //document.getElementById('mysidenavRightPOPopup').style.display = 'none';
                    $scope.openDIV('mysidenavRightIN2165');

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        document.getElementById('ProductionOrder').value = "";
                        document.getElementById('SpecificationName').value = "";

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }




        $scope.refreshGridDropDown = function () {
            console.log('refresh grid DropDown');
            $scope.loading = true;
            $scope.gridOptionsDropDown.data = [];

            $timeout(function () {
                $scope.loadGridDropDown();
            }, 2000);
        }




        //######################################End Grid PO Dropdown ########## for InspectionLot Page






        //############################## GridOptionBOMItem #########################
        $scope.gridOptionsBOMItem = {
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
                { field: 'ProductionOrderNumber', displayName: 'PO', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'BOMPosition', displayName: 'BOMPos', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ComponentMaterial', displayName: 'Mat', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ComponentQuantity', displayName: 'QTY', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'OperationAssignment', displayName: 'Op', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'StorageLocation', displayName: 'Stor', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'StorageLocationDesc', displayName: 'StDesc', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'RoutingOperationNumber', displayName: 'Routing', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'OperationWorkCenter', displayName: 'WC', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'OperationShortText', displayName: 'OpTXT', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'CoProductFlag', displayName: 'COProdFlag', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'NumVessels', displayName: '#Vessels', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'ProductionOrder_Id', displayName: 'POID', width: '4%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

            ],
        };



        $scope.loadGridBOMItem = function () {
            $scope.loading = true;
            console.log('loading grid');
            console.log('loading grid');
            poid = document.getElementById('ProductionOrder_Id').value;

            //console.log(options);
            IN2164Service.getIN2164BOMItem(poid).success(function (data) {
                if (data == null || data.IN2164BOMItemList == null || data.IN2164BOMItemList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsBOMItem.paginationPageSizes.push(
                        data.IN2164BOMItemList.length

                    );

                    var IN2164BOMItemList = data.IN2164BOMItemList;

                    $scope.gridOptionsBOMItem.data = IN2164BOMItemList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }





        $scope.gridOptionsBOMItem.onRegisterApi = function (gridApi) {
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
                    document.getElementById('BOMPosition').value = row.entity.BOMPosition;
                    document.getElementById('ComponentMaterial').value = row.entity.ComponentMaterial;
                    document.getElementById('ComponentQuantity').value = row.entity.ComponentQuantity;
                    document.getElementById('OperationAssignment').value = row.entity.OperationAssignment;
                    document.getElementById('StorageLocation').value = row.entity.StorageLocation;
                    document.getElementById('StorageLocationDesc').value = row.entity.StorageLocationDesc;
                    // document.getElementById('StorageLocationDesc').value= row.entity.StorageLocationDesc;
                    document.getElementById('RoutingOperationNumber').value = row.entity.RoutingOperationNumber;
                    document.getElementById('OperationWorkCenter').value = row.entity.OperationWorkCenter;
                    document.getElementById('OperationShortText').value = row.entity.OperationShortText;
                    document.getElementById('CoProductFlag').value = row.entity.CoProductFlag;
                    document.getElementById('NumVessels').value = row.entity.NumVessels;
                    document.getElementById('ProductionOrder_IdBOM').value = row.entity.ProductionOrder_Id;





                    // document.getElementById("BOMPosInput").style.display = "block";


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //$scope.Undo();
                        document.getElementById('BOMPosition').value = "";
                        document.getElementById('ComponentMaterial').value = "";
                        document.getElementById('ComponentQuantity').value = "";
                        document.getElementById('OperationAssignment').value = "";
                        document.getElementById('StorageLocation').value = "";
                        document.getElementById('StorageLocationDesc').value = "";
                        document.getElementById('RoutingOperationNumber').value = "";
                        document.getElementById('OperationWorkCenter').value = "";
                        document.getElementById('OperationShortText').value = "";
                        document.getElementById('CoProductFlag').value = "";
                        document.getElementById('NumVessels').value = "";
                        document.getElementById('ProductionOrder_IdBOM').value = "";

                        // document.getElementById("BOMPosInput").style.display = "none";



                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }



        $scope.addIN2164BOMItem = function () {

            if (document.getElementById('BOMPosition').value == null || document.getElementById('BOMPosition').value == "") {
                alert("Document BOMPosition is blank");
                return false;
            }
            else {

                //var BOMPositionValue = document.getElementById("BOMPosition").value
                try {
                    var BOMPositionValue = document.getElementById("BOMPosition").options[document.getElementById("BOMPosition").selectedIndex].value;
                }
                catch (err) {
                    var BOMPositionValue ='';
                }
                var ComponentMaterialValue = document.getElementById("ComponentMaterial").value
                var ComponentQuantityValue = document.getElementById("ComponentQuantity").value
                // var OperationAssignmentValue = document.getElementById("OperationAssignment").value
                var oav = document.getElementById("OperationAssignment");
                console.log(oav);
                try {
                    var OperationAssignmentValue = oav.options[oav.selectedIndex].value;
                }
                catch (err) {
                    var OperationAssignmentValue = '';
                }
                
                // var StorageLocationValue = document.getElementById("StorageLocation").value
                var sl = document.getElementById("StorageLocation");
                try {
                    var StorageLocationValue = sl.options[sl.selectedIndex].value;
                }
                catch (err) {
                    var StorageLocationValue = '';
                }
                //var StorageLocationDescValue = document.getElementById("StorageLocationDesc").value
                try {
                    var StorageLocationDescValue = document.getElementById("StorageLocationDesc").options[document.getElementById("StorageLocationDesc").selectedIndex].value;
                }
                catch (err) {
                    var StorageLocationDescValue = '';
                }
                // var RoutingOperationNumberValue = document.getElementById("RoutingOperationNumber").value
                var ro = document.getElementById("RoutingOperationNumber");
                try {
                    var RoutingOperationNumberValue = ro.options[ro.selectedIndex].value;
                }
                catch (err) {
                    var RoutingOperationNumberValue = '';
                }
                //var OperationWorkCenterValue = document.getElementById("OperationWorkCenter").value
                var wc = document.getElementById("OperationWorkCenter");
                var OperationWorkCenterValue = wc.options[wc.selectedIndex].value;
                var OperationShortTextValue = document.getElementById("OperationShortText").value
                var CoProductFlagValue = document.getElementById("CoProductFlag").value
                var NumVesselsValue = document.getElementById("NumVessels").value
                var ProductionOrder_IdValue = document.getElementById("ProductionOrder_IdBOM").value



                //var d = new Date();
                //var CreateDateValue = '2018-06-13';

                console.log('New BOMItem Added/Updated');
                IN2164Service.addIN2164BOMItem(BOMPositionValue,
                    ComponentMaterialValue,
                    ComponentQuantityValue,
                    OperationAssignmentValue,
                    StorageLocationValue,
                    StorageLocationDescValue,
                    RoutingOperationNumberValue,
                    OperationWorkCenterValue,
                    OperationShortTextValue,
                    CoProductFlagValue,
                    NumVesselsValue,
                    ProductionOrder_IdValue).success(function (data) {
                        $scope.refreshGridBOMItem();






                    });
            }
        }



        $scope.delIN2164BOMItem = function (ProductionOrder_IdValue) {

            if (document.getElementById('BOMPosition').value == null || document.getElementById('BOMPosition').value == "") {
                alert("Document BOMPosition is blank");
                return false;
            }
            else {

                //var BOMPositionValue = document.getElementById("BOMPosition").value
                try {
                    var BOMPositionValue = document.getElementById("BOMPosition").options[document.getElementById("BOMPosition").selectedIndex].value;
                }
                catch (err) {
                    var BOMPositionValue = '';
                }
                var ComponentMaterialValue = document.getElementById("ComponentMaterial").value
                var ComponentQuantityValue = document.getElementById("ComponentQuantity").value
                // var OperationAssignmentValue = document.getElementById("OperationAssignment").value
                var oav = document.getElementById("OperationAssignment");
                console.log(oav);
                try {
                    var OperationAssignmentValue = oav.options[oav.selectedIndex].value;
                }
                catch (err) {
                    var OperationAssignmentValue = '';
                }

                // var StorageLocationValue = document.getElementById("StorageLocation").value
                var sl = document.getElementById("StorageLocation");
                try {
                    var StorageLocationValue = sl.options[sl.selectedIndex].value;
                }
                catch (err) {
                    var StorageLocationValue = '';
                }
                //var StorageLocationDescValue = document.getElementById("StorageLocationDesc").value
                try {
                    var StorageLocationDescValue = document.getElementById("StorageLocationDesc").options[document.getElementById("StorageLocationDesc").selectedIndex].value;
                }
                catch (err) {
                    var StorageLocationDescValue = '';
                }
                // var RoutingOperationNumberValue = document.getElementById("RoutingOperationNumber").value
                var ro = document.getElementById("RoutingOperationNumber");
                try {
                    var RoutingOperationNumberValue = ro.options[ro.selectedIndex].value;
                }
                catch (err) {
                    var RoutingOperationNumberValue = '';
                }
                //var OperationWorkCenterValue = document.getElementById("OperationWorkCenter").value
                var wc = document.getElementById("OperationWorkCenter");
                var OperationWorkCenterValue = wc.options[wc.selectedIndex].value;
                var OperationShortTextValue = document.getElementById("OperationShortText").value
                var CoProductFlagValue = document.getElementById("CoProductFlag").value
                var NumVesselsValue = document.getElementById("NumVessels").value
                //var ProductionOrder_IdValue = document.getElementById("ProductionOrder_IdBOM").value



                //var d = new Date();
                //var CreateDateValue = '2018-06-13';

                console.log('New BOMItem Added/Updated');
                IN2164Service.addIN2164BOMItem(BOMPositionValue,
                    ComponentMaterialValue,
                    ComponentQuantityValue,
                    OperationAssignmentValue,
                    StorageLocationValue,
                    StorageLocationDescValue,
                    RoutingOperationNumberValue,
                    OperationWorkCenterValue,
                    OperationShortTextValue,
                    CoProductFlagValue,
                    NumVesselsValue,
                    ProductionOrder_IdValue).success(function (data) {
                        $scope.refreshGridBOMItem();






                    });
            }
        }

        //#############################end Grid OptionBOMItem ######################

        //############################## GridOptionSpec #########################
        $scope.gridOptionsSpec = {
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
                { field: 'ProductionOrderNumber', displayName: 'PO', width: '20%', enableCellEdit: false },
                { field: 'Name', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Value', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Lower', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Upper', width: '10%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DOPGroup', displayName: 'DOPGr', width: '12%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Material', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Specs_Id', displayName: 'id',width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },


            ],
        };





        $scope.loadGridSpec = function () {
            $scope.loading = true;
            console.log('loading grid');
            poid = document.getElementById('ProductionOrder_Id').value;
            //console.log(options);
            IN2164Service.getIN2164Spec(poid).success(function (data) {
                if (data == null || data.IN2164SpecList == null || data.IN2164SpecList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsSpec.paginationPageSizes.push(
                        data.IN2164SpecList.length

                    );

                    var IN2164SpecList = data.IN2164SpecList;

                    $scope.gridOptionsSpec.data = IN2164SpecList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }

        // $scope.loadGrid();
        $scope.gridOptionsSpec.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            // console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {
                    console.log('push');
                    document.getElementById('Name').value = row.entity.Name;
                    document.getElementById('Value').value = row.entity.Value;
                    document.getElementById('Lower').value = row.entity.Lower;
                    document.getElementById('Upper').value = row.entity.Upper;
                    document.getElementById('DOPGroup').value = row.entity.DOPGroup;
                    document.getElementById('Material').value = row.entity.Material;
                    document.getElementById('Spec_ID').value = row.entity.Specs_ID;
                    document.getElementById('POIDSpec_ID').value = row.entity.POIDSpec_ID;

                    // document.getElementById("SpecInput").style.display = "block";

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //$scope.Undo();
                        document.getElementById('Name').value = "";
                        document.getElementById('Value').value = "";
                        document.getElementById('Lower').value = "";
                        document.getElementById('Upper').value = "";
                        document.getElementById('DOPGroup').value = "";
                        document.getElementById('Material').value = "";

                        // document.getElementById("SpecInput").style.display = "none";

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }

        $scope.addIN2164Spec = function () {

            if (document.getElementById('Name').value == null || document.getElementById('Name').value == "") {
                alert("Specification Name is blank");
                return false;
            }
            else {

                var NameValue = document.getElementById('Name').value
                var ValueValue = document.getElementById('Value').value
                var LowerValue = document.getElementById('Lower').value
                var UpperValue = document.getElementById('Upper').value
                var DOPGroupValue = document.getElementById('DOPGroup').value
                var MaterialValue = document.getElementById('Material').value
                var Spec_IDValue = document.getElementById('Spec_ID').value
               

                if (document.getElementById('POIDSpec_ID').value == '') {
                    POIDSpec_IDValue = document.getElementById('ProductionOrder_Id').value;
                }
                else {

                    var POIDSpec_IDValue = document.getElementById('POIDSpec_ID').value;
                }

                //var d = new Date();
                //var CreateDateValue = '2018-06-13';

                console.log('New Spec Added/Updated');
                IN2164Service.addIN2164Spec(NameValue,
                    ValueValue,
                    LowerValue,
                    UpperValue,
                    DOPGroupValue,
                    MaterialValue,
                    Spec_IDValue,
                    POIDSpec_IDValue
                ).success(function (data) {
                    $scope.refreshGridSpec();

                });
            }
        }


        //############################# End Grid OptionSpec ######################


        //############################## GridOptionInspectionLot #########################
        $scope.gridOptionsInsp = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 30, 60],
            paginationPageSize: 20,
            //enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
            rowHeight: 33,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,
            columnDefs: [


                { field: 'InspectionLot', displayName: 'Insp', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SpecificationName', displayName: 'SP', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SpecificationDesc', displayName: 'SPDesc', width: '20%', wordWrap: true, enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProductionOrder', displayName: 'PO', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Specification_Id', displayName: 'ID', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },


            ],
        };



        $scope.loadGridInsp = function () {
            $scope.loading = true;
            console.log('loading grid');
            console.log('loading grid');
            //spid = document.getElementById('ProductionOrder_Id').value;

            //console.log(options);
            IN2164Service.getIN2165Insp().success(function (data) {
                if (data == null || data.IN2165InspList == null || data.IN2165InspList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsInsp.paginationPageSizes.push(
                        data.IN2165InspList.length

                    );

                    var IN2165InspList = data.IN2165InspList;

                    $scope.gridOptionsInsp.data = IN2165InspList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }
        $scope.loadGridInsp();

        $scope.gridOptionsInsp.onRegisterApi = function (gridApi) {
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
                    document.getElementById('SpecificationName').value = row.entity.SpecificationName;
                    $scope.splitVersion('InspectionLot', 'SpecificationVersion', row.entity.InspectionLot);
                    document.getElementById('SpecificationDesc').value = row.entity.SpecificationDesc;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    //document.getElementById('InspectionLot').value= row.entity.InspectionLot;
                    document.getElementById('Specification_IDInsp').value = row.entity.Specification_Id;
                    document.getElementById('InspectionLotAttr').value = row.entity.InspectionLot;
                    document.getElementById('InspectionLotAttrGr').value = row.entity.InspectionLot;

                    //############### Populate oher grids ##########################//
                    //$scope.refreshGridAttribute();
                    //$scope.refreshGridAttributeGroup();
                    jQuery('#refattrib').click();
                    jQuery('#refattribGR').click();
                    jQuery('#refattribPopup').click();
                    // $scope.populateDD();
                    //############## end  Populate oher grids ##########################//


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //$scope.Undo();
                        document.getElementById('SpecificationName').value = "";
                        document.getElementById('SpecificationVersion').value = "";
                        document.getElementById('SpecificationDesc').value = "";
                        document.getElementById('ProductionOrder').value = "";
                        document.getElementById('InspectionLot').value = "";
                        document.getElementById('Specification_IDInsp').value = "";


                        //document.getElementById("InspInput").style.display = "none";



                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }

        $scope.addIN2165Insp = function () {

            if (document.getElementById('SpecificationName').value == null || document.getElementById('SpecificationName').value == "") {
                alert("Document SpecificationName is blank");
                return false;
            }
            else {

                var SpecificationNameValue = document.getElementById("SpecificationName").value
                var SpecificationDescValue = document.getElementById("SpecificationDesc").value
                var ProductionOrderValue = document.getElementById("ProductionOrder").value
                var InspectionLotValue = document.getElementById("InspectionLot").value + '_' + document.getElementById("SpecificationVersion").value
                var Specification_IDValue = document.getElementById("Specification_IDInsp").value




                //var d = new Date();
                //var CreateDateValue = '2018-06-13';

                console.log('New BOMItem Added/Updated');


                IN2164Service.addIN2165Insp(
                    Specification_IDValue,
                    SpecificationNameValue,
                    SpecificationDescValue,
                    ProductionOrderValue,
                    InspectionLotValue




                ).success(function (data) {
                    $scope.refreshGridInsp();

                });
            }
        }





        $scope.refreshGridInsp = function () {
            console.log('refresh grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsInsp.data = [];

            $timeout(function () {
                $scope.loadGridInsp();
            }, 2000);
        }



        //#############################end Grid Option 2165 Inspection Lot ######################
        //############################# Grid Option InspectionLot for SChedule page############
        $scope.gridOptionsInspSchedule = {
            showGridFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 30, 60],
            paginationPageSize: 20,
            //enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
            rowHeight: 33,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,
            columnDefs: [


                { field: 'InspectionLot', displayName: 'Insp', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SpecificationName', displayName: 'SP', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SpecificationDesc', displayName: 'SPDesc', width: '20%', wordWrap: true, enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProductionOrder', displayName: 'PO', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Specification_Id', displayName: 'ID', width: '20%', enableCellEdit: false, wordWrap: true, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },


            ],
        };



        $scope.loadGridInspSchedule = function () {
            $scope.loading = true;
            console.log('loading grid');
            console.log('loading grid');
            //spid = document.getElementById('ProductionOrder_Id').value;

            //console.log(options);
            IN2164Service.getIN2165Insp().success(function (data) {
                if (data == null || data.IN2165InspList == null || data.IN2165InspList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsInspSchedule.paginationPageSizes.push(
                        data.IN2165InspList.length

                    );

                    var IN2165InspList = data.IN2165InspList;

                    $scope.gridOptionsInspSchedule.data = IN2165InspList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }
        $scope.loadGridInspSchedule();

        $scope.gridOptionsInspSchedule.onRegisterApi = function (gridApi) {
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

                    //#####################INSP SCHEDULE DIV###################
                    $scope.splitVersion('INSPSchd', 'INSPVersionSchd', row.entity.InspectionLot);
                    document.getElementById('Specification_IDSchd').value = row.entity.Specification_Id;
                    document.getElementById('InspMatSchd').value = row.entity.SpecificationName;
                    document.getElementById('scheduledINSP').style.backgroundColor = '#223A5E';

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }


                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //$scope.Undo();
                        document.getElementById('INSPSchd').value = "";
                        document.getElementById('INSPVersionSchd').value = "";
                        document.getElementById('Specification_IDSchd').value = "";
                        document.getElementById('InspMatSchd').value = "";
                        document.getElementById('scheduledINSP').style.backgroundColor = '#345c33';

                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }


        $scope.refreshGridInspSchedule = function () {
            console.log('refresh grid');

            $scope.loading = true;

            $scope.gridOptionsInspSchedule.data = [];

            $timeout(function () {
                $scope.loadGridInspSchedule();
            }, 2000);
        }



        //############################# End Grid Option InspectionLot for SChedule page############
        //############################## GridOptionAttribute #########################
        $scope.gridOptionsAttribute = {
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
                { field: 'InspectionLot', displayName: 'InspLot', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AttributeName', displayName: 'Attribute', width: '8%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                // { field: 'AttributeTitle', displayName: 'Title', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AttributeGroup', displayName: 'Grp', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AttributeRank', displayName: 'Rank', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EntryLabelGroup', displayName: 'ELGr', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AnalysisName', displayName: 'Analysis', width: '8%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TestRequired', displayName: 'TestReq', width: '8%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'LimitsUOM', displayName: 'LmtUOM', width: '8%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'USL', displayName: 'USL', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Target', displayName: 'Targ', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'LSL', displayName: 'LSL', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Spare1', displayName: 'SP1', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Spare2', displayName: 'SP2', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Spare3', displayName: 'SP3', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Spare4', displayName: 'SP4', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SaveReasonCodes', displayName: 'RsCode', width: '8%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Operation', displayName: 'Operation', width: '9%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'OperationWorkCenter', displayName: 'WrkCtr', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DisplayDigits', displayName: 'DispDigit', width: '9%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ConfirmationNumber', displayName: 'Conf#', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'RecordingType', displayName: 'RecType', width: '8%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AutoSave', displayName: 'AutoSave', width: '9%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Specification_Id', displayName: 'SPID', width: '7%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },



            ],
        };



        $scope.loadGridAttribute = function () {
            $scope.loading = true;
            console.log('loading Attribute grid');

            spid = document.getElementById("Specification_IDInsp").value;
            console.log('loading Attribute grid spid=' + spid);
            //console.log(options);
            IN2164Service.getIN2165Attribute(spid).success(function (data) {
                if (data == null || data.IN2165AttributeList == null || data.IN2165AttributeList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsAttribute.paginationPageSizes.push(
                        data.IN2165AttributeList.length

                    );

                    var IN2165AttributeList = data.IN2165AttributeList;

                    $scope.gridOptionsAttribute.data = IN2165AttributeList;

                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })

        }


        $scope.gridOptionsAttribute.onRegisterApi = function (gridApi) {
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
                    //document.getElementById('InspectionLot').value= row.entity.InspectionLot;
                    document.getElementById('AttributeName').value = row.entity.AttributeName;
                    document.getElementById('AttributeTitle').value = row.entity.AttributeTitle;
                    document.getElementById('AttributeGroup').value = row.entity.AttributeGroup;
                    document.getElementById('AttributeRank').value = row.entity.AttributeRank;
                    document.getElementById('EntryLabelGroup').value = row.entity.EntryLabelGroup;
                    document.getElementById('AnalysisName').value = row.entity.AnalysisName;
                    document.getElementById('TestRequired').value = row.entity.TestRequired;
                    document.getElementById('LimitsUOM').value = row.entity.LimitsUOM;
                    document.getElementById('USL').value = row.entity.USL;
                    document.getElementById('Target').value = row.entity.Target;
                    document.getElementById('LSL').value = row.entity.LSL;
                    document.getElementById('Spare1').value = row.entity.Spare1;
                    document.getElementById('Spare2').value = row.entity.Spare2;
                    document.getElementById('Spare3').value = row.entity.Spare3;
                    document.getElementById('Spare4').value = row.entity.Spare4;
                    document.getElementById('SaveReasonCodes').value = row.entity.SaveReasonCodes;
                    document.getElementById('Operation').value = row.entity.Operation;
                    document.getElementById('WorkCenter').value = row.entity.OperationWorkCenter;
                    document.getElementById('DisplayDigits').value = row.entity.DisplayDigits;
                    document.getElementById('ConfirmationNumber').value = row.entity.ConfirmationNumber;
                    document.getElementById('RecordingType').value = row.entity.RecordingType;
                    document.getElementById('AutoSave').value = row.entity.AutoSave;
                    document.getElementById('Specification_IDAttribute').value = row.entity.Specification_Id;
                    // document.getElementById("BOMPosInput").style.display = "block";


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        //$scope.Undo();
                        document.getElementById('AttributeName').value = "";
                        document.getElementById('AttributeTitle').value = "";
                        document.getElementById('AttributeGroup').value = "";
                        document.getElementById('AttributeRank').value = "";
                        document.getElementById('EntryLabelGroup').value = "";
                        document.getElementById('AnalysisName').value = "";
                        document.getElementById('TestRequired').value = "";
                        document.getElementById('LimitsUOM').value = "";
                        document.getElementById('USL').value = "";
                        document.getElementById('Target').value = "";
                        document.getElementById('LSL').value = "";
                        document.getElementById('Spare1').value = "";
                        document.getElementById('Spare2').value = "";
                        document.getElementById('Spare3').value = "";
                        document.getElementById('Spare4').value = "";
                        document.getElementById('SaveReasonCodes').value = "";
                        document.getElementById('Operation').value = "";
                        document.getElementById('WorkCenter').value = "";
                        document.getElementById('DisplayDigits').value = "";
                        document.getElementById('ConfirmationNumber').value = "";
                        document.getElementById('RecordingType').value = "";
                        document.getElementById('AutoSave').value = "";
                        document.getElementById('Specification_IDAttribute').value = "";



                        //document.getElementById("AttributeInput").style.display = "none";



                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }

        $scope.addIN2165Attribute = function () {

            if (document.getElementById('AttributeName').value == null || document.getElementById('AttributeName').value == "") {
                alert("Document AttributeName is blank");
                return false;
            }
            else {

                var AttributeNameValue = document.getElementById('AttributeName').value
                var AttributeTitleValue = document.getElementById('AttributeTitle').value
                var AttributeGroupValue = document.getElementById('AttributeGroup').value
                var AttributeRankValue = document.getElementById('AttributeRank').value
                // var EntryLabelGroupValue = document.getElementById('EntryLabelGroup').value
                try {
                    var EntryLabelGroupValue = document.getElementById("EntryLabelGroup").options[document.getElementById("EntryLabelGroup").selectedIndex].value;
                }
                catch (err) {
                    var EntryLabelGroupValue = '';
                }
                var AnalysisNameValue = document.getElementById('AnalysisName').value
                var TestRequiredValue = document.getElementById('TestRequired').value
                //var LimitsUOMValue = document.getElementById('LimitsUOM').value
                try {
                    var LimitsUOMValue = document.getElementById("LimitsUOM").options[document.getElementById("LimitsUOM").selectedIndex].value;
                }
                catch (err) {
                    var LimitsUOMValue = '';
                }
                var USLValue = document.getElementById('USL').value;
                var TargetValue = document.getElementById('Target').value;
                var LSLValue = document.getElementById('LSL').value;
                var Spare1Value = document.getElementById('Spare1').value;
                var Spare2Value = document.getElementById('Spare2').value;
                var Spare3Value = document.getElementById('Spare3').value;
                var Spare4Value = document.getElementById('Spare4').value;
                var SaveReasonCodesValue = document.getElementById('SaveReasonCodes').value;
                try {
                    var OperationValue = document.getElementById('Operation').options[document.getElementById("Operation").selectedIndex].value;
                }
                catch(err){
                    var OperationValue = '';
                }

                try {
                    var OperationWorkCenterValue = document.getElementById('WorkCenter').options[document.getElementById("WorkCenter").selectedIndex].value;
                }
                catch (err) {
                    var OperationWorkCenterValue = '';
                }
                var DisplayDigitsValue = document.getElementById('DisplayDigits').value
                var ConfirmationNumberValue = document.getElementById('ConfirmationNumber').value
                var RecordingTypeValue = document.getElementById('RecordingType').value
                var AutoSaveValue = document.getElementById('AutoSave').value
                var Specification_IDValue = document.getElementById('Specification_IDAttribute').value





                console.log('New Attribute Added/Updated');
                IN2164Service.addIN2165Attribute(
                    AttributeNameValue,
                    AttributeTitleValue,
                    AttributeGroupValue,
                    AttributeRankValue,
                    EntryLabelGroupValue,
                    AnalysisNameValue,
                    TestRequiredValue,
                    LimitsUOMValue,
                    USLValue,
                    TargetValue,
                    LSLValue,
                    Spare1Value,
                    Spare2Value,
                    Spare3Value,
                    Spare4Value,
                    SaveReasonCodesValue,
                    OperationValue,
                    OperationWorkCenterValue,
                    DisplayDigitsValue,
                    ConfirmationNumberValue,
                    RecordingTypeValue,
                    AutoSaveValue,
                    Specification_IDValue



                ).success(function (data) {
                    $scope.refreshGridAttribute();
                });
            }
        }


        $scope.refreshGridAttribute = function () {
            console.log('refresh Attribute grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsAttribute.data = [];

            $timeout(function () {
                $scope.loadGridAttribute();
            }, 2000);
            //jQuery('#refattrib').click();
        }




        //#############################end Grid Option 2165 Attribute######################


        //############################## GridOptionAttributegROUP #########################
        $scope.gridOptionsAttributeGroup = {
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
                { field: 'InspectionLot', displayName: 'InspLot', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AttributeGroupName', displayName: 'AttributeGroupName', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                // { field: 'AttributeGroupDescription', displayName: 'Desc', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AutoGenerateSampleID', displayName: 'AutoGenerateSampleID', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Specification_Id', displayName: 'SPID', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },


            ],
        };



        $scope.loadGridAttributeGroup = function () {
            $scope.loading = true;
            console.log('loading grid');

            spid = document.getElementById('Specification_IDInsp').value;

            console.log('sPECIFICATIONid FOR aTTRIBUTEgROUPS IS =' + spid);
            IN2164Service.getIN2165AttributeGroup(spid).success(function (data) {
                if (data == null || data.IN2165AttributeGroupList == null || data.IN2165AttributeGroupList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsAttributeGroup.paginationPageSizes.push(
                        data.IN2165AttributeGroupList.length

                    );

                    var IN2165AttributeGroupList = data.IN2165AttributeGroupList;

                    $scope.gridOptionsAttributeGroup.data = IN2165AttributeGroupList;


                    $scope.error = false;

                }

            }).finally(function () { $scope.loading = false; })


        }


        //$scope.AreaList = null;
        //$scope.listArea = function () {
        //    var spid = document.getElementById('Specification_IDInsp').value;
        //    var prjname = [];
        //    //DefectService.listArea().success(function (data) {
        //    IN2164Service.listArea(spid).success(function (data) {
        //        console.log('Listed Ongoing Projects' + data.AttributeGroupName[0]);

        //        var prjlist = JSON.stringify(data);

        //        var JSONObject = JSON.parse(prjlist);

        //        for (var i = 0; i < JSONObject["listArea"].length; i++) { 
        //            prjname.push(JSONObject["listArea"][i]["AttributeGroupName"])
        //            console.log(prjname);
        //        }
        //        $scope.AreaList = prjname;

        //    });
        //}
        //$scope.listArea();
        $scope.populateDD = function () {

            var $dropdown = $("#AttributeGroupDD");
            $.each(result, function () {
                $dropdown.append($("<option />").val(this.AttributeGroupName).text(this.AttributeGroupName));
            });
        }




        $scope.gridOptionsAttributeGroup.onRegisterApi = function (gridApi) {
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
                    document.getElementById('AttributeGroupName').value = row.entity.AttributeGroupName;
                    document.getElementById('AttributeGroupDescription').value = row.entity.AttributeGroupDescription;
                    document.getElementById('AutoGenerateSampleID').value = row.entity.AutoGenerateSampleID;
                    document.getElementById('Specification_IdAG').value = row.entity.Specification_Id;
                    // document.getElementById("BOMPosInput").style.display = "block";


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        document.getElementById('AttributeGroupName').value = "";
                        document.getElementById('AttributeGroupDescription').value = "";
                        document.getElementById('AutoGenerateSampleID').value = "";
                        document.getElementById('Specification_IdAG').value = "";



                        //document.getElementById("AttributeGroupInput").style.display = "none";



                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }

        $scope.addIN2165AttributeGroup = function () {

            if (document.getElementById('AttributeGroupName').value == null || document.getElementById('AttributeGroupName').value == "") {
                alert("Document AttributeGroupName is blank");
                return false;
            }
            else {

                var AttributeGroupNameValue = document.getElementById('AttributeGroupName').value
                var AttributeGroupDescriptionValue = document.getElementById('AttributeGroupDescription').value
                var AutoGenerateSampleIDValue = document.getElementById('AutoGenerateSampleID').value
                var Specification_IdValue = document.getElementById('Specification_IdAG').value






                console.log('New AttributeGroup Added/Updated');
                IN2164Service.addIN2165AttributeGroup(
                    AttributeGroupNameValue,
                    AttributeGroupDescriptionValue,
                    AutoGenerateSampleIDValue,
                    Specification_IdValue




                ).success(function (data) {
                    $scope.refreshGridAttributeGroup();

                });
            }
        }


        $scope.refreshGridAttributeGroup = function () {
            console.log('refresh AttributeGroup grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsAttributeGroup.data = [];

            $timeout(function () {
                $scope.loadGridAttributeGroup();
            }, 2000);
            // jQuery('#refattribGR').click();
        }


        $scope.refresGridInspAll = function () {
            $scope.refreshGridInsp();
            $scope.refreshGridAttribute();
            $scope.refreshGridAttributeGroup();
            $scope.refreshGridAGPopup();
            //$scope.refreshGridDropDown();

        }
        //############################# End Grid Option 2165 Attribute Group######################

        //############################## GridOptionAttributeGroup POPUP #########################
        $scope.gridOptionsAGPopup = {
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
                { field: 'AttributeGroupName', displayName: 'AttributeGroupName', width: '100%', enableCellEdit: false },
                //{ field: 'InspectionLot', displayName: 'InspLot', width: '25%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'AutoGenerateSampleID', displayName: 'AutoGenerateSampleID', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Specification_Id', displayName: 'SPID', width: '30%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],
        };

        $scope.loadGridAGPopup = function () {
            $scope.loading = true;
            console.log('loading grid AG POPUP');
            spid = document.getElementById('Specification_IDInsp').value;
            console.log('sPECIFICATIONid FOR aTTRIBUTEgROUPS IS =' + spid);
            IN2164Service.getIN2165AttributeGroup(spid).success(function (data) {
                if (data == null || data.IN2165AttributeGroupList == null || data.IN2165AttributeGroupList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsAGPopup.paginationPageSizes.push(
                        data.IN2165AttributeGroupList.length

                    );
                    var IN2165AttributeGroupList = data.IN2165AttributeGroupList;
                    $scope.gridOptionsAGPopup.data = IN2165AttributeGroupList;
                    $scope.error = false;
                }
            }).finally(function () { $scope.loading = false; })


        }

        $scope.gridOptionsAGPopup.onRegisterApi = function (gridApi) {
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
                    document.getElementById('AttributeGroup').value = row.entity.AttributeGroupName;
                    document.getElementById('mysidenavRightAGPopup').style.display = 'none';
                    $scope.openDIV('mysidenavRightIN2165');

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        document.getElementById('AttributeGroup').value = "";
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });
        }

        $scope.refreshGridAGPopup = function () {
            console.log('refresh AGPopup grid');
            $scope.loading = true;
            $scope.gridOptionsAGPopup.data = [];
            $timeout(function () {
                $scope.loadGridAGPopup();
            }, 2000);

        }

        //#############################end Grid Option 2165 Attribute Group POPUP ######################


        //############################## Job Scheduler #########################
        $scope.gridOptionsJS = {
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
                { field: 'ProductionOrder', displayName: 'PO#', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'InspectionLot', displayName: 'INSPLot#', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'StartDate', displayName: 'StDate', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EndDate', displayName: 'EndDate', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'POID', displayName: 'POTempl', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SpecID', displayName: 'InspLotTempl', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'IN2164_Status', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'IN2165_Status', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'RowID', displayName: 'ID', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'PRID', displayName: 'POID', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'INSPID', displayName: 'INSPID', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MAT', displayName: 'MAT', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SP', displayName: 'SP', width: '20%', enableCellEdit: false, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],
        };

        $scope.loadGridJS = function () {
            $scope.loading = true;
            console.log('loading grid');
            IN2164Service.getINJobSchedule().success(function (data) {
                if (data == null || data.INJobScheduleList == null || data.INJobScheduleList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    console.log('nulldata');
                } else {
                    $scope.gridOptionsJS.paginationPageSizes.push(
                        data.INJobScheduleList.length

                    );


                    var INJobScheduleList = data.INJobScheduleList;
                    $scope.gridOptionsJS.data = INJobScheduleList;




                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })
        }
        $scope.loadGridJS();
        $scope.gridOptionsJS.onRegisterApi = function (gridApi) {
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
                    //$scope.displaySelected(row.entity.POID, row.entity.SpecID);
                    ////##########################Updating PO Schedule DIV
                    document.getElementById('POSchd').value = row.entity.POID;
                    $scope.splitVersion('POSchd', 'POVersionSchd', row.entity.POID);
                    document.getElementById('MaterialSchd').value = row.entity.MAT;
                    //document.getElementById('ProductionOrderBOM').value= row.entity.ProductionOrderNumber;
                    //document.getElementById('ProductionOrderSpec').value= row.entity.ProductionOrderNumber;
                    //document.getElementById('POSchd').value = row.entity.ProductionOrderNumber;
                    document.getElementById('PO_IDSchd').value = row.entity.PRID;
                    document.getElementById('scheduledPO').style.backgroundColor = '#223A5E';

                    ////##########################Updating INSP Schedule DIV
                    $scope.splitVersion('INSPSchd', 'INSPVersionSchd', row.entity.SpecID);
                    document.getElementById('Specification_IDSchd').value = row.entity.INSPID;
                    document.getElementById('InspMatSchd').value = row.entity.SP;
                    document.getElementById('scheduledINSP').style.backgroundColor = '#223A5E';


                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);

                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        ////##########################Updating PO Schedule DIV
                        document.getElementById('POSchd').value = "";
                        document.getElementById('POVersionSchd').value = "";
                        document.getElementById('MaterialSchd').value = "";
                        document.getElementById('PO_IDSchd').value = "";
                        document.getElementById('scheduledPO').style.backgroundColor = '#444';

                        ////##########################Updating INSP Schedule DIV
                        document.getElementById('INSPSchd').value = "";
                        document.getElementById('INSPVersionSchd').value = "";
                        document.getElementById('Specification_IDSchd').value = "";
                        document.getElementById('InspMatSchd').value = "";
                        document.getElementById('scheduledINSP').style.backgroundColor = '#345c33';



                        // document.getElementById("AttributeGroupInput").style.display = "none";



                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });




        }

        $scope.addINJobSchedule = function () {
            var daysRange = document.getElementById("INDateRange").value;
            var start = Date.now();
            if (daysRange == '0') {
                daysRange = '1';
            }
            var i;

            if (document.getElementById('POSchd').value == null || document.getElementById('POSchd').value == "" || document.getElementById('INSPSchd').value == null || document.getElementById('INSPSchd').value == "" || document.getElementById('INStartDate').value == "" || document.getElementById('INEndDate').value == "") {
                if (document.getElementById('POFinal').value == "DLInternalPO") {


                    // for (i = 1; i < daysRange; i++) {
                    $scope.poinsplot(start);
                    //$scope.FinalAddSchedule();
                    //}
                }
                else {
                    document.getElementById('POFinal').value = "";
                    document.getElementById('INSPFinal').value = "";
                    alert("Please assure that POTemplate, Version, PO_ID, INSPLot, INSPVersion, Spec_ID, StartDate and EndDate fields are populated");
                    return false;

                }
            }
            else {

                //for (i = 1; i < daysRange; i++) {
                $scope.poinsplot(start);
                //$scope.FinalAddSchedule();
                // }
            }
            $scope.refreshGrid();
            $scope.refreshGridInsp();
            $scope.refreshGridJS();
            document.getElementById('POSchd').value = "";
            document.getElementById('PO_IDSchd').value = "";
            document.getElementById('POVersionSchd').value = "";
            document.getElementById('MaterialSchd').value = "";
            document.getElementById('INSPSchd').value = "";
            document.getElementById('Specification_IDSchd').value = "";
            document.getElementById('INSPVersionSchd').value = "";
            document.getElementById('INStartDate').value = "";
            document.getElementById('INEndDate').value = "";
            document.getElementById('InspMatSchd').value = "";
            if (document.getElementById('IN2165iCheck').checked == true) {
                document.getElementById('IN2165iCheck').checked = false;
                document.getElementById('POFinal').value = "";
                document.getElementById('INSPFinal').value = "";
            }
            document.getElementById('scheduledPO').style.backgroundColor = '#444';
            document.getElementById('scheduledINSP').style.backgroundColor = '#345c33';

        }
        $scope.FinalAddSchedule = function (n) {

            var RowIDValue = document.getElementById('RowID').value;
            //var ProductionOrderValue = document.getElementById('POFinal').value;
            var ProductionOrderValue = n;
            //var InspectionLotValue = document.getElementById('INSPFinal').value;
            var InspectionLotValue = n;
            var SpecIDValue = document.getElementById('Specification_IDSchd').value;
            var POIDValue = document.getElementById('PO_IDSchd').value;
            var IN2164_StatusValue = '0';
            var IN2165_StatusValue = '0';
            var StartDateValue = document.getElementById('INStartDate').value;
            var EndDateValue = document.getElementById('INEndDate').value;

            if (document.getElementById('MaterialSchd').value == document.getElementById('InspMatSchd').value) {

                console.log('New JobSchedule Added/Updated');
                IN2164Service.addINJobSchedule(
                    RowIDValue,
                    ProductionOrderValue,
                    InspectionLotValue,
                    SpecIDValue,
                    POIDValue,
                    IN2164_StatusValue,
                    IN2165_StatusValue,
                    StartDateValue,
                    EndDateValue).success(function (data) {
                        $scope.refresGridJSAll();


                    });
            }
            else if (document.getElementById('POFinal').value == "DLInternalPO") {
                console.log('New JobSchedule Added/Updated');

                var il= document.getElementById('INSPFinal').value;
                InspectionLotValue = +il + 1;
                IN2164Service.addINJobSchedule(
                    RowIDValue,
                    ProductionOrderValue,
                    InspectionLotValue,
                    SpecIDValue,
                    POIDValue,
                    IN2164_StatusValue,
                    IN2165_StatusValue,
                    StartDateValue,
                    EndDateValue).success(function (data) {
                        $scope.refresGridJSAll();

                    });
            }
            else {
                alert("Unmatched Material Values!->Please assure that values within PO Material and Insp Material are exact matches");
                return false;

            }
        }

        $scope.refreshGridJS = function () {
            console.log('refresh JobSchedule grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsJS.data = [];

            $timeout(function () {
                $scope.loadGridJS();
            }, 2000);
            // jQuery('#refattribGR').click();
        }

        $scope.refresGridJSAll = function () {
            $scope.refreshGrid();
            $scope.refreshGridInsp();
            $scope.refreshGridJS();
        }

        //$scope.refresGridPOAll();
        //$scope.refresGridInspAll();
        //$scope.refresGridJSAll();
        //#############################end Grid Option Job Scheduler######################





        //############################ Save or Update ProductionOrder, BOMItem, and Specifications associated the POs#############################
        $scope.SaveAll = function () {
            if (document.getElementById('Version').value == null || document.getElementById('Version').value == "") {
                alert("PO Template Version must be entered");
                return false;
            }
            else {
                //var VersIncrease = document.getElementById("Version").value+ 1;
                document.getElementById("ProductionOrder_Id").value = "";

                $scope.addIN2164PO();
                $scope.refreshGrid();
                $scope.clearTB();
            }

        }
        $scope.SaveAllBOM = function () {
            $scope.addIN2164BOMItem();
            $scope.refreshGridBOMItem()
            $scope.clearTBBOM();
        }
        $scope.SaveAllSpec = function () {
            $scope.addIN2164Spec();
            $scope.refreshGridSpec()
            $scope.clearTBSpec();
        }

        $scope.SaveAllInsp = function () {
            $scope.addIN2165Insp();
            //$scope.addIN2165Attribute();
            //$scope.addIN2165AttributeGroup();
            $scope.refreshGridInsp();
            //document.getElementById('SpecificationName').value= '';
            //document.getElementById('SpecificationVersion').value= '';
            //document.getElementById('SpecificationDesc').value= '';
            //document.getElementById('InspectionLot').value= '';
            //document.getElementById('Specification_IDInsp').value= '';
            $scope.clearTBInsp();
        }
        $scope.SaveAllAttribute = function () {
            $scope.addIN2165Attribute();
            $scope.refreshGridAttribute();
            $scope.clearAttribute();
        }

        $scope.refreshschdgrids = function () {
            //jQuery('#1click').click();
            //jQuery('#2click').click();
            location.reload();



        }

        $scope.SaveAllAttributeGroup = function () {
            $scope.addIN2165AttributeGroup();
            $scope.refreshGridAttributeGroup();
            $scope.refreshGridAGPopup();
            $scope.clearAttributeGroup();
        }
        $scope.NewtemplateClear = function () {

            document.getElementById('Version').value = '';
            document.getElementById('ProductionOrder_Id').value = '';
            alert("Enter PO Template Version Number");
            return false;
        }
        $scope.NewtemplateClearInsp = function () {

            document.getElementById('SpecificationVersion').value = '';
            document.getElementById('Specification_IDInsp').value = '';
            alert("Enter InspectionLOT Template Version Number");
            return false;
        }


        $scope.Newtemplate = function () {
            if (document.getElementById('Version').value == null || document.getElementById('Version').value == "") {
                alert("PO Template Version must be entered");
                return false;
            }
            else {
                //var VersIncrease = document.getElementById("Version").value+ 1;
                document.getElementById("ProductionOrder_Id").value = "";

                $scope.addIN2164PO();
                $scope.refreshGrid();
            }
            // $scope.clearTB();
            // jQuery('#ProductionOrder_Id div').html('');
            //$scope.addIN2164PO();
            //$scope.addIN2164BOMItem;
            //$scope.addIN2164Spec;

        }

        $scope.NewtemplateInsp = function () {
            if (document.getElementById('SpecificationVersion').value == null || document.getElementById('SpecificationVersion').value == "") {
                alert("InspectionLOT Version Template Version must be entered");
                return false;
            }
            else {
                document.getElementById("Specification_ID").value = "";

                $scope.addIN2165Insp();
                $scope.refreshGridSpecification();
            }
            // $scope.clearTB();
            // jQuery('#ProductionOrder_Id div').html('');
            //$scope.addIN2164PO();
            //$scope.addIN2164BOMItem;
            //$scope.addIN2164Spec;

        }


        //######################### END Save or Update ProductionOrder, BOMItem, and Specifications associated the POs#############################

        //######################### Other Functions#############################

        $scope.DeletePO = function () {

            document.getElementById("ProductionOrder_Id").value = "DEL";
           // $scope.SaveAll();
            $scope.addIN2164PO();
            $scope.refreshGrid();
            $scope.clearTB();

            $scope.refresGridPOAll();
        }


        $scope.DeleteBOM = function () {
            document.getElementById("ProductionOrder_IdBOM").value = "DEL";
           // $scope.SaveAllBOM();
            $scope.delIN2164BOMItem('DEL');
            $scope.clearTBBOM();
            $scope.refresGridPOAll();
        }


        $scope.DeleteSpec = function () {
            document.getElementById("POIDSpec_ID").value = "DEL";
            $scope.SaveAllSpec();
            $scope.refresGridPOAll();

        }


        $scope.DeleteInsp = function () {
            document.getElementById("Specification_IDInsp").value = "DEL";
            $scope.SaveAllInsp();
            $scope.refresGridInspAll();
        }


        $scope.DeleteAttribute = function () {
            document.getElementById("Specification_IDAttribute").value = "DEL";
            $scope.SaveAllAttribute();
            $scope.refresGridInspAll();
        }


        $scope.DeleteAttributeGroup = function () {
            document.getElementById("Specification_IdAG").value = "DEL";
            $scope.SaveAllAttributeGroup();
            $scope.refresGridInspAll();
        }

        $scope.CheckDLInternalPO = function () {
            // Get the checkbox
            var checkBox = document.getElementById("IN2165iCheck");
            console.log(checkBox.checked);
            // If the checkbox is checked, display the output text
            if (document.getElementById("IN2165iCheck").checked == true) {
                document.getElementById("POFinal").value = 'DLInternalPO';

            }
            else {
                document.getElementById("POFinal").value = '';
            }
        }


        $scope.poinsplot = function (start) {
            var d = new Date();
            var n = d.valueOf();
            var checkBox = document.getElementById("IN2165iCheck");

            var text = document.getElementById("text");
            if (checkBox.checked == true) {
                var millis = Date.now() - start;
                var m = n + Math.floor(millis / 1000);
                console.log('m=' + m + '-' + 'n=' + n + '-' + 'millis=' + millis + 'start=' + start);
                document.getElementById("INSPFinal").value = m;
                $scope.FinalAddSchedule('DLInternalPO');
                document.getElementById("POFinal").value = 'DLInternalPO';
               
            }
            else {
                var millis = Date.now() - start;
                var m = n + Math.floor(millis / 1000);
                console.log('m=' + m + '-' + 'n=' + n + '-' + 'millis=' + millis + 'start=' + start);
                $scope.FinalAddSchedule(m);
                document.getElementById("POFinal").value = m;
                document.getElementById("INSPFinal").value = m;
            }
        }


        $scope.showInput = function (INP, caller) {

            document.getElementById('1').style.display = "none";
            document.getElementById('2').style.display = "none";
            document.getElementById('3').style.display = "none";
            document.getElementById(INP).style.display = "block";
            document.getElementById(caller).style.display = "block";
        }

        $scope.showInputInsp = function (INP, caller) {

            document.getElementById('4').style.display = "none";
            document.getElementById('5').style.display = "none";
            document.getElementById('6').style.display = "none";
            document.getElementById(INP).style.display = "block";
            document.getElementById(caller).style.display = "block";
        }
        $scope.hideInput = function (INP) {
            document.getElementById('1').style.display = "block";
            document.getElementById('2').style.display = "block";
            document.getElementById('3').style.display = "block";
            document.getElementById(INP).style.display = "none";
        }

        $scope.hideInputInsp = function (INP) {
            document.getElementById('4').style.display = "block";
            document.getElementById('5').style.display = "block";
            document.getElementById('6').style.display = "block";
            document.getElementById(INP).style.display = "none";
        }



        $scope.splitVersionPO = function (mydivP, mydivV, str) {
            document.getElementById(mydivP).value = str.split('_')[0];
            var vers = str.split('_')[1];
            if (vers === undefined) {
                vers = 0;
                document.getElementById(mydivV).value = vers;
            }
            else {
                document.getElementById(mydivV).value = vers;
            }


        }

        $scope.splitVersion = function (mydivP, mydivV, str) {
            document.getElementById(mydivP).value = str.split('_')[0];
            var vers = str.split('_')[1];
            if (vers === undefined) {
                vers = 0;
                document.getElementById(mydivV).value = vers;
            }
            else {
                document.getElementById(mydivV).value = vers;
            }


        }

        $scope.splitVersionInsp = function (mydivP, mydivV, str) {
            document.getElementById(mydivP).value = str.split('_')[0];
            var vers = str.split('_')[1];
            if (vers === undefined) {
                vers = 0;
                document.getElementById(mydivV).value = vers;
            }
            else {
                document.getElementById(mydivV).value = vers;
            }


        }



        $scope.popSummary = function () {
            document.getElementById('mysidenavRightProd').style.width = '0';
        }
        $scope.skillsFunc = function () {

            //$('#TaskDisplay').trigger('click');
            var job = document.getElementById('ProductionOrder_Id').value;
            console.log(job);
            $scope.gridApi.grid.getColumn('ProductionOrder_Id').filters[0] = {
                term: job
            };
        }


        $scope.skillsFuncInsp = function () {
            var job = document.getElementById('Specification_ID').value;
            console.log(job);
            $scope.gridApi.grid.getColumn('Specification_ID').filters[0] = {
                term: job
            };
        }

        $scope.LoadOtherGrids = function () {
            $('#BOMDisplay').trigger('click');
            // $('#SpecDisplay').trigger('click');
        }

        //$scope.copy = function (param, area) {
        //    document.getElementById('IATo1').value = param;
        //    document.getElementById('IssueAreaTB1').value = area;


        //}

        $scope.copy = function (area, param) {
            // document.getElementById('IATo1').value = param;
            document.getElementById(area).value = param.value;

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
        }


        $scope.copyToDIV = function () {
            if (document.getElementById('VATPlantOff').value == null || document.getElementById('VATPlantOff').value == "Select a Plant" || document.getElementById('VATPlantOff').value == "") {
                alert("Please Select A Plant from the Dropdown");
            }
            else {

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
            document.getElementById(nav).style.width = "95%";
            document.getElementById(nav).style.zIndex = "999";
            // $scope.convertImageToBase64();
            //  $scope.DIVtoCANVAS();
        }

        $scope.closeNav = function (nav) {
            document.getElementById(nav).style.width = "0";
        }

        $scope.getTableHeight = function () {
            var rowWidth = 30; // your row height
            var headerWidth = 30; // your header height
            return {
                width: ('50' * rowWidth + headerWidth) + "px",
                //width:"100%"
                height: ('6.5' * rowWidth + headerWidth) + "px",
            };
        };


        $scope.maximize = function (nav, gridname, width, height) {
            console.log(nav, ' ', width, ' ', height);
            document.getElementById('1').style.display = "none";

            document.getElementById('2').style.display = "none";
            document.getElementById('3').style.display = "none";


            //document.getElementById('content').style.height = "100%";
            document.getElementById(nav).style.display = "block";
            document.getElementById(nav).style.width = width;
            document.getElementById(nav).style.height = height;
            //$('#gridname').width() = $('#mysidenavRightMain').width();

            if (gridname = 'GridBOMItem') {

                $scope.refreshGridBOMItem();
            }
            else if (gridname = 'GridSpec') {
                $scope.refreshGridSpec();
            }
            else {
                $scope.refreshGrid();
            }

            //document.getElementById(gridname).style.width = width;
            //document.getElementById(gridname).style.height = height; 

        }
        $scope.maximizeInsp = function (nav, gridname, width, height) {
            console.log(nav, ' ', width, ' ', height);
            document.getElementById('4').style.display = "none";

            document.getElementById('5').style.display = "none";
            document.getElementById('6').style.display = "none";


            //document.getElementById('content').style.height = "100%";
            document.getElementById(nav).style.display = "block";
            document.getElementById(nav).style.width = width;
            document.getElementById(nav).style.height = height;
            //$('#gridname').width() = $('#mysidenavRightMain').width();

            if (gridname = 'GridAttribute') {

                $scope.refreshGridAttribute();
            }
            else if (gridname = 'GridAttributeGroup') {
                $scope.refreshGridAttributeGroup();
                $scope.refreshGridAGPopup();
            }
            else {
                $scope.refreshGridInsp();
            }

            //document.getElementById(gridname).style.width = width;
            //document.getElementById(gridname).style.height = height; 

        }
        $scope.restore = function (nav, width, height) {
            //document.getElementById('placeholder').style.width = "90.352%";
            //document.getElementById('placeholder').style.height= "15%";
            //document.getElementById('placeholder').style.display = "block";
            document.getElementById('1').style.display = "block";
            document.getElementById('2').style.display = "block";
            document.getElementById('3').style.display = "block";


            document.getElementById(nav).style.width = width;
            document.getElementById(nav).style.height = height;




        }

        $scope.restoreInsp = function (nav, width, height) {
            //document.getElementById('placeholder').style.width = "90.352%";
            //document.getElementById('placeholder').style.height= "15%";
            //document.getElementById('placeholder').style.display = "block";
            document.getElementById('4').style.display = "block";
            document.getElementById('5').style.display = "block";
            document.getElementById('6').style.display = "block";


            document.getElementById(nav).style.width = width;
            document.getElementById(nav).style.height = height;




        }

        $scope.assignToCurrent = function (nav) {
            document.getElementById(nav).value = document.getElementById('ProductionOrder_Id').value;
            if (nav === 'POIDSpec_ID') {
                $scope.addIN2164Spec();
            }
            else {
                $scope.addIN2164BOMItem();
            }
            $scope.refreshGrid();
            $scope.refreshGridBOMItem();
            $scope.refreshGridSpec();
        }

        $scope.assignToCurrentInsp = function (nav) {
            document.getElementById(nav).value = document.getElementById('Specification_IDInsp').value;
            if (nav === 'Specification_IDAttribute') {
                $scope.addIN2165Attribute();
            }
            else {
                $scope.addIN2165AttributeGroup();
            }
            $scope.refreshGridInsp();
            $scope.refreshGridAttribute();
            $scope.refreshGridAttributeGroup();
            $scope.refreshGridAGPopup();
        }
        $scope.closeAll = function () {
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightSchedule').style.width = '0';
            document.getElementById('mysidenavRightIN2165').style.width = '0';
        }

        $scope.openDIV = function (nav) {
            console.log(nav);
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightSchedule').style.width = '0';
            document.getElementById('mysidenavRightIN2165').style.width = '0';
            document.getElementById('mysidenavRightAGPopup').style.width = '0';
            document.getElementById('mysidenavRightPOPopup').style.width = '0';
            document.getElementById(nav).style.width = '95%';

            //$scope.tabs[0].gridOptions.data = data;
            //$interval(function () {
            //    $scope.gridApi1.core.handleWindowResize();
            //}, 10, 500);
        }

        $scope.openDIVPopUp = function (nav) {
            console.log(nav);
            document.getElementById('mysidenavRightMain').style.width = '0';
            document.getElementById('mysidenavRightSchedule').style.width = '0';
            document.getElementById('mysidenavRightIN2165').style.width = '95%';
            document.getElementById('mysidenavRightAGPopup').style.width = '0';
            document.getElementById('mysidenavRightPOPopup').style.width = '0';
            if (nav == 'mysidenavRightAGPopup') {
                document.getElementById(nav).style.display = 'block';
                document.getElementById(nav).style.width = '15%';
                document.getElementById(nav).style.height = '100%';
                document.getElementById(nav).style.left = '20%';
                document.getElementById(nav).style.right = '30%';
                document.getElementById(nav).style.top = '10%';
            }
            else //if (nav == 'mysidenavRightPOPopup')
            {
                document.getElementById(nav).style.display = 'block';
                //document.getElementById(nav).value = NAV;
                document.getElementById('mysidenavRightMain').style.width = '0';
                document.getElementById('mysidenavRightSchedule').style.width = '0';
                document.getElementById('mysidenavRightIN2165').style.width = '0';
                document.getElementById('mysidenavRightAGPopup').style.width = '0';
                document.getElementById('mysidenavRightPOPopup').style.width = '0';
                document.getElementById(nav).style.width = '95%';
            }


            //$scope.tabs[0].gridOptions.data = data;
            //$interval(function () {
            //    $scope.gridApi1.core.handleWindowResize();
            //}, 10, 500);
        }
        $scope.refreshDIV = function (nav) {
            console.log(nav);
            var nav1 = "'" + nav + "'";
            console.log(nav1);
            var nav2 = '"' + nav + '"';
            console.log(nav2);

            //  $.ajax({
            //      url: location.href,
            //      type: 'GET',
            //      sucess: function (data) {
            //          refreshedPage = $(data);
            //          //newDemo = refreshedPage.find("#1").html();
            //          newDemo = refreshedPage.find(nav2).html();
            //          //$('#1').html(newDemo)
            //          $(nav1).html(newDemo)
            //      }
            //  });


            // $(nav1).load(document.URL + nav1);
            $("#mysidenavRightMain").load(window.location.href + " #mysidenavRightMain");
            //openDIV('mysidenavRightMain')
            document.getElementById("mysidenavRightMain").style.display = 'block';

        }//end

        $scope.refDIV = function () {

            //$("#4").load(location.href + " #4");
            //document.getElementById("4").style.display = 'block';
            //var url = "#/POInsp?ID=" + Math.random(); //create random number

            //setTimeout(function () {
            //    $("#mysidenavRightMain").load(url + " #mysidenavRightMain>*", "");
            //}, 2000); //wait one second to run function

            window.location.reload();

        }




        $scope.getDTRange = function () {
            //var ST = document.getElementById('INStartDate').value;
            //var ED = document.getElementById('INEndDate').value;
            //console.log(ST+'-'+ED)
            // $scope.datediff($scope.parseDate(ST), $scope.parseDate(ED));

            var fromDate = $('#INStartDate').val();
            var toDate = $('#INEndDate').val();
            //from, to, druation;

            var startDay = new Date(fromDate);
            var endDay = new Date(toDate);
            var millisecondsPerDay = 1000 * 60 * 60 * 24;
            var millisBetween = endDay.getTime() - startDay.getTime();

            var diff = millisBetween / millisecondsPerDay;
            console.log('diff-' + diff);


            //$('#INDateRange').text(diff);
            document.getElementById("INDateRange").value = diff;


        }


        //$scope.displaySelected = function (job, jobI) {

        //    //$('#TaskDisplay').trigger('click');
        //    //var job = document.getElementById('row_id').value;
        //    //var job = document.getElementById('ProjectNameC').value;

        //    console.log(job + '=job' + '-' + jobI + '=jobI');

        //    $scope.gridApi.grid.getColumn('ProductionOrderNumber').filters[0] = {
        //        term: job
        //    };

        //    $scope.gridApi.gridInspSchd.getColumn('SpecificationName').filters[0] = {
        //        term: jobI
        //    };
        //}

        $scope.wider = function (navP, nav, grid, widthM, heightM, widthN, heightN, widthG, heightG) {


            
                //document.getElementById('placeholder').style.width = "90.352%";
                //document.getElementById('placeholder').style.height= "15%";
                //document.getElementById('placeholder').style.display = "block";
                document.getElementById(navP).style.width = widthM;
                document.getElementById(navP).style.height = heightM;
                document.getElementById(nav).style.width = widthN;
                document.getElementById(nav).style.height =heightN;
                document.getElementById(grid).style.width = widthG;
                document.getElementById(grid).style.height = heightG;



            


        }

    }











})();


