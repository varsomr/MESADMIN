(function () {
    angular
        .module('myApp')
        .controller('OneStopcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'OneStopSupportService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, OneStopSupportService) {

             $("#plant").change(function () {
                    var plant = this.value;
                    window.plant = plant;
                    //console.log("this is " + plant );
                    document.getElementById('VATPlantOff').value = plant;
               });

            $scope.popSummary = function () {
                document.getElementById('mysidenavRightProd').style.width = '0';
            }    

            $scope.closeAll = function () {
                document.getElementById('mysidenavRightMain').style.width = '0';
                document.getElementById('mysidenavRightCons').style.width = '0';
                document.getElementById('mysidenavRightProd').style.width = '0';
                document.getElementById('mysidenavRightSummary').style.width = '0';
				document.getElementById('mysidenavRightSummary2').style.width = '0';
                document.getElementById('mysidenavRightTruck').style.width = '0';
                document.getElementById('mysidenavRightQuality').style.width = '0';
                document.getElementById('mysidenavRightLabel').style.width = '0';
                document.getElementById('mysidenavRightINV').style.width = '0';
                document.getElementById('mysidenavRightChkDOP').style.width = '0';
                document.getElementById('mysidenavRightChkWS').style.width = '0';
                document.getElementById('mysidenavRightChkIN2175').style.width = '0';
                document.getElementById('mysidenavRightChkTag').style.width = '0';
            }

            $scope.openDIV = function (nav) {
                document.getElementById('mysidenavRightMain').style.width = '0';
                document.getElementById('mysidenavRightCons').style.width = '0';
                document.getElementById('mysidenavRightProd').style.width = '0';
                document.getElementById('mysidenavRightSummary').style.width = '0';
				document.getElementById('mysidenavRightSummary2').style.width = '0';
                document.getElementById('mysidenavRightTruck').style.width = '0';
                document.getElementById('mysidenavRightQuality').style.width = '0';
                document.getElementById('mysidenavRightLabel').style.width = '0';
                document.getElementById('mysidenavRightINV').style.width = '0';
                document.getElementById('mysidenavRightChkDOP').style.width = '0';
                document.getElementById('mysidenavRightChkWS').style.width = '0';
                document.getElementById('mysidenavRightChkIN2175').style.width = '0';
                document.getElementById('mysidenavRightChkTag').style.width = '0';
                document.getElementById(nav).style.width = '90.352%';
            } 

            $scope.Undo = function () {

                document.getElementById('PO').value = '';
                document.getElementById('Operation').value = '';
                document.getElementById('Item').value = '';
                document.getElementById('Batch').value = '';
                document.getElementById('ReasonCode').value = '';
                document.getElementById('WorkCenter').value = '';
                document.getElementById('JobStatus').value = '';
                document.getElementById('ent_id').value = '';
                document.getElementById('to_ent_id').value = '';
                document.getElementById('qty').value = '';
                document.getElementById('SentToSAP').value = '';
                document.getElementById('comments').value = '';
                document.getElementById('spare1').value = '';
                document.getElementById('spare2').value = '';
                document.getElementById('spare3').value = '';
                document.getElementById('spare4').value = '';
                document.getElementById('last_edit_by').value = '';
                document.getElementById('last_edit_at').value = '';
                document.getElementById('created_at_utc').value = '';
                document.getElementById('created_at_local').value = '';

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

           

            $scope.clearFilters = function () {
                console.log('Clear Filters');
                $scope.gridApi.grid.clearAllFilters(); /*Reset the filters on grid*/
            }

            $scope.exportDriver = function () {
                console.log('Export Driver Recordset');
                window.open('http://denm2008mesadm:93/api/Message/getCasesValidation/' + document.getElementById('VATPlantOff').value, '_blank', 'resizable=yes')
            }

            $scope.openNav = function(nav) {
                document.getElementById(nav).style.width = "90.352%";
                document.getElementById(nav).style.zIndex= "999";
            }

            $scope.closeNav = function(nav) {
                document.getElementById(nav).style.width = "0";
            }
            $scope.openDIVS = function (nav) {
                //document.getElementById('mysidenavRightIntro').style.width = '0';
                //document.getElementById('mysidenavRightFW').style.width = '0';
                //document.getElementById('mysidenavRightCW').style.width = '0';
                //document.getElementById('mysidenavRightEL').style.width = '0';
                //document.getElementById('mysidenavRightGS').style.width = '0';
                //document.getElementById('InputForm').style.width = '0';
                document.getElementById(nav).style.width = '47.5%';


            }

        


        
    }





    

   
})();







