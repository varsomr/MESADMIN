using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BO.Models
{
    public class Message
    {
        public string ProjectName;
        public string ProjectStepName;
        public string Priority;
        public string Description;
        public string ProjectLifeCycle;
        public string ProjectType;
        public string TicketNum;
        public string ProjIdeation;
        public string ProjectScope;
        public string ProjectStatus;
        public string ESTTotalHours;
        public string NumofPMResource;
        public string NumofBAResources;
        public string NumofAPPSResources;
        public string PMName;
        public string BAResourceName1;
        public string BAResource1Status;
        public string HoursSpentBA1;
        public string BAResourceName2;
        public string BAResource2Status;
        public string HoursSpentBA2;
        public string TotalHoursSpentBA;
        public string APPSResourceName1;
        public string APPSResource1Status;
        public string HoursSpentAPPS1;
        public string APPSResourceName2;
        public string APPSResource2Status;
        public string HoursSpentAPPS2;
        public string APPSResourceName3;
        public string APPSResource3Status;
        public string HoursSpentAPPS3;
        public string APPSResourceName4;
        public string APPSResource4Status;
        public string HoursSpentAPPS4;
        public string TotalHoursSpentAPPS;
        public string InsertDateTime;
        public string InsertUserName;
        public string UpdateDateTime;
        public string UpdateUserName;
        public string ReportedInMonthEnd;

        public string PercentComplete;
        public string EstStartDate;
        public string EstCompleteDate;
        public string EstTotalHours;
        public string row_id;

    }
    public class ProjectCollection
    {
        public List<Message> MessageList;

        public ProjectCollection()
        {
            MessageList = new List<Message>();
        }
    }


    public class Tasks
    {
        public string ProjectName;
        public string DefectName;
        public string Priority;
        public string Status;
        public string Description;
        public string TestCycle;
        public string EnteredBy;
        public string AssignedTo;
        public string InsertDateTime;
        public string UpdateDateTime;
        public string Comment;
        public string TotalHoursSpentAPPS;
        public string EstStartDate;
        public string EstCompleteDate;
        public string row_id;


    }
    public class TasksCollection
    {
        public List<Tasks> TasksList;

        public TasksCollection()
        {
            TasksList = new List<Tasks>();
        }
    }

    public class Service
    {
        public string Recipe;
        public string TestArea;
        public int Testcycle;
        public string WorkOrder;
        public string Item;
        public string Quantity;
        public string WorkCenter;
        public string Operation;
        public string InspectionLot;
        public string Spare1;
        public string Spare2;
        public string Spare3;
        public string Spare4;
        public string Spare5;
        public string InsertTime;
        public int RowId;

        //all properties

    }

    public class RptDriver
    {
        public string ID;
        public string ReportName;
        public string DefType;
        public string CodeSection;
        public string Department;
        public string Area;
        public string SubArea;
        public string Line;
        public string Display;
        public string Sequence;
        public string Label;
        public string Source;
        public string Tag;
        public string AttributeID;
        public string DOPKey;
        public string AttributeName;
        public string MIC;
        public string Data1;
        public string Data2;
        public string Data3;
        public string Data4;
        public string Data5;
        public string Data6;
        public string Data7;
        public string Data8;
        public string Data9;
        public string Data10;
        public string Data11;
        public string Data12;
        public string Data13;
        public string Data14;
        public string Data15;
        public string Data16;
        public string Data17;



        //all properties

    }

    public class CasesValidation
    {
        public string RowID;
        public string Material;
        public string CaseScannedLeft;
        public string CaseScannedRight;
        public string Last_Edit_time;
        public string Created_Date_Time;
        public string Area;
        public string CompleteStatus;
        public string UserEdited;


        //all properties

    }

    public class CasesValidationL
    {

        public string Material;
        public string Layer;
        public string Scanned_Cases;
        public string UnScanned_Cases;
        public string Total_Cases;

    }

    public class Production
    {
        public string PO;
        public string Operation;
        public string Item;
        public string Batch;
        public string ReasonCode;
        public string WorkCenter;
        public string JobStatus;
        public string ent_id;
        public string to_ent_id;
        public string qty;
        public string SentToSAP;
        public string comments;
        public string spare1;
        public string spare2;
        public string spare3;
        public string spare4;
        public string last_edit_by;
        public string last_edit_at;
        public string created_at_utc;
        public string created_at_local;

        //all properties

    }

    public class Ticket
    {
        public string Category;
        public string IncidentType;
        public string IncidentID;
        public string ShortDescription;
        public string TotalApps;
        public string TotalReports;
        public string TotalIncidents;
        public string TotalSRVRequests;
        //all properties

    }



    public class SiloINV
    {
        public string Production_Date;
        public string Material_Number;
        public string Material_Description;
        public string Silo_ID;
        public string Silo_Level;
        public string Silo_RTD;
        public string Chem_Sample_ID;
        public string Chem_Sample_Time;
        public string Fat;
        public string Protein;
        public string Solids;
        public string SNF;
        public string TotalSolids;
        public string Babcock;
        public string TA;
        public string pH;
        public string Micro_Sample_ID;
        public string Micro_Sample_Time;
        public string Sort_Order;

        //all properties

    }

    public class Consumption
    {
        public string PO;
        public string Operation;
        public string Item;
        public string Batch;
        public string sublot_no;
        public string ReasonCode;
        public string WorkCenter;
        public string JobStatus;
        public string ent_id;
        public string to_ent_id;
        public string qty;
        public string SentToSAP;
        public string comments;
        public string spare1;
        public string spare2;
        public string spare3;
        public string spare4;
        public string last_edit_by;
        public string last_edit_at;
        public string created_at_utc;
        public string created_at_local;

        //all properties

    }

    public class ChkDOP
    {
        public string PODate;
        public string Oper_Type;
        public string Oper_id;
        public string ProductionOrder;
        public string Material;
        public string Material_Desc;
        public string Current_State;

    }

    public class ChkWebSpec
    {
        public string ReportName;
        public string Area;
        public string CodeSection;
        public string Sequence;
        public string Label;
        public string AttributeName;
        public string Last_Sampletime;

    }

    public class ChkHistorian
    {
        public string ReportName;
        public string Area;
        public string CodeSection;
        public string Sequence;
        public string Label;
        public string Tier1Tag;
        public string Tier2Tag;
        public string Tier2Value;

    }
    public class ChkIN2175
    {
        public string ReportName;
        public string Area;
        public string CodeSection;
        public string Sequence;
        public string Label;
        public string MIC;
        public string Last_Sampletime;

    }

    public class Truck
    {
        public string TruckId;
        public string ReceiptDate;
        public string ItemType;
        public string Item;
        public string Status;
        public string SentTOSAP;
        public string LoadType;
        public string LoadNumber;
        public string ScaleDown;
        public string Tank1TruckId;
        public string Tank2TruckId;
        public string Route1;
        public string Route2;
        public string ScaleInTime;
        public string ScaleOutTime;
        public string ActualGross;
        public string ActualTare;
        public string ActualNet;
        public string HaulerId;
        public string Trailer1Id;
        public string Trailer2Id;
        public string TrailerLicense1;
        public string TrailerLicense2;
        public string Btu1;
        public string Btu2;
        public string Fips1;
        public string Fips2;
        public string OperatorInitials;
        public string Comments;
        public string Bay;
        public string BayInTime;
        public string Silo1;
        public string Silo2;
        public string Silo3;
        public string Silo4;
        public string ScanCard;
        public string Supervisor;
        public string ManufactureDate;
        public string TruckInBayTime;
        public string RowId;

    }

    public class Quality
    {
        public string SerialNumber;
        public string ProductionOrder;
        public string LotID;
        public string Name;
        public string SavedSampleTime;
        public string SampleTime;
        public string Value;
        public string USL;
        public string Target;
        public string LSL;
        public string Alarms;
        public string Label;
        public string Flag;
        public string Comment;
        public string Cp;
        public string Cpk;
        public string IgnoreSample;
        public string WorkCenter;
        public string Status;
        public string Spare1;
        public string Spare2;
        public string Spare3;
        public string Spare4;
        public string Spare5;
        public string SampleID;

    }
    public class ProdLabel
    {
        public string Type;
        public string PalletNumberBottom;
        public string PalletNumberTop;
        public string ProductionOrder;
        public string Item;
        public string CheeseName;
        public string PrintArea;
        public string NetWeightBottom;
        public string NetWeightTop;
        public string ProductionDate;
        public string PrintedDate;
        public string Sku;
        public string LfcProductCode;
        public string PrintType;
        public string CommentTop;
        public string CommentBottom;
        public string SentToSAP;
        public string LicensePlate;
        public string Plackard;
        public string Variables;

    }


    public class UtilityMetering
    {
        public string MajorGroup;
        public string Area;
        public string MeterTag;
        public string CurrentDate_Value;
        public string PriorDay_Value;
        public string SevenDayAvg_Value;
        public string Goal;
        public string IsManual;

        //all properties

    }
    public class UtilityMeteringCollection
    {
        public List<UtilityMetering> UtilityMeteringList;

        public UtilityMeteringCollection()
        {
            UtilityMeteringList = new List<UtilityMetering>();
        }
    }

    public class CIPTITRSETUP
    {
        public string SkidDesc;
        public string chemicaltype;
        public string maxT;
        public string minT;
        public string titrations;
        public string unitsT;
        public string IsExpired;
        public string TitrationSetupKey;
        public string enabledT;

        //all properties

    }
    public class CIPTITRSETUPCollection
    {
        public List<CIPTITRSETUP> CIPTITRSETUPList;

        public CIPTITRSETUPCollection()
        {
            CIPTITRSETUPList = new List<CIPTITRSETUP>();
        }
    }

    public class listCircuit
    {
        public string CircuitDesc;


    }
    public class listCircuitCollection
    {
        public List<listCircuit> listCircuit;

        public listCircuitCollection()
        {
            listCircuit = new List<listCircuit>();
        }
    }

    public class listChemical
    {
        public string ChemicalDesc;


    }
    public class listChemicalCollection
    {
        public List<listChemical> listChemical;

        public listChemicalCollection()
        {
            listChemical = new List<listChemical>();
        }
    }

    public class listMTempUnitsList
    {
        public string UnitDesc;


    }
    public class listMTempUnitsListCollection
    {
        public List<listMTempUnitsList> listMTempUnitsList;

        public listMTempUnitsListCollection()
        {
            listMTempUnitsList = new List<listMTempUnitsList>();
        }
    }

    public class CIPCHEMENTRY
    {
        public string ChemicalName;
        public string ChemicalTypeKey;
        public string ChemicalCost;
        public string ChemicalCostEUKey;
        public string ChemicalKey;
        public string EUName;
        public string ChemicalTypeDesc;

        //all properties

    }
    public class CIPCHEMENTRYCollection
    {
        public List<CIPCHEMENTRY> CIPCHEMENTRYList;

        public CIPCHEMENTRYCollection()
        {
            CIPCHEMENTRYList = new List<CIPCHEMENTRY>();
        }
    }


    public class CIPMANTEMP
    {
        public string UnitDesc;
        public string UnitValue;
        public string Timestamp;
        public string Action;


        //all properties

    }


    public class CIPMANTEMPCollection
    {
        public List<CIPMANTEMP> CIPMANTEMPList;

        public CIPMANTEMPCollection()
        {
            CIPMANTEMPList = new List<CIPMANTEMP>();
        }
    }




    public class CIPReviewEntry
    {

        //public string UnitDesc;
        //public string WashKey;
        //public string ReviewName;
        //public string ReviewComment;
        //public string ReviewReason;

        public string ReviewKey;
        public string ReviewName;
        public string NameType;
        public string ReviewStatus;
        public string ReviewComment;
        public string ReviewReason;
        public string ReviewTime;
        public string WashKey;
        public string ReviewStatusKey;
        public string ReviewStatusNum;
        public string ReviewStatusDesc;
        //public string ReviewSystemDesc;
        //public string ReviewCircuitDesc;
        //public string ReviewStartTime;
        //public string ReviewEndTime;

        //all properties

    }

    public class CIPReviewEntryCollection
    {
        public List<CIPReviewEntry> CIPReviewEntryList;

        public CIPReviewEntryCollection()
        {
            CIPReviewEntryList = new List<CIPReviewEntry>();
        }
    }

    public class CIPVerifyDataEntry
    {

        public string VerifyKey;
        public string VerifyName;
        public string NameType;
        public string VerifyStatus;
        public string VerifyComment;
        public string VerifyReason;
        public string VerifyTime;
        public string WashKey;
        public string VerifyStatusKey;
        public string VerifyStatusNum;
        public string VerifyStatusDesc;
        //public string VeirifySystemDesc;
        //public string VeirifyCircuitDesc;
        //public string VeirifyStartTime;
        //public string VeirifyEndTime;

        //all properties

    }


    public class CIPVerifyDataEntryCollection
    {
        public List<CIPVerifyDataEntry> CIPVerifyDataEntryList;

        public CIPVerifyDataEntryCollection()
        {
            CIPVerifyDataEntryList = new List<CIPVerifyDataEntry>();
        }
    }


    public class CIPNotes
    {

        public string NotesKey;
        public string VerifyReason;
        public string NotesTime;
        public string NotesComment;
        public string NotesName;


        //all properties

    }

    public class CIPNotesCollection
    {
        public List<CIPNotes> CIPNotesList;

        public CIPNotesCollection()
        {
            CIPNotesList = new List<CIPNotes>();
        }
    }


    public class CIPPCQI
    {

        public string PCQIKey;
        public string PCQIName;
        public string PCQINameType;
        public string PCQIComment;
        public string PCQIESignature;
        public string PCQITime;
        public string PCQIWashKey;
        //all properties

    }

    public class CIPPCQICollection
    {
        public List<CIPPCQI> CIPPCQIList;

        public CIPPCQICollection()
        {
            CIPPCQIList = new List<CIPPCQI>();
        }
    }


    public class CIPLogin
    {
        public string role;

    }

    public class CIPLoginCollection
    {
        public List<CIPLogin> CIPLoginList;

        public CIPLoginCollection()
        {
            CIPLoginList = new List<CIPLogin>();
        }
    }

    public class PhageME
    {
        public string ID;
        public string ProductionDate;
        public string Line;
        public string Location;
        public string LogVatTankSilo;
        public string Phage;
        public string Action;

        //all properties

    }
    public class PhageMECollection
    {
        public List<PhageME> PhageMEList;

        public PhageMECollection()
        {
            PhageMEList = new List<PhageME>();
        }
    }



    public class ServicesCollection
    {
        public List<Service> ServicesList;

        public ServicesCollection()
        {
            ServicesList = new List<Service>();
        }
    }

    public class RptDriverCollection
    {
        public List<RptDriver> RptDriverList;

        public RptDriverCollection()
        {
            RptDriverList = new List<RptDriver>();
        }
    }
    public class CasesValidationCollection
    {
        public List<CasesValidation> CasesValidationList;

        public CasesValidationCollection()
        {
            CasesValidationList = new List<CasesValidation>();
        }
    }

    public class CasesValidationCollectionL
    {
        public List<CasesValidationL> CasesValidationListL;

        public CasesValidationCollectionL()
        {
            CasesValidationListL = new List<CasesValidationL>();
        }
    }

    public class ProductionCollection
    {
        public List<Production> ProductionList;

        public ProductionCollection()
        {
            ProductionList = new List<Production>();
        }
    }
    public class TicketCollection
    {
        public List<Ticket> TicketList;

        public TicketCollection()
        {
            TicketList = new List<Ticket>();
        }
    }
    public class SiloINVCollection
    {
        public List<SiloINV> SiloINVList;

        public SiloINVCollection()
        {
            SiloINVList = new List<SiloINV>();
        }
    }


    public class ConsumptionCollection
    {
        public List<Consumption> ConsumptionList;

        public ConsumptionCollection()
        {
            ConsumptionList = new List<Consumption>();
        }
    }
    public class ChkDOPCollection
    {
        public List<ChkDOP> ChkDOPList;

        public ChkDOPCollection()
        {
            ChkDOPList = new List<ChkDOP>();
        }
    }

    public class ChkWebSpecCollection
    {
        public List<ChkWebSpec> ChkWebSpecList;

        public ChkWebSpecCollection()
        {
            ChkWebSpecList = new List<ChkWebSpec>();
        }
    }

    public class ChkHistorianCollection
    {
        public List<ChkHistorian> ChkHistorianList;

        public ChkHistorianCollection()
        {
            ChkHistorianList = new List<ChkHistorian>();
        }
    }


    public class ChkIN2175Collection
    {
        public List<ChkIN2175> ChkIN2175List;

        public ChkIN2175Collection()
        {
            ChkIN2175List = new List<ChkIN2175>();
        }
    }

    public class TruckCollection
    {
        public List<Truck> TruckList;

        public TruckCollection()
        {
            TruckList = new List<Truck>();
        }
    }

    public class QualityCollection
    {
        public List<Quality> QualityList;

        public QualityCollection()
        {
            QualityList = new List<Quality>();
        }
    }
    public class ProdLabelCollection
    {
        public List<ProdLabel> ProdLabelList;

        public ProdLabelCollection()
        {
            ProdLabelList = new List<ProdLabel>();
        }
    }
    public class DopEnquiry
    {
        public string ProductionDate;
        public string ProductionOrder;
        public string Line;
        public string Material;
        public string MaterialDescription;
        public string WorkCenter;
        public string StorageBin;
        public string AttGroupName;
        public string AttributeName;
        public string AttRank;
        public string CodeSection;
        public string Lower;
        public string Target;
        public string Upper;
        public string GridPos;
        public string ReportingKey;
    }

    public class DopCollection
    {
        public List<DopEnquiry> DopEnquiryList;

        public DopCollection()
        {
            DopEnquiryList = new List<DopEnquiry>();
        }
    }
    //VATMakeRpt
    public class VatMakeRpt
    {
        //public string Production_Date;
        //public string ProductionOrder;
        //public string ReportName;
        //public string LineNumber;
        //public string AttributeName;
        //public string Source;
        //public string MIC;
        //public string Lot_No;
        //public string Position;
        //public string LogicalVat;

        //public string ReportSection;
        //public string PhysUnitNo;
        //public string ProductCode;
        //public string ReportValue;
        //public string Record_UID;
        //public string vLSL;
        //public string vTarget;
        //public string vUSL;
        //public string KPI_Report_Name;
        //public string KPI_RD_Name;

        //public string AvgValue;
        //public string SDevValue;
        //public string DisplaySpecs;
        //public string LatestProductionOrder;
        //public string LatestLSL;
        //public string LatestTarget;
        //public string LatestUSL;
        //public string LatestAverageValue;
        //public string LatestStdDevValue;
        //public string ReportingKey;

        public string LineNumber;
        public string AttributeName;
        public string source;
        public string MIC;
        public string Lvt_100;
        public string Lvt_99;
        public string Lvt_98;
        public string Lvt_97;
        public string Lvt_96;
        public string Lvt_95;
        public string Lvt_94;
        public string Lvt_93;
        public string Lvt_92;
        public string Lvt_91;
        public string Lvt_90;
        public string Lvt_89;
        public string Lvt_88;
        public string Lvt_87;
        public string Lvt_86;
        public string Lvt_85;
        public string Lvt_84;
        public string Lvt_83;
        public string Lvt_82;
        public string Lvt_81;
        public string Lvt_80;
        public string Lvt_79;
        public string Lvt_78;
        public string Lvt_77;
        public string Lvt_76;
        public string Lvt_75;
        public string Lvt_74;
        public string Lvt_73;
        public string Lvt_72;
        public string Lvt_71;
        public string Lvt_70;
        public string Lvt_69;
        public string Lvt_68;
        public string Lvt_67;
        public string Lvt_66;
        public string Lvt_65;
        public string Lvt_64;
        public string Lvt_63;
        public string Lvt_62;
        public string Lvt_61;
        public string Lvt_60;
        public string Lvt_59;
        public string Lvt_58;
        public string Lvt_57;
        public string Lvt_56;
        public string Lvt_55;
        public string Lvt_54;
        public string Lvt_53;
        public string Lvt_52;
        public string Lvt_51;
        public string Lvt_50;
        public string Lvt_49;
        public string Lvt_48;
        public string Lvt_47;
        public string Lvt_46;
        public string Lvt_45;
        public string Lvt_44;
        public string Lvt_43;
        public string Lvt_42;
        public string Lvt_41;
        public string Lvt_40;
        public string Lvt_39;
        public string Lvt_38;
        public string Lvt_37;
        public string Lvt_36;
        public string Lvt_35;
        public string Lvt_34;
        public string Lvt_33;
        public string Lvt_32;
        public string Lvt_31;
        public string Lvt_30;
        public string Lvt_29;
        public string Lvt_28;
        public string Lvt_27;
        public string Lvt_26;
        public string Lvt_25;
        public string Lvt_24;
        public string Lvt_23;
        public string Lvt_22;
        public string Lvt_21;
        public string Lvt_20;
        public string Lvt_19;
        public string Lvt_18;
        public string Lvt_17;
        public string Lvt_16;
        public string Lvt_15;
        public string Lvt_14;
        public string Lvt_13;
        public string Lvt_12;
        public string Lvt_11;
        public string Lvt_10;
        public string Lvt_9;
        public string Lvt_8;
        public string Lvt_7;
        public string Lvt_6;
        public string Lvt_5;
        public string Lvt_4;
        public string Lvt_3;
        public string Lvt_2;
        public string Lvt_1;
    }
    public class VatMakeRptComments
    {
        public string Production_Date;
        public string ProductionOrder;      
        public string LineNumber;
        public string AttributeName;
        public string Source;
        public string MIC;       
        public string Position;
        public string LogicalVat;     
        public string PhysUnitNo;
        public string ProductCode;        
        public string Comments;

        
    }
    public class ChseMakSuprDopRpt
    {
        public string ProductionDate;
        public string ProductionOrder;
        public string Line;
        public string Material;
        public string MaterialDescription;
        public string WorkCenter;
        public string StorageBin;
        public string AttGroupName;
        public string AttributeName;
        public string AttRank;
        public string Lower;
        public string Target;
        public string Upper;
        public string GridPos;
        public string Min_LV;
        public string Max_LV;
        public string ReportingKey;

    }
    public class DOPSeparatorRpt
    {
        public string ProductionDate;
        public string ProductionOrder;
        public string Line;
        public string Material;
        public string MaterialDescription;
        public string WorkCenter;
        public string StorageBin;
        public string AttGroupName;
        public string AttributeName;
        public string AttRank;
        public string Lower;
        public string Target;
        public string Upper;
        public string GridPos;
        public string Min_LV;
        public string Max_LV;
        public string ReportingKey;

    }
    public class VatMakeRptCollection
    {
        //public List<VatMakeRpt> VatMakeRptList;

        public List<IDictionary<string, string>> VatMakeRptList = new List<IDictionary<string, string>>();
       
        //public VatMakeRptCollection ()
        //{
        //    //VatMakeRptList = new List<VatMakeRpt>();
        //    VatMakeRptList = new List<IDictionary<string, string>>();
        //}
    }



    public class VatMakeRptParamCollection
    {
        
        public List<IDictionary<string, string>> VatMakeParamList = new List<IDictionary<string, string>>();

    }

    public class FinishRptCollection
    {
        //public List<VatMakeRpt> VatMakeRptList;

        public List<IDictionary<string, string>> FinishRptList = new List<IDictionary<string, string>>();

        //public VatMakeRptCollection ()
        //{
        //    //VatMakeRptList = new List<VatMakeRpt>();
        //    VatMakeRptList = new List<IDictionary<string, string>>();
        //}
    }


    public class FinishRptParamCollection
    {

        public List<IDictionary<string, string>> FinishParamList = new List<IDictionary<string, string>>();

    }

    public class KPIMultiDtCollection
    {
        public List<IDictionary<string, string>> KPIMultiDtList = new List<IDictionary<string, string>>();

    }

    public class KPISingleDtCollection
    {
        public List<IDictionary<string, string>> KPISingleDtList = new List<IDictionary<string, string>>();

    }

    public class VatMakeRptCommentsCollection
    {
        public List<VatMakeRptComments> VatMakeRptCommentsList;

        public VatMakeRptCommentsCollection()
        {
            VatMakeRptCommentsList = new List<VatMakeRptComments>();
        }
    }
    public class RecPlnRpt
    {
        public string Production_Date;
        public string VPAID;
        public string LineNumber;
        public string Poid;
        public string LogicalVat;
        public string PhysicalVat;
        public string VatProgram;
        public string CookProgram;
        public string DrainProgram;
        public string HtstFeedRate;
        public string Sep1FeedRate;
        public string Sep2FeedRate;
        public string VatFillFPRatio;
        public string TotalCuts;
        public string MilkSupplySilo;
        public string FortSupplySilo;
        public string SwCrSupplySilo;
        public string WCSupplySilo;
        public string StepNumber;
        public string StepDesc;
        public string NextStepTime;
        public string StepTime;
        public string ActualTime;
        public string Planneddwelltime;
        public string CalcPlannedtime;
        public string Delta;


    }

    public class DOPStrChseRpt
    {
        public string ProductionDate;
        public string ProductionOrder;
        public string Line;
        public string Material;
        public string MaterialDescription;
        public string WorkCenter;
        //public string StorageBin;
        public string AttGroupName;
        public string AttributeName;
        public string AttRank;
        public string CodeSection;
        public string Lower;
        public string Target;
        public string Upper;
        //public string GridPos;
        //public string Min_LV;
        //public string Max_LV;
        public string ReportingKey;

    }

    // ChseAnalysisRpt
    public class ChseAnalysisRpt
    {
        public string Line;
        public string Production_Date;
        public string Production_Order;
        public string Product_Code;
        public string Inspection_Lot;
        public string Inspection_Type;
        public string Batch_Number;
        public string Sample_ID;
        public string Sample_Date_Time;
        public string Moist;
        public string Fat;
        public string FDB;
        public string pH;
        public string Salt;
        public string Moist_HiLmt;
        public string Moist_TgLmt;
        public string Moist_LoLmt;
        public string Moist_InSpec;
        public string fat_HiLmt;
        public string fat_TgLmt;
        public string fat_LoLmt;
        public string fat_InSpec;
        public string fdb_HiLmt;
        public string fdb_TgLmt;
        public string fdb_LoLmt;
        public string fdb_InSpec;
        public string pH_HiLmt;
        public string pH_TgLmt;
        public string pH_LoLmt;
        public string pH_InSpec;
        public string salt_HiLmt;
        public string salt_TgLmt;
        public string salt_LoLmt;
        public string salt_InSpec;
        public string Moist_CorpHiLmt;
        public string Moist_CorpTgLmt;
        public string Moist_CorpLoLmt;
        public string Moist_CorpInSpec;
        public string fat_CorpHiLmt;
        public string fat_CorpTgLmt;
        public string fat_CorpLoLmt;
        public string fat_CorpInSpec;
        public string fdb_CorpHiLmt;
        public string fdb_CorpTgLmt;
        public string fdb_CorpLoLmt;
        public string fdb_CorpInSpec;
        public string pH_CorpHiLmt;
        public string pH_CorpTgLmt;
        public string pH_CorpLoLmt;
        public string pH_CorpInSpec;
        public string salt_CorpHiLmt;
        public string salt_CorpTgLmt;
        public string salt_CorpLoLmt;
        public string salt_CorpInSpec;
        public string comment;


    }

    public class PowderBlndRpt
    {
        public string NoltecUnit;
        public string CheeseLine;
        public string DataTimeStamp;
        public string DisplayTimeStamp;
        public string CodeSection;
        public string Batch;
        public string Recipe;
        public string ProductionOrder;
        public string Micros;
        public string Minor1;
        public string Minor2;
        public string Minor3;
        public string Minor4;
        public string Major1;
        public string Major2;
        public string Major3;
        public string Major4;
        public string BatchTotal;

    }
    public class PowderBlndTotalRpt
    {
        public string Report_Type;
        public string NoltecUnit;
        public string CheeseLine;
        public string DataTimeStamp;
        public string DisplayTimeStamp;
        public string CodeSection;
        public string Batch;
        public string Recipe;
        public string ProductionOrder;
        public string Micros;
        public string Minor1;
        public string Minor2;
        public string Minor3;
        public string Minor4;
        public string Major1;
        public string Major2;
        public string Major3;
        public string Major4;
        public string BatchTotal;

    }

    public class RetentateDOPRpt
    {
        public string ProductionDate;
        public string ProductionOrder;
        public string Material;
        public string MaterialDescription;
        public string UOM;
        public string PO_Qty_Required;
        public string WorkCenter;
        public string StorageBin;
        public string AttGroupName;
        public string AttributeName;
        public string AttRank;
        public string DataGroup;
        public string CodeSection;
        public string Lower;
        public string Target;
        public string Upper;
        public string GridPos;
        public string ReportingKey;
    }
        public class ChseMakSuprDopRptCollection
    {
        public List<ChseMakSuprDopRpt> ChseMakSuprDopRptList;

        public ChseMakSuprDopRptCollection()
        {
            ChseMakSuprDopRptList = new List<ChseMakSuprDopRpt>();
        }
    }
    public class DOPSeparatorRptCollection
    {
        public List<DOPSeparatorRpt> DOPSeparatorRptList;

        public DOPSeparatorRptCollection()
        {
            DOPSeparatorRptList = new List<DOPSeparatorRpt>();
        }
    }
    public class RecPlnRptCollection
    {
        public List<RecPlnRpt> RecPlnRptList;

        public RecPlnRptCollection()
        {
            RecPlnRptList = new List<RecPlnRpt>();
        }
    }
    public class DOPStrChseRptCollection
    {
        public List<DOPStrChseRpt> DOPStrChseRptList;

        public DOPStrChseRptCollection()
        {
            DOPStrChseRptList = new List<DOPStrChseRpt>();
        }
    }

    public class ChseAnalysisRptCollection
    {
        public List<ChseAnalysisRpt> ChseAnalysisRptList;

        public ChseAnalysisRptCollection()
        {
            ChseAnalysisRptList = new List<ChseAnalysisRpt>();
        }
    }
    
    public class PowderBlndRptCollection
    {
        public List<PowderBlndRpt> PowderBlndRptList;

        public PowderBlndRptCollection()
        {
            PowderBlndRptList = new List<PowderBlndRpt>();
        }
    }
    public class PowderBlndTotalRptCollection
    {
        public List<PowderBlndTotalRpt> PowderBlndTotalRptList;

        public PowderBlndTotalRptCollection()
        {
            PowderBlndTotalRptList = new List<PowderBlndTotalRpt>();
        }
    }

    public class RetentateDOPRptCollection
    {
        public List<RetentateDOPRpt> RetentateDOPRptCollectionList;

        public RetentateDOPRptCollection()
        {
            RetentateDOPRptCollectionList = new List<RetentateDOPRpt>();
        }
    }

    public class MixerTotalizerRpt
    {
        public string DataDatetime;
        public string Line;
        public string Production_Order;
        public string Cheese_Code;
        public string Data_group;
        public string Label;
        public string DataDate;
        public string DataTime;
        public string DataValue;
        public string Source;
        public string MIC;
        public string HiddenRecord;
        public string Record_UID;
        public string Sequence;
        public string LSL;
        public string Target;
        public string USL;
        public string AvgValue;
        public string STDEVValue;
        public string KPI_ReportName;
        public string KPI_RD_Name;
        public string DisplaySpecs;
        public string LatestProductionOrder;
        public string LatestLSL;
        public string LatestTarget;
        public string LatestUSL;
        public string LatestAvgValue;
        public string LatestSTDDEVValue;
        public string ReportingKey;
        public string TotalLbsPerPO;
        public string EndLbsPerPO;

    }

    public class MixerTotalizerRptCollection
    {
        public List<MixerTotalizerRpt> MixerTotalizerRptList;

        public MixerTotalizerRptCollection()
        {
            MixerTotalizerRptList = new List<MixerTotalizerRpt>();
        }
    }


    public class ProjectList
    {
        public string ProjectName;
        public string ProjectStepName;
        public string Priority;
        public string Description;
        public string ProjectLifeCycle;
        public string ProjectType;
        public string TicketNum;
        public string ProjIdeation;
        public string ProjectScope;
        public string ProjectStatus;
        public string ESTTotalHours;
        public string NumofPMResource;
        public string NumofBAResources;
        public string NumofAPPSResources;
        //public string PMName;
        public string BAResourceName1;
        public string BAResource1Status;
        public string HoursSpentBA1;
        public string BAResourceName2;
        public string BAResource2Status;
        public string HoursSpentBA2;
        public string TotalHoursSpentBA;
        public string APPSResourceName1;
        public string APPSResource1Status;
        //public string HoursSpentAPPS1;
        public string APPSResourceName2;
        public string APPSResource2Status;
        //public string HoursSpentAPPS2;
        public string APPSResourceName3;
        public string APPSResource3Status;
        //public string HoursSpentAPPS3;
        public string APPSResourceName4;
        public string APPSResource4Status;
        //public string HoursSpentAPPS4;
        public string AssignedTo;
        public string HoursSpent;
        public string TotalHoursSpentAPPS;
        public string InsertDateTime;
        public string InsertUserName;
        public string UpdateDateTime;
        public string UpdateUserName;
        public string ReportedInMonthEnd;

        public string PercentComplete;
        public string EstStartDate;
        public string EstCompleteDate;
        public string row_id;

    }

    public class ProjectListCollection
    {
        public List<ProjectList> ProjectListList;

        public ProjectListCollection()
        {
            ProjectListList = new List<ProjectList>();
        }
    }


    public class listProject
    {
        public string ProjectName;


    }
    public class listProjectCollection
    {
        public List<listProject> listProjectList;

        public listProjectCollection()
        {
            listProjectList = new List<listProject>();
        }
    }

    public class listArea
    {
        public string AreaName;


    }
    public class listAreaCollection
    {
        public List<listArea> listArea;

        public listAreaCollection()
        {
            listArea = new List<listArea>();
        }
    }

    public class listProjectDD
    {
        public string ProjectDDName;

    }

    public class listProjectDDCollection
    {
        public List<listProjectDD> listProjectDD;

        public listProjectDDCollection()
        {
            listProjectDD = new List<listProjectDD>();
        }
    }

    public class ProjectRes
    {
        public string ProjectName;
        //public string Vamshi;
        //public string Varun;
        //public string Rory;
        //public string Abdel;
        public string AssignedTo;
        public string TotalHours;
        public string EstTotal;
        public string PercentComplete;
        public string InsertDateTime;
        public string row_id;

    }

    public class ProjectResCollection
    {
        public List<ProjectRes> ProjectResList;

        public ProjectResCollection()
        {
            ProjectResList = new List<ProjectRes>();
        }
    }
    public class Defect
    {
        public string ProjectName;
        public string DefectName;
        public string Priority;
        public string Status;
        public string Description;
        public string Type;
        public string TestCycle;
        public string EnteredBy;
        public string AssignedTo;
        public string InsertDateTime;
        public string UpdateDateTime;
        public string Comment;
        public string TotalHoursSpentAPPS;
        public string EstStartDate;
        public string EstCompleteDate;
        public string row_id;
        public string ProdArea;
        public string TotalOpenTask;
        public string TotalAssignedTasks;
        public string PercentResp;
        public string PlanStartDate;
        public string PlanCompleteDate;
        public string BusReqCompleteDate;


    }
    public class DefectCollection
    {
        public List<Defect> DefectList;

        public DefectCollection()
        {
            DefectList = new List<Defect>();
        }
    }

    public class ServDeskEntry
    {
        public string IncidentIDValue;
        public string ProcessInputValue;
        public string ApplicationInputValue;
        public string ReportInputValue;
        public string LITInputValue;
        public string HardwareInputValue;
        public string SDTechNameValue;
        public string CreateDateValue;


    }
    public class ServDeskEntryCollection
    {
        public List<ServDeskEntry> ServDeskEntryList;

        public ServDeskEntryCollection()
        {
            ServDeskEntryList = new List<ServDeskEntry>();
        }
    }


    //public class ProcessDoc
    //{
    //    public string TitleValue;
    //    public string IssueAreaTB1Value;
    //    public string IssueAreaTB2Value;
    //    public string NumStepsValue;
    //    public string ProcessTB1Value;
    //    public string ProcessTBMsg1Value;
    //    public string ProcessTB2Value;
    //    public string ProcessTBMsg2Value;
    //    public string ProcessTB3Value;
    //    public string ProcessTBMsg3Value;
    //    public string ProcessTB4Value;
    //    public string ProcessTBMsg4Value;
    //    public string ProcessTB5Value;
    //    public string ProcessTBMsg5Value;
    //    public string ProcessTB6Value;
    //    public string ProcessTBMsg6Value;
    //    public string ProcessTB7Value;
    //    public string ProcessTBMsg7Value;
    //    public string ProcessTB8Value;
    //    public string ProcessTBMsg8Value;
    //    public string ProcessTB9Value;
    //    public string ProcessTBMsg9Value;
    //    public string ProcessTB10Value;
    //    public string ProcessTBMsg10Value;
    //    public string InsertDateTimeValue;


    //}

    public class ProcessDoc
    {
        public string Title;
        public string IssueAreaTB1;
        public string IssueAreaTB2;
        public string NumSteps;
        public string ProcessTB1;
        public string ProcessTBMsg1;
        public string ProcessTB2;
        public string ProcessTBMsg2;
        public string ProcessTB3;
        public string ProcessTBMsg3;
        public string ProcessTB4;
        public string ProcessTBMsg4;
        public string ProcessTB5;
        public string ProcessTBMsg5;
        public string ProcessTB6;
        public string ProcessTBMsg6;
        public string ProcessTB7;
        public string ProcessTBMsg7;
        public string ProcessTB8;
        public string ProcessTBMsg8;
        public string ProcessTB9;
        public string ProcessTBMsg9;
        public string ProcessTB10;
        public string ProcessTBMsg10;
        public string InsertDateTime;


    }


    public class ProcessDocCollection
    {
        public List<ProcessDoc> ProcessDocList;

        public ProcessDocCollection()
        {
            ProcessDocList = new List<ProcessDoc>();
        }
    }



    public class IN2164PO
    {
        public string ProductionOrder_Id;
        public string ProductionOrderNumber;
        public string MaterialNumber;
        public string TotalQuantity;
        public string ScheduledStartTime;
        public string ScheduledEndTime;
        public string StorageLocationReceipt;
        public string FatProtRatio;
        public string MilkProtein;
        public string MilkFat;
        public string RetFactor;
        public string Moisture;
        public string Salt;
        public string Fat;
        public string pH;
        public string SetPH;
        public string NumVats;


    }


    public class IN2164POCollection
    {
        public List<IN2164PO> IN2164POList;

        public IN2164POCollection()
        {
            IN2164POList = new List<IN2164PO>();
        }
    }


    public class IN2164BOMItem
    {
        public string ProductionOrderNumber;
        public string BOMPosition;
        public string ComponentMaterial;
        public string ComponentQuantity;
        public string OperationAssignment;
        public string StorageLocation;
        public string StorageLocationDesc;
        public string RoutingOperationNumber;
        public string OperationWorkCenter;
        public string OperationShortText;
        public string CoProductFlag;
        public string NumVessels;
        public string ProductionOrder_Id;


    }


    public class IN2164BOMItemCollection
    {
        public List<IN2164BOMItem> IN2164BOMItemList;

        public IN2164BOMItemCollection()
        {
            IN2164BOMItemList = new List<IN2164BOMItem>();
        }
    }


    public class IN2164Spec
    {
        public string ProductionOrderNumber;
        public string Name;
        public string Value;
        public string Lower;
        public string Upper;
        public string DOPGroup;
        public string Material;
        public string Specs_ID;
        public string POIDSpec_ID;


    }


    public class IN2164SpecCollection
    {
        public List<IN2164Spec> IN2164SpecList;

        public IN2164SpecCollection()
        {
            IN2164SpecList = new List<IN2164Spec>();
        }
    }






    public class IN2165Insp
    {
        public string Specification_Id;
        public string SpecificationName;
        public string SpecificationDesc;
        public string ProductionOrder;
        public string InspectionLot;



    }


    public class IN2165InspCollection
    {
        public List<IN2165Insp> IN2165InspList;

        public IN2165InspCollection()
        {
            IN2165InspList = new List<IN2165Insp>();
        }
    }



    public class IN2165Attribute
    {
        public string InspectionLot;
        public string AttributeName;
        public string AttributeTitle;
        public string AttributeGroup;
        public string AttributeRank;
        public string EntryLabelGroup;
        public string AnalysisName;
        public string TestRequired;
        public string LimitsUOM;
        public string USL;
        public string Target;
        public string LSL;
        public string Spare1;
        public string Spare2;
        public string Spare3;
        public string Spare4;
        public string SaveReasonCodes;
        public string Operation;
        public string OperationWorkCenter;
        public string DisplayDigits;
        public string ConfirmationNumber;
        public string RecordingType;
        public string AutoSave;
        public string Specification_Id;


    }


    public class IN2165AttributeCollection
    {
        public List<IN2165Attribute> IN2165AttributeList;

        public IN2165AttributeCollection()
        {
            IN2165AttributeList = new List<IN2165Attribute>();
        }
    }


    public class IN2165AttributeGroup
    {
        public string InspectionLot;
        public string AttributeGroupName;
        public string AttributeGroupDescription;
        public string AutoGenerateSampleID;
        public string Specification_Id;



    }


    public class IN2165AttributeGroupCollection
    {
        public List<IN2165AttributeGroup> IN2165AttributeGroupList;

        public IN2165AttributeGroupCollection()
        {
            IN2165AttributeGroupList = new List<IN2165AttributeGroup>();
        }
    }




    public class INJobSchedule
    {
        public string RowID;
        public string ProductionOrder;
        public string InspectionLot;
        public string SpecID;
        public string POID;
        public string IN2164_Status;
        public string IN2165_Status;
        public string StartDate;
        public string EndDate;
        public string PRID;
        public string INSPID;
        public string MAT;
        public string SP;
    }


    public class INJobScheduleCollection
    {
        public List<INJobSchedule> INJobScheduleList;

        public INJobScheduleCollection()
        {
            INJobScheduleList = new List<INJobSchedule>();
        }
    }



    public class Estimator
    {
        public string Area;
        public string UIName;
        public string Complexity;
        public string BAHours;
        public string AppsAnalysisHours;
        public string DevelopmentHours;
        public string TestingHours;
        public string DeploymentHours;
        public string TrainingHours;
        public string TotalHours;
        public string MassTotalHours;
        public string Rate;
        public string HardwareCost;
        public string SoftwareCost;
        public string ConsultingCost;
        public string TotalCost;
        public string row_id;

    }
    public class EstimatorCollection
    {
        public List<Estimator> EstimatorList;

        public EstimatorCollection()
        {
            EstimatorList = new List<Estimator>();
        }
    }

    public class ChangeMgmt
    {
        public string ReleaseName;
        public string FS;
        public string BusinessLead;
        public string BLSign;
        public string BusinessApprover;
        public string BApproverSign;
        public string DEVandTS;
        public string Developer;
        public string DEVSign;
        public string ST;
        public string TechLead;
        public string TLSign;
        public string AppsApprover;
        public string AppsApproverSign;
        public string FUT;
        public string BLSign2;
        public string DEVSign2;
        public string TLSign2;
        public string AppsApproverSign2;
        public string PackageLocation;
        public string ScreenShotLocation;
        public string LockedDateTime;
        public string Status;
        public string Description;
        public string TestCycle;
        public string EnteredBy;
        public string FSLocation;
        public string Comment;
        public string row_id;
        public string TrainerName;
        public string PlantContact;
        public string TechSpecLocation;
        public string TestScriptLocation;
        public string PRODDeployDate;
        public string ControlsAnalyst;
        public string DeployStatus;
        public string DeployPlants;
        public string Updates;
        public string AssignedTo;
        public string ProjectID;
        public string ProjectName;

    }
    public class ChangeMgmtCollection
    {
        public List<ChangeMgmt> ChangeMgmtList;

        public ChangeMgmtCollection()
        {
            ChangeMgmtList = new List<ChangeMgmt>();
        }
    }


    public class ProjectAddCollection
    {
        public List<ProjectList> ProjectListAdd;

        public ProjectAddCollection()
        {
            ProjectListAdd = new List<ProjectList>();
        }
    }
    public class ProcessingMassBalance
    {
        public string Plant;
        public string LINE;
        public string Production_Date;
        public string Production_Order;
        public string Material_Number;
        public string Oper_ID;
        public string Area;
        public string Weight_Date_Time;
        public string Weight_Time;
        public string Weight_Name;
        public string Weight_Value;
    }

    public class ProcessingMassBalanceCollection
    {
        public List<ProcessingMassBalance> ProcessingMassBalanceList;

        public ProcessingMassBalanceCollection()
        {
            ProcessingMassBalanceList = new List<ProcessingMassBalance>();
        }
    }


}