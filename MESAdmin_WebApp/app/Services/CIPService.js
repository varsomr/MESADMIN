(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('CIPService', ['$rootScope', '$http', function ($rootScope, $http) {

            return {

                //getCIPTITRSETUP: function (plant, majorgroup) {

                //    console.log("CIP Titration list ");
                //    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPTITRSETUP/" + plant + "/" + majorgroup + "/";

                //    console.log(url);
                //    var req = {
                //        method: 'GET',
                //        url: url
                //    }
                //    console.log("making api call url for Support");
                //    return $http(req);
                //},

                getCIPTITRSETUP: function (plant, majorgroup, majorgroup1, majorgroup2) {

                    console.log("CIP Titration list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPTITRSETUP/" + plant + "/" + majorgroup + "/" + majorgroup1 + "/" + majorgroup2 + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }
                    console.log("making api call url for Support");

                    return $http(req);
                },


                addCIPTITRSETUP: function (PlantValue,
                    titrationsValue,
                    SkidDescValue,
                    chemicaltypeValue,
                    unitsTValue,
                    enabledTValue,
                    maxTValue,
                    minTValue,
                    TitrationKeyValue,
                    ActionValue) {
                    console.log("Add New CIP")
                    var objectToSerialize = {

                        'PlantValue': PlantValue,
                        'titrationsValue': titrationsValue,
                        'SkidDescValue': SkidDescValue,
                        'chemicaltypeValue': chemicaltypeValue,
                        'unitsTValue': unitsTValue,
                        'enabledTValue': enabledTValue,
                        'maxTValue': maxTValue,
                        'minTValue': minTValue,
                        'TitrationKeyValue': TitrationKeyValue,
                        'ActionValue': ActionValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addCIPTITRSETUP/";
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

                getCIPCHEMENTRY: function (plant, majorgroup) {

                    console.log("CIP CHEM ENTRY list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPCHEMENTRY/" + plant + "/" + majorgroup + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addCIPCHEMENTRY: function (PlantValue, ChemicalNameValue, ChemicalTypeKeyValue, ChemicalCostValue, ChemicalCostEUKeyValue, ChemicalKeyValue, ActionValue) {
                    console.log("Add New CIP CHEMENTRY")
                    var objectToSerialize = {
                        'PlantValue': PlantValue,
                        'ChemicalNameValue': ChemicalNameValue,
                        'ChemicalTypeKeyValue': ChemicalTypeKeyValue,
                        'ChemicalCostValue': ChemicalCostValue,
                        'ChemicalCostEUKeyValue': ChemicalCostEUKeyValue,
                        'ChemicalKeyValue': ChemicalKeyValue,
                        'ActionValue': ActionValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addCIPCHEMENTRY/";
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

                getCIPMANTEMP: function (plant, majorgroup, majorgroup1) {

                    console.log("CIP MAN TEMP list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPMANTEMP/" + plant + "/" + majorgroup + "/" + majorgroup1 + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addCIPMANTEMP: function (PlantValue, UnitDescValue, UnitValueValue, TimestampValue, ActionValue) {
                    console.log("Add New CIP MANUAL TEMP")
                    var objectToSerialize = {
                        'PlantValue': PlantValue,
                        'UnitDescValue': UnitDescValue,
                        'UnitValueValue': UnitValueValue,
                        'TimestampValue': TimestampValue,
                        'ActionValue': ActionValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addCIPMANTEMP/";
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
                listCircuit: function (plant) {
                    console.log(" Circuit Drop");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/listCircuit/" + plant;
                    console.log(url);
                    var req = {
                        method: 'POST',
                        url: url
                    }
                    console.log("making api call url for Circuit Dropdown");
                    return $http(req);

                },

                listChemical: function (plant, chemical) {
                    console.log(" Chemical Drop");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/listChemical/" + plant + "/" + chemical + "/";
                    console.log(url);
                    var req = {
                        method: 'POST',
                        url: url
                    }
                    console.log("making api call url for Chemical Dropdown");
                    return $http(req);

                },
                listMTempUnitsList: function (plant) {
                    console.log(" MTempUnitsList Drop");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/listMTempUnitsList/" + plant + "/";
                    console.log(url);
                    var req = {
                        method: 'POST',
                        url: url
                    }
                    console.log("making api call url for MTempUnitsList Dropdown");
                    return $http(req);

                },

                //listUserRole: function (plant,uname) {
                //    console.log(" get user role");
                //    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPLogin/" + plant + "/" + uname + "/";
                //    console.log(url);
                //    var req = {
                //        method: 'POST',
                //        url: url
                //    }
                //    console.log("making api call url for the User's ROLE");
                //    return $http(req);

                //},


                getCIPReviewEntry: function (plant, washkey, majorgroup) {

                    console.log("CIP ReviewEntry list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPReviewEntry/" + plant + "/" + washkey + "/" + majorgroup + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },
                listUserRole: function (plant, uname) {

                    console.log("CIP user Role");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPLogin/" + plant + "/" + uname + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for user roles");

                    return $http(req);
                },


                addCIPReviewEntry: function (PlantValue, ReviewKeyValue, WashKeyValue, ReviewNameValue, ReviewCommentValue, ReviewReasonValue, ActionValue) {
                    console.log("Add New CIP Review Entry")
                    var objectToSerialize = {
                        'PlantValue': PlantValue,
                        'ReviewKeyValue': ReviewKeyValue,
                        'WashKeyValue': WashKeyValue,
                        'ReviewNameValue': ReviewNameValue,
                        'ReviewCommentValue': ReviewCommentValue,
                        'ReviewReasonValue': ReviewReasonValue,
                        'ActionValue': ActionValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addCIPReviewEntry/";
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

                getCIPVerifyDataEntry: function (plant, washkey, majorgroup) {

                    console.log("CIP VerifyDataEntry list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPVerifyDataEntry/" + plant + "/" + washkey + "/" + majorgroup + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addCIPVerifyDataEntry: function (PlantValue, VerifyKeyValue, WashKeyValue, VerifyNameValue, VerifyCommentValue, VerifyReasonValue, ActionValue) {
                    console.log("Add New CIP Review Entry")
                    var objectToSerialize = {
                        'PlantValue': PlantValue,
                        'VerifyKeyValue': VerifyKeyValue,
                        'WashKeyValue': WashKeyValue,
                        'VerifyNameValue': VerifyNameValue,
                        'VerifyCommentValue': VerifyCommentValue,
                        'VerifyReasonValue': VerifyReasonValue,
                        'ActionValue': ActionValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addCIPVerifyDataEntry/";
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



                getCIPNotes: function (plant, washkey, majorgroup) {

                    console.log("CIP Notes list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPNotes/" + plant + "/" + washkey + "/" + majorgroup + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addCIPNotes: function (PlantValue, NotesKeyValue, WashKeyValue, NotesNameValue, NotesCommentValue, NotesTimeValue, ActionValue) {
                    console.log("Add New CIP Notes Entry")
                    var objectToSerialize = {
                        'PlantValue': PlantValue,
                        'NotesKeyValue': NotesKeyValue,
                        'WashKeyValue': WashKeyValue,
                        'NotesNameValue': NotesNameValue,
                        'NotesCommentValue': NotesCommentValue,
                        'NotesTimeValue': NotesTimeValue,
                        'ActionValue': ActionValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addCIPNotes/";

                    var req = {
                        method: 'PUT',
                        url: url,
                        data: objectToSerialize
                    };


                    console.log("making api call url start service");
                    return $http(req);


                },







                getCIPPCQI: function (plant, washkey, majorgroup) {

                    console.log("CIP PCQI list ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getCIPPCQI/" + plant + "/" + washkey + "/" + majorgroup + "/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };


                    console.log("making api call url for Support");

                    return $http(req);
                },


                addCIPPCQI: function (PlantValue, PCQIKeyValue, PCQIWashKeyValue, PCQINameValue, PCQICommentValue, PCQITimeValue, PCQIActionValue, PCQIStatusValue, PCQIWashConcateValue) {
                    console.log("Add New CIP PCQI Entry")
                    var objectToSerialize = {
                        'PlantValue': PlantValue,
                        'PCQIKeyValue': PCQIKeyValue,
                        'PCQIWashKeyValue': PCQIWashKeyValue,
                        'PCQINameValue': PCQINameValue,
                        'PCQICommentValue': PCQICommentValue,
                        'PCQITimeValue': PCQITimeValue,
                        'PCQIActionValue': PCQIActionValue,
                        'PCQIStatusValue': PCQIStatusValue,
                        'PCQIWashConcateValue': PCQIWashConcateValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addCIPPCQI/";

                    var req = {
                        method: 'PUT',
                        url: url,
                        data: objectToSerialize
                    };


                    console.log("making api call url start service");
                    return $http(req);


                }




            };




        }]);





})();