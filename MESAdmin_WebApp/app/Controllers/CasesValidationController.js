(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('CasesValidationcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'CasesValidationService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, CasesValidationService) {


        $scope.randomSize = function (nav, ty) {
            var newHeight; //= Math.floor(Math.random() * (300 - 100 + 1) + 300);
            var newWidth; //= Math.floor(Math.random() * (600 - 200 + 1) + 200);
            if ($(window).width() < 600) {
                if (ty === 'fs') {
                    newHeight = $(window).height() - $(window).height() * 0.05;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.20;
                }
                newWidth = $(window).width() - $(window).width() * 0.05;
                document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 1300) {
                if (ty === 'fs') {
                    newHeight = $(window).height() - $(window).height() * 0.05;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.20;
                }
                //newWidth = 1200;
                newWidth = $(window).width() - $(window).width() * 0.05;
                document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            else if ($(window).width() < 2000) {
                if (ty === 'fs') {
                    newHeight = $(window).height() - $(window).height() * 0.05;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.20;
                }
                //newWidth = 1800;
                newWidth = $(window).width() - $(window).width() * 0.05;
                document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }

            else {
                if (ty === 'fs') {
                    newHeight = $(window).height() - $(window).height()*0.05;
                }
                else {
                    newHeight = $(window).height() - $(window).height() * 0.20;
                }
                newWidth = $(window).width() - $(window).width() * 0.05;
                document.getElementById('screensz').value = $(window).width() + 'x' + $(window).height();
            }
            //console.log('Your screen resolution is -' + $(window).width());
            angular.element(document.getElementsByClassName(nav)[0]).css('height', newHeight + 'px');
            angular.element(document.getElementsByClassName(nav)[0]).css('width', newWidth + 'px');
        };



        $scope.gridOptions = {
            showGridFooter: true,
            //showColumnFooter: true,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [10, 20, 30],
            paginationPageSize: 20,
            rowHeight: 43,
            enableCellEdit: false,
            onRegisterApi: registerGridApi,
            enableFiltering: true,
            columnDefs: [
                                {
                                     field: 'Created_Date_Time', width: '15%', enableCellEdit: false, 
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                },
                                {
                                    field: 'RowID', width: '7%', enableCellEdit: false,
                                cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 },

                                 {
                                     field: 'Material', width: '15%', enableCellEdit: false, 
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 },
                                 {
                                     field: 'CaseScannedLeft', displayName:'LEFT', width: '10%', enableCellEdit: false, 
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 },
                                 {
                                     field: 'CaseScannedRight', displayName: 'RIGHT', width: '10%', enableCellEdit: false, 
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 },
                                 {
                                     field: 'Last_Edit_time', width: '15%', enableCellEdit: false, 
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 },
                                {
                                     field: 'Area', width: '10%', enableCellEdit: false, 
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 },
                                 {
                                     field: 'CompleteStatus', width: '10%', enableCellEdit: false,
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 },
                                 {
                                     field: 'UserEdited', width: '10%', enableCellEdit: false, 
                                     cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                                 }
                            ]
        };


       

       $scope.showGrid = function () {
            document.getElementById("p").style.display = 'none';
            document.getElementById("grid").style.display = 'block';
            //document.getElementById(elementId).style.display = 'block';
        }
        $scope.GridfromButton = function (plant) {
            document.getElementById('VATPlantOff').value = plant;
            console.log("this is " + plant);
            $scope.loadGrid();
            
            jQuery('#showblock').prop('checked', false);
            document.getElementById("Area").value = "";
            //$scope.refreshGridL();
       }

        $scope.GridfromButtonL = function () {
                document.getElementById('VATPlantOff').value = plant;
                console.log("this is " + plant);
                if(document.getElementById('Area').value === '')
                {
                    alert('Please Select a row from the Main Grid to identify Area');
                }
                else {
                   
                    $scope.refreshGridL();
                }
        }

        function registerGridApi(gridApi) {
            $scope.gridApi = gridApi;
        };
        $scope.loadGrid = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            console.log("this is " + plant );

            //console.log(options);
            CasesValidationService.getCasesValidation(plant).success(function (data) {
                if (data == null || data.CasesValidationList == null || data.CasesValidationList.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptions.paginationPageSizes.push(
                        data.CasesValidationList.length
                    );
                    var CasesValidationList = data.CasesValidationList;
                    $scope.gridOptions.data =CasesValidationList;
                    $scope.error = false;
                }
                
            }).finally(function () { $scope.loading = false; })
            
        }

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;

            //    $scope.selectRow = function () {
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
            //  console.log($scope.mySelectedRows)

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.ObjectId);


                if (row.isSelected) {
                    console.log('push');
                    if (document.getElementById('ckLock').checked === false) {
                        document.getElementById('Area').value = row.entity.Area;
                        $scope.GridfromButtonL();
                        //jQuery('#showblock').prop('checked',true);
                        $scope.openDIVMODSM('mysidenavRightSaveMessage', 'Production Screen');
                    }
                    if (objarray.indexOf(row.entity.ObjectId) === -1) {
                        objarray.push(row.entity.ObjectId);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.ObjectId) !== -1) {
                        console.log("pop");
                        document.getElementById('mysidenavRightSaveMessage').style.display = 'none';

                        objarray.splice(objarray.indexOf(row.entity.ObjectId), 1);
                    }

            });
            gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
                $scope.lastCellEdited = ' ID: ' + rowEntity.RowId + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;

                // $scope.lastCellEdited = 
                var id = rowEntity.RowId;
                var colname = colDef.name;
                var colval = newValue;
                GridService.saveRptDriverconfig(id, colname, colval);
                console.log('this is ' + $scope.lastCellEdited);
                $scope.$apply();
            });

            


        };
            $scope.hideGrid = function () {
                $scope.loadGrid();
                document.getElementById("gridholder").style.display = 'none';
                document.getElementById("imageholder").style.display = 'block';


            };
        $scope.showGrid = function () {
            $scope.loadGrid();
            document.getElementById("gridholder").style.display = 'block';
            document.getElementById("imageholder").style.display = 'none';

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



            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            };
            $scope.exportDriver = function () {
                console.log('Export Driver Recordset');
                window.open('http://denm2008mesadm:93/api/Message/getCasesValidation/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
            };

            $scope.openNav = function () {
                document.getElementById("mysidenavRight").style.width = "90.352%";
            };

            $scope.closeNav = function () {
                document.getElementById("mysidenavRight").style.width = "0";
            };

        $scope.gridOptionsL = {
            showGridFooter: false,
            multiSelect: false,
            enableFullRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [10, 20, 30],
            paginationPageSize: 20,
            rowHeight: 53,
            enableFiltering: true,
            enableCellEdit: false,
            enableGridMenu: false,
            columnDefs: [
                {
                    field: 'Material', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Layer', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },

                {
                    field: 'Total_Cases', displayName:'TotalScanned', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'Scanned_Cases', displayName: 'GoodScan', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                {
                    field: 'UnScanned_Cases', displayName: 'BadScan', width: '20%', enableCellEdit: false,
                    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                
            ]
        };


        $scope.loadGridL = function () {
            $scope.loading = true;
            console.log('loading grid');
            plant = document.getElementById('VATPlantOff').value;
            console.log("this is " + plant);
            Area = document.getElementById('Area').value;
            //console.log(options);
            CasesValidationService.getCasesValidationL(plant,Area).success(function (data) {
                if (data == null || data.CasesValidationListL == null || data.CasesValidationListL.length == 0) {
                    $scope.error = true;
                    $scope.errorDescription = "No data found for selected criteria.";
                } else {
                    $scope.gridOptionsL.paginationPageSizes.push(
                        data.CasesValidationListL.length
                    );
                    var CasesValidationListL = data.CasesValidationListL;
                    $scope.gridOptionsL.data = CasesValidationListL;
                    $scope.error = false;
                }

            }).finally(function () { $scope.loading = false; })

        }

        $scope.gridOptionsL.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();

            var objarray = [];
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log('row selected ' + row.entity.ObjectId);


                if (row.isSelected) {
                    console.log('push');
                    if (objarray.indexOf(row.entity.ObjectId) == -1) {
                        objarray.push(row.entity.ObjectId);
                    }
                }
                else
                    if (objarray.indexOf(row.entity.ObjectId) != -1) {
                        console.log("pop");
                        objarray.splice(objarray.indexOf(row.entity.ObjectId), 1);
                    }

            });
        };

        $scope.cancelModal = function () {
            //$scope.launchIntoFullscreen(document.documentElement);
            document.getElementById("mysidenavRightSaveMessage").style.display = "none";

            //document.getElementById('navModal').value = "";
            $scope.ScrAdjust();

        };

        $scope.openModal = function (nav) {
            document.getElementById(nav).style.display = 'block';
        };


        $scope.openURL = function (navRAW) {
            if (confirm('You are about to enter a new page. Unsaved informtion will be lost. Are you sure?')) {
                // Save it!
                var nav = navRAW + document.getElementById('VATPlantOff').value;
                if (navRAW !== '#/LRSCorp') {
                    window.location.replace('/#');
                }
                else {
                    window.location.replace(navRAW);
                }

            }
            else {
                // Do nothing!
            }
        };

        $scope.clear = function () {
            $scope.data.length = 0;
        };

        $scope.refreshGridL = function () {
            console.log('refresh grid');
            $scope.loading = true;
            $scope.gridOptionsL.data = [];
            $timeout(function () {
                $scope.loadGridL();
            }, 1000);
        };


        $scope.openDIVMODSM = function (nav, msg) {


            // Save it!

            document.getElementById('mysidenavRightSaveMessage').style.display = 'block';
            //document.getElementById('navModal').value = nav;
            document.getElementById('modalMessage').value = msg;





        };
        $scope.clearFilters = function () {
            console.log('Clear Filters');
            $scope.gridApi.gridL.clearAllFilters(); /*Reset the filters on grid*/
        };

        $scope.exportDriver = function () {
            console.log('Export Driver Recordset');
            window.open('http://denm2008mesadm:93/api/Message/getCasesValidation/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
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



        $scope.ScrAdjust = function () {

            $scope.randomSize('grid', 'fs');
            $scope.randomSize('gridP', 'hs');
            
        };

        ////####Get IP Address #################//
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
        //        var hosts = [];
        //        sdp.split('\r\n').forEach(function (line) {
        //            if (~line.indexOf("a=candidate")) {
        //                var parts = line.split(' '),
        //                    addr = parts[4],
        //                    type = parts[7];
        //                if (type === 'host') updateDisplay(addr);
        //            } else if (~line.indexOf("c=")) {
        //                var parts = line.split(' '),
        //                    addr = parts[2];
        //                updateDisplay(addr);
        //            }
        //        });
        //    }
        //})(); else {
        //    document.getElementById('list').innerHTML = "<code>ifconfig| grep inet | grep -v inet6 | cut -d\" \" -f2 | tail -n1</code>";
        //    document.getElementById('list').nextSibling.textContent = "In Chrome and Firefox your IP should display automatically, by the power of WebRTCskull.";
        //}
        ////####End Get IP Address #################//

    }


   
})();





