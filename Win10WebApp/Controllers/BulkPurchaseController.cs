using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;
using Win10WebApp.Utility;
using Win10WebApp.ViewModels;

namespace Win10WebApp.Controllers
{
    public class BulkPurchaseController : Controller
    {
        //private MasterQueries _master = null;
        //private Repository<BulkPurchase> _repository = null;
        public BulkPurchaseViewModel _model = null;
        public BulkPurchaseController()
        {
            //_repository = new Repository<BulkPurchase>();
            //_master = new MasterQueries();
            _model = new BulkPurchaseViewModel().SetModel();
        }

        [Authorize]
        public ActionResult Index()
        {
            return View(_model);
        }

     
    }
}