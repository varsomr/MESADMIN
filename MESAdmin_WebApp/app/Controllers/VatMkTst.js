(function () {
    angular
        .module('myApp')
        .controller('LRWcontroller', controller);

    var flagOperatorOverride = "0";


    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'uiGridGroupingConstants', 'LRWService'];

    app.config(function ($httpProvider) {

    });

    //###############################################  VatMakeRpt SCREEN ############################################//

    $scope.gridOptionsVatMakeRpt = {
        enableFullRowSelection: true,
        enableRowHeaderSelection: false,
        paginationPageSizes: [20, 40, 60],
        paginationPageSize: 40,
        rowHeight: 53,
        enableFiltering: true,
        enableCellEdit: false,
        enableGridMenu: false,
        rowTemplate:
            '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',
        columnDefs: [
            { field: 'Production_Date', width: '10%', visible: true }
            , { field: 'ProductionOrder', width: '10%', visible: true }
            , { field: 'ReportName', width: '10%', visible: true }
            , {
                field: 'LineNumber', grouping: {
                    groupPriority: 0
                },
                width: '10%', visible: true
            }
            , {
                field: 'AttributeName', grouping: {
                    groupPriority: 1
                },
                width: '10%', visible: true
            }
            , { field: 'Source', width: '10%', visible: true }
            , { field: 'MIC', width: '10%', visible: true }
            , { field: 'Lot_No', width: '10%', visible: true }
            , { field: 'Position', width: '10%', visible: true }
            , { field: 'LogicalVat', width: '10%', visible: true }
            , { field: 'ReportSection', width: '10%', visible: true }
            , { field: 'PhysUnitNo', width: '10%', visible: true }
            , { field: 'ProductCode', width: '10%', visible: true }
            , { field: 'ReportValue', width: '10%', visible: true }
            , { field: 'Record_UID', width: '10%', visible: true }
            , { field: 'vLSL', width: '10%', visible: true }
            , { field: 'vTarget', width: '10%', visible: true }
            , { field: 'vUSL', width: '10%', visible: true }
            , { field: 'KPI_Report_Name', width: '10%', visible: true }
            , { field: 'KPI_RD_Name', width: '10%', visible: true }
            , { field: 'AvgValue', width: '10%', visible: true }
            , { field: 'SDevValue', width: '10%', visible: true }
            , { field: 'DisplaySpecs', width: '10%', visible: true }
            , { field: 'LatestProductionOrder', width: '10%', visible: true }
            , { field: 'LatestLSL', width: '10%', visible: true }
            , { field: 'LatestTarget', width: '10%', visible: true }
            , { field: 'LatestUSL', width: '10%', visible: true }
            , { field: 'LatestAverageValue', width: '10%', visible: true }
            , { field: 'LatestStdDevValue', width: '10%', visible: true }
            , { field: 'ReportingKey', width: '10%', visible: true }


        ]
    };

    $scope.GridfromButtonVatMakeRpt = function () {



        $scope.refreshgridVatMakeRpt();

    };


    $scope.loadgridVatMakeRpt = function () {

        $scope.loading = true;

        console.log('loading grid');

        //LineNumber = document.getElementById('LineNumber').value;           
        //ProductionOrder = document.getElementById('ProductionOrder').value;
        //ProductCode = document.getElementById('ProductCode').value;
        //var StartDate = document.getElementById('RtimestampidF').value;
        //var EndDate = document.getElementById('RtimestampidT').value;
        //EndDate = document.getElementById('EndDate').value;

        // VatMakeRptService.getVatMakeRpt(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate).success(function (data) {
        LRWService.getVatMakeRpt('1', '1216103', '100000168', '2020-05-12', '2020-05-12').success(function (data) {
            if (data === null || data.VatMakeRptList === null || data.VatMakeRptList.length === 0) {

                $scope.error = true;
                $scope.errorDescription = "No data found for selected criteria.";
            } else {
                $scope.gridOptionsVatMakeRpt.paginationPageSizes.push(
                    data.VatMakeRptList.length
                );
                var VatMakeRptList = data.VatMakeRptList;
                $scope.gridOptionsVatMakeRpt.data = VatMakeRptList;
                $scope.error = false;
            }

        }).finally(function () { $scope.loading = false; });

    };

    $scope.loadgridVatMakeRpt();

    $scope.gridOptionsVatMakeRpt.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;

        //    $scope.selectRow = function () {
        $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
        //  console.log($scope.mySelectedRows)

        var objarray = [];
        gridApi.selection.on.rowSelectionChanged($scope, function (row) {
            console.log('row selected ' + row.entity.row_id);


            if (row.isSelected) {
                console.log('push');

                $scope.openDIV('InputForm');


                document.getElementById('Production_Date').value = row.entity.Production_Date;
                document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                document.getElementById('ReportName').value = row.entity.ReportName;
                document.getElementById('LineNumber').value = row.entity.LineNumber;
                document.getElementById('AttributeName').value = row.entity.AttributeName;
                document.getElementById('Source').value = row.entity.Source;
                document.getElementById('MIC').value = row.entity.MIC;
                document.getElementById('Lot_No').value = row.entity.Lot_No;
                document.getElementById('Position').value = row.entity.Position;
                document.getElementById('LogicalVat').value = row.entity.LogicalVat;
                document.getElementById('ReportSection').value = row.entity.ReportSection;
                document.getElementById('PhysUnitNo').value = row.entity.PhysUnitNo;
                document.getElementById('ProductCode').value = row.entity.ProductCode;
                document.getElementById('ReportValue').value = row.entity.ReportValue;
                document.getElementById('Record_UID').value = row.entity.Record_UID;
                document.getElementById('vLSL').value = row.entity.vLSL;
                document.getElementById('vTarget').value = row.entity.vTarget;
                document.getElementById('vUSL').value = row.entity.vUSL;
                document.getElementById('KPI_Report_Name').value = row.entity.KPI_Report_Name;
                document.getElementById('KPI_RD_Name').value = row.entity.KPI_RD_Name;
                document.getElementById('AvgValue').value = row.entity.AvgValue;
                document.getElementById('SDevValue').value = row.entity.SDevValue;
                document.getElementById('DisplaySpecs').value = row.entity.DisplaySpecs;
                document.getElementById('LatestProductionOrder').value = row.entity.LatestProductionOrder;
                document.getElementById('LatestLSL').value = row.entity.LatestLSL;
                document.getElementById('LatestTarget').value = row.entity.LatestTarget;
                document.getElementById('LatestUSL').value = row.entity.LatestUSL;
                document.getElementById('LatestAverageValue').value = row.entity.LatestAverageValue;
                document.getElementById('LatestStdDevValue').value = row.entity.LatestStdDevValue;
                document.getElementById('ReportingKey').value = row.entity.ReportingKey;



                //                    $scope.openDIV('InputForm');
                document.getElementById('lblHeader').innerHTML = "Operator's Inprocess GRID Selected";
                document.getElementById('lblHeader').backgroundColor = 'darkslategrey';
                document.getElementById('InputForm').backgroundColor = 'darkslategrey';
                $scope.TextInputValidation();


                if (objarray.indexOf(row.entity.row_id) === -1) {
                    objarray.push(row.entity.row_id);

                }
            }
            else
                if (objarray.indexOf(row.entity.row_id) !== -1) {
                    console.log("pop");
                    console.log(objarray);

                    document.getElementById('Production_Date').value = "";
                    document.getElementById('ProductionOrder').value = "";
                    document.getElementById('ReportName').value = "";
                    document.getElementById('LineNumber').value = "";
                    document.getElementById('AttributeName').value = "";
                    document.getElementById('Source').value = "";
                    document.getElementById('MIC').value = "";
                    document.getElementById('Lot_No').value = "";
                    document.getElementById('Position').value = "";
                    document.getElementById('LogicalVat').value = "";
                    document.getElementById('ReportSection').value = "";
                    document.getElementById('PhysUnitNo').value = "";
                    document.getElementById('ProductCode').value = "";
                    document.getElementById('ReportValue').value = "";
                    document.getElementById('Record_UID').value = "";
                    document.getElementById('vLSL').value = "";
                    document.getElementById('vTarget').value = "";
                    document.getElementById('vUSL').value = "";
                    document.getElementById('KPI_Report_Name').value = "";
                    document.getElementById('KPI_RD_Name').value = "";
                    document.getElementById('AvgValue').value = "";
                    document.getElementById('SDevValue').value = "";
                    document.getElementById('DisplaySpecs').value = "";
                    document.getElementById('LatestProductionOrder').value = "";
                    document.getElementById('LatestLSL').value = "";
                    document.getElementById('LatestTarget').value = "";
                    document.getElementById('LatestUSL').value = "";
                    document.getElementById('LatestAverageValue').value = "";
                    document.getElementById('LatestStdDevValue').value = "";
                    document.getElementById('ReportingKey').value = "";


                    document.getElementById('InputForm').style.width = '0';
                    document.getElementById('lblHeader').innerHTML = "Select from a Grid";
                    document.getElementById('lblHeader').backgroundColor = 'black';
                    document.getElementById('InputForm').backgroundColor = 'black';
                    $scope.TextInputValidation();
                    //}
                    //else {
                    //    // Do nothing!
                    //}
                    objarray.splice(objarray.indexOf(row.entity.row_id), 1);
                }

        });

    };



    $scope.refreshgridVatMakeRpt = function () {
        console.log('refreshOperator grid');


        //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
        $scope.loading = true;
        $scope.gridOptionsVatMakeRpt.data = [];

        $timeout(function () {
            //if (nav === 'Top') {

            $scope.loadgridVatMakeRpt();
            //}
            //else {
            //    $scope.loadgridMSSMgmtBottom();
            //}
        }, 1500);
    };
