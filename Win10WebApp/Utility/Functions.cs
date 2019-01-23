using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Win10WebApp.Utility
{
    public class Functions
    {
        public static object OutPutResponse(bool status, string message = "", object data=null) {
            Dictionary<string, object> response = new Dictionary<string, object>();
            response["status"] = status;
            response["message"] = message;
            response["data"] = data;
            return response;
        } 
    }
}