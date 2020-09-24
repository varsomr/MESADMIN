using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace DAL.Data
{
    public class DBConnection
    {

        public static DataSet DBConnectProjects(string storedprocedure, string param1, string param2)
        {
            DataSet ds = new DataSet();
            using (SqlConnection ProjectConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["ProjectConnect"].ConnectionString.ToString()))
            {
                ProjectConnection.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ProjectConnection);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p1 = new SqlParameter("handle", SqlDbType.VarChar);
                var p2 = new SqlParameter("sql", SqlDbType.VarChar);
                p1.Value = param1;
                p2.Value = param2;
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = sqlComm;
                da.Fill(ds);
                return ds;
            }

        }

        public static DataSet DBConnectTASKList(string storedprocedure)
        {
            DataSet dsProjList = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["ProjectConnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;


                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsProjList);
                return dsProjList;
            }

        }

        public static DataSet DBConnectRELEASEList(string storedprocedure)
        {
            DataSet dsProjList = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["ProjectConnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;


                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsProjList);
                return dsProjList;
            }

        }


        public static DataSet DBConnect(string storedprocedure)
        {
            DataSet ds = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, myConnection);
                sqlComm.CommandType = CommandType.StoredProcedure;
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = sqlComm;
                da.Fill(ds);
                return ds;
            }

        }

        public static DataSet DBConnectRpt(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            // using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["MESQ1Connnect"].ConnectionString.ToString()))
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCasesValidation(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectCasesValidationL(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("Area", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectProduction(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("wo_id", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectTicket(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;

                var p = new SqlParameter("wo_id", SqlDbType.VarChar);
                p.Value = parameter;

                sqlComm.Parameters.Add(p);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectConsumption(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("wo_id", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectChkDOP(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("wo_id", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }


        public static DataSet DBConnectIN2164BOMItem(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("poid", SqlDbType.VarChar);
                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectIN2164Spec(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("poid", SqlDbType.VarChar);
                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectIN2165Attribute(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("spid", SqlDbType.VarChar);
                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectIN2165AttributeGroup(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("spid", SqlDbType.VarChar);
                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectINJobSchedule(string storedprocedure)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectChkWebSpec(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("Area", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectChkHistorian(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("Area", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectChkIN2175(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("Area", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectSiloINV(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("StartDate", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectTruck(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("TruckId", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectUtilityMetering(string storedprocedure, string parameter, string parameter1, string parameter2)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("majorgroup", SqlDbType.VarChar);
                var p2 = new SqlParameter("date", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        public static DataSet DBConnectCIPTITRSETUP(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("SkidKey", SqlDbType.VarChar);
                var p2 = new SqlParameter("ChemicalTypeKey", SqlDbType.VarChar);
                var p3 = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;
                p3.Value = parameter3;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.Parameters.Add(p3);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCIPCHEMENTRY(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCIPMANTEMP(string storedprocedure, string parameter, string parameter1, string parameter2)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("UnitKey", SqlDbType.VarChar);
                var p2 = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCIPReviewEntry(string storedprocedure, string parameter, string parameter1, string parameter2)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("WashKey", SqlDbType.VarChar);
                var p2 = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCIPVerifyDataEntry(string storedprocedure, string parameter, string parameter1, string parameter2)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("WashKey", SqlDbType.VarChar);
                var p2 = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCIPNotes(string storedprocedure, string parameter, string parameter1, string parameter2)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("WashKey", SqlDbType.VarChar);
                var p2 = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCIPPCQI(string storedprocedure, string parameter, string parameter1, string parameter2)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("WashKey", SqlDbType.VarChar);
                var p2 = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectCIPLogin(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("Username", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectPhageME(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;

                sqlComm.Parameters.Add(p);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectQuality(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("SerialNumber", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectProdLabel(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {

                Q1Connnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandTimeout = 60 * 3;
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var p1 = new SqlParameter("Pallet", SqlDbType.VarChar);
                p.Value = parameter;
                p1.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;

                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectVatMsgOff(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        public static DataSet DBConnectVat(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5)
        {
            DataSet dsvat = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("EndDate", SqlDbType.VarChar);
                var s = new SqlParameter("ProductCode", SqlDbType.VarChar);
                var t = new SqlParameter("Line", SqlDbType.VarChar);
                var u = new SqlParameter("StartDate", SqlDbType.VarChar);
                var q = new SqlParameter("plant", SqlDbType.VarChar);
                var r = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                p.Value = parameter1;
                q.Value = parameter5;
                r.Value = parameter3;
                s.Value = parameter4;
                t.Value = parameter2;
                u.Value = parameter;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(q);
                sqlComm.Parameters.Add(r);
                sqlComm.Parameters.Add(s);
                sqlComm.Parameters.Add(t);
                sqlComm.Parameters.Add(u);


                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsvat);
                return dsvat;
            }

        }
        public static DataSet DBConnectMass(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsmass = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);

                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("StartDate", SqlDbType.VarChar);
                var q = new SqlParameter("EndDate", SqlDbType.VarChar);
                p.Value = parameter;
                q.Value = parameter1;


                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(q);

                // set the CommandTimeout
                sqlComm.CommandTimeout = 200; // seconds
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();

                // daa.SelectCommand.CommandTimeout = 200;  // seconds
                daa.SelectCommand = sqlComm;
                daa.Fill(dsmass);
                return dsmass;
            }

        }
        public static DataSet DBConnectProjectList(string storedprocedure)
        {
            DataSet dsProjList = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;


                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsProjList);
                return dsProjList;
            }

        }

        public static DataSet DBConnectCircuitList(string storedprocedure, string parameter)
        {
            DataSet dsProjList = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);

                p.Value = parameter;

                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsProjList);
                return dsProjList;
            }

        }

        public static DataSet DBConnectChemicalList(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsProjList = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var q = new SqlParameter("SkidKey", SqlDbType.VarChar);

                p.Value = parameter;
                q.Value = parameter1;
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(q);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsProjList);
                return dsProjList;
            }

        }

        public static DataSet DBConnectMTempUnitsList(string storedprocedure, string parameter)
        {
            DataSet dsProjList = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);

                p.Value = parameter;
                sqlComm.Parameters.Add(p);
                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsProjList);
                return dsProjList;
            }

        }

        public static void DBConnectaddRowProjList(string storedprocedure)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                //var p = new SqlParameter("LocationId", SqlDbType.VarChar);
                //p.Value = parameter;
                //sqlCommrep.Parameters.Add(p);
                sqlCommrep.ExecuteNonQuery();

            }
        }


        public static void DBConnectInsertTimeProjList(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ProjectName", SqlDbType.VarChar);
                var q = new SqlParameter("ProjectStepName", SqlDbType.VarChar);
                var r = new SqlParameter("Ticket", SqlDbType.VarChar);
                var x = new SqlParameter("AssignedTo", SqlDbType.VarChar);
                var z = new SqlParameter("TotalHoursSpentAPPS", SqlDbType.VarChar);
                var a = new SqlParameter("EstStartDate", SqlDbType.VarChar);
                var b = new SqlParameter("EstCompleteDate", SqlDbType.VarChar);
                var c = new SqlParameter("row_id", SqlDbType.VarChar);
                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                x.Value = parameter3;
                z.Value = parameter4;
                a.Value = parameter5;
                b.Value = parameter6;
                c.Value = parameter7;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddMainProject(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ProjectName", SqlDbType.VarChar);
                var q = new SqlParameter("Description", SqlDbType.VarChar);
                var r = new SqlParameter("requestor", SqlDbType.VarChar);
                var s = new SqlParameter("EstTotalHours", SqlDbType.VarChar);
                var t = new SqlParameter("EstStartDateD", SqlDbType.VarChar);
                var u = new SqlParameter("EstCompleteDateD", SqlDbType.VarChar);
                var v = new SqlParameter("Priority", SqlDbType.VarChar);
                var w = new SqlParameter("ProjectStatus", SqlDbType.VarChar);
                var x = new SqlParameter("row_id", SqlDbType.VarChar);

                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);

                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectapproveTasks(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9, string parameter10, string parameter11, string parameter12, string parameter13, string parameter14)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ProjectName", SqlDbType.VarChar);
                var q = new SqlParameter("DefectName", SqlDbType.VarChar);
                var r = new SqlParameter("Priority", SqlDbType.VarChar);
                var s = new SqlParameter("Status", SqlDbType.VarChar);
                var t = new SqlParameter("Description", SqlDbType.VarChar);
                var u = new SqlParameter("TestCycle", SqlDbType.VarChar);
                var v = new SqlParameter("EnteredBy", SqlDbType.VarChar);
                var w = new SqlParameter("AssignedTo", SqlDbType.VarChar);
                var x = new SqlParameter("InsertDateTime", SqlDbType.VarChar);
                var y = new SqlParameter("UpdateDateTime", SqlDbType.VarChar);
                var z = new SqlParameter("Comment", SqlDbType.VarChar);
                var a = new SqlParameter("TotalHoursSpentAPPS", SqlDbType.VarChar);
                var b = new SqlParameter("EstStartDate", SqlDbType.VarChar);
                var c = new SqlParameter("EstCompleteDate", SqlDbType.VarChar);
                var d = new SqlParameter("row_id", SqlDbType.VarChar);



                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;
                z.Value = parameter10;
                a.Value = parameter11;
                b.Value = parameter12;
                c.Value = parameter13;
                d.Value = parameter14;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.Parameters.Add(d);
                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddDefect(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9, string parameter10, string parameter11, string parameter12, string parameter13, string parameter14, string parameter15, string parameter16, string parameter17, string parameter18)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ProjectName", SqlDbType.VarChar);
                var q = new SqlParameter("DefectName", SqlDbType.VarChar);
                var r = new SqlParameter("Priority", SqlDbType.VarChar);
                var s = new SqlParameter("Status", SqlDbType.VarChar);
                var t = new SqlParameter("Description", SqlDbType.VarChar);
                var u = new SqlParameter("Type", SqlDbType.VarChar);
                var v = new SqlParameter("TestCycle", SqlDbType.VarChar);
                var w = new SqlParameter("EnteredBy", SqlDbType.VarChar);
                var x = new SqlParameter("AssignedTo", SqlDbType.VarChar);
                var y = new SqlParameter("Comment", SqlDbType.VarChar);
                var z = new SqlParameter("TotalHoursSpentAPPS", SqlDbType.VarChar);
                var a = new SqlParameter("EstStartDate", SqlDbType.VarChar);
                var b = new SqlParameter("EstCompleteDate", SqlDbType.VarChar);
                var c = new SqlParameter("row_id", SqlDbType.VarChar);
                var d = new SqlParameter("ProdArea", SqlDbType.VarChar);
                var e = new SqlParameter("PercentResp", SqlDbType.VarChar);
                var f = new SqlParameter("PlanStartDate", SqlDbType.VarChar);
                var g = new SqlParameter("PlanCompleteDate", SqlDbType.VarChar);
                var h = new SqlParameter("BusReqCompleteDate", SqlDbType.VarChar);
                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;
                z.Value = parameter10;
                a.Value = parameter11;
                b.Value = parameter12;
                c.Value = parameter13;
                d.Value = parameter14;
                e.Value = parameter15;
                f.Value = parameter16;
                g.Value = parameter17;
                h.Value = parameter18;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.Parameters.Add(d);
                sqlCommrep.Parameters.Add(e);
                sqlCommrep.Parameters.Add(f);
                sqlCommrep.Parameters.Add(g);
                sqlCommrep.Parameters.Add(h);

                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddServDeskEntry(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("IncidentID", SqlDbType.VarChar);
                var q = new SqlParameter("ProcessInput", SqlDbType.VarChar);
                var r = new SqlParameter("ApplicationInput", SqlDbType.VarChar);
                var s = new SqlParameter("ReportInput", SqlDbType.VarChar);
                var t = new SqlParameter("LITInput", SqlDbType.VarChar);
                var u = new SqlParameter("HardwareInput", SqlDbType.VarChar);
                var v = new SqlParameter("SDTechName", SqlDbType.VarChar);
                var w = new SqlParameter("CreateDate", SqlDbType.VarChar);

                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddUtilityMetering(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;

                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var q = new SqlParameter("MajorGroup", SqlDbType.VarChar);
                var r = new SqlParameter("Area", SqlDbType.VarChar);
                var s = new SqlParameter("MeterTag", SqlDbType.VarChar);
                var t = new SqlParameter("CreatedDateTime", SqlDbType.VarChar);
                var u = new SqlParameter("UpdatedValue", SqlDbType.VarChar);
                var v = new SqlParameter("Goal", SqlDbType.VarChar);

                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;



                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);

                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddCIPTITRSETUP(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Plant", SqlDbType.VarChar);
                var q = new SqlParameter("TitrationCnt", SqlDbType.VarChar);
                var r = new SqlParameter("SkidKey", SqlDbType.VarChar);
                var s = new SqlParameter("ChemicalTypeKey", SqlDbType.VarChar);
                var t = new SqlParameter("EUKey", SqlDbType.VarChar);
                var u = new SqlParameter("Enable", SqlDbType.VarChar);
                var v = new SqlParameter("TitrationRangeHigh", SqlDbType.VarChar);
                var w = new SqlParameter("TitrationRangeLow", SqlDbType.VarChar);
                var x = new SqlParameter("OriginalTitrationSetupKey", SqlDbType.VarChar);
                var y = new SqlParameter("Action", SqlDbType.VarChar);

                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);

                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddCIPCHEMENTRY(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var o = new SqlParameter("Plant", SqlDbType.VarChar);
                var p = new SqlParameter("ChemicalName", SqlDbType.VarChar);
                var q = new SqlParameter("ChemicalTypeKey", SqlDbType.VarChar);
                var r = new SqlParameter("ChemicalCost", SqlDbType.VarChar);
                var s = new SqlParameter("ChemicalCostEUKey", SqlDbType.VarChar);
                var t = new SqlParameter("OriginalChemicalKey", SqlDbType.VarChar);
                var u = new SqlParameter("Action", SqlDbType.VarChar);

                o.Value = parameter;
                p.Value = parameter1;
                q.Value = parameter2;
                r.Value = parameter3;
                s.Value = parameter4;
                t.Value = parameter5;
                u.Value = parameter6;

                sqlCommrep.Parameters.Add(o);
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);

                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddCIPMANTEMP(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var o = new SqlParameter("Plant", SqlDbType.VarChar);
                var p = new SqlParameter("UnitKey", SqlDbType.VarChar);
                var q = new SqlParameter("UnitValue", SqlDbType.VarChar);
                var r = new SqlParameter("Timestamp", SqlDbType.VarChar);
                var s = new SqlParameter("Action", SqlDbType.VarChar);


                o.Value = parameter;
                p.Value = parameter1;
                q.Value = parameter2;
                r.Value = parameter3;
                s.Value = parameter4;


                sqlCommrep.Parameters.Add(o);
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddCIPReviewEntry(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var o = new SqlParameter("Plant", SqlDbType.VarChar);
                var p = new SqlParameter("ReviewKey", SqlDbType.VarChar);
                var q = new SqlParameter("WashKey", SqlDbType.VarChar);
                var r = new SqlParameter("ReviewName", SqlDbType.VarChar);
                var s = new SqlParameter("ReviewComment", SqlDbType.VarChar);
                var t = new SqlParameter("ReviewReason", SqlDbType.VarChar);
                var u = new SqlParameter("Action", SqlDbType.VarChar);

                o.Value = parameter;
                p.Value = parameter1;
                q.Value = parameter2;
                r.Value = parameter3;
                s.Value = parameter4;
                t.Value = parameter5;
                u.Value = parameter6;


                sqlCommrep.Parameters.Add(o);
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddCIPVerifyDataEntry(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var o = new SqlParameter("Plant", SqlDbType.VarChar);
                var p = new SqlParameter("VerifyKey", SqlDbType.VarChar);
                var q = new SqlParameter("WashKey", SqlDbType.VarChar);
                var r = new SqlParameter("VerifyName", SqlDbType.VarChar);
                var s = new SqlParameter("VerifyComment", SqlDbType.VarChar);
                var t = new SqlParameter("VerifyReason", SqlDbType.VarChar);
                var u = new SqlParameter("Action", SqlDbType.VarChar);

                o.Value = parameter;
                p.Value = parameter1;
                q.Value = parameter2;
                r.Value = parameter3;
                s.Value = parameter4;
                t.Value = parameter5;
                u.Value = parameter6;


                sqlCommrep.Parameters.Add(o);
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddCIPNotes(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var o = new SqlParameter("Plant", SqlDbType.VarChar);
                var p = new SqlParameter("OriginalNotesKey", SqlDbType.VarChar);
                var q = new SqlParameter("WashKey", SqlDbType.VarChar);
                var r = new SqlParameter("NotesName", SqlDbType.VarChar);
                var s = new SqlParameter("NotesComment", SqlDbType.VarChar);
                var t = new SqlParameter("NotesTime", SqlDbType.VarChar);
                var u = new SqlParameter("Action", SqlDbType.VarChar);

                o.Value = parameter;
                p.Value = parameter1;
                q.Value = parameter2;
                r.Value = parameter3;
                s.Value = parameter4;
                t.Value = parameter5;
                u.Value = parameter6;


                sqlCommrep.Parameters.Add(o);
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddCIPPCQI(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["CIPConnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var o = new SqlParameter("Plant", SqlDbType.VarChar);
                var p = new SqlParameter("OriginalPCQIKey", SqlDbType.VarChar);
                var q = new SqlParameter("WashKey", SqlDbType.VarChar);
                var r = new SqlParameter("PCQIName", SqlDbType.VarChar);
                var s = new SqlParameter("PCQIComment", SqlDbType.VarChar);
                var t = new SqlParameter("PCQITime", SqlDbType.VarChar);
                var u = new SqlParameter("Action", SqlDbType.VarChar);
                var v = new SqlParameter("Status", SqlDbType.VarChar);
                var w = new SqlParameter("WashConcate", SqlDbType.VarChar);

                o.Value = parameter;
                p.Value = parameter1;
                q.Value = parameter2;
                r.Value = parameter3;
                s.Value = parameter4;
                t.Value = parameter5;
                u.Value = parameter6;
                v.Value = parameter7;
                w.Value = parameter8;

                sqlCommrep.Parameters.Add(o);
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.ExecuteNonQuery();

            }
        }



        public static void DBConnectaddPhageME(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ID", SqlDbType.VarChar);
                var q = new SqlParameter("ProductionDate", SqlDbType.VarChar);
                var r = new SqlParameter("Line", SqlDbType.VarChar);
                var s = new SqlParameter("Location", SqlDbType.VarChar);
                var t = new SqlParameter("LogVatTankSilo", SqlDbType.VarChar);
                var u = new SqlParameter("PhageResult", SqlDbType.VarChar);
                var v = new SqlParameter("Action", SqlDbType.VarChar);
                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);

                sqlCommrep.ExecuteNonQuery();

            }
        }

        public static void DBConnectaddIN2164PO(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9, string parameter10, string parameter11, string parameter12, string parameter13, string parameter14, string parameter15, string parameter16)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ProductionOrder_Id", SqlDbType.VarChar);
                var q = new SqlParameter("ProductionOrderNumber", SqlDbType.VarChar);
                var r = new SqlParameter("MaterialNumber", SqlDbType.VarChar);
                var s = new SqlParameter("TotalQuantity", SqlDbType.VarChar);
                var t = new SqlParameter("ScheduledStartTime", SqlDbType.VarChar);
                var u = new SqlParameter("ScheduledEndTime", SqlDbType.VarChar);
                var v = new SqlParameter("StorageLocationReceipt", SqlDbType.VarChar);
                var w = new SqlParameter("FatProtRatio", SqlDbType.VarChar);
                var x = new SqlParameter("MilkProtein", SqlDbType.VarChar);
                var y = new SqlParameter("MilkFat", SqlDbType.VarChar);
                var z = new SqlParameter("RetFactor", SqlDbType.VarChar);
                var a = new SqlParameter("Moisture", SqlDbType.VarChar);
                var b = new SqlParameter("Salt", SqlDbType.VarChar);
                var c = new SqlParameter("Fat", SqlDbType.VarChar);
                var d = new SqlParameter("pH", SqlDbType.VarChar);
                var e = new SqlParameter("SetPH", SqlDbType.VarChar);
                var f = new SqlParameter("NumVats", SqlDbType.VarChar);


                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;
                z.Value = parameter10;
                a.Value = parameter11;
                b.Value = parameter12;
                c.Value = parameter13;
                d.Value = parameter14;
                e.Value = parameter15;
                f.Value = parameter16;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.Parameters.Add(d);
                sqlCommrep.Parameters.Add(e);
                sqlCommrep.Parameters.Add(f);
                sqlCommrep.ExecuteNonQuery();

            }
        }

        public static void DBConnectaddIN2164BOMItem(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9, string parameter10, string parameter11)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("BOMPosition", SqlDbType.VarChar);
                var q = new SqlParameter("ComponentMaterial", SqlDbType.VarChar);
                var r = new SqlParameter("ComponentQuantity", SqlDbType.VarChar);
                var s = new SqlParameter("OperationAssignment", SqlDbType.VarChar);
                var t = new SqlParameter("StorageLocation", SqlDbType.VarChar);
                var u = new SqlParameter("StorageLocationDesc", SqlDbType.VarChar);
                var v = new SqlParameter("RoutingOperationNumber", SqlDbType.VarChar);
                var w = new SqlParameter("OperationWorkCenter", SqlDbType.VarChar);
                var x = new SqlParameter("OperationShortText", SqlDbType.VarChar);
                var y = new SqlParameter("CoProductFlag", SqlDbType.VarChar);
                var z = new SqlParameter("NumVessels", SqlDbType.VarChar);
                var a = new SqlParameter("ProductionOrder_Id", SqlDbType.VarChar);



                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;
                z.Value = parameter10;
                a.Value = parameter11;


                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);

                sqlCommrep.ExecuteNonQuery();

            }
        }

        public static void DBConnectaddIN2164Spec(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Name", SqlDbType.VarChar);
                var q = new SqlParameter("Value", SqlDbType.VarChar);
                var r = new SqlParameter("Lower", SqlDbType.VarChar);
                var s = new SqlParameter("Upper", SqlDbType.VarChar);
                var t = new SqlParameter("DOPGroup", SqlDbType.VarChar);
                var u = new SqlParameter("Material", SqlDbType.VarChar);
                var v = new SqlParameter("Specs_ID", SqlDbType.VarChar);
                var w = new SqlParameter("POIDSpec_IDValue", SqlDbType.VarChar);

                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);

                sqlCommrep.ExecuteNonQuery();

            }
        }


        public static void DBConnectaddIN2165Insp(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Specification_Id", SqlDbType.VarChar);
                var q = new SqlParameter("SpecificationName", SqlDbType.VarChar);
                var r = new SqlParameter("SpecificationDesc", SqlDbType.VarChar);
                var s = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var t = new SqlParameter("InspectionLot", SqlDbType.VarChar);



                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;


                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);

                sqlCommrep.ExecuteNonQuery();

            }
        }
        public static void DBConnectaddIN2165Attribute(string storedprocedure, string parameter
                , string parameter1
                , string parameter2
                , string parameter3
                , string parameter4
                , string parameter5
                , string parameter6
                , string parameter7
                , string parameter8
                , string parameter9
                , string parameter10
                , string parameter11
                , string parameter12
                , string parameter13
                , string parameter14
                , string parameter15
                , string parameter16
                , string parameter17
                , string parameter18
                , string parameter19
                , string parameter20
                , string parameter21
                , string parameter22
                )
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("AttributeName", SqlDbType.VarChar);
                var q = new SqlParameter("AttributeTitle", SqlDbType.VarChar);
                var r = new SqlParameter("AttributeGroup", SqlDbType.VarChar);
                var s = new SqlParameter("AttributeRank", SqlDbType.VarChar);
                var t = new SqlParameter("EntryLabelGroup", SqlDbType.VarChar);
                var u = new SqlParameter("AnalysisName", SqlDbType.VarChar);
                var v = new SqlParameter("TestRequired", SqlDbType.VarChar);
                var w = new SqlParameter("LimitsUOM", SqlDbType.VarChar);
                var x = new SqlParameter("USL", SqlDbType.VarChar);
                var y = new SqlParameter("Target", SqlDbType.VarChar);
                var z = new SqlParameter("LSL", SqlDbType.VarChar);
                var a = new SqlParameter("Spare1", SqlDbType.VarChar);
                var b = new SqlParameter("Spare2", SqlDbType.VarChar);
                var c = new SqlParameter("Spare3", SqlDbType.VarChar);
                var d = new SqlParameter("Spare4", SqlDbType.VarChar);
                var e = new SqlParameter("SaveReasonCodes", SqlDbType.VarChar);
                var f = new SqlParameter("Operation", SqlDbType.VarChar);
                var g = new SqlParameter("OperationWorkCenter", SqlDbType.VarChar);
                var h = new SqlParameter("DisplayDigits", SqlDbType.VarChar);
                var i = new SqlParameter("ConfirmationNumber", SqlDbType.VarChar);
                var j = new SqlParameter("RecordingType", SqlDbType.VarChar);
                var k = new SqlParameter("AutoSave", SqlDbType.VarChar);
                var l = new SqlParameter("Specification_Id", SqlDbType.VarChar);




                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;
                z.Value = parameter10;
                a.Value = parameter11;
                b.Value = parameter12;
                c.Value = parameter13;
                d.Value = parameter14;
                e.Value = parameter15;
                f.Value = parameter16;
                g.Value = parameter17;
                h.Value = parameter18;
                i.Value = parameter19;
                j.Value = parameter20;
                k.Value = parameter21;
                l.Value = parameter22;



                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.Parameters.Add(d);
                sqlCommrep.Parameters.Add(e);
                sqlCommrep.Parameters.Add(f);
                sqlCommrep.Parameters.Add(g);
                sqlCommrep.Parameters.Add(h);
                sqlCommrep.Parameters.Add(i);
                sqlCommrep.Parameters.Add(j);
                sqlCommrep.Parameters.Add(k);
                sqlCommrep.Parameters.Add(l);


                sqlCommrep.ExecuteNonQuery();

            }
        }

        public static void DBConnectaddIN2165AttributeGroup(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("AttributeGroupName", SqlDbType.VarChar);
                var q = new SqlParameter("AttributeGroupDescription", SqlDbType.VarChar);
                var r = new SqlParameter("AutoGenerateSampleID", SqlDbType.VarChar);
                var s = new SqlParameter("Specification_Id", SqlDbType.VarChar);


                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;


                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);

                sqlCommrep.ExecuteNonQuery();

            }
        }




        public static void DBConnectaddProcessDoc(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9, string parameter10, string parameter11, string parameter12, string parameter13, string parameter14, string parameter15, string parameter16, string parameter17, string parameter18, string parameter19, string parameter20, string parameter21, string parameter22, string parameter23)
        {

            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Title", SqlDbType.VarChar);
                var q = new SqlParameter("IssueAreaTB1", SqlDbType.VarChar);
                var r = new SqlParameter("IssueAreaTB2", SqlDbType.VarChar);
                var s = new SqlParameter("NumSteps", SqlDbType.VarChar);
                var t = new SqlParameter("ProcessTB1", SqlDbType.VarChar);
                var u = new SqlParameter("ProcessTBMsg1", SqlDbType.VarChar);
                var v = new SqlParameter("ProcessTB2", SqlDbType.VarChar);
                var w = new SqlParameter("ProcessTBMsg2", SqlDbType.VarChar);
                var x = new SqlParameter("ProcessTB3", SqlDbType.VarChar);
                var y = new SqlParameter("ProcessTBMsg3", SqlDbType.VarChar);
                var z = new SqlParameter("ProcessTB4", SqlDbType.VarChar);
                var a = new SqlParameter("ProcessTBMsg4", SqlDbType.VarChar);
                var b = new SqlParameter("ProcessTB5", SqlDbType.VarChar);
                var c = new SqlParameter("ProcessTBMsg5", SqlDbType.VarChar);
                var d = new SqlParameter("ProcessTB6", SqlDbType.VarChar);
                var e = new SqlParameter("ProcessTBMsg6", SqlDbType.VarChar);
                var f = new SqlParameter("ProcessTB7", SqlDbType.VarChar);
                var g = new SqlParameter("ProcessTBMsg7", SqlDbType.VarChar);
                var h = new SqlParameter("ProcessTB8", SqlDbType.VarChar);
                var i = new SqlParameter("ProcessTBMsg8", SqlDbType.VarChar);
                var j = new SqlParameter("ProcessTB9", SqlDbType.VarChar);
                var k = new SqlParameter("ProcessTBMsg9", SqlDbType.VarChar);
                var l = new SqlParameter("ProcessTB10", SqlDbType.VarChar);
                var n = new SqlParameter("ProcessTBMsg10", SqlDbType.VarChar);
                // var m = new SqlParameter("InsertDateTime", SqlDbType.VarChar);


                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;
                z.Value = parameter10;
                a.Value = parameter11;
                b.Value = parameter12;
                c.Value = parameter13;
                d.Value = parameter14;
                e.Value = parameter15;
                f.Value = parameter16;
                g.Value = parameter17;
                h.Value = parameter18;
                i.Value = parameter19;
                j.Value = parameter20;
                k.Value = parameter21;
                l.Value = parameter22;
                n.Value = parameter23;
                // m.Value = parameter24;

                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.Parameters.Add(d);
                sqlCommrep.Parameters.Add(e);
                sqlCommrep.Parameters.Add(f);
                sqlCommrep.Parameters.Add(g);
                sqlCommrep.Parameters.Add(h);
                sqlCommrep.Parameters.Add(i);
                sqlCommrep.Parameters.Add(j);
                sqlCommrep.Parameters.Add(k);
                sqlCommrep.Parameters.Add(l);
                sqlCommrep.Parameters.Add(n);
                //sqlCommrep.Parameters.Add(m);
                sqlCommrep.ExecuteNonQuery();

            }
        }



        public static void DBConnectaddINJobSchedule(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("RowID", SqlDbType.VarChar);
                var q = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var r = new SqlParameter("InspectionLot", SqlDbType.VarChar);
                var s = new SqlParameter("SpecID", SqlDbType.VarChar);
                var t = new SqlParameter("POID", SqlDbType.VarChar);
                var u = new SqlParameter("IN2164_Status", SqlDbType.VarChar);
                var v = new SqlParameter("IN2165_Status", SqlDbType.VarChar);
                var w = new SqlParameter("StartDate", SqlDbType.VarChar);
                var x = new SqlParameter("EndDate", SqlDbType.VarChar);

                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;


                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);

                sqlCommrep.ExecuteNonQuery();

            }
        }


        public static void DBConnectaddEstimator(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9, string parameter10, string parameter11, string parameter12, string parameter13, string parameter14, string parameter15, string parameter16)
        {

            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Area", SqlDbType.VarChar);
                var q = new SqlParameter("UIName", SqlDbType.VarChar);
                var r = new SqlParameter("Complexity", SqlDbType.VarChar);
                var s = new SqlParameter("BAHours", SqlDbType.VarChar);
                var t = new SqlParameter("AppsAnalysisHours", SqlDbType.VarChar);
                var u = new SqlParameter("DevelopmentHours", SqlDbType.VarChar);
                var v = new SqlParameter("TestingHours", SqlDbType.VarChar);
                var w = new SqlParameter("DeploymentHours", SqlDbType.VarChar);
                var x = new SqlParameter("TrainingHours", SqlDbType.VarChar);
                var y = new SqlParameter("TotalHours", SqlDbType.VarChar);
                var z = new SqlParameter("MassTotalHours", SqlDbType.VarChar);
                var a = new SqlParameter("Rate", SqlDbType.VarChar);
                var b = new SqlParameter("HardwareCost", SqlDbType.VarChar);
                var c = new SqlParameter("SoftwareCost", SqlDbType.VarChar);
                var d = new SqlParameter("ConsultingCost", SqlDbType.VarChar);
                var e = new SqlParameter("TotalCost", SqlDbType.VarChar);
                var f = new SqlParameter("row_id", SqlDbType.VarChar);
                p.Value = parameter;
                q.Value = parameter1;
                r.Value = parameter2;
                s.Value = parameter3;
                t.Value = parameter4;
                u.Value = parameter5;
                v.Value = parameter6;
                w.Value = parameter7;
                x.Value = parameter8;
                y.Value = parameter9;
                z.Value = parameter10;
                a.Value = parameter11;
                b.Value = parameter12;
                c.Value = parameter13;
                d.Value = parameter14;
                e.Value = parameter15;
                f.Value = parameter16;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.Parameters.Add(d);
                sqlCommrep.Parameters.Add(e);
                sqlCommrep.Parameters.Add(f);
                sqlCommrep.ExecuteNonQuery();

            }
        }


        public static void DBConnectaddChangeMgmt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6, string parameter7, string parameter8, string parameter9,
            string parameter10, string parameter11, string parameter12, string parameter13, string parameter14, string parameter15, string parameter16, string parameter17, string parameter18, string parameter19,
            string parameter20, string parameter21, string parameter22, string parameter23, string parameter24, string parameter25, string parameter26, string parameter27, string parameter28, string parameter29, string parameter30, string parameter31, string parameter32, string parameter33, string parameter34, string parameter35, string parameter36, string parameter37, string parameter38, string parameter39)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var a = new SqlParameter("ReleaseName", SqlDbType.VarChar);
                var b = new SqlParameter("FS", SqlDbType.VarChar);
                var c = new SqlParameter("BusinessLead", SqlDbType.VarChar);
                var d = new SqlParameter("BLSign", SqlDbType.VarChar);
                var e = new SqlParameter("BusinessApprover", SqlDbType.VarChar);
                var f = new SqlParameter("BApproverSign", SqlDbType.VarChar);
                var g = new SqlParameter("DEVandTS", SqlDbType.VarChar);
                var h = new SqlParameter("Developer", SqlDbType.VarChar);
                var i = new SqlParameter("DEVSign", SqlDbType.VarChar);
                var j = new SqlParameter("ST", SqlDbType.VarChar);
                var k = new SqlParameter("TechLead", SqlDbType.VarChar);
                var l = new SqlParameter("TLSign", SqlDbType.VarChar);
                var m = new SqlParameter("AppsApprover", SqlDbType.VarChar);
                var n = new SqlParameter("AppsApproverSign", SqlDbType.VarChar);
                var o = new SqlParameter("FUT", SqlDbType.VarChar);
                var p = new SqlParameter("BLSign2", SqlDbType.VarChar);
                var q = new SqlParameter("DEVSign2", SqlDbType.VarChar);
                var r = new SqlParameter("TLSign2 ", SqlDbType.VarChar);
                var s = new SqlParameter("AppsApproverSign2", SqlDbType.VarChar);
                var t = new SqlParameter("PackageLocation", SqlDbType.VarChar);
                var u = new SqlParameter("ScreenShotLocation", SqlDbType.VarChar);
                var v = new SqlParameter("LockedDateTime", SqlDbType.VarChar);
                var w = new SqlParameter("Status", SqlDbType.VarChar);
                var x = new SqlParameter("Description ", SqlDbType.VarChar);
                var y = new SqlParameter("TestCycle", SqlDbType.VarChar);
                var z = new SqlParameter("EnteredBy", SqlDbType.VarChar);
                var aa = new SqlParameter("FSLocation", SqlDbType.VarChar);
                var bb = new SqlParameter("Comment", SqlDbType.VarChar);
                var bc = new SqlParameter("row_id", SqlDbType.VarChar);
                var bd = new SqlParameter("TrainerName", SqlDbType.VarChar);
                var be = new SqlParameter("PlantContact", SqlDbType.VarChar);
                var bf = new SqlParameter("TechSpecLocation", SqlDbType.VarChar);
                var bg = new SqlParameter("TestScriptLocation", SqlDbType.VarChar);
                var bh = new SqlParameter("PRODDeployDate", SqlDbType.VarChar);
                var bi = new SqlParameter("ControlsAnalyst", SqlDbType.VarChar);
                var bj = new SqlParameter("DeployStatus", SqlDbType.VarChar);
                var bk = new SqlParameter("DeployPlants", SqlDbType.VarChar);
                var bl = new SqlParameter("Updates", SqlDbType.VarChar);
                var bm = new SqlParameter("AssignedTo", SqlDbType.VarChar);
                var bn = new SqlParameter("ProjectIDS", SqlDbType.VarChar);
                a.Value = parameter;
                b.Value = parameter1;
                c.Value = parameter2;
                d.Value = parameter3;
                e.Value = parameter4;
                f.Value = parameter5;
                g.Value = parameter6;
                h.Value = parameter7;
                i.Value = parameter8;
                j.Value = parameter9;
                k.Value = parameter10;
                l.Value = parameter11;
                m.Value = parameter12;
                n.Value = parameter13;
                o.Value = parameter14;
                p.Value = parameter15;
                q.Value = parameter16;
                r.Value = parameter17;
                s.Value = parameter18;
                t.Value = parameter19;
                u.Value = parameter20;
                v.Value = parameter21;
                w.Value = parameter22;
                x.Value = parameter23;
                y.Value = parameter24;
                z.Value = parameter25;
                aa.Value = parameter26;
                bb.Value = parameter27;
                bc.Value = parameter28;
                bd.Value = parameter29;
                be.Value = parameter30;
                bf.Value = parameter31;
                bg.Value = parameter32;
                bh.Value = parameter33;
                bi.Value = parameter34;
                bj.Value = parameter35;
                bk.Value = parameter36;
                bl.Value = parameter37;
                bm.Value = parameter38;
                bn.Value = parameter39;

                sqlCommrep.Parameters.Add(a);
                sqlCommrep.Parameters.Add(b);
                sqlCommrep.Parameters.Add(c);
                sqlCommrep.Parameters.Add(d);
                sqlCommrep.Parameters.Add(e);
                sqlCommrep.Parameters.Add(f);
                sqlCommrep.Parameters.Add(g);
                sqlCommrep.Parameters.Add(h);
                sqlCommrep.Parameters.Add(i);
                sqlCommrep.Parameters.Add(j);
                sqlCommrep.Parameters.Add(k);
                sqlCommrep.Parameters.Add(l);
                sqlCommrep.Parameters.Add(m);
                sqlCommrep.Parameters.Add(n);
                sqlCommrep.Parameters.Add(o);
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.Parameters.Add(s);
                sqlCommrep.Parameters.Add(t);
                sqlCommrep.Parameters.Add(u);
                sqlCommrep.Parameters.Add(v);
                sqlCommrep.Parameters.Add(w);
                sqlCommrep.Parameters.Add(x);
                sqlCommrep.Parameters.Add(y);
                sqlCommrep.Parameters.Add(z);
                sqlCommrep.Parameters.Add(aa);
                sqlCommrep.Parameters.Add(bb);
                sqlCommrep.Parameters.Add(bc);
                sqlCommrep.Parameters.Add(bd);
                sqlCommrep.Parameters.Add(be);
                sqlCommrep.Parameters.Add(bf);
                sqlCommrep.Parameters.Add(bg);
                sqlCommrep.Parameters.Add(bh);
                sqlCommrep.Parameters.Add(bi);
                sqlCommrep.Parameters.Add(bj);
                sqlCommrep.Parameters.Add(bk);
                sqlCommrep.Parameters.Add(bl);
                sqlCommrep.Parameters.Add(bm);
                sqlCommrep.Parameters.Add(bn);

                sqlCommrep.ExecuteNonQuery();

            }
        }

        public static DataSet DBConnectMixer(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5)
        {
            DataSet dsvat = new DataSet();
            using (SqlConnection ADMConnnect = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                ADMConnnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, ADMConnnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("plant", SqlDbType.VarChar);
                var s = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var t = new SqlParameter("Line", SqlDbType.VarChar);
                var u = new SqlParameter("ProductCode", SqlDbType.VarChar);
                var q = new SqlParameter("StartDate", SqlDbType.VarChar);
                var r = new SqlParameter("EndDate", SqlDbType.VarChar);
                p.Value = parameter;
                q.Value = parameter4;
                r.Value = parameter5;
                s.Value = parameter1;
                t.Value = parameter2;
                u.Value = parameter3;

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(q);
                sqlComm.Parameters.Add(r);
                sqlComm.Parameters.Add(s);
                sqlComm.Parameters.Add(t);
                sqlComm.Parameters.Add(u);

                sqlComm.ExecuteNonQuery();
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsvat);
                return dsvat;
            }

        }


        public static DataSet DBConnectDop(string storedprocedure)
        {
            DataSet dsdop = new DataSet();
            using (SqlConnection Q1Connnect = new SqlConnection(ConfigurationManager.ConnectionStrings["MESQ1Connnect"].ConnectionString.ToString()))
            {
                SqlCommand sqlComm = new SqlCommand(storedprocedure, Q1Connnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsdop);
                return dsdop;
            }

        }

        public static void DBConnectRep(string storedprocedure, string parameter)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["myConnectionString"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ObjectID", SqlDbType.VarChar);
                p.Value = parameter;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.ExecuteNonQuery();

            }

        }

        public static DataSet DBConRep(string storedprocedure, string parameter)
        {
            DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["myConnectionString"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ObjectID", SqlDbType.VarChar);
                p.Value = parameter;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.ExecuteNonQuery();
                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = sqlCommrep;
                da.Fill(dsr);
                return dsr;
            }

        }
        public static void DBConSaveComment(string storedprocedure, string parameter, string param1)
        {
            DataSet dss = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["myConnectionString"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("@ObjectId", SqlDbType.VarChar);
                var q = new SqlParameter("@body", SqlDbType.VarChar);
                p.Value = parameter;
                q.Value = param1;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.ExecuteNonQuery();

            }

        }
        public static void DBConSave(string storedprocedure, string parameter, string param1, string param2)
        {
            DataSet dss = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Row_ID", SqlDbType.VarChar);
                //if (@colname ==
                //  if(param1=="colname1")
                // string strtemp = '@' + param1;
                // "Select * from MSBTS_HostInstance where HostType=1 AND RunningServer = "\"" + variable + "\""

                // string strtemp = "\"" + param1 + "\"";

                var q = new SqlParameter(param1, SqlDbType.VarChar);
                //var r = new SqlParameter();
                p.Value = parameter;
                q.Value = param2;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.ExecuteNonQuery();

            }

        }
        public static void DBProjectSave(string storedprocedure, string parameter, string param1, string param2)
        {
            DataSet dss = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Row_ID", SqlDbType.VarChar);
                //if (@colname ==
                //  if(param1=="colname1")
                // string strtemp = '@' + param1;
                // "Select * from MSBTS_HostInstance where HostType=1 AND RunningServer = "\"" + variable + "\""

                // string strtemp = "\"" + param1 + "\"";

                var q = new SqlParameter(param1, SqlDbType.VarChar);
                //var r = new SqlParameter();
                p.Value = parameter;
                q.Value = param2;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.ExecuteNonQuery();

            }

        }

        public static void DBCMSave(string storedprocedure, string parameter, string param1, string param2)
        {
            DataSet dss = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;

                var p = new SqlParameter("Row_ID", SqlDbType.VarChar);
                var q = new SqlParameter(param1, SqlDbType.VarChar);
                var r = new SqlParameter(param2, SqlDbType.VarChar);


                p.Value = parameter;
                q.Value = param1;
                r.Value = param2;


                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.Parameters.Add(r);
                sqlCommrep.ExecuteNonQuery();

            }

        }

        public static void DBCMInit(string storedprocedure, string parameter, string param1, string param2)
        {
            DataSet dss = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var q = new SqlParameter(param1, SqlDbType.VarChar);
                q.Value = param2;
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.ExecuteNonQuery();
            }
        }

        public static void DBRptSave(string storedprocedure, string parameter, string param1, string param2)
        {
            DataSet dss = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["myConString"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ID", SqlDbType.VarChar);
                //if (@colname ==
                //  if(param1=="colname1")
                // string strtemp = '@' + param1;
                // "Select * from MSBTS_HostInstance where HostType=1 AND RunningServer = "\"" + variable + "\""

                // string strtemp = "\"" + param1 + "\"";

                var q = new SqlParameter(param1, SqlDbType.VarChar);
                //var r = new SqlParameter();
                p.Value = parameter;
                q.Value = param2;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.Parameters.Add(q);
                sqlCommrep.ExecuteNonQuery();

            }

        }

        public static void DBProjectDelete(string storedprocedure, string parameter)
        {
            DataSet dss = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["MESADMConnnect"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Row_ID", SqlDbType.VarChar);
                // var q = new SqlParameter(param1, SqlDbType.VarChar);
                p.Value = parameter;
                // q.Value = param2;
                sqlCommrep.Parameters.Add(p);
                //  sqlCommrep.Parameters.Add(q);
                sqlCommrep.ExecuteNonQuery();

            }

        }

        public static void DBConnectStartStopService(string storedprocedure, string parameter)
        {
            // DataSet dsr = new DataSet();
            using (SqlConnection myConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["myConnectionString"].ConnectionString.ToString()))
            {
                myConnection.Open();
                SqlCommand sqlCommrep = new SqlCommand(storedprocedure, myConnection);
                sqlCommrep.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("LocationId", SqlDbType.VarChar);
                p.Value = parameter;
                sqlCommrep.Parameters.Add(p);
                sqlCommrep.ExecuteNonQuery();

            }

        }

        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectVatMakeRpt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("LineNumber", SqlDbType.VarChar);
                var p1 = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var p2 = new SqlParameter("ProductCode", SqlDbType.VarChar);
                var p3 = new SqlParameter("StartDate", SqlDbType.VarChar);
                var p4 = new SqlParameter("EndDate", SqlDbType.VarChar);


                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;
                p3.Value = parameter3;
                p4.Value = parameter4;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.Parameters.Add(p3);
                sqlComm.Parameters.Add(p4);

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectKPIMultiDt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ReportName", SqlDbType.VarChar);
                var p1 = new SqlParameter("DateStart", SqlDbType.VarChar);
                var p2 = new SqlParameter("DateEnd", SqlDbType.VarChar);
                var p3 = new SqlParameter("RD3", SqlDbType.VarChar);
                var p4 = new SqlParameter("RD4", SqlDbType.VarChar);
                var p5 = new SqlParameter("RD5", SqlDbType.VarChar);
                var p6 = new SqlParameter("RD6", SqlDbType.VarChar);


                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;
                p3.Value = parameter3;
                p4.Value = parameter4;
                p5.Value = parameter5;
                p6.Value = parameter6;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.Parameters.Add(p3);
                sqlComm.Parameters.Add(p4);
                sqlComm.Parameters.Add(p5);
                sqlComm.Parameters.Add(p6);

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }





        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectSingleDt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5, string parameter6)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("ReportName", SqlDbType.VarChar);
                var p1 = new SqlParameter("DateStart", SqlDbType.VarChar);
                var p2 = new SqlParameter("DateEnd", SqlDbType.VarChar);
                var p3 = new SqlParameter("RD3", SqlDbType.VarChar);
                var p4 = new SqlParameter("RD4", SqlDbType.VarChar);
                var p5 = new SqlParameter("RD5", SqlDbType.VarChar);
                var p6 = new SqlParameter("RD6", SqlDbType.VarChar);


                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;
                p3.Value = parameter3;
                p4.Value = parameter4;
                p5.Value = parameter5;
                p6.Value = parameter6;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.Parameters.Add(p3);
                sqlComm.Parameters.Add(p4);
                sqlComm.Parameters.Add(p5);
                sqlComm.Parameters.Add(p6);

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }


        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectVatMakeRptComments(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
               
                var p = new SqlParameter("StartDate", SqlDbType.VarChar);
                var p1 = new SqlParameter("EndDate", SqlDbType.VarChar);                
                var p2 = new SqlParameter("ProductCode", SqlDbType.VarChar);
                var p3 = new SqlParameter("LineNumber", SqlDbType.VarChar);

                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;
                p3.Value = parameter3;         

                
                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.Parameters.Add(p3);
                

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectChseMakSuprDopRpt(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                //var p = new SqlParameter("LineNumber", SqlDbType.VarChar);
                var p = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var p1 = new SqlParameter("ProductCode", SqlDbType.VarChar);
                //var p3 = new SqlParameter("StartDate", SqlDbType.VarChar);
                //var p4 = new SqlParameter("EndDate", SqlDbType.VarChar);


                p.Value = parameter;
                p1.Value = parameter1;
                //p2.Value = parameter2;
                //p3.Value = parameter3;
                //p4.Value = parameter4;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                //sqlComm.Parameters.Add(p2);
                //sqlComm.Parameters.Add(p3);
                //sqlComm.Parameters.Add(p4);

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectDOPSeparatorRpt(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                //var p = new SqlParameter("LineNumber", SqlDbType.VarChar);
                var p = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var p1 = new SqlParameter("ProductCode", SqlDbType.VarChar);
                //var p3 = new SqlParameter("StartDate", SqlDbType.VarChar);
                //var p4 = new SqlParameter("EndDate", SqlDbType.VarChar);


                p.Value = parameter;
                p1.Value = parameter1;
                //p2.Value = parameter2;
                //p3.Value = parameter3;
                //p4.Value = parameter4;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                //sqlComm.Parameters.Add(p2);
                //sqlComm.Parameters.Add(p3);
                //sqlComm.Parameters.Add(p4);

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectRecPlnRpt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("Line", SqlDbType.VarChar);
                var p1 = new SqlParameter("StartDate", SqlDbType.VarChar);
                var p2 = new SqlParameter("EndDate", SqlDbType.VarChar);
                var p3 = new SqlParameter("POid", SqlDbType.VarChar);


                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;
                p3.Value = parameter3;
                //p4.Value = parameter4;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.Parameters.Add(p3);               

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectDOPStrChseRpt(string storedprocedure, string parameter, string parameter1)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                //var p = new SqlParameter("LineNumber", SqlDbType.VarChar);
                var p = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var p1 = new SqlParameter("ProductCode", SqlDbType.VarChar);
                //var p3 = new SqlParameter("StartDate", SqlDbType.VarChar);
                //var p4 = new SqlParameter("EndDate", SqlDbType.VarChar);


                p.Value = parameter;
                p1.Value = parameter1;
                //p2.Value = parameter2;
                //p3.Value = parameter3;
                //p4.Value = parameter4;



                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                //sqlComm.Parameters.Add(p2);
                //sqlComm.Parameters.Add(p3);
                //sqlComm.Parameters.Add(p4);

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectChseAnalysisRpt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3, string parameter4, string parameter5)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                var p = new SqlParameter("LineNumber", SqlDbType.VarChar);
                var p1 = new SqlParameter("StartDate", SqlDbType.VarChar);
                var p2 = new SqlParameter("EndDate", SqlDbType.VarChar);
                var p3 = new SqlParameter("Production_Order", SqlDbType.VarChar);
                var p4 = new SqlParameter("Material", SqlDbType.VarChar);
                var p5 = new SqlParameter("Inspection_Type", SqlDbType.VarChar);



                p.Value = parameter;
                p1.Value = parameter1;
                p2.Value = parameter2;
                p3.Value = parameter3;
                p4.Value = parameter4;
                p5.Value = parameter5;


                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
                sqlComm.Parameters.Add(p2);
                sqlComm.Parameters.Add(p3);
                sqlComm.Parameters.Add(p4);
                sqlComm.Parameters.Add(p5);

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectPowderBlndRpt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;
                
                var p = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var p1 = new SqlParameter("Line", SqlDbType.VarChar);               


                p.Value = parameter3;
                p1.Value = parameter;
                

                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);
               

                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }

        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectPowderBlndTotalRpt(string storedprocedure, string parameter, string parameter1, string parameter2, string parameter3)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;

                var p = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
                var p1 = new SqlParameter("Line", SqlDbType.VarChar);


                p.Value = parameter3;
                p1.Value = parameter;


                sqlComm.Parameters.Add(p);
                sqlComm.Parameters.Add(p1);


                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }



        //DBConnection-FOR SELECT QUERY- PARAMETERS TO PASS TO the SP
        public static DataSet DBConnectRetentateDOPRpt(string storedprocedure, string parameter)
        {
            DataSet dsrpt = new DataSet();
            using (SqlConnection LRWConnect = new SqlConnection(ConfigurationManager.ConnectionStrings["LRWConnnect"].ConnectionString.ToString()))
            {
                LRWConnect.Open();
                SqlCommand sqlComm = new SqlCommand(storedprocedure, LRWConnect);
                sqlComm.CommandType = CommandType.StoredProcedure;

                var p = new SqlParameter("ProductionOrder", SqlDbType.VarChar);
        


                p.Value = parameter;            


                sqlComm.Parameters.Add(p);         


                sqlComm.ExecuteNonQuery();

                SqlDataAdapter daa = new SqlDataAdapter();
                daa.SelectCommand = sqlComm;
                daa.Fill(dsrpt);
                return dsrpt;
            }

        }
    }

}