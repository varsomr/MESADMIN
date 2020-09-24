(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('PhageMEService', ['$rootScope', '$http', function ($rootScope, $http) {

            return {

                getPhageME: function (majorgroup) {

                    console.log("Phage Titration list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getPhageME/"+ majorgroup+"/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addPhageME: function (IDValue,ProductionDateValue,LineValue,LocationValue,LogVatTankSiloValue,PhageValue,ActionValue) {
                    console.log("Add New Phage")
                    var objectToSerialize = {
                        'IDValue': IDValue,'ProductionDateValue': ProductionDateValue,
                        'LineValue': LineValue,
                        'LocationValue': LocationValue,
                        'LogVatTankSiloValue': LogVatTankSiloValue,
                        'PhageValue': PhageValue,
                        'ActionValue':ActionValue
                       
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addPhageME/";
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