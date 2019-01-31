using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class CurrencyMaster : ICustomColumns
    {
        [Display(Name = "ID")]
        public int Id { get; set; }
        [Display(Name ="CURRENCYCODE")]
        public string CurrencyCode { get; set; }
        [Display(Name ="CURRENCYNAME")]
        public string CurrencyName { get; set; }
        [Display(Name ="AFTYPE")]
        public string AFType { get; set; }
        [Display(Name ="RBI")]
        public string RBI { get; set; }
        [Display(Name ="RATE")]
        public int? Rate { get; set; }
        [Display(Name ="POSITION")]
        public int? Position { get; set; }
        [Display(Name ="CREATEDDATE")]
        public DateTime? CreatedDate { get; set; }
        [Display(Name ="UPDATEDDATE")]
        public DateTime? UpdatedDate { get; set; }
        [Display(Name ="ISDELETED")]
        public bool IsDeleted { get; set; }

    }
}