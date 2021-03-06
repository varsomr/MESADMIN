(function () {
    //  'use strict';

    angular
        .module('myApp')
        .service('LRWService', ['$rootScope', '$http', function ($rootScope, $http) {

            return {

                
                
                getVatMakeRpt: function (LineNumber, ProductionOrder, ProductCode, StartDate, EndDate) {

                    console.log("Vat Make LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getVatMakeRpt/" + LineNumber + "/" + ProductionOrder + "/" + ProductCode + "/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                getVatMakeParam: function (StartDate, EndDate) {

                    console.log("Vat Make Params LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getVatMakeParam/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);

                },

                getFinishRpt: function (LineNumber, ProductionOrder, ProductCode, StartDate, EndDate) {

                    console.log("Finish Rpt LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getFinishRpt/" + LineNumber + "/" + ProductionOrder + "/" + ProductCode + "/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                getFinishParam: function (StartDate, EndDate) {

                    console.log("Finish Rpt Params LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getFinishParam/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getFinishRptComments: function (StartDate, EndDate, LineNumber, ProductionOrder, ProductCode) {

                    console.log("Finish Rpt comments LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getFinishRptComments/" + "/" + StartDate + "/" + EndDate + "/" + LineNumber + "/" + ProductionOrder + "/" + ProductCode  + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getMilkPreRpt: function (StartDate, EndDate) {

                    console.log("Milk Prescreen LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getMilkPreRpt/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                 
                },


                getOtherDairyrc: function (StartDate, EndDate) {

                    console.log("Other Dairy Liquid receipt LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getOtherDairyrc/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getOtherDairyldo: function (StartDate, EndDate) {

                    console.log("Other Dairy Liquid Load out LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getOtherDairyldo/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getKPIMultiDt: function (ReportName, DateStart, DateEnd, RD3, RD4, RD5, RD6) {

                    console.log("KPI Multi Data");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getKPIMultiDt/" + ReportName + "/" + DateStart + "/" + DateEnd + "/" + RD3 + "/" + RD4 + "/" + RD5 + "/" + RD6 + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getKPISingleDt: function (ReportName, DateStart, DateEnd, RD3, RD4, RD5, RD6) {

                    console.log("KPI Single Data");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getKPISingleDt/" + ReportName + "/" + DateStart + "/" + DateEnd + "/" + RD3 + "/" + RD4 + "/" + RD5 + "/" + RD6 + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getVatMakeRptComments: function (StartDate, EndDate, ProductCode, LineNumber) {

                    console.log("Vat Make LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getVatMakeRptComments/" + StartDate + "/" + EndDate + "/" + ProductCode + "/" + LineNumber + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                getMilkRec: function (StartDate, EndDate) {

                    console.log("Milk receiving LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getMilkRec/" + "/" + StartDate + "/" + EndDate + "/" ;
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                getKPIMilkRec: function (DateStart, DateEnd, SupplierID, Route_Num, Material) {

                    console.log("Milk receiving KPI LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getKPIMilkRec/" + "/" + DateStart + "/" + DateEnd + "/" + SupplierID + "/" + Route_Num + "/" + Material + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getDailySiloInv: function (ProductionDay, Silo) {

                    console.log("Daily Silo Inv LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getDailySiloInv/" + "/" + ProductionDay + "/" + Silo + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },


                getDailySiloInvSilo: function (ProductionDay) {

                    console.log("Daily Silo Inv Silo LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getDailySiloInvSilo/" + "/" + ProductionDay + "/" ;
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                getPalletRpt: function (StartProductionDate, Line, ProdCode, PType, DisplayReprints, Reason, reas_grp_desc, BulkOff_Status) {
                    console.log("Pallet report LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getPalletRpt/" + "/" + StartProductionDate + "/" + Line + "/" + ProdCode + "/" + PType + "/" + DisplayReprints + "/" + Reason + "/" + reas_grp_desc + "/" + BulkOff_Status + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                getPalletRptParam: function (StartProductionDate, PType) {
                    console.log("Pallet report Param LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getPalletRptParam/" + "/" + StartProductionDate + "/" + PType + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                getPalletRptPtypeDate: function () {
                    console.log("Pallet report PtypeDate LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getPalletRptPtypeDate/" + "/" ;
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },
                //ChseMakSuprDopRpt
                getChseMakSuprDopRpt: function (LineNumber, ProductionOrder, ProductCode, StartDate, EndDate) {

                    console.log("Cheese MK DOP ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getChseMakSuprDopRpt/" + LineNumber + "/" + ProductionOrder + "/" + ProductCode + "/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },
                //getDOPSeparatorRpt
                getDOPSeparatorRpt: function (LineNumber, ProductionOrder, ProductCode, StartDate, EndDate) {

                    console.log("Cheese MK DOP ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getDOPSeparatorRpt/" + LineNumber + "/" + ProductionOrder + "/" + ProductCode + "/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                //RecPlnRpt
                getRecPlnRpt: function (LineNumber, StartDate, EndDate, POid) {

                    console.log("RecPlnRpt ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getRecPlnRpt/" + LineNumber + "/" + StartDate + "/" + EndDate + "/" + POid + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },
                //DOP String Cheese Rpt
                getDOPStrChseRpt: function (LineNumber, ProductionOrder, ProductCode, StartDate, EndDate) {

                    console.log("DOP string Cheese ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getDOPStrChseRpt/" + LineNumber + "/" + ProductionOrder + "/" + ProductCode + "/" + StartDate + "/" + EndDate + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                //getChseAnalysisRpt
                getChseAnalysisRpt: function (LineNumber, StartDate, EndDate, ProductionOrder, Material, Inspection_Type){

                    console.log("getChseAnalysisRpt ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getChseAnalysisRpt/" + LineNumber + "/" + StartDate + "/" + EndDate + "/" + ProductionOrder + "/" + Material + "/" + Inspection_Type + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },
                //getChseAnalysisRpt
                getPowderBlndRpt: function (LineNumber, StartDate, EndDate, ProductionOrder) {

                    console.log("PowderBlndRpt ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getPowderBlndRpt/" + LineNumber + "/" + StartDate + "/" + EndDate + "/" + ProductionOrder + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },
                //getChseAnalysisRpt
                getPowderBlndTotalRpt: function (LineNumber, StartDate, EndDate, ProductionOrder) {

                    console.log("PowderBlndTotalRpt ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getPowderBlndTotalRpt/" + LineNumber + "/" + StartDate + "/" + EndDate + "/" + ProductionOrder + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                 //RetentateDOPRpt
                getRetentateDOPRpt: function (ProductionOrder) {

                    console.log("DOP Retentate LRS ");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getRetentateDOPRpt/" +  ProductionOrder + "/";
                    console.log(url);
                    var req = {
                               method: 'GET',
                               url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },

                 //Service call for menu builder
                getMasterMenu: function () {
                    console.log("Loading Menus");
                    var url = window.location.protocol + "//" + window.location.hostname + ":1630/api/Message/getMasterMenu/" + "/";
                    console.log(url);
                    var req = {
                        method: 'GET',
                        url: url
                    };
                    console.log("making api call url for Support");

                    return $http(req);
                },
            };


        }]);



})();