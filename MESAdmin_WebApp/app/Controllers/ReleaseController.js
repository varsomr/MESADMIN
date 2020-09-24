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
                            if (map[i][idField] === input) {
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






    //  'use strict';

    angular
        .module('myApp')
        .controller('ReleaseController', controller);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ChangeMgmtService','ProjectService'];

    app.config(function ($httpProvider) {

    });




    app.filter('BusinessLeadFilter', function () {
        var BusinessLeadHash = {
            'Chad Givens': 'Chad Givens',
            'Matthew Sherbahn': 'Matthew Sherbahn',
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

    function controller($scope, $timeout, uiGridConstants, ChangeMgmtService, ProjectService) {


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

        var ReleaseStatus = [
            { value: 'NotStarted', label: 'NotStarted' },
            { value: 'Pending', label: 'Pending' },            
            { value: 'ApprovedForRollout', label: 'ApprovedForRollout' },
            { value: '', label: '' }
            

        ];

        var RegStatus = [
            { value: 'NOTStarted', label: 'NOTStarted' },
            { value: 'Pending', label: 'Pending' },
            { value: 'Approved', label: 'Approved' },
            { value: '', label: '' }


        ];

        $scope.randomSize = function (nav, ty) {
            var newHeight; //= Math.floor(Math.random() * (300 - 100 + 1) + 300);
            var newWidth; //= Math.floor(Math.random() * (600 - 200 + 1) + 200);
            if ($(window).width() < 600) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                newWidth = 400;
            }
            else if ($(window).width() < 1300) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                //newWidth = 1200;
                newWidth = $(window).width();
            }
            else if ($(window).width() < 2000) {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                //newWidth = 1800;
                newWidth = $(window).width();
            }

            else {
                if (ty === 'fs') {
                    newHeight = 85;
                }
                else {
                    newHeight = 40;
                }
                newWidth = 1800;
            }
            //console.log('Your screen resolution is -' + $(window).width());
            angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'vh');
            angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'px');
        };


        $scope.gridOptions = {

            showGridFooter: false,
            multiSelect: false,
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
            //'<div><div style="height: 100%; {\'background-color\': getBkgColorTable(myData[row.rowIndex].count)}" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell></div></div>',

            columnDefs: [
                //{ field: 'row_id', enableCellEdit: false, displayName: 'IncidentID', type: 'number', cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', width: '5%' },
                { field: 'row_id', width: '5%', displayName: 'ID', enableCellEdit: false, cellTooltip: function (row) { return row.entity.row_id; }, cellTemplate: '<div style="word-wrap:break-word;" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ReleaseName', pinnedLeft: true, enableCellEdit: false, width: '20%', cellTooltip: function (row) { return row.entity.ReleaseName; }, cellTemplate: '<div class="ui-grid-cell-contents-break" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ProjectName', pinnedLeft: true, enableCellEdit: false, width: '20%', cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents-break" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AssignedTo', displayName: 'AssignedTo', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.AssignedTo; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'Status', displayName: 'Status', width: '7%', enableCellEdit: false, cellFilter: 'StatusFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'Status',
                    editDropdownOptionsArray: [
                        { id: '0', Status: 'Pending' },
                        { id: '1', Status: 'ApprovedForRollout' },
                        { id: '2', Status: 'Rejected' }

                    ], filter: { selectOptions: ReleaseStatus, type: uiGridConstants.filter.SELECT }


                },
                //{ field: 'AssignedTo', displayName: 'AssignedTo', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.AssignedTo; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'FS', displayName: 'BusApprStatus', enableCellEdit: false, width: '7%', cellFilter: 'FSFilter', editableCellTemplate: 'ui-grid/dropdownEditor', editDropdownValueLabel: 'FS',
                    editDropdownOptionsArray: [
                        { id: '0', FS: 'Pending' },
                        { id: '1', FS: 'Approved' },
                        { id: '2', FS: 'Rejected' },
                        { id: '3', FS: 'other' }
                    ], filter: { selectOptions: RegStatus, type: uiGridConstants.filter.SELECT }, visible: false
                },
                {
                    field: 'ST', displayName: 'DevStatus', width: '7%', enableCellEdit: false, cellFilter: 'STFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'ST',
                    editDropdownOptionsArray: [
                        { id: '0', ST: 'Pending' },
                        { id: '1', ST: 'Approved' },
                        { id: '2', ST: 'Rejected' },
                        { id: '3', ST: 'other' }

                    ], filter: { selectOptions: RegStatus, type: uiGridConstants.filter.SELECT }, visible: false
                },
                {
                    field: 'FUT', displayName: 'FUTStatus', width: '7%', enableCellEdit: false, cellFilter: 'FUTFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'FUT',
                    editDropdownOptionsArray: [
                        { id: '0', FUT: 'Pending' },
                        { id: '1', FUT: 'Approved' },
                        { id: '2', FUT: 'Rejected' },
                        { id: '3', FUT: 'other' }

                    ], filter: { selectOptions: RegStatus, type: uiGridConstants.filter.SELECT }, visible: false
                },
                {
                    field: 'DEVandTS', width: '7%', enableCellEdit: false, cellFilter: 'DEVandTSFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'DEVandTS', visible: false,
                    editDropdownOptionsArray: [
                        { id: '0', DEVandTS: 'Pending' },
                        { id: '1', DEVandTS: 'Approved' },
                        { id: '2', DEVandTS: 'Rejected' },
                        { id: '3', DEVandTS: 'other' }

                    ], filter: { selectOptions: RegStatus, type: uiGridConstants.filter.SELECT }
                },
                //{ field: 'BusinessLead', width: '5%', cellFilter: 'genderFilter', cellClass: function (grid, row, col, rowRenderIndex, colRenderIndex) { if (grid.getCellValue(row, col) == 1) { return 'blue'; } return 'green'; }, cellTooltip: function (row) { return row.entity.Status; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'BusinessLead', width: '7%', enableCellEdit: false, cellFilter: 'BusinessLeadFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'BusinessLead',
                    editDropdownOptionsArray: [
                        { id: 'Chad Givens', BusinessLead: 'Chad Givens' },
                        { id: 'Steve Lesner', BusinessLead: 'Steve Lesner' },
                        { id: 'Mike Haywood', BusinessLead: 'Mike Haywood' },
                        { id: 'other', BusinessLead: 'other' }

                    ], visible: false
                },
                { field: 'FSLocation', displayName: 'FuctionalSpecLocation', enableCellEdit: false, width: '12%', cellTooltip: function (row) { return row.entity.FSLocation; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'BLSign', width: '7%', cellTooltip: function (row) { return row.entity.BLSign; }, cellTemplate: '<div style="word-wrap:break-word;" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                {
                    field: 'BusinessApprover', width: '10%', enableCellEdit: false, cellFilter: 'BusinessLeadFilter', editableCellTemplate: 'ui-grid/dropdownEditor',
                    editDropdownValueLabel: 'BusinessApprover',
                    editDropdownOptionsArray: [
                        { id: 'Mike Haywood', BusinessApprover: 'Mike Haywood' }

                    ], visible: false
                },
                { field: 'BApproverSign', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.BApproverSign; }, cellTemplate: '<div style="word-wrap:break-word;" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },


                //{ field: 'Type', displayName: 'IssueType', width: '7%', filter: { selectOptions: GroupTypes, type: uiGridConstants.filter.SELECT }, cellTooltip: function (row) { return row.entity.Type; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                
                { field: 'Developer', displayName: 'Developer', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.Developer; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'TechSpecLocation', enableCellEdit: false, displayName: 'TechSpecLocation', width: '7%', cellTooltip: function (row) { return row.entity.TechSpecLocation; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'DEVSign', displayName: 'Requestor', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.DEVSign; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                //{ field: 'AssignedTo', displayName: 'AssignedTo', width: '5%', cellTooltip: function (row) { return row.entity.AssignedTo; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },

                { field: 'TechLead', displayName: 'TechLead', width: '5%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.TechLead; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'TLSign', displayName: 'TLSign', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TLSign; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'AppsApprover', enableCellEdit: false, displayName: 'AppsApprover', width: '7%', cellTooltip: function (row) { return row.entity.AppsApprover; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'AppsApproverSign', enableCellEdit: false, displayName: 'AppsApproverSign', width: '7%', cellTooltip: function (row) { return row.entity.AppsApproverSign; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },

                { field: 'DEVSign2', displayName: 'DEVSign2', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.DEVSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'TLSign2', displayName: 'TLSign2', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TLSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'BLSign2', displayName: 'BLSign2', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.BLSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'TestScriptLocation', displayName: 'TestScriptLocation', enableCellEdit: false, width: '8%', cellTooltip: function (row) { return row.entity.TestScriptLocation; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'AppsApproverSign2', enableCellEdit: false, displayName: 'AppsApproverSign2', width: '10%', cellTooltip: function (row) { return row.entity.AppsApproverSign2; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'PackageLocation', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.PackageLocation; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'ScreenShotLocation', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.ScreenShotLocation; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'LockedDateTime', displayName: 'LockedOn', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.LockedDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },

                { field: 'Description', displayName: 'Description', enableCellEdit: false, width: '65%', cellTooltip: function (row) { return row.entity.Description; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'TestCycle', displayName: 'TrainingDT', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TestCycle; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'EnteredBy', displayName: 'EnteredBy', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.EnteredBy; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'TrainerName', enableCellEdit: false, displayName: 'TrainerName', width: '10%', cellTooltip: function (row) { return row.entity.TrainerName; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'PlantContact', enableCellEdit: false, displayName: 'PlantContact', width: '10%', cellTooltip: function (row) { return row.entity.PlantContact; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'InsertDateTime', displayName: 'EnteredOn', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.InsertDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'UpdateDateTime', displayName: 'LastUpdated', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.UpdateDateTime; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'Comment', displayName: 'Comment', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.Comment; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'PRODDeployDate', enableCellEdit: false, displayName: 'PRODDeployDate', width: '10%', cellTooltip: function (row) { return row.entity.PRODDeployDate; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'ControlsAnalyst', displayName: 'DeployAnalyst', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.ControlsAnalyst; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'DeployStatus', displayName: 'DeployStatus', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.DeployStatus; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'DeployPlants', displayName: 'DeployPlants', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.DeployPlants; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'Updates', displayName: 'Updates', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.Updates; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false },
                { field: 'ProjectID', displayName: 'ProjectID', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.ProjectID; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', visible: false }

            ]

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
                var uid = decodeURIComponent(results[2].replace(/\+/g, " "));
                $scope.title = uid;
                //alert(uid)
                document.getElementById('LoggedIn').value = uid;   //(decodeURIComponent(results[2].replace(/\+/g, " ")));
                //document.getElementById('LoggedIn').value = regex;
                //}

            };
            $scope.function_one();



            $scope.StageGating = function () {

                // if (document.getElementById('LoggedIn').value != "") {
                if (document.getElementById('LoggedIn').value != "guest") {
                    if (document.getElementById('ReleaseName').value != "") {
                        //document.getElementById('BA').style.pointerEvents = 'auto';
                        if (document.getElementById('BApproverSign').value != "") {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = 'darkgreen';
                            //document.getElementById('BA').style.Color = 'white';
                            $('#BA').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = '#2E4A62';
                            //document.getElementById('BA').style.Color = 'black';
                            $('#BA').css({ 'color': 'white' });
                        }

                    }
                    else {
                        document.getElementById('BA').style.pointerEvents = 'none';
                        document.getElementById('BA').style.backgroundColor = 'black';
                        //document.getElementById('BA').style.Color = 'black';
                        $('#BA').css({ 'color': 'white' });
                    }

                    if (document.getElementById('FSDropdown').value == "Approved") {
                        // document.getElementById('Development').style.pointerEvents = 'auto';
                        if (document.getElementById('STDropdown').value == "Approved") {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = 'darkgreen';
                            // document.getElementById('Development').style.Color = 'white';
                            $('#Development').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = '#2E4A62';
                            //document.getElementById('Development').style.Color = 'black';
                            $('#Development').css({ 'color': 'white' });
                        }
                    }
                    else {
                        document.getElementById('Development').style.pointerEvents = 'none';
                        document.getElementById('Development').style.backgroundColor = 'black';
                        //document.getElementById('Development').style.Color = 'black';
                        $('#Development').css({ 'color': 'white' });
                    }

                    if (document.getElementById('STDropdown').value == "Approved") {
                        //document.getElementById('UT').style.pointerEvents = 'auto';
                        if (document.getElementById('FUTDropdown').value == "Approved") {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = 'darkgreen';
                            //document.getElementById('UT').style.Color = 'white';
                            $('#UT').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = '#2E4A62';
                            //document.getElementById('UT').style.Color = 'black';
                            $('#UT').css({ 'color': 'white' });
                        }

                    }
                    else {
                        document.getElementById('UT').style.pointerEvents = 'none';
                        document.getElementById('UT').style.backgroundColor = 'black';
                        //document.getElementById('UT').style.Color = 'black';
                        $('#UT').css({ 'color': 'white' });
                    }

                    if (document.getElementById('FUTDropdown').value == "Approved") {
                        // document.getElementById('FA').style.pointerEvents = 'auto';
                        if (document.getElementById('AppsApproverSign2').value != "") {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = 'darkgreen';
                            //document.getElementById('FA').style.Color = 'white';
                            $('#FA').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = '#2E4A62';
                            //document.getElementById('FA').style.Color = 'black';
                            $('#FA').css({ 'color': 'white' });
                        }
                    }
                    else {
                        document.getElementById('FA').style.pointerEvents = 'none';
                        document.getElementById('FA').style.backgroundColor = 'black';
                        //document.getElementById('FA').style.Color = 'black';
                        $('#FA').css({ 'color': 'white' });
                    }
                    document.getElementById('MainCtrls').style.pointerEvents = 'auto';
                    document.getElementById('LoggedIn').style.Color = 'white';
                    document.getElementById('LoggedIn').style.backgroundColor = 'transparent';
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
                    document.getElementById('LoggedIn').style.Color = 'white';
                    document.getElementById('LoggedIn').style.backgroundColor = 'transparent';
                    document.getElementById('ReleaseNameGroup').style.pointerEvents = 'none';
                    document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
                    // document.getElementById('OperationBtn').style.pointerEvents = 'none';
                }
                //}

                //else {
                //    document.getElementById('MainCtrls').style.pointerEvents = 'none';
                //    //alert('Please LogIn');
                //    document.getElementById('LoggedIn').value = "Please LogIn";
                //    document.getElementById('LoggedIn').style.Color = 'yellow';
                //    document.getElementById('LoggedIn').style.backgroundColor = 'red';
                //}

            };


            $scope.LoginFromModal = function () {
                var un = document.getElementById('userN').value;
                document.getElementById('LoggedIn').value = un;
                document.getElementById('uid').value = un;

                document.getElementById("myModal").style.display = "none";

                $scope.gridApi.grid.getColumn('AssignedTo').filters[0] = {
                    term: un
                };
                document.getElementById('userN').value = "";
                document.getElementById('pass').value = "";
                console.log(document.getElementById('LoggedIn').value);
                console.log(document.getElementById('uid').value);

            };

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

                $scope.ScrAdjust();

            };


            $scope.ScrAdjust = function () {
                $scope.randomSize('grid', 'fs');
                

                if ($(window).width() < 600) {
                    $('div#MainCtrls').width($(window).width());
                    $('div#sideGrid').width($(window).width());
                    $('div#tableDIV').width($(window).width());

                    
                }
                else if ($(window).width() < 1300) {
                    
                    $('div#MainCtrls').width($(window).width());
                    $('div#sideGrid').width($(window).width());
                    $('div#tableDIV').width($(window).width());
                    
                }
                else {
                    
                    $('div#MainCtrls').width($(window).width());
                    $('div#sideGrid').width($(window).width());
                    $('div#tableDIV').width($(window).width());
                    
                }
                
            };


            ////###################StageGating


            if (document.getElementById('LoggedIn').value !== "") {
                if (document.getElementById('LoggedIn').value !== "guest") {
                    if (document.getElementById('ReleaseName').value !== "") {
                        
                        if (document.getElementById('BApproverSign').value !== "") {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = 'darkgreen';
                            $('#BA').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = '#2E4A62';
                            $('#BA').css({ 'color': 'white' });
                        }

                    }
                    else {
                        document.getElementById('BA').style.pointerEvents = 'none';
                        document.getElementById('BA').style.backgroundColor = 'black';
                        $('#BA').css({ 'color': 'white' });
                    }

                    if (document.getElementById('FSDropdown').value === "Approved") {
                        if (document.getElementById('STDropdown').value === "Approved") {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = 'darkgreen';
                            $('#Development').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = '#2E4A62';
                            $('#Development').css({ 'color': 'white' });
                        }
                    }
                    else {
                        document.getElementById('Development').style.pointerEvents = 'none';
                        document.getElementById('Development').style.backgroundColor = 'black';
                        $('#Development').css({ 'color': 'white' });
                    }

                    if (document.getElementById('STDropdown').value === "Approved") {
                        if (document.getElementById('FUTDropdown').value === "Approved") {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = 'darkgreen';
                            $('#UT').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = '#2E4A62';
                            $('#UT').css({ 'color': 'white' });
                        }

                    }
                    else {
                        document.getElementById('UT').style.pointerEvents = 'none';
                        document.getElementById('UT').style.backgroundColor = 'black';
                        $('#UT').css({ 'color': 'white' });
                    }

                    if (document.getElementById('FUTDropdown').value === "Approved") {
                        if (document.getElementById('AppsApproverSign2').value !== "") {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = 'darkgreen';
                            //document.getElementById('FA').style.Color = 'white';
                            $('#FA').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = '#2E4A62';
                            //document.getElementById('FA').style.Color = 'black';
                            $('#FA').css({ 'color': 'white' });
                        }
                    }
                    else {
                        document.getElementById('FA').style.pointerEvents = 'none';
                        document.getElementById('FA').style.backgroundColor = 'black';
                        //document.getElementById('FA').style.Color = 'black';
                        $('#FA').css({ 'color': 'white' });
                    }
                    document.getElementById('MainCtrls').style.pointerEvents = 'auto';
                    document.getElementById('LoggedIn').style.Color = 'white';
                    document.getElementById('LoggedIn').style.backgroundColor = 'transparent';
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
                    document.getElementById('LoggedIn').style.Color = 'white';
                    document.getElementById('LoggedIn').style.backgroundColor = 'transparent';
                    document.getElementById('ReleaseNameGroup').style.pointerEvents = 'none';
                    document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
                    
                }
            }

            else {
                document.getElementById('MainCtrls').style.pointerEvents = 'none';
                //alert('Please LogIn');
                document.getElementById('LoggedIn').value = "Please LogIn";
                document.getElementById('LoggedIn').style.Color = 'yellow';
                document.getElementById('LoggedIn').style.backgroundColor = 'red';
            }


            $scope.StageGating();

            ////##################End StageGating

        };



        $scope.loadGrid();
       $scope.StageGating();






        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {  //rowchecked 
                    console.log('push');
                    if (document.getElementById('ckLock').checked === false) {
                        $scope.openModal('ReleaseDetail');
                        document.getElementById('ReleaseName').value = row.entity.ReleaseName;
                        document.getElementById('ProjectNameRelease').value = row.entity.ProjectName;
                        document.getElementById('Status').value = row.entity.Status;
                        document.getElementById('StatusDropdown').value = row.entity.Status;
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
                        //document.getElementById('checkbox').value = row.entity.checkbox;
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
                        document.getElementById('Comment').innerHTML = row.entity.Comment;
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
                        document.getElementById('AssignedTo').value = row.entity.AssignedTo;
                        document.getElementById('ProjectIDRelease').value = row.entity.ProjectID;

                        $scope.StageGating();
                        //$scope.openDIVMOD('tableDIV');
                        
                    }


                    

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
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1);

                    }

            });




           

            $scope.deleteChangeMgmt = function () {
                //	if (document.getElementById('LoggedIn').value == "hasanif" || document.getElementById('LoggedIn').value == "haywood") {
                ChangeMgmtService.deleteChangeMgmt(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.Undo();
                    $scope.loadGrid();
                    $scope.openDIVMOD('sideGrid');
                });
                console.log('Release Deleted');
                console.log(objarray);
                //	}
                //else {
                //		alert('Not Authorized to Delete');
                //	}
            }


            $scope.Undo = function () {

                document.getElementById('ReleaseName').value = '';
                document.getElementById('Status').value = '';
                document.getElementById('StatusDropdown').value = '';
                document.getElementById('ProjectNameRelease').value = '';
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
                document.getElementById('Comment').innerHTML = '';
                document.getElementById('Base64Output1').value = '';
                document.getElementById('photo-id1').src = '';
                document.getElementById('photo-upload').src = '';
                document.getElementById('imgElem1').src = '';
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
                document.getElementById('AssignedTo').value = '';
                $scope.restore('1');
                $scope.StageGating();

            };

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
            $scope.addChangeMgmt = function () {
                if (document.getElementById('ProjectNameRelease').value !== "") {
                    var ReleaseNameValue = document.getElementById('ReleaseName').value + '|'
                    var FSValue = document.getElementById('FS').value;
                    var BusinessLeadValue = document.getElementById('BusinessLead').value;
                    var BLSignValue = document.getElementById('BLSign').value;
                    var BusinessApproverValue = document.getElementById('BusinessApprover').value;
                    var BApproverSignValue = document.getElementById('BApproverSign').value;
                    var DEVandTSValue = document.getElementById('DEVandTS').value;
                    var DeveloperValue = document.getElementById('Developer').value;
                    var DEVSignValue = document.getElementById('DEVSign').value;
                    var STValue = document.getElementById('ST').value;
                    var TechLeadValue = document.getElementById('TechLead').value;
                    var TLSignValue = document.getElementById('TLSign').value;
                    var AppsApproverValue = document.getElementById('AppsApprover').value;
                    var AppsApproverSignValue = document.getElementById('AppsApproverSign').value;
                    var FUTValue = document.getElementById('FUT').value;
                    var BLSign2Value = document.getElementById('BLSign2').value;
                    var DEVSign2Value = document.getElementById('DEVSign2').value;
                    var TLSign2Value = document.getElementById('TLSign2').value;
                    var AppsApproverSign2Value = document.getElementById('AppsApproverSign2').value;
                    var PackageLocationValue = document.getElementById('PackageLocation').value;
                    var ScreenShotLocationValue = document.getElementById('ScreenShotLocation').value;
                    var LockedDateTimeValue = document.getElementById('LockedDateTime').value;
                    var StatusValue = document.getElementById('Status').value;
                    var DescriptionValue = document.getElementById('Description').value;
                    var TestCycleValue = document.getElementById('TestCycle').value;
                    var EnteredByValue = document.getElementById('LoggedIn').value;
                    var FSLocationValue = document.getElementById('FSLocation').value;
                    //var InsertDateTimeValue = document.getElementById('InsertDateTime').value
                    //var UpdateDateTimeValue = document.getElementById('UpdateDateTime').value
                    var CommentValue = document.getElementById('Comment').innerHTML + '<img src=' + document.getElementById('Base64Output1').value;
                    var row_idValue = document.getElementById('row_id').value;
                    var TrainerNameValue = document.getElementById('TrainerName').value;
                    var PlantContactValue = document.getElementById('PlantContact').value;
                    var TechSpecLocationValue = document.getElementById('TechSpecLocation').value;
                    var TestScriptLocationValue = document.getElementById('TestScriptLocation').value;
                    var PRODDeployDateValue = document.getElementById('PRODDeployDate').value;
                    var ControlsAnalystValue = document.getElementById('ControlsAnalyst').value;
                    var DeployStatusValue = document.getElementById('DeployStatus').value;
                    var DeployPlantsValue = document.getElementById('DeployPlants').value;
                    var UpdatesValue = document.getElementById('Updates').value;
                    var AssignedToValue = document.getElementById('AssignedTo').value;
                    var ProjectIDReleaseValue = document.getElementById('ProjectIDRelease').value;

                    //console.log('New Issue Added');
                    ChangeMgmtService.addChange(ReleaseNameValue, FSValue, BusinessLeadValue, BLSignValue, BusinessApproverValue, BApproverSignValue, DEVandTSValue, DeveloperValue, DEVSignValue, STValue, TechLeadValue, TLSignValue, AppsApproverValue, AppsApproverSignValue, FUTValue, BLSign2Value, DEVSign2Value, TLSign2Value, AppsApproverSign2Value, PackageLocationValue, ScreenShotLocationValue, LockedDateTimeValue, StatusValue, DescriptionValue, TestCycleValue, EnteredByValue, FSLocationValue, CommentValue, row_idValue, TrainerNameValue, PlantContactValue, TechSpecLocationValue, TestScriptLocationValue, PRODDeployDateValue, ControlsAnalystValue, DeployStatusValue, DeployPlantsValue, UpdatesValue, AssignedToValue, ProjectIDReleaseValue).success(function (data) {


                        // $scope.gridApi.core.refresh();
                        $scope.loadGrid();

                    });

                    //$scope.openDIVMOD('sideGrid');
                    $scope.cancelModal('ReleaseDetail');

                } else {
                    $scope.openModal('mysidenavRightPrjNameRequiredPopup');
                }
            };

            $scope.downloadCSV = function () {
                ChangeMgmtService(function (response) {
                    //ChangeMgmtService.readAll2().then(function (response) {
                    var data = $scope.gridOptions.data;
                    var items1 = $scope.gridOptions.totalItems;
                    $scope.gridOptions.data = response.data;
                    $scope.pagination.totalItems = response.totalRows;
                    $scope.gridApi.exporter.csvExport('all', 'all');
                });
            };

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            };

            $scope.cancelModal = function (nav) {
                document.getElementById(nav).style.display = "none";
                
            };

            $scope.openModal = function (nav) {
                document.getElementById(nav).style.display = 'block';
            };
           






        };


        $scope.defaultGridReleases = function () {
            $scope.clearFilters();
            var job = document.getElementById('labelRelease').value;
            $scope.gridApi.grid.getColumn('ReleaseName').filters[0] = {
                term: job
            };

            document.getElementById('labelRelease').value = "";
        };


        $scope.function_projectname = function (url) {
            //var name = 'rowid';
            ////function function_two(name, url) {
            //if (!url) url = window.location.href;
            //name = name.replace(/[\[\]]/g, "\\$&");
            //var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            //    results = regex.exec(url);
            //if (!results) return null;
            //if (!results[2]) return '';
            //var rid = decodeURIComponent(results[2].replace(/\+/g, " "))
            //$scope.title = uid;
            ////alert(uid)
            //document.getElementById('LoggedIn').value = rid;
            ////var job = document.getElementById('ProjectName').value;
            //console.log(rid + '=rid');

            //document.getElementById('row_id').value = rid;


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

            document.getElementById('ProjectNameC').value = pid;



        };
        $scope.function_projectname();

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


        $scope.function_rowid = function (url) {
            //var name = 'rowid';
            ////function function_two(name, url) {
            //if (!url) url = window.location.href;
            //name = name.replace(/[\[\]]/g, "\\$&");
            //var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            //    results = regex.exec(url);
            //if (!results) return null;
            //if (!results[2]) return '';
            //var rid = decodeURIComponent(results[2].replace(/\+/g, " "))
            //$scope.title = uid;
            ////alert(uid)
            //document.getElementById('LoggedIn').value = rid;
            ////var job = document.getElementById('ProjectName').value;
            //console.log(rid + '=rid');

            //document.getElementById('row_id').value = rid;


            var Pname = 'id';
            //function function_two(name, url) {
            if (!url) url = window.location.href;
            Pname = Pname.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + Pname + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            var pid = decodeURIComponent(results[2].replace(/\+/g, " "));
            // $scope.title = puid;
            //alert(uid)
            // document.getElementById('LoggedIn').value = rid;
            //var job = document.getElementById('ProjectName').value;
            console.log(pid + '=pid');

            document.getElementById('row_idD').value = pid;



        };
        $scope.function_rowid();


        //$scope.skillsFunc();


        $scope.wasClicked = function () {
            console.log('I was clicked!');
        };



        $scope.toLower = function (nav) {
            document.getElementById(nav).value=document.getElementById(nav).value.toLowerCase();

        };








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

        }

        //alert($scope.getSecondPart("sometext $#$: 20202")); 



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








                }


            }




        }

        $scope.populateImg = function (mydiv, Base64Output, photoid, str) {
            document.getElementById(mydiv).innerHTML = str.split('<img src=')[0];
            document.getElementById(Base64Output).value = str.split('<img src=')[1];
            var ImageBox = document.getElementById(Base64Output).value;
            $(photoid).attr("src", ImageBox);

        }
        $scope.popSummary = function () {
            document.getElementById('mysidenavRightProd').style.width = '0';
        }


        $scope.maximize = function (nav) {
            // document.getElementById('TBHolder').style.display = "none";
            document.getElementById('1').style.display = "none";
            document.getElementById('2').style.display = "none";
            document.getElementById('3').style.display = "none";
            document.getElementById('BA').style.display = "none";
            document.getElementById('FA').style.display = "none";
            document.getElementById('UT').style.display = "none";
            document.getElementById('Development').style.display = "none";
            document.getElementById('ReleaseNameGroup').style.display = "none";
            document.getElementById(nav).style.display = "block";
            document.getElementById(nav).style.width = "100%";
            document.getElementById(nav).style.height = "625px";
            document.getElementById('Comment').style.width = "90%";
            document.getElementById('Comment').style.height = "80%";
            //}
            //nav++;
        }

        $scope.restore = function (nav) {

            // document.getElementById('TBHolder').style.display = "block";
            document.getElementById('1').style.display = "block";
            document.getElementById('2').style.display = "block";
            document.getElementById('3').style.display = "block";
            document.getElementById('BA').style.display = "block";
            document.getElementById('FA').style.display = "block";
            document.getElementById('UT').style.display = "block";
            document.getElementById('Development').style.display = "block";
            document.getElementById('ReleaseNameGroup').style.display = "block";
            document.getElementById(nav).style.width = "100%";
            document.getElementById(nav).style.height = "8.5%";

        }




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
        });



        $scope.ESignBL = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("PRODDeployDate").value !== "") {
                    console.log('Here1:' + document.getElementById("FSLocation").value);
                    if (document.getElementById("LoggedIn").value !== document.getElementById("BusinessLead").value) {
                        alert("Not Authorized!Period");
                        document.getElementById("BLSign").value = "";
                        $scope.ClearCHKBoxes();
                    }
                    else {
                        console.log('Here2:' + document.getElementById("FSLocation").value);
                        if (document.getElementById("FSLocation").value === '') {
                            alert("Functional Spec Location is needed!");


                        }
                        else {
                            //alert('Here3:' + document.getElementById("FSLocation").value);
                            document.getElementById("BLSign").value = document.getElementById("LoggedIn").value + " " + Date();
                            $('#Updates').val('\n' + new Date().toUTCString() + '-BA Stage>>Approved by Business Lead : ' + $('#BLSign').val() + $('#Updates').val());

                        }
                    }
                    $scope.ClearCHKBoxes();

                }
                else {
                alert("COMMITTED DATE Required!");
                    $scope.ClearCHKBoxes();
                    $timeout(function () {
                        document.getElementById('PRODDeployDate').style.backgroundColor='red';
                    }, 500);
                    }
            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }



        };



        $scope.ESignBA = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("BusinessApprover").value) {
                    alert("Not Authorized!");
                    document.getElementById("BApproverSign").value = "";
                    $scope.ClearCHKBoxes();
                }
                else {
                    
                    document.getElementById("BApproverSign").value = document.getElementById("LoggedIn").value + " " + Date();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-BA Stage>> Approved by Business Approver : ' + $('#BApproverSign').val() + $('#Updates').val());
                    document.getElementById("FSDropdown").value = "Approved";
                    document.getElementById("FS").value = "Approved";
                    //$scope.SetScreen();
                    
                }
                $scope.ClearCHKBoxes();

            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            //this.innerHTML = "LogOut";

        };
        $scope.ESignDV = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("Developer").value) {
                    alert("Not Authorized!");
                    document.getElementById("DEVSign").value = "";
                    $scope.ClearCHKBoxes();
                }
                else {
                    if (document.getElementById("TechSpecLocation").value !== "") {
                        document.getElementById("DEVSign").value = document.getElementById("LoggedIn").value + " " + Date();
                        $('#Updates').val('\n' + new Date().toUTCString() + '-Dev Stage>>Approved by Developer: ' + $('#DEVSign').val() + $('#Updates').val());
                        //document.getElementById("FSDropdown").value = "1";
                        //document.getElementById("FS").value = "1";
                    }
                    else {
                        alert('Tech Spec location needed!');
                    }
                }
                $scope.ClearCHKBoxes();
            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }



        };
        $scope.ESignTL = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("TechLead").value) {
                    alert("Not Authorized!");
                    document.getElementById("TLSign").value = "";
                    $scope.ClearCHKBoxes();
                }
                else {
                    if (document.getElementById("Developer").value !== "") {
                        document.getElementById("TLSign").value = document.getElementById("LoggedIn").value + " " + Date();
                        $('#Updates').val('\n' + new Date().toUTCString() + '-Dev Stage>>Approved by TechLead: ' + $('#TLSign').val() + $('#Updates').val());
                    }
                    else {
                        alert('Developer Sign Off Required');
                    }

                }
                $scope.ClearCHKBoxes();
            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            //this.innerHTML = "LogOut";

        };
        $scope.ESignAA = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("AppsApprover").value) {
                    alert("Not Authorized!");
                    document.getElementById("AppsApproverSign").value = "";
                    $scope.ClearCHKBoxes();
                   // $scope.SetScreen();
                }
                else {
                    document.getElementById("AppsApproverSign").value = document.getElementById("LoggedIn").value + " " + Date();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-Dev Stage>> Approved by AppsApprover: ' + $('#AppsApproverSign').val() + $('#Updates').val());
                    document.getElementById("STDropdown").value = "Approved";
                    document.getElementById("ST").value = "Approved";
                }
                $scope.ClearCHKBoxes();
                //$scope.SetScreen();
            }
            else {
                alert(" Log In required. Please Log In!")
                $scope.ClearCHKBoxes();
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            //this.innerHTML = "LogOut";

        };

        $scope.ESignBL2 = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("BusinessLead").value || document.getElementById("DEVSign2").value === "" || document.getElementById("TLSign2").value === "") {
                    alert("Not Authorized! OR Developer's and TechLead's signatures are Required!");
                    document.getElementById("BLSign2").value = "";
                    $scope.ClearCHKBoxes();
                }

                else {
                    document.getElementById("BLSign2").value = document.getElementById("LoggedIn").value + " " + Date();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by Business Lead: ' + $('#BLSign2').val() + $('#Updates').val());
                    document.getElementById("FUTDropdown").value = "Approved";
                    document.getElementById("FUT").value = "Approved";
                    $scope.ClearCHKBoxes();
                   // $scope.SetScreen();
                }
                document.getElementById("ckBL").checked = false;
                document.getElementById("ckBA").checked = false;


            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            //this.innerHTML = "LogOut";

        };

        $scope.ESignDV2 = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("Developer").value || document.getElementById("TestScriptLocation").value === "") {
                    alert("Not Authorized! OR TestScript is Required!");
                    document.getElementById("DEVSign2").value = "";
                    $scope.ClearCHKBoxes();
                }
                else {
                    document.getElementById("DEVSign2").value = document.getElementById("LoggedIn").value + " " + Date();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by Developer: ' + $('#DEVSign2').val() + $('#Updates').val());

                }
                $scope.ClearCHKBoxes();
            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            //this.innerHTML = "LogOut";

        };

        $scope.ESignTL2 = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("TechLead").value || document.getElementById("DEVSign2").value === "") {
                    alert("Not Authorized! OR Developer's Signature is Required!");
                    document.getElementById("TLSign2").value = "";
                    $scope.ClearCHKBoxes();
                }
                else {
                    document.getElementById("TLSign2").value = document.getElementById("LoggedIn").value + " " + Date();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by TechLead: ' + $('#TLSign2').val() + $('#Updates').val());
                    //document.getElementById("FSDropdown").value = "1";
                    //document.getElementById("FS").value = "1";
                }
                $scope.ClearCHKBoxes();
            }
            else {
                alert(" Log In required. Please Log In!");

            }
        };
        $scope.ESignAA2 = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                if (document.getElementById("LoggedIn").value !== document.getElementById("AppsApprover").value) {
                    alert("Not Authorized!");
                    document.getElementById("AppsApproverSign2").value = "";
                    $scope.ClearCHKBoxes();

                }
                else {
                    document.getElementById("AppsApproverSign2").value = document.getElementById("LoggedIn").value + " " + Date();
                    $('#Updates').val('\n' + new Date().toUTCString() + '-FUT Stage>> Approved by AppsApprover. Ready for roll out: ' + $('#AppsApproverSign2').val() + $('#Updates').val());
                    document.getElementById("StatusDropdown").value = "ApprovedForRollout";
                    document.getElementById("Status").value = "ApprovedForRollout";
                    var date = new Date(Date());
                    alert('You are approving the Development Completion at ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
                    document.getElementById("LockedDateTime").value = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                   // $scope.SetScreen();
                }
                $scope.ClearCHKBoxes();
                //$scope.SetScreen();
            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            //this.innerHTML = "LogOut";

        };

        $scope.ESignDEPLOYComplete = function () {
            if (document.getElementById("LoggedIn").value !== "") {
                //if (document.getElementById("LoggedIn").value != document.getElementById("AppsApprover").value) {
                //    alert("Not Authorized!")
                //    document.getElementById("ControlsAnalyst").value = ""
                //    $scope.ClearCHKBoxes();

                //}
                //else {
                document.getElementById("ControlsAnalyst").value = document.getElementById("ControlsAnalystRep").value + " " + Date();
                document.getElementById("DeployStatusDropdown").value = "Complete";
                document.getElementById("DeployStatus").value = "Complete";
                var date = new Date(Date());
                alert('You are approving the Production Deployment Completion at ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
              //  $scope.SetScreen();
                //}
                $scope.ClearCHKBoxes();
             //   $scope.SetScreen();
            }
            else {
                alert(" Log In required. Please Log In!");
                $scope.ClearCHKBoxes();
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            //this.innerHTML = "LogOut";

        };


        $scope.ClearCHKBoxes = function () {
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
        };


        $scope.SetScreen = function () {

            if (document.getElementById('LoggedIn').value !== "") {
                if (document.getElementById('LoggedIn').value !== "guest") {
                    if (document.getElementById('ReleaseName').value != "") {
                        //document.getElementById('BA').style.pointerEvents = 'auto';
                        if (document.getElementById('BApproverSign').value != "") {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = 'darkgreen';
                            //document.getElementById('BA').style.Color = 'white';
                            $('#BA').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('BA').style.pointerEvents = 'auto';
                            document.getElementById('BA').style.backgroundColor = '#2E4A62';
                            //document.getElementById('BA').style.Color = 'black';
                            $('#BA').css({ 'color': 'white' });
                        }

                    }
                    else {
                        document.getElementById('BA').style.pointerEvents = 'none';
                        document.getElementById('BA').style.backgroundColor = 'black';
                        //document.getElementById('BA').style.Color = 'black';
                        $('#BA').css({ 'color': 'white' });
                    }

                    if (document.getElementById('FSDropdown').value == "Approved") {
                        // document.getElementById('Development').style.pointerEvents = 'auto';
                        if (document.getElementById('STDropdown').value == "Approved") {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = 'darkgreen';
                            // document.getElementById('Development').style.Color = 'white';
                            $('#Development').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('Development').style.pointerEvents = 'auto';
                            document.getElementById('Development').style.backgroundColor = '#2E4A62';
                            //document.getElementById('Development').style.Color = 'black';
                            $('#Development').css({ 'color': 'white' });
                        }
                    }
                    else {
                        document.getElementById('Development').style.pointerEvents = 'none';
                        document.getElementById('Development').style.backgroundColor = 'black';
                        //document.getElementById('Development').style.Color = 'black';
                        $('#Development').css({ 'color': 'white' });
                    }

                    if (document.getElementById('STDropdown').value == "Approved") {
                        //document.getElementById('UT').style.pointerEvents = 'auto';
                        if (document.getElementById('FUTDropdown').value == "Approved") {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = 'darkgreen';
                            //document.getElementById('UT').style.Color = 'white';
                            $('#UT').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('UT').style.pointerEvents = 'auto';
                            document.getElementById('UT').style.backgroundColor = '#2E4A62';
                            //document.getElementById('UT').style.Color = 'black';
                            $('#UT').css({ 'color': 'white' });
                        }

                    }
                    else {
                        document.getElementById('UT').style.pointerEvents = 'none';
                        document.getElementById('UT').style.backgroundColor = 'black';
                        //document.getElementById('UT').style.Color = 'black';
                        $('#UT').css({ 'color': 'white' });
                    }

                    if (document.getElementById('FUTDropdown').value == "Approved") {
                        // document.getElementById('FA').style.pointerEvents = 'auto';
                        if (document.getElementById('AppsApproverSign2').value != "") {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = 'darkgreen';
                            //document.getElementById('FA').style.Color = 'white';
                            $('#FA').css({ 'color': 'white' });
                        }
                        else {
                            document.getElementById('FA').style.pointerEvents = 'auto';
                            document.getElementById('FA').style.backgroundColor = '#2E4A62';
                            //document.getElementById('FA').style.Color = 'black';
                            $('#FA').css({ 'color': 'white' });
                        }
                    }
                    else {
                        document.getElementById('FA').style.pointerEvents = 'none';
                        document.getElementById('FA').style.backgroundColor = 'black';
                        //document.getElementById('FA').style.Color = 'black';
                        $('#FA').css({ 'color': 'white' });
                    }
                    document.getElementById('MainCtrls').style.pointerEvents = 'auto';
                    document.getElementById('LoggedIn').style.Color = 'white';
                    document.getElementById('LoggedIn').style.backgroundColor = 'transparent';
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
                    document.getElementById('LoggedIn').style.Color = 'white';
                    document.getElementById('LoggedIn').style.backgroundColor = 'transparent';
                    document.getElementById('ReleaseNameGroup').style.pointerEvents = 'none';
                    document.getElementById('additionalSpecBtn').style.pointerEvents = 'auto';
                    // document.getElementById('OperationBtn').style.pointerEvents = 'none';
                }
            }

            else {
                document.getElementById('MainCtrls').style.pointerEvents = 'none';
                //alert('Please LogIn');
                document.getElementById('LoggedIn').value = "Please LogIn";
                document.getElementById('LoggedIn').style.Color = 'yellow';
                document.getElementById('LoggedIn').style.backgroundColor = 'red';
            }
        };

        $scope.openDIVMOD = function (nav) {
            document.getElementById('sideGrid').style.width = '0';
            document.getElementById('tableDIV').style.width = '0';

            document.getElementById(nav).style.width = '100%';

            

            

            


            

        };


        $scope.showComments = function () {
            //$scope.columnDefs[12].visible = true;

            //  this.columns.push({ field: 'Comment', enableSorting: false });
            if (document.getElementById('checkComment').checked === true) {
                $scope.gridOptions.columnDefs[4].visible = true;
                $scope.gridOptions.columnDefs[5].visible = true;
                $scope.gridOptions.columnDefs[6].visible = true;
                $scope.gridOptions.columnDefs[7].visible = true;
                $scope.gridOptions.columnDefs[8].visible = true;
                $scope.gridOptions.columnDefs[9].visible = true;
                $scope.gridOptions.columnDefs[10].visible = true;
                $scope.gridOptions.columnDefs[11].visible = true;
                $scope.gridOptions.columnDefs[12].visible = true;
                $scope.gridOptions.columnDefs[13].visible = true;
                $scope.gridOptions.columnDefs[14].visible = true;
                $scope.gridOptions.columnDefs[15].visible = true;
                $scope.gridOptions.columnDefs[16].visible = true;
                $scope.gridOptions.columnDefs[17].visible = true;
                $scope.gridOptions.columnDefs[18].visible = true;
                $scope.gridOptions.columnDefs[19].visible = true;
                $scope.gridOptions.columnDefs[20].visible = true;
                $scope.gridOptions.columnDefs[21].visible = true;
                $scope.gridOptions.columnDefs[22].visible = true;
                $scope.gridOptions.columnDefs[23].visible = true;
                $scope.gridOptions.columnDefs[24].visible = true;
                $scope.gridOptions.columnDefs[25].visible = true;
                $scope.gridOptions.columnDefs[26].visible = true;
                $scope.gridOptions.columnDefs[27].visible = true;
               // $scope.gridOptions.columnDefs[28].visible = true;
                $scope.gridOptions.columnDefs[29].visible = true;
                $scope.gridOptions.columnDefs[30].visible = true;
                $scope.gridOptions.columnDefs[31].visible = true;
                $scope.gridOptions.columnDefs[32].visible = true;

            }
            else {
                $scope.gridOptions.columnDefs[4].visible = false;
                $scope.gridOptions.columnDefs[5].visible = false;
                $scope.gridOptions.columnDefs[6].visible = false;
                $scope.gridOptions.columnDefs[7].visible = false;
                $scope.gridOptions.columnDefs[8].visible = false;
                $scope.gridOptions.columnDefs[9].visible = false;
                $scope.gridOptions.columnDefs[10].visible = false;
                $scope.gridOptions.columnDefs[11].visible = false;
                $scope.gridOptions.columnDefs[12].visible = false;
                $scope.gridOptions.columnDefs[13].visible = false;
                $scope.gridOptions.columnDefs[14].visible = false;
                $scope.gridOptions.columnDefs[15].visible = false;
                $scope.gridOptions.columnDefs[16].visible = false;
                $scope.gridOptions.columnDefs[17].visible = false;
                $scope.gridOptions.columnDefs[18].visible = false;
                $scope.gridOptions.columnDefs[19].visible = false;
                $scope.gridOptions.columnDefs[20].visible = false;
                $scope.gridOptions.columnDefs[21].visible = false;
                $scope.gridOptions.columnDefs[22].visible = false;
                $scope.gridOptions.columnDefs[23].visible = false;
                $scope.gridOptions.columnDefs[24].visible = false;
                $scope.gridOptions.columnDefs[25].visible = false;
                $scope.gridOptions.columnDefs[26].visible = false;
                $scope.gridOptions.columnDefs[27].visible = false;
                //$scope.gridOptions.columnDefs[28].visible = false;
                $scope.gridOptions.columnDefs[29].visible = false;
                $scope.gridOptions.columnDefs[30].visible = false;
                $scope.gridOptions.columnDefs[31].visible = false;
                $scope.gridOptions.columnDefs[32].visible = false;

            }

            //$scope.gridApi.grid.refresh();
        };


        $scope.refreshPostChange = function () {
            var btnName;
            btnName = '#' + 'refr';


            //console.log(btnName);

            $timeout(function () {
                $(btnName).trigger('click');

            }, 0);
        };

//############################################ PROJECT POPUP SCREEN ####################################################################//


        $scope.gridOptionsAllProjectsONLY = {
            showGridFooter: false,
            showColumnFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 50,
            rowHeight: 50,
            enableCellEdit: false,
            //onRegisterApi: registerGridApi,
            enableFiltering: true,
            enableHorizontalScrollbar: 1,
            enableVerticalScrollbar: 1,
            enableColumnResize: true,
            enableColumnReordering: true,

            rowTemplate: '<div ng-dblclick="grid.appScope.rowDblClick(row)" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid" ui-grid-one-bind-id-grid="rowRenderIndex + \'-\' + col.uid + \'-cell\'" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" role="{{col.isRowHeader ? \'rowheader\' : \'gridcell\'}}" ui-grid-cell></div>',
            columnDefs: [
                {
                    field: 'ProjectName', displayName: 'PROJECT', grouping: {
                        groupPriority: 0
                    }
                    , width: '100%', cellTemplate: '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP" style="background-color:#fff;color:black;font-size:8px;font-family:sans-serif" ><button ng-click="grid.appScope.openModalGridReleases($event,COL_FIELD)"  class="btnGrid"  >{{COL_FIELD CUSTOM_FILTERS}}</button></div>'
                },
                {
                    field: 'row_id', displayName: 'rowid', width: '100%', cellTemplate: '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP" style="background-color:#fff;color:black;font-size:8px;font-family:sans-serif" ><button ng-click="grid.appScope.openModalGridReleases($event,COL_FIELD)"  class="btnGrid"  >{{COL_FIELD CUSTOM_FILTERS}}</button></div>'
                }

            ]
        };

        $scope.loadGridProjectONLY = function () {
            $scope.loading = true;
            var handle = 'projects';
            var sql = 'none';
            //console.log(options);
            ProjectService.get(handle, sql).success(function (data) {
                if (data === null || data.MessageList === null || data.MessageList.length === 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsAllProjectsONLY.paginationPageSizes.push(
                        data.MessageList.length
                    );
                    var MessageList = data.MessageList;
                    $scope.gridOptionsAllProjectsONLY.data = MessageList;
                    $scope.error = false;
                }
            }).finally(function () { $scope.loading = false; });

        };



        $scope.refreshGridProjectONLY = function () {
            console.log('refresh grid');

            //$scope.loadGrid(); /* Reload the entire Grid  on click of refresh button*/
            $scope.loading = true;

            $scope.gridOptionsAllProjectsONLY.data = [];

            $timeout(function () {
                $scope.loadGridProjectONLY();
            }, 1000);
        };

        $scope.GridfromButtonProjectONLY = function () {

            $scope.refreshGridProjectONLY();
            $scope.openModal('mysidenavRightAllProjectsONLY');
        };


        $scope.gridOptionsAllProjectsONLY.onRegisterApi = function (gridApiAllProjectsONLY) {
            $scope.gridApiAllProjectsONLY = gridApiAllProjectsONLY;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApiAllProjectsONLY.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApiAllProjectsONLY.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {
                    console.log('push');
                    document.getElementById('ProjectNameRelease').value = row.entity.ProjectName;
                    document.getElementById('ProjectIDRelease').value = row.entity.row_id;
                    $scope.cancelModal('mysidenavRightAllProjectsONLY');
                    if (objarray.indexOf(row.entity.ObjectId) === -1) {
                        objarray.push(row.entity.ObjectId);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.ObjectId) !== -1) {
                        console.log("pop");
                        objarray.splice(objarray.indexOf(row.entity.ObjectId), 1);
                    }

            });

        };


//############################################ PROJECT POPUP SCREEN ####################################################################//
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

//setInterval(function () { ObserveInputValue($('#FSLocation').val()); }, 100);


////##########################  Window Resize
//var setDivsState = function () {
//    if ($(window).width() < 600) {
//        //$(function () {
//        //document.getElementById('sideGrid').style.width = '15%';
//        $('div#MainCtrls').width('100%');
//        $('div#sideGrid').width('15%');
//        $('div#tableDIV').width('85%');

//        //document.getElementById('tableDIV').style.width = '85%';
//        //});
//        //container is expanded on large screen resize or load
//    }
//    else if ($(window).width() < 1300) {
//        //$(function () {
//        $('div#MainCtrls').width('100%');
//        $('div#sideGrid').width('20%');
//        $('div#tableDIV').width('80%');
//        //});
//        //container is expanded on large screen resize or load
//    }
//    else {
//        //$(function () {
//        $('div#MainCtrls').width('100%');
//        $('div#sideGrid').width('30%');
//        $('div#tableDIV').width('70%');
//        //});
//        //container is collapsed on load or screen resize
//    }
//};
//$(window).resize(setDivsState);
////########################## END Window Resize


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
//function ChooseBusinessLead(data) {

//    document.getElementById("BusinessLead").value = data.value;

//}
//function ChooseBusinessApprover(data) {

//    document.getElementById("BusinessApprover").value = data.value;

//}

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
    if (document.getElementById("Password").value !== "") {
        var toLower = document.getElementById("UserName").value.toLowerCase();
        document.getElementById("LoggedIn").value = toLower;
        document.getElementById("UserName").value = "";
        document.getElementById("Password").value = "";
       // SetScreen();
    }
    else {
        alert(" Password is required. Please Enter Password!");
    }

    //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
    //else
    this.innerHTML = "LogOut";

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



function SetScreen() {

    if (document.getElementById('uid').value != "") {
        if (document.getElementById('uid').value != "guest") {
            if (document.getElementById('ReleaseName').value != "") {
                //document.getElementById('BA').style.pointerEvents = 'auto';
                if (document.getElementById('BApproverSign').value != "") {
                    document.getElementById('BA').style.pointerEvents = 'auto';
                    document.getElementById('BA').style.backgroundColor = 'darkgreen';
                    //document.getElementById('BA').style.Color = 'white';
                    $('#BA').css({ 'color': 'white' });
                }
                else {
                    document.getElementById('BA').style.pointerEvents = 'auto';
                    document.getElementById('BA').style.backgroundColor = '#2E4A62';
                    //document.getElementById('BA').style.Color = 'black';
                    $('#BA').css({ 'color': 'white' });
                }

            }
            else {
                document.getElementById('BA').style.pointerEvents = 'none';
                document.getElementById('BA').style.backgroundColor = 'white';
                //document.getElementById('BA').style.Color = 'black';
                $('#BA').css({ 'color': 'black' });
            }

            if (document.getElementById('FSDropdown').value == "Approved") {
                // document.getElementById('Development').style.pointerEvents = 'auto';
                if (document.getElementById('STDropdown').value == "Approved") {
                    document.getElementById('Development').style.pointerEvents = 'auto';
                    document.getElementById('Development').style.backgroundColor = 'darkgreen';
                    // document.getElementById('Development').style.Color = 'white';
                    $('#Development').css({ 'color': 'white' });
                }
                else {
                    document.getElementById('Development').style.pointerEvents = 'auto';
                    document.getElementById('Development').style.backgroundColor = '#2E4A62';
                    //document.getElementById('Development').style.Color = 'black';
                    $('#Development').css({ 'color': 'white' });
                }
            }
            else {
                document.getElementById('Development').style.pointerEvents = 'none';
                document.getElementById('Development').style.backgroundColor = 'white';
                //document.getElementById('Development').style.Color = 'black';
                $('#Development').css({ 'color': 'white' });
            }

            if (document.getElementById('STDropdown').value == "Approved") {
                //document.getElementById('UT').style.pointerEvents = 'auto';
                if (document.getElementById('FUTDropdown').value == "Approved") {
                    document.getElementById('UT').style.pointerEvents = 'auto';
                    document.getElementById('UT').style.backgroundColor = 'darkgreen';
                    //document.getElementById('UT').style.Color = 'white';
                    $('#UT').css({ 'color': 'white' });
                }
                else {
                    document.getElementById('UT').style.pointerEvents = 'auto';
                    document.getElementById('UT').style.backgroundColor = '#2E4A62';
                    //document.getElementById('UT').style.Color = 'black';
                    $('#UT').css({ 'color': 'white' });
                }

            }
            else {
                document.getElementById('UT').style.pointerEvents = 'none';
                document.getElementById('UT').style.backgroundColor = 'white';
                //document.getElementById('UT').style.Color = 'black';
                $('#UT').css({ 'color': 'black' });
            }

            if (document.getElementById('FUTDropdown').value == "Approved") {
                // document.getElementById('FA').style.pointerEvents = 'auto';
                if (document.getElementById('AppsApproverSign2').value != "") {
                    document.getElementById('FA').style.pointerEvents = 'auto';
                    document.getElementById('FA').style.backgroundColor = 'darkgreen';
                    //document.getElementById('FA').style.Color = 'white';
                    $('#FA').css({ 'color': 'white' });
                }
                else {
                    document.getElementById('FA').style.pointerEvents = 'auto';
                    document.getElementById('FA').style.backgroundColor = '#2E4A62';
                    //document.getElementById('FA').style.Color = 'black';
                    $('#FA').css({ 'color': 'white' });
                }
            }
            else {
                document.getElementById('FA').style.pointerEvents = 'none';
                document.getElementById('FA').style.backgroundColor = 'white';
                //document.getElementById('FA').style.Color = 'black';
                $('#FA').css({ 'color': 'black' });
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
        document.getElementById('LoggedIn').value = "Please LogIn";
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
    else if (URLToGo.indexOf('http://') !== -1) {
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




//function AddFileUpload() {
//    console.log('Auto click');
//    $('#rowfilter').trigger('click');
//}

//$(document).ready(function () {
//    AddFileUpload();
//});







