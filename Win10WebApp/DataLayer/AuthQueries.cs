using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Win10WebApp.Models;

namespace Win10WebApp.DataLayer
{
    public class AuthQueries
    {
        DataInterfaceSQL dataInterfaceSQL;
        public AuthQueries ()
        {
            dataInterfaceSQL = new DataInterfaceSQL();
        }

        public List<Company> GetCompanyRecords (string Subdomainname)
        {
            List<Company> lstCompany = new List<Company>();
            SqlParameter[] sqlParameter = new SqlParameter[1];
            sqlParameter[0] = new SqlParameter("@domain", Subdomainname);

            DataSet dsCompRecords = dataInterfaceSQL.GetDataSet("GetCompanyRecords", sqlParameter, false);

            if (dsCompRecords.Tables.Count > 0 && dsCompRecords.Tables[0].Rows.Count > 0)
            {
                DataTable dtCompRecords = dsCompRecords.Tables[0];
                lstCompany = dtCompRecords.AsEnumerable().Select(row => new Company {
                    Cocode = row.Field<string>("cocode"),
                    Coname = row.Field<string>("coname"),
                    Coystart = row.Field<string>("coystart"),
                    Cocity = row.Field<string>("cocity"),
                    Costate = row.Field<string>("costate"),
                    Copincode = row.Field<string>("copincode"),

                }).ToList();
            }
            return lstCompany;
        }

        public Dictionary<string, string> ValidateLogin(string cocode, string username, string password) {
            Dictionary<string, string> data = new Dictionary<string, string>();
            SqlParameter[] sqlParameter = new SqlParameter[3];
            sqlParameter[0] = new SqlParameter("@companycode", cocode);
            sqlParameter[1] = new SqlParameter("@username", username);
            sqlParameter[2] = new SqlParameter("@password", password);
            DataSet dsCompRecords = dataInterfaceSQL.GetDataSet("sp_checklogin", sqlParameter, false);
            if (dsCompRecords.Tables.Count > 0 && dsCompRecords.Tables[0].Rows.Count > 0)
            {
                DataTable dtCompRecords = dsCompRecords.Tables[0];
                data["usercode"] = dtCompRecords.Rows[0]["usercode"].ToString();
                data["rcode"] = dtCompRecords.Rows[0]["rcode"].ToString();
                data["username"] = dtCompRecords.Rows[0]["username"].ToString();
                data["cocode"] = dtCompRecords.Rows[0]["cocode"].ToString();
                
            }
            return data;
        }
    }
}