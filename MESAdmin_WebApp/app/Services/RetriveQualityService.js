(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RetriveQualityService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getQuality: function (plant, wo_id) {

                console.log("Quality list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getQuality/" + plant + "/" + wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Quality");
                
                return $http(req);
            }

      

        }




        }])


  


})();