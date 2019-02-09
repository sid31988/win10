using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;

namespace Win10WebApp.ViewModels
{
    public class BulkPurchaseForexList : List<BulkPurchaseForex>
    {
        private static int MaxId = 0;

        public void AddItem(BulkPurchaseForex item)
        {
            item.Id = ++MaxId;
            base.Add(item);
        }
    }

    public class BulkPurchaseForexViewModel
    {
        public static BulkPurchaseForexList Current
        {
            get
            {
                var forex = HttpContext.Current.Session["forex"] as BulkPurchaseForexList;
                if (null == forex)
                {
                    forex = new BulkPurchaseForexList();
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

        public BulkPurchaseForexList Find()
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

        public BulkPurchaseForexList Delete(int id)
        {
            var forex = BulkPurchaseForexViewModel.Current;
            var row = FindById(id);
            forex.Remove(row);
            BulkPurchaseForexViewModel.Current = forex;
            return BulkPurchaseForexViewModel.Current;
        }

        public BulkPurchaseForexList DeleteAll()
        {
            var forex = BulkPurchaseForexViewModel.Current;
            foreach (var row in forex)
            {
                forex.Remove(row);
            }
            BulkPurchaseForexViewModel.Current = forex;
            return BulkPurchaseForexViewModel.Current;
        }

        public BulkPurchaseForex Save(BulkPurchaseForex model, string action)
        {
            ActionMode mode = (ActionMode)Enum.Parse(typeof(ActionMode), action, true);

            switch (mode)
            {
                case ActionMode.Add:
                    BulkPurchaseForexViewModel.Current.AddItem(model);
                    return model;
                case ActionMode.Edit:
                    var forex = BulkPurchaseForexViewModel.Current;
                    forex.Remove(forex.Where(i => i.Id == model.Id).FirstOrDefault());
                    forex.AddItem(model);
                    BulkPurchaseForexViewModel.Current = forex;
                    return model;
                case ActionMode.Delete:
                    var removeforex = BulkPurchaseForexViewModel.Current;
                    removeforex.Remove(removeforex.Where(i => i.Id == model.Id).FirstOrDefault());
                    BulkPurchaseForexViewModel.Current = removeforex;
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
            if (BulkPurchaseForexViewModel.Current != null)
            {
                BulkPurchaseForexViewModel.Current.Clear();
                BulkPurchaseForexViewModel.Current = null;
            }

        }


    }


}