using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class BulkPurchase : ICustomColumns
    {
        public int Id { get; set; }
        public int? FFMCAD { get; set; }
        public int? DeliveryIn { get; set; }
        public DateTime? Date { get; set; }
        public int? CostCentre { get; set; }
        public int? Quota { get; set; }
        public int? Broker { get; set; }
        public int? SubBroker { get; set; }
        public string Reference { get; set; }
        public string Remark { get; set; }
        public double? GrossAmt { get; set; }
        public double? FxGST { get; set; }
        public double? TCCardChrg { get; set; }
        public int? SrvChrg { get; set; }
        public double? SrvChrgAmt { get; set; }
        public double? STXPercentage { get; set; }
        public double? STXAmt { get; set; }
        public int? ChargesTax { get; set; }
        public double? RoundOff { get; set; }
        public double? NetPayable { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }

}