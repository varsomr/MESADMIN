(function () {
    //*****************************add-on for Grid Dropdown trial - IH 4/20/2018

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
                };
            };
        });






    //  'use strict';

    angular
        .module('myApp')
        //.module('myApp', ['ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'gridFilters'])
        .controller('ChangeMgmtDashcontroller', controller)//.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ChangeMgmtService'];

    app.config(function ($httpProvider) {

    });




    app.filter('BusinessLeadFilter', function () {
        var BusinessLeadHash = {
            'Chad Givens': 'Chad Givens',
            'Steve Lesner': 'Steve Lesner',
            'Mike Haywood': 'Mike Haywood',
            'other': 'other'
        };

        return function (input) {
            var result;
            var match;
            if (!input) {
                return '';
            } else if (result = BusinessLeadHash[input]) {
                return result;
            } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = BusinessLeadHash[match[1]])) {
                return result + match[2];
            } else {
                return input;
            }
        };
    });

    app.filter('BusinessApproverFilter', function () {
        var BusinessApproverHash = {
            'Mike Haywood': 'Mike Haywood'
        };

        return function (input) {
            var result;
            var match;
            if (!input) {
                return '';
            } else if (result = BusinessApproverHash[input]) {
                return result;
            } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = BusinessApproverHash[match[1]])) {
                return result + match[2];
            } else {
                return input;
            }
        };
    });





    app.filter('FSFilter', function () {
        var FSHash = {
            '0': 'Pending',
            '1': 'Approved',
            '2': 'Rejected',
            '3': 'other'

        };

        return function (input) {
            var result;
            var match;
            if (!input) {
                return '';
            } else if (result = FSHash[input]) {
                return result;
            } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = FSHash[match[1]])) {
                return result + match[2];
            } else {
                return input;
            }
        };
    });
    app.filter('STFilter', function () {
        var STHash = {
            '0': 'Pending',
            '1': 'Approved',
            '2': 'Rejected',
            '3': 'other'
        };

        return function (input) {
            var result;
            var match;
            if (!input) {
                return '';
            } else if (result = STHash[input]) {
                return result;
            } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = STHash[match[1]])) {
                return result + match[2];
            } else {
                return input;
            }
        };
    });

    app.filter('DEVandTSFilter', function () {
        var DEVandTSHash = {
            '0': 'Pending',
            '1': 'Approved',
            '2': 'Rejected',
            '3': 'other'
        };

        return function (input) {
            var result;
            var match;
            if (!input) {
                return '';
            } else if (result = DEVandTSHash[input]) {
                return result;
            } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = DEVandTSHash[match[1]])) {
                return result + match[2];
            } else {
                return input;
            }
        };
    });

    app.filter('FUTFilter', function () {
        var FUTHash = {
            '0': 'Pending',
            '1': 'Approved',
            '2': 'Rejected',
            '3': 'other'
        };

        return function (input) {
            var result;
            var match;
            if (!input) {
                return '';
            } else if (result = FUTHash[input]) {
                return result;
            } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = FUTHash[match[1]])) {
                return result + match[2];
            } else {
                return input;
            }
        };
    });
    app.filter('StatusFilter', function () {
        var StatusHash = {
            '0': 'Pending',
            '1': 'ApprovedforRollout',
            '2': 'Rejected'
        };

        return function (input) {
            var result;
            var match;
            if (!input) {
                return '';
            } else if (result = StatusHash[input]) {
                return result;
            } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = StatusHash[match[1]])) {
                return result + match[2];
            } else {
                return input;
            }
        };
    });

    function controller($scope, $timeout, uiGridConstants, ChangeMgmtService) {


        /* Group drop down Values */
        var GroupTypes = [
            { value: 'ProjectChangeMgmt', label: 'ProjectChangeMgmt' },
            { value: 'SystemBug', label: 'SystemBug' },
            { value: 'ChangeRequest', label: 'ChangeRequest' },
            { value: 'TrainingOpportunity', label: 'TrainingOpportunity' },
            { value: 'FutureScope', label: 'FutureScope' }

        ];


        var myTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>{{ row.entity.row_id }}</a>";
        //var xmlTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.ObjectId}}' ng-click='grid.appScope.openModal($event, row)'>{{ row.entity.Body ='Edit XML MSG'}}</a>";
        var xmlTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>Review and Edit</a>"
        //   $scope.gridOptions = loaderOptions;

        $scope.gridOptions = {
            //showGridFooter: false,
            //multiSelect: false,
            //enableFullRowSelection: true,
            //enableRowHeaderSelection: false,
            //paginationPageSizes: [20, 40, 60],
            //paginationPageSize: 40,
            //rowHeight: 53,
            //enableFiltering: true,
            showGridFooter: false,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: true,
            //rowTemplate:
            //'<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            //'  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            //'</div>',
            //'<div><div style="height: 100%; {\'background-color\': getBkgColorTable(myData[row.rowIndex].count)}" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell></div></div>'

            columnDefs: [
                //{ field: 'row_id', enableCellEdit: false, displayName: 'IncidentID', type: 'number', cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', width: '5%' },
                { field: 'row_id', visible: false, width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.row_id; }, cellTemplate: '<div style="word-wrap:break-word;" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ReleaseName', enableCellEdit: false, width: '50%', cellTooltip: function (row) { return row.entity.ReleaseName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'Status', displayName: 'RelStatus', width: '50%', enableCellEdit: false, cellFilter: 'StatusFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'Status',
                    editDropdownOptionsArray: [
                        { id: '0', Status: 'Pending' },
                        { id: '1', Status: 'ApprovedForRollout' },
                        { id: '2', Status: 'Rejected' }

                    ]


                },
                {
                    field: 'FS', displayName: 'BusApprStatus', enableCellEdit: false, width: '20%', cellFilter: 'FSFilter', editableCellTemplate: 'ui-grid/dropdownEditor', editDropdownValueLabel: 'FS',
                    editDropdownOptionsArray: [
                        { id: '0', FS: 'Pending' },
                        { id: '1', FS: 'Approved' },
                        { id: '2', FS: 'Rejected' },
                        { id: '3', FS: 'other' }
                    ]
                },
                {
                    field: 'ST', displayName: 'DevStatus', width: '20%', enableCellEdit: false, cellFilter: 'STFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'ST',
                    editDropdownOptionsArray: [
                        { id: '0', ST: 'Pending' },
                        { id: '1', ST: 'Approved' },
                        { id: '2', ST: 'Rejected' },
                        { id: '3', ST: 'other' }

                    ]
                },
                {
                    field: 'FUT', displayName: 'FUTStatus', width: '20%', enableCellEdit: false, cellFilter: 'FUTFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'FUT',
                    editDropdownOptionsArray: [
                        { id: '0', FUT: 'Pending' },
                        { id: '1', FUT: 'Approved' },
                        { id: '2', FUT: 'Rejected' },
                        { id: '3', FUT: 'other' }

                    ]
                },
                //{ field: 'BusinessLead', width: '5%', cellFilter: 'genderFilter', cellClass: function (grid, row, col, rowRenderIndex, colRenderIndex) { if (grid.getCellValue(row, col) == 1) { return 'blue'; } return 'green'; }, cellTooltip: function (row) { return row.entity.Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'BusinessLead', visible: false, width: '10%', enableCellEdit: false, cellFilter: 'BusinessLeadFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'BusinessLead',
                    editDropdownOptionsArray: [
                        { id: 'Chad Givens', BusinessLead: 'Chad Givens' },
                        { id: 'Steve Lesner', BusinessLead: 'Steve Lesner' },
                        { id: 'Mike Haywood', BusinessLead: 'Mike Haywood' },
                        { id: 'other', BusinessLead: 'other' }

                    ]
                },
                { field: 'FSLocation', visible: false, displayName: 'FuctionalSpecLocation', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.FSLocation; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'BLSign', visible: false, width: '10%', cellTooltip: function (row) { return row.entity.BLSign; }, cellTemplate: '<div style="word-wrap:break-word;" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'BusinessApprover', visible: false, width: '10%', enableCellEdit: false, cellFilter: 'BusinessLeadFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'BusinessApprover',
                    editDropdownOptionsArray: [
                        { id: 'Mike Haywood', BusinessApprover: 'Mike Haywood' }

                    ]
                },
                { field: 'BApproverSign', visible: false, width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.BApproverSign; }, cellTemplate: '<div style="word-wrap:break-word;" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },


                //{ field: 'Type', displayName: 'IssueType', width: '7%', filter: { selectOptions: GroupTypes, type: uiGridConstants.filter.SELECT }, cellTooltip: function (row) { return row.entity.Type; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'DEVandTS', visible: false,width: '7%', enableCellEdit: false, cellFilter: 'DEVandTSFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'DEVandTS',
                    editDropdownOptionsArray: [
                        { id: '0', DEVandTS: 'Pending' },
                        { id: '1', DEVandTS: 'Approved' },
                        { id: '2', DEVandTS: 'Rejected' },
                        { id: '3', DEVandTS: 'other' }

                    ]
                },
                { field: 'Developer', visible: false, displayName: 'Developer', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.Developer; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TechSpecLocation', visible: false, enableCellEdit: false, displayName: 'TechSpecLocation', width: '10%', cellTooltip: function (row) { return row.entity.TechSpecLocation; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DEVSign', displayName: 'Requestor', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.DEVSign; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'AssignedTo', displayName: 'AssignedTo', width: '5%', cellTooltip: function (row) { return row.entity.AssignedTo; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'TechLead', visible: false, displayName: 'TechLead', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TechLead; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TLSign', displayName: 'TLSign', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TLSign; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AppsApprover', visible: false, enableCellEdit: false, displayName: 'AppsApprover', width: '7%', cellTooltip: function (row) { return row.entity.AppsApprover; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AppsApproverSign', visible: false, enableCellEdit: false, displayName: 'AppsApproverSign', width: '8%', cellTooltip: function (row) { return row.entity.AppsApproverSign; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'DEVSign2', displayName: 'DEVSign2', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.DEVSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TLSign2', displayName: 'TLSign2', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TLSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'BLSign2', displayName: 'BLSign2', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.BLSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TestScriptLocation', visible: false, displayName: 'TestScriptLocation', enableCellEdit: false, width: '8%', cellTooltip: function (row) { return row.entity.TestScriptLocation; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AppsApproverSign2', visible: false, enableCellEdit: false, displayName: 'AppsApproverSign2', width: '10%', cellTooltip: function (row) { return row.entity.AppsApproverSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'PackageLocation', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.PackageLocation; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ScreenShotLocation', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.ScreenShotLocation; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'LockedDateTime', displayName: 'LockedOn', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.LockedDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'Description', displayName: 'Description', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.Description; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TestCycle', displayName: 'TrainingDT', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TestCycle; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'EnteredBy', displayName: 'EnteredBy', visible: false, enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.EnteredBy; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TrainerName', enableCellEdit: false, displayName: 'TrainerName', visible: false, width: '10%', cellTooltip: function (row) { return row.entity.TrainerName; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'PlantContact', enableCellEdit: false, displayName: 'PlantContact', visible: false, width: '10%', cellTooltip: function (row) { return row.entity.PlantContact; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'InsertDateTime', displayName: 'EnteredOn', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.InsertDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'UpdateDateTime', displayName: 'LastUpdated', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.UpdateDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Comment', displayName: 'Comment', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.Comment; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'PRODDeployDate', enableCellEdit: false, displayName: 'PRODDeployDate', visible: false, width: '10%', cellTooltip: function (row) { return row.entity.PRODDeployDate; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ControlsAnalyst', displayName: 'DeployAnalyst', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.ControlsAnalyst; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DeployStatus', displayName: 'DeployStatus', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.DeployStatus; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DeployPlants', displayName: 'DeployPlants', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.DeployPlants; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'Updates', displayName: 'Updates', visible: false, enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.Updates; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],

        };



        $scope.rowFormatter = function (row) {

            return row.entity.Status === 'ApprovedForRollout';
        };

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');


            //console.log(options);
            ChangeMgmtService.get().success(function (data) {
                if (data == null || data.ChangeMgmtList == null || data.ChangeMgmtList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ChangeMgmtList.length
                    );

                    var ChangeMgmtList = data.ChangeMgmtList;

                    //console.log(ChangeMgmtList);

                    $scope.gridOptions.data = ChangeMgmtList;
                    //console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }
                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; })
            
            $(function () {

                var inputValue = document.getElementsByClassName("input-value");
                
                $('#FSLocation').focus(function () {

                    var FSLP = $('#FSLocation').val();
                    var FSL = FSLP;
                    $('#Updates').val('\n' + new Date().toUTCString() + '- OLD FSSpecLocation Value: \n' + FSLP + $('#Updates').val());

                });

                $('#TechSpecLocation').focus(function () {

                    var TSLP = $('#TechSpecLocation').val();
                    var TSL = TSLP;
                    $('#Updates').val('\n' + new Date().toUTCString() + '- OLD TSSpecLocation Value: \n' + TSLP + $('#Updates').val());

                });

                $('#TestScriptLocation').focus(function () {

                    var TestSP = $('#TestScriptLocation').val();
                    var TestS = TestSP;
                    $('#Updates').val('\n' + new Date().toUTCString() + '- OLD TestScriptLocation Value: ' + TestSP + $('#Updates').val());

                });

                $('#FSLocation').blur(function () {
                    FSL = $('#FSLocation').val();
                    document.getElementById('FSDropdown').value = 'Pending';
                    document.getElementById('FS').value = 'Pending';
                    document.getElementById('BLSign').value = '';
                    document.getElementById('BApproverSign').value = '';
                    document.getElementById('STDropdown').value = 'NOTStarted';
                    document.getElementById('ST').value = 'NOTStarted';
                    document.getElementById('DEVSign').value = '';
                    document.getElementById('TLSign').value = '';
                    document.getElementById('AppsApproverSign').value = '';
                    document.getElementById('FUTDropdown').value = 'NOTStarted';
                    document.getElementById('FUT').value = 'NOTStarted';
                    document.getElementById('DEVSign2').value = '';
                    document.getElementById('TLSign2').value = '';
                    document.getElementById('BLSign2').value = '';
                    document.getElementById('AppsApproverSign2').value = '';
                    document.getElementById('StatusDropdown').value = 'Pending';
                    document.getElementById('Status').value = 'Pending';
                    $scope.StageGating();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-New Functional Spec Location Value: ' + $('#FSLocation').val() + $('#Updates').val());

                });


                $('#TechSpecLocation').blur(function () {
                    TSL = $('#TechSpecLocation').val();
                    document.getElementById('STDropdown').value = 'Pending';
                    document.getElementById('ST').value = 'NOTStarted';
                    document.getElementById('DEVSign').value = '';
                    document.getElementById('TLSign').value = '';
                    document.getElementById('AppsApproverSign').value = '';
                    document.getElementById('FUTDropdown').value = 'NOTStarted';
                    document.getElementById('FUT').value = 'NOTStarted';
                    document.getElementById('DEVSign2').value = '';
                    document.getElementById('TLSign2').value = '';
                    document.getElementById('BLSign2').value = '';
                    document.getElementById('AppsApproverSign2').value = '';
                    document.getElementById('StatusDropdown').value = 'Pending';
                    document.getElementById('Status').value = 'Pending';
                    $scope.StageGating();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-New TechSpecLocation Value: ' + $('#TSLocation').val() + $('#Updates').val());

                });

                $('#TestScriptLocation').blur(function () {
                    TestS = $('#TestScriptLocation').val();

                    document.getElementById('FUTDropdown').value = 'Pending';
                    document.getElementById('FUT').value = 'NOTStarted';
                    document.getElementById('DEVSign2').value = '';
                    document.getElementById('TLSign2').value = '';
                    document.getElementById('BLSign2').value = '';
                    document.getElementById('AppsApproverSign2').value = '';
                    document.getElementById('StatusDropdown').value = 'Pending';
                    document.getElementById('Status').value = 'Pending';
                    $scope.StageGating();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-New TestScriptLocation Value: ' + $('#TestScriptLocation').val() + $('#Updates').val());

                });

            });



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

            }
            $scope.function_one();

            //###################StageGating
            if (document.getElementById('LoggedIn').value != "") {
                if (document.getElementById('LoggedIn').value != "guest") {
                    if (document.getElementById('ReleaseName').value != "") {
                        //document.getElementById('BA').style.pointerEvents = 'auto';
                        if (document.getElementById('BApproverSign').value != "") {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = '#99C199';
                            document.getElementById('BA').style.Color = 'white';
                        }
                        else {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = 'lightskyblue';
                            document.getElementById('BA').style.Color = 'black';
                        }

                    }
                    else {
                        document.getElementById('BA').style.pointerEvents = 'none';
                        document.getElementById('BA').style.backgroundColor = 'white';
                        document.getElementById('BA').style.Color = 'black';
                    }

                    if (document.getElementById('FSDropdown').value == "Approved") {
                        // document.getElementById('Development').style.pointerEvents = 'auto';
                        if (document.getElementById('STDropdown').value == "Approved") {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = '#99C199';
                            document.getElementById('Development').style.Color = 'white';
                        }
                        else {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = 'lightskyblue';
                            document.getElementById('Development').style.Color = 'black';
                        }
                    }
                    else {
                        document.getElementById('Development').style.pointerEvents = 'none';
                        document.getElementById('Development').style.backgroundColor = 'white';
                        document.getElementById('Development').style.Color = 'black';
                    }

                    if (document.getElementById('STDropdown').value == "Approved") {
                        //document.getElementById('UT').style.pointerEvents = 'auto';
                        if (document.getElementById('FUTDropdown').value == "Approved") {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = '#99C199';
                            document.getElementById('UT').style.Color = 'white';
                        }
                        else {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = 'lightskyblue';
                            document.getElementById('UT').style.Color = 'black';
                        }

                    }
                    else {
                        document.getElementById('UT').style.pointerEvents = 'none';
                        document.getElementById('UT').style.backgroundColor = 'white';
                        document.getElementById('UT').style.Color = 'black';
                    }

                    if (document.getElementById('FUTDropdown').value == "Approved") {
                        // document.getElementById('FA').style.pointerEvents = 'auto';
                        if (document.getElementById('AppsApproverSign2').value != "") {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = '#99C199';
                            document.getElementById('FA').style.Color = 'white';
                        }
                        else {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = 'lightskyblue';
                            document.getElementById('FA').style.Color = 'black';
                        }
                    }
                    else {
                        document.getElementById('FA').style.pointerEvents = 'none';
                        document.getElementById('FA').style.backgroundColor = 'white';
                        document.getElementById('FA').style.Color = 'black';
                    }
                    document.getElementById('MainCtrls').style.pointerEvents = 'auto';
                    document.getElementById('LoggedIn').style.Color = 'black';
                    document.getElementById('LoggedIn').style.backgroundColor = 'highlight';
                    document.getElementById('ReleaseNameGroup').style.pointerEvents = 'auto';
                    document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
                    //document.getElementById('OperationBtn').style.pointerEvents = 'auto';
                }
                else {
                    document.getElementById('BA').style.pointerEvents = 'none';
                    document.getElementById('Development').style.pointerEvents = 'none';
                    document.getElementById('UT').style.pointerEvents = 'none';
                    document.getElementById('FA').style.pointerEvents = 'none';
                    document.getElementById('MainCtrls').style.pointerEvents = 'Auto';
                    document.getElementById('LoggedIn').style.Color = 'black';
                    document.getElementById('LoggedIn').style.backgroundColor = 'highlight';
                    document.getElementById('ReleaseNameGroup').style.pointerEvents = 'none';
                    document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
                    //document.getElementById('OperationBtn').style.pointerEvents = 'none';
                }
            }

            else {
                document.getElementById('MainCtrls').style.pointerEvents = 'none';
                //alert('Please LogIn');
                document.getElementById('LoggedIn').value = "Please LogIn"
                document.getElementById('LoggedIn').style.Color = 'yellow';
                document.getElementById('LoggedIn').style.backgroundColor = 'red';
            }
            //##################End StageGating

        }



        $scope.loadGrid();
        //$scope.StageGating();

        //## Grid Adjust####################//

        $scope.randomSize = function (nav, ty) {
            var newHeight; //= Math.floor(Math.random() * (300 - 100 + 1) + 300);
            var newWidth; //= Math.floor(Math.random() * (600 - 200 + 1) + 200);
            if ($(window).width() < 600) {
                if (ty === 'hs') {

                    newHeight = $(window).height() - $(window).height() * 0.7;
                    newWidth = $(window).width() - $(window).width() * 0.08;
                }
                else if (ty === 'qs') {

                    newHeight = $(window).height() - $(window).height() * 0.2;
                    newWidth = $(window).width() - $(window).width() * 0.06;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.4;
                    newWidth = $(window).width() - $(window).width() * 0.08;
                }



            }
            else if ($(window).width() < 1300) {
                if (ty === 'hs') {

                    newHeight = $(window).height() - $(window).height() * 0.08;
                    newWidth = $(window).width() - $(window).width() * 0.08;
                }
                else if (ty === 'qs') {

                    newHeight = $(window).height() - $(window).height() * 0.2;
                    newWidth = $(window).width() - $(window).width() * 0.06;
                }
                else {

                    newHeight = $(window).height() - $(window).height() * 0.04;
                    newWidth = $(window).width() - $(window).width() * 0.08;
                }



            }
            else if ($(window).width() < 2000) {
                if (ty === 'hs') {
                    newHeight = $(window).height() - $(window).height() * 0.04;
                    newWidth = $(window).width();
                }
                else if (ty === 'qs') {

                    newHeight = $(window).height() - $(window).height() * 0.2;
                    newWidth = $(window).width() - $(window).width() * 0.06;
                }
                else {

                    newHeight = $(window).height() - $(window).height() * 0.04;
                    newWidth = $(window).width();
                }



            }

            else {
                if (ty === 'hs') {
                    newHeight = $(window).height() - $(window).height() * 0.07;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.05;
                }

                newWidth = $(window).width() - $(window).width() * 0.08;

            }

            angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'px');
            angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'px');



        };



        $scope.ScrAdjust = function () {

            $scope.randomSize('gridCM', 'qs');

        };



        //## END Grid Adjust####################//

        $scope.skillsFunc = function () {

            //$('#TaskDisplay').trigger('click');
            var job = document.getElementById('ProjectName').value;
            console.log(job);
            $scope.gridApi.grid.getColumn('ReleaseName').filters[0] = {
                term: job
            };
        };
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
                    $scope.openDIV('ChangeMgmt');
                    document.getElementById('ReleaseName').value = row.entity.ReleaseName;
                    console.log(document.getElementById('ReleaseName').value);
                    document.getElementById('Status').value = row.entity.Status;
                    document.getElementById('StatusDropdown').value = row.entity.Status;
                    //document.getElementById('BusinessLeadDropdown').value = 'lesnerst'
                    document.getElementById('BusinessLead').value = row.entity.BusinessLead;
                    document.getElementById('BusinessLeadDropdown').value = row.entity.BusinessLead;
                    document.getElementById('BLSign').value = row.entity.BLSign;
                    document.getElementById('BusinessApprover').value = row.entity.BusinessApprover;
                    document.getElementById('BusinessApproverDropdown').value = row.entity.BusinessApprover;
                    document.getElementById('BApproverSign').value = row.entity.BApproverSign;
                    document.getElementById('FS').value = row.entity.FS;
                    document.getElementById('FSDropdown').value = row.entity.FS;
                    document.getElementById('Developer').value = row.entity.Developer;
                    document.getElementById('DeveloperDropdown').value = row.entity.Developer;
                    document.getElementById('DEVSign').value = row.entity.DEVSign;
                    document.getElementById('TechLead').value = row.entity.TechLead;
                    document.getElementById('TechLeadDropdown').value = row.entity.TechLead;
                    document.getElementById('TLSign').value = row.entity.TLSign;
                    document.getElementById('AppsApprover').value = row.entity.AppsApprover;
                    document.getElementById('AppsApproverDropdown').value = row.entity.AppsApprover;
                    document.getElementById('AppsApproverSign').value = row.entity.AppsApproverSign;
                    document.getElementById('ST').value = row.entity.ST;
                    document.getElementById('STDropdown').value = row.entity.ST;
                    document.getElementById('BLSign2').value = row.entity.BLSign2;
                    document.getElementById('DEVSign2').value = row.entity.DEVSign2;
                    document.getElementById('TLSign2').value = row.entity.TLSign2;
                    document.getElementById('AppsApproverSign2').value = row.entity.AppsApproverSign2;
                    document.getElementById('FUT').value = row.entity.FUT;
                    document.getElementById('FUTDropdown').value = row.entity.FUT;
                    document.getElementById('PackageLocation').value = row.entity.PackageLocation;
                    document.getElementById('ScreenShotLocation').value = row.entity.ScreenShotLocation;
                    document.getElementById('LockedDateTime').value = row.entity.LockedDateTime;
                    document.getElementById('Description').value = row.entity.Description;
                    document.getElementById('TestCycle').value = row.entity.TestCycle;
                    document.getElementById('EnteredBy').value = row.entity.EnteredBy;
                    document.getElementById('FSLocation').value = row.entity.FSLocation;
                    document.getElementById('Comment').value = row.entity.Comment;
                    document.getElementById('row_id').value = row.entity.row_id;
                    
                    document.getElementById('TrainerName').value = row.entity.TrainerName;
                    document.getElementById('PlantContact').value = row.entity.PlantContact;
                    document.getElementById('PlantContactDropdown').value = row.entity.PlantContact;
                    document.getElementById('TechSpecLocation').value = row.entity.TechSpecLocation;
                    document.getElementById('TestScriptLocation').value = row.entity.TestScriptLocation;
                    document.getElementById('PRODDeployDate').value = row.entity.PRODDeployDate;
                    document.getElementById('ControlsAnalyst').value = row.entity.ControlsAnalyst;
                    document.getElementById('ControlsAnalystDropdown').value = row.entity.ControlsAnalyst;
                    document.getElementById('DeployStatus').value = row.entity.DeployStatus;
                    document.getElementById('DeployStatusDropdown').value = row.entity.DeployStatus;
                    document.getElementById('DeployPlants').value = row.entity.DeployPlants;
                    document.getElementById('DeployPlantsDropdown').value = row.entity.DeployPlants;
                    document.getElementById('Updates').value = row.entity.Updates;

                    $scope.StageGating();

                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                        console.log(objarray);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        console.log(objarray);
                        $scope.Undo();
                        //if(oobjarray has this objectid)
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });






            $scope.deleteChangeMgmt = function () {
                //	if (document.getElementById('LoggedIn').value == "hasanif" || document.getElementById('LoggedIn').value == "haywood") {
                ChangeMgmtService.deleteChangeMgmt(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.Undo();
                    $scope.loadGrid();
                });
                console.log('Release Deleted');
                console.log(objarray);
                //	}
                //else {
                //		alert('Not Authorized to Delete');
                //	}
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
                console.log('openDIV',nav);
                

                //document.getElementById('mysidenavRightDash').style.width = '0';
                ////document.getElementById('mySidenav').style.width = '0';
                ////document.getElementById('mysidenavRightTicket').style.width = '0';
                //document.getElementById(nav).style.width = '90.352%';

                window.open('#/ChangeMgmt?uname=' + document.getElementById('LoggedIn').value + '&dom=DEN' + '&project=' + document.getElementById('ProjectName').value);
            }

            $scope.Undo = function () {

                document.getElementById('ReleaseName').value = '';
                document.getElementById('Status').value = '';
                document.getElementById('StatusDropdown').value = '';
                //document.getElementById('BusinessLeadDropdown').value	 ='';
                document.getElementById('BusinessLead').value = '';
                document.getElementById('BusinessLeadDropdown').value = '';
                document.getElementById('BLSign').value = '';
                document.getElementById('BusinessApprover').value = '';
                document.getElementById('BusinessApproverDropdown').value = '';
                document.getElementById('BApproverSign').value = '';
                document.getElementById('FS').value = '';
                document.getElementById('FSDropdown').value = '';
                document.getElementById('Developer').value = '';
                document.getElementById('DeveloperDropdown').value = '';
                document.getElementById('DEVSign').value = '';
                document.getElementById('TechLead').value = '';
                document.getElementById('TechLeadDropdown').value = '';
                document.getElementById('TLSign').value = '';
                document.getElementById('AppsApprover').value = '';
                document.getElementById('AppsApproverDropdown').value = '';
                document.getElementById('AppsApproverSign').value = '';
                document.getElementById('ST').value = '';
                document.getElementById('STDropdown').value = '';
                document.getElementById('BLSign2').value = '';
                document.getElementById('DEVSign2').value = '';
                document.getElementById('TLSign2').value = '';
                //document.getElementById('checkbox').value	 ='';
                document.getElementById('AppsApproverSign2').value = '';
                document.getElementById('FUT').value = '';
                document.getElementById('FUTDropdown').value = '';
                document.getElementById('PackageLocation').value = '';
                document.getElementById('ScreenShotLocation').value = '';
                document.getElementById('LockedDateTime').value = '';
                document.getElementById('Description').value = '';
                document.getElementById('TestCycle').value = '';
                document.getElementById('EnteredBy').value = '';
                document.getElementById('FSLocation').value = '';
                document.getElementById('Comment').value = '';
                document.getElementById('row_id').value = '';
                document.getElementById('TrainerName').value = '';
                document.getElementById('PlantContact').value = '';
                document.getElementById('PlantContactDropdown').value = '';
                document.getElementById('TechSpecLocation').value = '';
                document.getElementById('TestScriptLocation').value = '';
                document.getElementById('PRODDeployDate').value = '';
                document.getElementById('ControlsAnalyst').value = '';
                document.getElementById('ControlsAnalystDropdown').value = '';
                document.getElementById('DeployStatus').value = '';
                document.getElementById('DeployStatusDropdown').value = '';
                document.getElementById('DeployPlants').value = '';
                document.getElementById('DeployPlantsDropdown').value = '';
                document.getElementById('Updates').value = '';
                $scope.StageGating();

            }

            $scope.Idiation = function () {
                var id = ' ID: ' + '';
                var colname = document.getElementById('ReleaseName').id;
                var colval = document.getElementById('ReleaseName').value;
                ChangeMgmtService.InitChangeMgmt(id, colname, colval);
                console.log('this is ' + colname + colval);
            }

            $scope.SaveCMForm = function () {
                if (document.getElementById('LoggedIn').value == "hasanif" || document.getElementById('LoggedIn').value == "haywood") {
                    var id = document.getElementById('row_id').value;
                    ChangeMgmtService.SaveCMForm(id, 'archive', 'DEL');
                    console.log('this is ' + 'archive' + 'DEL' + id);
                    $scope.refreshGrid();
                }
                else {
                    alert('Not Authorized');
                }
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
            $scope.addChangeMgmt = function () {
                var ReleaseNameValue = document.getElementById('ReleaseName').value
                var FSValue = document.getElementById('FS').value
                var BusinessLeadValue = document.getElementById('BusinessLead').value
                var BLSignValue = document.getElementById('BLSign').value
                var BusinessApproverValue = document.getElementById('BusinessApprover').value
                var BApproverSignValue = document.getElementById('BApproverSign').value
                var DEVandTSValue = document.getElementById('DEVandTS').value
                var DeveloperValue = document.getElementById('Developer').value
                var DEVSignValue = document.getElementById('DEVSign').value
                var STValue = document.getElementById('ST').value
                var TechLeadValue = document.getElementById('TechLead').value
                var TLSignValue = document.getElementById('TLSign').value
                var AppsApproverValue = document.getElementById('AppsApprover').value
                var AppsApproverSignValue = document.getElementById('AppsApproverSign').value
                var FUTValue = document.getElementById('FUT').value
                var BLSign2Value = document.getElementById('BLSign2').value
                var DEVSign2Value = document.getElementById('DEVSign2').value
                var TLSign2Value = document.getElementById('TLSign2').value
                var AppsApproverSign2Value = document.getElementById('AppsApproverSign2').value
                var PackageLocationValue = document.getElementById('PackageLocation').value
                var ScreenShotLocationValue = document.getElementById('ScreenShotLocation').value
                var LockedDateTimeValue = document.getElementById('LockedDateTime').value
                var StatusValue = document.getElementById('Status').value
                var DescriptionValue = document.getElementById('Description').value
                var TestCycleValue = document.getElementById('TestCycle').value
                var EnteredByValue = document.getElementById('LoggedIn').value
                var FSLocationValue = document.getElementById('FSLocation').value
                //var InsertDateTimeValue = document.getElementById('InsertDateTime').value
                //var UpdateDateTimeValue = document.getElementById('UpdateDateTime').value
                var CommentValue = document.getElementById('Comment').value
                var row_idValue = document.getElementById('row_id').value
                var TrainerNameValue = document.getElementById('TrainerName').value
                var PlantContactValue = document.getElementById('PlantContact').value
                var TechSpecLocationValue = document.getElementById('TechSpecLocation').value
                var TestScriptLocationValue = document.getElementById('TestScriptLocation').value
                var PRODDeployDateValue = document.getElementById('PRODDeployDate').value
                var ControlsAnalystValue = document.getElementById('ControlsAnalyst').value
                var DeployStatusValue = document.getElementById('DeployStatus').value
                var DeployPlantsValue = document.getElementById('DeployPlants').value
                var UpdatesValue = document.getElementById('Updates').value
                //console.log('New Issue Added');
                ChangeMgmtService.addChange(ReleaseNameValue, FSValue, BusinessLeadValue, BLSignValue, BusinessApproverValue, BApproverSignValue, DEVandTSValue, DeveloperValue, DEVSignValue, STValue, TechLeadValue, TLSignValue, AppsApproverValue, AppsApproverSignValue, FUTValue, BLSign2Value, DEVSign2Value, TLSign2Value, AppsApproverSign2Value, PackageLocationValue, ScreenShotLocationValue, LockedDateTimeValue, StatusValue, DescriptionValue, TestCycleValue, EnteredByValue, FSLocationValue, CommentValue, row_idValue, TrainerNameValue, PlantContactValue, TechSpecLocationValue, TestScriptLocationValue, PRODDeployDateValue, ControlsAnalystValue, DeployStatusValue, DeployPlantsValue, UpdatesValue).success(function (data) {


                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();

                });
            }

            $scope.StageGating = function () {

                if (document.getElementById('LoggedIn').value != "") {
                    if (document.getElementById('LoggedIn').value != "guest") {
                        if (document.getElementById('ReleaseName').value != "") {
                            //document.getElementById('BA').style.pointerEvents = 'auto';
                            if (document.getElementById('BApproverSign').value != "") {
                                document.getElementById('BA').style.pointerEvents = 'auto';
                                document.getElementById('BA').style.backgroundColor = '#99C199';
                                document.getElementById('BA').style.Color = 'white';
                            }
                            else {
                                document.getElementById('BA').style.pointerEvents = 'auto';
                                document.getElementById('BA').style.backgroundColor = 'lightskyblue';
                                document.getElementById('BA').style.Color = 'black';
                            }

                        }
                        else {
                            document.getElementById('BA').style.pointerEvents = 'none';
                            document.getElementById('BA').style.backgroundColor = 'white';
                            document.getElementById('BA').style.Color = 'black';
                        }

                        if (document.getElementById('FSDropdown').value == "Approved") {
                            // document.getElementById('Development').style.pointerEvents = 'auto';
                            if (document.getElementById('STDropdown').value == "Approved") {
                                document.getElementById('Development').style.pointerEvents = 'auto';
                                document.getElementById('Development').style.backgroundColor = '#99C199';
                                document.getElementById('Development').style.Color = 'white';
                            }
                            else {
                                document.getElementById('Development').style.pointerEvents = 'auto';
                                document.getElementById('Development').style.backgroundColor = 'lightskyblue';
                                document.getElementById('Development').style.Color = 'black';
                            }
                        }
                        else {
                            document.getElementById('Development').style.pointerEvents = 'none';
                            document.getElementById('Development').style.backgroundColor = 'white';
                            document.getElementById('Development').style.Color = 'black';
                        }

                        if (document.getElementById('STDropdown').value == "Approved") {
                            //document.getElementById('UT').style.pointerEvents = 'auto';
                            if (document.getElementById('FUTDropdown').value == "Approved") {
                                document.getElementById('UT').style.pointerEvents = 'auto';
                                document.getElementById('UT').style.backgroundColor = '#99C199';
                                document.getElementById('UT').style.Color = 'white';
                            }
                            else {
                                document.getElementById('UT').style.pointerEvents = 'auto';
                                document.getElementById('UT').style.backgroundColor = 'lightskyblue';
                                document.getElementById('UT').style.Color = 'black';
                            }

                        }
                        else {
                            document.getElementById('UT').style.pointerEvents = 'none';
                            document.getElementById('UT').style.backgroundColor = 'white';
                            document.getElementById('UT').style.Color = 'black';
                        }

                        if (document.getElementById('FUTDropdown').value == "Approved") {
                            // document.getElementById('FA').style.pointerEvents = 'auto';
                            if (document.getElementById('AppsApproverSign2').value != "") {
                                document.getElementById('FA').style.pointerEvents = 'auto';
                                document.getElementById('FA').style.backgroundColor = '#99C199';
                                document.getElementById('FA').style.Color = 'white';
                            }
                            else {
                                document.getElementById('FA').style.pointerEvents = 'auto';
                                document.getElementById('FA').style.backgroundColor = 'lightskyblue';
                                document.getElementById('FA').style.Color = 'black';
                            }
                        }
                        else {
                            document.getElementById('FA').style.pointerEvents = 'none';
                            document.getElementById('FA').style.backgroundColor = 'white';
                            document.getElementById('FA').style.Color = 'black';
                        }
                        document.getElementById('MainCtrls').style.pointerEvents = 'auto';
                        document.getElementById('LoggedIn').style.Color = 'black';
                        document.getElementById('LoggedIn').style.backgroundColor = 'highlight';
                        document.getElementById('ReleaseNameGroup').style.pointerEvents = 'auto';
                        document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
                        // document.getElementById('OperationBtn').style.pointerEvents = 'auto';
                    }
                    else {
                        document.getElementById('BA').style.pointerEvents = 'none';
                        document.getElementById('Development').style.pointerEvents = 'none';
                        document.getElementById('UT').style.pointerEvents = 'none';
                        document.getElementById('FA').style.pointerEvents = 'none';
                        document.getElementById('MainCtrls').style.pointerEvents = 'Auto';
                        document.getElementById('LoggedIn').style.Color = 'black';
                        document.getElementById('LoggedIn').style.backgroundColor = 'highlight';
                        document.getElementById('ReleaseNameGroup').style.pointerEvents = 'none';
                        document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
                        // document.getElementById('OperationBtn').style.pointerEvents = 'none';
                    }
                }

                else {
                    document.getElementById('MainCtrls').style.pointerEvents = 'none';
                    //alert('Please LogIn');
                    document.getElementById('LoggedIn').value = "Please LogIn"
                    document.getElementById('LoggedIn').style.Color = 'yellow';
                    document.getElementById('LoggedIn').style.backgroundColor = 'red';
                }

            }

            $scope.downloadCSV = function () {
                ChangeMgmtService(function (response) {
                    //ChangeMgmtService.readAll2().then(function (response) {
                    var data = $scope.gridOptions.data;
                    var items1 = $scope.gridOptions.totalItems;
                    $scope.gridOptions.data = response.data;
                    $scope.pagination.totalItems = response.totalRows;
                    $scope.gridApi.exporter.csvExport('all', 'all');
                });
            }

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }






        }



    }



})();

//setInterval(function () { ObserveInputValue($('#FSLocation').val()); }, 100);

function ChooseFS(data) {

    document.getElementById("FS").value = data.value;

}
function ChooseStatus(data) {

    document.getElementById("Status").value = data.value;

}
function SelectStatus(data) {

    document.getElementById("StatusDropDown").value = data.value;

}
function ChooseST(data) {

    document.getElementById("ST").value = data.value;

}
//function ChooseFSLocation(data) {

//    document.getElementById("AssignedTo").value = data.value;

//}
function ChooseFUT(data) {

    document.getElementById("FUT").value = data.value;

}
function ChooseBusinessLead(data) {

    document.getElementById("BusinessLead").value = data.value;

}
function ChooseBusinessApprover(data) {

    document.getElementById("BusinessApprover").value = data.value;

}
function ChooseTechLead(data) {

    document.getElementById("TechLead").value = data.value;

}
function ChooseDeveloper(data) {

    document.getElementById("Developer").value = data.value;
    document.getElementById("DEVandTS").value = "1";

}
function ChooseBusinessLead(data) {

    document.getElementById("BusinessLead").value = data.value;

}
function ChooseBusinessApprover(data) {

    document.getElementById("BusinessApprover").value = data.value;

}

function ChooseAppsApprover(data) {

    document.getElementById("AppsApprover").value = data.value;

}

function ChoosePC(data) {

    document.getElementById("PlantContact").value = data.value;
}

function ChooseCTRL(data) {

    document.getElementById("ControlsAnalystRep").value = data.value;
}

function ChooseDPLY(data) {

    document.getElementById("DeployStatus").value = data.value;
}
function ChoosePlant(data) {

    document.getElementById("DeployPlants").value = data.value;
}

function extWidthFS(data) {
    document.getElementById('FSLocation').style.width = '60%';

}
function shWidthFS(data) {
    document.getElementById('FSLocation').style.width = '50%';

}
function extWidthPKG(data) {
    document.getElementById('PackageLocation').style.width = '60%';

}
function shWidthPKG(data) {
    document.getElementById('PackageLocation').style.width = '50%';

}
function extWidthTS(data) {
    document.getElementById('TechSpecLocation').style.width = '60%';

}
function shWidthTS(data) {
    document.getElementById('TechSpecLocation').style.width = '50%';

}

//function shWidthTS(data) {
//    document.getElementById('TechSpecLocation').style.width = '50%';

//}
function extWidthSS(data) {
    document.getElementById('ScreenShotLocation').style.width = '60%';

}
function shWidthSS(data) {
    document.getElementById('ScreenShotLocation').style.width = '50%';

}
function LogIn() {
    if (document.getElementById("Password").value != "") {
        var toLower = document.getElementById("UserName").value.toLowerCase();
        document.getElementById("LoggedIn").value = toLower;
        document.getElementById("UserName").value = ""
        document.getElementById("Password").value = ""
        SetScreen();
    }
    else {
        alert(" Password is required. Please Enter Password!")
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    this.innerHTML = "LogOut";

}

function ESignBL() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("BusinessLead").value) {
            alert("Not Authorized!")
            document.getElementById("BLSign").value = ""
            ClearCHKBoxes()
        }
        else {
            document.getElementById("BLSign").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-BA Stage>>Approved by Business Lead : ' + $('#BLSign').val() + $('#Updates').val());
        }
        ClearCHKBoxes()


    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }



}
function ESignBA() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("BusinessApprover").value) {
            alert("Not Authorized!")
            document.getElementById("BApproverSign").value = ""
            ClearCHKBoxes()
        }
        else {
            document.getElementById("BApproverSign").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-BA Stage>> Approved by Business Approver : ' + $('#BApproverSign').val() + $('#Updates').val());
            document.getElementById("FSDropdown").value = "Approved";
            document.getElementById("FS").value = "Approved";
            SetScreen()
        }
        ClearCHKBoxes()

    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    //this.innerHTML = "LogOut";

}
function ESignDV() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("Developer").value) {
            alert("Not Authorized!")
            document.getElementById("DEVSign").value = ""
            ClearCHKBoxes()
        }
        else {
            document.getElementById("DEVSign").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-Dev Stage>>Approved by Developer: ' + $('#DEVSign').val() + $('#Updates').val());
            //document.getElementById("FSDropdown").value = "1";
            //document.getElementById("FS").value = "1";
        }
        ClearCHKBoxes()
    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }



}
function ESignTL() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("TechLead").value) {
            alert("Not Authorized!")
            document.getElementById("TLSign").value = ""
            ClearCHKBoxes()
        }
        else {
            document.getElementById("TLSign").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-Dev Stage>>Approved by TechLead: ' + $('#TLSign').val() + $('#Updates').val());

        }
        ClearCHKBoxes()
    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    //this.innerHTML = "LogOut";

}
function ESignAA() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("AppsApprover").value) {
            alert("Not Authorized!")
            document.getElementById("AppsApproverSign").value = ""
            ClearCHKBoxes()
            SetScreen()
        }
        else {
            document.getElementById("AppsApproverSign").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-Dev Stage>> Approved by AppsApprover: ' + $('#AppsApproverSign').val() + $('#Updates').val());
            document.getElementById("STDropdown").value = "Approved";
            document.getElementById("ST").value = "Approved";
        }
        ClearCHKBoxes()
        SetScreen()
    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    //this.innerHTML = "LogOut";

}

function ESignBL2() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("BusinessLead").value || document.getElementById("DEVSign2").value == "" || document.getElementById("TLSign2").value == "") {
            alert("Not Authorized! OR Developer's and TechLead's signatures are Required!")
            document.getElementById("BLSign2").value = ""
            ClearCHKBoxes()
        }

        else {
            document.getElementById("BLSign2").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by Business Lead: ' + $('#BLSign2').val() + $('#Updates').val());
            document.getElementById("FUTDropdown").value = "Approved";
            document.getElementById("FUT").value = "Approved";
            ClearCHKBoxes()
            SetScreen()
        }
        document.getElementById("ckBL").checked = false;
        document.getElementById("ckBA").checked = false;


    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    //this.innerHTML = "LogOut";

}

function ESignDV2() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("Developer").value || document.getElementById("TestScriptLocation").value == "") {
            alert("Not Authorized! OR TestScript is Required!")
            document.getElementById("DEVSign2").value = ""
            ClearCHKBoxes()
        }
        else {
            document.getElementById("DEVSign2").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by Developer: ' + $('#DEVSign2').val() + $('#Updates').val());

        }
        ClearCHKBoxes()
    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    //this.innerHTML = "LogOut";

}
function ESignTL2() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("TechLead").value || document.getElementById("DEVSign2").value == "") {
            alert("Not Authorized! OR Developer's Signature is Required!")
            document.getElementById("TLSign2").value = ""
            ClearCHKBoxes()
        }
        else {
            document.getElementById("TLSign2").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by TechLead: ' + $('#TLSign2').val() + $('#Updates').val());
            //document.getElementById("FSDropdown").value = "1";
            //document.getElementById("FS").value = "1";
        }
        ClearCHKBoxes()
    }
    else {
        alert(" Log In required. Please Log In!")

    }
}
function ESignAA2() {
    if (document.getElementById("LoggedIn").value != "") {
        if (document.getElementById("LoggedIn").value != document.getElementById("AppsApprover").value) {
            alert("Not Authorized!")
            document.getElementById("AppsApproverSign2").value = ""
            ClearCHKBoxes()

        }
        else {
            document.getElementById("AppsApproverSign2").value = document.getElementById("LoggedIn").value + " " + Date();
            $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by AppsApprover. Ready for roll out: ' + $('#AppsApproverSign2').val() + $('#Updates').val());
            document.getElementById("StatusDropdown").value = "ApprovedForRollout";
            document.getElementById("Status").value = "ApprovedForRollout";
            var date = new Date(Date());
            alert('You are approving the Development Completion at ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
            document.getElementById("LockedDateTime").value = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            SetScreen()
        }
        ClearCHKBoxes()
        SetScreen()
    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    //this.innerHTML = "LogOut";

}

function ESignDEPLOYComplete() {
    if (document.getElementById("LoggedIn").value != "") {
        //if (document.getElementById("LoggedIn").value != document.getElementById("AppsApprover").value) {
        //    alert("Not Authorized!")
        //    document.getElementById("ControlsAnalyst").value = ""
        //    ClearCHKBoxes()

        //}
        //else {
        document.getElementById("ControlsAnalyst").value = document.getElementById("ControlsAnalystRep").value + " " + Date();
        document.getElementById("DeployStatusDropdown").value = "Complete";
        document.getElementById("DeployStatus").value = "Complete";
        var date = new Date(Date());
        alert('You are approving the Production Deployment Completion at ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
        SetScreen()
        //}
        ClearCHKBoxes()
        SetScreen()
    }
    else {
        alert(" Log In required. Please Log In!")
        ClearCHKBoxes()
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    //this.innerHTML = "LogOut";

}
//console.log(formatDate(new Date()));
//function ESignLK() {
//    if (document.getElementById("LoggedIn").value != "") {
//        if (document.getElementById("Status").value != "ApprovedForRollout") {
//            alert("Package Not Ready!")
//            ClearCHKBoxes()
//             }
//        else {
//            var d = new Date,
//                dformat = [(d.getMonth() + 1).padLeft(),
//                d.getDate().padLeft(),
//                d.getFullYear()].join('/') + ' ' +
//                    [d.getHours().padLeft(),
//                    d.getMinutes().padLeft(),
//                    d.getSeconds().padLeft()].join(':');

//            document.getElementById("LockedDateTime").value = d;
//            //document.getElementById("FSDropdown").value = "1";
//            //document.getElementById("FS").value = "1";
//        }
//        ClearCHKBoxes()
//    }
//    else {
//        alert(" Log In required. Please Log In!")
//        ClearCHKBoxes()
//    }

//    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
//    //else
//    //this.innerHTML = "LogOut";

//}

function ClearCHKBoxes() {
    document.getElementById("ckBL").checked = false;
    document.getElementById("ckBA").checked = false;
    document.getElementById("ckDV").checked = false;
    document.getElementById("ckTL").checked = false;
    document.getElementById("ckAA").checked = false;
    document.getElementById("ckBL2").checked = false;
    document.getElementById("ckDV2").checked = false;
    document.getElementById("ckTL2").checked = false;
    document.getElementById("ckAA2").checked = false;
    document.getElementById("ckDPLY").checked = false;
}


//function InitiateREL() {
//    //$scope.lastCellEdited = ' ID: ' + rowEntity.row_id + ' Column:' + document.getElementById('ReleaseName').value + ' newValue:' + newValue + ' oldValue:' + oldValue;
//    // $scope.lastCellEdited = ' ID: ' + rowEntity.row_id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;
//    // $scope.lastCellEdited = 
//    var id = ' ID: ' + '';
//    var colname = document.getElementById('ReleaseName').id;
//    var colval = document.getElementById('ReleaseName').value;
//    ChangeMgmtService.saveChangeMgmt(id, colname, colval);
//    console.log('this is ' + colname + colval);
////    $scope.$apply();

//    }


function SetScreen() {
    if (document.getElementById('LoggedIn').value != "") {
        if (document.getElementById('LoggedIn').value != "guest") {
            if (document.getElementById('ReleaseName').value != "") {
                //document.getElementById('BA').style.pointerEvents = 'auto';
                if (document.getElementById('BApproverSign').value != "") {
                    document.getElementById('BA').style.pointerEvents = 'auto';
                    document.getElementById('BA').style.backgroundColor = '#99C199';
                    document.getElementById('BA').style.Color = 'white';
                }
                else {
                    document.getElementById('BA').style.pointerEvents = 'auto';
                    document.getElementById('BA').style.backgroundColor = 'lightskyblue';
                    document.getElementById('BA').style.Color = 'black';
                }

            }
            else {
                document.getElementById('BA').style.pointerEvents = 'none';
                document.getElementById('BA').style.backgroundColor = 'white';
                document.getElementById('BA').style.Color = 'black';
            }

            if (document.getElementById('FSDropdown').value == "Approved") {
                // document.getElementById('Development').style.pointerEvents = 'auto';
                if (document.getElementById('STDropdown').value == "Approved") {
                    document.getElementById('Development').style.pointerEvents = 'auto';
                    document.getElementById('Development').style.backgroundColor = '#99C199';
                    document.getElementById('Development').style.Color = 'white';
                }
                else {
                    document.getElementById('Development').style.pointerEvents = 'auto';
                    document.getElementById('Development').style.backgroundColor = 'lightskyblue';
                    document.getElementById('Development').style.Color = 'black';
                }
            }
            else {
                document.getElementById('Development').style.pointerEvents = 'none';
                document.getElementById('Development').style.backgroundColor = 'white';
                document.getElementById('Development').style.Color = 'black';
            }

            if (document.getElementById('STDropdown').value == "Approved") {
                //document.getElementById('UT').style.pointerEvents = 'auto';
                if (document.getElementById('FUTDropdown').value == "Approved") {
                    document.getElementById('UT').style.pointerEvents = 'auto';
                    document.getElementById('UT').style.backgroundColor = '#99C199';
                    document.getElementById('UT').style.Color = 'white';
                }
                else {
                    document.getElementById('UT').style.pointerEvents = 'auto';
                    document.getElementById('UT').style.backgroundColor = 'lightskyblue';
                    document.getElementById('UT').style.Color = 'black';
                }

            }
            else {
                document.getElementById('UT').style.pointerEvents = 'none';
                document.getElementById('UT').style.backgroundColor = 'white';
                document.getElementById('UT').style.Color = 'black';
            }

            if (document.getElementById('FUTDropdown').value == "Approved") {
                // document.getElementById('FA').style.pointerEvents = 'auto';
                if (document.getElementById('AppsApproverSign2').value != "") {
                    document.getElementById('FA').style.pointerEvents = 'auto';
                    document.getElementById('FA').style.backgroundColor = '#99C199';
                    document.getElementById('FA').style.Color = 'white';
                }
                else {
                    document.getElementById('FA').style.pointerEvents = 'auto';
                    document.getElementById('FA').style.backgroundColor = 'lightskyblue';
                    document.getElementById('FA').style.Color = 'black';
                }
            }
            else {
                document.getElementById('FA').style.pointerEvents = 'none';
                document.getElementById('FA').style.backgroundColor = 'white';
                document.getElementById('FA').style.Color = 'black';
            }
            document.getElementById('MainCtrls').style.pointerEvents = 'auto';
            document.getElementById('LoggedIn').style.Color = 'black';
            document.getElementById('LoggedIn').style.backgroundColor = 'highlight';
            document.getElementById('ReleaseNameGroup').style.pointerEvents = 'auto';
            document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
            // document.getElementById('OperationBtn').style.pointerEvents = 'auto';
        }
        else {
            document.getElementById('BA').style.pointerEvents = 'none';
            document.getElementById('Development').style.pointerEvents = 'none';
            document.getElementById('UT').style.pointerEvents = 'none';
            document.getElementById('FA').style.pointerEvents = 'none';
            document.getElementById('MainCtrls').style.pointerEvents = 'Auto';
            document.getElementById('LoggedIn').style.Color = 'black';
            document.getElementById('LoggedIn').style.backgroundColor = 'highlight';
            document.getElementById('ReleaseNameGroup').style.pointerEvents = 'none';
            document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
            //document.getElementById('OperationBtn').style.pointerEvents = 'none';
        }
    }

    else {
        document.getElementById('MainCtrls').style.pointerEvents = 'none';
        //alert('Please LogIn');
        document.getElementById('LoggedIn').value = "Please LogIn"
        document.getElementById('LoggedIn').style.Color = 'yellow';
        document.getElementById('LoggedIn').style.backgroundColor = 'red';
    }

}


function convertFSToURL() {
    var URLToGo = document.getElementById('FSLocation').value;
    if (URLToGo.indexOf('https://') != -1) {
        console.log(URLToGo + '1st');
        window.open(URLToGo, '_blank');
    }
    else if (URLToGo.indexOf('http://') != -1) {
        console.log(URLToGo + '2nd');
        window.open(URLToGo, '_blank');
    }


    else {

        var prefix = 'http://';
        if (URLToGo.substr(0, prefix.length) !== prefix) {
            URLToGo = prefix + URLToGo;
            console.log(URLToGo + '3rd');
            window.open(URLToGo, '_blank');
        }

    }
}
function convertTSToURL() {
    var URLToGo = document.getElementById('TechSpecLocation').value;
    if (URLToGo.indexOf('https://') != -1) {
        console.log(URLToGo + '1st');
        window.open(URLToGo, '_blank');
    }
    else if (URLToGo.indexOf('http://') != -1) {
        console.log(URLToGo + '2nd');
        window.open(URLToGo, '_blank');
    }

    //else if (URLToGo.indexOf('s:') != -1) {
    //    URLToGo = URLToGo.replace(/\\/g, "/"); 
    //    URLToGo = URLToGo.replace(/s:/g,"lfc-nas/Department_Shares/")
    //    var prefix = 'file:///';
    //    if (URLToGo.substr(0, prefix.length) !== prefix) {
    //        URLToGo = prefix + URLToGo;
    //      }
    //    console.log(URLToGo + '2b');
    //    window.open(URLToGo);
    //}
    else {

        var prefix = 'http://';
        if (URLToGo.substr(0, prefix.length) !== prefix) {
            URLToGo = prefix + URLToGo;
            console.log(URLToGo + '3rd');
            window.open(URLToGo, '_blank');
        }

    }
}

function convertPKGToURL() {
    var URLToGo = document.getElementById('PackageLocation').value;
    if (URLToGo.indexOf('https://') != -1) {
        console.log(URLToGo + '1st');
        window.open(URLToGo, '_blank');
    }
    else if (URLToGo.indexOf('http://') != -1) {
        console.log(URLToGo + '2nd');
        window.open(URLToGo, '_blank');
    }

    else {

        var prefix = 'http://';
        if (URLToGo.substr(0, prefix.length) !== prefix) {
            URLToGo = prefix + URLToGo;
            console.log(URLToGo + '3rd');
            window.open(URLToGo, '_blank');
        }

    }
}
function convertSSToURL() {
    var URLToGo = document.getElementById('ScreenShotLocation').value;

    if (URLToGo.indexOf('https://') != -1) {
        console.log(URLToGo + '1st');
        window.open(URLToGo, '_blank');
    }
    else if (URLToGo.indexOf('http://') != -1) {
        console.log(URLToGo + '2nd');
        window.open(URLToGo, '_blank');
    }

    else {

        var prefix = 'http://';
        if (URLToGo.substr(0, prefix.length) !== prefix) {
            URLToGo = prefix + URLToGo;
            console.log(URLToGo + '3rd');
            window.open(URLToGo, '_blank');
        }

    }

}

function convertTScriptToURL() {
    var URLToGo = document.getElementById('TestScriptLocation').value;

    if (URLToGo.indexOf('https://') != -1) {
        console.log(URLToGo + '1st');
        window.open(URLToGo, '_blank');
    }
    else if (URLToGo.indexOf('http://') != -1) {
        console.log(URLToGo + '2nd');
        window.open(URLToGo, '_blank');
    }

    else {

        var prefix = 'http://';
        if (URLToGo.substr(0, prefix.length) !== prefix) {
            URLToGo = prefix + URLToGo;
            console.log(URLToGo + '3rd');
            window.open(URLToGo, '_blank');
        }

    }

}








