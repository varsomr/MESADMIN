(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('OneStopSupportService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getOneStopSupport: function (plant) {

                console.log("Support list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getOnStopSupport/" + plant;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Support");
                
                return $http(req);
            },


            getChkDOP: function (plant,wo_id) {

                console.log("Check DOP");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getChkDOP/" + plant + "/" + wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for check DOP");

                return $http(req);
            },

           getChkWebSpec: function (plant,wo_id) {

                    console.log("Check WebSpec");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getChkWebSpec/" + plant + "/" + wo_id;

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for check WebSpec");

                    return $http(req);
            },

           getChkHistorian: function (plant,wo_id) {

               console.log("Check Historian");
               var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getChkHistorian/" + plant + "/" + wo_id;

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for check Historian");

                    return $http(req);
           },

           getChkIN2175: function (plant,wo_id) {

                            console.log("Check IN2175");
                            var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getChkIN2175/" + plant + "/" + wo_id;

                                console.log(url);
                                var req = {
                                    method: 'GET',
                                    url: url
                                }


                                console.log("making api call url for check IN2175");

                                return $http(req);
           }

        }




        }])


  


})();