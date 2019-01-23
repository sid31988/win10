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
    public class ReceiveTrustMasterController : Controller
    {
        private Repository<ReceiveTrustMaster> _repository = null;

        public ReceiveTrustMasterController()
        {
            _repository = new Repository<ReceiveTrustMaster>();
        }

        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        [HttpGet]
        public ActionResult Find(int? id = null)
        {
            if(id.HasValue)
            {
                ReceiveTrustMaster receiveTrustMaster = _repository.GetById(id.Value);
                return Json(receiveTrustMaster, JsonRequestBehavior.AllowGet);
            }
            else
            {
                IEnumerable<ReceiveTrustMaster> receiveTrustMasters = _repository.GetAll().ToList();
                return Json(new { data = receiveTrustMasters }, JsonRequestBehavior.AllowGet);
            }
        }

        [Authorize]
        [HttpPost]
        public JsonResult Save(ReceiveTrustMaster receiveTrustMaster)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    receiveTrustMaster.CreatedDate = DateTime.Now;
                    receiveTrustMaster.IsDeleted = false;
                    _repository.Insert(receiveTrustMaster);
                    _repository.Save();
                    return Json(Functions.OutPutResponse(true, "Record inserted successfully", receiveTrustMaster));
                }
                return Json(Functions.OutPutResponse(false, "Invalid Data"));
            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }

        [Authorize]
        public ActionResult Add()
        {
            ReceiveTrustMaster receiveTrustMaster = new ReceiveTrustMaster();            
            return PartialView("Actions", receiveTrustMaster);
        }

        [Authorize]
        public ActionResult Edit(int Id)
        {
            ReceiveTrustMaster receiveTrustMaster = new ReceiveTrustMaster();
            receiveTrustMaster = _repository.GetById(Id);
            return PartialView("Actions", receiveTrustMaster);           
        }

        public JsonResult Delete(ReceiveTrustMaster receiveTrustMaster)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    receiveTrustMaster.UpdatedDate = DateTime.Now;
                    receiveTrustMaster.IsDeleted = true;
                    _repository.Update(receiveTrustMaster);
                    return Json(Functions.OutPutResponse(true, "Record deleted successfully", receiveTrustMaster));

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