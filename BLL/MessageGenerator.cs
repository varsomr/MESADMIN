using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BO.Models;
using DAL.Data;
using BLL.Interfaces;
using System.Data;
using System.Text;
using System.Xml;
using System.IO;

namespace BLL
{
    public class MessageGenerator : IMessage

    {
        public ProjectCollection GetCollection(string handle, string sql)
        {
            ProjectCollection mc = new ProjectCollection();
            DataSet ds = DBConnection.DBConnectProjects("MAINProject_ALL", handle, sql);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                //Create message object
                Message message = new Message();
                //message.messageid=dr[0];
                //Create message object
                //ProjectList MessageList = new ProjectList();
                //message.messageid=dr[0];
                message.ProjectName = dr[0].ToString();
                message.ProjectStepName = dr[1].ToString();
                message.Priority = dr[2].ToString();
                message.Description = dr[3].ToString();
                message.ProjectLifeCycle = dr[4].ToString();
                message.ProjectType = dr[5].ToString();
                message.TicketNum = dr[6].ToString();
                message.ProjIdeation = dr[7].ToString();
                message.ProjectScope = dr[8].ToString();
                message.ProjectStatus = dr[9].ToString();
                message.ESTTotalHours = dr[10].ToString();
                message.NumofPMResource = dr[11].ToString();
                message.NumofBAResources = dr[12].ToString();
                message.NumofAPPSResources = dr[13].ToString();
                message.PMName = dr[14].ToString();
                message.BAResourceName1 = dr[15].ToString();
                message.BAResource1Status = dr[16].ToString();
                message.HoursSpentBA1 = dr[17].ToString();
                message.BAResourceName2 = dr[18].ToString();
                message.BAResource2Status = dr[19].ToString();
                message.HoursSpentBA2 = dr[20].ToString();
                message.TotalHoursSpentBA = dr[21].ToString();
                message.APPSResourceName1 = dr[22].ToString();
                message.APPSResource1Status = dr[23].ToString();
                message.HoursSpentAPPS1 = dr[24].ToString();
                message.APPSResourceName2 = dr[25].ToString();
                message.APPSResource2Status = dr[26].ToString();
                message.HoursSpentAPPS2 = dr[27].ToString();
                message.APPSResourceName3 = dr[28].ToString();
                message.APPSResource3Status = dr[29].ToString();
                message.HoursSpentAPPS3 = dr[30].ToString();
                message.APPSResourceName4 = dr[31].ToString();
                message.APPSResource4Status = dr[32].ToString();
                message.HoursSpentAPPS4 = dr[33].ToString();
                message.TotalHoursSpentAPPS = dr[34].ToString();
                message.InsertDateTime = dr[35].ToString();
                message.InsertUserName = dr[36].ToString();
                message.UpdateDateTime = dr[37].ToString();
                message.UpdateUserName = dr[38].ToString();
                message.ReportedInMonthEnd = dr[39].ToString();
                message.PercentComplete = dr[40].ToString();
                message.EstStartDate = dr[41].ToString();
                message.EstCompleteDate = dr[42].ToString();
                message.row_id = dr[43].ToString();
                //mc.ProjectListList.Add(projectlist);


                mc.MessageList.Add(message);
            }

            return mc;
        }

        public TasksCollection GetTaskCollection()
        {
            TasksCollection mc = new TasksCollection();
            DataSet ds = DBConnection.DBConnect("Estimate_Defect_Unmatched");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                //Create message object
                Tasks message = new Tasks();
                message.ProjectName = dr[0].ToString();
                message.DefectName = dr[1].ToString();
                message.Priority = dr[2].ToString();
                message.Status = dr[3].ToString();
                message.Description = dr[4].ToString();
                message.TestCycle = dr[5].ToString();
                message.EnteredBy = dr[6].ToString();
                message.AssignedTo = dr[7].ToString();
                message.InsertDateTime = dr[8].ToString();
                message.UpdateDateTime = dr[9].ToString();
                message.Comment = dr[10].ToString();
                message.TotalHoursSpentAPPS = dr[11].ToString();
                message.EstStartDate = dr[12].ToString();
                message.EstCompleteDate = dr[13].ToString();
                message.row_id = dr[14].ToString();

                //mc.ProjectListList.Add(projectlist);


                mc.TasksList.Add(message);
            }

            return mc;
        }

        public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

        public void saveMainProject(string id, string colname, string colval)
        {
            DBConnection.DBProjectSave("csp_U_MAINProject", id, colname, colval);
        }

        public void saveTestConfig(string id, string colname, string colval)
        {

            DBConnection.DBConSave("csp_U_LITTestingConfig", id, colname, colval);

            // string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }
        //public void addMainProject()
        //{

        //    DBConnection.DBConnectaddMainProject("csp_I_MAINProject");
        //}

        public void addMainProject(string ProjectNameValue, string DescriptionValue, string requestorValue, string EstTotalHoursValue, string EstStartDateDValue, string EstCompleteDateDValue, string PriorityValue, string StatusValue, string row_idValue)
        {

            DBConnection.DBConnectaddMainProject("csp_I_MAINProject_ALL", ProjectNameValue, DescriptionValue, requestorValue, EstTotalHoursValue, EstStartDateDValue, EstCompleteDateDValue, PriorityValue, StatusValue, row_idValue);
        }

        public void approveTasks(string ProjectNameValue, string DefectNameValue, string PriorityValue, string StatusValue, string DescriptionValue, string TestCycleValue, string EnteredByValue, string AssignedToValue, string InsertDateTimeValue, string UpdateDateTimeValue, string CommentValue, string TotalHoursSpentAPPSValue, string EstStartDateValue, string EstCompleteDateValue, string row_idValue)
        {

            DBConnection.DBConnectapproveTasks("csp_I_Estimate_Defect_Unmatched", ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TestCycleValue, EnteredByValue, AssignedToValue, InsertDateTimeValue, UpdateDateTimeValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue);
        }

        public void deleteMainProject(List<string> objarray)
        {
            foreach (string id in objarray)
            {
                DBConnection.DBProjectDelete("csp_D_MainProject_ALL", id.ToString());
            }
        }

        public void saveProjectListServices(string id, string colname, string colval)
        {

            DBConnection.DBProjectSave("csp_U_ProjectList", id, colname, colval);

        }

    }




    public class ServicesGenerator : IServices
    {
        public ServicesCollection GetServicesCollection()
        {
            ServicesCollection sc = new ServicesCollection();
            DataSet ds2 = DBConnection.DBConnect("csp_LITTestingResults");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in ds2.Tables[0].Rows)
            {
                //Create service object
                Service service = new Service();
                service.Recipe = dr2[0].ToString();
                service.TestArea = dr2[1].ToString();
                service.Testcycle = Convert.ToInt32(dr2[2]);
                service.WorkOrder = dr2[3].ToString();
                service.Item = dr2[4].ToString();
                service.Quantity = dr2[5].ToString();
                service.WorkCenter = dr2[6].ToString();
                service.Operation = dr2[7].ToString();
                service.InspectionLot = dr2[8].ToString();
                service.Spare1 = dr2[9].ToString();
                service.Spare2 = dr2[10].ToString();
                service.Spare3 = dr2[11].ToString();
                service.Spare4 = dr2[12].ToString();
                service.Spare5 = dr2[13].ToString();
                service.InsertTime = dr2[14].ToString();
                service.RowId = Convert.ToInt32(dr2[15]);
                sc.ServicesList.Add(service);
            }

            return sc;
        }



    }
    public class CasesValidationGenerator : ICasesValidation
    {
        public CasesValidationCollection GetCasesValidationCollection(string plant)
        {
            CasesValidationCollection rc = new CasesValidationCollection();
            DataSet dsRpt = DBConnection.DBConnectCasesValidation("_usp_RetriveCasesValidation_dw", plant);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                CasesValidation rptdriver = new CasesValidation();
                rptdriver.RowID = dr2[0].ToString();
                rptdriver.Material = dr2[1].ToString();
                rptdriver.CaseScannedLeft = dr2[2].ToString();
                rptdriver.CaseScannedRight = dr2[3].ToString();
                rptdriver.Last_Edit_time = dr2[4].ToString();
                rptdriver.Created_Date_Time = dr2[5].ToString();
                rptdriver.Area = dr2[6].ToString();
                rptdriver.CompleteStatus = dr2[7].ToString();
                rptdriver.UserEdited = dr2[8].ToString();
                rc.CasesValidationList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class CasesValidationGeneratorL : ICasesValidationL
    {
        public CasesValidationCollectionL GetCasesValidationCollectionL(string plant, string Area)
        {
            CasesValidationCollectionL rc = new CasesValidationCollectionL();
            DataSet dsRpt = DBConnection.DBConnectCasesValidationL("_usp_CasesValidationWorkCenter", plant, Area);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                CasesValidationL rptdriver = new CasesValidationL();
                rptdriver.Material = dr2[0].ToString();
                rptdriver.Layer = dr2[1].ToString();
                rptdriver.Scanned_Cases = dr2[2].ToString();
                rptdriver.UnScanned_Cases = dr2[3].ToString();
                rptdriver.Total_Cases = dr2[4].ToString();

                rc.CasesValidationListL.Add(rptdriver);
            }

            return rc;
        }



    }


    public class ProductionGenerator : IProduction
    {
        public ProductionCollection GetProductionCollection(string plant, string wo_id)
        {
            ProductionCollection rc = new ProductionCollection();
            DataSet dsRpt = DBConnection.DBConnectProduction("_usp_RetriveProd", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                Production rptdriver = new Production();
                rptdriver.PO = dr2[0].ToString();
                rptdriver.Operation = dr2[1].ToString();
                rptdriver.Item = dr2[2].ToString();
                rptdriver.Batch = dr2[3].ToString();
                rptdriver.ReasonCode = dr2[4].ToString();
                rptdriver.WorkCenter = dr2[5].ToString();
                rptdriver.JobStatus = dr2[6].ToString();
                rptdriver.ent_id = dr2[7].ToString();
                rptdriver.to_ent_id = dr2[8].ToString();
                rptdriver.qty = dr2[9].ToString();
                rptdriver.SentToSAP = dr2[10].ToString();
                rptdriver.comments = dr2[11].ToString();
                rptdriver.spare1 = dr2[12].ToString();
                rptdriver.spare2 = dr2[13].ToString();
                rptdriver.spare3 = dr2[14].ToString();
                rptdriver.spare4 = dr2[15].ToString();
                rptdriver.last_edit_by = dr2[16].ToString();
                rptdriver.last_edit_at = dr2[17].ToString();
                rptdriver.created_at_utc = dr2[18].ToString();
                rptdriver.created_at_local = dr2[19].ToString();


                rc.ProductionList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class TicketGenerator : ITicket
    {
        public TicketCollection GetTicketCollection(string wo_id)
        {
            TicketCollection rc = new TicketCollection();
            DataSet dsRpt = DBConnection.DBConnectTicket("_usp_r_RetriveTickets", wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                Ticket rptdriver = new Ticket();
                rptdriver.Category = dr2[0].ToString();
                rptdriver.IncidentType = dr2[1].ToString();
                rptdriver.IncidentID = dr2[2].ToString();
                rptdriver.ShortDescription = dr2[3].ToString();
                rptdriver.TotalApps = dr2[4].ToString();
                rptdriver.TotalReports = dr2[5].ToString();
                rptdriver.TotalIncidents = dr2[6].ToString();
                rptdriver.TotalSRVRequests = dr2[7].ToString();



                rc.TicketList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class ConsumptionGenerator : IConsumption
    {
        public ConsumptionCollection GetConsumptionCollection(string plant, string wo_id)
        {
            ConsumptionCollection rc = new ConsumptionCollection();
            DataSet dsRpt = DBConnection.DBConnectConsumption("_usp_RetriveCons", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                Consumption rptdriver = new Consumption();
                rptdriver.PO = dr2[0].ToString();
                rptdriver.Operation = dr2[1].ToString();
                rptdriver.Item = dr2[2].ToString();
                rptdriver.Batch = dr2[3].ToString();
                rptdriver.sublot_no = dr2[4].ToString();
                rptdriver.ReasonCode = dr2[5].ToString();
                rptdriver.WorkCenter = dr2[6].ToString();
                rptdriver.JobStatus = dr2[7].ToString();
                rptdriver.ent_id = dr2[8].ToString();
                rptdriver.to_ent_id = dr2[9].ToString();
                rptdriver.qty = dr2[10].ToString();
                rptdriver.SentToSAP = dr2[11].ToString();
                rptdriver.comments = dr2[12].ToString();
                rptdriver.spare1 = dr2[13].ToString();
                rptdriver.spare2 = dr2[14].ToString();
                rptdriver.spare3 = dr2[15].ToString();
                rptdriver.spare4 = dr2[16].ToString();
                rptdriver.last_edit_by = dr2[17].ToString();
                rptdriver.last_edit_at = dr2[18].ToString();
                rptdriver.created_at_utc = dr2[19].ToString();
                rptdriver.created_at_local = dr2[20].ToString();


                rc.ConsumptionList.Add(rptdriver);
            }

            return rc;
        }



    }
    public class ChkDOPGenerator : IChkDOP
    {
        public ChkDOPCollection GetChkDOPCollection(string plant, string wo_id)
        {
            ChkDOPCollection rc = new ChkDOPCollection();
            DataSet dsRpt = DBConnection.DBConnectChkDOP("_usp_r_Chk_DOP", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                ChkDOP rptdriver = new ChkDOP();
                rptdriver.PODate = dr2[0].ToString();
                rptdriver.Oper_Type = dr2[1].ToString();
                rptdriver.Oper_id = dr2[2].ToString();
                rptdriver.ProductionOrder = dr2[3].ToString();
                rptdriver.Material = dr2[4].ToString();
                rptdriver.Material_Desc = dr2[5].ToString();
                rptdriver.Current_State = dr2[6].ToString();
                rc.ChkDOPList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class ChkWebSpecGenerator : IChkWebSpec
    {
        public ChkWebSpecCollection GetChkWebSpecCollection(string plant, string wo_id)
        {
            ChkWebSpecCollection rc = new ChkWebSpecCollection();
            DataSet dsRpt = DBConnection.DBConnectChkWebSpec("_usp_r_Chk_WebSpec", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                ChkWebSpec rptdriver = new ChkWebSpec();
                rptdriver.ReportName = dr2[0].ToString();
                rptdriver.Area = dr2[1].ToString();
                rptdriver.CodeSection = dr2[2].ToString();
                rptdriver.Sequence = dr2[3].ToString();
                rptdriver.Label = dr2[4].ToString();
                rptdriver.AttributeName = dr2[5].ToString();
                rptdriver.Last_Sampletime = dr2[6].ToString();
                rc.ChkWebSpecList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class ChkHistorianGenerator : IChkHistorian
    {
        public ChkHistorianCollection GetChkHistorianCollection(string plant, string wo_id)
        {
            ChkHistorianCollection rc = new ChkHistorianCollection();
            DataSet dsRpt = DBConnection.DBConnectChkHistorian("_usp_r_Chk_Historian", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                ChkHistorian rptdriver = new ChkHistorian();
                rptdriver.ReportName = dr2[0].ToString();
                rptdriver.Area = dr2[1].ToString();
                rptdriver.CodeSection = dr2[2].ToString();
                rptdriver.Sequence = dr2[3].ToString();
                rptdriver.Label = dr2[4].ToString();
                rptdriver.Tier1Tag = dr2[5].ToString();
                rptdriver.Tier2Tag = dr2[6].ToString();
                rptdriver.Tier2Value = dr2[7].ToString();
                rc.ChkHistorianList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class ChkIN2175Generator : IChkIN2175
    {
        public ChkIN2175Collection GetChkIN2175Collection(string plant, string wo_id)
        {
            ChkIN2175Collection rc = new ChkIN2175Collection();
            DataSet dsRpt = DBConnection.DBConnectChkIN2175("_usp_r_Chk_IN2175", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                ChkIN2175 rptdriver = new ChkIN2175();
                rptdriver.ReportName = dr2[0].ToString();
                rptdriver.Area = dr2[1].ToString();
                rptdriver.CodeSection = dr2[2].ToString();
                rptdriver.Sequence = dr2[3].ToString();
                rptdriver.Label = dr2[4].ToString();
                rptdriver.MIC = dr2[5].ToString();
                rptdriver.Last_Sampletime = dr2[6].ToString();

                rc.ChkIN2175List.Add(rptdriver);
            }

            return rc;
        }



    }


    public class SiloINVGenerator : ISiloINV
    {
        public SiloINVCollection GetSiloINVCollection(string plant, string wo_id)
        {
            SiloINVCollection rc = new SiloINVCollection();
            DataSet dsRpt = DBConnection.DBConnectSiloINV("_usp_Daily_Silo_Inventory", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                SiloINV rptdriver = new SiloINV();
                rptdriver.Production_Date = dr2[0].ToString();
                rptdriver.Material_Number = dr2[1].ToString();
                rptdriver.Material_Description = dr2[2].ToString();
                rptdriver.Silo_ID = dr2[3].ToString();
                rptdriver.Silo_Level = dr2[4].ToString();
                rptdriver.Silo_RTD = dr2[5].ToString();
                rptdriver.Chem_Sample_ID = dr2[6].ToString();
                rptdriver.Chem_Sample_Time = dr2[7].ToString();
                rptdriver.Fat = dr2[8].ToString();
                rptdriver.Protein = dr2[9].ToString();
                rptdriver.Solids = dr2[10].ToString();
                rptdriver.SNF = dr2[11].ToString();
                rptdriver.TotalSolids = dr2[12].ToString();
                rptdriver.Babcock = dr2[13].ToString();
                rptdriver.TA = dr2[14].ToString();
                rptdriver.pH = dr2[15].ToString();
                rptdriver.Micro_Sample_ID = dr2[16].ToString();
                rptdriver.Micro_Sample_Time = dr2[17].ToString();
                rptdriver.Sort_Order = dr2[18].ToString();



                rc.SiloINVList.Add(rptdriver);
            }

            return rc;
        }



    }
    public class TruckGenerator : ITruck
    {
        public TruckCollection GetTruckCollection(string plant, string wo_id)
        {
            TruckCollection rc = new TruckCollection();
            DataSet dsRpt = DBConnection.DBConnectTruck("_usp_RetriveMRTruck", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                Truck rptdriver = new Truck();
                rptdriver.TruckId = dr2[0].ToString();
                rptdriver.ReceiptDate = dr2[1].ToString();
                rptdriver.ItemType = dr2[2].ToString();
                rptdriver.Item = dr2[3].ToString();
                rptdriver.Status = dr2[4].ToString();
                rptdriver.SentTOSAP = dr2[5].ToString();
                rptdriver.LoadType = dr2[6].ToString();
                rptdriver.LoadNumber = dr2[7].ToString();
                rptdriver.ScaleDown = dr2[8].ToString();
                rptdriver.Tank1TruckId = dr2[9].ToString();
                rptdriver.Tank2TruckId = dr2[10].ToString();
                rptdriver.Route1 = dr2[11].ToString();
                rptdriver.Route2 = dr2[12].ToString();
                rptdriver.ScaleInTime = dr2[13].ToString();
                rptdriver.ScaleOutTime = dr2[14].ToString();
                rptdriver.ActualGross = dr2[15].ToString();
                rptdriver.ActualTare = dr2[16].ToString();
                rptdriver.ActualNet = dr2[17].ToString();
                rptdriver.HaulerId = dr2[18].ToString();
                rptdriver.Trailer1Id = dr2[19].ToString();
                rptdriver.Trailer2Id = dr2[20].ToString();
                rptdriver.TrailerLicense1 = dr2[21].ToString();
                rptdriver.TrailerLicense2 = dr2[22].ToString();
                rptdriver.Btu1 = dr2[23].ToString();
                rptdriver.Btu2 = dr2[24].ToString();
                rptdriver.Fips1 = dr2[25].ToString();
                rptdriver.Fips2 = dr2[26].ToString();
                rptdriver.OperatorInitials = dr2[27].ToString();
                rptdriver.Comments = dr2[28].ToString();
                rptdriver.Bay = dr2[29].ToString();
                rptdriver.BayInTime = dr2[30].ToString();
                rptdriver.Silo1 = dr2[31].ToString();
                rptdriver.Silo2 = dr2[32].ToString();
                rptdriver.Silo3 = dr2[33].ToString();
                rptdriver.Silo4 = dr2[34].ToString();
                rptdriver.ScanCard = dr2[35].ToString();
                rptdriver.Supervisor = dr2[36].ToString();
                rptdriver.ManufactureDate = dr2[37].ToString();
                rptdriver.TruckInBayTime = dr2[38].ToString();
                rptdriver.RowId = dr2[39].ToString();

                rc.TruckList.Add(rptdriver);
            }

            return rc;
        }



    }
    public class QualityGenerator : IQuality
    {
        public QualityCollection GetQualityCollection(string plant, string wo_id)
        {
            QualityCollection rc = new QualityCollection();
            DataSet dsRpt = DBConnection.DBConnectQuality("_usp_RetriveQuality", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                Quality rptdriver = new Quality();
                rptdriver.SerialNumber = dr2[0].ToString();
                rptdriver.ProductionOrder = dr2[1].ToString();
                rptdriver.LotID = dr2[2].ToString();
                rptdriver.Name = dr2[3].ToString();
                rptdriver.SavedSampleTime = dr2[4].ToString();
                rptdriver.SampleTime = dr2[5].ToString();
                rptdriver.Value = dr2[6].ToString();
                rptdriver.USL = dr2[7].ToString();
                rptdriver.Target = dr2[8].ToString();
                rptdriver.LSL = dr2[9].ToString();
                rptdriver.Alarms = dr2[10].ToString();
                rptdriver.Label = dr2[11].ToString();
                rptdriver.Flag = dr2[12].ToString();
                rptdriver.Comment = dr2[13].ToString();
                rptdriver.Cp = dr2[14].ToString();
                rptdriver.Cpk = dr2[15].ToString();
                rptdriver.IgnoreSample = dr2[16].ToString();
                rptdriver.WorkCenter = dr2[17].ToString();
                rptdriver.Status = dr2[18].ToString();
                rptdriver.Spare1 = dr2[19].ToString();
                rptdriver.Spare2 = dr2[20].ToString();
                rptdriver.Spare3 = dr2[21].ToString();
                rptdriver.Spare4 = dr2[22].ToString();
                rptdriver.Spare5 = dr2[23].ToString();
                rptdriver.SampleID = dr2[24].ToString();


                rc.QualityList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class ProdLabelGenerator : IProdLabel
    {
        public ProdLabelCollection GetProdLabelCollection(string plant, string wo_id)
        {
            ProdLabelCollection rc = new ProdLabelCollection();
            DataSet dsRpt = DBConnection.DBConnectProdLabel("_usp_RetriveLabel", plant, wo_id);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                ProdLabel rptdriver = new ProdLabel();
                rptdriver.Type = dr2[0].ToString();
                rptdriver.PalletNumberBottom = dr2[1].ToString();
                rptdriver.PalletNumberTop = dr2[2].ToString();
                rptdriver.ProductionOrder = dr2[3].ToString();
                rptdriver.Item = dr2[4].ToString();
                rptdriver.CheeseName = dr2[5].ToString();
                rptdriver.PrintArea = dr2[6].ToString();
                rptdriver.NetWeightBottom = dr2[7].ToString();
                rptdriver.NetWeightTop = dr2[8].ToString();
                rptdriver.ProductionDate = dr2[9].ToString();
                rptdriver.PrintedDate = dr2[10].ToString();
                rptdriver.Sku = dr2[11].ToString();
                rptdriver.LfcProductCode = dr2[12].ToString();
                rptdriver.PrintType = dr2[13].ToString();
                rptdriver.CommentTop = dr2[14].ToString();
                rptdriver.CommentBottom = dr2[15].ToString();
                rptdriver.SentToSAP = dr2[16].ToString();
                rptdriver.LicensePlate = dr2[17].ToString();
                rptdriver.Plackard = dr2[18].ToString();
                rptdriver.Variables = dr2[19].ToString();


                rc.ProdLabelList.Add(rptdriver);
            }

            return rc;
        }



    }

    public class RptDriverGenerator : IRptDriver
    {
        public RptDriverCollection GetRptDriverCollection(string plant)
        {
            RptDriverCollection rc = new RptDriverCollection();
            DataSet dsRpt = DBConnection.DBConnectRpt("_usp_RetriveReportDriver_dw", plant);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr2 in dsRpt.Tables[0].Rows)
            {
                //Create service object
                RptDriver rptdriver = new RptDriver();
                rptdriver.ID = dr2[0].ToString();
                rptdriver.ReportName = dr2[1].ToString();
                rptdriver.DefType = dr2[2].ToString();
                rptdriver.CodeSection = dr2[3].ToString();
                rptdriver.Department = dr2[4].ToString();
                rptdriver.Area = dr2[5].ToString();
                rptdriver.SubArea = dr2[6].ToString();
                rptdriver.Line = dr2[7].ToString();
                rptdriver.Display = dr2[8].ToString();
                rptdriver.Sequence = dr2[9].ToString();
                rptdriver.Label = dr2[10].ToString();
                rptdriver.Source = dr2[11].ToString();
                rptdriver.Tag = dr2[12].ToString();
                rptdriver.AttributeID = dr2[13].ToString();
                rptdriver.DOPKey = dr2[14].ToString();
                rptdriver.AttributeName = dr2[15].ToString();
                rptdriver.MIC = dr2[16].ToString();
                rptdriver.Data1 = dr2[17].ToString();
                rptdriver.Data2 = dr2[18].ToString();
                rptdriver.Data3 = dr2[19].ToString();
                rptdriver.Data4 = dr2[20].ToString();
                rptdriver.Data5 = dr2[21].ToString();
                rptdriver.Data6 = dr2[22].ToString();
                rptdriver.Data7 = dr2[23].ToString();
                rptdriver.Data8 = dr2[24].ToString();
                rptdriver.Data9 = dr2[25].ToString();
                rptdriver.Data10 = dr2[26].ToString();
                rptdriver.Data11 = dr2[27].ToString();
                rptdriver.Data12 = dr2[28].ToString();
                rptdriver.Data13 = dr2[29].ToString();
                rptdriver.Data14 = dr2[30].ToString();
                rptdriver.Data15 = dr2[31].ToString();
                rptdriver.Data16 = dr2[32].ToString();
                rptdriver.Data17 = dr2[33].ToString();

                rc.RptDriverList.Add(rptdriver);
            }

            return rc;
        }

        public void VatMsgOff(string VATPlantOffValue)
        {

            DBConnection.DBConnectVatMsgOff("_usp_Vat_Make_disable", VATPlantOffValue);
        }

        public void saveRptDriverConfig(string id, string colname, string colval)
        {

            DBConnection.DBRptSave("_usp_SaveReportDriver_dw", id, colname, colval);

            // string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    public class DopEnquirys : IDopEnquiry

    {
        public DopCollection GetDopCollection()
        {
            DopCollection dc = new DopCollection();
            DataSet ds = DBConnection.DBConnectDop("_usp_DOP_Inquiry_DW");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                //Create message object
                DopEnquiry dopenq = new DopEnquiry();
                //message.messageid=dr[0];
                dopenq.ProductionDate = dr[0].ToString();
                dopenq.ProductionOrder = dr[1].ToString();
                dopenq.Line = dr[2].ToString();
                dopenq.Material = dr[3].ToString();
                dopenq.MaterialDescription = dr[4].ToString();
                dopenq.WorkCenter = dr[5].ToString();
                dopenq.StorageBin = dr[6].ToString();
                dopenq.AttGroupName = dr[7].ToString();
                dopenq.AttributeName = dr[8].ToString();
                dopenq.AttRank = dr[9].ToString();
                dopenq.CodeSection = dr[10].ToString();
                dopenq.Upper = dr[11].ToString();
                dopenq.GridPos = dr[12].ToString();
                dopenq.ReportingKey = dr[13].ToString();

                dc.DopEnquiryList.Add(dopenq);
            }

            return dc;
        }

    }


    public class ProcessingMassBalanceGenerator : IProcessingMassBalance
    {
        public ProcessingMassBalanceCollection GetProcessingMassBalanceCollection(string StartDate, string EndDate)
        {
            ProcessingMassBalanceCollection mbc = new ProcessingMassBalanceCollection();
            DataSet dsMass = DBConnection.DBConnectMass("Processing_Mass_Balance_Prod_Accounting", StartDate, EndDate);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsMass.Tables[0].Rows)
            {
                //Create message object
                ProcessingMassBalance processingmassbalance = new ProcessingMassBalance();
                //message.messageid=dr[0];

                processingmassbalance.Plant = dr[0].ToString();
                processingmassbalance.LINE = dr[1].ToString();
                processingmassbalance.Production_Date = dr[2].ToString();
                processingmassbalance.Production_Order = dr[3].ToString();
                processingmassbalance.Material_Number = dr[4].ToString();
                processingmassbalance.Oper_ID = dr[5].ToString();
                processingmassbalance.Area = dr[6].ToString();
                processingmassbalance.Weight_Date_Time = dr[7].ToString();
                processingmassbalance.Weight_Time = dr[8].ToString();
                processingmassbalance.Weight_Name = dr[9].ToString();
                processingmassbalance.Weight_Value = dr[10].ToString();


                mbc.ProcessingMassBalanceList.Add(processingmassbalance);
            }

            return mbc;
        }

    }

    public class MixerTotalizerRptGenerator : IMixerTotalizerRpt
    {
        public MixerTotalizerRptCollection GetMixerTotalizerRptCollection(string plant, string ProductionOrder, string Line, string ProductCode, string StartDate, string EndDate)
        {
            MixerTotalizerRptCollection mtc = new MixerTotalizerRptCollection();
            DataSet dsMixer = DBConnection.DBConnectMixer("_usp_Mixer_Totalizer_DW", plant, ProductionOrder, Line, ProductCode, StartDate, EndDate);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsMixer.Tables[0].Rows)
            {
                //Create message object
                MixerTotalizerRpt mixertotalizerrpt = new MixerTotalizerRpt();
                //message.messageid=dr[0];

                mixertotalizerrpt.DataDatetime = dr[0].ToString();
                mixertotalizerrpt.Line = dr[1].ToString();
                mixertotalizerrpt.Production_Order = dr[2].ToString();
                mixertotalizerrpt.Cheese_Code = dr[3].ToString();
                mixertotalizerrpt.Data_group = dr[4].ToString();
                mixertotalizerrpt.Label = dr[5].ToString();
                mixertotalizerrpt.DataDate = dr[6].ToString();
                mixertotalizerrpt.DataTime = dr[7].ToString();
                mixertotalizerrpt.DataValue = dr[8].ToString();
                mixertotalizerrpt.Source = dr[9].ToString();
                mixertotalizerrpt.MIC = dr[10].ToString();
                mixertotalizerrpt.HiddenRecord = dr[11].ToString();
                mixertotalizerrpt.Record_UID = dr[12].ToString();
                mixertotalizerrpt.Sequence = dr[13].ToString();
                mixertotalizerrpt.LSL = dr[14].ToString();
                mixertotalizerrpt.Target = dr[15].ToString();
                mixertotalizerrpt.USL = dr[16].ToString();
                mixertotalizerrpt.AvgValue = dr[17].ToString();
                mixertotalizerrpt.STDEVValue = dr[18].ToString();
                mixertotalizerrpt.KPI_ReportName = dr[19].ToString();
                mixertotalizerrpt.KPI_RD_Name = dr[20].ToString();
                mixertotalizerrpt.DisplaySpecs = dr[21].ToString();
                mixertotalizerrpt.LatestProductionOrder = dr[22].ToString();
                mixertotalizerrpt.LatestLSL = dr[23].ToString();
                mixertotalizerrpt.LatestTarget = dr[24].ToString();
                mixertotalizerrpt.LatestUSL = dr[25].ToString();
                mixertotalizerrpt.LatestAvgValue = dr[26].ToString();
                mixertotalizerrpt.LatestSTDDEVValue = dr[27].ToString();
                mixertotalizerrpt.ReportingKey = dr[28].ToString();
                mixertotalizerrpt.TotalLbsPerPO = dr[29].ToString();
                mixertotalizerrpt.EndLbsPerPO = dr[30].ToString();


                mtc.MixerTotalizerRptList.Add(mixertotalizerrpt);
            }

            return mtc;
        }

    }

    public class ProjectListGenerator : IProjectList
    {
        public ProjectListCollection GetProjectListCollection()
        {
            ProjectListCollection plc = new ProjectListCollection();
            DataSet dsProjectList = DBConnection.DBConnectProjectList("ProjectList_RetrieveAll");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsProjectList.Tables[0].Rows)
            {
                //Create message object
                ProjectList projectlist = new ProjectList();
                //message.messageid=dr[0];
                projectlist.ProjectName = dr[0].ToString();
                projectlist.ProjectStepName = dr[1].ToString();
                projectlist.TicketNum = dr[2].ToString();
                projectlist.ESTTotalHours = dr[3].ToString();
                projectlist.AssignedTo = dr[4].ToString();
                projectlist.TotalHoursSpentAPPS = dr[5].ToString();
                projectlist.EstStartDate = dr[6].ToString();
                projectlist.EstCompleteDate = dr[7].ToString();
                projectlist.row_id = dr[8].ToString();
                plc.ProjectListList.Add(projectlist);
            }

            return plc;
        }



        public void addRow()
        {

            DBConnection.DBConnectaddRowProjList("csp_I_ProjectList");
        }
        public void addProject()
        {

            DBConnection.DBConnectaddRowProjList("csp_I_Project_w_Tasks");
        }

        public void addMonthlyProject()
        {

            DBConnection.DBConnectaddRowProjList("csp_I_Monthly_Project_w_Tasks");
        }

        public void addTime(string ProjectNameValue, string ProjectStepNameValue, string TicketValue, string AssignedToValue, string TotalHoursSpentAPPSValue, string EstStartDateValue, string EstCompleteDateValue, string row_idValue)
        {

            DBConnection.DBConnectInsertTimeProjList("csp_I_ProjectList_Upsert", ProjectNameValue, ProjectStepNameValue, TicketValue, AssignedToValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue);

        }


    }

    public class listProjectGenerator : IlistProject
    {
        public listProjectCollection listProjectCollection()
        {
            listProjectCollection plc = new listProjectCollection();
            DataSet dslistProject = DBConnection.DBConnectProjectList("listProject_All");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dslistProject.Tables[0].Rows)
            {
                //Create message object
                listProject projectlist = new listProject();
                //message.messageid=dr[0];
                projectlist.ProjectName = dr[0].ToString();
                plc.listProjectList.Add(projectlist);
            }

            return plc;
        }
    }

    public class listAreaGenerator : IlistArea
    {
        public listAreaCollection listAreaCollection()
        {
            listAreaCollection plc = new listAreaCollection();
            DataSet dslistArea = DBConnection.DBConnectProjectList("LISTAREA_All");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dslistArea.Tables[0].Rows)
            {
                //Create message object
                listArea Arealist = new listArea();
                //message.messageid=dr[0];
                Arealist.AreaName = dr[0].ToString();
                plc.listArea.Add(Arealist);
            }

            return plc;
        }
    }


    public class listProjectDDGenerator : IlistProjectDD
    {
        public listProjectDDCollection listProjectDDCollection()
        {
            listProjectDDCollection plc = new listProjectDDCollection();
            DataSet dslistProjectDD = DBConnection.DBConnectProjectList("LISTProjectFrom_Estimator");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dslistProjectDD.Tables[0].Rows)
            {
                //Create message object
                listProjectDD ProjectDDlist = new listProjectDD();
                //message.messageid=dr[0];
                ProjectDDlist.ProjectDDName = dr[0].ToString();
                plc.listProjectDD.Add(ProjectDDlist);
            }

            return plc;
        }
    }

    public class ProjectResGenerator : IProjectRes
    {
        public ProjectResCollection GetProjectResCollection()
        {
            ProjectResCollection prc = new ProjectResCollection();
            DataSet dsProjectRes = DBConnection.DBConnectProjectList("ProjectRes_RetrieveAll");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsProjectRes.Tables[0].Rows)
            {
                //Create message object
                ProjectRes projectres = new ProjectRes();
                //message.messageid=dr[0];
                projectres.ProjectName = dr[0].ToString();
                //projectres.Vamshi = dr[1].ToString();
                //projectres.Varun = dr[2].ToString();
                //projectres.Rory = dr[3].ToString();
                //projectres.Abdel = dr[4].ToString();
                projectres.AssignedTo = dr[4].ToString();
                projectres.TotalHours = dr[5].ToString();
                projectres.EstTotal = dr[6].ToString();
                //projectres.PercentComplete = dr[7].ToString();
                projectres.InsertDateTime = dr[7].ToString();
                projectres.row_id = dr[8].ToString();
                prc.ProjectResList.Add(projectres);
            }

            return prc;
        }



        //public void addRow()
        //{

        //    DBConnection.DBConnectaddRowProjList("csp_I_ProjectList");
        //}
        //public void addProject()
        //{

        //    DBConnection.DBConnectaddRowProjList("csp_I_Project_w_Tasks");
        //}

        //public void addMonthlyProject()
        //{

        //    DBConnection.DBConnectaddRowProjList("csp_I_Monthly_Project_w_Tasks");
        //}



    }
    public class DefectGenerator : IDefect
    {
        public DefectCollection GetDefectCollection()
        {
            DefectCollection dc = new DefectCollection();
            DataSet dsDefect = DBConnection.DBConnectTASKList("DEFECT_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                Defect defect = new Defect();
                defect.ProjectName = dr[0].ToString();
                defect.DefectName = dr[1].ToString();
                defect.Priority = dr[2].ToString();
                defect.Status = dr[3].ToString();
                defect.Description = dr[4].ToString();
                defect.Type = dr[5].ToString();
                defect.TestCycle = dr[6].ToString();
                defect.EnteredBy = dr[7].ToString();
                defect.AssignedTo = dr[8].ToString();
                //defect.InsertDateTime = dr[9].ToString();
                //defect.UpdateDateTime = dr[10].ToString();
                defect.Comment = dr[9].ToString();
                defect.TotalHoursSpentAPPS = dr[10].ToString();
                defect.EstStartDate = dr[11].ToString();
                defect.EstCompleteDate = dr[12].ToString();
                defect.row_id = dr[13].ToString();
                defect.ProdArea = dr[14].ToString();

                defect.TotalOpenTask = dr[15].ToString();
                defect.TotalAssignedTasks = dr[16].ToString();
                defect.PercentResp = dr[17].ToString();
                defect.PlanStartDate = dr[18].ToString();
                defect.PlanCompleteDate = dr[19].ToString();
                defect.BusReqCompleteDate = dr[20].ToString();
                defect.UpdateDateTime = dr[21].ToString();


                dc.DefectList.Add(defect);
            }

            return dc;
        }



        public void addDefect(string ProjectNameValue, string DefectNameValue, string PriorityValue, string StatusValue, string DescriptionValue, string TypeValue, string TestCycleValue, string EnteredByValue, string AssignedToValue, string CommentValue, string TotalHoursSpentAPPSValue, string EstStartDateValue, string EstCompleteDateValue, string row_idValue, string ProdAreaValue, string PercentRespValue, string PlanStartDateValue, string PlanCompleteDateValue, string BusReqCompleteDateValue)
        {

            DBConnection.DBConnectaddDefect("csp_I_DEFECT_ALL", ProjectNameValue, DefectNameValue, PriorityValue, StatusValue, DescriptionValue, TypeValue, TestCycleValue, EnteredByValue, AssignedToValue, CommentValue, TotalHoursSpentAPPSValue, EstStartDateValue, EstCompleteDateValue, row_idValue, ProdAreaValue, PercentRespValue, PlanStartDateValue, PlanCompleteDateValue, BusReqCompleteDateValue);
        }







        public void deleteDefect(List<string> objarray)
        {
            foreach (string id in objarray)
            {
                DBConnection.DBProjectDelete("csp_D_DEFECT_ALL", id.ToString());
            }
        }

        public void saveDefect(string id, string colname, string colval)
        {
            DBConnection.DBProjectSave("csp_U_DEFECT", id, colname, colval);
        }



    }


    public class ServDeskEntryGenerator : IServDeskEntry
    {
        public ServDeskEntryCollection GetServDeskEntryCollection()
        {
            ServDeskEntryCollection dc = new ServDeskEntryCollection();
            DataSet dsDefect = DBConnection.DBConnectProjectList("csp_ServDeskEntry_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                ServDeskEntry defect = new ServDeskEntry();
                defect.IncidentIDValue = dr[0].ToString();
                defect.ProcessInputValue = dr[1].ToString();
                defect.ApplicationInputValue = dr[2].ToString();
                defect.ReportInputValue = dr[3].ToString();
                defect.LITInputValue = dr[4].ToString();
                defect.HardwareInputValue = dr[5].ToString();
                defect.SDTechNameValue = dr[6].ToString();
                defect.CreateDateValue = dr[7].ToString();



                dc.ServDeskEntryList.Add(defect);
            }

            return dc;
        }

        public void addServDeskEntry(string IncidentIDValue, string ProcessInputValue, string ApplicationInputValue, string ReportInputValue, string LITInputValue, string HardwareInputValue, string SDTechNameValue, string CreateDateValue)
        {

            DBConnection.DBConnectaddServDeskEntry("csp_I_ServDeskEntry", IncidentIDValue, ProcessInputValue, ApplicationInputValue, ReportInputValue, LITInputValue, HardwareInputValue, SDTechNameValue, CreateDateValue);
        }

    }

    public class ProcessDocGenerator : IProcessDoc
    {
        public ProcessDocCollection GetProcessDocCollection()
        {
            ProcessDocCollection dc = new ProcessDocCollection();
            DataSet dsDefect = DBConnection.DBConnectProjectList("csp_ProcessDoc_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                ProcessDoc defect = new ProcessDoc();

                defect.Title = dr[0].ToString();
                defect.IssueAreaTB1 = dr[1].ToString();
                defect.IssueAreaTB2 = dr[2].ToString();
                defect.NumSteps = dr[3].ToString();
                defect.ProcessTB1 = dr[4].ToString();
                defect.ProcessTBMsg1 = dr[5].ToString();
                defect.ProcessTB2 = dr[6].ToString();
                defect.ProcessTBMsg2 = dr[7].ToString();
                defect.ProcessTB3 = dr[8].ToString();
                defect.ProcessTBMsg3 = dr[9].ToString();
                defect.ProcessTB4 = dr[10].ToString();
                defect.ProcessTBMsg4 = dr[11].ToString();
                defect.ProcessTB5 = dr[12].ToString();
                defect.ProcessTBMsg5 = dr[13].ToString();
                defect.ProcessTB6 = dr[14].ToString();
                defect.ProcessTBMsg6 = dr[15].ToString();
                defect.ProcessTB7 = dr[16].ToString();
                defect.ProcessTBMsg7 = dr[17].ToString();
                defect.ProcessTB8 = dr[18].ToString();
                defect.ProcessTBMsg8 = dr[19].ToString();
                defect.ProcessTB9 = dr[20].ToString();
                defect.ProcessTBMsg9 = dr[21].ToString();
                defect.ProcessTB10 = dr[22].ToString();
                defect.ProcessTBMsg10 = dr[23].ToString();
                defect.InsertDateTime = dr[24].ToString();




                dc.ProcessDocList.Add(defect);
            }

            return dc;
        }

        public void addProcessDoc(string TitleValue, string IssueAreaTB1Value, string IssueAreaTB2Value, string NumStepsValue, string ProcessTB1Value, string ProcessTBMsg1Value, string ProcessTB2Value, string ProcessTBMsg2Value, string ProcessTB3Value, string ProcessTBMsg3Value, string ProcessTB4Value, string ProcessTBMsg4Value, string ProcessTB5Value, string ProcessTBMsg5Value, string ProcessTB6Value, string ProcessTBMsg6Value, string ProcessTB7Value, string ProcessTBMsg7Value, string ProcessTB8Value, string ProcessTBMsg8Value, string ProcessTB9Value, string ProcessTBMsg9Value, string ProcessTB10Value, string ProcessTBMsg10Value)
        {

            DBConnection.DBConnectaddProcessDoc("csp_I_ProcessDoc", TitleValue, IssueAreaTB1Value, IssueAreaTB2Value, NumStepsValue, ProcessTB1Value, ProcessTBMsg1Value, ProcessTB2Value, ProcessTBMsg2Value, ProcessTB3Value, ProcessTBMsg3Value, ProcessTB4Value, ProcessTBMsg4Value, ProcessTB5Value, ProcessTBMsg5Value, ProcessTB6Value, ProcessTBMsg6Value, ProcessTB7Value, ProcessTBMsg7Value, ProcessTB8Value, ProcessTBMsg8Value, ProcessTB9Value, ProcessTBMsg9Value, ProcessTB10Value, ProcessTBMsg10Value);
        }

    }



    public class UtilityMeteringGenerator : IUtilityMetering
    {
        public UtilityMeteringCollection GetUtilityMeteringCollection(string plant, string majorgroup, string date)
        {
            UtilityMeteringCollection dc = new UtilityMeteringCollection();
            DataSet dsDefect = DBConnection.DBConnectUtilityMetering("S_SA_CspCRPUtilityMeteringMeterDataDisplay", plant, majorgroup, date);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                UtilityMetering defect = new UtilityMetering();

                defect.MajorGroup = dr[0].ToString();
                defect.Area = dr[1].ToString();
                defect.MeterTag = dr[2].ToString();
                defect.CurrentDate_Value = dr[3].ToString();
                defect.PriorDay_Value = dr[4].ToString();
                defect.SevenDayAvg_Value = dr[5].ToString();
                defect.Goal = dr[6].ToString();
                defect.IsManual = dr[7].ToString();
                dc.UtilityMeteringList.Add(defect);
            }

            return dc;
        }

        public void addUtilityMetering(
              string plantValue,
              string majorgroupValue,
              string areaValue,
              string metertagValue,
              string currentdatevalValue,
              string currdateValue,
              string goalValue
            )
        {

            DBConnection.DBConnectaddUtilityMetering("S_I_CspCRPUtilityMeteringMeterDataUpdate",
            plantValue, majorgroupValue, areaValue, metertagValue, currentdatevalValue, currdateValue, goalValue
             );
        }

    }


    public class CIPTITRSETUPGenerator : ICIPTITRSETUP
    {
        public CIPTITRSETUPCollection GetCIPTITRSETUPCollection(string plant, string majorgroup, string majorgroup1, string majorgroup2)
        {
            CIPTITRSETUPCollection dc = new CIPTITRSETUPCollection();
            DataSet dsDefect = DBConnection.DBConnectCIPTITRSETUP("S_SA_CspCRPTitrationSetUp", plant, majorgroup, majorgroup1, majorgroup2);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPTITRSETUP defect = new CIPTITRSETUP();

                defect.SkidDesc = dr[4].ToString();
                defect.chemicaltype = dr[5].ToString();
                defect.maxT = dr[2].ToString();
                defect.minT = dr[1].ToString();
                defect.titrations = dr[0].ToString();
                defect.unitsT = dr[6].ToString();
                defect.IsExpired = dr[7].ToString();
                defect.TitrationSetupKey = dr[8].ToString();
                defect.enabledT = dr[3].ToString();
                dc.CIPTITRSETUPList.Add(defect);
            }

            return dc;
        }

        public void addCIPTITRSETUP(
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




            )
        {

            DBConnection.DBConnectaddCIPTITRSETUP("S_SA_CspCRPTitrationSetUp",
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
        }

    }

    public class listCircuitGenerator : IlistCircuit
    {
        public listCircuitCollection listCircuitCollection(string plant)
        {
            listCircuitCollection plc = new listCircuitCollection();
            DataSet dslistCircuit = DBConnection.DBConnectCircuitList("S_SA_CspCRPTitrationCircuits", plant);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dslistCircuit.Tables[0].Rows)
            {
                //Create message object
                listCircuit Circuitlist = new listCircuit();
                //message.messageid=dr[0];
                Circuitlist.CircuitDesc = dr[0].ToString();
                plc.listCircuit.Add(Circuitlist);
            }

            return plc;
        }
    }

    public class listChemicalGenerator : IlistChemical
    {
        public listChemicalCollection listChemicalCollection(string plant, string majorgroup)
        {
            listChemicalCollection plc = new listChemicalCollection();
            DataSet dslistChemical = DBConnection.DBConnectChemicalList("S_SA_CspCRPChemicalTypeOper", plant, majorgroup);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dslistChemical.Tables[0].Rows)
            {
                //Create message object
                listChemical Chemicallist = new listChemical();
                //message.messageid=dr[0];
                Chemicallist.ChemicalDesc = dr[0].ToString();
                plc.listChemical.Add(Chemicallist);
            }

            return plc;
        }
    }

    public class listMTempUnitsListGenerator : IlistMTempUnitsList
    {
        public listMTempUnitsListCollection listMTempUnitsListCollection(string plant)
        {
            listMTempUnitsListCollection plc = new listMTempUnitsListCollection();
            DataSet dslistMTempUnitsList = DBConnection.DBConnectMTempUnitsList("S_SA_CspCRPUnitManualTempEntryUnits", plant);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dslistMTempUnitsList.Tables[0].Rows)
            {
                //Create message object
                listMTempUnitsList MTempUnitsList = new listMTempUnitsList();
                //message.messageid=dr[0];
                MTempUnitsList.UnitDesc = dr[1].ToString();
                plc.listMTempUnitsList.Add(MTempUnitsList);
            }

            return plc;
        }
    }


    public class CIPCHEMENTRYGenerator : ICIPCHEMENTRY
    {
        public CIPCHEMENTRYCollection GetCIPCHEMENTRYCollection(string plant, string majorgroup)
        {
            CIPCHEMENTRYCollection dc = new CIPCHEMENTRYCollection();
            DataSet dsDefect = DBConnection.DBConnectCIPCHEMENTRY("S_SA_CspCRPChemicalEntry", plant, majorgroup);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPCHEMENTRY defect = new CIPCHEMENTRY();
                defect.ChemicalName = dr[0].ToString();
                defect.ChemicalTypeKey = dr[1].ToString();
                defect.ChemicalCost = dr[2].ToString();
                defect.ChemicalCostEUKey = dr[3].ToString();
                defect.ChemicalKey = dr[4].ToString();
                defect.EUName = dr[5].ToString();
                defect.ChemicalTypeDesc = dr[6].ToString();
                dc.CIPCHEMENTRYList.Add(defect);
            }

            return dc;
        }

        public void addCIPCHEMENTRY(
              string PlantValue,
              string ChemicalNameValue,
              string ChemicalTypeKeyValue,
              string ChemicalCostValue,
              string ChemicalCostEUKeyValue,
              string ChemicalKeyValue,
              string ActionValue
            //string EUNameValue,
            //string ChemicalTypeDescValue

            )
        {

            DBConnection.DBConnectaddCIPCHEMENTRY("S_SA_CspCRPChemicalEntry",
            PlantValue,
            ChemicalNameValue,
            ChemicalTypeKeyValue,
            ChemicalCostValue,
            ChemicalCostEUKeyValue,
            ChemicalKeyValue,
            ActionValue
            //EUNameValue,
            //ChemicalTypeDescValue
             );
        }

    }

    public class CIPMANTEMPGenerator : ICIPMANTEMP
    {
        public CIPMANTEMPCollection GetCIPMANTEMPCollection(string plant, string majorgroup, string majorgroup1)
        {
            CIPMANTEMPCollection dc = new CIPMANTEMPCollection();
            DataSet dsDefect = DBConnection.DBConnectCIPMANTEMP("S_SA_CspCRPUnitManualTempEntry", plant, majorgroup, majorgroup1);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPMANTEMP defect = new CIPMANTEMP();
                defect.UnitDesc = dr[0].ToString();
                defect.UnitValue = dr[1].ToString();
                defect.Timestamp = dr[2].ToString();
                dc.CIPMANTEMPList.Add(defect);
            }

            return dc;
        }

        public void addCIPMANTEMP(
            string PlantValue,
            string UnitDescValue,
            string UnitValueValue,
            string TimestampValue,
            string ActionValue


            )
        {
            DBConnection.DBConnectaddCIPMANTEMP("S_SA_CspCRPUnitManualTempEntry",
            PlantValue,
            UnitDescValue,
            UnitValueValue,
            TimestampValue,
            ActionValue
             );
        }
    }
    public class CIPReviewEntryGenerator : ICIPReviewEntry
    {
        public CIPReviewEntryCollection GetCIPReviewEntryCollection(string plant, string washkey, string majorgroup)
        {
            CIPReviewEntryCollection dc = new CIPReviewEntryCollection();
            DataSet dsDefect = DBConnection.DBConnectCIPReviewEntry("S_SA_CspCRPReviewEntry ", plant, washkey, majorgroup);
            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPReviewEntry defect = new CIPReviewEntry();
                defect.ReviewKey = dr[0].ToString();
                defect.ReviewName = dr[1].ToString();
                defect.NameType = dr[2].ToString();
                defect.ReviewStatus = dr[3].ToString();
                defect.ReviewComment = dr[4].ToString();
                defect.ReviewReason = dr[5].ToString();
                defect.ReviewTime = dr[6].ToString();
                defect.WashKey = dr[7].ToString();
                defect.ReviewStatusKey = dr[8].ToString();
                defect.ReviewStatusNum = dr[9].ToString();
                defect.ReviewStatusDesc = dr[10].ToString();

                dc.CIPReviewEntryList.Add(defect);
            }

            return dc;
        }

        public void addCIPReviewEntry(
            string PlantValue,
            string ReviewKeyValue,
            string WashKeyValue,
            string ReviewNameValue,
            string ReviewCommentValue,
            string ReviewReasonValue,
            string ActionValue


            )
        {

            DBConnection.DBConnectaddCIPReviewEntry("S_SA_CspCRPReviewEntry",
            PlantValue,
            ReviewKeyValue,
            WashKeyValue,
            ReviewNameValue,
            ReviewCommentValue,
            ReviewReasonValue,
            ActionValue
             );
        }

    }

    public class CIPVerifyDataEntryGenerator : ICIPVerifyDataEntry
    {
        public CIPVerifyDataEntryCollection GetCIPVerifyDataEntryCollection(string plant, string washkey, string majorgroup)
        {
            CIPVerifyDataEntryCollection dc = new CIPVerifyDataEntryCollection();
            DataSet dsDefect = DBConnection.DBConnectCIPVerifyDataEntry("S_SA_CspCRPVerifyDataEntry ", plant, washkey, majorgroup);
            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPVerifyDataEntry defect = new CIPVerifyDataEntry();
                defect.VerifyKey = dr[0].ToString();
                defect.VerifyName = dr[1].ToString();
                defect.NameType = dr[2].ToString();
                defect.VerifyStatus = dr[3].ToString();
                defect.VerifyComment = dr[4].ToString();
                defect.VerifyReason = dr[5].ToString();
                defect.VerifyTime = dr[6].ToString();
                defect.WashKey = dr[7].ToString();
                defect.VerifyStatusKey = dr[8].ToString();
                defect.VerifyStatusNum = dr[9].ToString();
                defect.VerifyStatusDesc = dr[10].ToString();

                dc.CIPVerifyDataEntryList.Add(defect);
            }

            return dc;
        }

        public void addCIPVerifyDataEntry(
            string PlantValue,
            string VerifyKeyValue,
            string WashKeyValue,
            string VerifyNameValue,
            string VerifyCommentValue,
            string VerifyReasonValue,
            string ActionValue


            )
        {

            DBConnection.DBConnectaddCIPVerifyDataEntry("S_SA_CspCRPVerifyDataEntry",
                PlantValue,
                VerifyKeyValue,
                WashKeyValue,
                VerifyNameValue,
                VerifyCommentValue,
                VerifyReasonValue,
                ActionValue
             );
        }

    }

    public class CIPNotesGenerator : ICIPNotes
    {
        public CIPNotesCollection GetCIPNotesCollection(string plant, string washkey, string majorgroup)
        {
            CIPNotesCollection dc = new CIPNotesCollection();
            DataSet dsDefect = DBConnection.DBConnectCIPNotes("S_SA_CspCRPNotes ", plant, washkey, majorgroup);
            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPNotes defect = new CIPNotes();
                defect.NotesKey = dr[0].ToString();
                defect.NotesTime = dr[1].ToString();
                defect.NotesComment = dr[2].ToString();
                defect.NotesName = dr[3].ToString();


                dc.CIPNotesList.Add(defect);
            }

            return dc;
        }

        public void addCIPNotes(
                string PlantValue,
                string NotesKeyValue,
                string WashKeyValue,
                string NotesNameValue,
                string NotesCommentValue,
                string NotesTimeValue,
            string ActionValue


            )
        {

            DBConnection.DBConnectaddCIPNotes("S_SA_CspCRPNotes",
                PlantValue,
                NotesKeyValue,
                WashKeyValue,
                NotesNameValue,
                NotesCommentValue,
                NotesTimeValue,
                ActionValue
             );
        }

    }


    public class CIPPCQIGenerator : ICIPPCQI
    {
        public CIPPCQICollection GetCIPPCQICollection(string plant, string washkey, string majorgroup)
        {
            CIPPCQICollection dc = new CIPPCQICollection();
            DataSet dsDefect = DBConnection.DBConnectCIPPCQI("S_SA_CspCRPPCQI ", plant, washkey, majorgroup);
            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPPCQI defect = new CIPPCQI();
                defect.PCQIKey = dr[0].ToString();
                defect.PCQIName = dr[1].ToString();
                defect.PCQINameType = dr[2].ToString();
                defect.PCQIComment = dr[3].ToString();
                defect.PCQIESignature = dr[4].ToString();
                defect.PCQITime = dr[5].ToString();
                defect.PCQIWashKey = dr[6].ToString();
                dc.CIPPCQIList.Add(defect);
            }
            return dc;
        }

        public void addCIPPCQI(
             string PlantValue,
             string PCQIKeyValue,
             string WashKeyValue,
             string PCQINameValue,
             string PCQICommentValue,
             string PCQITimeValue,
             string PCQIActionValue,
             string PCQIStatusValue,
             string PCQIWashConcateValue
            )
        {

            DBConnection.DBConnectaddCIPPCQI("S_SA_CspCRPPCQI",
                PlantValue,
                PCQIKeyValue,
                WashKeyValue,
                PCQINameValue,
                PCQICommentValue,
                PCQITimeValue,
                PCQIActionValue,
                PCQIStatusValue,
                PCQIWashConcateValue
             );
        }

    }


    public class CIPLoginGenerator : ICIPLogin
    {
        public CIPLoginCollection GetCIPLoginCollection(string plant, string user)
        {
            CIPLoginCollection dc = new CIPLoginCollection();
            DataSet dsDefect = DBConnection.DBConnectCIPLogin("S_SA_CspCRPCIPUserDetailRetrieve", plant, user);
            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                CIPLogin defect = new CIPLogin();
                defect.role = dr[0].ToString();



                dc.CIPLoginList.Add(defect);
            }

            return dc;
        }



    }



    public class PhageMEGenerator : IPhageME
    {
        public PhageMECollection GetPhageMECollection(string majorgroup)
        {
            PhageMECollection dc = new PhageMECollection();
            DataSet dsDefect = DBConnection.DBConnectPhageME("S_SA_CspCRPPhageRsltEntry", majorgroup);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                PhageME defect = new PhageME();
                defect.ID = dr[0].ToString();
                defect.ProductionDate = dr[1].ToString();
                defect.Line = dr[2].ToString();
                defect.Location = dr[3].ToString();
                defect.LogVatTankSilo = dr[4].ToString();
                defect.Phage = dr[5].ToString();
                //defect.Action = dr[6].ToString();
                dc.PhageMEList.Add(defect);
            }

            return dc;
        }

        public void addPhageME(
              string IDValue, string ProductionDateValue, string LineValue, string LocationValue, string LogVatTankSiloValue, string PhageValue, string ActionValue

            )
        {

            DBConnection.DBConnectaddPhageME("S_SA_CspCRPPhageRsltEntry",
                IDValue, ProductionDateValue, LineValue, LocationValue, LogVatTankSiloValue, PhageValue, ActionValue
             );
        }

    }

    public class IN2164POGenerator : IIN2164PO
    {
        public IN2164POCollection GetIN2164POCollection()
        {
            IN2164POCollection dc = new IN2164POCollection();
            DataSet dsDefect = DBConnection.DBConnectProjectList("csp_IN2164ProductioOrder_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                IN2164PO defect = new IN2164PO();

                defect.ProductionOrder_Id = dr[0].ToString();
                defect.ProductionOrderNumber = dr[1].ToString();
                defect.MaterialNumber = dr[2].ToString();
                defect.TotalQuantity = dr[3].ToString();
                defect.ScheduledStartTime = dr[4].ToString();
                defect.ScheduledEndTime = dr[5].ToString();
                defect.StorageLocationReceipt = dr[6].ToString();
                defect.FatProtRatio = dr[7].ToString();
                defect.MilkProtein = dr[8].ToString();
                defect.MilkFat = dr[9].ToString();
                defect.RetFactor = dr[10].ToString();
                defect.Moisture = dr[11].ToString();
                defect.Salt = dr[12].ToString();
                defect.Fat = dr[13].ToString();
                defect.pH = dr[14].ToString();
                defect.SetPH = dr[15].ToString();
                defect.NumVats = dr[16].ToString();





                dc.IN2164POList.Add(defect);
            }

            return dc;
        }

        public void addIN2164PO(
            string ProductionOrder_IdValue,
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
            )
        {

            DBConnection.DBConnectaddIN2164PO("csp_I_IN2164ProductionOrder",
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
                 NumVatsValue);
        }

    }


    public class IN2164BOMItemGenerator : IIN2164BOMItem
    {
        public IN2164BOMItemCollection GetIN2164BOMItemCollection(string poid)
        {
            IN2164BOMItemCollection dc = new IN2164BOMItemCollection();
            DataSet dsDefect = DBConnection.DBConnectIN2164BOMItem("csp_IN2164BOMItem_ALL", poid);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                IN2164BOMItem defect = new IN2164BOMItem();
                defect.ProductionOrderNumber = dr[0].ToString();
                defect.BOMPosition = dr[1].ToString();
                defect.ComponentMaterial = dr[2].ToString();
                defect.ComponentQuantity = dr[3].ToString();
                defect.OperationAssignment = dr[4].ToString();
                defect.StorageLocation = dr[5].ToString();
                defect.StorageLocationDesc = dr[6].ToString();
                defect.RoutingOperationNumber = dr[7].ToString();
                defect.OperationWorkCenter = dr[8].ToString();
                defect.OperationShortText = dr[9].ToString();
                defect.CoProductFlag = dr[10].ToString();
                defect.NumVessels = dr[11].ToString();
                defect.ProductionOrder_Id = dr[12].ToString();





                dc.IN2164BOMItemList.Add(defect);
            }

            return dc;
        }

        public void addIN2164BOMItem(
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
            )
        {

            DBConnection.DBConnectaddIN2164BOMItem("csp_I_IN2164BomItem",
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
        }

    }


    public class IN2164SpecGenerator : IIN2164Spec
    {
        public IN2164SpecCollection GetIN2164SpecCollection(string poid)
        {
            IN2164SpecCollection dc = new IN2164SpecCollection();
            DataSet dsDefect = DBConnection.DBConnectIN2164Spec("csp_IN2164Spec_ALL", poid);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                IN2164Spec defect = new IN2164Spec();
                defect.ProductionOrderNumber = dr[0].ToString();
                defect.Name = dr[1].ToString();
                defect.Value = dr[2].ToString();
                defect.Lower = dr[3].ToString();
                defect.Upper = dr[4].ToString();
                defect.DOPGroup = dr[5].ToString();
                defect.Material = dr[6].ToString();
                defect.Specs_ID = dr[7].ToString();
                defect.POIDSpec_ID = dr[8].ToString();
                dc.IN2164SpecList.Add(defect);
            }

            return dc;
        }

        public void addIN2164Spec(

            string NameValue,
            string ValueValue,
            string LowerValue,
            string UpperValue,
            string DOPGroupValue,
            string MaterialValue,
            string Specs_IDValue,
            string POIDSpec_IDValue

            )
        {

            DBConnection.DBConnectaddIN2164Spec("csp_I_IN2164Spec",
                    NameValue,
                    ValueValue,
                    LowerValue,
                    UpperValue,
                    DOPGroupValue,
                    MaterialValue,
                    Specs_IDValue,
                    POIDSpec_IDValue
                 );
        }

    }

    public class IN2165InspGenerator : IIN2165Insp
    {
        public IN2165InspCollection GetIN2165InspCollection()
        {
            IN2165InspCollection dc = new IN2165InspCollection();
            DataSet dsDefect = DBConnection.DBConnectProjectList("csp_IN2165Specification_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                IN2165Insp defect = new IN2165Insp();

                defect.Specification_Id = dr[0].ToString();
                defect.SpecificationName = dr[1].ToString();
                defect.SpecificationDesc = dr[2].ToString();
                defect.ProductionOrder = dr[3].ToString();
                defect.InspectionLot = dr[4].ToString();





                dc.IN2165InspList.Add(defect);
            }

            return dc;
        }

        public void addIN2165Insp(
                    string Specification_IdValue,
                    string SpecificationNameValue,
                    string SpecificationDescValue,
                    string ProductionOrderValue,
                    string InspectionLotValue




            )
        {

            DBConnection.DBConnectaddIN2165Insp("csp_I_IN2165Specification", Specification_IdValue, SpecificationNameValue, SpecificationDescValue, ProductionOrderValue, InspectionLotValue);
        }

    }


    public class IN2165AttributeGroupGenerator : IIN2165AttributeGroup
    {
        public IN2165AttributeGroupCollection GetIN2165AttributeGroupCollection(string spid)
        {
            IN2165AttributeGroupCollection dc = new IN2165AttributeGroupCollection();
            DataSet dsDefect = DBConnection.DBConnectIN2165AttributeGroup("csp_IN2165AttributeGroup_ALL", spid);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                IN2165AttributeGroup defect = new IN2165AttributeGroup();
                defect.InspectionLot = dr[0].ToString();
                defect.AttributeGroupName = dr[1].ToString();
                defect.AttributeGroupDescription = dr[2].ToString();
                defect.AutoGenerateSampleID = dr[3].ToString();
                defect.Specification_Id = dr[4].ToString();
                dc.IN2165AttributeGroupList.Add(defect);
            }

            return dc;
        }

        public void addIN2165AttributeGroup(
                    string AttributeGroupNameValue,
                    string AttributeGroupDescriptionValue,
                    string AutoGenerateSampleIDValue,
                    string Specification_IdValue



            )
        {

            DBConnection.DBConnectaddIN2165AttributeGroup("csp_I_IN2165AttributeGroup",
                        AttributeGroupNameValue,
                        AttributeGroupDescriptionValue,
                        AutoGenerateSampleIDValue,
                        Specification_IdValue
                 );
        }

    }



    public class IN2165AttributeGenerator : IIN2165Attribute
    {
        public IN2165AttributeCollection GetIN2165AttributeCollection(string spid)
        {
            IN2165AttributeCollection dc = new IN2165AttributeCollection();
            DataSet dsDefect = DBConnection.DBConnectIN2165Attribute("csp_IN2165Attribute_ALL", spid);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                IN2165Attribute defect = new IN2165Attribute();
                defect.InspectionLot = dr[0].ToString();
                defect.AttributeName = dr[1].ToString();
                defect.AttributeTitle = dr[2].ToString();
                defect.AttributeGroup = dr[3].ToString();
                defect.AttributeRank = dr[4].ToString();
                defect.EntryLabelGroup = dr[5].ToString();
                defect.AnalysisName = dr[6].ToString();
                defect.TestRequired = dr[7].ToString();
                defect.LimitsUOM = dr[8].ToString();
                defect.USL = dr[9].ToString();
                defect.Target = dr[10].ToString();
                defect.LSL = dr[11].ToString();
                defect.Spare1 = dr[12].ToString();
                defect.Spare2 = dr[13].ToString();
                defect.Spare3 = dr[14].ToString();
                defect.Spare4 = dr[15].ToString();
                defect.SaveReasonCodes = dr[16].ToString();
                defect.Operation = dr[17].ToString();
                defect.OperationWorkCenter = dr[18].ToString();
                defect.DisplayDigits = dr[19].ToString();
                defect.ConfirmationNumber = dr[20].ToString();
                defect.RecordingType = dr[21].ToString();
                defect.AutoSave = dr[22].ToString();
                defect.Specification_Id = dr[23].ToString();
                dc.IN2165AttributeList.Add(defect);
            }

            return dc;
        }

        public void addIN2165Attribute(
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
                    string Specification_IDValue


            )
        {

            DBConnection.DBConnectaddIN2165Attribute("csp_I_IN2165Attribute",
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
        }

    }

    public class KPIMultiDtGenerator : IKPIMultiDt
    {
        public KPIMultiDtCollection GetKPIMultiDtCollection(string ReportName, string DateStart, string DateEnd, string RD3, string RD4, string RD5, string RD6)
        {
            KPIMultiDtCollection dc = new KPIMultiDtCollection();
            DataSet dsDefect = DBConnection.DBConnectKPIMultiDt("_usp_KPI_Chart_Multi_Data", ReportName, DateStart, DateEnd, RD3, RD4, RD5, RD6);

            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.KPIMultiDtList.Add(defectdictionary);

                }
            }
            return dc;
        }

    }

    public class KPISingleDtGenerator : IKPISingleDt
    {
        public KPISingleDtCollection GetKPISingleDtCollection(string ReportName, string DateStart, string DateEnd, string RD3, string RD4, string RD5, string RD6)
        {
            KPISingleDtCollection dc = new KPISingleDtCollection();
            DataSet dsDefect = DBConnection.DBConnectSingleDt("_usp_KPI_Chart_Single_Data", ReportName, DateStart, DateEnd, RD3, RD4, RD5, RD6);

            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {

                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.KPISingleDtList.Add(defectdictionary);

                }
            }
            return dc;
        }

    }

    public class FinishRptGenerator : IFinishRpt
    {
        public FinishRptCollection GetFinishRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {
            FinishRptCollection dc = new FinishRptCollection();
            DataSet dsDefect = DBConnection.DBConnectFinishRpt("_usp_Finish", LineNumber, ProductionOrder, ProductCode, StartDate, EndDate);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    //Create message object
                    //FinishRpt defect = new FinishRpt();
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.FinishRptList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class FinishParamGenerator : IFinishRptParam
    {
        public FinishRptParamCollection GetFinishRptCollection(string StartDate, string EndDate)
        {
            FinishRptParamCollection dc = new FinishRptParamCollection();
            DataSet dsDefect = DBConnection.DBConnectFinishParam("_usp_Get_Finish_LinePOProduct_List", StartDate, EndDate);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    //Create message object
                    //FinishRpt defect = new FinishRpt();
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.FinishParamList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class MilkPreGenerator : IMilkPre
    {
        public MilkPreCollection GetMilkPreCollection(string StartDate, string EndDate)
        {
            MilkPreCollection dc = new MilkPreCollection();
            DataSet dsDefect = DBConnection.DBConnectMilkPre("_usp_Milk_PreScreen_dw", StartDate, EndDate);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                   
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.MilkPreList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class OtherDairyrcGenerator : IOtherDairyrc
    {
        public OtherDairyrcCollection GetOtherDairyrcCollection(string StartDate, string EndDate)
        {
            OtherDairyrcCollection dc = new OtherDairyrcCollection();
            DataSet dsDefect = DBConnection.DBConnectOtherDairyrc("_usp_Other_Dairy_Liquids_Receipt_dw", StartDate, EndDate);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {

                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.OtherDairyrcList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class OtherDairyldoGenerator : IOtherDairyldo
    {
        public OtherDairyldoCollection GetOtherDairyldoCollection(string StartDate, string EndDate)
        {
            OtherDairyldoCollection dc = new OtherDairyldoCollection();
            DataSet dsDefect = DBConnection.DBConnectOtherDairyldo("_usp_Other_Dairy_Liquids_Load_Out_dw", StartDate, EndDate);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {

                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.OtherDairyldoList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class MilkRecGenerator : IMilkReceivingLoadDetail
    {
        public MilkReceivingLoadDetailCollection GetMilkReceivingLoadDetailCollection(string StartDate, string EndDate)
        {
            MilkReceivingLoadDetailCollection dc = new MilkReceivingLoadDetailCollection();
            DataSet dsDefect = DBConnection.DBConnectMilkRec("_usp_Milk_Receiving_Load_Detail_dw", StartDate, EndDate);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.MilkReceivingLoadDetailList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class KPIMilkRecGenerator : IKPIMilkReceiving
    {
        public KPIMilkReceivingCollection GetKPIMilkReceivingCollection(string DateStart, string DateEnd, string SupplierID, string Route_Num, string Material)
        {
            KPIMilkReceivingCollection dc = new KPIMilkReceivingCollection();
            DataSet dsDefect = DBConnection.DBConnectKPIMilkRec("_usp_Milk_Receiving_Load_Diff_Chart_dw", DateStart, DateEnd, SupplierID, Route_Num, Material);

            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.KPIMilkReceivingList.Add(defectdictionary);

                }
            }
            return dc;
        }

    }

    public class FinishRptCommentsGenerator : IFinishRptComments
    {
        public FinishRptCommentsCollection GetFinishRptCommentsCollection(string StartDate, string EndDate, string LineNumber, string ProductionOrder, string ProductCode)
        {
            FinishRptCommentsCollection dc = new FinishRptCommentsCollection();
            DataSet dsDefect = DBConnection.DBConnectFinishRptComments("_usp_Finish_Comments", StartDate, EndDate, LineNumber, ProductionOrder, ProductCode);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.FinishRptCommentsList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }


    public class DailySiloInvGenerator : IDailySiloInv
    {
        public DailySiloInvCollection GetDailySiloInvCollection(string ProductionDay, string Silo)
        {
            DailySiloInvCollection dc = new DailySiloInvCollection();
            DataSet dsDefect = DBConnection.DBConnectDailySiloInv("_usp_Daily_Silo_Inventory_dw", ProductionDay, Silo);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.DailySiloInvList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class DailySiloInvSiloGenerator : IDailySiloInvSilo
    {
        public DailySiloInvSiloCollection GetDailySiloInvSiloCollection(string ProductionDay)
        {
            DailySiloInvSiloCollection dc = new DailySiloInvSiloCollection();
            DataSet dsDefect = DBConnection.DBConnectDailySiloInvSilo("_usp_Daily_Silo_Inventory_Silos_dw", ProductionDay);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.DailySiloInvSiloList.Add(defectdictionary);

                }
            }
            return dc;
        }
    }

    public class VatMakeParamGenerator : IVatMakeRptParam
    {
        public VatMakeRptParamCollection GetVatMakeRptCollection(string StartDate, string EndDate)
        {
            VatMakeRptParamCollection dc = new VatMakeRptParamCollection();
            DataSet dsDefect = DBConnection.DBConnectVatMakeParam("_usp_Get_Vat_Make_LinePOProduct_List", StartDate, EndDate);

            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    //Create message object
                    //VatMakeRpt defect = new VatMakeRpt();
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.VatMakeParamList.Add(defectdictionary);

                }
            }

            return dc;
        }
    }



    public class VatMakeRptGenerator : IVatMakeRpt
    {
        public VatMakeRptCollection GetVatMakeRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {
            VatMakeRptCollection dc = new VatMakeRptCollection();
            DataSet dsDefect = DBConnection.DBConnectVatMakeRpt("_usp_Vat_Make", LineNumber, ProductionOrder, ProductCode, StartDate, EndDate);
            if (dsDefect.Tables.Count > 0 && dsDefect.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    //Create message object
                    //VatMakeRpt defect = new VatMakeRpt();
                    Dictionary<string, string> defectdictionary = new Dictionary<string, string>();
                    for (int index = 0; index < dsDefect.Tables[0].Columns.Count; index++)
                    {

                        defectdictionary[dsDefect.Tables[0].Columns[index].ToString()] = dr[index].ToString();

                    }

                    dc.VatMakeRptList.Add(defectdictionary);

                }
            }
            return dc;
        }




            //}


            //    }






            public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }
    }

    public class VatMakeRptCommentsGenerator : IVatMakeRptComments
    {
        public VatMakeRptCommentsCollection GetVatMakeRptCommentsCollection(string StartDate, string EndDate, string ProductCode, string LineNumber)
        {
            VatMakeRptCommentsCollection dc = new VatMakeRptCommentsCollection();
            DataSet dsDefect = DBConnection.DBConnectVatMakeRptComments("_usp_Vat_Make_Comments", StartDate, EndDate, ProductCode, LineNumber);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                VatMakeRptComments defect = new VatMakeRptComments();

                defect.Production_Date = dr[0].ToString();
                defect.ProductionOrder = dr[1].ToString();
                
                defect.LineNumber = dr[2].ToString();
                defect.AttributeName = dr[3].ToString();
                defect.Source = dr[4].ToString();
                defect.MIC = dr[5].ToString();
                
                defect.Position = dr[6].ToString();
                defect.LogicalVat = dr[7].ToString();
            
                defect.PhysUnitNo = dr[8].ToString();
                defect.ProductCode = dr[9].ToString();
                defect.Comments = dr[10].ToString();


                dc.VatMakeRptCommentsList.Add(defect);
            }

            return dc;
        }
        public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }
    }

    public class ChseMakSuprDopRptGenerator : IChseMakSuprDopRpt
        {
            public ChseMakSuprDopRptCollection GetChseMakSuprDopRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
            {
                ChseMakSuprDopRptCollection dc = new ChseMakSuprDopRptCollection();
                DataSet dsDefect = DBConnection.DBConnectChseMakSuprDopRpt("_usp_DOP_Cheese_Make_DW", ProductionOrder, ProductCode);

                //foreach row in the datatable within the dataset,
                foreach (DataRow dr in dsDefect.Tables[0].Rows)
                {
                    //Create message object
                    ChseMakSuprDopRpt defect = new ChseMakSuprDopRpt();


                    defect.ProductionDate = dr[0].ToString();
                    defect.ProductionOrder = dr[1].ToString();
                    defect.Line = dr[2].ToString();
                    defect.Material = dr[3].ToString();
                    defect.MaterialDescription = dr[4].ToString();
                    defect.WorkCenter = dr[5].ToString();
                    defect.StorageBin = dr[6].ToString();
                    defect.AttGroupName = dr[7].ToString();
                    defect.AttributeName = dr[8].ToString();
                    defect.AttRank = dr[9].ToString();
                    defect.Lower = dr[10].ToString();
                    defect.Target = dr[11].ToString();
                    defect.Upper = dr[12].ToString();
                    defect.GridPos = dr[13].ToString();
                    defect.Min_LV = dr[14].ToString();
                    defect.Max_LV = dr[15].ToString();
                    defect.ReportingKey = dr[16].ToString();                   



                    dc.ChseMakSuprDopRptList.Add(defect);
                }

                return dc;
            }
        

       public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    public class DOPSeparatorRptGenerator : IDOPSeparatorRpt
    {
        public DOPSeparatorRptCollection GetDOPSeparatorRptCollection (string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {
            DOPSeparatorRptCollection dc = new DOPSeparatorRptCollection();
            DataSet dsDefect = DBConnection.DBConnectDOPSeparatorRpt("_usp_DOP_Cheese_Make_DW", ProductionOrder, ProductCode);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                DOPSeparatorRpt defect = new DOPSeparatorRpt();


                defect.ProductionDate = dr[0].ToString();
                defect.ProductionOrder = dr[1].ToString();
                defect.Line = dr[2].ToString();
                defect.Material = dr[3].ToString();
                defect.MaterialDescription = dr[4].ToString();
                defect.WorkCenter = dr[5].ToString();
                defect.StorageBin = dr[6].ToString();
                defect.AttGroupName = dr[7].ToString();
                defect.AttributeName = dr[8].ToString();
                defect.AttRank = dr[9].ToString();
                defect.Lower = dr[10].ToString();
                defect.Target = dr[11].ToString();
                defect.Upper = dr[12].ToString();
                defect.GridPos = dr[13].ToString();
                defect.Min_LV = dr[14].ToString();
                defect.Max_LV = dr[15].ToString();
                defect.ReportingKey = dr[16].ToString();



                dc.DOPSeparatorRptList.Add(defect);
            }

            return dc;
        }


        public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    public class RecPlnRptGenerator : IRecPlnRpt
    {
        public RecPlnRptCollection GetRecPlnRptCollection(string LineNumber, string StartDate, string EndDate, string POid)
        {
            RecPlnRptCollection dc = new RecPlnRptCollection();
            DataSet dsDefect = DBConnection.DBConnectRecPlnRpt("_usp_Get_RecipeVsActual_DW", LineNumber, StartDate, EndDate, POid);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                RecPlnRpt defect = new RecPlnRpt();


                defect.Production_Date = dr[0].ToString();
                defect.VPAID = dr[1].ToString();
                defect.LineNumber = dr[2].ToString();
                defect.Poid = dr[3].ToString();
                defect.LogicalVat = dr[4].ToString();
                defect.PhysicalVat = dr[5].ToString();
                defect.VatProgram = dr[6].ToString();
                defect.CookProgram = dr[7].ToString();
                defect.DrainProgram = dr[8].ToString();
                defect.HtstFeedRate = dr[9].ToString();
                defect.Sep1FeedRate = dr[10].ToString();
                defect.Sep2FeedRate = dr[11].ToString();
                defect.VatFillFPRatio = dr[12].ToString();
                defect.TotalCuts = dr[13].ToString();
                defect.MilkSupplySilo = dr[14].ToString();
                defect.FortSupplySilo = dr[15].ToString();
                defect.SwCrSupplySilo = dr[16].ToString();
                defect.WCSupplySilo = dr[17].ToString();
                defect.StepNumber = dr[18].ToString();
                defect.StepDesc = dr[19].ToString();
                defect.NextStepTime = dr[20].ToString();
                defect.StepTime = dr[21].ToString();
                defect.ActualTime = dr[22].ToString();
                defect.Planneddwelltime = dr[23].ToString();
                defect.CalcPlannedtime = dr[24].ToString();
                defect.Delta = dr[25].ToString();




                dc.RecPlnRptList.Add(defect);
            }

            return dc;
        }


        public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    public class DOPStrChseRptGenerator : IDOPStrChseRpt
    {
        public DOPStrChseRptCollection GetDOPStrChseRptCollection(string LineNumber, string ProductionOrder, string ProductCode, string StartDate, string EndDate)
        {
            DOPStrChseRptCollection dc = new DOPStrChseRptCollection();
            DataSet dsDefect = DBConnection.DBConnectDOPStrChseRpt("_usp_DOP_String_Cheese_DW", ProductionOrder, ProductCode);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                DOPStrChseRpt defect = new DOPStrChseRpt();


                defect.ProductionDate = dr[0].ToString();
                defect.ProductionOrder = dr[1].ToString();
                defect.Line = dr[2].ToString();
                defect.Material = dr[3].ToString();
                defect.MaterialDescription = dr[4].ToString();
                defect.WorkCenter = dr[5].ToString();
                defect.AttGroupName = dr[6].ToString();
                defect.AttributeName = dr[7].ToString();
                defect.AttRank = dr[8].ToString();
                defect.CodeSection = dr[9].ToString();
                defect.Lower = dr[10].ToString();
                defect.Target = dr[11].ToString();
                defect.Upper = dr[12].ToString();               
                defect.ReportingKey = dr[13].ToString();



                dc.DOPStrChseRptList.Add(defect);
            }

            return dc;
        }


        public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    public class ChseAnalysisRptGenerator : IChseAnalysisRpt
    {
        public ChseAnalysisRptCollection GetChseAnalysisRptCollection(string LineNumber, string StartDate, string EndDate, string ProductionOrder, string Material, string Inspection_Type)
        {
            ChseAnalysisRptCollection dc = new ChseAnalysisRptCollection();
            DataSet dsDefect = DBConnection.DBConnectChseAnalysisRpt("_usp_Cheese_Analysis_dw", LineNumber, StartDate, EndDate, ProductionOrder, Material, Inspection_Type);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                ChseAnalysisRpt defect = new ChseAnalysisRpt();


                defect.Line = dr[0].ToString();
                defect.Production_Date = dr[1].ToString();
                defect.Production_Order = dr[2].ToString();
                defect.Product_Code = dr[3].ToString();
                defect.Inspection_Lot = dr[4].ToString();
                defect.Inspection_Type = dr[5].ToString();
                defect.Batch_Number = dr[6].ToString();
                defect.Sample_ID = dr[7].ToString();
                defect.Sample_Date_Time = dr[8].ToString();
                defect.Moist = dr[9].ToString();
                defect.Fat = dr[10].ToString();
                defect.FDB = dr[11].ToString();
                defect.pH = dr[12].ToString();
                defect.Salt = dr[13].ToString();
                defect.Moist_HiLmt = dr[14].ToString();
                defect.Moist_TgLmt = dr[15].ToString();
                defect.Moist_LoLmt = dr[16].ToString();
                defect.Moist_InSpec = dr[17].ToString();
                defect.fat_HiLmt = dr[18].ToString();
                defect.fat_TgLmt = dr[19].ToString();
                defect.fat_LoLmt = dr[20].ToString();
                defect.fat_InSpec = dr[21].ToString();
                defect.fdb_HiLmt = dr[22].ToString();
                defect.fdb_TgLmt = dr[23].ToString();
                defect.fdb_LoLmt = dr[24].ToString();
                defect.fdb_InSpec = dr[25].ToString();
                defect.pH_HiLmt = dr[26].ToString();
                defect.pH_TgLmt = dr[27].ToString();
                defect.pH_LoLmt = dr[28].ToString();
                defect.pH_InSpec = dr[29].ToString();
                defect.salt_HiLmt = dr[30].ToString();
                defect.salt_TgLmt = dr[31].ToString();
                defect.salt_LoLmt = dr[32].ToString();
                defect.salt_InSpec = dr[33].ToString();
                defect.Moist_CorpHiLmt = dr[34].ToString();
                defect.Moist_CorpTgLmt = dr[35].ToString();
                defect.Moist_CorpLoLmt = dr[36].ToString();
                defect.Moist_CorpInSpec = dr[37].ToString();
                defect.fat_CorpHiLmt = dr[38].ToString();
                defect.fat_CorpTgLmt = dr[39].ToString();
                defect.fat_CorpLoLmt = dr[40].ToString();
                defect.fat_CorpInSpec = dr[41].ToString();
                defect.fdb_CorpHiLmt = dr[42].ToString();
                defect.fdb_CorpTgLmt = dr[43].ToString();
                defect.fdb_CorpLoLmt = dr[44].ToString();
                defect.fdb_CorpInSpec = dr[45].ToString();
                defect.pH_CorpHiLmt = dr[46].ToString();
                defect.pH_CorpTgLmt = dr[47].ToString();
                defect.pH_CorpLoLmt = dr[48].ToString();
                defect.pH_CorpInSpec = dr[49].ToString();
                defect.salt_CorpHiLmt = dr[50].ToString();
                defect.salt_CorpTgLmt = dr[51].ToString();
                defect.salt_CorpLoLmt = dr[52].ToString();
                defect.salt_CorpInSpec = dr[53].ToString();
                defect.comment = dr[54].ToString();



                dc.ChseAnalysisRptList.Add(defect);
            }

            return dc;
        }


        public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    public class PowderBlndRptGenerator : IPowderBlndRpt
    {
        public PowderBlndRptCollection GetPowderBlndRptCollection(string LineNumber, string StartDate, string EndDate, string ProductionOrder)
        {
            PowderBlndRptCollection dc = new PowderBlndRptCollection();
            DataSet dsDefect = DBConnection.DBConnectPowderBlndRpt("_usp_Powder_Blend_DW", LineNumber, StartDate, EndDate, ProductionOrder);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                PowderBlndRpt defect = new PowderBlndRpt();


                defect.NoltecUnit = dr[0].ToString();
                defect.CheeseLine = dr[1].ToString();
                defect.DataTimeStamp = dr[2].ToString();
                defect.DisplayTimeStamp = dr[3].ToString();
                defect.CodeSection = dr[4].ToString();
                defect.Batch = dr[5].ToString();
                defect.Recipe = dr[6].ToString();
                defect.ProductionOrder = dr[7].ToString();
                defect.Micros = dr[8].ToString();
                defect.Minor1 = dr[9].ToString();
                defect.Minor2 = dr[10].ToString();
                defect.Minor3 = dr[11].ToString();
                defect.Minor4 = dr[12].ToString();
                defect.Major1 = dr[13].ToString();
                defect.Major2 = dr[14].ToString();
                defect.Major3 = dr[15].ToString();
                defect.Major4 = dr[16].ToString();
                defect.BatchTotal = dr[17].ToString();




                dc.PowderBlndRptList.Add(defect);
            }

            return dc;
        }


        public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    public class PowderBlndTotalRptGenerator : IPowderBlndTotalRpt
    {
        public PowderBlndTotalRptCollection GetPowderBlndTotalRptCollection(string LineNumber, string StartDate, string EndDate, string ProductionOrder)
        {
            PowderBlndTotalRptCollection dc = new PowderBlndTotalRptCollection();
            DataSet dsDefect = DBConnection.DBConnectPowderBlndTotalRpt("_usp_Powder_Blend_Total_DW", LineNumber, StartDate, EndDate, ProductionOrder);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                PowderBlndTotalRpt defect = new PowderBlndTotalRpt();

                defect.Report_Type = dr[0].ToString();
                defect.NoltecUnit = dr[1].ToString();
                defect.CheeseLine = dr[2].ToString();
                defect.DataTimeStamp = dr[3].ToString();
                defect.DisplayTimeStamp = dr[4].ToString();
                defect.CodeSection = dr[5].ToString();
                defect.Batch = dr[6].ToString();
                defect.Recipe = dr[7].ToString();
                defect.ProductionOrder = dr[8].ToString();
                defect.Micros = dr[9].ToString();
                defect.Minor1 = dr[10].ToString();
                defect.Minor2 = dr[11].ToString();
                defect.Minor3 = dr[12].ToString();
                defect.Minor4 = dr[13].ToString();
                defect.Major1 = dr[14].ToString();
                defect.Major2 = dr[15].ToString();
                defect.Major3 = dr[16].ToString();
                defect.Major4 = dr[17].ToString();
                defect.BatchTotal = dr[18].ToString();




                dc.PowderBlndTotalRptList.Add(defect);
            }

            return dc;
        }



     
            //---Varun added -----End-------//
            public string GetXMLContent(string objectID)
        {

            StringBuilder sb = new StringBuilder();
            DataSet dsr = DBConnection.DBConRep("DEFECT_RetrieveByObjectid", objectID);

            string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xmlcontent);
                XmlWriterSettings settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    NewLineChars = "\r\n",
                    NewLineHandling = NewLineHandling.Replace
                };
                using (XmlWriter writer = XmlWriter.Create(sb, settings))
                {
                    doc.Save(writer);
                }
            }
            catch (Exception)
            {
                sb = sb.Append(xmlcontent);
            }
            return sb.ToString().Replace("utf-16", "utf-8");
        }

        public void saveXML(string xmlcon, string obj)
        {

            DBConnection.DBConSaveComment("DEFECT_Comment_Update", obj, xmlcon);

            //string xmlcontent = dsr.Tables[0].Rows[0][0].ToString();

            //return xmlcontent;
        }

    }

    //---Varun added -----Start-------//
    public class RetentateDOPRptGenerator : IRetentateDOPRpt
    {
        public RetentateDOPRptCollection GetRetentateDOPRptCollection(string ProductionOrder)
        {
            RetentateDOPRptCollection dc = new RetentateDOPRptCollection();
            DataSet dsRetDop = DBConnection.DBConnectRetentateDOPRpt("_usp_DOP_Retentate_DW", ProductionOrder);

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsRetDop.Tables[0].Rows)
            {
                //Create message object
                RetentateDOPRpt RetDop = new RetentateDOPRpt();

                RetDop.ProductionDate = dr[0].ToString();
                RetDop.ProductionOrder = dr[1].ToString();
                RetDop.Material = dr[2].ToString();
                RetDop.MaterialDescription = dr[3].ToString();
                RetDop.UOM = dr[4].ToString();
                RetDop.PO_Qty_Required = dr[5].ToString();
                RetDop.WorkCenter = dr[6].ToString();
                RetDop.StorageBin = dr[7].ToString();
                RetDop.AttGroupName = dr[8].ToString();
                RetDop.AttributeName = dr[9].ToString();
                RetDop.AttRank = dr[10].ToString();
                RetDop.DataGroup = dr[11].ToString();
                RetDop.CodeSection = dr[12].ToString();
                RetDop.Lower = dr[13].ToString();
                RetDop.Target = dr[14].ToString();
                RetDop.Upper = dr[15].ToString();
                RetDop.GridPos = dr[16].ToString();
                RetDop.ReportingKey = dr[17].ToString();




                dc.RetentateDOPRptCollectionList.Add(RetDop);
            }

            return dc;
        }
    }


    public class INJobScheduleGenerator : IINJobSchedule
    {
        public INJobScheduleCollection GetINJobScheduleCollection()
        {
            INJobScheduleCollection dc = new INJobScheduleCollection();
            DataSet dsDefect = DBConnection.DBConnectINJobSchedule("csp_INJobSchedule_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsDefect.Tables[0].Rows)
            {
                //Create message object
                INJobSchedule defect = new INJobSchedule();
                defect.RowID = dr[0].ToString();
                defect.ProductionOrder = dr[1].ToString();
                defect.InspectionLot = dr[2].ToString();
                defect.SpecID = dr[3].ToString();
                defect.POID = dr[4].ToString();
                defect.IN2164_Status = dr[5].ToString();
                defect.IN2165_Status = dr[6].ToString();
                defect.StartDate = dr[7].ToString();
                defect.EndDate = dr[8].ToString();
                defect.PRID = dr[9].ToString();
                defect.INSPID = dr[10].ToString();
                defect.MAT = dr[11].ToString();
                defect.SP = dr[12].ToString();
                dc.INJobScheduleList.Add(defect);
            }

            return dc;
        }

        public void addINJobSchedule(
                    string RowIDValue,
                    string ProductionOrderValue,
                    string InspectionLotValue,
                    string SpecIDValue,
                    string POIDValue,
                    string IN2164_StatusValue,
                    string IN2165_StatusValue,
                    string StartDateValue,
                    string EndDateValue


            )
        {

            DBConnection.DBConnectaddINJobSchedule("csp_I_INJobSchedule",
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
        }

    }






    public class EstimatorGenerator : IEstimator
    {
        public EstimatorCollection GetEstimatorCollection()
        {
            EstimatorCollection dc = new EstimatorCollection();
            DataSet dsEstimator = DBConnection.DBConnectProjectList("Estimator_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsEstimator.Tables[0].Rows)
            {
                //Create message object
                Estimator estimator = new Estimator();
                estimator.Area = dr[0].ToString();
                estimator.UIName = dr[1].ToString();
                estimator.Complexity = dr[2].ToString();
                estimator.BAHours = dr[3].ToString();
                estimator.AppsAnalysisHours = dr[4].ToString();
                estimator.DevelopmentHours = dr[5].ToString();
                estimator.TestingHours = dr[6].ToString();
                estimator.DeploymentHours = dr[7].ToString();
                estimator.TrainingHours = dr[8].ToString();
                estimator.TotalHours = dr[9].ToString();
                estimator.MassTotalHours = dr[10].ToString();
                estimator.Rate = dr[11].ToString();
                estimator.HardwareCost = dr[12].ToString();
                estimator.SoftwareCost = dr[13].ToString();
                estimator.ConsultingCost = dr[14].ToString();
                estimator.TotalCost = dr[15].ToString();
                estimator.row_id = dr[16].ToString();


                dc.EstimatorList.Add(estimator);
            }

            return dc;
        }



        public void addEstimator(string AreaValue, string UINameValue, string ComplexityValue, string BAHoursValue, string AppsAnalysisHoursValue, string DevelopmentHoursValue, string TestingHoursValue, string DeploymentHoursValue, string TrainingHoursValue, string TotalHoursValue, string MassTotalHoursValue, string RateValue, string HardwareCostValue, string SoftwareCostValue, string ConsultingCostValue, string TotalCostValue, string row_idValue)
        {

            DBConnection.DBConnectaddEstimator("csp_I_Estimator_ALL", AreaValue, UINameValue, ComplexityValue, BAHoursValue, AppsAnalysisHoursValue, DevelopmentHoursValue, TestingHoursValue, DeploymentHoursValue, TrainingHoursValue, TotalHoursValue, MassTotalHoursValue, RateValue, HardwareCostValue, SoftwareCostValue, ConsultingCostValue, TotalCostValue, row_idValue);
        }

        public void deleteEstimator(List<string> objarray)
        {
            foreach (string id in objarray)
            {
                DBConnection.DBProjectDelete("csp_D_Estimator_ALL", id.ToString());
            }
        }

        public void saveEstimator(string id, string colname, string colval)
        {
            DBConnection.DBProjectSave("csp_U_Estimator", id, colname, colval);
        }



    }



    public class ChangeMgmtGenerator : IChangeMgmt
    {
        public ChangeMgmtCollection GetChangeMgmtCollection()
        {
            ChangeMgmtCollection dc = new ChangeMgmtCollection();
            DataSet dsChangeMgmt = DBConnection.DBConnectRELEASEList("ChangeMgmt_ALL");

            //foreach row in the datatable within the dataset,
            foreach (DataRow dr in dsChangeMgmt.Tables[0].Rows)
            {
                //Create message object

                ChangeMgmt ChangeMgmt = new ChangeMgmt();
                ChangeMgmt.ReleaseName = dr[0].ToString();
                ChangeMgmt.FS = dr[1].ToString();
                ChangeMgmt.BusinessLead = dr[2].ToString();
                ChangeMgmt.BLSign = dr[3].ToString();
                ChangeMgmt.BusinessApprover = dr[4].ToString();
                ChangeMgmt.BApproverSign = dr[5].ToString();
                ChangeMgmt.DEVandTS = dr[6].ToString();
                ChangeMgmt.Developer = dr[7].ToString();
                ChangeMgmt.DEVSign = dr[8].ToString();
                ChangeMgmt.ST = dr[9].ToString();
                ChangeMgmt.TechLead = dr[10].ToString();
                ChangeMgmt.TLSign = dr[11].ToString();
                ChangeMgmt.AppsApprover = dr[12].ToString();
                ChangeMgmt.AppsApproverSign = dr[13].ToString();
                ChangeMgmt.FUT = dr[14].ToString();
                ChangeMgmt.BLSign2 = dr[15].ToString();
                ChangeMgmt.DEVSign2 = dr[16].ToString();
                ChangeMgmt.TLSign2 = dr[17].ToString();
                ChangeMgmt.AppsApproverSign2 = dr[18].ToString();
                ChangeMgmt.PackageLocation = dr[19].ToString();
                ChangeMgmt.ScreenShotLocation = dr[20].ToString();
                ChangeMgmt.LockedDateTime = dr[21].ToString();
                ChangeMgmt.Status = dr[22].ToString();
                ChangeMgmt.Description = dr[23].ToString();
                ChangeMgmt.TestCycle = dr[24].ToString();
                ChangeMgmt.EnteredBy = dr[25].ToString();
                ChangeMgmt.FSLocation = dr[26].ToString();
                ChangeMgmt.Comment = dr[27].ToString();
                ChangeMgmt.row_id = dr[28].ToString();
                ChangeMgmt.TrainerName = dr[29].ToString();
                ChangeMgmt.PlantContact = dr[30].ToString();
                ChangeMgmt.TechSpecLocation = dr[31].ToString();
                ChangeMgmt.TestScriptLocation = dr[32].ToString();
                ChangeMgmt.PRODDeployDate = dr[33].ToString();
                ChangeMgmt.ControlsAnalyst = dr[34].ToString();
                ChangeMgmt.DeployStatus = dr[35].ToString();
                ChangeMgmt.DeployPlants = dr[36].ToString();
                ChangeMgmt.Updates = dr[37].ToString();
                ChangeMgmt.AssignedTo = dr[38].ToString();
                ChangeMgmt.ProjectID = dr[39].ToString();
                ChangeMgmt.ProjectName = dr[40].ToString();


                dc.ChangeMgmtList.Add(ChangeMgmt);
            }

            return dc;
        }



        public void addChangeMgmt(string ReleaseNameValue, string FSValue, string BusinessLeadValue, string BLSignValue, string BusinessApproverValue, string BApproverSignValue, string DEVandTSValue, string DeveloperValue, string DEVSignValue, string STValue, string TechLeadValue, string TLSignValue, string AppsApproverValue, string AppsApproverSignValue, string FUTValue, string BLSign2Value, string DEVSign2Value, string TLSign2Value, string AppsApproverSign2Value, string PackageLocationValue, string ScreenShotLocationValue, string LockedDateTimeValue, string StatusValue, string DescriptionValue, string TestCycleValue, string EnteredByValue, string FSLocationValue, string CommentValue, string row_idValue, string TrainerNameValue, string PlantContactValue, string TechSpecLocationValue, string TestScriptLocationValue, string PRODDeployDateValue, string ControlsAnalystValue, string DeployStatusValue, string DeployPlantsValue, string UpdatesValue, string AssignedToValue,string ProjectIDReleaseValue)
        {

            DBConnection.DBConnectaddChangeMgmt("csp_I_ChangeMgmt_ALL", ReleaseNameValue, FSValue, BusinessLeadValue, BLSignValue, BusinessApproverValue, BApproverSignValue, DEVandTSValue, DeveloperValue, DEVSignValue, STValue, TechLeadValue, TLSignValue, AppsApproverValue, AppsApproverSignValue, FUTValue, BLSign2Value, DEVSign2Value, TLSign2Value, AppsApproverSign2Value, PackageLocationValue, ScreenShotLocationValue, LockedDateTimeValue, StatusValue, DescriptionValue, TestCycleValue, EnteredByValue, FSLocationValue, CommentValue, row_idValue, TrainerNameValue, PlantContactValue, TechSpecLocationValue, TestScriptLocationValue, PRODDeployDateValue, ControlsAnalystValue, DeployStatusValue, DeployPlantsValue, UpdatesValue, AssignedToValue, ProjectIDReleaseValue);
        }

        public void deleteChangeMgmt(List<string> objarray)
        {
            foreach (string id in objarray)
            {
                DBConnection.DBProjectDelete("csp_D_ChangeMgmt_ALL", id.ToString());
            }
        }

        public void saveChangeMgmt(string id, string colname, string colval)
        {
            DBConnection.DBProjectSave("csp_U_ChangeMgmt", id, colname, colval);
        }

        public void InitChangeMgmt(string id, string colname, string colval)
        {
            DBConnection.DBCMInit("csp_I_InitChangeMgmt", id, colname, colval);
        }
        public void SaveCMForm(string id, string colname, string colval)
        {
            DBConnection.DBCMSave("csp_U_ChangeMgmt", id, colname, colval);
        }
    }


}