using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class User
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string CompanyCode { get; set; }
    }
}