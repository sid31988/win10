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
        private Repository<BulkPurchase> _repository = null;
        public BulkPurchaseViewModel _model = null;
        public BulkPurchaseForexViewModel _forexmodel = null;
        public BulkPurchasePaymentViewModel _paymentmodel = null;

        public BulkPurchaseController()
        {
            _repository = new Repository<BulkPurchase>();
            _model = new BulkPurchaseViewModel().SetModel();
            _forexmodel = new BulkPurchaseForexViewModel();
            _paymentmodel = new BulkPurchasePaymentViewModel();
        }

        [Authorize]
        public ActionResult Index()
        {
            return View(_model);
        }


        [Authorize]
        [HttpGet]
        public ActionResult Find(string source)
        {
            EventSource eventSource = (EventSource)Enum.Parse(typeof(EventSource), source, true);
            switch (eventSource)
            {
                case EventSource.Forex:
                    return Json(_forexmodel.Find(), JsonRequestBehavior.AllowGet);
                case EventSource.Payment:
                    return Json(_paymentmodel.Find(), JsonRequestBehavior.AllowGet);
                default:
                    throw new Exception("Invalid Event Source in Find operation..!!");
            }
        }

        [Authorize]
        public ActionResult Insert(string source)
        {
            EventSource eventSource = (EventSource)Enum.Parse(typeof(EventSource), source, true);
            switch (eventSource)
            {
                case EventSource.Forex:
                    return PartialView("_forexform", _forexmodel.Insert());
                case EventSource.Payment:
                    return PartialView("_paymentform", _paymentmodel.Insert());
                default:
                    throw new Exception("Invalid Event Source in Insert operation..!!");
            }
        }

        [Authorize]
        public ActionResult Edit(string source, int id)
        {
            EventSource eventSource = (EventSource)Enum.Parse(typeof(EventSource), source, true);
            switch (eventSource)
            {
                case EventSource.Forex:
                    return PartialView("_forexform", _forexmodel.Edit(id));
                case EventSource.Payment:
                    return PartialView("_paymentform", _paymentmodel.Edit(id));
                default:
                    throw new Exception("Invalid Event Source in Edit operation..!!");
            }
        }


        [Authorize]
        public JsonResult Delete(string source, int id)
        {
            EventSource eventSource = (EventSource)Enum.Parse(typeof(EventSource), source, true);
            switch (eventSource)
            {
                case EventSource.Forex:
                    return Json(Functions.OutPutResponse(true, "Record deleted successfully", _forexmodel.Delete(id)), JsonRequestBehavior.AllowGet);
                case EventSource.Payment:
                    return Json(Functions.OutPutResponse(true, "Record deleted successfully", _paymentmodel.Delete(id)), JsonRequestBehavior.AllowGet);
                default:
                    throw new Exception("Invalid Event Source in Delete operation..!!");
            }
        }

        [Authorize]
        [HttpPost]
        public JsonResult ForexSave(BulkPurchaseForex model, string action)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    return Json(Functions.OutPutResponse(true, "Record saved successfully", _forexmodel.Save(model, action)));
                }
                return Json(Functions.OutPutResponse(false, "Record saved failed", ModelState));
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }

        [Authorize]
        [HttpPost]
        public JsonResult PaymentSave(BulkPurchasePayment model, string action)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    return Json(Functions.OutPutResponse(true, "Record saved successfully", _paymentmodel.Save(model, action)));
                }
                return Json(Functions.OutPutResponse(false, "Record saved failed", ModelState));
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }

    }
}