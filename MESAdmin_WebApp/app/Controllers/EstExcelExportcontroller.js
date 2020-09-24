(function () {
    angular
        .module('myApp')
        .controller('EstExcelExportcontroller', controller)//.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'EstimatorService'];

    app.config(function ($httpProvider) {

    });

    
    function controller($scope, $timeout, uiGridConstants, EstimatorService) {

        $scope.exportCSV = function () {
            var exportService = EstimatorService;
            var grid = $scope.gridApi.grid;
            var fileName = getDate() + ".csv";

            //exportService.loadAllDataIfNeeded(grid, uiGridConstants.ALL, uiGridConstants.VISIBLE).then(function () {
            //    var exportColumnHeaders = exportService.getColumnHeaders(grid, uiGridConstants.VISIBLE);
            //    var exportData = exportService.getData(grid, uiGridConstants.ALL, uiGridConstants.VISIBLE);
            //    var csvContent = exportService.formatAsCsv(exportColumnHeaders, exportData, grid.options.exporterCsvColumnSeparator);
            //    exportService.downloadFile(fileName, csvContent, grid.options.exporterOlderExcelCompatibility);

            EstimatorService.get().success(function (data) {
                if (data == null || data.EstimatorList == null || data.EstimatorList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.EstimatorList.length
                    );

                    var EstimatorList = data.EstimatorList;

                    //console.log(EstimatorList);

                    //$scope.gridOptions.data = EstimatorList;
                    //console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }


            });

        }


        $scope.gridOptions = {
            //showGridFooter: true,
            //enableSelectionBatchEvent: true,
            //paginationPageSizes: [20, 40, 60],
            //paginationPageSize: 40,
            //rowHeight: 33,
            //enableFiltering: true,
            
            columnDefs: [
                { field: 'Area', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Area; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'UIName', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.UIName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Complexity', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Complexity; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'BAHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.BAHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AppsAnalysisHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.AppsAnalysisHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DevelopmentHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DevelopmentHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TestingHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TestingHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DeploymentHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.DeploymentHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TrainingHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TrainingHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'MassTotalHours', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.MassTotalHours; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Rate', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Rate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'HardwareCost', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.HardwareCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'SoftwareCost', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.SoftwareCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ConsultingCost', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ConsultingCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TotalCost', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TotalCost; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'row_id', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.row_id; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ], 


            //onRegisterApi: function (gridApi) {
            //    $scope.gridApi = gridApi;
            //},
            enableGridMenu: false,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: { fontSize: 9 },
            exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
            exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
            exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
            exporterPdfFooter: function (currentPage, pageCount) {
                return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            exporterPdfCustomFormatter: function (docDefinition) {
                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            }

        };
        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');


            //console.log(options);
            EstimatorService.get().success(function (data) {
                if (data == null || data.EstimatorList == null || data.EstimatorList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.EstimatorList.length
                    );

                    var EstimatorList = data.EstimatorList;

                    //console.log(EstimatorList);

                    $scope.gridOptions.data = EstimatorList;
                    //console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }
                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; })
            //   . error(function (data) {

            //});

           
        }
        



        $scope.loadGrid();
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
                    
                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });
            $scope.refreshGrid = function () {
                console.log('refresh grid');

                //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
                $scope.loading = true;

                $scope.gridOptions.data = [];

                $timeout(function () {
                    $scope.loadGrid();
                }, 1000);
            }


            $scope.AreaList = null;
            $scope.listArea = function () {

                var prjname = [];
                EstimatorService.get().success(function (data) {
                    //  console.log('Listed Ongoing Projects' + data.listProjectList[0]);

                    var prjlist = JSON.stringify(data);

                    var JSONObject = JSON.parse(prjlist);
                    //console.log(JSONObject["listProjectList"].length);
                    for (var i = 0; i < JSONObject["listArea"].length; i++) { //in JSONObject["listProjectList"][0]["ProjectName"]) {
                        prjname.push(JSONObject["listArea"][i]["Area"]
                            // prjname.push(JSONObject["listArea"][i]["UI"]

                        )
                        //console.log(prjname);
                    }
                    $scope.AreaList = prjname;
                    // console.log($scope.ProjectsList);
                    //$scope.loadGrid();
                });
            }
            $scope.listArea();

        }
    }


    function getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '_' + dd + '_' + yyyy;
        return today
    }


})();



