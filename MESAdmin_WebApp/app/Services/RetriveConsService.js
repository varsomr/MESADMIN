(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RetriveConsService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getConsumption: function (plant, wo_id) {

                console.log("Consumption list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getConsumption/" + plant+"/"+wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Consumption");
                
                return $http(req);
            }

      

        }




        }])


    



})();