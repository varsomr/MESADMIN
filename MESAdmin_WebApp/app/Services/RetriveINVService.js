(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RetriveINVService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getSiloINV: function (plant, wo_id) {

                console.log("SiloINV list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getSiloINV/" + plant+"/"+wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for SiloINV");
                
                return $http(req);
            }

      

        }




        }])


    



})();