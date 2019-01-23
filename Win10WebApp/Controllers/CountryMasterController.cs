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
    public class CountryMasterController : Controller
    {
        private Repository<CountryMaster> _repository = null;

        public CountryMasterController()
        {
            _repository = new Repository<CountryMaster>();
        }
        // GET: CountryMaster
        public ActionResult Index()
        {

            List<CountryMaster> contMaster = _repository.GetAll().ToList();
            return View(contMaster);
        }

        [Authorize]
        [HttpPost]
        public JsonResult SaveCountry(CountryMaster countryMaster)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    countryMaster.CreatedDate = DateTime.Now;
                    countryMaster.UpdatedDate = DateTime.Now;
                    countryMaster.IsDeleted = false;
                    _repository.Insert(countryMaster);
                    _repository.Save();
                    return Json(Functions.OutPutResponse(true, "Data Inserted Succfully", countryMaster));
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