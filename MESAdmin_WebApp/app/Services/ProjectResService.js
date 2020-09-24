(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('ProjectResService', ['$rootScope', '$http', function ($rootScope, $http) {

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



                getProjectRes: function (plant) {

                    console.log("Project list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getProjectRes/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Project List");
                    // console.log($http(req));
                    return $http(req);
                },

                saveProjectRes: function (id, colname, colval) {
                    var jsonData = angular.toJson(id, colname, colval);
                    var objectToSerialize = { 'Row_ID': id, 'ColumnName': colname, 'ColumnValue': colval };
                    //console.log(xmlcon);
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/saveProjectRes";


                    var req = {
                        method: 'PUT',
                        url: url,
                        data: objectToSerialize//angular.toJson(Objarray),

                    }

                    console.log(req.data)

                    console.log("making api call url Save Project List");
                    // console.log($http(req));
                    return $http(req);
                },
                addRow: function () {
                    console.log("Add Row")
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/addRow";


                    var req = {
                        method: 'PUT',
                        url: url,
                    }


                    console.log("making api call url start service");
                    //  console.log($http(req));
                    return $http(req);


                },


                 addProject: function () {
                    console.log("Add Project")
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/addProject";


                    var req = {
                        method: 'PUT',
                        url: url,
                    }


                    console.log("making api call url start service");
                    //  console.log($http(req));
                    return $http(req);


                },

                 addMonthlyProject: function () {
                     console.log("Monthly Projects Setup Complete")
                     var url = window.location.protocol + "//" + window.location.hostname + ":93/api/addMonthlyProject";


                     var req = {
                         method: 'PUT',
                         url: url,
                     }
                     console.log("making api call url start service");
                     //  console.log($http(req));
                     return $http(req);


                }

            }




        }])



})();