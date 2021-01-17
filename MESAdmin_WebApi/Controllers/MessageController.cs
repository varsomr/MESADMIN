using BLL;
using BO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using static BLL.MessageGenerator;

namespace Leprino_Integration_Tool.Controllers
{
    public class MessageController : ApiController
    {
        //Menu Builder API Call details
        [Route("api/Message/getMasterMenu")]
        public MasterMenuCollection getMasterMenu()
        {
            MasterMenuGenerator vm = new MasterMenuGenerator();
            return vm.GetMasterMenuCollections();
        }

        // GET: api/Message
        [Route("api/Message/getprojects/{handle}/{sql}")]
        public ProjectCollection Get(string handle, string sql) //MessageCollection<List> 
        {
            MessageGenerator mg = new MessageGenerator();
            return mg.GetCollection(handle, sql);
        }
        //SELECTION


        [Route("api/Message/getKPIMultiDt/{ReportName}/{DateStart}/{DateEnd}/{RD3}/{RD4}/{RD5}/{RD6}")]
        public KPIMultiDtCollection getKPIMultiDt(string ReportName, string DateStart, string DateEnd, string RD3, string RD4, string RD5, string RD6)
        {

            KPIMultiDtGenerator vm = new KPIMultiDtGenerator();
            return vm.GetKPIMultiDtCollection(ReportName, DateStart, DateEnd, RD3, RD4, RD5, RD6);
        }

                     
        [Route("api/Message/getKPISingleDt/{ReportName}/{DateStart}/{DateEnd}/{RD3}/{RD4}/{RD5}/{RD6}")]
        public KPISingleDtCollection getKPISingleDt(string ReportName, string DateStart, string DateEnd, string RD3, string RD4, string RD5, string RD6)
        {

            KPISingleDtGenerator vm = new KPISingleDtGenerator();
            return vm.GetKPISingleDtCollection(ReportName, DateStart, DateEnd, RD3, RD4, RD5, RD6);
        }




        [Route("api/Message/getVatMakeRpt/{LineNumber}/{ProductionOrder}/{ProductCode}/{StartDate}/{EndDate}")]
        public VatMakeRptCollection getVatMakeRpt(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {

            VatMakeRptGenerator vm = new VatMakeRptGenerator();
            return vm.GetVatMakeRptCollection(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate);
        }


        [Route("api/Message/getVatMakeParam/{StartDate}/{EndDate}")]
        public VatMakeRptParamCollection getVatMakeParam(string StartDate, string EndDate)
        {

            VatMakeParamGenerator vm = new VatMakeParamGenerator();
            return vm.GetVatMakeRptCollection(StartDate, EndDate);
        }


        [Route("api/Message/getFinishRpt/{LineNumber}/{ProductionOrder}/{ProductCode}/{StartDate}/{EndDate}")]
        public FinishRptCollection getFinishRpt(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {

            FinishRptGenerator vm = new FinishRptGenerator();
            return vm.GetFinishRptCollection(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate);
        }


        [Route("api/Message/getFinishParam/{StartDate}/{EndDate}")]
        public FinishRptParamCollection getFinishParam(string StartDate, string EndDate)
        {

            FinishParamGenerator vm = new FinishParamGenerator();
            return vm.GetFinishRptCollection(StartDate, EndDate);
        }

        [Route("api/Message/getOtherDairyrc/{StartDate}/{EndDate}")]
        public OtherDairyrcCollection getOtherDairyrc(string StartDate, string EndDate)
        {

            OtherDairyrcGenerator vm = new OtherDairyrcGenerator();
            return vm.GetOtherDairyrcCollection(StartDate, EndDate);
        }

        [Route("api/Message/getOtherDairyldo/{StartDate}/{EndDate}")]
        public OtherDairyldoCollection getOtherDairyldo(string StartDate, string EndDate)
        {

            OtherDairyldoGenerator vm = new OtherDairyldoGenerator();
            return vm.GetOtherDairyldoCollection(StartDate, EndDate);
        }


        [Route("api/Message/getFinishRptComments/{StartDate}/{EndDate}/{LineNumber}/{ProductionOrder}/{ProductCode}")]
        public FinishRptCommentsCollection getFinishRptComments(string StartDate, string EndDate, string LineNumber, string ProductionOrder, string ProductCode)
        {

            FinishRptCommentsGenerator vm = new FinishRptCommentsGenerator();
            return vm.GetFinishRptCommentsCollection(StartDate, EndDate, LineNumber, ProductionOrder, ProductCode);
        }

        [Route("api/Message/getMilkPreRpt/{StartDate}/{EndDate}")]
        public MilkPreCollection getMilkPreRpt(string StartDate, string EndDate)
        {

            MilkPreGenerator vm = new MilkPreGenerator();
            return vm.GetMilkPreCollection(StartDate, EndDate);
        }


        [Route("api/Message/getVatMakeRptComments/{StartDate}/{EndDate}/{ProductCode}/{LineNumber}")]
        public VatMakeRptCommentsCollection getVatMakeRptComments(string StartDate, string EndDate, string ProductCode, string LineNumber)
        {

            VatMakeRptCommentsGenerator vm = new VatMakeRptCommentsGenerator();
            return vm.GetVatMakeRptCommentsCollection(StartDate, EndDate, ProductCode, LineNumber);
        }

        [Route("api/Message/getMilkRec/{StartDate}/{EndDate}")]
        public MilkReceivingLoadDetailCollection getMilkRec(string StartDate, string EndDate)
        {

            MilkRecGenerator vm = new MilkRecGenerator();
            return vm.GetMilkReceivingLoadDetailCollection(StartDate, EndDate);
        }


        [Route("api/Message/getKPIMilkRec/{DateStart}/{DateEnd}/{SupplierID}/{Route_Num}/{Material}")]
        public KPIMilkReceivingCollection getKPIMilkRec(string DateStart, string DateEnd, string SupplierID, string Route_Num, string Material)
        {

            KPIMilkRecGenerator vm = new KPIMilkRecGenerator();
            return vm.GetKPIMilkReceivingCollection(DateStart, DateEnd, SupplierID, Route_Num, Material);
        }


        [Route("api/Message/getDailySiloInv/{ProductionDay}/{Silo}")]
        public DailySiloInvCollection getDailySiloInv(string ProductionDay, string Silo)
        {

            DailySiloInvGenerator vm = new DailySiloInvGenerator();
            return vm.GetDailySiloInvCollection(ProductionDay, Silo);
        }

        [Route("api/Message/getDailySiloInvSilo/{ProductionDay}")]
        public DailySiloInvSiloCollection getDailySiloInvSilo(string ProductionDay)
        {

            DailySiloInvSiloGenerator vm = new DailySiloInvSiloGenerator();
            return vm.GetDailySiloInvSiloCollection(ProductionDay);
        }



        [Route("api/Message/getPalletRpt/{StartProductionDate}/{Line}/{ProdCode}/{PType}/{DisplayReprints}/{Reason}/{reas_grp_desc}/{BulkOff_Status}")]
        public PalletRptCollection getPalletRpt(string StartProductionDate, string Line, string ProdCode, string PType, string DisplayReprints, string Reason, string reas_grp_desc, string BulkOff_Status)
        {

            PalletRptGenerator vm = new PalletRptGenerator();
            return vm.GetPalletRptCollection(StartProductionDate, Line, ProdCode, PType, DisplayReprints, Reason, reas_grp_desc, BulkOff_Status);
        }

        

        [Route("api/Message/getPalletRptParam/{StartProductionDate}/{PType}")]
        public PalletRptParamCollection getPalletRptParam(string StartProductionDate, string PType)
        {

            PalletRptParamGenerator vm = new PalletRptParamGenerator();
            return vm.GetPalletRptParamCollection(StartProductionDate, PType);
        }


        [Route("api/Message/getPalletRptPtypeDate")]
        public PalletRptPtypeDatesCollection getPalletRptPtypeDate()
        {

            PalletRptPtypeDatesGenerator vm = new PalletRptPtypeDatesGenerator();
            return vm.GetPalletRptPtypeDatesCollection();
        }



        [Route("api/Message/getChseMakSuprDopRpt/{LineNumber}/{ProductionOrder}/{ProductCode}/{StartDate}/{EndDate}")]
        public ChseMakSuprDopRptCollection getChseMakSuprDopRpt(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {

            ChseMakSuprDopRptGenerator cm = new ChseMakSuprDopRptGenerator();
            return cm.GetChseMakSuprDopRptCollection(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate);
        }
        [Route("api/Message/getDOPSeparatorRpt/{LineNumber}/{ProductionOrder}/{ProductCode}/{StartDate}/{EndDate}")]
        public DOPSeparatorRptCollection getDOPSeparatorRpt(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {

            DOPSeparatorRptGenerator cm = new DOPSeparatorRptGenerator();
            return cm.GetDOPSeparatorRptCollection(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate);
        }
        [Route("api/Message/getRecPlnRpt/{LineNumber}/{StartDate}/{EndDate}/{POid}")]
        public RecPlnRptCollection getRecPlnRpt(string LineNumber, string StartDate, string EndDate, string POid)
        {

            RecPlnRptGenerator cm = new RecPlnRptGenerator();
            return cm.GetRecPlnRptCollection(LineNumber, StartDate, EndDate, POid);
        }
        [Route("api/Message/getDOPStrChseRpt/{LineNumber}/{ProductionOrder}/{ProductCode}/{StartDate}/{EndDate}")]
        public DOPStrChseRptCollection getDOPStrChseRpt(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {

            DOPStrChseRptGenerator dm = new DOPStrChseRptGenerator();
            return dm.GetDOPStrChseRptCollection(LineNumber, ProductionOrder, ProductCode, StartDate, EndDate);
        }
        [Route("api/Message/getChseAnalysisRpt/{LineNumber}/{StartDate}/{EndDate}/{ProductionOrder}/{Material}/{Inspection_Type}")]
        public ChseAnalysisRptCollection getChseAnalysisRpt(string LineNumber, string StartDate, string EndDate, string ProductionOrder, string Material, string Inspection_Type)
        {

            ChseAnalysisRptGenerator cr = new ChseAnalysisRptGenerator();
            return cr.GetChseAnalysisRptCollection(LineNumber, StartDate, EndDate, ProductionOrder, Material, Inspection_Type);
        }        
        [Route("api/Message/getPowderBlndRpt/{LineNumber}/{StartDate}/{EndDate}/{ProductionOrder}")]
        public PowderBlndRptCollection getPowderBlndRpt(string LineNumber, string StartDate, string EndDate, string ProductionOrder)
        {

            PowderBlndRptGenerator po = new PowderBlndRptGenerator();
            return po.GetPowderBlndRptCollection(LineNumber, StartDate, EndDate, ProductionOrder);
        }
        [Route("api/Message/getPowderBlndTotalRpt/{LineNumber}/{StartDate}/{EndDate}/{ProductionOrder}")]
        public PowderBlndTotalRptCollection getPowderBlndTotalRpt(string LineNumber, string StartDate, string EndDate, string ProductionOrder)
        {

            PowderBlndTotalRptGenerator po = new PowderBlndTotalRptGenerator();
            return po.GetPowderBlndTotalRptCollection(LineNumber, StartDate, EndDate, ProductionOrder);
        }

        [Route("api/Message/getRetentateDOPRpt/{ProductionOrder}")]
        public RetentateDOPRptCollection getRetentateDOPRpt(string ProductionOrder)
        {

            RetentateDOPRptGenerator rdp = new RetentateDOPRptGenerator();
            return rdp.GetRetentateDOPRptCollection(ProductionOrder);
        }

        // getTasks: api/Message
        [Route("api/Message/getTasks")]
        public TasksCollection getTasks() //MessageCollection<List> 
        {
            MessageGenerator mg = new MessageGenerator();
            return mg.GetTaskCollection();
        }

        [Route("api/Message/getService")]
        public ServicesCollection getService() //MessageCollection<List> 
        {
            ServicesGenerator sg = new ServicesGenerator();
            return sg.GetServicesCollection();
        }

        [Route("api/Message/getRptDriver/{id}")]
        public RptDriverCollection getRptDriver(string id) //MessageCollection<List> 
        {

            RptDriverGenerator rg = new RptDriverGenerator();
            return rg.GetRptDriverCollection(id);
        }

        //[Route("api/Message/getCasesValidation/{id}")]
        //public CasesValidationCollection getCasesValidation(string id) //MessageCollection<List> 
        //{

        //    CasesValidationGenerator rg = new CasesValidationGenerator();
        //    return rg.GetCasesValidationCollection(id);
        //}

        [Route("api/Message/getCasesValidationL/{id}/{Area}")]
        public CasesValidationCollectionL getCasesValidationL(string id, string Area) //MessageCollection<List> 
        {

            CasesValidationGeneratorL rg = new CasesValidationGeneratorL();
            return rg.GetCasesValidationCollectionL(id, Area);
        }

        [Route("api/Message/getProduction/{id}/{wo_id}")]
        public ProductionCollection getProduction(string id, string wo_id) //MessageCollection<List> 
        {

            ProductionGenerator rg = new ProductionGenerator();
            return rg.GetProductionCollection(id, wo_id);
        }

        [Route("api/Message/getTicket/{wo_id}")]
        public TicketCollection getTicket(string wo_id) //MessageCollection<List> 
        {

            TicketGenerator rg = new TicketGenerator();
            return rg.GetTicketCollection(wo_id);
        }

        [Route("api/Message/getConsumption/{id}/{wo_id}")]
        public ConsumptionCollection getConsumption(string id, string wo_id) //MessageCollection<List> 
        {

            ConsumptionGenerator rg = new ConsumptionGenerator();
            return rg.GetConsumptionCollection(id, wo_id);
        }

        [Route("api/Message/getProcessDoc")]
        public ProcessDocCollection getProcessDoc() //MessageCollection<List> 
        {

            ProcessDocGenerator rg = new ProcessDocGenerator();
            return rg.GetProcessDocCollection();
        }

        [Route("api/Message/getIN2164PO")]
        public IN2164POCollection getIN2164PO() //MessageCollection<List> 
        {

            IN2164POGenerator rg = new IN2164POGenerator();
            return rg.GetIN2164POCollection();
        }

        [Route("api/Message/getIN2164BOMItem/{poid}")]
        public IN2164BOMItemCollection getIN2164BOMItem(string poid) //MessageCollection<List> 
        {

            IN2164BOMItemGenerator rg = new IN2164BOMItemGenerator();
            return rg.GetIN2164BOMItemCollection(poid);
        }





        [Route("api/Message/getIN2165Insp")]
        public IN2165InspCollection getIN2165Insp() //MessageCollection<List> 
        {

            IN2165InspGenerator rg = new IN2165InspGenerator();
            return rg.GetIN2165InspCollection();
        }


        [Route("api/Message/getIN2165Attribute/{spid}")]
        public IN2165AttributeCollection getIN2165Attribute(string spid) //MessageCollection<List> 
        {

            IN2165AttributeGenerator rg = new IN2165AttributeGenerator();
            return rg.GetIN2165AttributeCollection(spid);
        }

        [Route("api/Message/getIN2165AttributeGroup/{spid}")]
        public IN2165AttributeGroupCollection getIN2165AttributeGroup(string spid) //MessageCollection<List> 
        {

            IN2165AttributeGroupGenerator rg = new IN2165AttributeGroupGenerator();
            return rg.GetIN2165AttributeGroupCollection(spid);
        }





        [Route("api/Message/getIN2164Spec/{poid}")]
        public IN2164SpecCollection getIN2164Spec(string poid)
        {

            IN2164SpecGenerator rg = new IN2164SpecGenerator();
            return rg.GetIN2164SpecCollection(poid);
        }





        [Route("api/Message/getINJobSchedule")]
        public INJobScheduleCollection getINJobSchedule()
        {

            INJobScheduleGenerator rg = new INJobScheduleGenerator();
            return rg.GetINJobScheduleCollection();
        }


        [Route("api/Message/getChkDOP/{id}/{wo_id}")]
        public ChkDOPCollection getChkDOP(string id, string wo_id)
        {

            ChkDOPGenerator rg = new ChkDOPGenerator();
            return rg.GetChkDOPCollection(id, wo_id);
        }

        [Route("api/Message/getChkWebSpec/{id}/{wo_id}")]
        public ChkWebSpecCollection getChkWebSpec(string id, string wo_id) //MessageCollection<List> 
        {

            ChkWebSpecGenerator rg = new ChkWebSpecGenerator();
            return rg.GetChkWebSpecCollection(id, wo_id);
        }

        [Route("api/Message/getChkHistorian/{id}/{wo_id}")]
        public ChkHistorianCollection getChkHistorian(string id, string wo_id) //MessageCollection<List> 
        {

            ChkHistorianGenerator rg = new ChkHistorianGenerator();
            return rg.GetChkHistorianCollection(id, wo_id);
        }

        [Route("api/Message/getChkIN2175/{id}/{wo_id}")]
        public ChkIN2175Collection getChkIN2175(string id, string wo_id) //MessageCollection<List> 
        {

            ChkIN2175Generator rg = new ChkIN2175Generator();
            return rg.GetChkIN2175Collection(id, wo_id);
        }


        [Route("api/Message/getSiloINV/{id}/{wo_id}")]
        public SiloINVCollection getSiloINV(string id, string wo_id) //MessageCollection<List> 
        {

            SiloINVGenerator rg = new SiloINVGenerator();
            return rg.GetSiloINVCollection(id, wo_id);
        }
        [Route("api/Message/getTruck/{id}/{wo_id}")]
        public TruckCollection getTruck(string id, string wo_id) //MessageCollection<List> 
        {

            TruckGenerator rg = new TruckGenerator();
            return rg.GetTruckCollection(id, wo_id);
        }

        [Route("api/Message/getQuality/{id}/{wo_id}")]
        public QualityCollection getQuality(string id, string wo_id) //MessageCollection<List> 
        {

            QualityGenerator rg = new QualityGenerator();
            return rg.GetQualityCollection(id, wo_id);
        }

        [Route("api/Message/getProdLabel/{id}/{wo_id}")]
        public ProdLabelCollection getProdLabel(string id, string wo_id) //MessageCollection<List> 
        {

            ProdLabelGenerator rg = new ProdLabelGenerator();
            return rg.GetProdLabelCollection(id, wo_id);
        }



        [Route("api/Message/getProjectList")]
        public ProjectListCollection getProjectList() //MessageCollection<List> 
        {

            ProjectListGenerator rg = new ProjectListGenerator();
            return rg.GetProjectListCollection();
        }
        [Route("api/Message2/listProject")]
        public listProjectCollection listProject() //MessageCollection<List> 
        {

            listProjectGenerator rg = new listProjectGenerator();
            return rg.listProjectCollection();
        }

        [Route("api/Message2/listArea")]
        public listAreaCollection listArea() //MessageCollection<List> 
        {

            listAreaGenerator rg = new listAreaGenerator();
            return rg.listAreaCollection();
        }

        [Route("api/Message2/listProjectDD")]
        public listProjectDDCollection listProjectDD()
        {

            listProjectDDGenerator rg = new listProjectDDGenerator();
            return rg.listProjectDDCollection();
        }

        [Route("api/Message/getProjectRes")]
        public ProjectResCollection getProjectRes() //MessageCollection<List> 
        {

            ProjectResGenerator rg = new ProjectResGenerator();
            return rg.GetProjectResCollection();
        }
        [Route("api/Message/getDefect")]
        public DefectCollection getDefect() //MessageCollection<List> 
        {

            DefectGenerator rg = new DefectGenerator();
            return rg.GetDefectCollection();
        }
        [Route("api/Message/getEstimator")]
        public EstimatorCollection getEstimator() //MessageCollection<List> 
        {

            EstimatorGenerator rg = new EstimatorGenerator();
            return rg.GetEstimatorCollection();
        }
        [Route("api/Message/getChangeMgmt")]
        public ChangeMgmtCollection getChangeMgmt() //MessageCollection<List> 
        {

            ChangeMgmtGenerator rg = new ChangeMgmtGenerator();
            return rg.GetChangeMgmtCollection();
        }
        [Route("api/Message/getmass/{SDate}/{EDate}")]
        public ProcessingMassBalanceCollection getmass(string SDate, string EDate) //MessageCollection<List> 
        {

            ProcessingMassBalanceGenerator mass = new ProcessingMassBalanceGenerator();
            return mass.GetProcessingMassBalanceCollection(SDate, EDate);
        }

        [Route("api/Message/getmixertotalizer/{id}/{ProductionOrder}/{Line}/{ProductCode}/{SDate}/{EDate}")]
        public MixerTotalizerRptCollection getmixertotalizer(string id, string ProductionOrder, string Line, string ProductCode, string SDate, string EDate) //MessageCollection<List> 
        {

            MixerTotalizerRptGenerator mt = new MixerTotalizerRptGenerator();
            return mt.GetMixerTotalizerRptCollection(id, ProductionOrder, Line, ProductCode, SDate, EDate);
        }

        [Route("api/Message/getUtilityMetering/{id}/{majorgroup}/{date}")]
        public UtilityMeteringCollection getUtilityMetering(string id, string majorgroup, string date) //MessageCollection<List> 
        {

            UtilityMeteringGenerator um = new UtilityMeteringGenerator();
            return um.GetUtilityMeteringCollection(id, majorgroup, date);
        }

        //[Route("api/Message/getCIPTITRSETUP/{id}/{majorgroup}")]
        //public CIPTITRSETUPCollection getCIPTITRSETUP(string id, string majorgroup) //MessageCollection<List> 
        //{

        //    CIPTITRSETUPGenerator um = new CIPTITRSETUPGenerator();
        //    return um.GetCIPTITRSETUPCollection(id, majorgroup, "", "");
        //}

        [Route("api/Message/getCIPTITRSETUP/{id}/{majorgroup}/{majorgroup1}/{majorgroup2}")]
        public CIPTITRSETUPCollection getCIPTITRSETUP(string id, string majorgroup, string majorgroup1, string majorgroup2) //MessageCollection<List> 
        {

            CIPTITRSETUPGenerator um = new CIPTITRSETUPGenerator();
            return um.GetCIPTITRSETUPCollection(id, majorgroup, majorgroup1, majorgroup2);
        }

        [Route("api/Message/listCircuit/{id}")]
        public listCircuitCollection listCircuit(string id) //MessageCollection<List> 
        {

            listCircuitGenerator rg = new listCircuitGenerator();
            return rg.listCircuitCollection(id);
        }
        [Route("api/Message/listChemical/{id}/{majorgroup}")]
        public listChemicalCollection listChemical(string id, string majorgroup) //MessageCollection<List> 
        {

            listChemicalGenerator rg = new listChemicalGenerator();
            return rg.listChemicalCollection(id, majorgroup);
        }
        [Route("api/Message/listMTempUnitsList/{id}")]
        public listMTempUnitsListCollection listMTempUnitsList(string id) //MessageCollection<List> 
        {

            listMTempUnitsListGenerator rg = new listMTempUnitsListGenerator();
            return rg.listMTempUnitsListCollection(id);
        }

        [Route("api/Message/getCIPCHEMENTRY/{id}/{majorgroup}")]
        public CIPCHEMENTRYCollection getCIPCHEMENTRY(string id, string majorgroup) //MessageCollection<List> 
        {

            CIPCHEMENTRYGenerator um = new CIPCHEMENTRYGenerator();
            return um.GetCIPCHEMENTRYCollection(id, majorgroup);
        }

        [Route("api/Message/getCIPMANTEMP/{id}/{majorgroup}/{majorgroup1}")]
        public CIPMANTEMPCollection getCIPMANTEMP(string id, string majorgroup, string majorgroup1) //MessageCollection<List> 
        {

            CIPMANTEMPGenerator um = new CIPMANTEMPGenerator();
            return um.GetCIPMANTEMPCollection(id, majorgroup, majorgroup1);
        }

        [Route("api/Message/getCIPReviewEntry/{id}/{washkey}/{majorgroup}")]
        public CIPReviewEntryCollection getCIPReviewEntry(string id, string washkey, string majorgroup) //MessageCollection<List> 
        {

            CIPReviewEntryGenerator um = new CIPReviewEntryGenerator();
            return um.GetCIPReviewEntryCollection(id, washkey, majorgroup);
        }

        [Route("api/Message/getCIPVerifyDataEntry/{id}/{washkey}/{majorgroup}")]
        public CIPVerifyDataEntryCollection getCIPVerifyDataEntry(string id, string washkey, string majorgroup) //MessageCollection<List> 
        {

            CIPVerifyDataEntryGenerator um = new CIPVerifyDataEntryGenerator();
            return um.GetCIPVerifyDataEntryCollection(id, washkey, majorgroup);
        }

        [Route("api/Message/getCIPNotes/{id}/{washkey}/{majorgroup}")]
        public CIPNotesCollection getCIPNotes(string id, string washkey, string majorgroup) //MessageCollection<List> 
        {

            CIPNotesGenerator um = new CIPNotesGenerator();
            return um.GetCIPNotesCollection(id, washkey, majorgroup);
        }

        [Route("api/Message/getCIPPCQI/{id}/{washkey}/{majorgroup}")]
        public CIPPCQICollection getCIPPCQI(string id, string washkey, string majorgroup) //MessageCollection<List> 
        {

            CIPPCQIGenerator um = new CIPPCQIGenerator();
            return um.GetCIPPCQICollection(id, washkey, majorgroup);
        }

        //[Route("api/Message/getCIPLogin/{id}/{uname}")]
        //public CIPLoginCollection getCIPLogin(string id, string uname) //MessageCollection<List> 
        //{

        //    CIPLoginGenerator um = new CIPLoginGenerator();
        //    return um.GetCIPLoginCollection(id, uname);
        //}

        [Route("api/Message/getCIPLogin/{id}/{uname}")]
        public CIPLoginCollection getCIPLogin(string id, string uname) //MessageCollection<List> 
        {

            CIPLoginGenerator um = new CIPLoginGenerator();
            return um.GetCIPLoginCollection(id, uname);
        }



        [Route("api/Message/getPhageME/{majorgroup}")]
        public PhageMECollection getPhageME(string majorgroup) //MessageCollection<List> 
        {

            PhageMEGenerator um = new PhageMEGenerator();
            return um.GetPhageMECollection(majorgroup);
        }




        [HttpPut]
        [Route("api/saveProjectList")]
        public IHttpActionResult Savexml(JObject testcon)
        {
            JObject myResult = testcon;
            string id = myResult["Row_ID"].ToString();
            string colname = myResult["ColumnName"].ToString();
            string colval = myResult["ColumnValue"].ToString();

            if (id != null)
            {
                MessageGenerator mg1 = new MessageGenerator();
                mg1.saveProjectListServices(id, colname, colval);
                return Ok();
            }
            else
                return NotFound();
        }


        [HttpPut]
        [Route("api/saveMainProject")]
        public IHttpActionResult SaveProject(JObject testcon)
        {
            JObject myResult = testcon;
            string id = myResult["row_id"].ToString();
            string colname = myResult["ColumnName"].ToString();
            string colval = myResult["ColumnValue"].ToString();

            if (id != null)
            {
                MessageGenerator mg1 = new MessageGenerator();
                mg1.saveMainProject(id, colname, colval);
                return Ok();
            }
            else
                return NotFound();
        }

        [HttpPut]
        [Route("api/saveDefect")]
        public IHttpActionResult SaveDefect(JObject testcon)
        {
            JObject myResult = testcon;
            string id = myResult["row_id"].ToString();
            string colname = myResult["ColumnName"].ToString();
            string colval = myResult["ColumnValue"].ToString();

            if (id != null)
            {
                DefectGenerator mg1 = new DefectGenerator();
                mg1.saveDefect(id, colname, colval);
                return Ok();
            }
            else
                return NotFound();
        }
        [HttpPut]
        [Route("api/addMainProject")]
        //public IHttpActionResult addMainProject()
        //{
        //    MessageGenerator msg1 = new MessageGenerator();
        //    msg1.addMainProject(); 
        //    return Ok();
        //}
        public IHttpActionResult addMainProject(JObject insertcon)
        {

            JObject myResult = insertcon;
            string ProjectNameValue = myResult["ProjectNameValue"].ToString();
            string DescriptionValue = myResult["DescriptionValue"].ToString();
            string requestorValue = myResult["requestorValue"].ToString();
            string EstTotalHoursValue = myResult["EstTotalHoursValue"].ToString();
            string EstStartDateDValue = myResult["EstStartDateDValue"].ToString();
            string EstCompleteDateDValue = myResult["EstCompleteDateDValue"].ToString();
            string PriorityValue = myResult["PriorityValue"].ToString();
            string StatusValue = myResult["StatusValue"].ToString();
            string row_idValue = myResult["row_idValue"].ToString();





            MessageGenerator msg1 = new MessageGenerator();
            msg1.addMainProject(ProjectNameValue, DescriptionValue, requestorValue, EstTotalHoursValue, EstStartDateDValue, EstCompleteDateDValue, PriorityValue, StatusValue, row_idValue);
            return Ok();
        }

        [HttpPut]
        [Route("api/approveTasks")]

        public IHttpActionResult approveTasks(JObject insertcon)
        {

            JObject myResult = insertcon;
            string ProjectNameValue = myResult["ProjectNameValue"].ToString();
            string DefectNameValue = myResult["DefectNameValue"].ToString();
            string PriorityValue = myResult["PriorityValue"].ToString();
            string StatusValue = myResult["StatusValue"].ToString();
            string DescriptionValue = myResult["DescriptionValue"].ToString();
            string TestCycleValue = myResult["TestCycleValue"].ToString();
            string EnteredByValue = myResult["EnteredByValue"].ToString();
            string AssignedToValue = myResult["AssignedToValue"].ToString();
            string InsertDateTimeValue = myResult["InsertDateTimeValue"].ToString();
            string UpdateDateTimeValue = myResult["UpdateDateTimeValue"].ToString();
            string CommentValue = myResult["CommentValue"].ToString();
            string TotalHoursSpentAPPSValue = myResult["TotalHoursSpentAPPSValue"].ToString();
            string EstStartDateValue = myResult["EstStartDateValue"].ToString();
            string EstCompleteDateValue = myResult["EstCompleteDateValue"].ToString();
            string row_idValue = myResult["row_idValue"].ToString();






            MessageGenerator msg1 = new MessageGenerator();
            msg1.approveTasks(ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TestCycleValue, EnteredByValue, AssignedToValue, InsertDateTimeValue, UpdateDateTimeValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue);
            return Ok();
        }

        [HttpPut]
        //[Route("api/addDefect/{ProjectNameValue}/{ DefectNameValue}/{ PriorityValue}/{ StatusValue}/{ DescriptionValue}/{ TypeValue}/{ TestCycleValue}/{ EnteredByValue}/{ AssignedToValue}/{ CommentValue}/{ TotalHoursSpentAPPSValue}/{ EstStartDateValue}/{ EstCompleteDateValue}/{ row_idValue}")]
        [Route("api/Message/addDefect")]
        public IHttpActionResult addDefect(JObject insertcon)
        {

            JObject myResult = insertcon;
            string ProjectNameValue = myResult["ProjectNameValue"].ToString();
            string DefectNameValue = myResult["DefectNameValue"].ToString();
            string PriorityValue = myResult["PriorityValue"].ToString();
            string StatusValue = myResult["StatusValue"].ToString();
            string DescriptionValue = myResult["DescriptionValue"].ToString();
            string TypeValue = myResult["TypeValue"].ToString();
            string TestCycleValue = myResult["TestCycleValue"].ToString();
            string EnteredByValue = myResult["EnteredByValue"].ToString();
            string AssignedToValue = myResult["AssignedToValue"].ToString();
            string CommentValue = myResult["CommentValue"].ToString();
            string TotalHoursSpentAPPSValue = myResult["TotalHoursSpentAPPSValue"].ToString();
            string EstStartDateValue = myResult["EstStartDateValue"].ToString();
            string EstCompleteDateValue = myResult["EstCompleteDateValue"].ToString();
            string row_idValue = myResult["row_idValue"].ToString();
            string ProdAreaValue = myResult["ProdAreaValue"].ToString();
            string PercentRespValue = myResult["PercentRespValue"].ToString();
            string PlanStartDateValue = myResult["PlanStartDateValue"].ToString();
            string PlanCompleteDateValue = myResult["PlanCompleteDateValue"].ToString();
            string BusReqCompleteDateValue = myResult["BusReqCompleteDateValue"].ToString();



            DefectGenerator msg1 = new DefectGenerator();
            msg1.addDefect(ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TypeValue, TestCycleValue, EnteredByValue, AssignedToValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue, ProdAreaValue, PercentRespValue, PlanStartDateValue, PlanCompleteDateValue, BusReqCompleteDateValue);
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addIN2164PO")]
        public IHttpActionResult addIN2164PO(JObject insertcon)
        {

            JObject myResult = insertcon;
            string ProductionOrder_IdValue = myResult["ProductionOrder_IdValue"].ToString();
            string ProductionOrderNumberValue = myResult["ProductionOrderNumberValue"].ToString();
            string MaterialNumberValue = myResult["MaterialNumberValue"].ToString();
            string TotalQuantityValue = myResult["TotalQuantityValue"].ToString();
            string ScheduledStartTimeValue = myResult["ScheduledStartTimeValue"].ToString();
            string ScheduledEndTimeValue = myResult["ScheduledEndTimeValue"].ToString();
            string StorageLocationReceiptValue = myResult["StorageLocationReceiptValue"].ToString();
            string FatProtRatioValue = myResult["FatProtRatioValue"].ToString();
            string MilkProteinValue = myResult["MilkProteinValue"].ToString();
            string MilkFatValue = myResult["MilkFatValue"].ToString();
            string RetFactorValue = myResult["RetFactorValue"].ToString();
            string MoistureValue = myResult["MoistureValue"].ToString();
            string SaltValue = myResult["SaltValue"].ToString();
            string FatValue = myResult["FatValue"].ToString();
            string pHValue = myResult["pHValue"].ToString();
            string SetPHValue = myResult["SetPHValue"].ToString();
            string NumVatsValue = myResult["NumVatsValue"].ToString();


            IN2164POGenerator msg1 = new IN2164POGenerator();
            msg1.addIN2164PO(
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
                NumVatsValue

                );
            return Ok();
        }



        [HttpPut]

        [Route("api/Message/addUtilityMetering")]
        public IHttpActionResult addUtilityMetering(JObject insertcon)
        {

            JObject myResult = insertcon;
            string plantValue = myResult["plantValue"].ToString();
            string majorgroupValue = myResult["majorgroupValue"].ToString();
            string areaValue = myResult["areaValue"].ToString();
            string metertagValue = myResult["metertagValue"].ToString();
            string currentdatevalValue = myResult["currentdatevalValue"].ToString();
            string currdateValue = myResult["currdateValue"].ToString();
            string goalValue = myResult["goalValue"].ToString();


            UtilityMeteringGenerator msg1 = new UtilityMeteringGenerator();
            msg1.addUtilityMetering(
               plantValue,
                majorgroupValue,
                areaValue,
                metertagValue,
                currentdatevalValue,
                currdateValue,
                goalValue

                );
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addPhageME")]
        public IHttpActionResult addPhageME(JObject insertcon)
        {

            JObject myResult = insertcon;
            string IDValue = myResult["IDValue"].ToString();
            string ProductionDateValue = myResult["ProductionDateValue"].ToString();
            string LineValue = myResult["LineValue"].ToString();
            string LocationValue = myResult["LocationValue"].ToString();
            string LogVatTankSiloValue = myResult["LogVatTankSiloValue"].ToString();
            string PhageValue = myResult["PhageValue"].ToString();
            string ActionValue = myResult["ActionValue"].ToString();



            PhageMEGenerator msg1 = new PhageMEGenerator();
            msg1.addPhageME(IDValue, ProductionDateValue, LineValue, LocationValue, LogVatTankSiloValue, PhageValue, ActionValue);
            return Ok();
        }

        [HttpPut]

        [Route("api/Message/addCIPTITRSETUP")]
        public IHttpActionResult addCIPTITRSETUP(JObject insertcon)
        {

            JObject myResult = insertcon;
            string PlantValue = myResult["PlantValue"].ToString();
            string titrationsValue = myResult["titrationsValue"].ToString();
            string SkidDescValue = myResult["SkidDescValue"].ToString();
            string chemicaltypeValue = myResult["chemicaltypeValue"].ToString();
            string unitsTValue = myResult["unitsTValue"].ToString();
            string enabledTValue = myResult["enabledTValue"].ToString();
            string maxTValue = myResult["maxTValue"].ToString();
            string minTValue = myResult["minTValue"].ToString();
            string TitrationKeyValue = myResult["TitrationKeyValue"].ToString();
            string ActionValue = myResult["ActionValue"].ToString();

            CIPTITRSETUPGenerator msg1 = new CIPTITRSETUPGenerator();
            msg1.addCIPTITRSETUP(
              PlantValue,
              titrationsValue,
              SkidDescValue,
              chemicaltypeValue,
              unitsTValue,
              enabledTValue,
              maxTValue,
              minTValue,
              TitrationKeyValue,
              ActionValue
              );
            return Ok();
        }

        [HttpPut]

        [Route("api/Message/addCIPCHEMENTRY")]
        public IHttpActionResult addCHEMENTRY(JObject insertcon)
        {

            JObject myResult = insertcon;
            string PlantValue = myResult["PlantValue"].ToString();
            string ChemicalNameValue = myResult["ChemicalNameValue"].ToString();
            string ChemicalTypeKeyValue = myResult["ChemicalTypeKeyValue"].ToString();
            string ChemicalCostValue = myResult["ChemicalCostValue"].ToString();
            string ChemicalCostEUKeyValue = myResult["ChemicalCostEUKeyValue"].ToString();
            string ChemicalKeyValue = myResult["ChemicalKeyValue"].ToString();
            string ActionValue = myResult["ActionValue"].ToString();


            CIPCHEMENTRYGenerator msg1 = new CIPCHEMENTRYGenerator();
            msg1.addCIPCHEMENTRY(
                PlantValue,
                ChemicalNameValue,
                ChemicalTypeKeyValue,
                ChemicalCostValue,
                ChemicalCostEUKeyValue,
                ChemicalKeyValue,
                ActionValue

                );
            return Ok();
        }

        [HttpPut]

        [Route("api/Message/addCIPMANTEMP")]
        public IHttpActionResult addMANTEMP(JObject insertcon)
        {

            JObject myResult = insertcon;
            string PlantValue = myResult["PlantValue"].ToString();
            string UnitDescValue = myResult["UnitDescValue"].ToString();
            string UnitValueValue = myResult["UnitValueValue"].ToString();
            string TimestampValue = myResult["TimestampValue"].ToString();
            string ActionValue = myResult["ActionValue"].ToString();


            CIPMANTEMPGenerator msg1 = new CIPMANTEMPGenerator();
            msg1.addCIPMANTEMP(
               PlantValue,
               UnitDescValue,
               UnitValueValue,
               TimestampValue,
               ActionValue

                );
            return Ok();
        }

        [HttpPut]

        [Route("api/Message/addCIPReviewEntry")]
        public IHttpActionResult addCIPReviewEntry(JObject insertcon)
        {

            JObject myResult = insertcon;
            string PlantValue = myResult["PlantValue"].ToString();
            string ReviewKeyValue = myResult["ReviewKeyValue"].ToString();
            string WashKeyValue = myResult["WashKeyValue"].ToString();
            string ReviewNameValue = myResult["ReviewNameValue"].ToString();
            string ReviewCommentValue = myResult["ReviewCommentValue"].ToString();
            string ReviewReasonValue = myResult["ReviewReasonValue"].ToString();
            string ActionValue = myResult["ActionValue"].ToString();


            CIPReviewEntryGenerator msg1 = new CIPReviewEntryGenerator();
            msg1.addCIPReviewEntry(
               PlantValue, ReviewKeyValue, WashKeyValue, ReviewNameValue, ReviewCommentValue, ReviewReasonValue, ActionValue);
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addCIPVerifyDataEntry")]
        public IHttpActionResult addCIPVerifyDataEntry(JObject insertcon)
        {

            JObject myResult = insertcon;
            string PlantValue = myResult["PlantValue"].ToString();
            string VerifyKeyValue = myResult["VerifyKeyValue"].ToString();
            string WashKeyValue = myResult["WashKeyValue"].ToString();
            string VerifyNameValue = myResult["VerifyNameValue"].ToString();
            string VerifyCommentValue = myResult["VerifyCommentValue"].ToString();
            string VerifyReasonValue = myResult["VerifyReasonValue"].ToString();
            string ActionValue = myResult["ActionValue"].ToString();


            CIPVerifyDataEntryGenerator msg1 = new CIPVerifyDataEntryGenerator();
            msg1.addCIPVerifyDataEntry(
               PlantValue, VerifyKeyValue, WashKeyValue, VerifyNameValue, VerifyCommentValue, VerifyReasonValue, ActionValue);
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addCIPNotes")]
        public IHttpActionResult addCIPNotes(JObject insertcon)
        {

            JObject myResult = insertcon;
            string PlantValue = myResult["PlantValue"].ToString();
            string NotesKeyValue = myResult["NotesKeyValue"].ToString();
            string WashKeyValue = myResult["WashKeyValue"].ToString();
            string NotesNameValue = myResult["NotesNameValue"].ToString();
            string NotesCommentValue = myResult["NotesCommentValue"].ToString();
            string NotesTimeValue = myResult["NotesTimeValue"].ToString();
            string ActionValue = myResult["ActionValue"].ToString();


            CIPNotesGenerator msg1 = new CIPNotesGenerator();
            msg1.addCIPNotes(
               PlantValue, NotesKeyValue, WashKeyValue, NotesNameValue, NotesCommentValue, NotesTimeValue, ActionValue);
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addCIPPCQI")]
        public IHttpActionResult addCIPPCQI(JObject insertcon)
        {

            JObject myResult = insertcon;
            string PlantValue = myResult["PlantValue"].ToString();
            string PCQIKeyValue = myResult["PCQIKeyValue"].ToString();
            string PCQIWashKeyValue = myResult["PCQIWashKeyValue"].ToString();
            string PCQINameValue = myResult["PCQINameValue"].ToString();
            string PCQICommentValue = myResult["PCQICommentValue"].ToString();
            string PCQITimeValue = myResult["PCQITimeValue"].ToString();
            string PCQIActionValue = myResult["PCQIActionValue"].ToString();
            string PCQIStatusValue = myResult["PCQIStatusValue"].ToString();
            string PCQIWashConcateValue = myResult["PCQIWashConcateValue"].ToString();

            CIPPCQIGenerator msg1 = new CIPPCQIGenerator();
            msg1.addCIPPCQI(PlantValue,
                             PCQIKeyValue,
                             PCQIWashKeyValue,
                             PCQINameValue,
                             PCQICommentValue,
                             PCQITimeValue,
                             PCQIActionValue,
                             PCQIStatusValue,
                             PCQIWashConcateValue);
            return Ok();
        }

        [HttpPut]

        [Route("api/Message/addIN2164BOMItem")]
        public IHttpActionResult addIN2164BOMItem(JObject insertcon)
        {

            JObject myResult = insertcon;
            string BOMPositionValue = myResult["BOMPositionValue"].ToString();
            string ComponentMaterialValue = myResult["ComponentMaterialValue"].ToString();
            string ComponentQuantityValue = myResult["ComponentQuantityValue"].ToString();
            string OperationAssignmentValue = myResult["OperationAssignmentValue"].ToString();
            string StorageLocationValue = myResult["StorageLocationValue"].ToString();
            string StorageLocationDescValue = myResult["StorageLocationDescValue"].ToString();
            string RoutingOperationNumberValue = myResult["RoutingOperationNumberValue"].ToString();
            string OperationWorkCenterValue = myResult["OperationWorkCenterValue"].ToString();
            string OperationShortTextValue = myResult["OperationShortTextValue"].ToString();
            string CoProductFlagValue = myResult["CoProductFlagValue"].ToString();
            string NumVesselsValue = myResult["NumVesselsValue"].ToString();
            string ProductionOrder_IdValue = myResult["ProductionOrder_IdValue"].ToString();




            IN2164BOMItemGenerator msg1 = new IN2164BOMItemGenerator();
            msg1.addIN2164BOMItem(
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


                );
            return Ok();
        }



        [HttpPut]

        [Route("api/Message/addIN2164Spec")]
        public IHttpActionResult addIN2164Spec(JObject insertcon)
        {

            JObject myResult = insertcon;
            string NameValue = myResult["NameValue"].ToString();
            string ValueValue = myResult["ValueValue"].ToString();
            string LowerValue = myResult["LowerValue"].ToString();
            string UpperValue = myResult["UpperValue"].ToString();
            string DOPGroupValue = myResult["DOPGroupValue"].ToString();
            string MaterialValue = myResult["MaterialValue"].ToString();
            string Spec_IDValue = myResult["Spec_IDValue"].ToString();
            string POIDSpec_IDValue = myResult["POIDSpec_IDValue"].ToString();




            IN2164SpecGenerator msg1 = new IN2164SpecGenerator();
            msg1.addIN2164Spec(
                        NameValue,
                        ValueValue,
                        LowerValue,
                        UpperValue,
                        DOPGroupValue,
                        MaterialValue,
                        Spec_IDValue,
                        POIDSpec_IDValue



                );
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addIN2165Insp")]
        public IHttpActionResult addIN2165Insp(JObject insertcon)
        {

            JObject myResult = insertcon;
            string Specification_IdValue = myResult["Specification_IdValue"].ToString();
            string SpecificationNameValue = myResult["SpecificationNameValue"].ToString();
            string SpecificationDescValue = myResult["SpecificationDescValue"].ToString();
            string ProductionOrderValue = myResult["ProductionOrderValue"].ToString();
            string InspectionLotValue = myResult["InspectionLotValue"].ToString();




            IN2165InspGenerator msg1 = new IN2165InspGenerator();
            msg1.addIN2165Insp(
                        Specification_IdValue,
                        SpecificationNameValue,
                        SpecificationDescValue,
                        ProductionOrderValue,
                        InspectionLotValue



                );
            return Ok();
        }



        [HttpPut]

        [Route("api/Message/addIN2165Attribute")]
        public IHttpActionResult addIN2165Attribute(JObject insertcon)
        {

            JObject myResult = insertcon;
            string AttributeNameValue = myResult["AttributeNameValue"].ToString();
            string AttributeTitleValue = myResult["AttributeTitleValue"].ToString();
            string AttributeGroupValue = myResult["AttributeGroupValue"].ToString();
            string AttributeRankValue = myResult["AttributeRankValue"].ToString();
            string EntryLabelGroupValue = myResult["EntryLabelGroupValue"].ToString();
            string AnalysisNameValue = myResult["AnalysisNameValue"].ToString();
            string TestRequiredValue = myResult["TestRequiredValue"].ToString();
            string LimitsUOMValue = myResult["LimitsUOMValue"].ToString();
            string USLValue = myResult["USLValue"].ToString();
            string TargetValue = myResult["TargetValue"].ToString();
            string LSLValue = myResult["LSLValue"].ToString();
            string Spare1Value = myResult["Spare1Value"].ToString();
            string Spare2Value = myResult["Spare2Value"].ToString();
            string Spare3Value = myResult["Spare3Value"].ToString();
            string Spare4Value = myResult["Spare4Value"].ToString();
            string SaveReasonCodesValue = myResult["SaveReasonCodesValue"].ToString();
            string OperationValue = myResult["OperationValue"].ToString();
            string OperationWorkCenterValue = myResult["OperationWorkCenterValue"].ToString();
            string DisplayDigitsValue = myResult["DisplayDigitsValue"].ToString();
            string ConfirmationNumberValue = myResult["ConfirmationNumberValue"].ToString();
            string RecordingTypeValue = myResult["RecordingTypeValue"].ToString();
            string AutoSaveValue = myResult["AutoSaveValue"].ToString();
            string Specification_IDValue = myResult["Specification_IDValue"].ToString();





            IN2165AttributeGenerator msg1 = new IN2165AttributeGenerator();
            msg1.addIN2165Attribute(
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



                );
            return Ok();
        }



        [HttpPut]

        [Route("api/Message/addIN2165AttributeGroup")]
        public IHttpActionResult addIN2165AttributeGroup(JObject insertcon)
        {

            JObject myResult = insertcon;
            string AttributeGroupNameValue = myResult["AttributeGroupNameValue"].ToString();
            string AttributeGroupDescriptionValue = myResult["AttributeGroupDescriptionValue"].ToString();
            string AutoGenerateSampleIDValue = myResult["AutoGenerateSampleIDValue"].ToString();
            string Specification_IdValue = myResult["Specification_IdValue"].ToString();






            IN2165AttributeGroupGenerator msg1 = new IN2165AttributeGroupGenerator();
            msg1.addIN2165AttributeGroup(
                       AttributeGroupNameValue,
                        AttributeGroupDescriptionValue,
                        AutoGenerateSampleIDValue,
                        Specification_IdValue



                );
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addINJobSchedule")]
        public IHttpActionResult addINJobSchedule(JObject insertcon)
        {

            JObject myResult = insertcon;
            string RowIDValue = myResult["RowIDValue"].ToString();
            string ProductionOrderValue = myResult["ProductionOrderValue"].ToString();
            string InspectionLotValue = myResult["InspectionLotValue"].ToString();
            string SpecIDValue = myResult["SpecIDValue"].ToString();
            string POIDValue = myResult["POIDValue"].ToString();
            string IN2164_StatusValue = myResult["IN2164_StatusValue"].ToString();
            string IN2165_StatusValue = myResult["IN2165_StatusValue"].ToString();
            string StartDateValue = myResult["StartDateValue"].ToString();
            string EndDateValue = myResult["EndDateValue"].ToString();





            INJobScheduleGenerator msg1 = new INJobScheduleGenerator();
            msg1.addINJobSchedule(
                    RowIDValue,
                    ProductionOrderValue,
                    InspectionLotValue,
                    SpecIDValue,
                    POIDValue,
                    IN2164_StatusValue,
                    IN2165_StatusValue,
                    StartDateValue,
                    EndDateValue



                );
            return Ok();
        }


        [HttpPut]

        [Route("api/Message/addServDeskEntry")]
        public IHttpActionResult addServDeskEntry(JObject insertcon)
        {

            JObject myResult = insertcon;
            string IncidentIDValue = myResult["IncidentIDValue"].ToString();
            string ProcessInputValue = myResult["ProcessInputValue"].ToString();
            string ApplicationInputValue = myResult["ApplicationInputValue"].ToString();
            string ReportInputValue = myResult["ReportInputValue"].ToString();
            string LITInputValue = myResult["LITInputValue"].ToString();
            string HardwareInputValue = myResult["HardwareInputValue"].ToString();
            string SDTechNameValue = myResult["SDTechNameValue"].ToString();
            string CreateDateValue = myResult["CreateDateValue"].ToString();

            ServDeskEntryGenerator msg1 = new ServDeskEntryGenerator();
            msg1.addServDeskEntry(IncidentIDValue, ProcessInputValue, ApplicationInputValue, ReportInputValue, LITInputValue, HardwareInputValue, SDTechNameValue, CreateDateValue);
            return Ok();
        }

        [HttpPut]

        [Route("api/Message/addProcessDoc")]
        public IHttpActionResult addProcessDoc(JObject insertcon)
        {

            JObject myResult = insertcon;
            string TitleValue = myResult["TitleValue"].ToString();
            string IssueAreaTB1Value = myResult["IssueAreaTB1Value"].ToString();
            string IssueAreaTB2Value = myResult["IssueAreaTB2Value"].ToString();
            string NumStepsValue = myResult["NumStepsValue"].ToString();
            string ProcessTB1Value = myResult["ProcessTB1Value"].ToString();
            string ProcessTBMSG1Value = myResult["ProcessTBMSG1Value"].ToString();
            string ProcessTB2Value = myResult["ProcessTB2Value"].ToString();
            string ProcessTBMSG2Value = myResult["ProcessTBMSG2Value"].ToString();
            string ProcessTB3Value = myResult["ProcessTB3Value"].ToString();
            string ProcessTBMSG3Value = myResult["ProcessTBMSG3Value"].ToString();
            string ProcessTB4Value = myResult["ProcessTB4Value"].ToString();
            string ProcessTBMSG4Value = myResult["ProcessTBMSG4Value"].ToString();
            string ProcessTB5Value = myResult["ProcessTB5Value"].ToString();
            string ProcessTBMSG5Value = myResult["ProcessTBMSG5Value"].ToString();
            string ProcessTB6Value = myResult["ProcessTB6Value"].ToString();
            string ProcessTBMSG6Value = myResult["ProcessTBMSG6Value"].ToString();
            string ProcessTB7Value = myResult["ProcessTB7Value"].ToString();
            string ProcessTBMSG7Value = myResult["ProcessTBMSG7Value"].ToString();
            string ProcessTB8Value = myResult["ProcessTB8Value"].ToString();
            string ProcessTBMSG8Value = myResult["ProcessTBMSG8Value"].ToString();
            string ProcessTB9Value = myResult["ProcessTB9Value"].ToString();
            string ProcessTBMSG9Value = myResult["ProcessTBMSG9Value"].ToString();
            string ProcessTB10Value = myResult["ProcessTB10Value"].ToString();
            string ProcessTBMSG10Value = myResult["ProcessTBMSG10Value"].ToString();
            //string InsertDateTimeValue = myResult["InsertDateTimeValue"].ToString();

            ProcessDocGenerator msg1 = new ProcessDocGenerator();
            msg1.addProcessDoc(TitleValue, IssueAreaTB1Value, IssueAreaTB2Value, NumStepsValue, ProcessTB1Value, ProcessTBMSG1Value, ProcessTB2Value, ProcessTBMSG2Value, ProcessTB3Value, ProcessTBMSG3Value, ProcessTB4Value, ProcessTBMSG4Value, ProcessTB5Value, ProcessTBMSG5Value, ProcessTB6Value, ProcessTBMSG6Value, ProcessTB7Value, ProcessTBMSG7Value, ProcessTB8Value, ProcessTBMSG8Value, ProcessTB9Value, ProcessTBMSG9Value, ProcessTB10Value, ProcessTBMSG10Value);
            return Ok();
        }




        [HttpPut]
        [Route("api/Message/addEstimator")]
        public IHttpActionResult addEstimator(JObject insertcon)
        {

            JObject myResult = insertcon;
            string AreaValue = myResult["AreaValue"].ToString();
            string UINameValue = myResult["UINameValue"].ToString();
            string ComplexityValue = myResult["ComplexityValue"].ToString();
            string BAHoursValue = myResult["BAHoursValue"].ToString();
            string AppsAnalysisHoursValue = myResult["AppsAnalysisHoursValue"].ToString();
            string DevelopmentHoursValue = myResult["DevelopmentHoursValue"].ToString();
            string TestingHoursValue = myResult["TestingHoursValue"].ToString();
            string DeploymentHoursValue = myResult["DeploymentHoursValue"].ToString();
            string TrainingHoursValue = myResult["TrainingHoursValue"].ToString();
            string TotalHoursValue = myResult["TotalHoursValue"].ToString();
            string MassTotalHoursValue = myResult["MassTotalHoursValue"].ToString();
            string RateValue = myResult["RateValue"].ToString();
            string HardwareCostValue = myResult["HardwareCostValue"].ToString();
            string SoftwareCostValue = myResult["SoftwareCostValue"].ToString();
            string ConsultingCostValue = myResult["ConsultingCostValue"].ToString();
            string TotalCostValue = myResult["TotalCostValue"].ToString();
            string row_idValue = myResult["row_idValue"].ToString();




            EstimatorGenerator msg1 = new EstimatorGenerator();
            msg1.addEstimator(AreaValue, UINameValue, ComplexityValue, BAHoursValue, AppsAnalysisHoursValue, DevelopmentHoursValue, TestingHoursValue, DeploymentHoursValue, TrainingHoursValue, TotalHoursValue, MassTotalHoursValue, RateValue, HardwareCostValue, SoftwareCostValue, ConsultingCostValue, TotalCostValue, row_idValue);
            return Ok();
        }

        [HttpPut]
        [Route("api/Message/addTime")]
        public IHttpActionResult addTime(JObject insertcon)
        {

            JObject myResult = insertcon;
            string ProjectNameValue = myResult["ProjectNameValue"].ToString();
            string ProjectStepNameValue = myResult["ProjectStepNameValue"].ToString();
            string TicketValue = myResult["TicketValue"].ToString();
            string AssignedToValue = myResult["AssignedToValue"].ToString();
            string TotalHoursSpentAPPSValue = myResult["TotalHoursSpentAPPSValue"].ToString();
            string EstStartDateValue = myResult["EstStartDateValue"].ToString();
            string EstCompleteDateValue = myResult["EstCompleteDateValue"].ToString();
            string row_idValue = myResult["row_idValue"].ToString();




            ProjectListGenerator msg1 = new ProjectListGenerator();
            msg1.addTime(ProjectNameValue, ProjectStepNameValue, TicketValue, AssignedToValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue);
            return Ok();
        }
        [HttpPut]
        [Route("api/Message/addChangeMgmt")]
        public IHttpActionResult addChangeMgmt(JObject insertcon)
        {

            JObject myResult = insertcon;
            string ReleaseNameValue = myResult["ReleaseName"].ToString();
            string FSValue = myResult["FS"].ToString();
            string BusinessLeadValue = myResult["BusinessLead"].ToString();
            string BLSignValue = myResult["BLSign"].ToString();
            string BusinessApproverValue = myResult["BusinessApprover"].ToString();
            string BApproverSignValue = myResult["BApproverSign"].ToString();
            string DEVandTSValue = myResult["DEVandTS"].ToString();
            string DeveloperValue = myResult["Developer"].ToString();
            string DEVSignValue = myResult["DEVSign"].ToString();
            string STValue = myResult["ST"].ToString();
            string TechLeadValue = myResult["TechLead"].ToString();
            string TLSignValue = myResult["TLSign"].ToString();
            string AppsApproverValue = myResult["AppsApprover"].ToString();
            string AppsApproverSignValue = myResult["AppsApproverSign"].ToString();
            string FUTValue = myResult["FUT"].ToString();
            string BLSign2Value = myResult["BLSign2"].ToString();
            string DEVSign2Value = myResult["DEVSign2"].ToString();
            string TLSign2Value = myResult["TLSign2"].ToString();
            string AppsApproverSign2Value = myResult["AppsApproverSign2"].ToString();
            string PackageLocationValue = myResult["PackageLocation"].ToString();
            string ScreenShotLocationValue = myResult["ScreenShotLocation"].ToString();
            string LockedDateTimeValue = myResult["LockedDateTime"].ToString();
            string StatusValue = myResult["Status"].ToString();
            string DescriptionValue = myResult["Description"].ToString();
            string TestCycleValue = myResult["TestCycle"].ToString();
            string EnteredByValue = myResult["EnteredBy"].ToString();
            string FSLocationValue = myResult["FSLocation"].ToString();
            string CommentValue = myResult["Comment"].ToString();
            string row_idValue = myResult["row_id"].ToString();
            string TrainerNameValue = myResult["TrainerName"].ToString();
            string PlantContactValue = myResult["PlantContact"].ToString();
            string TechSpecLocationValue = myResult["TechSpecLocation"].ToString();
            string TestScriptLocationValue = myResult["TestScriptLocation"].ToString();
            string PRODDeployDateValue = myResult["PRODDeployDate"].ToString();
            string ControlsAnalystValue = myResult["ControlsAnalyst"].ToString();
            string DeployStatusValue = myResult["DeployStatus"].ToString();
            string DeployPlantsValue = myResult["DeployPlants"].ToString();
            string UpdatesValue = myResult["Updates"].ToString();
            string AssignedToValue = myResult["AssignedTo"].ToString();
            string ProjectIDReleaseValue = myResult["ProjectIDRelease"].ToString();

            ChangeMgmtGenerator msg1 = new ChangeMgmtGenerator();
            msg1.addChangeMgmt(ReleaseNameValue, FSValue, BusinessLeadValue, BLSignValue, BusinessApproverValue, BApproverSignValue, DEVandTSValue, DeveloperValue, DEVSignValue, STValue, TechLeadValue, TLSignValue, AppsApproverValue, AppsApproverSignValue, FUTValue, BLSign2Value, DEVSign2Value, TLSign2Value, AppsApproverSign2Value, PackageLocationValue, ScreenShotLocationValue, LockedDateTimeValue, StatusValue, DescriptionValue, TestCycleValue, EnteredByValue, FSLocationValue, CommentValue, row_idValue, TrainerNameValue, PlantContactValue, TechSpecLocationValue, TestScriptLocationValue, PRODDeployDateValue, ControlsAnalystValue, DeployStatusValue, DeployPlantsValue, UpdatesValue, AssignedToValue, ProjectIDReleaseValue);
            return Ok();
        }
        [HttpPut]
        [Route("api/saveChangeMgmt")]
        public IHttpActionResult SaveChangeMgmt(JObject testcon)
        {
            JObject myResult = testcon;
            string id = myResult["row_id"].ToString();
            string colname = myResult["ColumnName"].ToString();
            string colval = myResult["ColumnValue"].ToString();

            if (id != null)
            {
                ChangeMgmtGenerator mg1 = new ChangeMgmtGenerator();
                mg1.saveChangeMgmt(id, colname, colval);
                return Ok();
            }
            else
                return NotFound();
        }
        [HttpPut]
        [Route("api/SaveCMForm")]
        public IHttpActionResult SaveCMForm(JObject testcon)
        {
            JObject myResult = testcon;
            string id = myResult["row_id"].ToString();
            string colname = myResult["ColumnName"].ToString();
            string colval = myResult["ColumnValue"].ToString();

            if (id != null)
            {
                ChangeMgmtGenerator mg1 = new ChangeMgmtGenerator();
                mg1.SaveCMForm(id, colname, colval);
                return Ok();
            }
            else
                return NotFound();
        }
        [HttpPut]
        [Route("api/InitChangeMgmt")]
        public IHttpActionResult InitChangeMgmt(JObject testcon)
        {
            JObject myResult = testcon;
            string id = myResult["row_id"].ToString();
            string colname = myResult["ColumnName"].ToString();
            string colval = myResult["ColumnValue"].ToString();

            if (id != null)
            {
                ChangeMgmtGenerator mg1 = new ChangeMgmtGenerator();
                mg1.InitChangeMgmt(id, colname, colval);
                return Ok();
            }
            else
                return NotFound();
        }
        [HttpPut]
        [Route("api/VatMsgOff/{VATPlantOffValue}")]
        //[Route("api/VatMsgOff")]
        public IHttpActionResult VatMsgOff(JObject insertcon)
        {

            JObject myResult = insertcon;
            string VATPlantOffValue = myResult["VATPlantOffValue"].ToString();
            RptDriverGenerator msg1 = new RptDriverGenerator();
            msg1.VatMsgOff(VATPlantOffValue);
            return Ok();
        }

        [HttpPut]
        [Route("api/addRow")]
        public IHttpActionResult addRow()
        {
            ProjectListGenerator pg1 = new ProjectListGenerator();
            pg1.addRow();
            return Ok();
        }

        [HttpPut]
        [Route("api/addProject")]
        public IHttpActionResult addProject()
        {
            ProjectListGenerator pl1 = new ProjectListGenerator();
            pl1.addProject();
            return Ok();
        }

        [HttpPut]
        [Route("api/addMonthlyProject")]
        public IHttpActionResult addMonthlyProject()
        {
            ProjectListGenerator pml1 = new ProjectListGenerator();
            pml1.addMonthlyProject();
            return Ok();
        }
        [HttpPut]
        [Route("api/saveRptDriverconfig")]
        public IHttpActionResult SaveRpt(JObject testcon)
        {
            JObject myResult = testcon;
            string id = myResult["id"].ToString();
            string colname = myResult["ColumnName"].ToString();
            string colval = myResult["ColumnValue"].ToString();

            if (id != null)
            {
                RptDriverGenerator rg1 = new RptDriverGenerator();
                rg1.saveRptDriverConfig(id, colname, colval);
                return Ok();
            }
            else
                return NotFound();
        }

        [HttpPut]
        [Route("api/deleteMainProject")]
        public IHttpActionResult deleteMainProject(List<string> objarray)
        {
            if (objarray != null)
            {


                MessageGenerator rg1 = new MessageGenerator();
                rg1.deleteMainProject(objarray);
                return Ok();
            }
            else
                return NotFound();
        }

        [HttpPut]
        [Route("api/deleteDefect")]
        public IHttpActionResult deleteDefect(List<string> objarray)
        {
            if (objarray != null)
            {


                DefectGenerator rg1 = new DefectGenerator();
                rg1.deleteDefect(objarray);
                return Ok();
            }
            else
                return NotFound();
        }

        [HttpPut]
        [Route("api/deleteEstimator")]
        public IHttpActionResult deleteEstimator(List<string> objarray)
        {
            if (objarray != null)
            {


                EstimatorGenerator rg1 = new EstimatorGenerator();
                rg1.deleteEstimator(objarray);
                return Ok();
            }
            else
                return NotFound();
        }


        [HttpPut]
        [Route("api/deleteChangeMgmt")]
        public IHttpActionResult deleteChangeMgmt(List<string> objarray)
        {
            if (objarray != null)
            {


                ChangeMgmtGenerator rg1 = new ChangeMgmtGenerator();
                rg1.deleteChangeMgmt(objarray);
                return Ok();
            }
            else
                return NotFound();
        }

        [Route("api/DopEnquiry/getdop")]
        public DopCollection getDop() //MessageCollection<List> 
        {
            DopEnquirys dc = new DopEnquirys();
            return dc.GetDopCollection();
        }

        // GET: api/Message/5
        public string Get(int id)
        {
            return "value";
        }




        // PUT: api/Message/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Message/5
        public void Delete(int id)
        {
        }
    }

    
}
