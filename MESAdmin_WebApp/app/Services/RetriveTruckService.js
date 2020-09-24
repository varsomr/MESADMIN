(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RetriveTruckService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getTruck: function (plant,wo_id) {

                console.log("Truck list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getTruck/" + plant+"/"+wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for TruckData");
                
                return $http(req);
            }

      

        }




        }])


  


})();