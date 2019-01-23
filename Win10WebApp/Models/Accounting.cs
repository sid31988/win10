using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class Accounting : ISoftDelete
    {
        public int Id { get; set; }
        public int SubId { get; set; }
        public string Desc { get; set; }
        public string Type { get; set; }
        public string HSNSAC { get; set; }
        public string GrpUnder { get; set; }
        public string Block { get; set; }
        public string Balance { get; set; }
        public string BalancePost { get; set; }
        public string NOF { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public List<AdditionalData> AdditionalData {get;set;}
    }
}