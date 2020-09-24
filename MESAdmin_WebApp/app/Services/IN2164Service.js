(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('IN2164Service', ['$rootScope', '$http', function ($rootScope, $http) {

            return {

                getIN2164PO: function () {

                    console.log("ProductionOrder list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getIN2164PO/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for IN2164");

                    return $http(req);
                },


                getIN2164BOMItem: function (poid) {

                    console.log("BOMItem list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getIN2164BOMItem/" + poid;

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for IN2164");

                    return $http(req);
                },


                getIN2164Spec: function (poid) {

                    console.log("Spec list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getIN2164Spec/" + poid;

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for IN2164");

                    return $http(req);
                },

                addIN2164PO: function (
                    ProductionOrder_IdValue,
                    ProductionOrderNumberValue,
                    MaterialNumberValue,
                    TotalQuantityValue,
                    ScheduledStartTimeValue,
                    ScheduledEndTimeValue,
                    StorageLocationReceiptValue,
                    FatProtRatioValue,
                    MilkProteinValue,
                    MilkFatValue,
                    RetFactorValue,
                    MoistureValue,
                    SaltValue,
                    FatValue,
                    pHValue,
                    SetPHValue,
                    NumVatsValue) {
                   
                    var objectToSerialize = {
                        'ProductionOrder_IdValue': ProductionOrder_IdValue,
                        'ProductionOrderNumberValue': ProductionOrderNumberValue,
                        'MaterialNumberValue': MaterialNumberValue,
                        'TotalQuantityValue': TotalQuantityValue,
                        'ScheduledStartTimeValue': ScheduledStartTimeValue,
                        'ScheduledEndTimeValue': ScheduledEndTimeValue,
                        'StorageLocationReceiptValue': StorageLocationReceiptValue,
                        'FatProtRatioValue': FatProtRatioValue,
                        'MilkProteinValue': MilkProteinValue,
                        'MilkFatValue': MilkFatValue,
                        'RetFactorValue': RetFactorValue,
                        'MoistureValue': MoistureValue,
                        'SaltValue': SaltValue,
                        'FatValue': FatValue,
                        'pHValue': pHValue,
                        'SetPHValue': SetPHValue,
                        'NumVatsValue': NumVatsValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addIN2164PO/";
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


                addIN2164BOMItem: function (
                    BOMPositionValue,
                    ComponentMaterialValue,
                    ComponentQuantityValue,
                    OperationAssignmentValue,
                    StorageLocationValue,
                    StorageLocationDescValue,
                    RoutingOperationNumberValue,
                    OperationWorkCenterValue,
                    OperationShortTextValue,
                    CoProductFlagValue,
                    NumVesselsValue,
                    ProductionOrder_IdValue
                ) {
                   
                    var objectToSerialize = {
                        'BOMPositionValue': BOMPositionValue,
                        'ComponentMaterialValue': ComponentMaterialValue,
                        'ComponentQuantityValue': ComponentQuantityValue,
                        'OperationAssignmentValue': OperationAssignmentValue,
                        'StorageLocationValue': StorageLocationValue,
                        'StorageLocationDescValue': StorageLocationDescValue,
                        'RoutingOperationNumberValue': RoutingOperationNumberValue,
                        'OperationWorkCenterValue': OperationWorkCenterValue,
                        'OperationShortTextValue': OperationShortTextValue,
                        'CoProductFlagValue': CoProductFlagValue,
                        'NumVesselsValue': NumVesselsValue,
                        'ProductionOrder_IdValue': ProductionOrder_IdValue


                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addIN2164BOMItem/";
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
                addIN2164Spec: function (
                    NameValue,
                    ValueValue,
                    LowerValue,
                    UpperValue,
                    DOPGroupValue,
                    MaterialValue,
                    Spec_IDValue,
                    POIDSpec_IDValue

                ) {
                    
                    var objectToSerialize = {
                        'NameValue': NameValue,
                        'ValueValue': ValueValue,
                        'LowerValue': LowerValue,
                        'UpperValue': UpperValue,
                        'DOPGroupValue': DOPGroupValue,
                        'MaterialValue': MaterialValue,
                        'Spec_IDValue': Spec_IDValue,
                        'POIDSpec_IDValue': POIDSpec_IDValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addIN2164Spec/";
                    

                    var req = {
                        method: 'PUT',
                        url: url,
                        data: objectToSerialize
                    }


                    console.log("making api call url start service");
                    //console.log($http(req));
                    return $http(req);


                },


                //################################IN2165########################################
                getIN2165Insp: function () {

                    console.log("InspLot list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getIN2165Insp/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for IN2165");

                    return $http(req);
                },


                getIN2165Attribute: function (spid) {

                    console.log("IN2165 Attribute list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getIN2165Attribute/" + spid;

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for IN2165");
                    //console.log(req);
                    return $http(req);
                    
                },


                getIN2165AttributeGroup: function (spid) {

                    console.log("IN2165AttributeGroup list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getIN2165AttributeGroup/" + spid;

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for IN2165");

                    return $http(req);
                },
                
                //listArea: function (spid) {
                //    console.log(" Area Drop");
                //    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getIN2165AttributeGroup/" + spid;

                //    console.log(url);
                //    var req = {
                //        method: 'POST',
                //        url: url
                //    }
                //    console.log("making api call url for AttributeGroup Dropdown");
                //    // console.log($http(req));
                //    return $http(req);

                //},

                getINJobSchedule: function () {

                    console.log("INJobSchedule list");
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getINJobSchedule/";

                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    }


                    console.log("making api call url for IN2165");

                    return $http(req);
                },

                addIN2165Insp: function (
                    Specification_IdValue,
                    SpecificationNameValue,
                    SpecificationDescValue,
                    ProductionOrderValue,
                    InspectionLotValue
                    ) {

                    var objectToSerialize = {
                        'Specification_IdValue': Specification_IdValue,
                        'SpecificationNameValue': SpecificationNameValue,
                        'SpecificationDescValue': SpecificationDescValue,
                        'ProductionOrderValue': ProductionOrderValue,
                        'InspectionLotValue': InspectionLotValue

                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addIN2165Insp/";
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


                addIN2165Attribute: function (
                    AttributeNameValue,
                    AttributeTitleValue,
                    AttributeGroupValue,
                    AttributeRankValue,
                    EntryLabelGroupValue,
                    AnalysisNameValue,
                    TestRequiredValue,
                    LimitsUOMValue,
                    USLValue,
                    TargetValue,
                    LSLValue,
                    Spare1Value,
                    Spare2Value,
                    Spare3Value,
                    Spare4Value,
                    SaveReasonCodesValue,
                    OperationValue,
                    OperationWorkCenterValue,
                    DisplayDigitsValue,
                    ConfirmationNumberValue,
                    RecordingTypeValue,
                    AutoSaveValue,
                    Specification_IDValue
                ) {

                    var objectToSerialize = {
                        'AttributeNameValue': AttributeNameValue,
                        'AttributeTitleValue': AttributeTitleValue,
                        'AttributeGroupValue': AttributeGroupValue,
                        'AttributeRankValue': AttributeRankValue,
                        'EntryLabelGroupValue': EntryLabelGroupValue,
                        'AnalysisNameValue': AnalysisNameValue,
                        'TestRequiredValue': TestRequiredValue,
                        'LimitsUOMValue': LimitsUOMValue,
                        'USLValue': USLValue,
                        'TargetValue': TargetValue,
                        'LSLValue': LSLValue,
                        'Spare1Value': Spare1Value,
                        'Spare2Value': Spare2Value,
                        'Spare3Value': Spare3Value,
                        'Spare4Value': Spare4Value,
                        'SaveReasonCodesValue': SaveReasonCodesValue,
                        'OperationValue': OperationValue,
                        'OperationWorkCenterValue': OperationWorkCenterValue,
                        'DisplayDigitsValue': DisplayDigitsValue,
                        'ConfirmationNumberValue': ConfirmationNumberValue,
                        'RecordingTypeValue': RecordingTypeValue,
                        'AutoSaveValue': AutoSaveValue,
                        'Specification_IDValue':  Specification_IDValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addIN2165Attribute/";
                    //console.log(url);

                    var req = {
                        method: 'PUT',
                        url: url,
                        data: objectToSerialize
                    }


                    console.log("making api call url start service");
                    return $http(req);


                },
                addIN2165AttributeGroup: function (
                    AttributeGroupNameValue,
                    AttributeGroupDescriptionValue,
                    AutoGenerateSampleIDValue,
                    Specification_IdValue

                ) {

                    var objectToSerialize = {
                        'AttributeGroupNameValue': AttributeGroupNameValue,
                        'AttributeGroupDescriptionValue': AttributeGroupDescriptionValue,
                        'AutoGenerateSampleIDValue': AutoGenerateSampleIDValue,
                        'Specification_IdValue': Specification_IdValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addIN2165AttributeGroup/";


                    var req = {
                        method: 'PUT',
                        url: url,
                        data: objectToSerialize
                    }


                    console.log("making api call url start service");
                    //console.log($http(req));
                    return $http(req);


                },
                addINJobSchedule: function (
                    RowIDValue,
                    ProductionOrderValue,
                    InspectionLotValue,
                    SpecIDValue,
                    POIDValue,
                    IN2164_StatusValue,
                    IN2165_StatusValue,
                    StartDateValue,
                    EndDateValue

                ) {

                    var objectToSerialize = {
                        'RowIDValue': RowIDValue,
                        'ProductionOrderValue': ProductionOrderValue,
                        'InspectionLotValue': InspectionLotValue,
                        'SpecIDValue': SpecIDValue,
                        'POIDValue': POIDValue,
                        'IN2164_StatusValue': IN2164_StatusValue,
                        'IN2165_StatusValue': IN2165_StatusValue,
                        'StartDateValue': StartDateValue,
                        'EndDateValue':EndDateValue
                    };
                    var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/addINJobSchedule/";


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