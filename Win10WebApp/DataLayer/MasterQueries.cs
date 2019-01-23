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

        public List<Accounting> GetAllAccounting() {
            List<Accounting> accountings = new List<Accounting>();
            DataSet accountingData = dataInterfaceSQL.GetDataSet("select * from Accountings", null, false, false);
            DataSet additionalData = dataInterfaceSQL.GetDataSet("select * from AdditionalData where [Table] = 'Accountings'", null, false, false );

            if (accountingData.Tables.Count > 0) {
                accountings = accountingData.Tables[0].AsEnumerable()
                    .Select(row => new Accounting {
                        Id = Convert.ToInt32(row["id"]),
                        SubId = Convert.ToInt32(row["SubId"]),
                        Desc = row["Desc"] == DBNull.Value ? "" : row["Desc"].ToString(),
                        Type = row["Type"] == DBNull.Value ? "": row["Type"].ToString(),
                        HSNSAC = row["HSNSAC"] == DBNull.Value ? "" : row["HSNSAC"].ToString(),
                        GrpUnder = row["GrpUnder"] == DBNull.Value ? "" : row["GrpUnder"].ToString(),
                        Block = row["Block"] == DBNull.Value ? "" :  row["Block"].ToString(),
                        Balance = row["Balance"] == DBNull.Value ? "" : row["Balance"].ToString(),
                        BalancePost = row["BalancePost"] == DBNull.Value ? "" : row["BalancePost"].ToString(),
                        NOF = row["NOF"] == DBNull.Value ? "" : row["NOF"].ToString(),
                       // CreatedDate = Convert.ToDateTime(row["CreatedDate"]),
                       // UpdatedDate = Convert.ToDateTime(row["UpdatedDate"]),
                       // IsDeleted = Convert.ToBoolean(row["IsDeleted"]),
                        AdditionalData = additionalData.Tables.Count > 0 && additionalData.Tables[0].Rows.Count > 0 ?
                                        additionalData.Tables[0].AsEnumerable()
                                        .Select(adrow => new AdditionalData {
                                            Id= Convert.ToInt32(adrow["id"]),
                                            Table = adrow["Table"].ToString(),
                                            Column = adrow["Column"].ToString(),
                                            Value = adrow["Value"].ToString(),
                                            RefrenceId = adrow["Refrenceid"].ToString()
                                        }).Where(w => w.RefrenceId ==  (row["id"].ToString() + row["SubId"].ToString())).ToList() 
                                        : null
                    }).ToList();
            }
            return accountings;
        }


        public Accounting SaveAccounting(Accounting accounting) {
            SqlParameter[] parameter;
            if (accounting.Id != 0)
            {
                parameter = new SqlParameter[9];
            }
            else {
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
            if (accounting.Id != 0) {
                parameter[8] = new SqlParameter("@Id", accounting.Id);
            }

            DataSet dataSet = dataInterfaceSQL.GetDataSet("spInsertAccounting", parameter, false, true);
            if (dataSet.Tables.Count > 0 && dataSet.Tables[0].Rows.Count > 0) {
                accounting.Id = Convert.ToInt32(dataSet.Tables[0].Rows[0]["Id"]);
                accounting.SubId = Convert.ToInt32(dataSet.Tables[0].Rows[0]["SubId"]);
            }
            return accounting;

        }

        public int SaveAdditionalData(List<AdditionalData> data, string referenceId) {
            DataTable dataTable = GetAdditionalTable(data, referenceId);
            SqlParameter[] parameter = new SqlParameter[1];
            parameter[0] = new SqlParameter("@AdditionalData",dataTable);

            int i = dataInterfaceSQL.ExecuteNonQueryDB("spInsertAdditionalData", parameter);
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
            table.Columns.Add("IsDeleted", typeof(string));


            // Here we add DataRows.
            foreach (AdditionalData dataObj in data) {
                table.Rows.Add(DBNull.Value, dataObj.Table, dataObj.Column, dataObj.Value, referenceId, DBNull.Value, DBNull.Value, DBNull.Value);
            }
           
            return table;
        }

    }
}