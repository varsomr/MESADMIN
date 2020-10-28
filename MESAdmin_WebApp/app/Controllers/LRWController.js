(function () {
    angular
        .module('myApp')
        .controller('LRWcontroller', controller);

    var flagOperatorOverride = "0";
    var dataJson = {
        "type": "LineChart",
        "displayed": false,
        "cssStyle": "height:600px;width: 100%",
        "data": {
            "cols": [],
            "rows": []
        },
        "options": {
            "title": "",
            "isStacked": "true",
            "fill": 20,
            "displayExactValues": true,
            "pointsVisible": true,
            "vAxis": {
                "title": "Units",
                "gridlines": {
                    "count": 10
                }
            },
            "hAxis": {
                "title": "Categories"
            }
        }
    }

   

    controller.$inject = ['$scope', '$rootScope','$timeout', 'uiGridConstants', 'uiGridGroupingConstants', 'LRWService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $rootScope, $timeout, uiGridConstants, uiGridGroupingConstants, LRWService) {
        $scope.chart = dataJson;
        
        $scope.isHideFilters = false;

        $scope.hideShowFilters = function () {
            $scope.isHideFilters = !$scope.isHideFilters;
        }
        $scope.randomSize = function (nav, ty) {
            var newHeight; //= Math.floor(Math.random() * (300 - 100 + 1) + 300);
            var newWidth; //= Math.floor(Math.random() * (600 - 200 + 1) + 200);
            if ($(window).width() < 600) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else if (ty === 'qs') {
                    newHeight = 75;
                }
                else {
                    newHeight = 40;
                }
                //newWidth = 400;
                newWidth = $(window).width() - $(window).width() * 0.06;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 1300) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else if (ty === 'qs') {
                    newHeight = 75;
                }
                else {
                    newHeight = 40;
                }
                //newWidth = 1200;
                newWidth = $(window).width() - $(window).width() * 0.06;
                document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 2000) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else if (ty === 'qs') {
                    newHeight = 75;
                }
                else {
                    newHeight = 40;
                }
                // newWidth = 1800;
                newWidth = $(window).width() - $(window).width() * 0.06;
                //document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }

            else {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else if (ty === 'qs') {
                    newHeight = 75;
                }
                else {
                    newHeight = 40;
                }
                //newWidth = 1800;
                newWidth = $(window).width() - $(window).width() * 0.06;
                document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            //console.log('Your screen resolution is -' + $(window).width());
            angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'vh');
            angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'px');
        };



        $scope.randomSizeFurther = function (nav, ty, sz) {
            var newHeight; //= Math.floor(Math.random() * (300 - 100 + 1) + 300);
            var newWidth; //= Math.floor(Math.random() * (600 - 200 + 1) + 200);
            var adjwidth;

            if (sz === 'B') {
                adjwidth = 1800;
            }
            else if (sz === "S") {
                adjwidth = 1000;
            }
            else {
                adjwidth = $(window).width();

            }
            if ($(window).width() < 600) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                newWidth = adjwidth;
            }
            else if ($(window).width() < 1300) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                newWidth = adjwidth;
            }
            else if ($(window).width() < 2000) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                newWidth = adjwidth;
            }

            else {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                newWidth = $(window).width() - $(window).width() * 0.06;
            }
            //console.log('Your screen resolution is -' + $(window).width());
            angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'vh');
            angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'px');
        };


        //###############################################  VatMakeRpt SCREEN ############################################//

        //###############################################  VatMakeRpt SCREEN ############################################//

        $scope.gridOptionsVatMakeRpt = {
            headerTemplate: 'app/Views/header.html',
            enableFullRowSelection: false,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 30,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: false,
            enablePinning: true,
            cellTooltip: function (row, col) {
                return 'AttrName: ' + row.entity.AttributeName + ' MIC: ' + row.entity.MIC;
            },
            rowTemplate:
                '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>',
            //headerTemplate: '<div  style="text-align: center">I am a Custom Grid Header. <Input id="p1" type = "Checkbox"  ng-click = "grid.appScope.GridDisplayStatus($event, 2,"p1")" /></div>',
            //columnDefs: [
            //    {
            //        field: 'LineNumber', grouping: {
            //            groupPriority: 0
            //        },
            //        width: '10%', visible: true
            //    }
            //    , {
            //        field: 'AttributeName', grouping: {
            //            groupPriority: 1
            //        },
            //        width: '10%', visible: true
            //    }

            //    , { field: 'Source', width: '10%', visible: true }
            //    , { field: 'MIC', width: '10%', visible: true }]
        };

        $scope.gridOptionsFinishRpt = {
            headerTemplate: 'app/Views/header.html',
            enableFullRowSelection: false,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 30,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: false,
            enablePinning: true,

            rowTemplate:
                '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>'
        }
        $scope.headerGridOptionsFinishRpt = {
            enableFullRowSelection: false,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 30,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: false,
            enablePinning: true,

            rowTemplate:
                '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>'
        }

        $scope.headerGridOptions = {
            enableFullRowSelection: false,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 30,
            enableFiltering: true,        
            enableCellEdit: false,
            enableGridMenu: false,
            enablePinning: true,
            //showHeader: false,

            rowTemplate:
                '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>',
            customScroller: function myScrolling(uiGridViewport, scrollHandler) {
                uiGridViewport.on('scrolled', function myScrollingOverride(event) {
                    $scope.$on('scrolled', function (event, args) {
                       console.log('was jjjjjj scrolled');
                    });
                    scrollHandler(event);
                });
            },
        };

        $scope.GridfromButtonVatMakeRpt = function () {

            $scope.refreshgridVatMakeRpt();

        };

        $scope.headerGridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi2 = gridApi;
        }

        $scope.showExtraColumns = function () {
            //$scope.gridOptionsVatMakeRpt.columnDefs[2].visible = true;
            //$scope.gridOptionsVatMakeRpt.columnDefs[3].visible = true;
            //$scope.gridOptionsVatMakeRpt.columnDefs[4].visible = true;
            //$scope.gridOptionsVatMakeRpt.columnDefs[5].visible = true;
            //$scope.gridOptionsVatMakeRpt.columnDefs[6].visible = true;// 
            var hdsumV = $scope.gridOptionsVatMakeRpt.columnDefs.filter(a => a.name.includes('SumV') || a.name.includes('SDev') || a.name.includes('AvgV') || a.name.includes('Source') || a.name.includes('MIC') || a.name.includes('Position') || a.name.includes('Source'))
            var headsumV = $scope.headerGridOptions.columnDefs.filter(a => a.name.includes('SumV') || a.name.includes('SDev') || a.name.includes('AvgV'))
            hdsumV.push(...headsumV)

            for (var a = 0; a < hdsumV.length; a++) {
                hdsumV[a].visible = true;
            }
            $scope.gridApi.grid.refresh();
            $scope.gridApi2.grid.refresh();
        }

        

        $scope.hideExtraColumns = function () {
            //$scope.gridOptionsVatMakeRpt.columnDefs[2].visible = false;
            //$scope.gridOptionsVatMakeRpt.columnDefs[3].visible = false;
            //$scope.gridOptionsVatMakeRpt.columnDefs[4].visible = false;
            //$scope.gridOptionsVatMakeRpt.columnDefs[5].visible = false;
            //$scope.gridOptionsVatMakeRpt.columnDefs[6].visible = false;
            //$scope.gridOptionsVatMakeRpt.columnDefs[7].visible = false;
            var hdsumV = $scope.gridOptionsVatMakeRpt.columnDefs.filter(a => a.name.includes('SumV') || a.name.includes('SDev') || a.name.includes('AvgV') || a.name.includes('KPI') || a.name.includes('MIC') || a.name.includes('Position') || a.name.includes('Source'))
            var headsumV = $scope.headerGridOptions.columnDefs.filter(a => a.name.includes('SumV') || a.name.includes('SDev') || a.name.includes('AvgV'))
            hdsumV.push(...headsumV)
            for (var a = 0; a < hdsumV.length; a++) {
                hdsumV[a].visible = false;
            }

            $scope.gridApi.grid.refresh();
            $scope.gridApi2.grid.refresh();

        }

        $scope.gridPagination = function (lineNumber) {
            if (lineNumber == 4) {
                $scope.isCommentsgrid = true;
            }
            else {
                $scope.removeGridData();
                $scope.loadgridVatMakeRpt(lineNumber);
                $scope.isCommentsgrid = false;
            }

        }

        $scope.showorhideExtraColumns = function () {
            if (document.getElementById("hideshowcheckboxid").checked == true) {
                $scope.showExtraColumns();
            } else {
                
                $scope.hideExtraColumns();
            }
        }

        $scope.mouseOver = function () {
            alert("mouseOver");
            $scope.openModalgraph();
        }

        $scope.mouseLeave = function () {
            alert("mouseLeave");
            document.getElementById("graphDisplay").style.display = 'none';
        }

        //######################Calendar Event###########################//
        //1)	//Pass mm/dd/yyyy to get yyyy-mm-dd
        $scope.FormatDT = function (date) {
            var d = new Date(date),


                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');

            //   date: new Date(),
            //   time: new Date($filter('d')(new Date(), 'yyyy-MM-dd HH:mm'))


        }

        $scope.FormatTM = function (date) {
            var d = new Date(date),
                // var e = new Timestamp(date),

                hour = '' + (d.getHours() + 1),
                minute = '' + d.getMinutes(),
                second = d.getSeconds();

            if (hour.length < 2) hour = '0' + hour;
            if (minute.length < 2) minute = '0' + minute;
            if (second.length < 2) second = '0' + second;
            return [hour, minute, second].join(':');
            //return [d];


        }

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


        //####Autopopulate screen function area#################//
        //2)	//Pass yyyy-mm-dd to get mm/dd/yyyy
        $scope.FormatDTSlash = function (date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + (d.getDate() + 1),
                year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [month, day, year].join('/');

        };
        $scope.isAutoRefresh = true;
        $scope.refreshtxt = "disable";
        $scope.manageAutoRefresh = function () {
            $scope.isAutoRefresh = !$scope.isAutoRefresh;
            if ($scope.isAutoRefresh) {
                $scope.refreshtxt = "disable";
            }
            else {
                $scope.refreshtxt = "enable";
            }
       
        }
        
        setInterval(function () {
            if ($scope.isAutoRefresh) {
                $scope.viewReports();
            }
        }, 120000)

        $scope.isCommentsgrid = false;

        $scope.calendardate = (nav, toFrom) => {
            //debugger
            $timeout(function () { 
            $(nav).datepicker({
                onSelect: (dateText) => {
                    var date = new Date(dateText);
                    $scope[toFrom] = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                    $scope.dateChange();
                },
                defaultDate: $scope[toFrom]
            });
            }, 10)

        };

        $(function () {
            var a = $scope;
            //$scope.calendardate('#fromDate', 'fromDate');
            //$scope.calendardate('#toDate', 'toDate');
            //$("#fromDate").datepicker();
            //$("#toDate").datepicker();

            var date = new Date();											 
							   
												  
            date.setDate(date.getDate());
            date = date.toISOString().substring(0, 10),
                field = document.querySelector('#fromDate');
            finRptField = document.querySelector('#finishRepFromDate');
            field.value = $scope.FormatDTSlash(date);
            finRptField.value = $scope.FormatDTSlash(date);				   
				 
			   

            var date = new Date();
            date.setDate(date.getDate());
            date = date.toISOString().substring(0, 10),
                field = document.querySelector('#toDate');
            finRptField = document.querySelector('#finishRepToDate');
            field.value = $scope.FormatDTSlash(date);
            finRptField.value = $scope.FormatDTSlash(date);

            //var dateF = new Date();
            //var firstDay = '09/10/2020';//new Date(dateF.getFullYear(), dateF.getMonth(), 1);
            //field = document.querySelector('#toDate');
            //field.value = $scope.FormatDTSlash(firstDay);
            //alert('Turr');

        });

        //######################END Calendar Event###########################//

        $scope.openModalgraph = function () {
            document.getElementById("graphDisplay").style.display = 'block';
        };
        var date = new Date();

        //$scope.fromDate = '2020-05-08'//((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + date.getFullYear()
        //$scope.toDate = '2020-05-08'//((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + date.getFullYear()
        $scope.fromDate = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
        $scope.toDate = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
        $scope.dateChange = () => {
            var fromD = Date.parse($scope.fromDate);
            var toD = Date.parse($scope.toDate);
            if (toD >= fromD) {
                $scope.lineNumbers = ['ALL'];
                $scope.getVatMakeParams($scope.fromDate, $scope.toDate);
            }
        }

        $scope.lineNumbers = ['ALL'];
        $scope.productionOrderByLines = ['ALL']
        $scope.productCodeByLines = ['ALL']
        $scope.selectedLineNumber = 'ALL';
        $scope.selectedProductionOrder = 'ALL';
        $scope.selectedProductCode = 'ALL';
        $scope.getVatMakeParams = (fromDate,toDate) => {
            $scope.loading = true;
            LRWService.getVatMakeParam(fromDate, toDate).success((data) => {
                $scope.vatMakeParams = data.VatMakeParamList;
                var lines = data.VatMakeParamList.map(a => a.LineNumber)
                $scope.lineNumbers.push(...lines.filter((v, i, a) => a.indexOf(v) === i))
                $scope.productionOrderByLines.push(...$scope.vatMakeParams.map(a => a.ProductionOrder));
                $scope.productCodeByLines.push(...$scope.vatMakeParams.map(a => a.ProductCode));
                console.log($scope.lineNumbers)
                $scope.$applyAsync();
                $scope.error = false;
                
            }).finally(function () { $scope.loading = false; });
        }

        $scope.viewReports = function () {
            $scope.isCommentsgrid = false;
            $scope.removeGridData();
            $scope.loadgridVatMakeRpt($scope.selectedLineNumber, $scope.selectedProductionOrder, $scope.selectedProductCode, $scope.fromDate, $scope.toDate, $scope.isAscending);
        }

        $scope.changeLineNumber = function () {
            $scope.productionOrderByLines = ['ALL'];
            
            
            if ($scope.selectedLineNumber == 'ALL') {
                $scope.productionOrderByLines.push(...$scope.vatMakeParams.map(a => a.ProductionOrder));
                
            } else {
                $scope.productionOrderByLines.push(...$scope.vatMakeParams.filter(a => a.LineNumber == $scope.selectedLineNumber).map(a => a.ProductionOrder));
            }

        }

        $scope.changeProductionOrder = function () {
            $scope.productCodeByLines = ['ALL']
            if ($scope.selectedLineNumber == 'ALL') {
                $scope.productCodeByLines.push(...$scope.vatMakeParams.map(a => a.ProductCode));
                $scope.gridPagination('1');
            } else {
                $scope.productCodeByLines.push(...$scope.vatMakeParams.filter(a => a.ProductionOrder == $scope.selectedProductionOrder).map(a => a.ProductCode))
            }
            
            
        }
        $scope.changeProductCode = function () {
            //$scope.removeGridData();
            
        }
        $scope.removeGridData = function () {
            $scope.gridOptionsVatMakeRpt.columnDefs = [];
            $scope.headerGridOptions.columnDefs = [];
            $scope.gridOptionsVatMakeRpt.data = [];
            $scope.headerGridOptions.data = [];
          
        }

        $scope.sortOptions = ["Ascending", "Descending"];
        $scope.isAscending = false;
        $scope.selectedSort = "Descending";
        $scope.changeSort = function () {
            if ($scope.selectedSort == "Descending") {
                $scope.isAscending = false;
            } else {
                $scope.isAscending = true;
            }
        }

        $scope.getVatMakeParams($scope.fromDate, $scope.toDate);
		        $scope.getVatMakeParams($scope.fromDate, $scope.toDate);
        $scope.pushKeys = function (sortedKeysArray, po, isAscending) {
            var keys = sortedKeysArray.filter(a => a.includes(po) && !a.includes('Tgt') && !a.includes('LW') && !a.includes('Hi'))
            var nKeys = []
            var keysToPush = []
            for (var a = 0; a < keys.length; a++) {
                nKeys.push(keys[a].split('-')[0])
            }
            nKeys = isAscending ? nKeys.sort((a, b) => a - b) : nKeys.sort((a, b) => b - a);
            for (var n = 0; n < nKeys.length; n++) {
                keys.forEach(a => {
                    if (a.split('-')[0] == nKeys[n]) {
                        keysToPush.push(a)
                    }
                });
            }
            sortedKeysArray = sortedKeysArray.filter(a => !a.includes(po))
            sortedKeysArray.push(...keysToPush)
            return sortedKeysArray;
        }
        $scope.loadgridVatMakeRpt = function (lineNumber, productionOrder, productCode, fromDate, toDate, isAscending = false) {
            if (lineNumber == null || lineNumber == undefined || lineNumber == 'ALL') {
                lineNumber = '1'
            }
            if (productionOrder == null || productionOrder == undefined) {
                productionOrder = 'ALL'
            }
            if (productCode == null || productCode == undefined) {
                productCode = 'ALL'
            }
            if (fromDate == null || fromDate == undefined) {
                fromDate = $scope.fromDate
            }
            if (toDate == null || toDate == undefined) {
                toDate = $scope.toDate
            }
            
            $scope.loading = true;

            console.log('loading grid');


            LRWService.getVatMakeRpt(lineNumber, productionOrder, productCode, fromDate, toDate).success(function (data) {
                
                if (data === null || data.VatMakeRptList === null || data.VatMakeRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsVatMakeRpt.paginationPageSizes.push(
                        data.VatMakeRptList.length
                    );
                    var VatMakeRptList = data.VatMakeRptList;
                    data.VatMakeRptList.forEach(a => {
                        if (a.KPI_Report_Name != "" && a.KPI_Report_Name != null) {
                            a["isClickable"] = true;
                        }
                    })
                    $scope.gridData = data.VatMakeRptList;
                    var keysArray = [];
   
                    keysArray = Object.keys(VatMakeRptList[0]);
                    //console.log(keysArray);
                    var sortedKeysArray = keysArray.sort().reverse();
                    //var statusTemplate = '<div ng-click = alert("hi")></div>';
                    var order = sortedKeysArray.filter(a => a.includes('SumV'))
                    var orderedProductionOders = []
                    for (var s = 0; s < order.length; s++) {
                        var split = order[s].split('-')
                        orderedProductionOders.push({ po: split.sort(function (a, b) { return b.length - a.length; })[0], seqNumber: split[split.length - 1] });
                    }
                    //orderedProductionOders = orderedProductionOders.sort(function (a, b) { return b.seqNumber - a.seqNumber });

                    if (!isAscending) {
                        for (var o = 0; o < orderedProductionOders.length; o++) {
                            var po = orderedProductionOders.find(a => a.seqNumber == o + 1).po;
                            sortedKeysArray = $scope.pushKeys(sortedKeysArray, po, isAscending);										   
																																			  
									  
										   
															   
															 
                        }
                    } else {
                        for (var o = orderedProductionOders.length; o >= 1; o--) {
                            var po = orderedProductionOders.find(a => a.seqNumber == o).po;
                            sortedKeysArray = $scope.pushKeys(sortedKeysArray, po, isAscending);
													  
								 
							   
                        }
																					  
														   
                    }													   
                    //debugger
                    $scope.gridOptionsVatMakeRpt.columnDefs.push({ name: 'LineNumber', field: 'LineNumber', width: '5%', visible: true, pinnedLeft: true });
                    $scope.gridOptionsVatMakeRpt.columnDefs.push(
                         {
                            name: 'AttributeName', field: 'AttributeName', width: '10%', visible: true, pinnedLeft: true,
                            cellClass: function (grid, row, col, rowRenderIndex, colRenderIndex) {
                                var newStyle;
                                if (row.entity.isClickable) {
                                    newStyle = 'group1';
                                }

                                return newStyle;
                            },
                            cellTemplate: `<div ng-click="grid.appScope.selectGridToLoad(COL_FIELD)">{{COL_FIELD CUSTOM_FILTERS}}</div>`,
                            ////cellTemplate: '<div ng-mouseover="grid.appScope.mouseOver(this);" ng-mouseleave="grid.appScope.mouseLeave(this)">{{COL_FIELD CUSTOM_FILTERS}}</div>',


                            menuItems: [{
                                title: 'ShowColumns',
                                action: function () {
                                    document.getElementById("hideshowcheckboxid").checked = true;
                                    $scope.showExtraColumns();
                                }
                            },
                                {
                                    title: 'HideColumns',
                                    action: function () {
                                        document.getElementById("hideshowcheckboxid").checked = false;
                                        $scope.hideExtraColumns();
                                    }
                                }]
                        }
                    );
                    $scope.gridOptionsVatMakeRpt.columnDefs.push({ name: 'Source', field: 'source', width: '10%', visible: true  });
                    $scope.gridOptionsVatMakeRpt.columnDefs.push({ name: 'MIC', field: 'MIC', width: '10%', visible: true });

                    for (var i = 0; i < sortedKeysArray.length; i++) {
                        var colmn = sortedKeysArray[i];
                     if (!(sortedKeysArray[i] == "LineNumber" || sortedKeysArray[i] == "AttributeName" || sortedKeysArray[i] == "source" || sortedKeysArray[i] == "MIC" || sortedKeysArray[i].includes("Tgt-") == true || sortedKeysArray[i].includes("LW-") == true || sortedKeysArray[i].includes("Hi-") == true))
                  
                            $scope.gridOptionsVatMakeRpt.columnDefs.push({
                                name: sortedKeysArray[i], displayName: sortedKeysArray[i].includes('-') ? sortedKeysArray[i].split('-')[0] + '-' + sortedKeysArray[i].split('-').sort(function (a, b) { return b.length - a.length; })[0] : sortedKeysArray[i]
                                , field: sortedKeysArray[i], width: '10%', visible: true, cellTooltip: function (row) {
                                    var Hghkey = 'Hi-' + colmn;
                                    var Tgtkey = 'Tgt-' + colmn;
                                    var LWkey = 'LW-' + colmn;
                                    var HghVal = row.entity[Hghkey];
                                    var TgtVal = row.entity[Tgtkey];
                                    var LWVal = row.entity[LWkey];

                                    var value = "Low: " + LWVal + " \rTgt: " + TgtVal + " \rHi: " + HghVal;
                                    if (value != null) {
                                        return value;
                                        //console.log("Hi:" + HghVal + " Tgt:" + TgtVal + " Low:" + LWVal);
                                    } else {
                                        return "None" ;
                                    } 
                                }
                            });
                    }

                    
                    $scope.gridOptionsVatMakeRpt.data = VatMakeRptList;
                    $scope.headerGridOptions.columnDefs = [];
                    $scope.headerGridOptions.columnDefs.push(...$scope.gridOptionsVatMakeRpt.columnDefs);
                    $scope.headerGridOptions.columnDefs.forEach(column => {
                        column.cellClass = bgColor
                    })
                    for (var a = 0; a < 5; a++) {
                        $scope.headerGridOptions.data.push(VatMakeRptList[a]);
                        //$scope.gridOptionsVatMakeRpt.data.splice(0, 1);
                    }
                    $scope.gridOptionsVatMakeRpt.data.splice(0, 5);
                    $scope.headerGridOptions.enableHorizontalScrollbar = 0;
                    //$scope.renderfields();
                    $scope.hideExtraColumns();
                    //console.log(VatMakeRptList);
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        function bgColor (grid, row, col, rowRenderIndex, colRenderIndex) {
            
            if (grid != undefined && grid.element[0] != undefined && grid.element[0].id == 'gridH') {
                return 'greyRow'
            } else {
                var newStyle;
                if (row.entity.isClickable) {
                    newStyle = 'group1';
                }

                return newStyle;
            }
        }

        $scope.getTableData = function (data, isMultiple) {
            $scope.tableData = [];
            $scope.isMultiple = isMultiple;
            if (isMultiple) {
                $scope.firstDisplayName = data[0].KPI_Data1_Name
                $scope.second = data[0].KPI_Data2_Name
                for (var i = 0; i < data.length; i++) {
                    $scope.tableData.push({
                        productionDate: data[i].Production_Date.split(" ")[0],
                        logicalVat: data[i].KPI_Category,
                        data1: data[i].KPI_Data1,
                        data2: data[i].KPI_Data2
                    });
                }
            } else {
                $scope.firstDisplayName = data[0].KPI_Name
                for (var i = 0; i < data.length; i++) {
                    $scope.tableData.push({
                        productionDate: data[i].Production_Date.split(" ")[0],
                        logicalVat: data[i].KPI_Category,
                        data1: data[i].KPI_Data,
                    });
                }
            }
            var a = $scope.tableData;
            $scope.$applyAsync();
            
        }

        $scope.loadgridVatMakeRpt();
        
        //$scope.loadgridKPIMultiDt = function () {

        //    $scope.loading = true;

        //    console.log('loading KPIMultiDtList');

        //    LRWService.getKPIMultiDt('KPI Chart - Fat to Protein Ratio', '2020-05-08', '2020-05-09', '1', 'NULL', 'NULL','NULL').success(function (data) {

        //        var KPIMultiDtList = data.KPIMultiDtList;
        //        console.log(KPIMultiDtList);
        //                $scope.error = false;
        //        }
        //    ).finally(function () { $scope.loading = false; });

        //};
        $scope.loadgridKPIMultiDt = function (reportName,fromDate,toDate, LineNumber, isChartOpen = false) {
            if (reportName == undefined || reportName == null || LineNumber == undefined || LineNumber == null) {
                //reportName = 'KPI Chart - Fat to Protein Ratio'
            }
            $scope.loading = true;

            //console.log('loading KPIMultiDtList');

            //LRWService.getKPIMultiDt('KPI Chart - Fat to Protein Ratio', '2020-05-08', '2020-05-09', '1', 'NULL', 'NULL', 'NULL').success(function (data) {
            LRWService.getKPIMultiDt(reportName, fromDate, toDate, LineNumber, 'NULL', 'NULL', 'NULL').success(function (data) {
                           var KPIMultiDtList = data.KPIMultiDtList;
                if (isChartOpen) {
                    var cols = [
                        {
                            "id": "KPI_Category",
                            "label": "Category",
                            "type": "string"
                        },
                        {
                            "id": "KPI_Data1_Name",
                            "label": data.KPIMultiDtList[0].KPI_Data1_Name,
                            "type": "number"
                        },
                        {
                            "id": "KPI_Data2_Name",
                            "label": data.KPIMultiDtList[0].KPI_Data2_Name,
                            "type": "number"
                        }
                    ]
                    var categories = data.KPIMultiDtList.map(a => a.KPI_Category)
                    var rows = [];
                    rows.push
                    for (var i = 0; i < categories.length; i++) {
                        rows.push(
                            {
                                "c": [
                                    {
                                        "v": String(categories[i])
                                    },
                                    {
                                        "v": Number(data.KPIMultiDtList.find(obj => {
                                            return obj.KPI_Category === categories[i]
                                        }).KPI_Data1)
                                    },
                                    {
                                        "v": Number(data.KPIMultiDtList.find(obj => {
                                            return obj.KPI_Category === categories[i]
                                        }).KPI_Data2.replace(/,/, ""))
                                    }
                                ]
                            }

                        )
                    }
                    dataJson.data.cols = cols;
                    dataJson.data.rows = rows;
                    $scope.getTableData(data.KPIMultiDtList, true)
                    $scope.openModal('chartModal');
                }
                //console.log(KPIMultiDtList);
                $scope.error = false;
            }
            ).finally(function () { $scope.loading = false; });

        };
        
  
        $scope.loadgridKPISingleDt = function (reportName,fromDate,toDate, LineNumber, isChartOpen = false) {

            $scope.loading = true;
            if (reportName == undefined || reportName == null || LineNumber == undefined || LineNumber == null) {
                //reportName = 'KPI Chart - Mill pH'
            }
            //console.log('loading KPISingleDt');
            LRWService.getKPISingleDt(reportName, fromDate, toDate, LineNumber, 'NULL', 'NULL', 'NULL').success(function (data) {
            //LRWService.getKPISingleDt('KPI Chart - Mill pH', '2020-05-08', '2020-05-09', '1', 'NULL', 'NULL', 'NULL').success(function (data) {

                var KPISingleDtList = data.KPISingleDtList;
                $scope.kpiData = data.KPISingleDtList;
                if (isChartOpen) {
                    var cols = [
                        {
                            "id": "KPI_Category",
                            "label": "Category",
                            "type": "string"
                        },
                        {
                            "id": "KPI_Name",
                            "label": data.KPISingleDtList[0].KPI_Name,
                            "type": "number"
                        }
                    ]
                    var categories = data.KPISingleDtList.map(a => a.KPI_Category)
                    var rows = [];
                    for (var i = 0; i < categories.length; i++) {
                        rows.push({
                            "c": [
                                {
                                    "v": String(categories[i])
                                },
                                {
                                    "v": Number(data.KPISingleDtList.find(obj => {
                                        return obj.KPI_Category === categories[i]
                                    }).KPI_Data)
                                }
                            ]
                        })
                    }
                    dataJson.data.cols = cols;
                    dataJson.data.rows = rows;
                    $scope.getTableData(data.KPISingleDtList, false)
                    $scope.openModal('chartModal');
                }
                //console.log(KPISingleDtList);
                $scope.error = false;
            }
            ).finally(function () { $scope.loading = false; });

        };

        $scope.selectGridToLoad = function (data) {

            var dataObject = $scope.gridData.find(obj => {
                return obj.AttributeName === data
            });
            if (dataObject != null) {
                if (dataObject.KPI_Report_Name != "" && dataObject.KPI_Report_Name != null) {
                    var reportName = Number(dataObject.KPI_Report_Name[dataObject.KPI_Report_Name.length - 1]);
                    if (reportName > 1) {
                        $scope.loadgridKPIMultiDt(dataObject.KPI_RD_Name, $scope.fromDate, $scope.toDate, dataObject.LineNumber, true)
                    } else {
                        $scope.loadgridKPISingleDt(dataObject.KPI_RD_Name, $scope.fromDate, $scope.toDate, dataObject.LineNumber, true)
                    }
                }
            }
        }
        $scope.loadgridKPIMultiDt();
        $scope.loadgridKPISingleDt();

        $scope.GridDisplayStatus = function (event, i, j) {
            if (document.getElementById(j).checked === true) {
                $scope.gridOptionsVatMakeRpt.columnDefs[i].visible = true;
                $scope.gridApi.grid.refresh();
            }
            else {
                $scope.gridOptionsVatMakeRpt.columnDefs[i].visible = false;
                $scope.gridApi.grid.refresh();
            }
        };

        $scope.$on('scrolled', function (event, args) {
            document.getElementById('gridH').getElementsByClassName('ui-grid-viewport')[1].scrollLeft = document.getElementById('gridW').getElementsByClassName('ui-grid-viewport')[1].scrollLeft
            $scope.gridApi.grid.isScrollingHorizontally = false;
            //console.log("called");
        });

     
        $scope.gridOptionsVatMakeRpt.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {
                    console.log('push');
                    $scope.Graphline = row.entity.LineNumber;

                }
            });

            $scope.$watch('gridApi.grid.isScrollingHorizontally', watchFunc);
            function watchFunc(newData) {               
                $rootScope.$broadcast('scrolled');


            }
            //    $scope.selectRow = function () {
            //$scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            //var objarray = [];

           

        };



        $scope.refreshgridVatMakeRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsVatMakeRpt.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridVatMakeRpt();
                $scope.HideNullcolumn();
                console.log('Varunutrrr');
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };

        
        //###############################################  VatMakeRpt Comment SCREEN ############################################//

        $scope.gridOptionsVatMakeRptComments = {
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
                {field: 'LineNumber', width: '5%', visible: true}        
                ,{ field: 'ProductionOrder', width: '10%', visible: true }
                ,{field: 'AttributeName', name: 'Name', width: '35%', visible: true}
                ,{ field: 'LogicalVat', width: '10%', visible: true }            
                ,{ field: 'Comments', width: '55%', visible: true }


            ]
        };

        $scope.GridfromButtonVatMakeRptComments = function () {



            $scope.refreshgridVatMakeRptComment();

        };


        $scope.loadgridVatMakeRptComments = function () {
          
            $scope.loading = true;

            console.log('loading grid');

            //LRWService.getVatMakeRptComments('2020-10-20', '2020-10-21', 'ALL', 'ALL').success(function (data) {


            LRWService.getVatMakeRptComments($scope.fromDate, $scope.toDate, $scope.selectedProductCode, $scope.selectedLineNumber).success(function (data) {           
           
                if (data === null || data.VatMakeRptCommentsList === null || data.VatMakeRptCommentsList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                    //alert("No Data");
                } else {
                    $scope.gridOptionsVatMakeRptComments.paginationPageSizes.push(
                        data.VatMakeRptCommentsList.length
                    );
                    
                    var VatMakeRptCommentsList = data.VatMakeRptCommentsList;
                    $scope.gridOptionsVatMakeRptComments.data = VatMakeRptCommentsList;
                    console.log(VatMakeRptCommentsList);
                    //alert(VatMakeRptCommentsList);
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        $scope.loadgridVatMakeRptComments();

        $scope.gridOptionsVatMakeRptComments.onRegisterApi = function (gridApi) {
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
                   
                    document.getElementById('LineNumber').value = row.entity.LineNumber;
                    document.getElementById('AttributeName').value = row.entity.AttributeName;
                    document.getElementById('Source').value = row.entity.Source;
                    document.getElementById('MIC').value = row.entity.MIC;
                   
                    document.getElementById('Position').value = row.entity.Position;
                    document.getElementById('LogicalVat').value = row.entity.LogicalVat;
                  
                    document.getElementById('PhysUnitNo').value = row.entity.PhysUnitNo;
                    document.getElementById('ProductCode').value = row.entity.ProductCode;
                    document.getElementById('Comments').value = row.entity.Comments;
                    



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

                        document.getElementById('LineNumber').value = "";
                        document.getElementById('AttributeName').value = "";
                        document.getElementById('Source').value = "";
                        document.getElementById('MIC').value = "";
                       
                        document.getElementById('Position').value = "";
                        document.getElementById('LogicalVat').value = "";

                        document.getElementById('PhysUnitNo').value = "";
                        document.getElementById('ProductCode').value = "";
                        document.getElementById('Comments').value = "";


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



        $scope.refreshgridVatMakeRptComments = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsVatMakeRptComments.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridVatMakeRptComments();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };

        //################################### Finish Report ############################################//
        $scope.finishrptcalendardate = (nav, toFrom) => {
            //debugger
            $timeout(function () {
                $(nav).datepicker({
                    onSelect: (dateText) => {
                        var date = new Date(dateText);
                        $scope[toFrom] = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                        $scope.finishRptDateChange();
                    },
                    defaultDate: $scope[toFrom]
                });
            }, 10)

        };
        $scope.finishRptFromDate = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
        $scope.finishRptToDate = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
        $scope.finishRptDateChange = () => {
            var fromD = Date.parse($scope.finishRptFromDate);
            var toD = Date.parse($scope.finishRptToDate);
            if (toD >= fromD) {
                $scope.lineNumbers = ['ALL'];
                $scope.getFinishRptParams($scope.finishRptFromDate, $scope.finishRptToDate);
            }
        }
        $scope.finishRptLineNumbers = ['ALL'];
        $scope.finishRptProductionOrderByLines = ['ALL']
        $scope.finishRptProductCodeByLines = ['ALL']
        $scope.finishRptSelectedLineNumber = 'ALL';
        $scope.finishRptSelectedProductionOrder = 'ALL';
        $scope.finishRptSelectedProductCode = 'ALL';

        $scope.getFinishRptParams = function (fromDate, toDate) {
            $scope.loading = true;
            LRWService.getFinishParam(fromDate, toDate).success((data) => {
                $scope.finishRptParams = data.FinishParamList;
                var lines = data.FinishParamList.map(a => a.LineNumber)
                $scope.finishRptLineNumbers.push(...lines.filter((v, i, a) => a.indexOf(v) === i))
                $scope.finishRptProductionOrderByLines.push(...$scope.finishRptParams.map(a => a.ProductionOrder));
                $scope.finishRptProductCodeByLines.push(...$scope.finishRptParams.map(a => a.ProductCode));
                
                $scope.error = false;

            }).finally(function () { $scope.loading = false; });
        }

        $scope.changeFinishRptLineNumber = function () {
            $scope.finishRptProductionOrderByLines = ['ALL'];


            if ($scope.finishRptSelectedLineNumber == 'ALL') {
                $scope.finishRptProductionOrderByLines.push(...$scope.finishRptParams.map(a => a.ProductionOrder));

            } else {
                $scope.finishRptProductionOrderByLines.push(...$scope.finishRptParams.filter(a => a.LineNumber == $scope.finishRptSelectedLineNumber).map(a => a.ProductionOrder));
            }

        }

        $scope.changeFinishRptProductionOrder = function () {
            $scope.finishRptProductCodeByLines = ['ALL']
            if ($scope.finishRptSelectedProductionOrder == 'ALL') {
                $scope.finishRptProductCodeByLines.push(...$scope.finishRptParams.map(a => a.ProductCode));
                
            } else {
                $scope.finishRptProductCodeByLines.push(...$scope.finishRptParams.filter(a => a.ProductionOrder == $scope.finishRptSelectedProductionOrder).map(a => a.ProductCode))
            }


        }

        $scope.viewReportsFinishRpt = function () {
            $scope.removeGridDataFinishRpt();
            $scope.loadgridFinishRpt($scope.finishRptSelectedLineNumber, $scope.finishRptSelectedProductionOrder, $scope.finishRptSelectedProductCode, $scope.finishRptFromDate, $scope.finishRptToDate, $scope.isAscending);
        }

        $scope.removeGridDataFinishRpt = function () {
            $scope.gridOptionsFinishRpt.columnDefs = [];
            $scope.gridOptionsFinishRpt.data = [];

        }

        $scope.loadgridFinishRpt = function (lineNumber, productionOrder, productCode, fromDate, toDate, isAscending = false) {
            if (lineNumber == null || lineNumber == undefined || lineNumber == 'ALL') {
                lineNumber = '1'
            }
            if (productionOrder == null || productionOrder == undefined || productionOrder == 'ALL') {
                productionOrder = '1221613,1221605,1221604,1221603,1221617,1221602,1221753'
            }
            if (productCode == null || productCode == undefined || productCode == 'ALL') {
                productCode = '100000223,100000259,100000268,100001559,100001979,100400168,100402450'
            }
            if (fromDate == null || fromDate == undefined) {
                fromDate = $scope.finishRptFromDate
            }
            if (toDate == null || toDate == undefined) {
                toDate = $scope.finishRptToDate
            }
            $scope.loading = true;

            console.log('loading grid');

            //LRWService.getVatMakeRptComments('2020-10-20', '2020-10-21', 'ALL', 'ALL').success(function (data) {


            LRWService.getFinishRpt(lineNumber, productionOrder, productCode, fromDate, toDate).success(function (data) {
               
                data.FinishRptList.forEach(a => {
                    if (a.KPI_Report_Name != "" && a.KPI_Report_Name != null) {
                        a["isClickable"] = true;
                    }
                })
                $scope.finishRptData = data.FinishRptList;
                keysArray = Object.keys(data.FinishRptList[0]);
                //console.log(keysArray);
                var sortedKeysArray = keysArray.sort().reverse();
                var order = sortedKeysArray.filter(a => a.includes('AvgV'))
                var orderedProductionOders = []
                for (var s = 0; s < order.length; s++) {
                    var split = order[s].split('-')
                    var exist = orderedProductionOders.find(a => a.po == split[1]);
                    if (exist == undefined || exist == null) {
                        orderedProductionOders.push({ po: split.sort(function (a, b) { return b.length - a.length; })[0], seqNumber: split[split.length - 1] });
                    }
                }
                for (var o = 0; o < orderedProductionOders.length; o++) {
                    var po = orderedProductionOders.find(a => a.seqNumber == o + 5).po;
                    var keys = sortedKeysArray.filter(a => a.includes(po) && !a.includes('Tgt') && !a.includes('LW') && !a.includes('Hi'))
                    var nKeys = []
                    var keysToPush = []
                    for (var a = 0; a < keys.length; a++) {
                        nKeys.push(keys[a].split('-')[0])
                    }
                    nKeys = isAscending ? nKeys.sort((a, b) => a - b) : nKeys.sort((a, b) => b - a);
                    for (var n = 0; n < nKeys.length; n++) {
                        keys.forEach(a => {
                            if (a.split('-')[0] == nKeys[n]) {
                                keysToPush.push(a)
                            }
                        });
                    }
                    sortedKeysArray = sortedKeysArray.filter(a => !a.includes(po))
                    sortedKeysArray.push(...keysToPush)
                }
               
                sortedKeysArray = [...new Set(sortedKeysArray)];
                $scope.gridOptionsFinishRpt.columnDefs.push({ name: 'LineNumber', field: 'LineNumber', width: '5%', visible: true, pinnedLeft: true });
                $scope.gridOptionsFinishRpt.columnDefs.push({
                    name: 'GroupName', field: 'GroupName', width: '5%', visible: true, pinnedLeft: true
                });
                $scope.gridOptionsFinishRpt.columnDefs.push({
                    name: 'AttributeName', field: 'AttributeName', width: '5%', visible: true,
                    cellTemplate: `<div ng-click="grid.appScope.selectGridToLoadFinishRpt(COL_FIELD)">{{COL_FIELD CUSTOM_FILTERS}}</div>`
                });
                $scope.gridOptionsFinishRpt.columnDefs.push({
                    name: 'source', field: 'source', width: '5%', visible: true
                });
                $scope.gridOptionsFinishRpt.columnDefs.push({
                    name: 'ReportingKey', field: 'ReportingKey', width: '5%', visible: true
                });
                for (var i = 0; i < sortedKeysArray.length; i++) {
                    var colmn = sortedKeysArray[i];
                    if (!(sortedKeysArray[i] == "ReportingKey" || sortedKeysArray[i] == "GroupName" || sortedKeysArray[i] == "LineNumber" || sortedKeysArray[i] == "AttributeName" || sortedKeysArray[i] == "source" || sortedKeysArray[i] == "MIC" || sortedKeysArray[i].includes("Tgt-") == true || sortedKeysArray[i].includes("LW-") == true || sortedKeysArray[i].includes("Hi-") == true))

                        $scope.gridOptionsFinishRpt.columnDefs.push({
                            name: sortedKeysArray[i], displayName: sortedKeysArray[i].includes('-') ? sortedKeysArray[i].split('-')[0] + '-' + (sortedKeysArray[i].includes("SDev") || sortedKeysArray[i].includes("AvgV") ? sortedKeysArray[i].split('-').sort(function (a, b) { return b.length - a.length; })[0] : sortedKeysArray[i].split('-').sort(function (a, b) { return b.length - a.length; })[1]) : sortedKeysArray[i]
                            , field: sortedKeysArray[i], width: '10%', visible: true
                        });
                }

                $scope.gridOptionsFinishRpt.data = data.FinishRptList;
                $scope.headerGridOptionsFinishRpt.columnDefs = [];
                $scope.headerGridOptionsFinishRpt.columnDefs.push(...$scope.gridOptionsFinishRpt.columnDefs);
                $scope.headerGridOptionsFinishRpt.columnDefs.forEach(column => {
                    column.cellClass = bgColorFinishRpt
                })
                for (var a = 0; a < 5; a++) {
                    $scope.headerGridOptionsFinishRpt.data.push(data.FinishRptList[a]);
                    //$scope.gridOptionsVatMakeRpt.data.splice(0, 1);
                }
                $scope.gridOptionsFinishRpt.data.splice(0, 5);

            }).finally(function () { $scope.loading = false; });
        }

        $scope.selectGridToLoadFinishRpt = function (data) {

            var dataObject = $scope.finishRptData.find(obj => {
                return obj.AttributeName === data
            });
            if (dataObject != null) {
                if (dataObject.KPI_Report_Name != "" && dataObject.KPI_Report_Name != null) {
                    var reportName = Number(dataObject.KPI_Report_Name[dataObject.KPI_Report_Name.length - 1]);
                    if (reportName > 1) {
                        $scope.loadgridKPIMultiDt(dataObject.KPI_RD_Name, $scope.finishRptFromDate, $scope.finishRptToDate, dataObject.LineNumber, true)
                    } else {
                        $scope.loadgridKPISingleDt(dataObject.KPI_RD_Name, $scope.finishRptFromDate, $scope.finishRptToDate, dataObject.LineNumber, true)
                    }
                }
            }
        }

        function bgColorFinishRpt(grid, row, col, rowRenderIndex, colRenderIndex) {

            if (grid != undefined && grid.element[0] != undefined && grid.element[0].id == 'gridHFinishRpt') {
                return 'greyRow'
            } else {
                var newStyle;
                if (row.entity.isClickable) {
                    newStyle = 'group1';
                }

                return newStyle;
            }
        }
        $scope.$on('scrolledFinishRpt', function (event, args) {
            document.getElementById('gridHFinishRpt').getElementsByClassName('ui-grid-viewport')[1].scrollLeft = document.getElementById('gridFinishReport').getElementsByClassName('ui-grid-viewport')[1].scrollLeft
            $scope.gridApi3.grid.isScrollingHorizontally = false;
            //console.log("called");
        });
        $scope.gridOptionsFinishRpt.onRegisterApi = function (gridApi) {
            $scope.gridApi3 = gridApi
            $scope.$watch('gridApi3.grid.isScrollingHorizontally', watchFunc);
            function watchFunc(newData) {
                $rootScope.$broadcast('scrolledFinishRpt');


            }
        }
       
        $scope.loadgridFinishRpt()

        //############################################### Milk Prescreen ######################################################//

        $scope.MilkPrerptcalendardate = (nav, toFrom) => {
            //debugger
            $timeout(function () {
                $(nav).datepicker({
                    onSelect: (dateText) => {
                        var date = new Date(dateText);
                        $scope[toFrom] = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                        $scope.finishRptDateChange();
                    },
                    defaultDate: $scope[toFrom]
                });
            }, 10)

        };
        $scope.fromMKPreDate = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
        $scope.toMKPreDate = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))

        $scope.viewReportsMilkPre = function () {
            $scope.removeGridData();
            $scope.loadgridVatMakeRpt($scope.fromMKPreDate, $scope.totoMKPreDateDate);
        }

        $scope.gridOptionsMilkPreRpt = {
            headerTemplate: 'app/Views/header.html',
            enableFullRowSelection: false,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 30,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: false,
            enablePinning: true,
            rowTemplate:
                '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                '</div>',
            columnDefs: [
                { field: 'LoadNumber', Name: 'LoadNo.', width: '5%', visible: true }
                , { field: 'ProducerTicket', width: '10%', visible: true }
                , { field: 'Route', width: '5%', visible: true }
                , { field: 'Truck_ID', width: '10%', visible: true }
                , { field: 'Btu', Name: 'BTU', width: '5%', visible: true }
                , { field: 'Supplier', Name: 'Supplier', width: '5%', visible: true }
                , { field: 'Bay_Number', Name: 'Bay No.', width: '5%', visible: true }
                , { field: 'SampleID', Name: 'PreScreeen SampleID', width: '10%', visible: true }
                , { field: 'SampleDate', Name: 'SampleDate', width: '5%', visible: true }
                , { field: 'SampleTime', Name: 'Sample Pulled Time', width: '5%', visible: true }

                , { field: 'Truck Sample Temperature', Name: 'Truck Sample Temp', width: '5%', visible: true }
                , { field: 'Prescreen Sample Receipt Time', Name: 'Sample Receipt Time', width: '5%', visible: true }
                , { field: 'Prescreen Receipt Temperature', Name: 'Receipt Temp', width: '5%', visible: true }
                , { field: 'SampleDate', Name: 'Sample Tested Date', width: '5%', visible: true }
                , { field: 'Prescreen Tested Time', Name: 'Sample Tested Time', width: '5%', visible: true }
                , { field: 'Prescreen Tested Temperature', Name: 'Tested Temp', width: '5%', visible: true }
                , { field: 'Reader Result', Name: 'Reader Result', width: '5%', visible: true }
                , { field: 'Antibiotic', Name: 'Antibiotic', width: '5%', visible: true }

                , { field: 'Tetracycline Presence', Name: 'Tetracycline Presence', width: '5%', visible: true }
                , { field: 'Tetracycline Reader Result', Name: 'Tetracycline Reader Result', width: '5%', visible: true }
                , { field: 'pH', Name: 'pH', width: '5%', visible: true }
                , { field: 'Color', Name: 'Color', width: '5%', visible: true }
                , { field: 'Cryoscope', Name: 'PreScreen Cryoscope', width: '5%', visible: true }
                , { field: 'MILK CRYOSCOPE', Name: 'Drip Sample Cryoscope', width: '5%', visible: true }
                , { field: 'UserName', Name: 'Licensed Operator', width: '5%', visible: true }
                , { field: 'Comment', Name: 'Comments', width: '5%', visible: true }


            ]
        };

        $scope.loadgridMilkPreRpt = function () {

            $scope.loading = true;

            console.log('loading grid');


            LRWService.getMilkPreRpt($scope.fromMKPreDate, $scope.fromMKPreDate).success(function (data) {

                if (data === null || data.MilkPreList === null || data.MilkPreList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";

                } else {
                    $scope.gridOptionsMilkPreRpt.paginationPageSizes.push(
                        data.MilkPreList.length
                    );

                    var MilkPreList = data.MilkPreList;
                    $scope.gridOptionsMilkPreRpt.data = MilkPreList;
                    console.log(MilkPreList);
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        //############################################## Milk PreScreen  #######End###########################################//
        //###############################################  ChseMakSuprDopRpt SCREEN ############################################//

        $scope.gridOptionsChseMakSuprDopRpt = {
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
                , { field: 'Line', width: '10%', visible: true }           
                , { field: 'Material', width: '10%', visible: true }
                , { field: 'MaterialDescription', width: '10%', visible: true }
                , { field: 'WorkCenter', width: '10%', visible: true }
                , { field: 'StorageBin', width: '10%', visible: true }
                , { field: 'AttGroupName', width: '10%', visible: true }
                , { field: 'AttributeName', width: '10%', visible: true }
                , { field: 'AttRank', width: '10%', visible: true }
                , { field: 'Lower', width: '10%', visible: true }
                , { field: 'Target', width: '10%', visible: true }
                , { field: 'Upper', width: '10%', visible: true }
                , { field: 'GridPos', width: '10%', visible: true }
                , { field: 'Min_LV', width: '10%', visible: true }
                , { field: 'Max_LV', width: '10%', visible: true }               
                , { field: 'ReportingKey', width: '10%', visible: true }


            ]
        };

        $scope.GridfromButtonChseMakSuprDopRpt = function () {



            $scope.refreshgridChseMakSuprDopRpt();

        };


        $scope.loadgridChseMakSuprDopRpt = function () {

            $scope.loading = true;

            console.log('loading grid');

            //LineNumber = document.getElementById('LineNumber').value;           
            //ProductionOrder = document.getElementById('ProductionOrder').value;
            //ProductCode = document.getElementById('ProductCode').value;
            //var StartDate = document.getElementById('RtimestampidF').value;
            //var EndDate = document.getElementById('RtimestampidT').value;
            //EndDate = document.getElementById('EndDate').value;

            // ChseMakSuprDopRptService.getChseMakSuprDopRpt(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate).success(function (data) {
            LRWService.getChseMakSuprDopRpt('1', '1216103', '100000168', '2020-05-02', '2020-05-13').success(function (data) {
                if (data === null || data.ChseMakSuprDopRptList === null || data.ChseMakSuprDopRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsChseMakSuprDopRpt.paginationPageSizes.push(
                        data.ChseMakSuprDopRptList.length
                    );
                    var ChseMakSuprDopRptList = data.ChseMakSuprDopRptList;
                    $scope.gridOptionsChseMakSuprDopRpt.data = ChseMakSuprDopRptList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        $scope.loadgridChseMakSuprDopRpt();

        $scope.gridOptionsChseMakSuprDopRpt.onRegisterApi = function (gridApi) {
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


                    document.getElementById('ProductionDate').value = row.entity.ProductionDate;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    document.getElementById('Line').value = row.entity.Line;
                    document.getElementById('Material').value = row.entity.Material;
                    document.getElementById('MaterialDescription').value = row.entity.MaterialDescription;
                    document.getElementById('WorkCenter ').value = row.entity.WorkCenter;
                    document.getElementById('StorageBin ').value = row.entity.StorageBin;
                    document.getElementById('AttGroupName ').value = row.entity.AttGroupName;
                    document.getElementById('AttributeName').value = row.entity.AttributeName;
                    document.getElementById('AttRank').value = row.entity.AttRank;
                    document.getElementById('Lower').value = row.entity.Lower;
                    document.getElementById('Target').value = row.entity.Target;
                    document.getElementById('Upper').value = row.entity.Upper;
                    document.getElementById('GridPos').value = row.entity.GridPos;
                    document.getElementById('Min_LV').value = row.entity.Min_LV;
                    document.getElementById('Max_LV').value = row.entity.Max_LV;
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

                        document.getElementById('ProductionDate').value = "";
                        document.getElementById('ProductionOrder').value = "";
                        document.getElementById('Line').value = "";
                        document.getElementById('Material').value = "";
                        document.getElementById('MaterialDescription').value = "";
                        document.getElementById('WorkCenter ').value = "";
                        document.getElementById('StorageBin ').value = "";
                        document.getElementById('AttGroupName ').value = "";
                        document.getElementById('AttributeName').value = "";
                        document.getElementById('AttRank').value = "";
                        document.getElementById('Lower').value = "";
                        document.getElementById('Target').value = "";
                        document.getElementById('Upper').value = "";
                        document.getElementById('GridPos').value = "";
                        document.getElementById('Min_LV').value = "";
                        document.getElementById('Max_LV').value = "";
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



        $scope.refreshgridChseMakSuprDopRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsChseMakSuprDopRpt.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridChseMakSuprDopRpt();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };

        //###############################################  DOP Separator SCREEN ############################################//

        $scope.gridOptionsDOPSeparatorRpt = {
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
                , { field: 'Line', width: '10%', visible: true }
                , { field: 'Material', width: '10%', visible: true }
                , { field: 'MaterialDescription', width: '10%', visible: true }
                , { field: 'WorkCenter', width: '10%', visible: true }
                , { field: 'StorageBin', width: '10%', visible: true }
                , { field: 'AttGroupName', width: '10%', visible: true }
                , { field: 'AttributeName', width: '10%', visible: true }
                , { field: 'AttRank', width: '10%', visible: true }
                , { field: 'Lower', width: '10%', visible: true }
                , { field: 'Target', width: '10%', visible: true }
                , { field: 'Upper', width: '10%', visible: true }
                , { field: 'GridPos', width: '10%', visible: true }
                , { field: 'Min_LV', width: '10%', visible: true }
                , { field: 'Max_LV', width: '10%', visible: true }
                , { field: 'ReportingKey', width: '10%', visible: true }


            ]
        };

        $scope.GridfromButtonDOPSeparatorRpt = function () {



            $scope.refreshgridDOPSeparatorRpt();

        };


        $scope.loadgridDOPSeparatorRpt = function () {

            $scope.loading = true;

            console.log('loading grid');

            //LineNumber = document.getElementById('LineNumber').value;           
            //ProductionOrder = document.getElementById('ProductionOrder').value;
            //ProductCode = document.getElementById('ProductCode').value;
            //var StartDate = document.getElementById('RtimestampidF').value;
            //var EndDate = document.getElementById('RtimestampidT').value;
            //EndDate = document.getElementById('EndDate').value;

            // DOPSeparatorRptService.getDOPSeparatorRpt(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate).success(function (data) {
            LRWService.getDOPSeparatorRpt('1', '1216103', '100000168', '2020-05-02', '2020-05-13').success(function (data) {
                if (data === null || data.DOPSeparatorRptList === null || data.DOPSeparatorRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsDOPSeparatorRpt.paginationPageSizes.push(
                        data.DOPSeparatorRptList.length
                    );
                    var DOPSeparatorRptList = data.DOPSeparatorRptList;
                    $scope.gridOptionsDOPSeparatorRpt.data = DOPSeparatorRptList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        $scope.loadgridDOPSeparatorRpt();

        $scope.gridOptionsDOPSeparatorRpt.onRegisterApi = function (gridApi) {
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


                    document.getElementById('ProductionDate').value = row.entity.ProductionDate;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    document.getElementById('Line').value = row.entity.Line;
                    document.getElementById('Material').value = row.entity.Material;
                    document.getElementById('MaterialDescription').value = row.entity.MaterialDescription;
                    document.getElementById('WorkCenter ').value = row.entity.WorkCenter;
                    document.getElementById('StorageBin ').value = row.entity.StorageBin;
                    document.getElementById('AttGroupName ').value = row.entity.AttGroupName;
                    document.getElementById('AttributeName').value = row.entity.AttributeName;
                    document.getElementById('AttRank').value = row.entity.AttRank;
                    document.getElementById('Lower').value = row.entity.Lower;
                    document.getElementById('Target').value = row.entity.Target;
                    document.getElementById('Upper').value = row.entity.Upper;
                    document.getElementById('GridPos').value = row.entity.GridPos;
                    document.getElementById('Min_LV').value = row.entity.Min_LV;
                    document.getElementById('Max_LV').value = row.entity.Max_LV;
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

                        document.getElementById('ProductionDate').value = "";
                        document.getElementById('ProductionOrder').value = "";
                        document.getElementById('Line').value = "";
                        document.getElementById('Material').value = "";
                        document.getElementById('MaterialDescription').value = "";
                        document.getElementById('WorkCenter ').value = "";
                        document.getElementById('StorageBin ').value = "";
                        document.getElementById('AttGroupName ').value = "";
                        document.getElementById('AttributeName').value = "";
                        document.getElementById('AttRank').value = "";
                        document.getElementById('Lower').value = "";
                        document.getElementById('Target').value = "";
                        document.getElementById('Upper').value = "";
                        document.getElementById('GridPos').value = "";
                        document.getElementById('Min_LV').value = "";
                        document.getElementById('Max_LV').value = "";
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



        $scope.refreshgridDOPSeparatorRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsDOPSeparatorRpt.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridDOPSeparatorRpt();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };
        //###############################################  Recipe Plan SCREEN ############################################//

        $scope.gridOptionsRecPlnRpt = {
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
                , { field: 'VPAID', width: '10%', visible: true }
                , { field: 'LineNumber', width: '10%', visible: true }
                , { field: 'Poid', width: '10%', visible: true }
                , { field: 'LogicalVat', width: '10%', visible: true }
                , { field: 'PhysicalVat', width: '10%', visible: true }
                , { field: 'VatProgram', width: '10%', visible: true }
                , { field: 'CookProgram', width: '10%', visible: true }
                , { field: 'DrainProgram', width: '10%', visible: true }
                , { field: 'HtstFeedRate', width: '10%', visible: true }                
                , { field: 'Sep1FeedRate', width: '10%', visible: true }
                , { field: 'Sep2FeedRate', width: '10%', visible: true }
                , { field: 'VatFillFPRatio', width: '10%', visible: true }
                , { field: 'TotalCuts', width: '10%', visible: true }
                , { field: 'MilkSupplySilo', width: '10%', visible: true }
                , { field: 'FortSupplySilo', width: '10%', visible: true }
                , { field: 'SwCrSupplySilo', width: '10%', visible: true }
                , { field: 'WCSupplySilo', width: '10%', visible: true }
                , { field: 'StepNumber', width: '10%', visible: true }
                , { field: 'StepDesc', width: '10%', visible: true }                
                , { field: 'NextStepTime', width: '10%', visible: true }
                , { field: 'StepTime', width: '10%', visible: true }
                , { field: 'ActualTime', width: '10%', visible: true }
                , { field: 'Planneddwelltime', width: '10%', visible: true }
                , { field: 'CalcPlannedtime', width: '10%', visible: true }
                , { field: 'Delta', width: '10%', visible: true }



            ]
        };

        $scope.GridfromButtonRecPlnRpt = function () {



            $scope.refreshgridRecPlnRpt();

        };


        $scope.loadgridRecPlnRpt = function () {

            $scope.loading = true;

            console.log('loading grid');

            //LineNumber = document.getElementById('LineNumber').value;           
            
            //var StartDate = document.getElementById('RtimestampidF').value;
            //var EndDate = document.getElementById('RtimestampidT').value;
            //var POid = document.getElementById('RtimestampidT').value;

            // RecPlnRptService.getRecPlnRpt(LineNumber, StartDate, EndDate, POid).success(function (data) {
            LRWService.getRecPlnRpt('1', '2020-01-23', '2020-01-24', '1210598').success(function (data) {
                if (data === null || data.RecPlnRptList === null || data.RecPlnRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsRecPlnRpt.paginationPageSizes.push(
                        data.RecPlnRptList.length
                    );
                    var RecPlnRptList = data.RecPlnRptList;
                    $scope.gridOptionsRecPlnRpt.data = RecPlnRptList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        $scope.loadgridRecPlnRpt();

        $scope.gridOptionsRecPlnRpt.onRegisterApi = function (gridApi) {
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
                    document.getElementById('VPAID').value = row.entity.VPAID;
                    document.getElementById('LineNumber').value = row.entity.LineNumber;
                    document.getElementById('Poid').value = row.entity.Poid;
                    document.getElementById('LogicalVat').value = row.entity.LogicalVat;
                    document.getElementById('PhysicalVat').value = row.entity.PhysicalVat;
                    document.getElementById('VatProgram').value = row.entity.VatProgram;
                    document.getElementById('CookProgram').value = row.entity.CookProgram;
                    document.getElementById('DrainProgram').value = row.entity.DrainProgram;
                    document.getElementById('HtstFeedRate').value = row.entity.HtstFeedRate;
                    document.getElementById('Sep1FeedRate').value = row.entity.Sep1FeedRate;
                    document.getElementById('Sep2FeedRate').value = row.entity.Sep2FeedRate;
                    document.getElementById('VatFillFPRatio').value = row.entity.VatFillFPRatio;
                    document.getElementById('TotalCuts').value = row.entity.TotalCuts;
                    document.getElementById('MilkSupplySilo').value = row.entity.MilkSupplySilo;
                    document.getElementById('FortSupplySilo').value = row.entity.FortSupplySilo;
                    document.getElementById('SwCrSupplySilo').value = row.entity.SwCrSupplySilo;
                    document.getElementById('WCSupplySilo').value = row.entity.WCSupplySilo;
                    document.getElementById('StepNumber').value = row.entity.StepNumber;
                    document.getElementById('StepDesc').value = row.entity.StepDesc;
                    document.getElementById('NextStepTime').value = row.entity.NextStepTime;
                    document.getElementById('StepTime').value = row.entity.StepTime;
                    document.getElementById('ActualTime').value = row.entity.ActualTime;
                    document.getElementById('Planneddwelltime').value = row.entity.Planneddwelltime;
                    document.getElementById('CalcPlannedtime').value = row.entity.CalcPlannedtime;
                    document.getElementById('Delta').value = row.entity.Delta;




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
                        document.getElementById('VPAID').value = "";
                        document.getElementById('LineNumber').value = "";
                        document.getElementById('Poid').value = "";
                        document.getElementById('LogicalVat').value = "";
                        document.getElementById('PhysicalVat').value = "";
                        document.getElementById('VatProgram').value = "";
                        document.getElementById('CookProgram').value = "";
                        document.getElementById('DrainProgram').value = "";
                        document.getElementById('HtstFeedRate').value = "";
                        document.getElementById('Sep1FeedRate').value = "";
                        document.getElementById('Sep2FeedRate').value = "";
                        document.getElementById('VatFillFPRatio').value = "";
                        document.getElementById('TotalCuts').value = "";
                        document.getElementById('MilkSupplySilo').value = "";
                        document.getElementById('FortSupplySilo').value = "";
                        document.getElementById('SwCrSupplySilo').value = "";
                        document.getElementById('WCSupplySilo').value = "";
                        document.getElementById('StepNumber').value = "";
                        document.getElementById('StepDesc').value = "";
                        document.getElementById('NextStepTime').value = "";
                        document.getElementById('StepTime').value = "";
                        document.getElementById('ActualTime').value = "";
                        document.getElementById('Planneddwelltime').value = "";
                        document.getElementById('CalcPlannedtime').value = "";
                        document.getElementById('Delta').value = "";


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



        $scope.refreshgridRecPlnRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsRecPlnRpt.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridRecPlnRpt();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };

        //###############################################  DOP String Cheese ############################################//        

        $scope.gridOptionsDOPStrChseRpt = {
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
                , { field: 'Line', width: '10%', visible: true }
                , { field: 'Material', width: '10%', visible: true }
                , { field: 'MaterialDescription', width: '10%', visible: true }
                , { field: 'WorkCenter', width: '10%', visible: true }               
                , { field: 'AttGroupName', width: '10%', visible: true }
                , { field: 'AttributeName', width: '10%', visible: true }
                , { field: 'AttRank', width: '10%', visible: true }
                , { field: 'CodeSection', width: '10%', visible: true }
                , { field: 'Lower', width: '10%', visible: true }
                , { field: 'Target', width: '10%', visible: true }
                , { field: 'Upper', width: '10%', visible: true }               
                , { field: 'ReportingKey', width: '10%', visible: true }

            ]
        };

        $scope.GridfromButtonDOPStrChseRpt = function () {



            $scope.refreshgridDOPStrChseRpt();

        };


        $scope.loadgridDOPStrChseRpt = function () {

            $scope.loading = true;

            console.log('loading grid');

            //LineNumber = document.getElementById('LineNumber').value;           
            //ProductionOrder = document.getElementById('ProductionOrder').value;
            //ProductCode = document.getElementById('ProductCode').value;
            //var StartDate = document.getElementById('RtimestampidF').value;
            //var EndDate = document.getElementById('RtimestampidT').value;
            //EndDate = document.getElementById('EndDate').value;

            // DOPStrChseRptService.getDOPStrChseRpt(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate).success(function (data) {
            LRWService.getDOPStrChseRpt('1', '1216100', '100002898', '2020-01-23', '2020-01-24').success(function (data) {
                if (data === null || data.DOPStrChseRptList === null || data.DOPStrChseRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsDOPStrChseRpt.paginationPageSizes.push(
                        data.DOPStrChseRptList.length
                    );
                    var DOPStrChseRptList = data.DOPStrChseRptList;
                    $scope.gridOptionsDOPStrChseRpt.data = DOPStrChseRptList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        $scope.loadgridDOPStrChseRpt();

        $scope.gridOptionsDOPStrChseRpt.onRegisterApi = function (gridApi) {
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


                    document.getElementById('ProductionDate').value = row.entity.ProductionDate;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    document.getElementById('Line').value = row.entity.Line;
                    document.getElementById('Material').value = row.entity.Material;
                    document.getElementById('MaterialDescription').value = row.entity.MaterialDescription;
                    document.getElementById('WorkCenter ').value = row.entity.WorkCenter;
                    //document.getElementById('StorageBin ').value = row.entity.StorageBin;
                    document.getElementById('AttGroupName ').value = row.entity.AttGroupName;
                    document.getElementById('AttributeName').value = row.entity.AttributeName;
                    document.getElementById('AttRank').value = row.entity.AttRank;
                    document.getElementById('CodeSection').value = row.entity.CodeSection;
                    document.getElementById('Lower').value = row.entity.Lower;
                    document.getElementById('Target').value = row.entity.Target;
                    document.getElementById('Upper').value = row.entity.Upper;
                    //document.getElementById('GridPos').value = row.entity.GridPos;
                    //document.getElementById('Min_LV').value = row.entity.Min_LV;
                    //document.getElementById('Max_LV').value = row.entity.Max_LV;
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

                        document.getElementById('ProductionDate').value = "";
                        document.getElementById('ProductionOrder').value = "";
                        document.getElementById('Line').value = "";
                        document.getElementById('Material').value = "";
                        document.getElementById('MaterialDescription').value = "";
                        document.getElementById('WorkCenter ').value = "";
                        //document.getElementById('StorageBin ').value = "";
                        document.getElementById('AttGroupName ').value = "";
                        document.getElementById('AttributeName').value = "";
                        document.getElementById('AttRank').value = "";
                        document.getElementById('CodeSection').value = "";
                        document.getElementById('Lower').value = "";
                        document.getElementById('Target').value = "";
                        document.getElementById('Upper').value = "";
                        //document.getElementById('GridPos').value = "";
                        //document.getElementById('Min_LV').value = "";
                        //document.getElementById('Max_LV').value = "";
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



        $scope.refreshgridDOPStrChseRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsDOPStrChseRpt.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridDOPStrChseRpt();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };

        //###############################################  Cheese Analysis ############################################// 
        $scope.gridOptionsChseAnalysisRpt = {
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
                { field: 'Line', width: '10%', visible: true }
                , { field: 'Production_Date', width: '10%', visible: true }
                , { field: 'Production_Order', width: '10%', visible: true }
                , { field: 'Product_Code', width: '10%', visible: true }
                , { field: 'Inspection_Lot', width: '10%', visible: true }
                , { field: 'Inspection_Type', width: '10%', visible: true }
                , { field: 'Batch_Number', width: '10%', visible: true }
                , { field: 'Sample_ID', width: '10%', visible: true }
                , { field: 'Sample_Date_Time', width: '10%', visible: true }
                , { field: 'Moist ', width: '10%', visible: true }
                , { field: 'Fat', width: '10%', visible: true }
                , { field: 'FDB', width: '10%', visible: true }
                , { field: 'pH', width: '10%', visible: true }
                , { field: 'Salt', width: '10%', visible: true }
                , { field: 'Moist_HiLmt ', width: '10%', visible: true }
                , { field: 'Moist_TgLmt', width: '10%', visible: true }
                , { field: 'Moist_LoLmt', width: '10%', visible: true }
                , { field: 'Moist_InSpec ', width: '10%', visible: true }
                , { field: 'fat_HiLmt', width: '10%', visible: true }
                , { field: 'fat_TgLmt', width: '10%', visible: true }
                , { field: 'fat_LoLmt', width: '10%', visible: true }
                , { field: 'fat_InSpec ', width: '10%', visible: true }
                , { field: 'fdb_HiLmt', width: '10%', visible: true }
                , { field: 'fdb_TgLmt', width: '10%', visible: true }
                , { field: 'fdb_LoLmt', width: '10%', visible: true }
                , { field: 'fdb_InSpec ', width: '10%', visible: true }
                , { field: 'pH_HiLmt', width: '10%', visible: true }
                , { field: 'pH_TgLmt', width: '10%', visible: true }
                , { field: 'pH_LoLmt ', width: '10%', visible: true }
                , { field: 'pH_InSpec ', width: '10%', visible: true }
                , { field: 'salt_HiLmt', width: '10%', visible: true }
                , { field: 'salt_TgLmt', width: '10%', visible: true }
                , { field: 'salt_LoLmt', width: '10%', visible: true }
                , { field: 'salt_InSpec', width: '10%', visible: true }
                , { field: 'Moist_CorpHiLmt', width: '10%', visible: true }
                , { field: 'Moist_CorpTgLmt ', width: '10%', visible: true }
                , { field: 'Moist_CorpLoLmt', width: '10%', visible: true }
                , { field: 'Moist_CorpInSpec ', width: '10%', visible: true }
                , { field: 'fat_CorpHiLmt', width: '10%', visible: true }
                , { field: 'fat_CorpTgLmt', width: '10%', visible: true }
                , { field: 'fat_CorpLoLmt', width: '10%', visible: true }
                , { field: 'fat_CorpInSpec  ', width: '10%', visible: true }
                , { field: 'fdb_CorpHiLmt', width: '10%', visible: true }
                , { field: 'fdb_CorpTgLmt', width: '10%', visible: true }
                , { field: 'fdb_CorpLoLmt ', width: '10%', visible: true }
                , { field: 'fdb_CorpInSpec ', width: '10%', visible: true }
                , { field: 'pH_CorpHiLmt', width: '10%', visible: true }
                , { field: 'pH_CorpTgLmt', width: '10%', visible: true }
                , { field: 'pH_CorpLoLmt ', width: '10%', visible: true }
                , { field: 'pH_CorpInSpec', width: '10%', visible: true }
                , { field: 'salt_CorpHiLmt', width: '10%', visible: true }
                , { field: 'salt_CorpTgLmt', width: '10%', visible: true }
                , { field: 'salt_CorpLoLmt', width: '10%', visible: true }
                , { field: 'salt_CorpInSpec', width: '10%', visible: true }
                , { field: 'comment', width: '10%', visible: true }


            ]
        };

        $scope.GridfromButtonChseAnalysisRpt = function () {



            $scope.refreshgridChseAnalysisRpt();

        };


        $scope.loadgridChseAnalysisRpt = function () {

            $scope.loading = true;

            console.log('loading grid');

            //LineNumber = document.getElementById('LineNumber').value;           
            //ProductionOrder = document.getElementById('ProductionOrder').value;
            //ProductCode = document.getElementById('ProductCode').value;
            //var StartDate = document.getElementById('RtimestampidF').value;
            //var EndDate = document.getElementById('RtimestampidT').value;
            //EndDate = document.getElementById('EndDate').value;
            
            LRWService.getChseAnalysisRpt('1', '2020-01-24', '2020-01-25', '1211170', '100000208', 'Extrusion, Ribbon, RMC').success(function (data) {
                if (data === null || data.ChseAnalysisRptList === null || data.ChseAnalysisRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsChseAnalysisRpt.paginationPageSizes.push(
                        data.ChseAnalysisRptList.length
                    );
                    var ChseAnalysisRptList = data.ChseAnalysisRptList;
                    $scope.gridOptionsChseAnalysisRpt.data = ChseAnalysisRptList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

        };

        $scope.loadgridChseAnalysisRpt();

        $scope.gridOptionsChseAnalysisRpt.onRegisterApi = function (gridApi) {
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


                    document.getElementById('Line').value = row.entity.Line;
                    document.getElementById('Production_Date').value = row.entity.Production_Date;
                    document.getElementById('Production_Order').value = row.entity.Production_Order;
                    document.getElementById('Product_Code').value = row.entity.Product_Code;
                    document.getElementById('Inspection_Lot').value = row.entity.Inspection_Lot;
                    document.getElementById('Inspection_Type').value = row.entity.Inspection_Type;
                    document.getElementById('Batch_Number').value = row.entity.Batch_Number;
                    document.getElementById('Sample_ID').value = row.entity.Sample_ID;
                    document.getElementById('Sample_Date_Time').value = row.entity.Sample_Date_Time;
                    document.getElementById('Moist').value = row.entity.Moist;
                    document.getElementById('Fat').value = row.entity.Fat;
                    document.getElementById('FDB').value = row.entity.FDB;
                    document.getElementById('pH').value = row.entity.pH;
                    document.getElementById('Salt').value = row.entity.Salt;
                    document.getElementById('Moist_HiLmt').value = row.entity.Moist_HiLmt;
                    document.getElementById('Moist_TgLmt').value = row.entity.Moist_TgLmt;
                    document.getElementById('Moist_LoLmt').value = row.entity.Moist_LoLmt;
                    document.getElementById('Moist_InSpec').value = row.entity.Moist_InSpec;
                    document.getElementById('fat_HiLmt').value = row.entity.fat_HiLmt;
                    document.getElementById('fat_TgLmt').value = row.entity.fat_TgLmt;
                    document.getElementById('fat_LoLmt').value = row.entity.fat_LoLmt;
                    document.getElementById('fat_InSpec').value = row.entity.fat_InSpec;
                    document.getElementById('fdb_HiLmt').value = row.entity.fdb_HiLmt;
                    document.getElementById('fdb_TgLmt').value = row.entity.fdb_TgLmt;
                    document.getElementById('fdb_LoLmt').value = row.entity.fdb_LoLmt;
                    document.getElementById('fdb_InSpec').value = row.entity.fdb_InSpec;
                    document.getElementById('pH_HiLmt').value = row.entity.pH_HiLmt;
                    document.getElementById('pH_TgLmt').value = row.entity.pH_TgLmt;
                    document.getElementById('pH_LoLmt').value = row.entity.pH_LoLmt;
                    document.getElementById('pH_InSpec').value = row.entity.pH_InSpec;
                    document.getElementById('salt_HiLmt').value = row.entity.salt_HiLmt;
                    document.getElementById('salt_TgLmt').value = row.entity.salt_TgLmt;
                    document.getElementById('salt_LoLmt').value = row.entity.salt_LoLmt;
                    document.getElementById('salt_InSpec').value = row.entity.salt_InSpec;
                    document.getElementById('Moist_CorpHiLmt').value = row.entity.Moist_CorpHiLmt;
                    document.getElementById('Moist_CorpTgLmt').value = row.entity.Moist_CorpTgLmt;
                    document.getElementById('Moist_CorpLoLmt').value = row.entity.Moist_CorpLoLmt;
                    document.getElementById('Moist_CorpInSpec').value = row.entity.Moist_CorpInSpec;
                    document.getElementById('fat_CorpHiLmt').value = row.entity.fat_CorpHiLmt;
                    document.getElementById('fat_CorpTgLmt').value = row.entity.fat_CorpTgLmt;
                    document.getElementById('fat_CorpLoLmt').value = row.entity.fat_CorpLoLmt;
                    document.getElementById('fat_CorpInSpec').value = row.entity.fat_CorpInSpec;
                    document.getElementById('fdb_CorpHiLmt').value = row.entity.fdb_CorpHiLmt;
                    document.getElementById('fdb_CorpTgLmt').value = row.entity.fdb_CorpTgLmt;
                    document.getElementById('fdb_CorpLoLmt').value = row.entity.fdb_CorpLoLmt;
                    document.getElementById('fdb_CorpInSpec').value = row.entity.fdb_CorpInSpec;
                    document.getElementById('pH_CorpHiLmt').value = row.entity.pH_CorpHiLmt;
                    document.getElementById('pH_CorpTgLmt').value = row.entity.pH_CorpTgLmt;
                    document.getElementById('pH_CorpLoLmt').value = row.entity.pH_CorpLoLmt;
                    document.getElementById('pH_CorpInSpec').value = row.entity.pH_CorpInSpec;
                    document.getElementById('salt_CorpHiLmt').value = row.entity.salt_CorpHiLmt;
                    document.getElementById('salt_CorpTgLmt').value = row.entity.salt_CorpTgLmt;
                    document.getElementById('salt_CorpLoLmt').value = row.entity.salt_CorpLoLmt;
                    document.getElementById('salt_CorpInSpec').value = row.entity.salt_CorpInSpec;
                    document.getElementById('comment').value = row.entity.comment;



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

                        document.getElementById('Line').value = "";
                        document.getElementById('Production_Date').value = "";
                        document.getElementById('Production_Order').value = "";
                        document.getElementById('Product_Code').value = "";
                        document.getElementById('Inspection_Lot').value = "";
                        document.getElementById('Inspection_Type').value = "";
                        document.getElementById('Batch_Number').value = "";
                        document.getElementById('Sample_ID').value = "";
                        document.getElementById('Sample_Date_Time').value = "";
                        document.getElementById('Moist ').value = "";
                        document.getElementById('Fat').value = "";
                        document.getElementById('FDB').value = "";
                        document.getElementById('pH').value = "";
                        document.getElementById('Salt').value = "";
                        document.getElementById('Moist_HiLmt ').value = "";
                        document.getElementById('Moist_TgLmt').value = "";
                        document.getElementById('Moist_LoLmt').value = "";
                        document.getElementById('Moist_InSpec ').value = "";
                        document.getElementById('fat_HiLmt').value = "";
                        document.getElementById('fat_TgLmt').value = "";
                        document.getElementById('fat_LoLmt').value = "";
                        document.getElementById('fat_InSpec ').value = "";
                        document.getElementById('fdb_HiLmt').value = "";
                        document.getElementById('fdb_TgLmt').value = "";
                        document.getElementById('fdb_LoLmt').value = "";
                        document.getElementById('fdb_InSpec ').value = "";
                        document.getElementById('pH_HiLmt').value = "";
                        document.getElementById('pH_TgLmt').value = "";
                        document.getElementById('pH_LoLmt ').value = "";
                        document.getElementById('pH_InSpec ').value = "";
                        document.getElementById('salt_HiLmt').value = "";
                        document.getElementById('salt_TgLmt').value = "";
                        document.getElementById('salt_LoLmt').value = "";
                        document.getElementById('salt_InSpec').value = "";
                        document.getElementById('Moist_CorpHiLmt').value = "";
                        document.getElementById('Moist_CorpTgLmt ').value = "";
                        document.getElementById('Moist_CorpLoLmt').value = "";
                        document.getElementById('Moist_CorpInSpec ').value = "";
                        document.getElementById('fat_CorpHiLmt').value = "";
                        document.getElementById('fat_CorpTgLmt').value = "";
                        document.getElementById('fat_CorpLoLmt').value = "";
                        document.getElementById('fat_CorpInSpec  ').value = "";
                        document.getElementById('fdb_CorpHiLmt').value = "";
                        document.getElementById('fdb_CorpTgLmt').value = "";
                        document.getElementById('fdb_CorpLoLmt ').value = "";
                        document.getElementById('fdb_CorpInSpec ').value = "";
                        document.getElementById('pH_CorpHiLmt').value = "";
                        document.getElementById('pH_CorpTgLmt').value = "";
                        document.getElementById('pH_CorpLoLmt ').value = "";
                        document.getElementById('pH_CorpInSpec').value = "";
                        document.getElementById('salt_CorpHiLmt').value = "";
                        document.getElementById('salt_CorpTgLmt').value = "";
                        document.getElementById('salt_CorpLoLmt').value = "";
                        document.getElementById('salt_CorpInSpec').value = "";
                        document.getElementById('comment').value = "";



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



        $scope.refreshgridChseAnalysisRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsChseAnalysisRpt.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridChseAnalysisRpt();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };

        //############################################# Powder Blend Screen  ###############################################//
        
        $scope.gridOptionsPowderBlndRpt = {
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
                { field: 'NoltecUnit', width: '10%', visible: true }
                , { field: 'CheeseLine', width: '10%', visible: true }
                , { field: 'DataTimeStamp', width: '10%', visible: true }
                , { field: 'DisplayTimeStamp', width: '10%', visible: true }
                , { field: 'CodeSection', width: '10%', visible: true }
                , { field: 'Batch', width: '10%', visible: true }
                , { field: 'Recipe', width: '10%', visible: true }
                , { field: 'ProductionOrder', width: '10%', visible: true }
                , { field: 'Micros', width: '10%', visible: true }
                , { field: 'Minor1', width: '10%', visible: true }
                , { field: 'Minor2', width: '10%', visible: true }
                , { field: 'Minor3', width: '10%', visible: true }
                , { field: 'Minor4', width: '10%', visible: true }
                , { field: 'Major1', width: '10%', visible: true }
                , { field: 'Major2', width: '10%', visible: true }
                , { field: 'Major3', width: '10%', visible: true }
                , { field: 'Major4', width: '10%', visible: true }
                , { field: 'BatchTotal', width: '10%', visible: true }



            ]
        };

        $scope.GridfromButtonPowderBlndRpt = function () {



            $scope.refreshgridPowderBlndRpt();

        };


        $scope.loadgridPowderBlndRpt = function () {

            $scope.loading = true;

            console.log('loading grid');

            //LineNumber = document.getElementById('LineNumber').value;           
            //ProductionOrder = document.getElementById('ProductionOrder').value;
            //ProductCode = document.getElementById('ProductCode').value;
            //var StartDate = document.getElementById('RtimestampidF').value;
            //var EndDate = document.getElementById('RtimestampidT').value;
            //EndDate = document.getElementById('EndDate').value;

            LRWService.getPowderBlndRpt('1', '2020-03-25', '2020-03-25', '1216704').success(function (data) {
                if (data === null || data.PowderBlndRptList === null || data.PowderBlndRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsPowderBlndRpt.paginationPageSizes.push(
                        data.PowderBlndRptList.length
                    );
                    var PowderBlndRptList = data.PowderBlndRptList;
                    $scope.gridOptionsPowderBlndRpt.data = PowderBlndRptList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });

            

        };

        $scope.loadgridPowderBlndRpt();
        

        $scope.gridOptionsPowderBlndRpt.onRegisterApi = function (gridApi) {
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


                    document.getElementById('NoltecUnit').value = row.entity.NoltecUnit;
                    document.getElementById('CheeseLine').value = row.entity.CheeseLine;
                    document.getElementById('DataTimeStamp').value = row.entity.DataTimeStamp;
                    document.getElementById('DisplayTimeStamp').value = row.entity.DisplayTimeStamp;
                    document.getElementById('CodeSection').value = row.entity.CodeSection;
                    document.getElementById('Batch').value = row.entity.Batch;
                    document.getElementById('Recipe').value = row.entity.Recipe;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    document.getElementById('Micros').value = row.entity.Micros;
                    document.getElementById('Minor1').value = row.entity.Minor1;
                    document.getElementById('Minor2').value = row.entity.Minor2;
                    document.getElementById('Minor3').value = row.entity.Minor3;
                    document.getElementById('Minor4').value = row.entity.Minor4;
                    document.getElementById('Major1').value = row.entity.Major1;
                    document.getElementById('Major2').value = row.entity.Major2;
                    document.getElementById('Major3').value = row.entity.Major3;
                    document.getElementById('Major4').value = row.entity.Major4;
                    document.getElementById('BatchTotal').value = row.entity.BatchTotal;




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

                        document.getElementById('NoltecUnit').value = "";
                        document.getElementById('CheeseLine').value = "";
                        document.getElementById('DataTimeStamp').value = "";
                        document.getElementById('DisplayTimeStamp').value = "";
                        document.getElementById('CodeSection').value = "";
                        document.getElementById('Batch').value = "";
                        document.getElementById('Recipe').value = "";
                        document.getElementById('ProductionOrder').value = "";
                        document.getElementById('Micros').value = "";
                        document.getElementById('Minor1').value = "";
                        document.getElementById('Minor2').value = "";
                        document.getElementById('Minor3').value = "";
                        document.getElementById('Minor4').value = "";
                        document.getElementById('Major1').value = "";
                        document.getElementById('Major2').value = "";
                        document.getElementById('Major3').value = "";
                        document.getElementById('Major4').value = "";
                        document.getElementById('BatchTotal').value = "";




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



        $scope.refreshgridPowderBlndRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsPowderBlndRpt.data = [];

            $timeout(function () {
                //if (nav === 'Top') {

                $scope.loadgridPowderBlndRpt();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };
        
        //############################################# Powder Blend Total Screen  ###############################################//

        $scope.gridOptionsPowderBlndTotalRpt = {
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
                { field: 'Report_Type', width: '10%', visible: true }
                , { field: 'NoltecUnit', width: '10%', visible: true }
                , { field: 'CheeseLine', width: '10%', visible: true }
                , { field: 'DataTimeStamp', width: '10%', visible: true }
                , { field: 'DisplayTimeStamp', width: '10%', visible: true }
                , { field: 'CodeSection', width: '10%', visible: true }
                , { field: 'Batch', width: '10%', visible: true }
                , { field: 'Recipe', width: '10%', visible: true }
                , { field: 'ProductionOrder', width: '10%', visible: true }
                , { field: 'Micros', width: '10%', visible: true }
                , { field: 'Minor1', width: '10%', visible: true }
                , { field: 'Minor2', width: '10%', visible: true }
                , { field: 'Minor3', width: '10%', visible: true }
                , { field: 'Minor4', width: '10%', visible: true }
                , { field: 'Major1', width: '10%', visible: true }
                , { field: 'Major2', width: '10%', visible: true }
                , { field: 'Major3', width: '10%', visible: true }
                , { field: 'Major4', width: '10%', visible: true }
                , { field: 'BatchTotal', width: '10%', visible: true }



            ]
        };

        $scope.GridfromButtonPowderBlndTotalRpt = function () {


            

            $scope.refreshgridPowderBlndTotalRpt();

        };


        $scope.loadgridPowderBlndTotalRpt = function () {

            $scope.loading = true;

            console.log('loading grid');

            //LineNumber = document.getElementById('LineNumber').value;           
            //ProductionOrder = document.getElementById('ProductionOrder').value;
            //ProductCode = document.getElementById('ProductCode').value;
            //var StartDate = document.getElementById('RtimestampidF').value;
            //var EndDate = document.getElementById('RtimestampidT').value;
            //EndDate = document.getElementById('EndDate').value;

            LRWService.getPowderBlndTotalRpt('1', '2020-03-25', '2020-03-25', '1216704').success(function (data) {
                if (data === null || data.PowderBlndTotalRptList === null || data.PowderBlndTotalRptList.length === 0) {

                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsPowderBlndTotalRpt.paginationPageSizes.push(
                        data.PowderBlndTotalRptList.length
                    );
                    var PowderBlndTotalRptList = data.PowderBlndTotalRptList;
                    $scope.gridOptionsPowderBlndTotalRpt.data = PowderBlndTotalRptList;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; });



        };

        $scope.loadgridPowderBlndTotalRpt();


        $scope.gridOptionsPowderBlndTotalRpt.onRegisterApi = function (gridApi) {
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

                    document.getElementById('Report_Type').value = row.entity.Report_Type;
                    document.getElementById('NoltecUnit').value = row.entity.NoltecUnit;
                    document.getElementById('CheeseLine').value = row.entity.CheeseLine;
                    document.getElementById('DataTimeStamp').value = row.entity.DataTimeStamp;
                    document.getElementById('DisplayTimeStamp').value = row.entity.DisplayTimeStamp;
                    document.getElementById('CodeSection').value = row.entity.CodeSection;
                    document.getElementById('Batch').value = row.entity.Batch;
                    document.getElementById('Recipe').value = row.entity.Recipe;
                    document.getElementById('ProductionOrder').value = row.entity.ProductionOrder;
                    document.getElementById('Micros').value = row.entity.Micros;
                    document.getElementById('Minor1').value = row.entity.Minor1;
                    document.getElementById('Minor2').value = row.entity.Minor2;
                    document.getElementById('Minor3').value = row.entity.Minor3;
                    document.getElementById('Minor4').value = row.entity.Minor4;
                    document.getElementById('Major1').value = row.entity.Major1;
                    document.getElementById('Major2').value = row.entity.Major2;
                    document.getElementById('Major3').value = row.entity.Major3;
                    document.getElementById('Major4').value = row.entity.Major4;
                    document.getElementById('BatchTotal').value = row.entity.BatchTotal;




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

                        document.getElementById('Report_Type').value = "";
                        document.getElementById('NoltecUnit').value = "";
                        document.getElementById('CheeseLine').value = "";
                        document.getElementById('DataTimeStamp').value = "";
                        document.getElementById('DisplayTimeStamp').value = "";
                        document.getElementById('CodeSection').value = "";
                        document.getElementById('Batch').value = "";
                        document.getElementById('Recipe').value = "";
                        document.getElementById('ProductionOrder').value = "";
                        document.getElementById('Micros').value = "";
                        document.getElementById('Minor1').value = "";
                        document.getElementById('Minor2').value = "";
                        document.getElementById('Minor3').value = "";
                        document.getElementById('Minor4').value = "";
                        document.getElementById('Major1').value = "";
                        document.getElementById('Major2').value = "";
                        document.getElementById('Major3').value = "";
                        document.getElementById('Major4').value = "";
                        document.getElementById('BatchTotal').value = "";




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



        $scope.refreshgridPowderBlndTotalRpt = function () {
            console.log('refreshOperator grid');


            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;
            $scope.gridOptionsPowderBlndTotalRpt.data = [];
            

            $timeout(function () {
                //if (nav === 'Top') {
                

                $scope.loadgridPowderBlndTotalRpt();
                //}
                //else {
                //    $scope.loadgridMSSMgmtBottom();
                //}
            }, 1500);
        };

        //############################################## OTHER ANGULAR FUNTIONS ############################################//

        $scope.FormatDT = function (date) {
            var d = new Date(date),


                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');


        };

        $scope.FormatTM = function (date) {
            var d = new Date(date),
                hour = '' + (d.getHours() + 1),
                minute = '' + d.getMinutes(),
                second = d.getSeconds();

            if (hour.length < 2) hour = '0' + hour;
            if (minute.length < 2) minute = '0' + minute;
            if (second.length < 2) second = '0' + second;
            return [hour, minute, second].join(':');
            //return [d];


        };

        $scope.getTimeStamp = function (controlname) {
            var d = new Date();
            month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            var sttime = [year, month, day].join('-');

            document.getElementById(controlname).value = sttime;
        };

        $scope.rowFormatter = function (row) {

            return row.entity.IsExpired === 'True';
        };



        $scope.copy = function (param, area) {
            document.getElementById('IATo1').value = param;
            document.getElementById('IssueAreaTB1').value = area;
            var paramPH = '#' + param;
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


        };

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
        };
        $scope.clearFilters = function () {
            console.log('Clear Filters');
            $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/

        };


        $scope.exportDriver = function () {
            console.log('Export Driver Recordset');
            window.open('http://denm2008mesadm:80/api/Message/getMSS/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
        };

        $scope.openNav = function (nav) {
            document.getElementById(nav).style.width = "95%";
            document.getElementById(nav).style.zIndex = "999";
        };

       

        $scope.passButtonID = function (id) {
            //document.getElementById('FormToLoad').value = "'"+ nav + "','" + area+"'"; passButtonID(this.id);
            document.getElementById('FormToLoad').value = id;
        };

        
       



        $scope.openDIVMODSM = function (nav, msg) {


            // Save it!

            document.getElementById('mysidenavRightSaveMessage').style.display = 'block';
            document.getElementById('navModal').value = nav;
            document.getElementById('modalMessage').value = msg;





        };

        $scope.cancelModal = function () {
            //$scope.launchIntoFullscreen(document.documentElement);
            document.getElementById("mysidenavRightChseMakSuprDopRptDashboard").style.display = "none";

            document.getElementById('navModal').value = "";
            //window.history.back();
            //scope.$apply();
        };
        $scope.cancelModalDynamic = function (nav) {
            //$scope.launchIntoFullscreen(document.documentElement);
            document.getElementById(nav).style.display = "none";



        };
        $scope.openModal = function (nav) {
            document.getElementById(nav).style.display = 'block';
        };


        $scope.go_full_screen = function () {
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
            // $scope.ScrAdjust();
        };


        $scope.openDIVReport = function (nav) {
            document.getElementById('mysidenavRightIntro').style.width = '0';
            document.getElementById('mysidenavRightMgmt').style.width = '0';
            document.getElementById('mysideNavRightMgmtFull').style.width = '0';
            document.getElementById('mysideNavRightMgmtBottomFull').style.width = '0';
            document.getElementById('mysideNavRightSupervisorFull').style.width = '0';
            document.getElementById('mysideNavRightSupervisorBottomFull').style.width = '0';
            document.getElementById('mysideNavRightPCQIFull').style.width = '0';
            document.getElementById('mysideNavRightPCQIBottomFull').style.width = '0';
            document.getElementById('mysidenavRightREPORT').style.width = '0';
            document.getElementById('mysidenavRightSupervisor').style.width = '0';
            document.getElementById('mysidenavRightPCQI').style.width = '0';
            document.getElementById('mysidenavRightUtilCfg').style.width = '0';
            document.getElementById('mysidenavRightLogIn').style.width = '0';
            document.getElementById('InputForm').style.width = '0';
            document.getElementById('InputForm_Sup').style.width = '0';
            document.getElementById('InputForm_PCQI').style.width = '0';
            document.getElementById('InputForm_Util').style.width = '0';
            document.getElementById(nav).style.width = '95%';


            // }


        };

        $scope.openURL = function (navRAW) {
            if (confirm('You are about to enter a new page. Unsaved informtion will be lost. Are you sure?')) {
                // Save it!
                var nav = navRAW + document.getElementById('VATPlantOff').value;
                if (navRAW !== '#/LRSCorp') {
                    window.location.replace(nav);
                }
                else {
                    window.location.replace(navRAW);
                }

            }
            else {
                // Do nothing!
            }
        };

        $scope.loginlogout = function () {
            document.getElementById('LoggedIn').value = "";
            document.getElementById('LoggedInGroup').value = "";
            document.getElementById('username').value = "";
            document.getElementById('group').value = "";
        };

        $scope.ExecReport = function (nav, area) {
            if (document.getElementById('VATPlantOff').value === null || document.getElementById('VATPlantOff').value === "Select a Plant" || document.getElementById('VATPlantOff').value === "" || document.getElementById('RtimestampidT').value === "" || document.getElementById('RtimestampidF').value === "") {
                //alert("Please select Dept, Area, Line, dates(From and To dates) are selected in the header section");
                $scope.openDIVMODSM('InputForm', 'Please select Dept, Area, Line, dates(From and To dates) are selected in the header section');
            }
            else {

                var url = 'http://' + document.getElementById('VATPlantOff').value + 'c2012lit' + area + '&FromDate=' + document.getElementById('RtimestampidF').value + '&ToDate=' + document.getElementById('RtimestampidT').value + '&Dept=' + document.getElementById('Dept').value + '&Area=' + document.getElementById('Area').value + '&Line=' + document.getElementById('Line').value;
                console.log(url);
                $('#ReportDisplay').attr('src', url);

            }


        };

        
        $scope.OpenCalendar = function (nav) {
            // $scope.closeAll();
            document.getElementById("mysidenavRightCalendarFull").style.display = 'inline-block';
            //document.getElementById(nav).style.width = "95%";
            document.getElementById("mysidenavRightCalendarFull").style.zIndex = "999";
            document.getElementById("initformFull").value = nav;


        };



        $scope.refreshPostDateChange = function () {

            var area = document.getElementById('majorgroup').value;

            var btnName;
            btnName = '#' + area;

            console.log(btnName);
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);

            var btnNameBottom;
            btnNameBottom = '#' + area + 'Bottom';

            console.log(btnNameBottom);
            $timeout(function () {
                $(btnNameBottom).trigger('click');

            }, 0);
        };

        $scope.refreshOperGrids = function () {

            //var area = document.getElementById('majorgroup').value;

            //var btnName;
            //btnName = '#' + area;

            //console.log(btnName);
            $timeout(function () {
                $('#getMgmt').trigger('click');

            }, 0);

            $timeout(function () {
                $('#getMgmtBottom').trigger('click');

            }, 0);
        };

        $scope.refreshSupervisorGrids = function () {

            //var area = document.getElementById('majorgroup').value;

            //var btnName;
            //btnName = '#' + area;

            //console.log(btnName);
            $timeout(function () {
                $('#getSupervisor').trigger('click');

            }, 0);

            $timeout(function () {
                $('#getSupervisorBottom').trigger('click');

            }, 0);
        };


        $scope.refreshPCQIGrids = function () {

            //var area = document.getElementById('majorgroup').value;

            //var btnName;
            //btnName = '#' + area;

            //console.log(btnName);
            $timeout(function () {
                $('#getPCQI').trigger('click');

            }, 0);

            $timeout(function () {
                $('#getPCQIBottom').trigger('click');

            }, 0);
        };

        $scope.refreshOnSelect = function () {
            var btnName;
            btnName = '#' + document.getElementById('majorgroup').value;

            console.log(btnName);
            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);
        };


        $scope.EnableBoxes = function () {

            document.getElementById("area").disabled = false;
            document.getElementById('metertag').disabled = false;
            document.getElementById('currentdateval').disabled = false;
            //document.getElementById('priordatevalue').disabled = false;
            //document.getElementById('sevendayavgvalue').disabled = false;
            document.getElementById('goal').disabled = false;
            //  document.getElementById('ismanual').disabled = false;



        };

        $scope.blurT = function (TB) {

            //document.getElementById(TB).value = "";
            //document.getElementById(TB).style.backgroundColor = 'transparent';

        };

        $scope.assignT = function (TB, MSG) {
            document.getElementById(TB).value = MSG;
            document.getElementById('MsgBox').value = MSG;
            document.getElementById('ProcessINC').style.backgroundColor = 'lightgreen';
            document.getElementById('ProcessINC').style.color = 'darkslategrey';
            document.getElementById('ProcessTBU').style.backgroundColor = 'lightgreen';
            document.getElementById('ProcessTBU').style.color = 'darkslategrey';
            document.getElementById('ProcessTBU').focus();
        };




        $scope.TargetValidation = function (nav, actual, HI, LOW) {
            if (nav.includes("_Temp") && HI === "" && LOW === "") {
                document.getElementById(nav).disabled = true;
                document.getElementById(nav).style.backgroundColor = 'white';
                document.getElementById(nav).style.color = 'black';
            }
            else {

                if (actual > HI || actual < LOW) {
                    document.getElementById(nav).style.backgroundColor = 'red';
                    document.getElementById(nav).style.color = 'white';

                }
                else {
                    document.getElementById(nav).style.backgroundColor = 'white';
                    document.getElementById(nav).style.color = 'black';

                }
            }
        };

        $scope.TargetValidationInp = function (nav, HIL, LOL) {
            if (nav.includes("_Temp") && document.getElementById(HIL).value === "" && document.getElementById(LOL).value === "") {
                document.getElementById(nav).disabled = true;
                document.getElementById(nav).style.backgroundColor = 'white';
                document.getElementById(nav).style.color = 'black';
            }
            else {
                var actual = Number(document.getElementById(nav).value);
                HI = Number((parseFloat(document.getElementById(HIL).value)).toString());
                LOW = Number((parseFloat(document.getElementById(LOL).value)).toString());
                var nm1 = nav.split('_')[1];
                var nm = nav.substr(0, nav.indexOf('_'));
                var nmName = nm + '_Name';
                var res = nav.substring(0, 3);
                console.log('nm:' + nm + ' ' + 'nm1:' + nm1 + ' ' + 'nmName:' + nmName + ' ' + 'nav:' + nav + ' ' + 'res:' + res);

                if (actual >= parseFloat(LOW) && actual <= parseFloat(HI)) {
                    document.getElementById(nav).style.backgroundColor = 'white';
                    document.getElementById(nav).style.color = 'black';
                }
                else {
                    if (document.getElementById(nmName).value !== 'N/A') {
                        document.getElementById(nav).disabled = false;
                        document.getElementById(nav).style.backgroundColor = 'red';
                        document.getElementById(nav).style.color = 'white';
                    }
                    else {
                        document.getElementById(nav).disabled = true;
                        document.getElementById(nav).style.backgroundColor = 'white';
                        document.getElementById(nav).style.color = 'black';
                    }

                }
            }

            $('#' + nav).tooltip("hide");
        };


        $scope.TargetValidationClear = function (nav) {

            document.getElementById(nav).style.backgroundColor = 'white';
            document.getElementById(nav).style.color = 'black';

        };


        $scope.TragetHILOWValidation = function (nav) {

            var HiAll = 0;

            if (document.getElementById('UtilCaustic_Name').value !== 'N/A' || document.getElementById('UtilCaustic_Name').value !== 'undefined') {
                if (Number(document.getElementById('UtilCaustic_Conc_HI').value) < Number(document.getElementById('UtilCaustic_Conc_LOW').value)) {
                    HiAll = HiAll + 1;
                }

                if (Number(document.getElementById('UtilCaustic_Temp_HI').value) < Number(document.getElementById('UtilCaustic_Temp_LOW').value)) {
                    HiAll = HiAll + 1;
                }

            }

            if (document.getElementById('UtilChlorine_Name').value !== 'N/A' || document.getElementById('UtilChlorine_Name').value !== 'undefined') {
                if (Number(document.getElementById('UtilChlorine_Conc_HI').value) < Number(document.getElementById('UtilChlorine_Conc_LOW').value)) {
                    HiAll = HiAll + 1;
                }

                if (Number(document.getElementById('UtilChlorine_Temp_HI').value) < Number(document.getElementById('UtilChlorine_Temp_LOW').value)) {
                    HiAll = HiAll + 1;
                }

            }

            if (document.getElementById('UtilAcid_Name').value !== 'N/A' || document.getElementById('UtilAcid_Name').value !== 'undefined') {
                if (Number(document.getElementById('UtilAcid_Conc_HI').value) < Number(document.getElementById('UtilAcid_Conc_LOW').value)) {
                    HiAll = HiAll + 1;
                }

                if (Number(document.getElementById('UtilAcid_Temp_HI').value) < Number(document.getElementById('UtilAcid_Temp_LOW').value)) {
                    HiAll = HiAll + 1;
                }

            }

            if (document.getElementById('UtilSpClnr_Name').value !== 'N/A' || document.getElementById('UtilSpClnr_Name').value !== 'undefined') {
                if (Number(document.getElementById('UtilSpClnr_Conc_HI').value) < Number(document.getElementById('UtilSpClnr_Conc_LOW').value)) {
                    HiAll = HiAll + 1;
                }

                if (Number(document.getElementById('UtilSpClnr_Temp_HI').value) < Number(document.getElementById('UtilSpClnr_Temp_LOW').value)) {
                    HiAll = HiAll + 1;
                }

            }

            if (document.getElementById('UtilDetergnt_Name').value !== 'N/A' || document.getElementById('UtilDetergnt_Name').value !== 'undefined') {
                if (Number(document.getElementById('UtilDetergnt_Conc_HI').value) < Number(document.getElementById('UtilDetergnt_Conc_LOW').value)) {
                    HiAll = HiAll + 1;
                }

                if (Number(document.getElementById('UtilDetergnt_Temp_HI').value) < Number(document.getElementById('UtilDetergnt_Temp_LOW').value)) {
                    HiAll = HiAll + 1;
                }

            }

            if (document.getElementById('UtilSanitizer_Name').value !== 'N/A' || document.getElementById('UtilSanitizer_Name').value !== 'undefined') {
                if (Number(document.getElementById('UtilSanitizer_Conc_HI').value) < Number(document.getElementById('UtilSanitizer_Conc_LOW').value)) {
                    HiAll = HiAll + 1;
                }

                if (Number(document.getElementById('UtilSanitizer_Temp_HI').value) < Number(document.getElementById('UtilSanitizer_Temp_LOW').value)) {
                    HiAll = HiAll + 1;
                }

            }

            if (HiAll > 0) {
                document.getElementById('UtilMsgBox').value = 'LOW cannot be larger than HIGH value or  HIGH cannot be smaller than LOW value.';
                document.getElementById('saveUtil').style.display = 'none';
            }

            else {
                document.getElementById('UtilMsgBox').value = '';
                document.getElementById('saveUtil').style.display = 'block';
            }

            //var hiloAll = nav.split('_')[2];
            //var hiloAll2 = nav.split('_')[1];
            //var nm = nav.substr(0, nav.indexOf('_'));

            //if (hiloAll === 'LOW') {
            //    var hinm = nm + '_' + hiloAll2 + '_HI';
            //    console.log(hinm + ' which is taken from ' + nm);
            //    if (document.getElementById(hinm).value !== "" && parseInt(document.getElementById(nav).value) > parseInt(document.getElementById(hinm).value)) {
            //        document.getElementById('UtilMsgBox').value = 'LOW cannot be larger than HI value';
            //        document.getElementById('saveUtil').style.display = 'none';
            //    }
            //    else {
            //        document.getElementById('UtilMsgBox').value = '';
            //        document.getElementById('saveUtil').style.display = 'block';
            //    }
            //}

            //if (hiloAll === 'HI') {
            //    var hinmL = nm + '_' + hiloAll2 + '_LOW';
            //    console.log(hinmL + ' which is taken from ' + nm);
            //    if (document.getElementById(hinmL).value !== "" && parseInt(document.getElementById(nav).value) < parseInt(document.getElementById(hinmL).value)) {
            //        document.getElementById('UtilMsgBox').value = 'HI cannot be smaller than LOW value';
            //        document.getElementById('saveUtil').style.display = 'none';
            //    }
            //    else {
            //        document.getElementById('UtilMsgBox').value = '';
            //        document.getElementById('saveUtil').style.display = 'block';
            //    }
            //}

        };




        $scope.OperInitValidation = function () {
            if (document.getElementById('Issue').value === 'Yes') {
                alert('Comment required');
                document.getElementById('Oper_Initials').value = '';
                document.getElementById('Oper_Comment').value = '';
                document.getElementById('Oper_Comment').focus();
            }

        };


        $scope.OperInitValidationTC = function () {
            if (document.getElementById('Oper_Compl').value === 'Not Reqd') {
                document.getElementById('Issue').value = 'No';
                alert('Comment required');
                document.getElementById('Oper_Initials').value = '';
                document.getElementById('Oper_Comment').value = '';
                //document.getElementById('Oper_Initials').style.display = 'none';
                document.getElementById('Oper_Comment').focus();
                document.getElementById('OpCauTF').checked = true;
                document.getElementById('OpChlTF').checked = true;
                document.getElementById('OpAciTF').checked = true;
                document.getElementById('OpSpcTF').checked = true;
                document.getElementById('OpDetTF').checked = true;
                document.getElementById('OpSanTF').checked = true;


            }
        };









        $scope.eventFire = function (el, etype) {
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            } else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
            }
        };

        $("#InputForm").css('outline', 0).attr('tabindex', -1).focus(function () {
            $scope.TextInputValidation();
            $scope.HeaderValidation('Oper');
        });

        $("#InputForm_Sup").css('outline', 0).attr('tabindex', -1).focus(function () {
            $scope.TextInputValidationSup();
            $scope.HeaderValidation('sup');
        });



        $scope.showInput = function (INP, caller) {

            document.getElementById('mysidenavRightEL').style.display = "none";
            document.getElementById('mysidenavRightGS').style.display = "none";

            document.getElementById(INP).style.display = "block";
            document.getElementById(caller).style.display = "block";



        };



        //$scope.HMIList = null;
        //$scope.listHMI = function () {


        //    HMI = document.getElementById('HMI').value;
        //    var HMIname = [];
        //    var HMIArea = [];
        //    var HMIDept = [];
        //    var HMILine = [];

        //    VatMakeRptService.getMSSHMI(HMI).success(function (data) {
        //        var cmclist = JSON.stringify(data);

        //        var JSONObject = JSON.parse(cmclist);

        //        for (var i = 0; i < JSONObject["MSSHMIDefaultSelList"].length; i++) {
        //            HMIname.push(JSONObject["MSSHMIDefaultSelList"][i]["HMIName"]);
        //            HMIArea.push(JSONObject["MSSHMIDefaultSelList"][i]["AreaName"]);
        //            HMIDept.push(JSONObject["MSSHMIDefaultSelList"][i]["Department"]);
        //            HMILine.push(JSONObject["MSSHMIDefaultSelList"][i]["LineNumber"]);
        //        }
        //        $scope.HMIList = HMIname;
        //        $scope.AreaList = HMIArea;
        //        $scope.DeptList = HMIDept;
        //        $scope.LineList = HMILine;

        //    });
        //};
        //$scope.listHMI();


        $scope.maximize = function () {

            //var url = document.getElementById('Reports').src;
            //var tabOrWindow = window.location.href = url;
            //tabOrWindow.focus();
            var plant = document.getElementById('VATPlantOff').value;
            console.log(plant);
            if (plant != 'DEN') {

                var url = 'http://' + plant + 'c2012lit/Reports/Pages/Folder.aspx?ItemPath=%2fLRS%2fMSS&ViewMode=List';
                console.log(url);
            }
            else {
                var url = 'http://' + plant + 'c2012pltlit/Reports/Pages/Folder.aspx?ItemPath=%2fLRS%2fMSS&ViewMode=List';
                console.log(url);
            }
            var tabOrWindow = window.open(url);
        };



        $scope.maximizeGrid = function (nav) {
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

        $scope.restoreGrid = function (nav) {

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


        $scope.rowFormatter = function (row) {

            return row.entity.PC === '1';


            //return row.entity.IsExpired === 'True';

        };



        $scope.SelectElement = function (id, valueToSelect) {
            var element = document.getElementById(id);
            element.value = valueToSelect;
        };

        $scope.function_one = function (url) {
            var name = 'plant';

            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            var pid = decodeURIComponent(results[2].replace(/\+/g, " "));
            $scope.title = pid;
            $scope.SelectElement("plant", pid);
            $scope.SelectElement("VATPlantOff", pid);
            var HMIname = 'HMI';
            if (!url) url = window.location.href;
            HMIname = HMIname.replace(/[\[\]]/g, "\\$&");
            var regexHMI = new RegExp("[?&]" + HMIname + "(=([^&#]*)|&|#|$)"),
                resultsHMI = regexHMI.exec(url);
            if (!resultsHMI) return null;
            if (!resultsHMI[2]) return '';
            var HMIid = decodeURIComponent(resultsHMI[2].replace(/\+/g, " "));
            console.log(HMIid + '=HMI');
            document.getElementById('HMI').value = HMIid;
            $timeout(function () {
                $('#getHMI').trigger('click');

            }, 0);

            //### Getting FULLScreen
            var screenname = 'screen';
            if (!url) url = window.location.href;
            screenname = screenname.replace(/[\[\]]/g, "\\$&");
            var regexscreen = new RegExp("[?&]" + screenname + "(=([^&#]*)|&|#|$)"),
                resultsscreen = regexscreen.exec(url);
            if (!resultsscreen) return null;
            if (!resultsscreen[2]) return '';
            var screenid = decodeURIComponent(resultsscreen[2].replace(/\+/g, " "));
            console.log(screenid + '=screen');
            $timeout(function () {
                $('#EnterFullScreen').trigger('click');

            }, 0);

            //$scope.ScrAdjust();


        };
        $scope.function_one();

        $scope.function_action = function (url) {

            //#####Retrieve action#####//
            var Pname = 'group';

            if (!url) url = window.location.href;
            Pname = Pname.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + Pname + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            var pid = decodeURIComponent(results[2].replace(/\+/g, " "));
            console.log(pid + '=group');
            if (pid === 'operMgmt') {
                $("#ButtonHolder").css("display", "none");
                // $(".sidenavRight").css("width", "100%");

                $scope.randomSize('grid', 'hs'); $scope.randomSize('gridmgmtBottom', 'hs'); $scope.openDIVMOD('mysidenavRightMgmt', 'getMgmt'); $scope.passButtonID('1');
            }
            else if (pid === 'approver') {
                //$(".sidenav").css("width", "5%");
                //$(".sidenavRight").css("width", "95%");
                $("#ButtonHolder").css("display", "block");

                $scope.randomSize('grid', 'hs'); $scope.randomSize('gridmgmtBottom', 'hs'); $scope.openDIVMOD('mysidenavRightIntro', '');
            }
            else {


                $scope.randomSize('grid', 'hs'); $scope.randomSize('gridmgmtBottom', 'hs'); $scope.openDIVMOD('mysidenavRightLogIn', ''); $scope.loginlogout();
            }
            //$scope.openDIVMOD('mysidenavRightIntro', '');
            // $scope.listUserRole();
        };
        $scope.function_action();



        $scope.skillsFunc = function () {
            var job;
            if (document.getElementById('ProjectNameC').value === "" && document.getElementById('row_idD').value === "") {
                job = document.getElementById('LoggedIn').value;
                console.log(job + '=job');

                if (job === 'Please LogIn') {
                    job = "";
                    $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
                        term: job
                    };
                    document.getElementById("myModal").style.display = "block";

                }
                else {
                    $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
                        term: document.getElementById('LoggedIn').value
                    };
                }
            }
            else if (document.getElementById('ProjectNameC').value === "" && document.getElementById('row_idD').value !== "") {
                job = document.getElementById('row_idD').value;
                console.log(job + '=job');
                if (document.getElementById('LoggedIn').value === "Please LogIn") {

                    document.getElementById("myModal").style.display = "block";
                }
                $scope.gridApi.grid.getColumn('row_id').filters[0] = {
                    term: job
                };


            }
            else {
                job = document.getElementById('ProjectNameC').value;
                console.log(job + '=job');
                $scope.gridApi.grid.getColumn('ReleaseName').filters[0] = {
                    term: job
                };

            }

            //document.getElementById('ProjectNameC').value = "";
            //document.getElementById('row_idD').value === "";

            //$scope.ScrAdjust();

        };


        $scope.ScrAdjust = function () {

            $scope.randomSize('grid', 'hs');
            $scope.randomSize('gridmgmtBottom', 'hs');
            $scope.randomSize('gridsup', 'hs');
            $scope.randomSize('gridsupBottom', 'hs');
            $scope.randomSize('gridpcqi', 'hs');
            $scope.randomSize('gridpcqiBottom', 'hs');
            $scope.randomSize('gridFull', 'fs');
            $scope.randomSize('gridmgmtBottomFull', 'fs');
            $scope.randomSize('gridsupFull', 'fs');
            $scope.randomSize('gridsupBottomFull', 'fs');
            $scope.randomSize('gridpcqiFull', 'fs');
            $scope.randomSize('gridpcqiBottomFull', 'fs');
            $scope.randomSize('gridHMIFull', 'fs');
            $scope.randomSize('gridUtilFull', 'fs');
            $scope.randomSize('gridSU', 'qs');




        };

        $scope.ScrAdjustFurther = function (sz) {

            $scope.randomSizeFurther('grid', 'hs', sz);
            $scope.randomSizeFurther('gridmgmtBottom', 'hs', sz);
            $scope.randomSizeFurther('gridsup', 'hs', sz);
            $scope.randomSizeFurther('gridsupBottom', 'hs', sz);
            $scope.randomSizeFurther('gridpcqi', 'hs', sz);
            $scope.randomSizeFurther('gridpcqiBottom', 'hs', sz);
            $scope.randomSizeFurther('gridFull', 'fs', sz);
            $scope.randomSizeFurther('gridmgmtBottomFull', 'fs', sz);
            $scope.randomSizeFurther('gridsupFull', 'fs', sz);
            $scope.randomSizeFurther('gridsupBottomFull', 'fs', sz);
            $scope.randomSizeFurther('gridpcqiFull', 'fs', sz);
            $scope.randomSizeFurther('gridpcqiBottomFull', 'fs', sz);
            $scope.randomSizeFurther('gridHMIFull', 'fs', sz);
            $scope.randomSizeFurther('gridUtilFull', 'fs', sz);




        };

        $scope.Expand1T9 = function (area, btn) {
            //console.log(data);
            if (document.getElementById(area).style.visibility === "collapse") {

                document.getElementById(area).style.visibility = "inherit";
                document.getElementById(area).style.height = '100%';
                document.getElementById(btn).style.backgroundColor = 'darkgreen';
                document.getElementById(btn).style.color = 'white';
                document.getElementById(btn).style.borderColor = 'darkgreen';

            }
            else {

                document.getElementById(area).style.visibility = "collapse";
                document.getElementById(area).style.height = '0';
                document.getElementById(btn).style.backgroundColor = 'black';
                document.getElementById(btn).style.color = 'lightgoldenrodyellow';
                document.getElementById(btn).style.borderColor = 'darkslategray';
            }



        };



        $scope.parseTime = function (input, nav) {
            var fields = input.split(':');
            var hh = fields[0];
            var mm = fields[1];
            var ss = fields[2];
            var navhh = nav + '_hh';
            var navmm = nav + '_mm';
            var navss = nav + '_ss';

            document.getElementById(navhh).value = hh;
            document.getElementById(navmm).value = mm;
            document.getElementById(navss).value = ss;

        };




        $scope.pad = function (num, size) {
            var s = num + "";
            while (s.length < size) s = "0" + s;
            return s;
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

            $scope.refreshPostDateChange();


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



        $scope.isOneRed = function (element) {
            // All inputs
            var chx = document.getElementsByTagName('input');
            var cntr = 0;
            for (var i = 0; i < chx.length; i++) {
                if (chx[i].type === 'text' && chx[i].style.backgroundColor === 'red') {
                    //return true;

                    cntr = cntr + 1;
                }

            }
            console.log(cntr);
            if (cntr > 0) {
                document.getElementById(element).disabled = true;
                document.getElementById(element).value = 'Yes';
            }
            else {
                document.getElementById(element).disabled = false;
                document.getElementById(element).value = 'No';
            }

            // End of the loop, return false
        };


        //####Autopopulate screen function area#################//

        // Display of date
        //let today = new Date().toISOString().substr(0, 10);
        //document.querySelector("#timestampid").value = today;
        //document.querySelector("#startdate").value = today;
        var sttime = new Date().toLocaleString();
        sttime = sttime.replace(/,\s?/g, " ");

        document.getElementById('RtimestampidF').value = $scope.FormatDT(sttime);
        document.getElementById('RtimestampidT').value = $scope.FormatDT(sttime);




        //$("input").change(function () {
        //    var color = parseFloat(this.style.backgroundColor);
        //    // If the value is less than 7, add a red border
        //    if (value === 'red') {
        //        document.getElementById('Issue').disabled = true;
        //        document.getElementById('Issue').value = 'Yes';
        //        document.getElementById('SupIssue').disabled = true;
        //        document.getElementById('SupIssue').value = 'Yes';


        //    }

        //    // Else if the value is equal to white
        //    else if (value === 'white') {
        //        document.getElementById('Issue').disabled = false;
        //        document.getElementById('Issue').value = 'No';
        //        document.getElementById('SupIssue').disabled = false;
        //        document.getElementById('SupIssue').value = 'No';
        //    }
        //    else {

        //        document.getElementById('Issue').disabled = false;
        //        document.getElementById('SupIssue').disabled = false;

        //    }


        //}).trigger("change");
        //####End Autopopulate screen function area#################//
        //####Get IP Address #################//
        //var RTCPeerConnection = /*window.RTCPeerConnection ||*/
        //    window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

        //if (RTCPeerConnection) (function () {
        //    var rtc = new RTCPeerConnection({ iceServers: [] });
        //    if (1 || window.mozRTCPeerConnection) {
        //        rtc.createDataChannel('', { reliable: false });
        //    }

        //    rtc.onicecandidate = function (evt) {
        //        if (evt.candidate)
        //            grepSDP("a=" + evt.candidate.candidate);
        //    };

        //    rtc.createOffer(function (offerDesc) {
        //        grepSDP(offerDesc.sdp);
        //        rtc.setLocalDescription(offerDesc);
        //    }, function (e) {
        //        console.warn("offer failed", e);
        //    });

        //    var addrs = Object.create(null);
        //    addrs["0.0.0.0"] = false;
        //    function updateDisplay(newAddr) {
        //        if (newAddr in addrs) return;
        //        else addrs[newAddr] = true;
        //        var displayAddrs = Object.keys(addrs).filter(function (k) {
        //            return addrs[k];
        //        });
        //        document.getElementById('list').textContent =
        //            displayAddrs.join(" or perhaps ") || "n/a";
        //    }

        //    function grepSDP(sdp) {
        //        var parts;
        //        var hosts = [];
        //        sdp.split('\r\n').forEach(function (line) {
        //            if (~line.indexOf("a=candidate")) {
        //                    parts = line.split(' '),
        //                    addr = parts[4],
        //                    type = parts[7];
        //                if (type === 'host') updateDisplay(addr);
        //            } else if (~line.indexOf("c=")) {
        //                    parts = line.split(' '),
        //                    addr = parts[2];
        //                updateDisplay(addr);
        //            }
        //        });
        //    }
        //})(); else {
        //    document.getElementById('list').innerHTML = "<code>ifconfig| grep inet | grep -v inet6 | cut -d\" \" -f2 | tail -n1</code>";
        //    document.getElementById('list').nextSibling.textContent = "In Chrome and Firefox your IP should display automatically, by the power of WebRTCskull.";
        //}
        //####End Get IP Address #################//

        //##################### Full Screen Mode ### ///////////////////
        // Find the right method, call on correct element
        $scope.launchIntoFullscreen = function (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        };
        //$scope.launchIntoFullscreen(document.documentElement); // View the whole page in Fullscreen on Launch
        //launchIntoFullscreen(document.getElementById("GridMgmt")); // any individual element

        // Whack fullscreen
        $scope.exitFullscreen = function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        };


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
        $scope.go_full_screen_report = function (nav) {
            var elem = document.getElementById(nav);

            //$timeout(function () {



            if (elem.requestFullscreen) {
                elem.requestFullscreen();
                document.getElementById("ReportDisplay").style.backgroundColor = "white";
                document.getElementById("ReportDisplay").style.color = "black";
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
                document.getElementById("ReportDisplay").style.backgroundColor = "white";
                document.getElementById("ReportDisplay").style.color = "black";
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
                document.getElementById("ReportDisplay").style.backgroundColor = "white";
                document.getElementById("ReportDisplay").style.color = "black";
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
                document.getElementById("ReportDisplay").style.backgroundColor = "white";
                document.getElementById("ReportDisplay").style.color = "black";
            }
            //}, 1000);
        };



        /* Latest compiled and minified JavaScript included as External Resource */
        // Initialize tooltip on #id_stock input



        // Manually hide tooltip when re-clicking the input
        // This can be modified to hide the tooltip whenever you see fit
        $("#MSSMain").click(function (e) {
            $(this).tooltip("hide");
        });


        $scope.showToolTip = function (nav) {

            var bx = "#" + nav;
            console.log(bx);
            var hibx = nav + "_HI";
            var lowbx = nav + "_LOW";
            var hivalue = document.getElementById(hibx).value;
            var lowvalue = document.getElementById(lowbx).value;

            $(bx).tooltip("enable");
            $(bx).attr("data-original-title", 'HI:' + hivalue + ' and ' + 'LOW:' + lowvalue);
            $(bx).tooltip("show");  // Show tooltip
            $(bx).tooltip("disable");



        };

        //$("#id_stock").click(function() {
        /* Act on the event */
        //if(!$('#id_stock').val())
        //{
        //   $('#id_stock').tooltip("show");  // Show tooltip
        //}
        // else {
        //  //Do Some Other Stuff
        //}

        //});

    }

 
  
})();

//app.directive('onLoadClicker', ['$timeout',
//    function ($timeout) {
//        return {
//            restrict: 'A',
//            priority: -1,
//            link: function ($scope, iElm, iAttrs, controller) {
//                $timeout(function () {
//                    iElm.triggerHandler('click');
//                }, 0);
//            }
//        };
//    }
//]);
//Set Autocomplete OFF
//$(document).ready(function () {
//    $(':input').live('focus', function () {
//        $(this).attr('autocomplete', 'off');
//    });
//});

//<![CDATA[
window.onbeforeunload = function () {
    return 'Are you sure you want to leave?';

};






function ChooseHMI(data) {
    var dataRec = data.value.replace(/string:/g, "");
    document.getElementById("HMI").value = dataRec;

    document.getElementById('getHMIDD').click();

}

//function launchIntoFullscreen(element) {
//    if (element.requestFullscreen) {
//        element.requestFullscreen();
//    } else if (element.mozRequestFullScreen) {
//        element.mozRequestFullScreen();
//    } else if (element.webkitRequestFullscreen) {
//        element.webkitRequestFullscreen();
//    } else if (element.msRequestFullscreen) {
//        element.msRequestFullscreen();
//    }
//}
//launchIntoFullscreen(document.documentElement); // the whole page

function go_full_screen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    // $scope.ScrAdjust();
}
function go_full_screen_elem(e) {
    var elem = e;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }

    //$scope.ScrAdjust();
}

function ChooseCircuitOper(data) {
    console.log(data);
    var dataRec = data.value.replace(/string:/g, "");
    document.getElementById("CircuitOperT").value = dataRec;

    document.getElementById('getChemicalDD').click();
    //$scope.listChemical(dataRec);

}


function ChooseChemicalOper(data) {
    console.log(data);
    var dataRec = data.value.replace(/string:/g, "");
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
    var dataRec = data.value.replace(/string:/g, "");
    document.getElementById("UnitDesc").value = dataRec;
    $("#getMANTEMP1")[0].click();


}



