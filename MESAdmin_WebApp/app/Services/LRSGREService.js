(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('LRSCorpService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getLRSCorp: function (plant) {

                console.log("Rpt driver list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getLRSCorp/" + plant;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Rpt Driver");
                // console.log($http(req));
                return $http(req);
            },


            VatMsgOff: function (VATPlantOffValue) {
                console.log("Turn Off VAT email")
                var objectToSerialize = { 'VATPlantOffValue': VATPlantOffValue};
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/VatMsgOff/" + VATPlantOffValue;
                //console.log(url);

                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize
                }


                console.log("making api call url start service");
                //console.log($http(req));
                return $http(req);


            }

      

        }




    }])



})();