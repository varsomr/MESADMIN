(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('UtilityMeteringService', ['$rootScope', '$http', function ($rootScope, $http) {

            return {

                getUtilityMetering: function (plant,majorgroup,date) {

                    console.log("Support list" + majorgroup + date);
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getUtilityMetering/" + plant + "/" + majorgroup + "/" + date + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addUtilityMetering: function (plantValue, majorgroupValue, areaValue, metertagValue, currentdatevalValue, currdateValue, goalValue) {
                    console.log("Add New Utility Meter")
                    var objectToSerialize = {
                        'plantValue': plantValue,
                        'majorgroupValue': majorgroupValue,
                        'areaValue': areaValue,
                        'metertagValue': metertagValue,
                        'currentdatevalValue': currentdatevalValue,
                        'currdateValue': currdateValue,
                        'goalValue': goalValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addUtilityMetering/";
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