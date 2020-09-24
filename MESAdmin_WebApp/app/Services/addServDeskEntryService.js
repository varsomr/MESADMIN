(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('addServDeskEntryService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            get: function () {
                console.log("addServDeskEntry Service");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/GetaddServDeskEntry";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url 1D");
                //  console.log($http(req));
                return $http(req);
            },






            addServDeskEntryService: function () {
                console.log("services list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addServDeskEntryService";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for services");
                // console.log($http(req));
                return $http(req);
            },

            getRptDriver: function (plant) {

                console.log("Rpt driver list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getRptDriver/" + plant;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Rpt Driver");
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
            },

            listArea: function () {
                console.log(" Area Drop");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message2/listArea";

                console.log(url);
                var req = {
                    method: 'POST',
                    url: url
                }
                console.log("making api call url for Area Dropdown");
                // console.log($http(req));
                return $http(req);

            },
            saveaddServDeskEntry: function (id, colname, colval) {
                var jsonData = angular.toJson(id, colname, colval);
                var objectToSerialize = { 'row_id': id, 'ColumnName': colname, 'ColumnValue': colval };
                //console.log(xmlcon);
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/saveaddServDeskEntry";


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

                console.log("making api call url Save Main Project");
                // console.log($http(req));
                return $http(req);
            },

            addServDeskEntry: function (IncidentIDValue, ProcessInputValue, ApplicationInputValue, ReportInputValue, LITInputValue, HardwareInputValue, SDTechNameValue, CreateDateValue) {
                console.log("Add New addServDeskEntry")
                var objectToSerialize = { 'IncidentIDValue': IncidentIDValue, 'ProcessInputValue': ProcessInputValue, 'ApplicationInputValue': ApplicationInputValue, 'ReportInputValue': ReportInputValue, 'LITInputValue': LITInputValue, 'HardwareInputValue': HardwareInputValue, 'SDTechNameValue': SDTechNameValue, 'CreateDateValue': CreateDateValue};
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addServDeskEntry/";
                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize
                }


                console.log("making api call url start service");
                  //console.log($http(req));
                return $http(req);


            },
            deleteaddServDeskEntry: function (objarray) {
                var jsonData = angular.toJson(objarray);
                var objectToSerialize = { 'object': jsonData };
                console.log(objectToSerialize);
                //console.log("Delete Row")
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/deleteaddServDeskEntry";
                var req = {
                    method: 'PUT',
                    url: url,

                    data: objarray,
                }
                console.log("making api call url deleteRow service");
                //  console.log($http(req));
                return $http(req);
            },
            //exportaddServDeskEntry: function (objarray) {
            //    var file_path = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/GetaddServDeskEntry";
            //    var a = document.createElement('A');
            //    a.href = file_path;
            //    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
            //    document.body.appendChild(a);
            //    a.click();
            //    document.body.removeChild(a);
            

            //    console.log("making api call url export Grid service");
            //    //  console.log($http(req));
            //    return $http(req);
            //},
            saveRptDriverconfig: function (id, colname, colval) {
                var jsonData = angular.toJson(id, colname, colval);
                var objectToSerialize = { 'id': id, 'ColumnName': colname, 'ColumnValue': colval };
                //console.log(xmlcon);
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/saveRptDriverconfig";


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

                console.log("making api call url saveRptDriver Config");
                // console.log($http(req));
                return $http(req);
            }
      

        }




    }])



})();