(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('ObjectService', ['$rootScope', '$http', function ($rootScope, $http) {

            return {

                get: function (objectID) {
                    console.log("OBJservice");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Object/" + objectID;

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };


                    console.log("making api call url");
                    //  console.log($http(req));
                    return $http(req);
                },

                saveTextarea: function (obj, xmlcon) {
                    var jsonData = angular.toJson(obj, xmlcon);
                    var objectToSerialize = { 'xml': xmlcon, 'objectid': obj };
                    console.log(xmlcon);
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/savexml";


                    var req = {
                        method: 'PUT',
                        url: url,
                        data: objectToSerialize//angular.toJson(Objarray),
                        // objid: obj,
                        //headers: {
                        //    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        //}
                    };

                    console.log(req.data);

                    console.log("making api call url 3");
                    console.log($http(req));
                    return $http(req);
                }




            };




        }]);



})();