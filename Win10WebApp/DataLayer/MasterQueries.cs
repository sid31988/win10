using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Win10WebApp.Models;

namespace Win10WebApp.DataLayer
{
    public class MasterQueries
    {
        DataInterfaceSQL dataInterfaceSQL;
        public MasterQueries()
        {
            dataInterfaceSQL = new DataInterfaceSQL();
        }

        public List<Accounting> GetAllAccounting()
        {
            List<Accounting> accountings = new List<Accounting>();
            DataSet accountingData = dataInterfaceSQL.GetDataSet("select * from Accountings", null, false, false);
            DataSet additionalData = dataInterfaceSQL.GetDataSet("select * from AdditionalData where [Table] = 'Accountings'", null, false, false);

            if (accountingData.Tables.Count > 0)
            {
                accountings = accountingData.Tables[0].AsEnumerable()
                    .Select(row => new Accounting
                    {
                        Id = Convert.ToInt32(row["id"]),
                        SubId = Convert.ToInt32(row["SubId"]),
                        Desc = row["Desc"] == DBNull.Value ? "" : row["Desc"].ToString(),
                        Type = row["Type"] == DBNull.Value ? "" : row["Type"].ToString(),
                        HSNSAC = row["HSNSAC"] == DBNull.Value ? "" : row["HSNSAC"].ToString(),
                        GrpUnder = row["GrpUnder"] == DBNull.Value ? "" : row["GrpUnder"].ToString(),
                        Block = row["Block"] == DBNull.Value ? "" : row["Block"].ToString(),
                        Balance = row["Balance"] == DBNull.Value ? "" : row["Balance"].ToString(),
                        BalancePost = row["BalancePost"] == DBNull.Value ? "" : row["BalancePost"].ToString(),
                        NOF = row["NOF"] == DBNull.Value ? "" : row["NOF"].ToString(),
                        // CreatedDate = Convert.ToDateTime(row["CreatedDate"]),
                        // UpdatedDate = Convert.ToDateTime(row["UpdatedDate"]),
                        // IsDeleted = Convert.ToBoolean(row["IsDeleted"]),
                        AdditionalData = additionalData.Tables.Count > 0 && additionalData.Tables[0].Rows.Count > 0 ?
                                        additionalData.Tables[0].AsEnumerable()
                                        .Select(adrow => new AdditionalData
                                        {
                                            Id = Convert.ToInt32(adrow["id"]),
                                            Table = adrow["Table"].ToString(),
                                            Column = adrow["Column"].ToString(),
                                            Value = adrow["Value"].ToString(),
                                            RefrenceId = adrow["Refrenceid"].ToString()
                                        }).Where(w => w.RefrenceId == (row["id"].ToString() + row["SubId"].ToString())).ToList()
                                        : null
                    }).ToList();
            }
            return accountings;
        }

        public List<PartyMaster> GetAllPartyMaster(char PartyType)
        {
            List<PartyMaster> partymasters = new List<PartyMaster>();
            DataSet partymasterData = dataInterfaceSQL.GetDataSet("select * from PartyMasters where [Type] = '" + PartyType + "'", null, false, false);
            DataSet additionalData = dataInterfaceSQL.GetDataSet("select * from AdditionalData where [Table] = 'PartyMasters'", null, false, false);

            try
            {
                if (partymasterData.Tables.Count > 0)
                {
                    partymasters = partymasterData.Tables[0].AsEnumerable()
                        .Select(row => new PartyMaster
                        {
                            Id = Convert.ToInt32(row["id"]),
                            Name = row["Name"] == DBNull.Value ? "" : Convert.ToString(row["Name"]),
                            Address1 = row["Address1"] == DBNull.Value ? "" : Convert.ToString(row["Address1"]),
                            Address2 = row["Address2"] == DBNull.Value ? "" : Convert.ToString(row["Address2"]),
                            Address3 = row["Address3"] == DBNull.Value ? "" : Convert.ToString(row["Address3"]),
                            City = row["City"] == DBNull.Value ? "" : Convert.ToString(row["City"]),
                            Pincode = row["Pincode"] == DBNull.Value ? "" : Convert.ToString(row["Pincode"]),
                            State = row["State"] == DBNull.Value ? "" : Convert.ToString(row["State"]),
                            Country = row["Country"] == DBNull.Value ? "" : Convert.ToString(row["Country"]),
                            Peraddress1 = row["Peraddress1"] == DBNull.Value ? "" : Convert.ToString(row["Peraddress1"]),
                            Peraddress2 = row["Peraddress2"] == DBNull.Value ? "" : Convert.ToString(row["Peraddress2"]),
                            Peraddress3 = row["Peraddress3"] == DBNull.Value ? "" : Convert.ToString(row["Peraddress3"]),
                            Percity = row["Percity"] == DBNull.Value ? "" : Convert.ToString(row["Percity"]),
                            Perpincode = row["Perpincode"] == DBNull.Value ? "" : Convert.ToString(row["Perpincode"]),
                            Perstate = row["Perstate"] == DBNull.Value ? "" : Convert.ToString(row["Perstate"]),
                            Percountry = row["Percountry"] == DBNull.Value ? "" : Convert.ToString(row["Percountry"]),
                            Nationality = row["Nationality"] == DBNull.Value ? "" : Convert.ToString(row["Nationality"]),
                            Contactperson1 = row["Contactperson1"] == DBNull.Value ? "" : Convert.ToString(row["Contactperson1"]),
                            Tel1 = row["Tel1"] == DBNull.Value ? "" : Convert.ToString(row["Tel1"]),
                            Email1 = row["Email1"] == DBNull.Value ? "" : Convert.ToString(row["Email1"]),
                            Contactperson2 = row["Contactperson2"] == DBNull.Value ? "" : Convert.ToString(row["Contactperson2"]),
                            Tel2 = row["Tel2"] == DBNull.Value ? "" : Convert.ToString(row["Tel2"]),
                            Email2 = row["Email2"] == DBNull.Value ? "" : Convert.ToString(row["Email2"]),
                            Primaryid = row["Primaryid"] == DBNull.Value ? "" : Convert.ToString(row["Primaryid"]),
                            Panno = row["Panno"] == DBNull.Value ? "" : Convert.ToString(row["Panno"]),
                            Aadharno = row["Aadharno"] == DBNull.Value ? "" : Convert.ToString(row["Aadharno"]),
                            Gst = row["Gst"] == DBNull.Value ? "" : Convert.ToString(row["Gst"]),
                            Type = Convert.ToChar(row["Type"]),
                            Mobile = row["Mobile"] == DBNull.Value ? "" : Convert.ToString(row["Mobile"]),
                            OpeningBalance = row["OpeningBalance"] == DBNull.Value ? "" : Convert.ToString(row["OpeningBalance"]),
                            BalancePost = row["BalancePost"] == DBNull.Value ? "" : Convert.ToString(row["BalancePost"]),
                            AddressInBill = row["AddressInBill"] == DBNull.Value ? "" : Convert.ToString(row["AddressInBill"]),
                            Lock = row["Lock"] == DBNull.Value ? "" : Convert.ToString(row["Lock"]),
                            Category = row["Category"] == DBNull.Value ? "" : Convert.ToString(row["Category"]),
                            Broker = row["Broker"] == DBNull.Value ? "" : Convert.ToString(row["Broker"]),
                            Location = row["Location"] == DBNull.Value ? "" : Convert.ToString(row["Location"]),
                            CollectGST = row["CollectGST"] == DBNull.Value ? "" : Convert.ToString(row["CollectGST"]),
                            RBILICNo = row["RBILICNo"] == DBNull.Value ? "" : Convert.ToString(row["RBILICNo"]),
                            RBIExp = row["RBIExp"] == DBNull.Value ? new DateTime() : Convert.ToDateTime(row["RBIExp"]),
                            ControlAC = row["ControlAC"] == DBNull.Value ? "" : Convert.ToString(row["ControlAC"]),
                            AdditionalData = additionalData.Tables.Count > 0 && additionalData.Tables[0].Rows.Count > 0 ?
                                            additionalData.Tables[0].AsEnumerable()
                                            .Select(adrow => new AdditionalData
                                            {
                                                Id = Convert.ToInt32(adrow["id"]),
                                                Table = adrow["Table"].ToString(),
                                                Column = adrow["Column"].ToString(),
                                                Value = adrow["Value"].ToString(),
                                                RefrenceId = adrow["Refrenceid"].ToString()
                                            }).Where(w => w.RefrenceId == (row["id"].ToString())).ToList()
                                            : null
                        }).ToList();
                }
            }
            catch (Exception ex) { return partymasters; }
            return partymasters;
        }


        public int UpdateAccounting(Accounting accounting)
        {
            SqlParameter[] parameter = new SqlParameter[11];
            parameter[0] = new SqlParameter("@Desc", accounting.Desc);
            parameter[1] = new SqlParameter("@Type", accounting.Type);
            parameter[2] = new SqlParameter("@HSNSAC", accounting.HSNSAC);
            parameter[3] = new SqlParameter("@GrpUnder", accounting.GrpUnder);
            parameter[4] = new SqlParameter("@Block", accounting.Block);
            parameter[5] = new SqlParameter("@Balance", accounting.Balance);
            parameter[6] = new SqlParameter("@BalancePost", accounting.BalancePost);
            parameter[7] = new SqlParameter("@NOF", accounting.NOF);
            parameter[8] = new SqlParameter("@IsDeleted", accounting.IsDeleted);
            parameter[9] = new SqlParameter("@Id", accounting.Id);
            parameter[10] = new SqlParameter("@SubId", accounting.SubId);
            int i = dataInterfaceSQL.ExecuteNonQueryDB("spUpdateAccounting", parameter);
            return i;
        }


        public Accounting SaveAccounting(Accounting accounting)
        {
            SqlParameter[] parameter;
            if (accounting.Id != 0)
            {
                parameter = new SqlParameter[9];
            }
            else
            {
                parameter = new SqlParameter[8];
            }
            parameter[0] = new SqlParameter("@Desc", accounting.Desc);
            parameter[1] = new SqlParameter("@Type", accounting.Type);
            parameter[2] = new SqlParameter("@HSNSAC", accounting.HSNSAC);
            parameter[3] = new SqlParameter("@GrpUnder", accounting.GrpUnder);
            parameter[4] = new SqlParameter("@Block", accounting.Block);
            parameter[5] = new SqlParameter("@Balance", accounting.Balance);
            parameter[6] = new SqlParameter("@BalancePost", accounting.BalancePost);
            parameter[7] = new SqlParameter("@NOF", accounting.NOF);
            if (accounting.Id != 0)
            {
                parameter[8] = new SqlParameter("@Id", accounting.Id);
            }

            DataSet dataSet = dataInterfaceSQL.GetDataSet("spInsertAccounting", parameter, false, true);
            if (dataSet.Tables.Count > 0 && dataSet.Tables[0].Rows.Count > 0)
            {
                accounting.Id = Convert.ToInt32(dataSet.Tables[0].Rows[0]["Id"]);
                accounting.SubId = Convert.ToInt32(dataSet.Tables[0].Rows[0]["SubId"]);
            }
            return accounting;

        }

        public int SaveAdditionalData(List<AdditionalData> data, string referenceId)
        {
            DataTable dataTable = GetAdditionalTable(data, referenceId);
            SqlParameter[] parameter = new SqlParameter[1];
            parameter[0] = new SqlParameter("@AdditionalData", dataTable);

            int i = dataInterfaceSQL.ExecuteNonQueryDB("spMergeAdditionalData", parameter);
            return i;

        }


        static DataTable GetAdditionalTable(List<AdditionalData> data, string referenceId)
        {
            // Here we create a DataTable with columns.
            DataTable table = new DataTable();
            table.Columns.Add("Id", typeof(int));
            table.Columns.Add("Table", typeof(string));
            table.Columns.Add("Column", typeof(string));
            table.Columns.Add("Value", typeof(string));
            table.Columns.Add("Referenceid", typeof(string));
            table.Columns.Add("CreatedDate", typeof(string));
            table.Columns.Add("UpdatedDate", typeof(string));
            table.Columns.Add("IsDeleted", typeof(bool));


            // Here we add DataRows.
            foreach (AdditionalData dataObj in data)
            {
                dynamic id = DBNull.Value;
                if (dataObj.Id != null && dataObj.Id != 0)
                {
                    id = dataObj.Id;
                }
                table.Rows.Add(id,
                    dataObj.Table,
                    dataObj.Column,
                    dataObj.Value,
                    referenceId,
                    DBNull.Value,
                    DBNull.Value,
                    dataObj.IsDeleted);
            }

            return table;
        }

        /*Party Master : start*/
        public PartyMaster SavePartyMaster(PartyMaster partymaster)
        {
            SqlParameter[] parameter;

            parameter = new SqlParameter[40];
            parameter[0] = new SqlParameter("@Type", partymaster.Type);
            parameter[1] = new SqlParameter("@Name", partymaster.Name);
            parameter[2] = new SqlParameter("@Address1", partymaster.Address1);
            parameter[3] = new SqlParameter("@Address2", partymaster.Address2);
            parameter[4] = new SqlParameter("@Address3", partymaster.Address3);
            parameter[5] = new SqlParameter("@City", partymaster.City);
            parameter[6] = new SqlParameter("@Pincode", partymaster.Pincode);
            parameter[7] = new SqlParameter("@State", partymaster.State);
            parameter[8] = new SqlParameter("@Country", partymaster.Country);
            parameter[9] = new SqlParameter("@Peraddress1", partymaster.Peraddress1);
            parameter[10] = new SqlParameter("@Peraddress2", partymaster.Peraddress2);
            parameter[11] = new SqlParameter("@Peraddress3 ", partymaster.Peraddress3);
            parameter[12] = new SqlParameter("@Percity", partymaster.Percity);
            parameter[13] = new SqlParameter("@Perpincode", partymaster.Perpincode);
            parameter[14] = new SqlParameter("@Perstate", partymaster.Perstate);
            parameter[15] = new SqlParameter("@Percountry", partymaster.Percountry);
            parameter[16] = new SqlParameter("@Nationality", partymaster.Nationality);
            parameter[17] = new SqlParameter("@Residency", partymaster.Residency);
            parameter[18] = new SqlParameter("@Contactperson1", partymaster.Contactperson1);
            parameter[19] = new SqlParameter("@Tel1", partymaster.Tel1);
            parameter[20] = new SqlParameter("@Email1", partymaster.Email1);
            parameter[21] = new SqlParameter("@Contactperson2", partymaster.Contactperson2);
            parameter[22] = new SqlParameter("@Tel2", partymaster.Tel2);
            parameter[23] = new SqlParameter("@Email2", partymaster.Email2);
            parameter[24] = new SqlParameter("@Primaryid", partymaster.Primaryid);
            parameter[25] = new SqlParameter("@Panno", partymaster.Panno);
            parameter[26] = new SqlParameter("@Aadharno", partymaster.Aadharno);
            parameter[27] = new SqlParameter("@Gst", partymaster.Gst);
            parameter[28] = new SqlParameter("@Mobile", partymaster.Mobile);
            parameter[29] = new SqlParameter("@OpeningBalance", partymaster.OpeningBalance);
            parameter[30] = new SqlParameter("@BalancePost", partymaster.BalancePost);
            parameter[31] = new SqlParameter("@AddressInBill", partymaster.AddressInBill);
            parameter[32] = new SqlParameter("@Lock", partymaster.Lock);
            parameter[33] = new SqlParameter("@Category", partymaster.Category);
            parameter[34] = new SqlParameter("@Broker", partymaster.Broker);
            parameter[35] = new SqlParameter("@Location", partymaster.Location);
            parameter[36] = new SqlParameter("@CollectGST", partymaster.CollectGST);
            parameter[37] = new SqlParameter("@RBILICNo", partymaster.RBILICNo);
            parameter[38] = new SqlParameter("@RBIExp", partymaster.RBIExp);
            parameter[39] = new SqlParameter("@ControlAC", partymaster.ControlAC);


            DataSet dataSet = dataInterfaceSQL.GetDataSet("spInsertpartymaster", parameter, false, true);
            if (dataSet.Tables.Count > 0 && dataSet.Tables[0].Rows.Count > 0)
            {
                partymaster.Id = Convert.ToInt32(dataSet.Tables[0].Rows[0]["Id"]);
            }
            return partymaster;

        }

        public int UpdatePartyMaster(PartyMaster partymaster)
        {
            SqlParameter[] parameter = new SqlParameter[42];
            parameter[0] = new SqlParameter("@Type", partymaster.Type);
            parameter[1] = new SqlParameter("@Name", partymaster.Name);
            parameter[2] = new SqlParameter("@Address1", partymaster.Address1);
            parameter[3] = new SqlParameter("@Address2", partymaster.Address2);
            parameter[4] = new SqlParameter("@Address3", partymaster.Address3);
            parameter[5] = new SqlParameter("@City", partymaster.City);
            parameter[6] = new SqlParameter("@Pincode", partymaster.Pincode);
            parameter[7] = new SqlParameter("@State", partymaster.State);
            parameter[8] = new SqlParameter("@Country", partymaster.Country);
            parameter[9] = new SqlParameter("@Peraddress1", partymaster.Peraddress1);
            parameter[10] = new SqlParameter("@Peraddress2", partymaster.Peraddress2);
            parameter[11] = new SqlParameter("@Peraddress3 ", partymaster.Peraddress3);
            parameter[12] = new SqlParameter("@Percity", partymaster.Percity);
            parameter[13] = new SqlParameter("@Perpincode", partymaster.Perpincode);
            parameter[14] = new SqlParameter("@Perstate", partymaster.Perstate);
            parameter[15] = new SqlParameter("@Percountry", partymaster.Percountry);
            parameter[16] = new SqlParameter("@Nationality", partymaster.Nationality);
            parameter[17] = new SqlParameter("@Residency", partymaster.Residency);
            parameter[18] = new SqlParameter("@Contactperson1", partymaster.Contactperson1);
            parameter[19] = new SqlParameter("@Tel1", partymaster.Tel1);
            parameter[20] = new SqlParameter("@Email1", partymaster.Email1);
            parameter[21] = new SqlParameter("@Contactperson2", partymaster.Contactperson2);
            parameter[22] = new SqlParameter("@Tel2", partymaster.Tel2);
            parameter[23] = new SqlParameter("@Email2", partymaster.Email2);
            parameter[24] = new SqlParameter("@Primaryid", partymaster.Primaryid);
            parameter[25] = new SqlParameter("@Panno", partymaster.Panno);
            parameter[26] = new SqlParameter("@Aadharno", partymaster.Aadharno);
            parameter[27] = new SqlParameter("@Gst", partymaster.Gst);
            parameter[28] = new SqlParameter("@Mobile", partymaster.Mobile);
            parameter[29] = new SqlParameter("@OpeningBalance", partymaster.OpeningBalance);
            parameter[30] = new SqlParameter("@BalancePost", partymaster.BalancePost);
            parameter[31] = new SqlParameter("@AddressInBill", partymaster.AddressInBill);
            parameter[32] = new SqlParameter("@Lock", partymaster.Lock);
            parameter[33] = new SqlParameter("@Category", partymaster.Category);
            parameter[34] = new SqlParameter("@Broker", partymaster.Broker);
            parameter[35] = new SqlParameter("@Location", partymaster.Location);
            parameter[36] = new SqlParameter("@CollectGST", partymaster.CollectGST);
            parameter[37] = new SqlParameter("@RBILICNo", partymaster.RBILICNo);
            parameter[38] = new SqlParameter("@RBIExp", partymaster.RBIExp);
            parameter[39] = new SqlParameter("@ControlAC", partymaster.ControlAC);
            parameter[40] = new SqlParameter("@Id", partymaster.Id);
            parameter[41] = new SqlParameter("@IsDeleted", partymaster.IsDeleted);

            int i = dataInterfaceSQL.ExecuteNonQueryDB("spUpdatePartyMaster", parameter);
            return i;
        }
        /*Party Master : end*/

        /*TC Master : start*/

        public List<TCMaster> GetAllTCMaster(string type)
        {
            List<TCMaster> tcMasters = new List<TCMaster>();
            DataSet tcMasterData = dataInterfaceSQL.GetDataSet("Select * from TCMasters where [Type] = '" + type + "' And [IsDeleted] = 0", null, false, false);
            DataSet additionalData = dataInterfaceSQL.GetDataSet("Select * from AdditionalData where [Table] = 'TCMasters'", null, false, false);

            try
            {
                if (tcMasterData.Tables.Count > 0)
                {
                    tcMasters = tcMasterData.Tables[0].AsEnumerable()
                        .Select(row => new TCMaster
                        {
                            Id = Convert.ToInt32(row["id"]),
                            Date = row["Date"] == DBNull.Value ? default(DateTime) : Convert.ToDateTime(row["Date"]),
                            Issuer = row["Issuer"] == DBNull.Value ? "" : Convert.ToString(row["Issuer"]),
                            Curr = row["Curr"] == DBNull.Value ? "" : Convert.ToString(row["Curr"]),
                            Prefix = row["Prefix"] == DBNull.Value ? "" : Convert.ToString(row["Prefix"]),
                            StartNo = row["StartNo"] == DBNull.Value ? default(int) : Convert.ToInt32(row["StartNo"]),
                            Nos = row["Nos"] == DBNull.Value ? default(int) : Convert.ToInt32(row["Nos"]),
                            EndNo = row["EndNo"] == DBNull.Value ? default(int) : Convert.ToInt32(row["EndNo"]),
                            Deno = row["Deno"] == DBNull.Value ? default(int) : Convert.ToInt32(row["Deno"]),
                            Value = row["Value"] == DBNull.Value ? default(int) : Convert.ToInt32(row["Value"]),
                            RefrNo = row["RefrNo"] == DBNull.Value ? default(int) : Convert.ToInt32(row["RefrNo"]),
                            CardNo = row["CardNo"] == DBNull.Value ? default(int) : Convert.ToInt32(row["CardNo"]),
                            ProxyNo = row["ProxyNo"] == DBNull.Value ? default(int) : Convert.ToInt32(row["ProxyNo"]),
                            ExpDate = row["ExpDate"] == DBNull.Value ? default(DateTime) : Convert.ToDateTime(row["ExpDate"]),
                            Type = row["Type"] == DBNull.Value ? "" : Convert.ToString(row["Type"]),
                            AdditionalData = additionalData.Tables.Count > 0 && additionalData.Tables[0].Rows.Count > 0 ?
                                            additionalData.Tables[0].AsEnumerable()
                                            .Select(adrow => new AdditionalData
                                            {
                                                Id = Convert.ToInt32(adrow["id"]),
                                                Table = adrow["Table"].ToString(),
                                                Column = adrow["Column"].ToString(),
                                                Value = adrow["Value"].ToString(),
                                                RefrenceId = adrow["Refrenceid"].ToString()
                                            }).Where(w => w.RefrenceId == (row["id"].ToString())).ToList()
                                            : null
                        }).ToList();
                }
            }
            catch (Exception ex) { throw ex; }
            return tcMasters;
        }


        /*TC Master : end*/
    }
}