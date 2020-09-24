(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('RetriveLabelService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getLabel: function (plant,wo_id) {

                console.log("Label list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getProdLabel/" + plant+"/"+wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Label");
                
                return $http(req);
            }

      

        }




        }])


    



})();