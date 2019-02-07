using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;

namespace Win10WebApp.ViewModels
{
    public class BulkPurchasePaymentViewModel
    {
        public static List<BulkPurchasePayment> Current
        {
            get
            {
                var payment = HttpContext.Current.Session["payment"] as List<BulkPurchasePayment>;
                if (null == payment)
                {
                    payment = new List<BulkPurchasePayment>();
                    HttpContext.Current.Session["payment"] = payment;
                }

                return payment;
            }
            set
            {
                HttpContext.Current.Session["payment"] = value;
            }
        }

        private BulkPurchasePayment FindById(int? id = 0)
        {
            BulkPurchasePayment row = new BulkPurchasePayment();
            if (id > 0)
            {               
                var payment = BulkPurchasePaymentViewModel.Current;
                row = payment.Where(f => f.Id == id).Select(f => f).FirstOrDefault();
                return row;
            }
            return row;
            
        }

        public List<BulkPurchasePayment> Find()
        {
            return BulkPurchasePaymentViewModel.Current;
        }

        
        public BulkPurchasePayment Insert()
        {
            return new BulkPurchasePayment();
        }

        public BulkPurchasePayment Edit(int id)
        {
            return FindById(id);
        }

        public List<BulkPurchasePayment> Delete(int id)
        {
            var payment = BulkPurchasePaymentViewModel.Current;
            var row = FindById(id);
            payment.Remove(row);
            BulkPurchasePaymentViewModel.Current = payment;
            return BulkPurchasePaymentViewModel.Current;
        }

        public List<BulkPurchasePayment> Save(BulkPurchasePayment model, string action)
        {
            ActionMode mode = (ActionMode)Enum.Parse(typeof(ActionMode), action, true);

            switch (mode)
            {
                case ActionMode.Add:
                    BulkPurchasePaymentViewModel.Current.Add(model);
                    return BulkPurchasePaymentViewModel.Current;
                case ActionMode.Edit:
                    var payment = BulkPurchasePaymentViewModel.Current;
                    payment.Remove(payment.Where(i => i.Id == model.Id).FirstOrDefault());
                    payment.Add(model);
                    BulkPurchasePaymentViewModel.Current = payment;
                    return BulkPurchasePaymentViewModel.Current;
                case ActionMode.Delete:
                    var removepayment = BulkPurchasePaymentViewModel.Current;
                    removepayment.Remove(removepayment.Where(i => i.Id == model.Id).FirstOrDefault());
                    BulkPurchasePaymentViewModel.Current = removepayment;
                    return BulkPurchasePaymentViewModel.Current;
                //case ActionMode.Cancel:
                //    break;
                default:
                    break;
            }            
            
            return BulkPurchasePaymentViewModel.Current;
        }


    }  

  
}