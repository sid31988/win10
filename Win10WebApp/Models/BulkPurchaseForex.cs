using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class BulkPurchaseForex : ICustomColumns
    {
        public int Id { get; set; }
        public int BulkPurchaseId { get; set; }
        public int? CurrencyName { get; set; }
        public int? CurrencyNote { get; set; }
        public int? Quantity { get; set; }
        public double? Rate { get; set; }
        public double? GrossAmt { get; set; }
        public double? CalculatedGross { get; set; }
        public int? BrokerPaise { get; set; }
        public double? BrokerPaiseAmt { get; set; }
        public double? BrokerCommAmt { get; set; }
        public double? BrokerTDSPercentage { get; set; }
        public double? BrokerTDSAmt { get; set; }
        public int? SubBrokerPaise { get; set; }
        public double? SubBrokerPaiseAmt { get; set; }
        public double? SubBrokerCommAmt { get; set; }
        public double? SubBrokerTDSPercentage { get; set; }
        public double? SubBrokerTDSAmt { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }

}