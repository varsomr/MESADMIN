(function () {
    //*****************************add-on for Grid Dropdown trial - IH 9/29/2017
    angular.module('gridFilters', [])
        .filter('griddropdown', function () {
            return function (input, context) {

                try {

                    var map = context.col.colDef.editDropdownOptionsArray;
                    var idField = context.col.colDef.editDropdownIdLabel;
                    var valueField = context.col.colDef.editDropdownValueLabel;
                    var initial = context.row.entity[context.col.field];
                    if (typeof map !== "undefined") {
                        for (var i = 0; i < map.length; i++) {
                            if (map[i][idField] == input) {
                                return map[i][valueField];
                            }
                        }
                    } else if (initial) {
                        return initial;
                    }
                    return input;

                } catch (e) {
                    context.grid.appScope.log("Error: " + e);
                }
            };
        });



    angular.module('myApp')
        .controller('Defectcontroller', controller)//.controller('StaticController', controllerstaticgrid);
    controller.$inject = ['$scope', '$timeout', 'uiGridConstants'
        , 'uiGridExporterService', 'uiGridExporterConstants'
        , 'DefectService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants
        , uiGridExporterService, uiGridExporterConstants, DefectService
    ) {

        //, uiGridExporterConstants, uiGridExporterService) {
        /* Group drop down Values */
        var GroupTypes = [
            { value: 'ProjectDefect', label: 'ProjectDefect' },
            { value: 'SystemBug', label: 'SystemBug' },
            { value: 'ChangeRequest', label: 'ChangeRequest' },
            { value: 'TrainingOpportunity', label: 'TrainingOpportunity' },
            { value: 'FutureScope', label: 'FutureScope' },
            { value: 'InternalTask', label: 'InternalTask' }

        ];
        var myTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>{{ row.entity.row_id }}</a>";
        var xmlTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>Review and Edit</a>"
        var myData = [
            {
                Status: "Complete"
            }, {
                Status: "Complete"
            }];
        $scope.Status = [{ id: 1, value: '1-InQueue' }, { id: 2, value: '2-InProgress' }, { id: 3, value: '3-WaitingForBusiness' }, { id: 4, value: '4-Complete' }, { id: 5, value: '5-Cancelled' }, { id: 6, value: '6-OnHold' }, { id: 7, value: '7-UserError' }, { id: 8, value: '8-Other' }];


        var selectedRowIdx = -1;
        $scope.gridOptions = {
            showGridFooter: true,
            //enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            multiSelect: true,
            enableSelectAll: true,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            enableCellEdit: false,
            onRegisterApi: registerGridApi,
            enableFiltering: true,
            enableGridMenu: true,
            exporterMenuCsv: false,
            //Start Exporter
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
            exporterExcelFilename: 'myFile.xlsx',
            exporterExcelSheetName: 'Sheet1',
            //End Exporter

            rowTemplate:
                '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>',
            columnDefs: [
                { field: 'row_id', enableCellEdit: false, displayName: 'ID', type: 'number', cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', width: '7%', visible: false },
                { field: 'ProjectName', width: '20%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'DefectName', displayName: 'TaskName', enableCellEdit: false, width: '20%', cellTooltip: function (row) { return row.entity.DefectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'Priority', width: '10%', enableCellEdit: false, visible: false},
                { field: 'BusReqCompleteDate', displayName: 'BusReqCompleteDate', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.BusReqCompleteDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'Status', width: '10%', enableCellEdit: false, visible: false},
                { field: 'PlanStartDate', displayName: 'PlanStartDate', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.PlanStartDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'PlanCompleteDate', displayName: 'PlannedHours', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.PlanCompleteDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'TestCycle', displayName: 'ActualHours', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TestCycle; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'ProdArea', displayName: 'Dependency', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProdArea; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'PercentResp', displayName: 'Weight', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.TotalOpenTask; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'AssignedTo', width: '7%', enableCellEdit: false, visible: false},
                { field: 'Type', width: '7%', enableCellEdit: false, visible: false},
                { field: 'Comment', width: '20%', enableCellEdit: false, visible:false},
                { field: 'UpdateDateTime', displayName: 'Updated ON', width: '10%', enableCellEdit: false, visible: false}
            ]

        };

        $scope.getFooterValue = function () {
            console.log($scope.gridApi);
            alert($scope.gridApi.grid.options.totalItems);//.getAggregationValue());
            //alert($scope.gridApi.grid.columns[6].getAggregationValue());
            // alert($scope.gridApi.core.getVisibleRows().length);//.getAggregationValue());
            
        };


        $scope.rowFormatter = function (row) {

            return row.entity.Status === '4-Complete';
        };

        function registerGridApi(gridApi) {
            $scope.gridApi = gridApi;
        }

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');


            //console.log(options);
            DefectService.get().success(function (data) {
                if (data === null || data.DefectList === null || data.DefectList.length === 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.DefectList.length
                    );

                    var DefectList = data.DefectList;

                    //console.log(DefectList);

                    $scope.gridOptions.data = DefectList;
                    //console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }
                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; });
            //   . error(function (data) {

            //});
        };



        $scope.loadGrid();

        $scope.FormatDT = function (date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        };

        $scope.getTimeStamp = function (controlname) {
            var d = new Date();
            //sttime = sttime.replace(/,\s?/g, " ");
            //sttime = sttime.split(' ')[0];



            //  var d = new Date(date),
            month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            var sttime = [year, month, day].join('-');

            document.getElementById(controlname).value = sttime;
        };
        $scope.openDIVPopUp = function (nav) {
            console.log(nav);
            document.getElementById('grid').style.width = '100%';
            // document.getElementById('grid').disabled = true;
            $("#grid").attr("disabled", "disabled").off('click');

            if (nav === 'mysidenavRightProjectPopup') {
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
                document.getElementById(nav).style.width = '100%';
            }


            //$scope.tabs[0].gridOptions.data = data;
            //$interval(function () {
            //    $scope.gridApi1.core.handleWindowResize();
            //}, 10, 500);
        };


        $scope.openDIVPop = function (nav) {
            document.getElementById('gridHolder').style.width = '0';

            document.getElementById(nav).style.width = '60%';
        }

        $scope.openDIVMain = function (nav) {
            document.getElementById('gridHolder').style.width = '0';

            document.getElementById(nav).style.width = '60%';
        }
        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;


            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();


            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {  //rowchecked 
                    console.log('push');
                    document.getElementById('ProjectName').value = row.entity.ProjectName;
                    document.getElementById('DefectName').value = row.entity.DefectName;
                    document.getElementById('Priority').value = row.entity.Priority;
                    document.getElementById('PriorityDropdown').value = row.entity.Priority;
                    document.getElementById('Status').value = row.entity.Status;
                    document.getElementById('StatusDropdown').value = row.entity.Status;
                    document.getElementById('Description').value = row.entity.Description;
                    document.getElementById('Type').value = row.entity.Type;
                    document.getElementById('TypeDropdown').value = row.entity.Type;
                    document.getElementById('EnteredBy').value = row.entity.EnteredBy;
                    document.getElementById('EnteredByDropdown').value = row.entity.EnteredBy;
                    document.getElementById('AssignedTo').value = row.entity.AssignedTo;
                    document.getElementById('AssignedToDropdown').value = row.entity.AssignedTo;
                    document.getElementById('Comment').innerHTML = row.entity.Comment;
                    // if (row.entity.PercentResp !== "") {
                    document.getElementById('PercentResp').value = row.entity.PercentResp;
                    //}
                    //else {
                    //    document.getElementById('PercentResp').value = "100";
                    //}
                    ////var str1 = row.entity.Comment;
                    ////$scope.populateImg('Comment', 'Base64Output1', '#photo-id1', str1);

                    document.getElementById('TotalHoursSpentAPPS').value = row.entity.TotalHoursSpentAPPS;
                    document.getElementById('EstStartDateD').value = row.entity.EstStartDate;
                    var d = new Date(row.entity.EstStartDate); // 5 years ago
                    document.getElementById('EstStartDate').value = $scope.FormatDT(d);
                    document.getElementById('EstCompleteDateD').value = row.entity.EstCompleteDate;
                    var e = new Date(row.entity.EstCompleteDate); // 5 years ago
                    document.getElementById('EstCompleteDate').value = $scope.FormatDT(e);
                    document.getElementById('row_id').value = row.entity.row_id;
                    document.getElementById('ProdArea').value = row.entity.ProdArea;
                    document.getElementById('ProdAreaDropdown').value = row.entity.ProdArea;
                    document.getElementById('orgCommittedDate').value = row.entity.TestCycle;
                    document.getElementById('PlanStartDate').value = row.entity.PlanStartDate;
                    document.getElementById('PlanCompleteDate').value = row.entity.PlanCompleteDate;
                    document.getElementById('BusReqCompleteDate').value = row.entity.BusReqCompleteDate;
                    $scope.openModal('TBHolder');
                    $scope.parseDependancy(row.entity.ProdArea);
                    $scope.disableAssigned();
                    var url; //You can get this url dynamically from an ajax request or from a form etc
                    var tot;
                    var tat;
                    var assign;
                    tot = row.entity.TotalOpenTask;
                    tat = row.entity.TotalAssignedTasks;
                    assign = row.entity.AssignedTo;
                    document.getElementById('CopyAssignedToDropdown').value = AssignedTo;



                    url = "app\\Views\\Chart.html?" + "Test1=" + tot + "&Test2=" + tat + "&assign=" + assign;
                    // To Do : A function to populate url with a valid url from any method you prefer.
                    console.log(url);
                    setURL(url);
                    if (document.getElementById('DepID').value !== "") {
                        $scope.loadGridDepAuto();
                    }
                    $scope.TaskInit();
                    if (objarray.indexOf(row.entity.row_id) === -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) !== -1) {
                        console.log("pop");
                        $scope.clearTB();
                        $scope.restore('1');
                        //if(oobjarray has this objectid)
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1);
                    }

            });


            //gridApi.core.on.rowsVisibleChanged($scope, function () {
            //    // match export enabled per row to visible property. This is in order to force export only of filtered data.
            //    gridApi.grid.rows.forEach(function (row) {
            //        row.exporterEnableExporting = row.visible;
            //    });
            //});

        
            gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
                $scope.lastCellEdited = ' ID: ' + rowEntity.row_id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;

                // $scope.lastCellEdited = 
                var id = rowEntity.row_id;
                var colname = colDef.name;
                var colval = newValue;
                DefectService.saveDefect(id, colname, colval);
                console.log('this is ' + $scope.lastCellEdited);
                $scope.$apply();
            });
        };
        $scope.exportCSV = function () {
            var exportService = uiGridExporterService;
            var grid = $scope.gridApi.grid;
            var fileName = "myfile.csv";

            exportService.loadAllDataIfNeeded(grid, uiGridExporterConstants.ALL, uiGridExporterConstants.VISIBLE).then(function () {
                var exportColumnHeaders = exportService.getColumnHeaders(grid, uiGridExporterConstants.VISIBLE);

                $scope.gridApi.selection.selectAllVisibleRows();

                var exportData = exportService.getData(grid, uiGridExporterConstants.SELECTED, uiGridExporterConstants.VISIBLE);
                var csvContent = exportService.formatAsCsv(exportColumnHeaders, exportData, grid.options.exporterCsvColumnSeparator);
                exportService.downloadFile(fileName, csvContent, grid.options.exporterOlderExcelCompatibility);
                $scope.gridApi.selection.clearSelectedRows();
            });
        }
        $scope.cancelModal = function (nav) {
                document.getElementById(nav).style.display = "none";
                //document.getElementById('navModal').value = "";
            };
        $scope.openModal = function (nav) {
                document.getElementById(nav).style.display = 'block';
                
            };
        $scope.deleteDefect = function () {
                console.log('Issue Deleted');
                console.log(objarray);
                DefectService.deleteDefect(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                    $scope.cancelModal('TBHolder');
                });

            };
        $scope.function_one = function (url) {
                var name = 'uname';
                //function function_two(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                // return decodeURIComponent(results[2].replace(/\+/g, " "));
                var uid = decodeURIComponent(results[2].replace(/\+/g, " "))
                $scope.title = uid;
                //alert(uid)
                document.getElementById('LoggedIn').value = uid;   //(decodeURIComponent(results[2].replace(/\+/g, " ")));
                //document.getElementById('LoggedIn').value = regex;
                //}
                // $scope.skillsFunc();
            };
        $scope.function_one();

            

    $scope.function_rowid = function (url) {

        //#####Retrieve ProjectName#####//
        var Pname = 'project';
        //function function_two(name, url) {
        if (!url) url = window.location.href;
        Pname = Pname.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + Pname + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        var pid = decodeURIComponent(results[2].replace(/\+/g, " "))
        // $scope.title = puid;
        //alert(uid)
        // document.getElementById('LoggedIn').value = rid;
        //var job = document.getElementById('ProjectName').value;
        console.log(pid + '=pid');

        document.getElementById('ProjectNameD').value = pid;

    };
    $scope.function_rowid();
    $scope.skillsFunc = function () {
        var job;
        if (document.getElementById('ProjectNameD').value === "") {
            job = document.getElementById('LoggedIn').value;
            console.log(job + '=job');

            $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
                term: job
            };
            document.getElementById('Assigned').value = job; 

        }
        else {
            job = document.getElementById('ProjectNameD').value;
            console.log(job + '=job');
            $scope.gridApi.grid.getColumn('ProjectName').filters[0] = {
                term: job
            };
            document.getElementById('Assigned').value = '';
        }


    };
    $scope.exportDefect = function () {
        console.log('Data Exported');
        console.log(objarray);


        var link = document.createElement("a");
        link.download = "Export.xml";//name;
        link.href = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/GetDefect"; //uri;
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
            documet.body.removeChild(link);
        }, 50);

    };
    $scope.refreshGrid = function () {
        console.log('refresh grid');

        //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
        $scope.loading = true;

        $scope.gridOptions.data = [];

        $timeout(function () {
            $scope.loadGrid();
        }, 1000);
    };

    $scope.GridfromButton = function () {
        $scope.refreshGrid();
    };

    $scope.addMainProject = function () {
        if (document.getElementById('BusReqCompleteDate').value === "" || document.getElementById('BusReqCompleteDate').value === "1900-01-01") { //|| document.getElementById('PlanStartDate'.value) === "" || document.getElementById('PlanStartDate').value === "1900-01-01" || document.getElementById('PlanCompleteDate'.value) === "" || document.getElementById('PlanCompleteDate').value === "1900-01-01") {
            alert('Please enter Business Required date');
        }
        else {
            var ProjectNameValue = document.getElementById('ProjectName').value;
            var DefectNameValue = document.getElementById('DefectName').value;
            var PriorityValue = document.getElementById('Priority').value;
            var StatusValue = document.getElementById('Status').value;
            var DescriptionValue = document.getElementById('Description').value;
            var TypeValue = document.getElementById('Type').value;
            var TestCycleValue = document.getElementById('orgCommittedDate').value;
            var EnteredByValue = document.getElementById('EnteredByDropdown').value;
            var AssignedToValue = document.getElementById('AssignedToDropdown').value;
            var CommentValue = document.getElementById('Comment').innerHTML + '<img src=' + document.getElementById('Base64Output1').value + '>';
            var TotalHoursSpentAPPSValue = document.getElementById('TotalHoursSpentAPPS').value;
            var EstStartDateValue = document.getElementById('EstStartDate').value;
            var EstCompleteDateValue = document.getElementById('EstCompleteDate').value;
            var row_idValue = document.getElementById('row_id').value;
            var ProdAreaValue = document.getElementById('DepID').value + ':' + document.getElementById('DepTask').value + ':' + document.getElementById('DepStatus').value;
            var PercentRespValue = document.getElementById('PercentResp').value;
            var PlanStartDateValue = document.getElementById('PlanStartDate').value;
            var PlanCompleteDateValue = document.getElementById('PlanCompleteDate').value;
            var BusReqCompleteDateValue = document.getElementById('BusReqCompleteDate').value;

            //console.log('New Issue Added');
                    
            DefectService.addDefect(ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TypeValue, TestCycleValue, EnteredByValue, AssignedToValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue, ProdAreaValue, PercentRespValue, PlanStartDateValue,PlanCompleteDateValue, BusReqCompleteDateValue).success(function (data) {

                    //if (document.getElementById('Type').value != 'ChangeRequest')
                    //{
                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                    document.getElementById('ProjectName').value = "";
                    document.getElementById('DefectName').value = "";
                    document.getElementById('Priority').value = "";
                    document.getElementById('PriorityDropdown').value = "SelectPriority";
                    document.getElementById('Status').value = "";
                    document.getElementById('StatusDropdown').value = "SelectStatus";
                    document.getElementById('Description').value = "";
                    document.getElementById('Type').value = "";
                    document.getElementById('TypeDropdown').value = "SelectType";
                    document.getElementById('TestCycle').value = "";
                    document.getElementById('EnteredBy').value = "";
                    document.getElementById('EnteredByDropdown').value = "SelectRequestor";
                    document.getElementById('AssignedTo').value = "";
                    document.getElementById('AssignedToDropdown').value = "SelectAssignee";
                    document.getElementById('Comment').innerHTML = "";
                    //document.getElementById('1').innerHTML = "";
                    document.getElementById('TotalHoursSpentAPPS').value = "";
                    document.getElementById('EstStartDate').value = "";
                    document.getElementById('EstCompleteDate').value = "";
                    document.getElementById('row_id').value = "";
                    document.getElementById('ProdArea').value = "";
                    document.getElementById('ProdAreaDropdown').value = "";
                    document.getElementById('PercentResp').value = "";
                    document.getElementById('CopyAssignedToDropdown').value = "SelectAssignee";
                    document.getElementById('wtN').value = "";
                    document.getElementById('wtC').value = "";
                    document.getElementById('PlanStartDate').value = "";
                    document.getElementById('PlanCompleteDate').value = "";
                    document.getElementById('BusReqCompleteDate').value = "";
                        
                    $scope.cancelModal('TBHolder');
                });


        }
    };

            


    $scope.copyOfTask = function () {

        if (document.getElementById('BusReqCompleteDate').value === "" || document.getElementById('BusReqCompleteDate').value === "1900-01-01") {//(document.getElementById('EstStartDate').value === "" || document.getElementById('EstStartDate').value === "1900-01-01" || document.getElementById('EstCompleteDate'.value) === "" || document.getElementById('EstCompleteDate').value === "1900-01-01") {

            alert('Please enter Business Req.Date');
        }
        else {
            var ProjectNameValue = document.getElementById('ProjectName').value;
            var DefectNameValue = document.getElementById('DefectName').value;
            var PriorityValue = document.getElementById('Priority').value;
            var StatusValue = document.getElementById('Status').value;
            var DescriptionValue = document.getElementById('Description').value;
            var TypeValue = document.getElementById('Type').value;
            var TestCycleValue = document.getElementById('orgCommittedDate').value;
            var EnteredByValue = document.getElementById('EnteredByDropdown').value;
            var AssignedToValue = document.getElementById('AssignedToDropdown').value;
            var CommentValue = document.getElementById('Comment').innerHTML + '<img src=' + document.getElementById('Base64Output1').value + '>';
            var TotalHoursSpentAPPSValue = document.getElementById('TotalHoursSpentAPPS').value;
            var EstStartDateValue = document.getElementById('EstStartDate').value;
            var EstCompleteDateValue = document.getElementById('EstCompleteDate').value;
            var row_idValue = document.getElementById('row_id').value;
            var ProdAreaValue = document.getElementById('DepID').value + ':' + document.getElementById('DepTask').value + ':' + document.getElementById('DepStatus').value;
            document.getElementById('PercentResp').value = document.getElementById('wtC').value;
            var PercentRespValue = document.getElementById('PercentResp').value;
            var PlanStartDateValue = document.getElementById('PlanStartDate').value;
            var PlanCompleteDateValue = document.getElementById('PlanCompleteDate').value;
            var BusReqCompleteDateValue = document.getElementById('BusReqCompleteDate').value;

            DefectService.addDefect(ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TypeValue, TestCycleValue, EnteredByValue, AssignedToValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue, ProdAreaValue, PercentRespValue, PlanStartDateValue, PlanCompleteDateValue, BusReqCompleteDateValue).success(function (data) {
                $scope.loadGrid();

            });

            var val = document.getElementById('DefectName').value;
            document.getElementById('DefectName').value = val;
            document.getElementById('PercentResp').value = document.getElementById('wtN').value;
            PercentRespValue = document.getElementById('PercentResp').value;

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            document.getElementById('EstStartDate').value = today;

            if (document.getElementById('CopyAssignedToDropdown').value !== "") {
                document.getElementById('row_id').value = "";
                row_idValue = document.getElementById('row_id').value;
                document.getElementById('AssignedToDropdown').value = document.getElementById('CopyAssignedToDropdown').value;
                AssignedToValue = document.getElementById('CopyAssignedToDropdown').value;
                TestCycleValue = '0';
                //$scope.addMainProject();
                DefectService.addDefect(ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TypeValue, TestCycleValue, EnteredByValue, AssignedToValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue, ProdAreaValue, PercentRespValue, PlanStartDateValue, PlanCompleteDateValue, BusReqCompleteDateValue).success(function (data) {
                    $scope.loadGrid();
                    $scope.clearFilters();
                    //$scope.skillsFunc();
                    //job = document.getElementById('ProjectNameD').value;
                    //console.log(ProjectNameValue + '=job');
                    $scope.gridApi.grid.getColumn('ProjectName').filters[0] = {
                        term: ProjectNameValue
                    };


                });
            }
            else {
                //document.getElementById('CopyAssignedToDropdown').value = document.getElementById('LoggedIn').value;
                alert('Please select Assignment');
            }
            $scope.cancelModal('CopyPopup');
                $scope.cancelModal('TBHolder');
        }
    };

    $scope.populateCopyPers = function () {
        document.getElementById('wtC').value = '50';
        document.getElementById('wtN').value = '50';
    };

    $scope.AreaList = null;
    $scope.listArea = function () {

        var prjname = [];
        DefectService.listArea().success(function (data) {
            //  console.log('Listed Ongoing Projects' + data.listProjectList[0]);

            var prjlist = JSON.stringify(data);

            var JSONObject = JSON.parse(prjlist);
            //console.log(JSONObject["listProjectList"].length);
            for (var i = 0; i < JSONObject["listArea"].length; i++) { //in JSONObject["listProjectList"][0]["ProjectName"]) {
                prjname.push(JSONObject["listArea"][i]["AreaName"]);
                //console.log(prjname);
            }
            $scope.AreaList = prjname;
            // console.log($scope.ProjectsList);
            //$scope.loadGrid();
        });
    };
    $scope.listArea();


    $scope.undoUpdate = function () {


        // $scope.gridApi.core.refresh();
        $scope.loadGrid();
        document.getElementById('ProjectName').value = "";
        document.getElementById('DefectName').value = "";
        document.getElementById('Priority').value = "";
        document.getElementById('PriorityDropdown').value = "SelectPriority";
        document.getElementById('Status').value = "";
        document.getElementById('StatusDropdown').value = "SelectStatus";
        document.getElementById('Description').value = "";
        document.getElementById('Type').value = "";
        document.getElementById('TypeDropdown').value = "SelectType";
        document.getElementById('TestCycle').value = "";
        document.getElementById('EnteredBy').value = "";
        document.getElementById('EnteredBy').value = "SelectRequestor";
        document.getElementById('AssignedTo').value = "";
        document.getElementById('AssignedTo').value = "SelectAssignee";
        document.getElementById('Comment').innerHTML = "";
        //document.getElementById('1').innerHTML = "";
        document.getElementById('TotalHoursSpentAPPS').value = "";
        document.getElementById('EstStartDate').value = "";
        document.getElementById('EstStartDateD').value = "";
        document.getElementById('EstCompleteDate').value = "";
        document.getElementById('EstCompleteDateD').value = "";
        document.getElementById('row_id').value = "";
        document.getElementById('ProdArea').value = "";
        document.getElementById('DepTask').value = "";
        document.getElementById('DepID').value = "";
        document.getElementById('DepStatus').value = "";

    };
    $scope.clearFilters = function () {
        console.log('Clear Filters');
        $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
    };
    $scope.clearTB = function () {
        document.getElementById('ProjectName').value = '';
        document.getElementById('DefectName').value = '';
        document.getElementById('Priority').value = '';
        document.getElementById('PriorityDropdown').value = '';
        document.getElementById('Status').value = '';
        document.getElementById('StatusDropdown').value = '';
        document.getElementById('Description').value = '';
        document.getElementById('Type').value = '';
        document.getElementById('TypeDropdown').value = '';
        document.getElementById('TestCycle').value = '';
        document.getElementById('EnteredBy').value = '';
        document.getElementById('EnteredByDropdown').value = '';
        document.getElementById('AssignedTo').value = '';
        document.getElementById('AssignedToDropdown').value = '';
        document.getElementById('Comment').innerHTML = '';
        document.getElementById('TotalHoursSpentAPPS').value = '';
        document.getElementById('EstStartDateD').value = '';
        document.getElementById('EstCompleteDateD').value = '';
        document.getElementById('EstStartDate').value = "";
        document.getElementById('EstCompleteDate').value = "";
        document.getElementById('row_id').value = '';
        document.getElementById('ProdArea').value = '';
        document.getElementById('ProdAreaDropdown').value = '';
        document.getElementById('Base64Output1').value = '';
        document.getElementById('photo-id1').src = '';
        document.getElementById('photo-upload').src = '';
        document.getElementById('imgElem1').src = '';
        document.getElementById('Chart').src = '';
        document.getElementById('orgCommittedDate').src = '';
        document.getElementById('DepTask').value = "";
        document.getElementById('DepID').value = "";
        document.getElementById('DepStatus').value = "";
        document.getElementById('PercentResp').innerHTML = "";
        document.getElementById("AssignedToDropdown").disabled = false;
        document.getElementById('PlanStartDate').value = "";
        document.getElementById('PlanCompleteDate').value = "";
        document.getElementById('BusReqCompleteDate').value = "";
    };

    $scope.swipe = function () {
        //var largeImage = document.getElementById('photo-id1');
        //$scope.maximize('1');
        //largeImage.style.display = 'block';
        //largeImage.style.width = 400 + "px";
        //largeImage.style.height = 400 + "px";
        // var url = largeImage.getAttribute('src');
        var url = document.getElementById('Base64Output1').value;

        //window.open(url, 'Image', 'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
        //window.open(document.getElementById('Base64Output1').value);

        var w = window.open('about:blank');

        setTimeout(function () { //FireFox seems to require a setTimeout for this to work.
            w.document.body.appendChild(w.document.createElement('img'))
                .src = url;
        }, 0);
    };

    //#####Date Time Picker Event######//
    //#####Bootstrap tRYOUTs####////
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };



            $scope.options = {
                customClass: getDayClass,
                minDate: new Date(),
                showWeeks: true
            };

            $scope.start = function () {
                if (document.getElementById('StatusDropdown').value === '1-InQueue' || document.getElementById('StatusDropdown').value === '0-Entry') {
                    if (document.getElementById('BusReqCompleteDate').value !== '' && document.getElementById('PlanStartDate').value !== '' && document.getElementById('PlanCompleteDate').value !== '') {
                        document.getElementById('StatusDropdown').value = '2-InProgress';
                        document.getElementById('Status').value = '2-InProgress';
                        document.getElementById('PlanCompleteDate').disabled= true;
                        document.getElementById('PlanStartDate').disabled= true;
                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = today.getFullYear();
                        today = mm + '/' + dd + '/' + yyyy;
                        document.getElementById('EstStartDate').value = today;
                        document.getElementById('EstCompleteDate').value = "";
                        document.getElementById('btnStart').innerHTML = 'Complete';
                    }
                    else {
                        alert('BusReqdDate, Estmated Start, and estimated hours MISIING');
                    }
                }
                else if (document.getElementById('StatusDropdown').value === '2-InProgress') {
                    if (document.getElementById('BusReqCompleteDate').value !== '' && document.getElementById('PlanStartDate').value !== '' && document.getElementById('PlanCompleteDate').value !== '') {
                        document.getElementById('StatusDropdown').value = '4-Complete';
                        document.getElementById('Status').value= '4-Complete';
                        var todayC = new Date();
                        var ddC = String(todayC.getDate()).padStart(2, '0');
                        var mmC = String(todayC.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyyC = todayC.getFullYear();
                        todayC = mmC + '/' + ddC + '/' + yyyyC;
                        document.getElementById('EstCompleteDate').value = todayC;
                        //document.getElementById('EstCompleteDate').value = $scope.today();
                        document.getElementById('btnStart').innerHTML = 'Start';
                        
                    }
                    else {
                        alert('BusReqdDate, Estmated Start, and estimated hours MISIING');
                    }
                }
                else {
                    alert(' STATUS has to be INQueue for it to start');
                }
                $scope.TaskInit();
            };

            $scope.TaskInit = function () {

                if (document.getElementById('StatusDropdown').value === '2-InProgress') {
                    document.getElementById('2').style.pointerEvents = 'auto';
                    document.getElementById('7').style.backgroundColor = 'darkslategrey';
                    //document.getElementById('2').style.backgroundColor = 'lightgreen';
                    document.getElementById('PlanCompleteDate').disabled = true;
                    document.getElementById('PlanStartDate').disabled = true;
                    document.getElementById('btnStart').innerHTML = 'Complete';
                    document.getElementById('btnStart').style.display = 'block';
                    document.getElementById('EstCompleteDate').value = "";
                    document.getElementById('orgCommittedDate').style.backgroundColor = 'white';
                    document.getElementById('orgCommittedDate').style.color = 'black';
                    document.getElementById('orgCommittedDate').disabled = false;
                }
                else if (document.getElementById('StatusDropdown').value === '4-Complete') {
                    document.getElementById('2').style.pointerEvents = 'none';
                    document.getElementById('7').style.backgroundColor = 'darkgreen';
                    document.getElementById('orgCommittedDate').style.backgroundColor = 'black';
                    document.getElementById('orgCommittedDate').style.color = 'white';
                    document.getElementById('orgCommittedDate').disabled = true;
                }
                else {
                    document.getElementById('2').style.pointerEvents = 'auto';
                    document.getElementById('7').style.backgroundColor = 'black';
                        document.getElementById('PlanCompleteDate').disabled = false;
                        document.getElementById('PlanStartDate').disabled = false;
                        document.getElementById('btnStart').innerHTML = 'Start';
                    document.getElementById('btnStart').style.display = 'block';
                    document.getElementById('orgCommittedDate').style.backgroundColor = 'black';
                    document.getElementById('orgCommittedDate').style.color = 'white';
                    document.getElementById('orgCommittedDate').disabled = true;
                }

                
                if (document.getElementById('LoggedIn').value !== document.getElementById('AssignedToDropdown').value) {
                    document.getElementById('btnStart').style.display = "none";
                    //document.getElementById("btnStart").style.visibility = "hidden";
                }
                else {
                    document.getElementById('btnStart').style.display = "block";
                    //document.getElementById("btnStart").style.visibility = "visible";
                }
                
            };
            $scope.TaskInit();

            // Disable weekend selection
            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }

            $scope.toggleMin = function () {
                $scope.options.minDate = $scope.options.minDate ? null : new Date();
            };

            $scope.toggleMin();

            $scope.setDate = function (year, month, day) {
                $scope.dt = new Date(year, month, day);
            };

            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date(tomorrow);
            afterTomorrow.setDate(tomorrow.getDate() + 1);
            $scope.events = [
                {
                    date: tomorrow,
                    status: 'Full'
                }
                ,
                {
                    date: afterTomorrow,
                    status: 'Partial'
                }
            ];

            function getDayClass(data) {
                var date = data.date,
                    mode = data.mode;
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < $scope.events.length; i++) {
                        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);



                        //##### PARTIAL Calendar Display #####////

                        //if (dayToCheck >= currentDay) {

                        //    return $scope.events[i].status;
                        //}
                        //##### PARTIAL Calendar Display #####////    


                        //##### FULL Calendar Display #####////
                        if (dayToCheck === currentDay) {

                            return $scope.events[i].status;
                        }
                        //##### FULL Calendar Display #####////



                    }
                }

                return '';
            }
            //#####Bootstrap tRYOUTs####////

            $scope.seldate = function () {

                var frm = document.getElementById("initformFull").value;
                var selday = document.getElementById("SelectedDateFull").innerHTML;

                document.querySelector(frm).value = $scope.FormatDT(selday);
                //if (frm == '#date') {
                //    document.getElementById('EntryDate').value = $scope.FormatDT(selday);
                //}
                document.getElementById("mysidenavRightCalendarFull").style.display = 'none';

                // $scope.refreshPostDateChange();


            };

          
            $scope.FormatDT = function (date) {
                var d = new Date(date),


                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                return [year, month, day].join('-');
                //return [month, day, year].join('/');

                //   date: new Date(),
                //   time: new Date($filter('d')(new Date(), 'yyyy-MM-dd HH:mm'))


            };

            $scope.getTimeStamp = function (controlname) {
                var d = new Date();

                month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();
                hr = d.getHours();
                mn = d.getMinutes();
                sc = d.getSeconds();


                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                var sttime = [month, day, year].join('/');
                var sttime2 = [hr, mn, sc].join(':');

                document.getElementById(controlname).value = sttime + ' ' + sttime2;

                $scope.showUndo();
            };

            //#####Date Time Picker Event######//




            $scope.OpenCalendar = function (nav) {
                // $scope.closeAll();
                document.getElementById("mysidenavRightCalendarFull").style.display = 'inline-block';
                //document.getElementById(nav).style.width = "95%";
                document.getElementById("mysidenavRightCalendarFull").style.zIndex = "999";
                document.getElementById("initformFull").value = nav;


            };

            $scope.wasClicked = function () {
                console.log('I was clicked!');
            };

        $scope.goPrevious = function () {

            var currentRowIndex;
            var selectedRows = $scope.gridApi.selection.getSelectedRows();
            if (selectedRows.length < 1) {
                // if nothing selected, we'll select the top row
                currentRowIndex = -1;
            } else {
                // if there are multiple selected, we use the first one
                var selectedRow = selectedRows[0];
                var gridRow = $scope.gridApi.grid.getRow(selectedRow);
                currentRowIndex = $scope.gridApi.grid.renderContainers.body.visibleRowCache.indexOf(gridRow);
            }

            $scope.gridApi.selection.clearSelectedRows();
            $scope.gridApi.selection.selectRow($scope.gridApi.grid.renderContainers.body.visibleRowCache[currentRowIndex - 1].entity);


        };
        $scope.goNext = function () {
           


            
                var currentRowIndex;
                var selectedRows = $scope.gridApi.selection.getSelectedRows();
                if (selectedRows.length < 1) {
                    // if nothing selected, we'll select the top row
                    currentRowIndex = -1;
                } else {
                    // if there are multiple selected, we use the first one
                    var selectedRow = selectedRows[0];
                    var gridRow = $scope.gridApi.grid.getRow(selectedRow);
                    currentRowIndex = $scope.gridApi.grid.renderContainers.body.visibleRowCache.indexOf(gridRow);
                }

                $scope.gridApi.selection.clearSelectedRows();
                $scope.gridApi.selection.selectRow($scope.gridApi.grid.renderContainers.body.visibleRowCache[currentRowIndex + 1].entity);
            

        };


        $scope.showComments = function () {
            //$scope.columnDefs[12].visible = true;
            
              //  this.columns.push({ field: 'Comment', enableSorting: false });
            if (document.getElementById('checkComment').checked === true) {
                $scope.gridOptions.columnDefs[8].visible = true;
                $scope.gridOptions.columnDefs[9].visible = true;
                $scope.gridOptions.columnDefs[10].visible = true;
                $scope.gridOptions.columnDefs[13].visible = true;
            }
            else {
                $scope.gridOptions.columnDefs[8].visible = false;
                $scope.gridOptions.columnDefs[9].visible = false;
                $scope.gridOptions.columnDefs[10].visible = false;
                $scope.gridOptions.columnDefs[13].visible = false;
            }
            
            $scope.gridApi.grid.refresh();
        };


        $scope.GridDisplayStatus = function (i,j) {
            if (document.getElementById(j).checked === true) {
                $scope.gridOptions.columnDefs[i].visible = true;
                $scope.gridApi.grid.refresh();
            }
            else {
                $scope.gridOptions.columnDefs[i].visible = false;
                $scope.gridApi.grid.refresh();
            }
                
           
        };

        $scope.CheckGridBoxes = function () {
            //$(".check").click(function () {
            //    $("#c0").prop("checked", true);
            //});

            var i;
            for ( i = 0; i < 15; i++) {
                var txtA = 'c' + i;
                var txt = '#c' + i;
                document.getElementById(txtA).checked=true;

                if (document.getElementById(txtA).checked === true) {
                    $scope.gridOptions.columnDefs[i].visible = true;
                }
                else {
                    $scope.gridOptions.columnDefs[i].visible = false;
                }
            }
        };

        $scope.CheckGridBoxes();

        $scope.SelectAssigned = function () {
            $scope.clearFilters();
            var job = document.getElementById('Assigned').value;
            //job = $scopestripLeadingZerosDate(job);
            $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
                term: job
            };
            var jobS;
            if (job !== '')
            {
                jobS = '2-InProgress';
                $scope.gridApi.grid.getColumn('Status').filters[0] = {
                    term: jobS
                };
                document.getElementById('Stat').value = '2-InProgress';
            }
            else {
                jobS = '';
                $scope.gridApi.grid.getColumn('Status').filters[0] = {
                    term: jobS
                };

                document.getElementById('Stat').value = jobS;
            }

        };
        $scope.SelectStatus = function () {
            //$scope.clearFilters();
            var job = document.getElementById('Stat').value;
            //job = $scopestripLeadingZerosDate(job);
            $scope.gridApi.grid.getColumn('Status').filters[0] = {
                term: job
            };

        };
        $scope.SelectTODAYYES2 = function () {
                //$scope.clearFilters();
            var job1 = document.getElementById('SelectTODAYYES2').value;
            var job;
            var dT = document.getElementById("DtTm").value;
            var d = new Date(dT);
            if (job1 === 'Today') {
                 //d = new Date();
                month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month =  month;
                if (day.length < 2) day =  day;
                job = [month, day, year].join('/');
                $scope.gridApi.grid.getColumn('UpdateDateTime').filters[0] = {
                    term: job
                };
            }
            else if (job1 === 'Yesterday') {
               
                    month = '' + (d.getMonth() + 1),
                    day = '' + (d.getDate() - 1),
                    year = d.getFullYear();

                if (month.length < 2) month =  month;
                if (day.length < 2) day = day;
                job = [month, day, year].join('/');
                $scope.gridApi.grid.getColumn('UpdateDateTime').filters[0] = {
                    term: job
                };

            }
            else if (job1 === '2DaysAgo') {
                 
                month = '' + (d.getMonth() + 1),
                    day = '' + (d.getDate() - 2),
                    year = d.getFullYear();

                if (month.length < 2) month =  month;
                if (day.length < 2) day =  day;
                job = [ month, day, year].join('/');
                $scope.gridApi.grid.getColumn('UpdateDateTime').filters[0] = {
                    term: job
                };

            }
            else {
                job = '';
                        $scope.gridApi.grid.getColumn('UpdateDateTime').filters[0] = {
                            term: job
                        };

                  }

        };


        $scope.DtTm = function ()
        {
            var d = new Date();
            document.getElementById("DtTm").value=d;
        };
        $scope.DtTm();

        //############################################ cOPY pASTE iMAGE INTO A DIV#############################



        //new copy image to div approach
        document.getElementById('Comment').onpaste = function (event) {
            // use event.originalEvent.clipboard for newer chrome versions
            var items = (event.clipboardData || event.originalEvent.clipboardData).items;
            console.log(JSON.stringify(items)); // will give you the mime types
            // find pasted image among pasted items
            var blob = null;
            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") === 0) {
                    blob = items[i].getAsFile();
                }
            }
            // load image if there is a pasted image
            if (blob !== null) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    console.log(event.target.result); // data url!
                    //document.getElementById("pastedImage").src = event.target.result;
                    document.getElementById("Base64Output1").value = event.target.result;
                    var elem = document.createElement("img");
                    elem.setAttribute("src", event.target.result);
                    //elem.setAttribute("height", "50");
                    //elem.setAttribute("width", "100");
                    //elem.setAttribute("alt", "Flower");
                    document.getElementById("Comment").appendChild(elem);


                };
                reader.readAsDataURL(blob);
            }
        }
        //end new copy image to div approach



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

        $scope.DIVtoCANVAS = function () {
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

        //## Grid Adjust####################//

        $scope.randomSize = function (nav, ty) {
            var newHeight; //= Math.floor(Math.random() * (300 - 100 + 1) + 300);
            var newWidth; //= Math.floor(Math.random() * (600 - 200 + 1) + 200);
            if ($(window).width() < 600) {
                if (ty === 'hs') {
                    //newHeight = 85;
                    newHeight = $(window).height() - $(window).height() * 0.7;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.4;
                }
                //newWidth = 400;
                newWidth = $(window).width() - $(window).width() * 0.08;
                // document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 1300) {
                if (ty === 'hs') {
                    //newHeight = 85;
                    newHeight = $(window).height() - $(window).height() * 0.08;
                }
                else {
                    //newHeight = 40;
                    newHeight = $(window).height() - $(window).height() * 0.04;
                }
                //newWidth = 1200;
                newWidth = $(window).width() - $(window).width() * 0.08;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 2000) {
                if (ty === 'hs') {
                    newHeight = $(window).height() - $(window).height() * 0.04;
                }
                else {
                    //newHeight = 40;
                    newHeight = $(window).height() - $(window).height() * 0.04;
                }
                // newWidth = 1800;
                newWidth = $(window).width();// - $(window).width() * 0.02;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }

            else {
                if (ty === 'hs') {
                    newHeight = $(window).height() - $(window).height() * 0.07;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.05;
                }
                //newWidth = 1800;
                newWidth = $(window).width() - $(window).width() * 0.08;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }

            angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'px');
            angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'px');



        };



        $scope.ScrAdjust = function () {

            $scope.randomSize('grid', 'hs');
            $scope.randomSize('gridDep', 'hs');
        };



        //## END Grid Adjust####################//
        //######################Calendar Event###########################//

        $scope.calendardate = function (nav) {


            $(nav).datepicker();


        };
        $(function () {
            $("#EstStartDate").datepicker();
            $("#EstCompleteDate").datepicker();
            $("#PlanStartDate").datepicker();
           // $("#PlanCompleteDate").datepicker();
            $("#BusReqCompleteDate").datepicker();

        });

        //######################END Calendar Event###########################//
        //#########BOLD Italics Underline
        $(document).ready(function () {
            $('#jBold').click(function () {
                document.execCommand('bold');
            });

        });
        $(document).ready(function () {
            $('#jItalic').click(function () {
                document.execCommand('italic');
            });
        });
        $(document).ready(function () {
            $('#jUnderline').click(function () {
                document.execCommand('underline');
            });
        });
        //##END BOLD Italics Underline

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


        $scope.getSecondPart = function (str) {
            // function you can use:

            return str.split('<img src=')[0];

            // use the function:

        };

        //alert($scope.getSecondPart("sometext $#$: 20202")); 

        $scope.ChooseAssignedTo = function (data) {
            //if (document.getElementById("LoggedIn").value === document.getElementById("AssignedToDropdown").value || document.getElementById("LoggedIn").value === "hasanif" || document.getElementById("LoggedIn").value === "haywood") {
            document.getElementById("AssignedTo").value = data.value;
            //}
            //else {
            //   alert('Not Authorized');
            //}
        };


        $scope.disableAssigned = function () {
            if (document.getElementById("LoggedIn").value === "hasanif" || document.getElementById("LoggedIn").value === "haywood" || document.getElementById("AssignedToDropdown").value === "") {
                document.getElementById("AssignedToDropdown").disabled = false;
            }
            else {
                document.getElementById("AssignedToDropdown").disabled = true;
            }
        };



        $scope.uploadFile = function (input, imgElem, Base64Output) {


            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                reader.onload = function (e) {

                    // $(imgElem).attr('src', e.target.result);
                    document.getElementById("Base64Output1").value = event.target.result;
                    var elem = document.createElement("img");
                    elem.setAttribute("src", event.target.result);
                    document.getElementById("Comment").appendChild(elem);








                };


            }




        };

        $scope.populateImg = function (mydiv, Base64Output, photoid, str) {
            document.getElementById(mydiv).innerHTML = str.split('<img src=')[0];
            document.getElementById(Base64Output).value = str.split('<img src=')[1];
            var ImageBox = document.getElementById(Base64Output).value;
            $(photoid).attr("src", ImageBox);

            // $scope.paste();

        };
        $scope.popSummary = function () {
            document.getElementById('mysidenavRightProd').style.width = '0';
        };


        $scope.paste = function () {

            var sRetrieveData = clipboardData.getData("Text");
            document.getElementById('Comment').value = sRetrieveData;
            //var img = IEWIN ? new Image() : document.createElement('img');
            //img.src = sRetrieveData;

        }


        $scope.maximize = function (nav) {
            // document.getElementById('TBHolder').style.display = "none";
            document.getElementById('1').style.display = "none";
            document.getElementById('2').style.display = "none";
            document.getElementById('3').style.display = "none";
            document.getElementById('4').style.display = "none";
            document.getElementById('5').style.display = "none";
            document.getElementById('6').style.display = "none";
            document.getElementById('7').style.display = "none";
            document.getElementById(nav).style.display = "block";
            document.getElementById(nav).style.width = "100%";
            document.getElementById(nav).style.height = "625px";
            document.getElementById('Comment').style.width = "90%";
            document.getElementById('Comment').style.height = "90%";
            //}
            //nav++;
        };

        $scope.restore = function (nav) {

            document.getElementById('TBHolder').style.display = "block";
            document.getElementById('1').style.display = "block";
            document.getElementById('2').style.display = "block";
            document.getElementById('3').style.display = "block";
            document.getElementById('4').style.display = "block";
            document.getElementById('5').style.display = "block";
            document.getElementById('6').style.display = "block";
            document.getElementById('7').style.display = "block";
            document.getElementById(nav).style.width = "100%";
            document.getElementById(nav).style.height = "30%";

        };




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
            img.src = document.getElementById('my-div').innerHTML;
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


        addEventListener("click", function () {
            var
                el = document.documentElement
                , rfs =
                    el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                ;
            rfs.call(el);
            $scope.ScrAdjust();
        });



        //#################End Full Screen Mode #### ///////////////////

        //################# Dependancy ##############//
        $scope.gridOptionsDep = {
            showGridFooter: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            enableCellEdit: false,
            enableFiltering: true,
            enableGridMenu: false,
            modifierKeysToMultiSelect: true,
            enableColumnResize: true,
            enableColumnReordering: true,
            


            rowTemplate:
                '<div ng-class="{ \'grey\':gridDep.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>',
            columnDefs: [
                { field: 'row_id', enableCellEdit: false, displayName: 'ID', type: 'number', cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', width: '7%' },
                { field: 'ProjectName', width: '20%', enableFiltering: false, enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DefectName', displayName: 'TaskName', enableCellEdit: false, width: '20%', cellTooltip: function (row) { return row.entity.DefectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'Type', width: '12%', enableCellEdit: false

                },
                {
                    field: 'AssignedTo', width: '10%', enableCellEdit: false

                },

                {
                    field: 'Priority', width: '15%', enableCellEdit: false,

                },
                {
                    field: 'Status', width: '15%', enableCellEdit: false

                },
                { field: 'TestCycle', displayName: 'OrigComplDate', enableCellEdit: false, width: '15%', cellTooltip: function (row) { return row.entity.TestCycle; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }

            ]
            
        };


        $scope.rowFormatter = function (row) {

            return row.entity.Status === '4-Complete';
        };



        $scope.loadGridDep = function () {
            $scope.loading = true;
            


            //console.log(options);
            DefectService.get().success(function (data) {
                if (data === null || data.DefectList === null || data.DefectList.length === 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.DefectList.length
                    );

                    var DefectList = data.DefectList;
                    $scope.gridOptionsDep.data = DefectList;
                    
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });


           
            
        };



        $scope.loadGridDep();

        
        $scope.gridOptionsDep.onRegisterApi = function (gridApiDep) {
            $scope.gridApiDep = gridApiDep;

           // gridApiDep.grid.registerRowsProcessor($scope.singleFilter, 200);

            $scope.mySelectedRows = $scope.gridApiDep.selection.getSelectedRows();

            var objarray = [];
            gridApiDep.selection.on.rowSelectionChanged($scope, function (row) {
            //    console.log('row selected ' + row.entity.ProdArea);
               


                if (row.isSelected) {
                    document.getElementById('DepTask').value = row.entity.DefectName;
                    document.getElementById('DepStatus').value = row.entity.Status;
                    document.getElementById('DepID').value = row.entity.row_id;
                    $scope.cancelModal('TBHolderDep');


                    if (objarray.indexOf(row.entity.row_id) === -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) !== -1) {
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1);
                    }

            });


        };


        $scope.refreshGridDep = function () {
            $scope.loading = true;
            $scope.gridOptionsDep.data = [];

            $timeout(function () {
                $scope.loadGridDep();
            }, 1000);
        };

        $scope.GridfromButtonDep = function () {
            $scope.refreshGridDep();
            proj = document.getElementById('ProjectName').value;
            $scope.gridApiDep.grid.getColumn('ProjectName').filters[0] = {
                term: proj
            };
        };



        $scope.parseDependancy = function (str) {
            //var string0 = "Hello how are =you =now";
            string0 = str.substr(0, str.indexOf(':'));
            string1 = str.split(':')[1];
            string2 = str.split(':')[2];

            document.getElementById('DepID').value = string0;
            document.getElementById('DepTask').value = string1;
            document.getElementById('DepStatus').value = string2;

            
        };

        $scope.getDepStatus = function (val) {
            //if (document.getElementById('DepID').value !== '') {
                
            //}
            $scope.openModal('TBHolderDep');
            $scope.GridfromButtonDep();
            if (document.getElementById('DepID').value !== "") {
                
                idDep = document.getElementById('DepID').value;
                $scope.gridApiDep.grid.getColumn('row_id').filters[0] = {
                    term: idDep
                };

              
                

            }
            //$timeout(function () {
                    

            //        if ($scope.gridApiDep.selection.selectRow) {
            //            $scope.gridApiDep.selection.selectRow($scope.gridOptionsDep.data[0]);
            //        }
            //    });
            

        };

        


        //################# End Dependancy ##########//

        //################# DepAutoendancy Auto ##############//
        $scope.gridOptionsDepAuto = {
            showGridFooter: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            enableCellEdit: false,
            enableFiltering: true,
            enableGridMenu: false,
            modifierKeysToMultiSelect: true,
            enableColumnResize: true,
            enableColumnReordering: true,



            rowTemplate:
                '<div ng-class="{ \'grey\':gridDepAuto.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>',
            columnDefs: [
                { field: 'row_id', enableCellEdit: false, displayName: 'ID', type: 'number', cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', width: '7%' },
                { field: 'ProjectName', width: '20%', enableFiltering: false, enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DefectName', displayName: 'TaskName', enableCellEdit: false, width: '20%', cellTooltip: function (row) { return row.entity.DefectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'Type', width: '12%', enableCellEdit: false

                },
                {
                    field: 'AssignedTo', width: '10%', enableCellEdit: false

                },

                {
                    field: 'Priority', width: '15%', enableCellEdit: false

                },
                {
                    field: 'Status', width: '15%', enableCellEdit: false

                },
                { field: 'TestCycle', displayName: 'OrigComplDate', enableCellEdit: false, width: '15%', cellTooltip: function (row) { return row.entity.TestCycle; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' }

            ]

        };






        $scope.loadGridDepAuto = function () {
            $scope.loading = true;



            //console.log(options);
            DefectService.get().success(function (data) {
                if (data === null || data.DefectList === null || data.DefectList.length === 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.DefectList.length
                    );

                    var DefectList = data.DefectList;
                    $scope.gridOptionsDepAuto.data = DefectList;

                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });




        };



     //   $scope.loadGridDepAuto();

        $scope.filter = function () {
            $scope.gridApiDepAuto.grid.refresh();
        };


        $scope.singleFilter = function (renderableRows) {
            //console.log(row);
            //var matcher = new RegExp($scope.filterValue);

            var matcher = new RegExp(document.getElementById('DepID').value);
            renderableRows.forEach(function (row) {
                var match = false;
                [
                    'row_id'
                ].forEach(function (field) {
                    if (field.indexOf('.') !== '-1') {
                        field = field.split('.');
                    }
                    if (row.entity.hasOwnProperty(field) && row.entity[field].match(matcher) || field.length === 2 && row.entity[field[0]][field[1]].match(matcher)) {
                        match = true;
                    }

                });
                if (!match) {
                    row.visible = false;
                }
            });

            var filtered = [];
            for (var i = 0; i < renderableRows.length; i++) {
                if (renderableRows[i].visible) {
                    filtered.push(renderableRows[i].entity);
                }
            }

            if (filtered.length) {
                $scope.gridApiDepAuto.selection.selectRow(filtered[0]);
            }

            return renderableRows;
        };


        $scope.info = {};

        $scope.toggleModifierKeysToMultiSelect = function () {
            $scope.gridApiDepAuto.selection.setModifierKeysToMultiSelect(!$scope.gridApiDepAuto.grid.options.modifierKeysToMultiSelect);
        };



        $scope.gridOptionsDepAuto.onRegisterApi = function (gridApiDepAuto) {
            $scope.gridApiDepAuto = gridApiDepAuto;

             gridApiDepAuto.grid.registerRowsProcessor($scope.singleFilter, 200);

            $scope.mySelectedRows = $scope.gridApiDepAuto.selection.getSelectedRows();

            var objarray = [];
            gridApiDepAuto.selection.on.rowSelectionChanged($scope, function (row) {
                //    console.log('row selected ' + row.entity.ProdArea);



                if (row.isSelected) {
                    document.getElementById('DepTask').value = row.entity.DefectName;
                    document.getElementById('DepStatus').value = row.entity.Status;
                    document.getElementById('DepID').value = row.entity.row_id;
                    $scope.cancelModal('TBHolderDepAuto');


                    if (objarray.indexOf(row.entity.row_id) === -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) !== -1) {
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1);
                    }

            });


        };
        
        $scope.refreshGridDepAuto = function () {
            $scope.loading = true;
            $scope.gridOptionsDepAuto.data = [];

            $timeout(function () {
                $scope.loadGridDepAuto();
            }, 1000);
        };

        $scope.GridfromButtonDepAuto = function () {
            $scope.refreshGridDepAuto();
            proj = document.getElementById('ProjectName').value;
            $scope.gridApiDepAuto.grid.getColumn('ProjectName').filters[0] = {
                term: proj
            };
        };
        
        $scope.ClearDep = function () {
            document.getElementById('DepID').value = '';
            document.getElementById('DepStatus').value = '';
            document.getElementById('DepTask').value = '';
        };


        ////Turn ON if FLIPSWITCH Function is needed on a page
        //$(function () {
        //    var f = function () {
        //        $(this).next().text($(this).is(':checked') ? ':checked' : ':not(:checked)');
        //    };
        //    $('input').change(f).trigger('change');
        //});


        //################# End DepAutoendancy Auto ##########//


    }




})();




app.directive('onLoadClicker', ['$timeout',
    function ($timeout) {
        return {
            restrict: 'A',
            priority: -1,
            link: function ($scope, iElm, iAttrs, controller) {
                $timeout(function () {
                    iElm.triggerHandler('click');
                }, 0);
            }
        };
    }
]);

function ChoosePriority(data) {

    document.getElementById("Priority").value = data.value;

}
function ChooseStatus(data) {

    document.getElementById("Status").value = data.value;

}
function ChooseType(data) {


    document.getElementById("Type").value = data.value;


}
function ChooseAssignedTo(data) {
    if (document.getElementById("uid").value === document.getElementById("AssignedToDropdown")) {
        document.getElementById("AssignedTo").value = data.value;
    }
    else {
        alert('Not Authorized');
    }
}
function ChooseEnteredBy(data) {

    document.getElementById("EnteredBy").value = data.value;

}
function ChooseArea(data) {
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("ProdArea").value = dataRec;

}

function ChooseST(data) {
    var st = data.value;
    if (st !== '4-Complete') {
        document.getElementById("Status").value = data.value;
    }
    else {
        if (document.getElementById('DepID').value !== '') {
            if (document.getElementById('DepStatus').value === '4-Complete') {
                document.getElementById("Status").value = data.value;

            }
            else {
                document.getElementById("StatusDropdown").value = document.getElementById("Status").value;
                alert('Unable to complete due to a Dependancy! ID#' + document.getElementById('DepID').value + ' and Task-' + document.getElementById('DepTask').value + ' needs to be completed first');
            }
        }
        else {
            document.getElementById("Status").value = data.value;
        }
    }

        
        
    
   

}

function remSpecCharProj(data) {
    var string = document.getElementById("ProjectName").value;
    document.getElementById("ProjectName").value = string.replace(/[^a-zA-Z0-9]/g, ' ');

}

function remSpecCharDefect(data) {
    var string = document.getElementById("DefectName").value;
    document.getElementById("DefectName").value = string.replace(/[^a-zA-Z0-9]/g, ' ');
    //alert(str.replace(/[^a-zA-Z ]/g, ""));
}


function remSpecCharDescription(data) {
    var string = document.getElementById("Description").value;
    document.getElementById("Description").value = string.replace(/[^a-zA-Z0-9. ]/g, ' ');
    //alert(str.replace(/[^a-zA-Z ]/g, ""));
}



function InsertEmptylineinComment(data) {
    //document.getElementById("Comment").innerHTML = "\n" + document.getElementById("Comment").innerHTML;
}
function exportDefect(data) {
    var file_path = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/GetDefect";
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function setURL(thelink) {
    Chart.src = thelink;
}

function picture() {
    var pic = "Prioritization.png";
    document.getElementById('bigpic').src = pic.replace('90x90', '225x225');
    document.getElementById('bigpic').style.display = 'block';

}


