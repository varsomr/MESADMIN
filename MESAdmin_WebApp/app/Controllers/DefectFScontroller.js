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
                };
            };
        });



   angular.module('myApp')
   .controller('DefectFScontroller', controller)//.controller('StaticController', controllerstaticgrid);
   controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'DefectService'];

    app.config(function ($httpProvider) {

    });


    
    function controller($scope, $timeout, uiGridConstants, DefectService) {

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
            }]
        $scope.Status = [{ id: 1, value: '1-NOTStarted' }, { id: 2, value: '2-InProgress' }, { id: 3, value: '3-WaitingForBusiness' }, { id: 4, value: '4-Complete' }, { id: 5, value: '5-Cancelled' }, { id: 6, value: '6-OnHold' }, { id: 7, value: '7-UserError' }, { id: 8, value: '8-Other' } ];



        $scope.gridOptions = {
            showGridFooter: true,
            //enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 60],
            paginationPageSize: 40,
            rowHeight: 53,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            enableCellEdit: false,
            onRegisterApi: registerGridApi,
            enableFiltering: true,
            enableGridMenu: false,
            exporterMenuCsv: false,

            
            rowTemplate:
            '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',
            columnDefs: [
                { field: 'row_id', enableCellEdit: false, displayName: 'ID', type: 'number', cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', width: '7%' },
                { field: 'ProjectName', width: '20%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'DefectName', displayName: 'TaskName', enableCellEdit: false, width: '20%', cellTooltip: function (row) { return row.entity.DefectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'Type', width: '12%', enableCellEdit: false
                    
                },
               // { field: 'EnteredBy', width: '7%', enableCellEdit: false},
                {
                    field: 'AssignedTo', width: '10%', enableCellEdit: false
                    
                },
                
                {
                    field: 'Priority', width: '15%', enableCellEdit: false,
                
                },
                //{ field: 'ProdArea', width: '12%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ProdArea; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {
                    field: 'Status', width: '15%', enableCellEdit: false
                
                },
                //{ field: 'Description', width: '15%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Description; }, cellTemplate: '<div style="word-wrap:break-word;" class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'Comment', displayName: 'Comment', width: '7%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.Comment; }, cellTemplate: '<div  class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>', cellTemplate: xmlTemplate },
                //{ field: 'EstStartDate', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.EstStartDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'EstCompleteDate', width: '10%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.EstCompleteDate; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'TotalHoursSpentAPPS', displayName: 'AppsHoursSpent', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.TotalHoursSpentAPPS; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'TestCycle', displayName: 'TestCycle', enableCellEdit: false, width: '7%', cellTooltip: function (row) { return row.entity.TestCycle; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'TotalOpenTask', displayName: 'Total#OpenTask', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.TotalOpenTask; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                //{ field: 'TotalAssignedTasks', displayName: 'Assigned', enableCellEdit: false, width: '10%', cellTooltip: function (row) { return row.entity.TotalAssignedTasks; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            ],

        };
       
        $scope.getFooterValue = function () {
            console.log($scope.gridApi);
            alert($scope.gridApi.grid.options.totalItems);//.getAggregationValue());
            //alert($scope.gridApi.grid.columns[6].getAggregationValue());
           // alert($scope.gridApi.core.getVisibleRows().length);//.getAggregationValue());
            filterGender();
        }

        $scope.filterGender = function () {
            
            console.log($scope.gridApi.grid.columns);
            //document.getElementById('CompleteTask').value = $scope.gridApi.grid.options.totalItems;
            $scope.gridApi.grid.columns[8].filter.term = $scope.term;
           
            
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
                if (data == null || data.DefectList == null || data.DefectList.length == 0) {
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
            }).finally(function () { $scope.loading = false; })
            //   . error(function (data) {

            //});
        }



        $scope.loadGrid();

        $scope.FormatDT = function (date) {

            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');

        }

        $scope.skillsFunc = function () {

            //$('#TaskDisplay').trigger('click');
            var job = document.getElementById('row_idD').value;
            var jobP = document.getElementById('ProjectNameD').value;
            console.log(job + '=job');
            $scope.gridApi.grid.getColumn('row_id').filters[0] = {
                term: job
            };
            console.log(jobP + '=jobP');
            $scope.gridApi.grid.getColumn('ProjectName').filters[0] = {
                term: jobP
            };
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
                    document.getElementById('ProjectName').value = row.entity.ProjectName;
                    document.getElementById('DefectName').value = row.entity.DefectName;
                    document.getElementById('Priority').value = row.entity.Priority;
                    document.getElementById('PriorityDropdown').value = row.entity.Priority;
                    //document.getElementById('BusinessLeadDropdown').value = 'lesnerst'
                    document.getElementById('Status').value = row.entity.Status;
                    document.getElementById('StatusDropdown').value = row.entity.Status;
                    document.getElementById('Description').value = row.entity.Description;
                    document.getElementById('Type').value = row.entity.Type;
                    document.getElementById('TypeDropdown').value = row.entity.Type;
                    document.getElementById('TestCycle').value = row.entity.TestCycle;
                    document.getElementById('EnteredBy').value = row.entity.EnteredBy;
                    document.getElementById('EnteredByDropdown').value = row.entity.EnteredBy;
                    document.getElementById('AssignedTo').value = row.entity.AssignedTo;
                    document.getElementById('AssignedToDropdown').value = row.entity.AssignedTo;
                    document.getElementById('Comment').value = row.entity.Comment;
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
                    
                    var url; //You can get this url dynamically from an ajax request or from a form etc
                    var tot;
                    var tat;
                    var assign;
                    tot = row.entity.TotalOpenTask;
                    tat = row.entity.TotalAssignedTasks;
                    assign = row.entity.AssignedTo;

                    url = "app\\Views\\Chart.html?" + "Test1=" + tot + "&Test2=" + tat + "&assign=" + assign;
                    // To Do : A function to populate url with a valid url from any method you prefer.
                    console.log(url);
                    setURL(url)
                  
                    if (objarray.indexOf(row.entity.row_id) == -1) {
                        objarray.push(row.entity.row_id);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.row_id) != -1) {
                        console.log("pop");
                        document.getElementById('ProjectName').value = '';
                        document.getElementById('DefectName').value = '';
                        document.getElementById('Priority').value = '';
                        document.getElementById('PriorityDropdown').value = '';
                        //document.getElementById('BusinessLeadDropdown').value = 'lesnerst'
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
                        document.getElementById('Comment').value = '';
                        document.getElementById('TotalHoursSpentAPPS').value = '';
                        document.getElementById('EstStartDateD').value = '';
                        document.getElementById('EstCompleteDateD').value = '';
                        //document.getElementById('EstStartDate').value = '';
                        document.getElementById('EstStartDate').value = "";
                        document.getElementById('EstCompleteDate').value = "";
                        document.getElementById('row_id').value = '';
                        document.getElementById('ProdArea').value = '';
                        document.getElementById('ProdAreaDropdown').value = '';
                       
                        //if(oobjarray has this objectid)
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });

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


            $scope.deleteDefect = function () {
                console.log('Issue Deleted');
                console.log(objarray);
                DefectService.deleteDefect(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                });
            }

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
            $scope.addMainProject = function () {
                if (document.getElementById('EstStartDate').value == "" || document.getElementById('EstStartDate').value == "1900-01-01" || document.getElementById('EstCompleteDate'.value) == "" || document.getElementById('EstCompleteDate').value == "1900-01-01")
                    {
                    alert('Please enter Start and Complete date')
                }
                else
                {
                    var ProjectNameValue = document.getElementById('ProjectName').value
                    var DefectNameValue = document.getElementById('DefectName').value
                    var PriorityValue = document.getElementById('Priority').value
                    var StatusValue = document.getElementById('Status').value
                    var DescriptionValue = document.getElementById('Description').value
                    var TypeValue = document.getElementById('Type').value
                    var TestCycleValue = document.getElementById('TestCycle').value
                    var EnteredByValue = document.getElementById('EnteredBy').value
                    var AssignedToValue = document.getElementById('AssignedTo').value
                    var CommentValue = document.getElementById('Comment').value
                    var TotalHoursSpentAPPSValue = document.getElementById('TotalHoursSpentAPPS').value
                    var EstStartDateValue = document.getElementById('EstStartDate').value
                    var EstCompleteDateValue = document.getElementById('EstCompleteDate').value
                    var row_idValue = document.getElementById('row_id').value
                    var ProdAreaValue = document.getElementById('ProdArea').value

                    console.log('New Issue Added');
                    DefectService.addDefect(ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TypeValue, TestCycleValue, EnteredByValue, AssignedToValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue, ProdAreaValue).success(function (data) {

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
                        document.getElementById('Comment').value = "";
                        document.getElementById('TotalHoursSpentAPPS').value = "";
                        document.getElementById('EstStartDate').value = "";
                        document.getElementById('EstCompleteDate').value = "";
                        document.getElementById('row_id').value = "";
                        document.getElementById('ProdArea').value = "";
                        document.getElementById('ProdAreaDropdown').value = "";
                        //}
                        //else {
                        //       alert("You have seleted ChangeRequest. Change Request has been added and you will now be redirected to the Release Management page!");
                        //        window.location.href = "/#/ChangeMgmt";


                        //}
                    });
                }
            }

            $scope.AreaList = null;
            $scope.listArea = function () {

                var prjname = [];
                DefectService.listArea().success(function (data) {
                    //  console.log('Listed Ongoing Projects' + data.listProjectList[0]);

                    var prjlist = JSON.stringify(data);

                    var JSONObject = JSON.parse(prjlist);
                    //console.log(JSONObject["listProjectList"].length);
                    for (var i = 0; i < JSONObject["listArea"].length; i++) { //in JSONObject["listProjectList"][0]["ProjectName"]) {
                        prjname.push(JSONObject["listArea"][i]["AreaName"])
                        //console.log(prjname);
                    }
                    $scope.AreaList = prjname;
                    // console.log($scope.ProjectsList);
                    //$scope.loadGrid();
                });
            }
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
                document.getElementById('Comment').value = "";
                document.getElementById('TotalHoursSpentAPPS').value = "";
                document.getElementById('EstStartDate').value = "";
                document.getElementById('EstStartDateD').value = "";
                document.getElementById('EstCompleteDate').value = "";
                document.getElementById('EstCompleteDateD').value = "";
                document.getElementById('row_id').value = "";
                document.getElementById('ProdArea').value = "";

            }
            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }


            $scope.function_rowid = function (url) {
                //#####Retrieve rowid#####//      
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

                //document.getElementById('row_idD').value = rid;

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

            }
            $scope.function_rowid();




            //$scope.skillsFunc();


            $scope.wasClicked = function () {
                console.log('I was clicked!');
            }



        }
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

    document.getElementById("AssignedTo").value = data.value;

}
function ChooseEnteredBy(data) {

    document.getElementById("EnteredBy").value = data.value;

}
function ChooseArea(data) {
    var dataRec = data.value.replace(/string:/g, "")
    document.getElementById("ProdArea").value = dataRec;

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
    document.getElementById("Comment").value = "\n" + document.getElementById("Comment").value;
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

