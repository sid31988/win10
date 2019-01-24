using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class ReceiveTrustMaster : ISoftDelete
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
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

    }
}