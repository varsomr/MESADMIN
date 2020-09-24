(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('ProcessingMassBalanceService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getmass: function (SDateValue, EDateValue) {
                console.log("Processing Mass Balance list ");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getmass/" + SDateValue + "/" + EDateValue;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url ProcessingMassBalance");
                //  console.log($http(req));
                return $http(req);
            }

   






 

        }




    }])



})();