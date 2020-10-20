using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BO.Models;
namespace BLL.Interfaces
{
    interface IMessage
    {
        ProjectCollection GetCollection(string handle, string sql);

        string GetXMLContent(string objectID);
        void saveXML(string xmlcon, string obj);

        void addMainProject(string ProjectNameValue, string DescriptionValue, string requestorValue, string EstTotalHoursValue, string EstStartDateDValue, string EstCompleteDateDValue, string PriorityValue, string StatusValue, string row_idValue);
        void approveTasks(string ProjectNameValue, string DefectNameValue, string PriorityValue, string StatusValue, string DescriptionValue, string TestCycleValue, string EnteredByValue, string AssignedToValue, string InsertDateTimeValue, string UpdateDateTimeValue, string CommentValue, string TotalHoursSpentAPPSValue, string EstStartDateValue, string EstCompleteDateValue, string row_idValue);
    }
    interface IVatMakeRpt
    {
        //Selection
        VatMakeRptCollection GetVatMakeRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate);

    }

    interface IVatMakeRptParam
    {
        //Selection
        VatMakeRptParamCollection GetVatMakeRptCollection(string StartDate, string EndDate);

    }
    interface IFinishRpt
    {
        //Selection
        FinishRptCollection GetFinishRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate);

    }

    interface IFinishRptParam
    {
        //Selection
        FinishRptParamCollection GetFinishRptCollection(string StartDate, string EndDate);

    }
    interface IKPIMultiDt
    {
        //Selection
        KPIMultiDtCollection GetKPIMultiDtCollection(string ReportName, string DateStart, string DateEnd, string RD3, string RD4, string RD5, string RD6);

    }

    interface IKPISingleDt
    {
        //Selection
        KPISingleDtCollection GetKPISingleDtCollection(string ReportName, string DateStart, string DateEnd, string RD3, string RD4, string RD5, string RD6);

    }

    interface IVatMakeRptComments
    {
        //Selection
        VatMakeRptCommentsCollection GetVatMakeRptCommentsCollection(string StartDate, string EndDate, string ProductCode, string LineNumber);

    }
    interface IChseMakSuprDopRpt
    {
        //Selection
        ChseMakSuprDopRptCollection GetChseMakSuprDopRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate);

    }
    interface IDOPSeparatorRpt
    {
        //Selection
        DOPSeparatorRptCollection GetDOPSeparatorRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate);

    }
    interface IRecPlnRpt
    {
        //Selection
        RecPlnRptCollection GetRecPlnRptCollection(string LineNumber, string StartDate, string EndDate, string POid);

    }
    interface IDOPStrChseRpt
    {
        //Selection
        DOPStrChseRptCollection GetDOPStrChseRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate);

    }
    interface IChseAnalysisRpt
    {
        //Selection
        ChseAnalysisRptCollection GetChseAnalysisRptCollection(string LineNumber, string StartDate, string EndDate, string ProductionOrder, string Material, string Inspection_Type);

    }
    interface IPowderBlndRpt
    {
        //Selection
        PowderBlndRptCollection GetPowderBlndRptCollection(string LineNumber, string StartDate, string EndDate, string ProductionOrder);

    }
    interface IPowderBlndTotalRpt
    {
        //Selection
        PowderBlndTotalRptCollection GetPowderBlndTotalRptCollection(string LineNumber, string StartDate, string EndDate, string ProductionOrder);

    }

    interface IRetentateDOPRpt
    {
        //Selection
        RetentateDOPRptCollection GetRetentateDOPRptCollection(string ProductionOrder);

    }
    interface IServices
    {
        ServicesCollection GetServicesCollection();
        //void startService(List<string> servArray);
    }
    interface IProjectList
    {
        ProjectListCollection GetProjectListCollection();
        //ProjectAddCollection GetProjectListAddCollection();
        //void startService(List<string> servArray);
        //listProjectCollection listProjectCollection();
    }
    interface ITime
    {
        ProjectListCollection GetProjectListCollection();
        void addTime(string ProjectNameValue, string ProjectStepNameValue, string TicketValue, string AssignedToValue, string TotalHoursSpentAPPSValue, string EstStartDateValue, string EstCompleteDateValue, string row_idValue);
    }

    interface IlistProject
    {

        listProjectCollection listProjectCollection();
    }
    interface IlistArea
    {

        listAreaCollection listAreaCollection();
    }
    interface IlistCircuit
    {

        listCircuitCollection listCircuitCollection(string plant);
    }
    interface IlistChemical
    {

        listChemicalCollection listChemicalCollection(string plant, string majorgroup);
    }
    interface IlistMTempUnitsList
    {

        listMTempUnitsListCollection listMTempUnitsListCollection(string plant);
    }
    interface IlistProjectDD
    {

        listProjectDDCollection listProjectDDCollection();
    }

    interface IProjectRes
    {
        ProjectResCollection GetProjectResCollection();
    }

    interface ICIPLogin
    {
        CIPLoginCollection GetCIPLoginCollection(string plant, string user);
    }

    interface IDefect
    {
        DefectCollection GetDefectCollection();
        void addDefect(string ProjectNameValue, string DefectNameValue, string PriorityValue, string StatusValue, string DescriptionValue, string TypeValue, string TestCycleValue, string EnteredByValue, string AssignedToValue, string CommentValue, string TotalHoursSpentAPPSValue, string EstStartDateValue, string EstCompleteDate, string row_idValue, string ProdAreaValue, string PercentRespValue, string PlanStartDateValue, string PlanCompleteDateValue, string BusReqCompleteDateValue);
    }

    interface IServDeskEntry
    {
        ServDeskEntryCollection GetServDeskEntryCollection();
        void addServDeskEntry(string IncidentIDValue, string ProcessInputValue, string ApplicationInputValue, string ReportInputValue, string LITInputValue, string HardwareInputValue, string SDTechNameValue, string CreateDateValue);
    }

    interface IProcessDoc
    {
        ProcessDocCollection GetProcessDocCollection();
        void addProcessDoc(string TitleValue, string IssueAreaTB1Value, string IssueAreaTB2Value, string NumStepsValue, string ProcessTB1Value, string ProcessTBMsg1Value, string ProcessTB2Value, string ProcessTBMsg2Value, string ProcessTB3Value, string ProcessTBMsg3Value, string ProcessTB4Value, string ProcessTBMsg4Value, string ProcessTB5Value, string ProcessTBMsg5Value, string ProcessTB6Value, string ProcessTBMsg6Value, string ProcessTB7Value, string ProcessTBMsg7Value, string ProcessTB8Value, string ProcessTBMsg8Value, string ProcessTB9Value, string ProcessTBMsg9Value, string ProcessTB10Value, string ProcessTBMsg10Value);
    }


    interface IUtilityMetering
    {
        UtilityMeteringCollection GetUtilityMeteringCollection(string plant, string majorgroup, string date);
        void addUtilityMetering(
              string plantValue,
              string majorgroupValue,
              string areaValue,
              string metertagValue,
              string currentdatevalValue,
              string currdateValue,
              string goalValue
            );
    }


    interface ICIPTITRSETUP
    {
        CIPTITRSETUPCollection GetCIPTITRSETUPCollection(string plant, string majorgroup, string majorgroup1, string majorgroup2);
        void addCIPTITRSETUP(
              string PlantValue,
              string titrationsValue,
              string SkidDescValue,
              string chemicaltypeValue,
              string unitsTValue,
              string enabledTValue,
              string maxTValue,
              string minTValue,
              string TitrationKeyValue,
              string ActionValue
            );
    }
    interface ICIPCHEMENTRY
    {
        CIPCHEMENTRYCollection GetCIPCHEMENTRYCollection(string plant, string majorgroup);
        void addCIPCHEMENTRY(
              string PlantValue,
              string ChemicalNameValue,
              string ChemicalTypeKeyValue,
              string ChemicalCostValue,
              string ChemicalCostEUKeyValue,
              string ChemicalKeyValue,
              string ActionValue

            );
    }
    interface ICIPMANTEMP
    {
        CIPMANTEMPCollection GetCIPMANTEMPCollection(string plant, string majorgroup, string majorgroup1);
        void addCIPMANTEMP(
              string PlantValue,
              string UnitDescValue,
              string UnitValueValue,
              string TimestampValue,
              string ActionValue
            );
    }

    interface ICIPReviewEntry
    {
        CIPReviewEntryCollection GetCIPReviewEntryCollection(string plant, string washkey, string majorgroup);
        void addCIPReviewEntry(
              string PlantValue,
              string ReviewKeyValue,
              string WashKeyValue,
              string ReviewNameValue,
              string ReviewCommentValue,
              string ReviewReasonValue,
              string ActionValue
            );
    }

    interface ICIPVerifyDataEntry
    {
        CIPVerifyDataEntryCollection GetCIPVerifyDataEntryCollection(string plant, string washkey, string majorgroup);
        void addCIPVerifyDataEntry(
            string PlantValue,
            string VerifyKeyValue,
            string WashKeyValue,
            string VerifyNameValue,
            string VerifyCommentValue,
            string VerifyReasonValue,
            string ActionValue
            );
    }

    interface ICIPNotes
    {
        CIPNotesCollection GetCIPNotesCollection(string plant, string washkey, string majorgroup);
        void addCIPNotes(
                string PlantValue,
                string NotesKeyValue,
                string WashKeyValue,
                string NotesNameValue,
                string NotesCommentValue,
                string NotesTimeValue,
                string ActionValue
            );
    }

    interface ICIPPCQI
    {
        CIPPCQICollection GetCIPPCQICollection(string plant, string washkey, string majorgroup);
        void addCIPPCQI(
             string PlantValue,
             string PCQIKeyValue,
             string WashKeyValue,
             string PCQINameValue,
             string PCQICommentValue,
             string PCQITimeValue,
             string PCQIActionValue,
             string PCQIStatusValue,
             string PCQIWashConcateValue

            //string PCQIKey,
            //string PCQIName,
            //string PCQINameType,
            //string PCQIComment,
            //string PCQIESignature,
            //string PCQITime,
            //string PCQIWashKey





            );
    }

    interface IPhageME
    {
        PhageMECollection GetPhageMECollection(string majorgroup);
        void addPhageME(
            string ID,
                string ProductionDate,
                string Line,
                string Location,
                string LogVatTankSilo,
                string Phage,
                string Action

            );
    }
    interface IIN2164PO
    {
        IN2164POCollection GetIN2164POCollection();
        void addIN2164PO(string ProductionOrder_IdValue,
                string ProductionOrderNumberValue,
                string MaterialNumberValue,
                string TotalQuantityValue,
                string ScheduledStartTimeValue,
                string ScheduledEndTimeValue,
                string StorageLocationReceiptValue,
                string FatProtRatioValue,
                string MilkProteinValue,
                string MilkFatValue,
                string RetFactorValue,
                string MoistureValue,
                string SaltValue,
                string FatValue,
                string pHValue,
                string SetPHValue,
                string NumVatsValue
            );
    }

    interface IIN2164BOMItem
    {
        IN2164BOMItemCollection GetIN2164BOMItemCollection(string poid);
        void addIN2164BOMItem(
            string BOMPositionValue,
            string ComponentMaterialValue,
            string ComponentQuantityValue,
            string OperationAssignmentValue,
            string StorageLocationValue,
            string StorageLocationDescValue,
            string RoutingOperationNumberValue,
            string OperationWorkCenterValue,
            string OperationShortTextValue,
            string CoProductFlagValue,
            string NumVesselsValue,
            string ProductionOrder_IdValue
            );
    }



    interface IIN2164Spec
    {
        IN2164SpecCollection GetIN2164SpecCollection(string spec);
        void addIN2164Spec(
            string NameValue,
            string ValueValue,
            string LowerValue,
            string UpperValue,
            string DOPGroupValue,
            string MaterialValue,
            string Specs_IDValue,
            string POIDSpec_IDValue


            );
    }




    interface IIN2165Insp
    {
        IN2165InspCollection GetIN2165InspCollection();
        void addIN2165Insp(
         string Specification_IdValue,
         string SpecificationNameValue,
         string SpecificationDescValue,
         string ProductionOrderValue,
         string InspectionLotValue

        );

    }

    interface IIN2165Attribute
    {

        IN2165AttributeCollection GetIN2165AttributeCollection(string spid);
        void addIN2165Attribute(
         string AttributeNameValue,
         string AttributeTitleValue,
         string AttributeGroupValue,
         string AttributeRankValue,
         string EntryLabelGroupValue,
         string AnalysisNameValue,
         string TestRequiredValue,
         string LimitsUOMValue,
         string USLValue,
         string TargetValue,
         string LSLValue,
         string Spare1Value,
         string Spare2Value,
         string Spare3Value,
         string Spare4Value,
         string SaveReasonCodesValue,
         string OperationValue,
         string OperationWorkCenterValue,
         string DisplayDigitsValue,
         string ConfirmationNumberValue,
         string RecordingTypeValue,
         string AutoSaveValue,
         string Specification_IdValue



    );

    }

    interface IIN2165AttributeGroup
    {
        IN2165AttributeGroupCollection GetIN2165AttributeGroupCollection(string spid);
        void addIN2165AttributeGroup(string AttributeGroupNameValue,
        string AttributeGroupDescriptionValue,
        string AutoGenerateSampleIDValue,
        string Specification_IdValue
      );



    }

    interface IINJobSchedule
    {
        INJobScheduleCollection GetINJobScheduleCollection();
        void addINJobSchedule(string RowIDValue,
                    string ProductionOrderValue,
                    string InspectionLotValue,
                    string SpecIDValue,
                    string POIDValue,
                    string IN2164_StatusValue,
                    string IN2165_StatusValue,
                    string StartDateValue,
                    string EndDateValue
      );



    }









    interface IEstimator
    {
        EstimatorCollection GetEstimatorCollection();
        void addEstimator(string AreaValue, string UINameValue, string ComplexityValue, string BAHoursValue, string AppsAnalysisHoursValue, string DevelopmentHoursValue, string TestingHoursValue, string DeploymentHoursValue, string TrainingHoursValue, string TotalHoursValue, string MassTotalHoursValue, string RateValue, string HardwareCostValue, string SoftwareCostValue, string ConsultingCostValue, string TotalCostValue, string row_idValue);
    }

    interface IChangeMgmt
    {
        ChangeMgmtCollection GetChangeMgmtCollection();
        void addChangeMgmt(string ReleaseNameValue, string FSValue, string BusinessLeadValue, string BLSignValue, string BusinessApproverValue, string BApproverSignValue, string DEVandTSValue, string DeveloperValue, string DEVSignValue, string STValue, string TechLeadValue, string TLSignValue, string AppsApproverValue, string AppsApproverSignValue, string FUTValue, string BLSign2Value, string DEVSign2Value, string TLSign2Value, string AppsApproverSign2Value, string PackageLocationValue, string ScreenShotLocationValue, string LockedDateTimeValue, string StatusValue, string DescriptionValue, string TestCycleValue, string EnteredByValue, string FSLocationValue, string CommentValue, string row_idValue, string TrainerNameValue, string PlantContactValue, string TechSpecLocationValue, string TestScriptLocationValue, string PRODDeployDateValue, string ControlsAnalystValue, string DeployStatusValue, string DeployPlantsValue, string UpdatesValue, string AssignedToValue, string ProjectIDReleaseValue);
    }

    interface IRptDriver
    {
        RptDriverCollection GetRptDriverCollection(string name);
        //void startService(List<string> servArray);
    }

    interface ICasesValidation
    {
        CasesValidationCollection GetCasesValidationCollection(string name);
        //void startService(List<string> servArray);
    }
    interface ICasesValidationL
    {
        CasesValidationCollectionL GetCasesValidationCollectionL(string name, string Area);
        //void startService(List<string> servArray);
    }





    interface IProduction
    {
        ProductionCollection GetProductionCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }
    interface ITicket
    {
        TicketCollection GetTicketCollection(string wo_id);
        //void startService(List<string> servArray);
    }
    interface ISiloINV
    {
        SiloINVCollection GetSiloINVCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }

    interface IConsumption
    {
        ConsumptionCollection GetConsumptionCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }
    interface IChkDOP
    {
        ChkDOPCollection GetChkDOPCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }
    interface IChkWebSpec
    {
        ChkWebSpecCollection GetChkWebSpecCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }

    interface IChkHistorian
    {
        ChkHistorianCollection GetChkHistorianCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }

    interface IChkIN2175
    {
        ChkIN2175Collection GetChkIN2175Collection(string name, string wo_id);
        //void startService(List<string> servArray);
    }

    interface ITruck
    {
        TruckCollection GetTruckCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }

    interface IQuality
    {
        QualityCollection GetQualityCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }

    interface IProdLabel
    {
        ProdLabelCollection GetProdLabelCollection(string name, string wo_id);
        //void startService(List<string> servArray);
    }

    interface IDopEnquiry
    {
        DopCollection GetDopCollection();
        //void startService(List<string> servArray);
    }

 
    interface IMixerTotalizerRpt
    {
        MixerTotalizerRptCollection GetMixerTotalizerRptCollection(string name, string ProductionOrder, string Line, string ProductCode, string SDate, string EDate);
        //void startService(List<string> servArray);
    }

    interface IProcessingMassBalance
    {
        ProcessingMassBalanceCollection GetProcessingMassBalanceCollection(string SDate, string EDate);
        //void startService(List<string> servArray);
    }
}