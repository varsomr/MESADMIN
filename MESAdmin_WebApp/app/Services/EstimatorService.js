(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('EstimatorService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            get: function () {
                console.log("Estimator Service");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/GetEstimator";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url 1D");
                //  console.log($http(req));
                return $http(req);
            },






            EstimatorService: function () {
                console.log("services list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/EstimatorService";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for services");
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
            saveEstimator: function (id, colname, colval) {
                var jsonData = angular.toJson(id, colname, colval);
                var objectToSerialize = { 'row_id': id, 'ColumnName': colname, 'ColumnValue': colval };
                //console.log(xmlcon);
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/saveEstimator";


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

            addEstimator: function (AreaValue, UINameValue, ComplexityValue, BAHoursValue, AppsAnalysisHoursValue, DevelopmentHoursValue, TestingHoursValue, DeploymentHoursValue, TrainingHoursValue, TotalHoursValue, MassTotalHoursValue, RateValue, HardwareCostValue, SoftwareCostValue, ConsultingCostValue, TotalCostValue, row_idValue) {
                console.log("Add New Estimate")
                var objectToSerialize = { 'AreaValue': AreaValue, 'UINameValue': UINameValue, 'ComplexityValue': ComplexityValue, 'BAHoursValue': BAHoursValue, 'AppsAnalysisHoursValue': AppsAnalysisHoursValue, 'DevelopmentHoursValue': DevelopmentHoursValue, 'TestingHoursValue': TestingHoursValue, 'DeploymentHoursValue': DeploymentHoursValue, 'TrainingHoursValue': TrainingHoursValue, 'TotalHoursValue': TotalHoursValue, 'MassTotalHoursValue': MassTotalHoursValue, 'RateValue': RateValue, 'HardwareCostValue': HardwareCostValue, 'SoftwareCostValue': SoftwareCostValue, 'ConsultingCostValue': ConsultingCostValue, 'TotalCostValue': TotalCostValue, 'row_idValue': row_idValue};
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addEstimator/";
                //console.log(url);

                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize
                }


                console.log("making api call url start service");
                  //console.log($http(req));
                return $http(req);


            },
            deleteEstimator: function (objarray) {
                var jsonData = angular.toJson(objarray);
                var objectToSerialize = { 'object': jsonData };
                console.log(objectToSerialize);
                //console.log("Delete Row")
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/deleteEstimator";
                var req = {
                    method: 'PUT',
                    url: url,

                    data: objarray,
                }
                console.log("making api call url deleteRow service");
                //  console.log($http(req));
                return $http(req);
            }

      

        }




    }])



})();