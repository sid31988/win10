using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Win10WebApp.Models;
using Win10WebApp.Repository;
using Win10WebApp.Utility;

namespace Win10WebApp.Controllers
{
    public class CurrencyMasterController : Controller
    {
        private Repository<CurrencyMaster> _repository = null;

        public CurrencyMasterController()
        {
            _repository = new Repository<CurrencyMaster>();
        }
        // GET: CurrencyMaster
        [Authorize]
        public ActionResult Index()
        {
            List<CurrencyMaster> currMaster = _repository.GetAll().ToList();
            return View(currMaster);
        }


        [Authorize]
        [HttpPost]
        public JsonResult SaveCurrency(CurrencyMaster currencyMaster) {
            try
            {
                if (ModelState.IsValid)
                {
                    currencyMaster.CreatedDate = DateTime.Now;
                    currencyMaster.UpdatedDate = DateTime.Now;
                    currencyMaster.IsDeleted = false;
                    _repository.Insert(currencyMaster);
                    _repository.Save();
                    return Json(Functions.OutPutResponse(true, "Data Inserted Succfully", currencyMaster));
                }
                return Json(Functions.OutPutResponse(false, "Invalid Data"));
            }
            catch (Exception ex) {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }

        [Authorize]
        [HttpPost]
        public JsonResult EditCurrency(CurrencyMaster currencyMaster)
        {
            try
            {
                if (ModelState.IsValid)
                {
                  
                    currencyMaster.UpdatedDate = DateTime.Now;
                    _repository.Update(currencyMaster);
                    return Json(Functions.OutPutResponse(true, "Data Updated Succfully", currencyMaster));
                }
                return Json(Functions.OutPutResponse(false, "Invalid Data"));
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }
    }
}