using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class CurrencyMaster : ISoftDelete
    {
        public int Id { get; set; }
        public string CurrencyCode { get; set; }
        public string CurrencyName { get; set; }
        public string AFType { get; set; }
        public string RBI { get; set; }
        public int? Rate { get; set; }
        public int? Position { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

    }
}