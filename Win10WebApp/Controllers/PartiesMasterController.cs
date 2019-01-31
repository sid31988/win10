using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Utility;

namespace Win10WebApp.Controllers
{
    public class PartiesMasterController : Controller
    {
        MasterQueries masterQueries = new MasterQueries();

        // GET: PartiesMaster
        public ActionResult Individual()
        {
            List<PartyMaster> partyMaster = masterQueries.GetAllPartyMaster('I');
            return View(partyMaster);
        }

        public ActionResult Corporate()
        {
            List<PartyMaster> partyMaster = masterQueries.GetAllPartyMaster('C');
            return View(partyMaster);
        }

        public ActionResult FFMC()
        {
            List<PartyMaster> partyMaster = masterQueries.GetAllPartyMaster('M');
            return View(partyMaster);
        }

        public ActionResult Branches()
        {
            List<PartyMaster> partyMaster = masterQueries.GetAllPartyMaster('B');
            return View(partyMaster);
        }

        public ActionResult Franchisees()
        {
            List<PartyMaster> partyMaster = masterQueries.GetAllPartyMaster('F');
            return View(partyMaster);
        }

        public ActionResult Brokers()
        {
            List<PartyMaster> partyMaster = masterQueries.GetAllPartyMaster('R');
            return View(partyMaster);
        }

        public ActionResult Suppliers()
        {
            List<PartyMaster> partyMaster = masterQueries.GetAllPartyMaster('S');
            return View(partyMaster);
        }

        [Authorize]
        public JsonResult SavePartiesMaster(PartyMaster partymaster)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    MasterQueries masterQueries = new MasterQueries();
                    PartyMaster partymasterObj = masterQueries.SavePartyMaster(partymaster);
                    if (partymaster.AdditionalData != null && partymaster.AdditionalData.Count > 0)
                    {
                        int i = masterQueries.SaveAdditionalData(partymaster.AdditionalData, (partymaster.Id.ToString()));
                    }
                    return Json(Functions.OutPutResponse(true, "Data Inserted Succfully", partymasterObj));
                }

                return Json(Functions.OutPutResponse(false, "Invalid Data"));

            }
            catch (Exception ex)
            {
                return Json(Functions.OutPutResponse(false, ex.Message));
            }
        }

        [Authorize]
        public JsonResult EditPartiesMaster(PartyMaster partymaster)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    MasterQueries masterQueries = new MasterQueries();
                    int res = masterQueries.UpdatePartyMaster(partymaster);
                    int i = masterQueries.SaveAdditionalData(partymaster.AdditionalData, (partymaster.Id.ToString()));
                    return Json(Functions.OutPutResponse(true, "Data Updated Succfully", partymaster));
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