using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class TCMaster : ICustomColumns
    {
        public int Id { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? Date { get; set; }
        public string Issuer { get; set; }
        public string Curr { get; set; }
        public string Prefix { get; set; }
        public int StartNo { get; set; }
        public int? Nos { get; set; }
        public int? EndNo { get; set; }
        public int? Deno { get; set; }
        public int? Value { get; set; }
        public int? RefrNo { get; set; }
        public int? CardNo { get; set; }
        public int? ProxyNo { get; set; }
        public DateTime? ExpDate { get; set; }
        public List<AdditionalData> AdditionalData { get; set; }
        public string Type { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }       

    }

    public class TCMasterViewModel
    {
        public TCMaster TCMaster { get; set; }
    }
}