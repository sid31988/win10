using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;

namespace Win10WebApp.ViewModels
{
    public class BulkPurchasePaymentList : List<BulkPurchasePayment>
    {
        private static int MaxId = 0;

        public void AddItem(BulkPurchasePayment item)
        {
            item.Id = ++MaxId;
            base.Add(item);
        }
    }

    public class BulkPurchasePaymentViewModel
    {
        public static BulkPurchasePaymentList Current
        {
            get
            {
                var payment = HttpContext.Current.Session["payment"] as BulkPurchasePaymentList;
                if (null == payment)
                {
                    payment = new BulkPurchasePaymentList();
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

        public BulkPurchasePaymentList Find()
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

        public BulkPurchasePaymentList Delete(int id)
        {
            var payment = BulkPurchasePaymentViewModel.Current;
            var row = FindById(id);
            payment.Remove(row);
            BulkPurchasePaymentViewModel.Current = payment;
            return BulkPurchasePaymentViewModel.Current;
        }

        public BulkPurchasePaymentList DeleteAll()
        {
            var payment = BulkPurchasePaymentViewModel.Current;
            foreach (var row in payment)
            {
                payment.Remove(row);
            }
            BulkPurchasePaymentViewModel.Current = payment;
            return BulkPurchasePaymentViewModel.Current;
        }

        public BulkPurchasePayment Save(BulkPurchasePayment model, string action)
        {
            ActionMode mode = (ActionMode)Enum.Parse(typeof(ActionMode), action, true);

            switch (mode)
            {
                case ActionMode.Add:
                   // model.TotalPendingAmount = ((BulkPurchasePaymentViewModel.Current.Sum(p => p.Amount) ?? 0) + model.Amount) ?? 0;
                   // model.BalanceAmount = (model.NetPayable - model.TotalPendingAmount) ?? 0;
                    BulkPurchasePaymentViewModel.Current.AddItem(model);
                    return model;
                case ActionMode.Edit:
                    var payment = BulkPurchasePaymentViewModel.Current;
                    payment.Remove(payment.Where(i => i.Id == model.Id).FirstOrDefault());

                   // model.TotalPendingAmount = ((payment.Sum(p => p.Amount) ?? 0) + model.Amount) ?? 0;
                   // model.BalanceAmount = (model.NetPayable - model.TotalPendingAmount) ?? 0;

                    payment.AddItem(model);
                    BulkPurchasePaymentViewModel.Current = payment;
                    return model;
                case ActionMode.Delete:
                    var removepayment = BulkPurchasePaymentViewModel.Current;
                    removepayment.Remove(removepayment.Where(i => i.Id == model.Id).FirstOrDefault());

                   // model.TotalPendingAmount = removepayment.Sum(p => p.Amount) ?? 0;
                   // model.BalanceAmount = (model.NetPayable - model.TotalPendingAmount) ?? 0;

                    BulkPurchasePaymentViewModel.Current = removepayment;
                    return model;
                //case ActionMode.Cancel:
                //    break;
                default:
                    break;
            }

            return null;
        }


        public static void ClearSession()
        {
            if (BulkPurchasePaymentViewModel.Current != null)
            {
                BulkPurchasePaymentViewModel.Current.Clear();
                BulkPurchasePaymentViewModel.Current = null;
            }

        }

    }

}