using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;

namespace Win10WebApp.ViewModels
{
    public class BulkPurchaseForexViewModel
    {
        public static List<BulkPurchaseForex> Current
        {
            get
            {
                var forex = HttpContext.Current.Session["forex"] as List<BulkPurchaseForex>;
                if (null == forex)
                {
                    forex = new List<BulkPurchaseForex>();
                    HttpContext.Current.Session["forex"] = forex;
                }

                return forex;
            }
            set
            {
                HttpContext.Current.Session["forex"] = value;
            }
        }

        private BulkPurchaseForex FindById(int? id = 0)
        {
            BulkPurchaseForex row = new BulkPurchaseForex();
            if (id > 0)
            {               
                var forex = BulkPurchaseForexViewModel.Current;
                row = forex.Where(f => f.Id == id).Select(f => f).FirstOrDefault();
                return row;
            }
            return row;
            
        }

        public List<BulkPurchaseForex> Find()
        {
            return BulkPurchaseForexViewModel.Current;
        }

        
        public BulkPurchaseForex Insert()
        {
            return new BulkPurchaseForex();
        }

        public BulkPurchaseForex Edit(int id)
        {
            return FindById(id);
        }

        public List<BulkPurchaseForex> Delete(int id)
        {
            var forex = BulkPurchaseForexViewModel.Current;
            var row = FindById(id);
            forex.Remove(row);
            BulkPurchaseForexViewModel.Current = forex;
            return BulkPurchaseForexViewModel.Current;
        }

        public List<BulkPurchaseForex> Save(BulkPurchaseForex model, string action)
        {
            ActionMode mode = (ActionMode)Enum.Parse(typeof(ActionMode), action, true);

            switch (mode)
            {
                case ActionMode.Add:
                    BulkPurchaseForexViewModel.Current.Add(model);
                    return BulkPurchaseForexViewModel.Current;
                case ActionMode.Edit:
                    var forex = BulkPurchaseForexViewModel.Current;
                    forex.Remove(forex.Where(i => i.Id == model.Id).FirstOrDefault());
                    forex.Add(model);
                    BulkPurchaseForexViewModel.Current = forex;
                    return BulkPurchaseForexViewModel.Current;
                case ActionMode.Delete:
                    var removeforex = BulkPurchaseForexViewModel.Current;
                    removeforex.Remove(removeforex.Where(i => i.Id == model.Id).FirstOrDefault());
                    BulkPurchaseForexViewModel.Current = removeforex;
                    return BulkPurchaseForexViewModel.Current;
                //case ActionMode.Cancel:
                //    break;
                default:
                    break;
            }            
            
            return BulkPurchaseForexViewModel.Current;
        }


    }  

  
}