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
    public class OtherMastersController : Controller
    {
        private Repository<OtherMaster> _repository = null;
        public OtherMastersController() {
            _repository = new Repository<OtherMaster>();
        }
        // GET: OtherMasters
        [Authorize]
        public ActionResult Index()
        {
            List<OtherMaster> oMaster = _repository.GetAll().ToList();
            return View(oMaster);
        }

       

        [HttpPost]
        [Authorize]
        public JsonResult SaveOtherMaster(OtherMaster otherMaster) {
            try
            {
                if (ModelState.IsValid)
                {
                    otherMaster.CreatedDate = DateTime.Now;
                    otherMaster.UpdatedDate = DateTime.Now;
                    otherMaster.IsDeleted = false;
                    _repository.Insert(otherMaster);
                    _repository.Save();
                    return Json(Functions.OutPutResponse(true, "Data Inserted Succfully", otherMaster));
                }
                return Json(Functions.OutPutResponse(false, "Invalid Data"));
            }
            catch (Exception ex) {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }
    }
}