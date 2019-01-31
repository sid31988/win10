using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Win10WebApp.Models
{
    public class AdditionalData
    {
        public int? Id { get; set; }
        public string Table { get; set; }
        public string Column { get; set; }
        public string Value { get; set; }
        public string RefrenceId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}