(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('OneStopGuidedSupportService', ['$rootScope', '$http', function ($rootScope, $http) {

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


                addServDeskEntry: function (IncidentIDValue, ProcessInputValue, ApplicationInputValue, ReportInputValue, LITInputValue, HardwareInputValue, SDTechNameValue, CreateDateValue) {
                    console.log("Add New Defect")
                    var objectToSerialize = { 'IncidentIDValue': IncidentIDValue, 'ProcessInputValue': ProcessInputValue, 'ApplicationInputValue': ApplicationInputValue, 'ReportInputValue': ReportInputValue, 'LITInputValue': LITInputValue, 'HardwareInputValue': HardwareInputValue, 'SDTechNameValue': SDTechNameValue, 'CreateDateValue': CreateDateValue };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addServDeskEntry/";
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