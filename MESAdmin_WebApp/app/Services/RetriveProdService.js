(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RetriveProdService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getProduction: function (plant, wo_id) {

                console.log("Production list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getProduction/" + plant+"/"+wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Production");
                
                return $http(req);
            }

      

        }




        }])


  


})();