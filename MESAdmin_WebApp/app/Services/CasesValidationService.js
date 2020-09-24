(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('CasesValidationService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getCasesValidation: function (plant) {

                console.log("Cases Validation list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCasesValidation/" + plant;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Cases Validation");
                // console.log($http(req));
                return $http(req);



            },

            getCasesValidationL: function (plant,Area) {

            console.log("Cases Validation LPS Screen");
            var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCasesValidationL/" + plant +"/" + Area;

            console.log(url);
            var req = {
                method: 'GET',
                url: url
            }
            console.log("making api call url for Cases Validation");
            return $http(req);
            }

        }




    }])



})();