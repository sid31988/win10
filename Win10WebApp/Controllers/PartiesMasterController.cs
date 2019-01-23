using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Win10WebApp.Models;

namespace Win10WebApp.Controllers
{
    public class PartiesMasterController : Controller
    {
        // GET: PartiesMaster
        public ActionResult Individual()
        {
            List<PartyMaster> partyMaster = new List<PartyMaster>();
            return View(partyMaster);
        }

        public ActionResult Corporate()
        {
            List<PartyMaster> partyMaster = new List<PartyMaster>();
            return View(partyMaster);
        }

        public ActionResult FFMC()
        {
            List<PartyMaster> partyMaster = new List<PartyMaster>();
            return View(partyMaster);
        }

        public ActionResult Branches()
        {
            List<PartyMaster> partyMaster = new List<PartyMaster>();
            return View(partyMaster);
        }

        public ActionResult Franchisees()
        {
            List<PartyMaster> partyMaster = new List<PartyMaster>();
            return View(partyMaster);
        }

        public ActionResult Brokers()
        {
            List<PartyMaster> partyMaster = new List<PartyMaster>();
            return View(partyMaster);
        }

        public ActionResult Suppliers()
        {
            List<PartyMaster> partyMaster = new List<PartyMaster>();
            return View(partyMaster);
        }
    }
}