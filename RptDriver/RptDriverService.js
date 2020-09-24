(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RptDriverService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            get: function () {
                console.log("Message list 1D");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message1D/get";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url 1D");
                //  console.log($http(req));
                return $http(req);
            },






            getService: function () {
                console.log("services list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getService";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for services");
                // console.log($http(req));
                return $http(req);
            },





            saveTestConfig: function (id, colname, colval) {
                var jsonData = angular.toJson(id, colname, colval);
                var objectToSerialize = { 'RowID': id, 'ColumnName': colname, 'ColumnValue':colval   };
                //console.log(xmlcon);
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/saveTestConfig";


                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize//angular.toJson(Objarray),
                    // objid: obj,
                    //headers: {
                    //    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    //}
                }

                console.log(req.data)

                console.log("making api call url Save Test Config");
               // console.log($http(req));
                return $http(req);
            }
      

        }




    }])



})();