(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('processmappingService', ['$rootScope', '$http', function ($rootScope, $http) {

            return {

                getProcessDoc: function () {

                    console.log("ProcessDoc list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getProcessDoc/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addProcessDoc: function (TitleValue, IssueAreaTB1Value, IssueAreaTB2Value, NumStepsValue, ProcessTB1Value, ProcessTBMSG1Value, ProcessTB2Value, ProcessTBMSG2Value, ProcessTB3Value, ProcessTBMSG3Value, ProcessTB4Value, ProcessTBMSG4Value, ProcessTB5Value, ProcessTBMSG5Value, ProcessTB6Value, ProcessTBMSG6Value, ProcessTB7Value, ProcessTBMSG7Value, ProcessTB8Value, ProcessTBMSG8Value, ProcessTB9Value, ProcessTBMSG9Value, ProcessTB10Value, ProcessTBMSG10Value) {
                    //console.log(TitleValue + IssueAreaTB1Value, IssueAreaTB2Value + NumStepsValue + ProcessTB1Value + ProcessTBMSG1Value + ProcessTB2Value + ProcessTBMSG2Value, ProcessTB3Value + ProcessTBMSG3Value, ProcessTB4Value + ProcessTBMSG4Value, ProcessTB5Value + ProcessTBMSG5Value + ProcessTB6Value + ProcessTBMSG6Value+ ProcessTB7Value+ ProcessTBMSG7Value+ ProcessTB8Value +ProcessTBMSG8Value+ ProcessTB9Value+ ProcessTBMSG9Value + ProcessTB10Value+ ProcessTBMSG10Value)
                    var objectToSerialize = {
                        'TitleValue': TitleValue, 'IssueAreaTB1Value': IssueAreaTB1Value, 'IssueAreaTB2Value': IssueAreaTB2Value, 'NumStepsValue': NumStepsValue, 'ProcessTB1Value': ProcessTB1Value, 'ProcessTBMSG1Value': ProcessTBMSG1Value, 'ProcessTB2Value': ProcessTB2Value, 'ProcessTBMSG2Value': ProcessTBMSG2Value, 'ProcessTB3Value': ProcessTB3Value, 'ProcessTBMSG3Value': ProcessTBMSG3Value, 'ProcessTB4Value': ProcessTB4Value, 'ProcessTBMSG4Value': ProcessTBMSG4Value, 'ProcessTB5Value': ProcessTB5Value, 'ProcessTBMSG5Value': ProcessTBMSG5Value, 'ProcessTB6Value': ProcessTB6Value, 'ProcessTBMSG6Value': ProcessTBMSG6Value, 'ProcessTB7Value': ProcessTB7Value, 'ProcessTBMSG7Value': ProcessTBMSG7Value, 'ProcessTB8Value': ProcessTB8Value, 'ProcessTBMSG8Value': ProcessTBMSG8Value, 'ProcessTB9Value': ProcessTB9Value, 'ProcessTBMSG9Value': ProcessTBMSG9Value, 'ProcessTB10Value': ProcessTB10Value, 'ProcessTBMSG10Value': ProcessTBMSG10Value };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addProcessDoc/";
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