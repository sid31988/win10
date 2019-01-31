using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;
using Win10WebApp.Utility;


namespace Win10WebApp.Controllers
{
    public class TCMasterController : Controller
    {
        MasterQueries master = new MasterQueries();
        private Repository<TCMaster> _repository = null;

        public TCMasterController()
        {
            _repository = new Repository<TCMaster>();
        }

        [Authorize]
        public ActionResult ReceiveTrust()
        {
            return View(new TCMasterViewModel());
        }

        [Authorize]
        public ActionResult ReceiveForex()
        {
            return View(new TCMasterViewModel());
        }

        [Authorize]
        public ActionResult Purchased()
        {
            return View(new TCMasterViewModel());
        }

        [Authorize]
        public ActionResult Unsettled()
        {
            return View(new TCMasterViewModel());
        }

        [Authorize]
        public ActionResult UnsettledForexCard()
        {
            return View(new TCMasterViewModel());
        }
        [Authorize]
        public ActionResult EncashedBalance()
        {
            return View(new TCMasterViewModel());
        }



        [Authorize]
        [HttpGet]
        public ActionResult Find(string tcMasterType, int? id = null)
        {
            if (id.HasValue)
            {
                TCMaster tcMaster = _repository.GetById(id.Value);
                return Json(tcMaster, JsonRequestBehavior.AllowGet);
            }
            else
            {                
                IEnumerable<TCMaster> tcMasters = master.GetAllTCMaster(tcMasterType);
                return Json(new { data = tcMasters }, JsonRequestBehavior.AllowGet);
            }
        }

        [Authorize]
        [HttpPost]
        public JsonResult Save(string tcMasterType, TCMaster tcMaster)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    tcMaster.IsDeleted = false;
                    if (tcMaster.Id > 0)
                    {
                        tcMaster.UpdatedDate = DateTime.Now;
                        _repository.Update(tcMaster);
                        return Json(Functions.OutPutResponse(true, "Record updated successfully", tcMaster));
                    }
                    tcMaster.CreatedDate = DateTime.Now;
                    _repository.Insert(tcMaster);
                    _repository.Save();
                    return Json(Functions.OutPutResponse(true, "Record inserted successfully", tcMaster));
                }
                return Json(Functions.OutPutResponse(false, "Invalid Data", ModelState));
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }

        [Authorize]
        public ActionResult Add(string tcMasterType)
        {
            TCMaster tcMaster = new TCMaster();
            return View(tcMasterType, new TCMasterViewModel { TCMaster = tcMaster });
        }

        [Authorize]
        public ActionResult Edit(string tcMasterType, int Id)
        {
            TCMaster tcMaster = new TCMaster();
            tcMaster = _repository.GetById(Id);
            return View(tcMasterType, new TCMasterViewModel { TCMaster = tcMaster });
        }

        [Authorize]
        public JsonResult Delete(int Id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    TCMaster tcMaster = new TCMaster();
                    tcMaster = _repository.GetById(Id);
                    tcMaster.UpdatedDate = DateTime.Now;
                    tcMaster.IsDeleted = true;
                    _repository.Update(tcMaster);
                    return Json(Functions.OutPutResponse(true, "Record deleted successfully", tcMaster), JsonRequestBehavior.AllowGet);

                }
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
            return null;
        }
    }
}