using System.Web;
using System.Web.Optimization;

namespace Win10WebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/references/jquery.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/references/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/references/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/references/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/jsplugin").Include(
                      "~/Scripts/references/jquery.slimscroll.min.js",
                      "~/Scripts/references/jquery.uniform.min.js",
                      "~/Scripts/references/bootstrap-tabdrop.js",
                      "~/Scripts/references/datatables.min.js",
                      "~/Scripts/references/datatables.buttons.min.js",
                      "~/Scripts/references/app.min.js",
                      "~/Scripts/references/layout.min.js",
                      "~/Scripts/references/utility.js",
                      "~/Scripts/references/actions.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/cssplugin").Include(
                    "~/Content/font-awesome.min.css",
                    "~/Content/simple-line-icons.min.css",
                    "~/Content/uniform.default.css",
                    "~/Content/components-md.min.css",
                    "~/Content/layout.min.css",
                    "~/Content/default.min.css",
                    "~/Content/datatables.min.css",
                    "~/Content/datatables.buttons.min.css",
                    "~/Content/main.css"));


        }
    }
}
