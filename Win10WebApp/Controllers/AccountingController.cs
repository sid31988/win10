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
    public class AccountingController : Controller
    {
        // GET: Accounts
        private Repository<Accounting> _repository = null;

        public AccountingController() {
            _repository = new Repository<Accounting>();
        }

        [Authorize]
        public ActionResult Index()
        {
            MasterQueries masterQueries = new MasterQueries();
            List<Accounting> accData = masterQueries.GetAllAccounting();
            return View(accData);
        }

        [Authorize]
        public JsonResult SaveAccounting(Accounting accounting) {
            try
            {
                if (ModelState.IsValid)
                {
                    MasterQueries masterQueries = new MasterQueries();
                    Accounting accountingObj = masterQueries.SaveAccounting(accounting);
                    if (accounting.AdditionalData != null && accounting.AdditionalData.Count > 0)
                    {
                        int i = masterQueries.SaveAdditionalData(accounting.AdditionalData, (accounting.Id.ToString() + accounting.SubId.ToString()));
                    }
                    return Json(Functions.OutPutResponse(true, "Data Inserted Succfully", accountingObj));
                }

                return Json(Functions.OutPutResponse(false, "Invalid Data"));

            }
            catch (Exception ex) {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
           
        }

        [Authorize]
        public JsonResult EditAccounting(Accounting accounting) {
            try {
                if (ModelState.IsValid) {

                    MasterQueries masterQueries = new MasterQueries();
                    int res = masterQueries.UpdateAccounting(accounting);
                    int i = masterQueries.SaveAdditionalData(accounting.AdditionalData, (accounting.Id.ToString() + accounting.SubId.ToString()));
                    //accounting.UpdatedDate = DateTime.Now;
                    //_repository.Update(accounting);
                    return Json(Functions.OutPutResponse(true, "Data Inserted Succfully", accounting));
                }
            }
            catch (Exception ex) {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
            return null;
        }

        
    }
}