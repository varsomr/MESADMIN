(function () {
    //*****************************add-on for Grid Dropdown trial - IH 6/20/2018
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
   .controller('DefectDashcontroller', controller)//.controller('StaticController', controllerstaticgrid);
   controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'DefectService'];

    app.config(function ($httpProvider) {

    });


    
    function controller($scope, $timeout, uiGridConstants, DefectService) {

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
            showGridFooter: false,
            //enableSelectionBatchEvent: true,
            paginationPageSizes: [20, 40, 75],
            paginationPageSize: 40,
            rowHeight: 53,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            enableCellEdit: false,
            onRegisterApi: registerGridApi,
            enableFiltering: true ,
            enableGridMenu: false,
            exporterMenuCsv: false,

            
            rowTemplate:
            '<div ng-class="{ \'grey\':gridTasks.appScope.rowFormatter( row ) }">' +
            '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            '</div>',
            columnDefs: [
                { field: 'DefectName', displayName: 'TaskName', enableCellEdit: false, width: '20%', cellTooltip: function (row) { return row.entity.DefectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'AssignedTo', displayName: 'Owner', width: '10%', enableCellEdit: false },
                { field: 'Status', displayName: 'ST', width: '10%', enableCellEdit: false },
                { field: 'ProjectName', width: '10%', enableCellEdit: false }
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
            
            console.log($scope.gridApi.gridTasks.columns);
            //document.getElementById('CompleteTask').value = $scope.gridApi.grid.options.totalItems;
            $scope.gridApi.gridTasks.columns[8].filter.term = $scope.term;
           
            
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
        };



        $scope.loadGrid();

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

            $scope.randomSize('gridTasks', 'qs');

        };



        //## END Grid Adjust####################//

        $scope.skillsFunc = function () {

            //$('#TaskDisplay').trigger('click');
            var job = document.getElementById('ProjectName').value;
            console.log(job);
            $scope.gridApi.grid.getColumn('ProjectName').filters[0] = {
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
               // console.log('row selected ' + row.entity.row_id);


                if (row.isSelected) {  //rowchecked 
                    ///---------  if(objarray) doesnt have row.entity.id
                    console.log('push');
                    $scope.openDIV('Defect');
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
                    document.getElementById('EstCompleteDateD').value = row.entity.EstCompleteDate;
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
                        document.getElementById('row_id').value = '';
                        document.getElementById('ProdArea').value = '';
                        document.getElementById('ProdAreaDropdown').value = '';
                        //if(oobjarray has this objectid)
                        objarray.splice(objarray.indexOf(row.entity.row_id), 1)
                    }

            });


            $scope.deleteDefect = function () {
                console.log('Issue Deleted');
                console.log(objarray);
                DefectService.deleteDefect(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                });
            }




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
                //var Proj = document.getElementById('ProjectName').value;
                $scope.skillsFunc();
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
                console.log('openDIV', nav);


                //document.getElementById('mysidenavRightDash').style.width = '0';
                ////document.getElementById('mySidenav').style.width = '0';
                ////document.getElementById('mysidenavRightTicket').style.width = '0';
                //document.getElementById(nav).style.width = '90.352%';

                window.open('#/Defect?uname=' + document.getElementById('LoggedIn').value + '&dom=DEN' + '&project=' + document.getElementById('ProjectName').value );
            }

            $scope.addMainProject = function () {
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
           // $scope.listArea();


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
                document.getElementById('EstCompleteDate').value = "";
                document.getElementById('row_id').value = "";
                document.getElementById('ProdArea').value = "";

            }
            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }






        }
    }

  


})();
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

