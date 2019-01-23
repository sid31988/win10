using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Win10WebApp.Utility
{
    public class Constants
    {
        public static string COUNTRY = "Country";
        public static string COSTCENTER = "Cost Center";
        public static string CATEGORY = "Category";
        public static string REFERENCE = "Reference";


        public static Dictionary<string, string> MODULES = new Dictionary<string, string> {
            ["ACCOUNTING"]= "acc",
            ["OTHERMASTER"] = "othrmast",
            ["CURRENCYMASTER"] ="currmast",
            ["COUNTRYMASTER"] = "countrymaster",
            ["INDIVIDUAL"] = "ind",
            ["CORPORATE"] = "corporate",
            ["FFMC"] = "ffmc",
            ["BRANCHES"] = "branch",
            ["FRANCHISEES"] = "franchisees",
            ["BROKERS"] = "brokers",
            ["SUPPLIER"] = "supplier",
            ["RECEIVETRUST"] = "rcvtrust"
        };


        public static List<string> ACCTYPE = new List<string>
        {
           "Normal",
           "Title",
           "Cash",
           "Bank",
           "Debtors",
           "Creditors",
           "Broker Control",
           "Branch A/c"
        };



    }

   
}