(function () {
    //  'use strict';
    
    angular
        .module('myApp')
    .service('ChangeMgmtService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            get: function () {
                console.log("ChangeMgmt Service");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/GetChangeMgmt";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url 1D");
                //  console.log($http(req));
                return $http(req);
            },






            ChangeMgmtService: function () {
                console.log("services list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/ChangeMgmtService";

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }



                console.log("making api call url for services");
                // console.log($http(req));
                return $http(req);

            },



            saveChangeMgmt: function (id, colname, colval) {
                var jsonData = angular.toJson(id, colname, colval);
                var objectToSerialize = { 'row_id': id, 'ColumnName': colname, 'ColumnValue': colval };
                //console.log(xmlcon);
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/saveChangeMgmt";


                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize//angular.toJson(Objarray),

                }

                console.log(req.data)

                console.log("making api call url Save Main Project");
                // console.log($http(req));
                return $http(req);
            },


            InitChangeMgmt: function (id, colname, colval) {
                var jsonData = angular.toJson(id, colname, colval);
                var objectToSerialize = { 'row_id': id, 'ColumnName': colname, 'ColumnValue': colval };
                //console.log(xmlcon);
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/InitChangeMgmt";


                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize//angular.toJson(Objarray),

                }

                console.log(req.data)

                console.log("making api call url Initialize Release Management Lifecycle");
                // console.log($http(req));
                return $http(req);
            },
            SaveCMForm: function (id, colname, colval, colname1, colval1) {
                var jsonData = angular.toJson(id, colname, colval);
                var objectToSerialize = { 'row_id': id, 'ColumnName': colname, 'ColumnValue': colval };
                //console.log(xmlcon);
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/SaveCMForm";


                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize//angular.toJson(Objarray),

                }

                console.log(req.data)

                console.log("making api call url Initialize Release Management Lifecycle");
                // console.log($http(req));
                return $http(req);
            },

            addChange: function (ReleaseNameValue, FSValue, BusinessLeadValue, BLSignValue, BusinessApproverValue, BApproverSignValue, DEVandTSValue, DeveloperValue, DEVSignValue, STValue, TechLeadValue, TLSignValue, AppsApproverValue, AppsApproverSignValue, FUTValue, BLSign2Value, DEVSign2Value, TLSign2Value, AppsApproverSign2Value, PackageLocationValue, ScreenShotLocationValue, LockedDateTimeValue, StatusValue, DescriptionValue, TestCycleValue, EnteredByValue, FSLocationValue, CommentValue, row_idValue, TrainerNameValue, PlantContactValue, TechSpecLocationValue, TestScriptLocationValue, PRODDeployDateValue, ControlsAnalystValue, DeployStatusValue, DeployPlantsValue, UpdatesValue, AssignedToValue, ProjectIDReleaseValue) {
                console.log("Add New ChangeMgmt")
                var objectToSerialize = {
                    'ReleaseName': ReleaseNameValue, 'FS': FSValue, 'BusinessLead': BusinessLeadValue, 'BLSign': BLSignValue, 'BusinessApprover': BusinessApproverValue, 'BApproverSign': BApproverSignValue, 'DEVandTS': DEVandTSValue, 'Developer': DeveloperValue, 'DEVSign': DEVSignValue, 'ST': STValue, 'TechLead': TechLeadValue, 'TLSign': TLSignValue, 'AppsApprover': AppsApproverValue, 'AppsApproverSign': AppsApproverSignValue, 'FUT': FUTValue, 'BLSign2': BLSign2Value, 'DEVSign2': DEVSign2Value, 'TLSign2': TLSign2Value, 'AppsApproverSign2': AppsApproverSign2Value, 'PackageLocation': PackageLocationValue, 'ScreenShotLocation': ScreenShotLocationValue, 'LockedDateTime': LockedDateTimeValue, 'Status': StatusValue, 'Description': DescriptionValue, 'TestCycle': TestCycleValue, 'EnteredBy': EnteredByValue, 'FSLocation': FSLocationValue, 'Comment': CommentValue, 'row_id': row_idValue, 'TrainerName': TrainerNameValue, 'PlantContact': PlantContactValue, 'TechSpecLocation': TechSpecLocationValue, 'TestScriptLocation': TestScriptLocationValue, 'PRODDeployDate': PRODDeployDateValue, 'ControlsAnalyst': ControlsAnalystValue, 'DeployStatus': DeployStatusValue, 'DeployPlants': DeployPlantsValue, 'Updates': UpdatesValue, 'AssignedTo': AssignedToValue, 'ProjectIDRelease': ProjectIDReleaseValue};
                
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addChangeMgmt/";
                //console.log(url);

                var req = {
                    method: 'PUT',
                    url: url,
                    data: objectToSerialize
                }


                console.log("making api call url add change");
                //console.log($http(req));
                return $http(req);


            },
            deleteChangeMgmt: function (objarray) {
                var jsonData = angular.toJson(objarray);
                var objectToSerialize = { 'object': jsonData };
                console.log(objectToSerialize);
                //console.log("Delete Row")
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/deleteChangeMgmt";
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