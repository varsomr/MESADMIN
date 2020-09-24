(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RptVatMakeService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getvat: function (plant, ProductionOrderValue, LineValue, ProductCodeValue, SDateValue, EDateValue) {
                console.log("VAT Make list ");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getvat/" + plant + "/" + ProductionOrderValue + "/" + LineValue + "/" + ProductCodeValue + "/" + SDateValue + "/" + EDateValue;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url VATMake");
                //  console.log($http(req));
                return $http(req);
            }

   






 

        }




    }])



})();