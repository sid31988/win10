using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;

namespace Win10WebApp.Controllers
{
    public class AccountController : Controller
    {
        AuthQueries authQueries;
        public AccountController ()
        {
            authQueries = new AuthQueries();
        }
        // GET: Account
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            User model = new User();
            try
            {
                // Verification.    
                if (Request.IsAuthenticated)
                {
                    // Info.    
                    return RedirectToLocal(returnUrl);
                }
            } catch (Exception ex)
            {
                // Info    
                Console.Write(ex);
            }
            return View(model);
        }

        [AllowAnonymous]
        public ActionResult CompanyListing (string company) {
            List<Company> companies = authQueries.GetCompanyRecords(company);

            return PartialView("_CompanyRecords",companies);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Login(User user, string returnUrl) {
            try
            {   
                if (ModelState.IsValid)
                {
                    Dictionary<string, string> lstData = authQueries.ValidateLogin(user.CompanyCode, user.UserName, user.Password);
                    if (lstData != null && lstData.Count > 0)
                    {
                        SignInUser(user.UserName, lstData["usercode"], false);
                        Session["UserId"] = lstData["usercode"];
                        Session["UserName"] = lstData["username"];
                        Session["CompanyCode"] = lstData["cocode"];

                        return RedirectToLocal(returnUrl);
                    }
                    else
                    {
                        ModelState.AddModelError(string.Empty, "Invalid username or password.");
                    }
                }
                
            }
            catch (Exception ex) {
                Console.Write(ex);
            }
                    return View("Login");
        }


        [HttpGet]
        public ActionResult LogOff()
        {
            try
            {
                // Setting.    
                var ctx = Request.GetOwinContext();
                var authenticationManager = ctx.Authentication;
                // Sign Out.    
                authenticationManager.SignOut();
            }
            catch (Exception ex)
            {
                // Info    
                throw ex;
            }
            // Info.    
            return this.RedirectToAction("Login", "Account");
        }

        private void SignInUser(string username, string role_id, bool isPersistent)
        {
            // Initialization.    
            var claims = new List<Claim>();
            try
            {
                // Setting    
                claims.Add(new Claim(ClaimTypes.Name, username));
                claims.Add(new Claim(ClaimTypes.Role, role_id));
                claims.Add(new Claim(ClaimTypes.NameIdentifier, username));

                var claimIdenties = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);
                var ctx = Request.GetOwinContext();
                var authenticationManager = ctx.Authentication;
                // Sign In.    
                authenticationManager.SignIn(new AuthenticationProperties() { IsPersistent = isPersistent }, claimIdenties);
            }
            catch (Exception ex)
            {
                // Info    
                throw ex;
            }
        }

        private ActionResult RedirectToLocal(string returnUrl)
        {
            try
            {
                // Verification.    
                if (Url.IsLocalUrl(returnUrl))
                {
                    // Info.    
                    return this.Redirect(returnUrl);
                }
            }
            catch (Exception ex)
            {
                // Info    
                throw ex;
            }
            // Info.    
            return this.RedirectToAction("Index", "Home");
        }
    }
}