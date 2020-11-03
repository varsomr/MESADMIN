using System.Web;
using System.Web.Optimization;

namespace Leprino_Integration_WebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
               "~/Scripts/angular.js",
               "~/Scripts/angular-route.js",
               "~/App/app.js",
               "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
               "~/Scripts/ui-grid.js",
               "~/Scripts/angular-idle.min.js",
               "~/Scripts/angular-sanitize.js",
               "~/App/ng-google-chart.js",
               "~/Scripts/underscore.js",
               "~/App/angularjs-dropdown-multiselect.min.js"));


            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                  "~/Scripts/jquery-2.2.3.js",
                "~/Scripts/bootstrap.min.js",
                      "~/Scripts/respond.js"));



            bundles.Add(new ScriptBundle("~/bundles/app").IncludeDirectory(
               "~/App/Controllers/", "*.js", true).IncludeDirectory(
               "~/App/Services/", "*.js", true));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/ui-grid.css"));         
          
        }

    }
}
