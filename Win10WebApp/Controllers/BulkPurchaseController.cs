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
            _model = new BulkPurchaseViewModel();
            _forexmodel = new BulkPurchaseForexViewModel();
            _paymentmodel = new BulkPurchasePaymentViewModel();
        }

        [Authorize]
        public ActionResult Index()
        {
            return View(_model.SetModel());
        }


        [Authorize]
        [HttpGet]
        public ActionResult Find(string source)
        {
            EventSource eventSource = (EventSource)Enum.Parse(typeof(EventSource), source, true);
            switch (eventSource)
            {
                case EventSource.Forex:
                    return Json(new { data = _forexmodel.Find() }, JsonRequestBehavior.AllowGet);
                case EventSource.Payment:
                    return Json(new { data = _paymentmodel.Find() }, JsonRequestBehavior.AllowGet);
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
                    _model.BulkPurchaseForex = _forexmodel.Insert();
                    return PartialView("_forexform", _model);
                case EventSource.Payment:
                    _model.BulkPurchasePayment = _paymentmodel.Insert();
                    return PartialView("_paymentform", _model);
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
                    _model.BulkPurchaseForex = _forexmodel.Edit(id);
                    return PartialView("_forexform", _model);
                case EventSource.Payment:
                    _model.BulkPurchasePayment = _paymentmodel.Edit(id);
                    return PartialView("_paymentform", _model);
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
        [HttpGet]
        public JsonResult DeleteAll()
        {
            try
            {
                return Json(Functions.OutPutResponse(true, "Records deleted successfully", _forexmodel.DeleteAll()), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message), JsonRequestBehavior.AllowGet);
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
                    System.Diagnostics.Debug.WriteLine("Forex Save Invoked!!!");
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


        [Authorize]
        public ActionResult Add()
        {
            return View("Index", _model.Add());
        }

        [Authorize]
        [HttpPost]
        public JsonResult Save(BulkPurchaseViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    model.BulkPurchase.IsDeleted = false;
                    model.Save(model);
                    return Json(Functions.OutPutResponse(true, "Record inserted successfully", model));
                }
                return Json(Functions.OutPutResponse(false, "Invalid Data", ModelState));
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }

    }
}