using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class Company : ISoftDelete
    {
        public string Cocode { get; set; }
        public string Domain { get; set; }
        public string Coname { get; set; }
        public string Cosname { get; set; }
        public string Coaddr1 { get; set; }
        public string Coaddr2 { get; set; }
        public string Coaddr3 { get; set; }
        public string Cocity { get; set; }
        public string Costate { get; set; }
        public string Copincode { get; set; }
        public string Cotelno1 { get; set; }
        public string Cotelno2 { get; set; }
        public string Coemail { get; set; }
        public string Coregno1 { get; set; }
        public string Coregno2 { get; set; }
        public string Coregno3 { get; set; }
        public string Coparams { get; set; }
        public string Codbversion { get; set; }
        public string Coystart { get; set; }
        public string Codbquerystring { get; set; }
        public bool IsDeleted { get; set; }
    }
}