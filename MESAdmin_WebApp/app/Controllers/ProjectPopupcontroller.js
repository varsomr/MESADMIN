(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('ProjectPopupcontroller', controller)//.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ProjectService','ChangeMgmtService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $timeout, uiGridConstants, ProjectService, ChangeMgmtService) {

        //var cellclassname = function (row, column, value, data) {
        //    var val = $('#grid').jqxGrid('getcellvalue', row, "ProjectStatus");
        //    //if (val == '4-Complete') {
        //        return "yellowCell";
        //    //}
        //}
        var myTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>{{ row.entity.row_id }}</a>";
        //var xmlTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.ObjectId}}' ng-click='grid.appScope.openModal($event, row)'>{{ row.entity.Body ='Edit XML MSG'}}</a>";
        var xmlTemplate = "<a target='__blank' href='#/XMLContent?ObjectID={{ row.entity.row_id}}' ng-click='grid.appScope.openModal($event, row)'>Review and Edit</a>";
        
        var myData = [
            {
                Status: "Complete"
            }, {
                Status: "Complete"
            }]
        $scope.ProjectStatus = [{ id: 1, value: '1-NOTStarted' }, { id: 2, value: '2-InProgress' }, { id: 3, value: '3-WaitingForBusiness' }, { id: 4, value: '4-Complete' }, { id: 5, value: '5-Cancelled' }, { id: 6, value: '6-OnHold' }, { id: 7, value: '7-UserError' }, { id: 8, value: '8-Other' }];



        //########################START GRID 1 FUNCTIONALITIES#######################////////////
        $scope.gridOptions = {
            showGridFooter: false,
            //showColumnFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            //paginationPageSizes: [20, 20, 40],
            paginationPageSizes: [25, 50, 75],
            //paginationPageSize: 7,
            paginationPageSize: 1000,
            rowHeight: 30,
            enableCellEdit: false,
            onRegisterApi: registerGridApi,
            enableFiltering: true,
            //rowTemplate:
            //'<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">' +
            //'  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
            //'</div>',
            columnDefs: [
                //{ field: 'ProjectName', width: '100%', cellTooltip: function (row) { return row.entity.ProjectName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { field: 'ReleaseName', displayName: '', width: '100%', enableCellEdit: false, cellTooltip: function (row) { return row.entity.ReleaseName; }, cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP" style="text-align:center;font-size:large">{{COL_FIELD CUSTOM_FILTERS}}</div>' }
            ]
        };

        $scope.rowFormatter = function (row) {


            //var results = +document.getElementById("CompleteTask").value;
            //document.getElementById('CompleteTask').value = results + 1;

           // console.log(row);
            return row.entity.ProjectStatus=== '4-Complete';
        };
        function registerGridApi(gridApi) {
            $scope.gridApi = gridApi;
        }


        $scope.skillsFunc = function () {

            //$('#TaskDisplay').trigger('click');
            var job = document.getElementById('ProjectName').value;
            console.log(job);
            $scope.gridApi.grid.getColumn('ProjectName').filters[0] = {
                term: job
            };
        };

        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');


            //console.log(options);
           // ProjectService.get().success(function (data) {
            ChangeMgmtService.get().success(function (data) {
                if (data === null || data.ChangeMgmtList === null || data.ChangeMgmtList.length === 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.ChangeMgmtList.length
                    );

                    var ChangeMgmtList = data.ChangeMgmtList;

                    //console.log(MessageList);

                    $scope.gridOptions.data = ChangeMgmtList;
                    //console.log("this is data" + $scope.gridOptions.data)


                    $scope.error = false;
                }
                // $scope.loading = false;
            }).finally(function () { $scope.loading = false; });
            //   . error(function (data) {

            //});
        }

        
        $scope.loadGrid();
        

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

        }
        $scope.function_one();





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
                    document.getElementById('ProjectName').value = row.entity.ReleaseName;
                    document.getElementById('mysidenavRightProjectPopup').style.width = '0';
                    //document.getElementById('gridHolder').style.width = '60%';
                    $scope.cancelModal('mysidenavRightProjectPopup');
                    if (objarray.indexOf(row.entity.ObjectId) === -1) {
                        objarray.push(row.entity.ObjectId);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.ObjectId) !== -1) {
                        console.log("pop");
                        document.getElementById('ProjectName').value = "";

                        
                        objarray.splice(objarray.indexOf(row.entity.ObjectId), 1);
                    }

            });


        }
            //########################END GRID 1 FUNCTIONALITIES#######################////////////


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
                    newHeight = $(window).height() - $(window).height() * 0.5;
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
                    newHeight = $(window).height() - $(window).height() * 0.05;
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

            
            $scope.randomSize('gridProjectPopup', 'hs');
        };
        $scope.ScrAdjust();

        $scope.cancelModal = function (nav) {
            document.getElementById(nav).style.display = "none";
            //document.getElementById('navModal').value = "";
        };


            //COMMON FUNCTIONS 
         
            $scope.deleteMainProject = function () {
                console.log('Project Deleted');
                console.log(objarray);
                ProjectService.deleteMainProject(objarray).success(function (data) {

                    // $scope.gridApi.core.refresh();
                    $scope.loadGrid();
                });
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


            

            $scope.LoadTask = function () {
                   $('#TaskDisplay').trigger('click');
                       
               }        
            $scope.LoadEstimates = function () {
                                $('#EstDisplay').trigger('click');
                       
                            }   
            $scope.LoadCM = function () {
                $('#CMDisplay').trigger('click');
                       
            }
            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            

           

        


        
    }



})();

