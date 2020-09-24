(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('DopService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getDop: function () {
                console.log("Dop Enquiry List");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/DopEnquiry/getdop";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url Dop Enquiry");
                //  console.log($http(req));
                return $http(req);
            }

        }




    }])



})();