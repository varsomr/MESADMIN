(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('RptMixerTotalizerService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getmixertotalizer: function (plant,ProductionOrderValue,LineValue,ProductCodeValue,SDateValue,EDateValue) {
                console.log("Mixer Totalizer List ");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getmixertotalizer/" + plant + "/" + ProductionOrderValue+ "/" + LineValue+ "/" + ProductCodeValue + "/" + SDateValue+"/"+EDateValue;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url Mixer Totalizer");
                //  console.log($http(req));
                return $http(req);
            }

   






 

        }




    }])



})();