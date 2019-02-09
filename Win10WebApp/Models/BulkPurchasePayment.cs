using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class BulkPurchasePayment : ICustomColumns
    {
        public int Id { get; set; }
        public int BulkPurchaseId { get; set; }
        public int? SequenceNo { get; set; }
        public int? CashBank { get; set; }
        public int? Type { get; set; }
        public string ChequeNo { get; set; }
        public DateTime? ChequeDate { get; set; }
        public double? Amount { get; set; }
        public string Remark { get; set; }
        public int? Bank { get; set; }
        public DateTime? Date { get; set; }
        public double? NetPayable { get; set; }
        public double? TotalPendingAmount { get; set; }
        public double? BalanceAmount { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }


    }

}