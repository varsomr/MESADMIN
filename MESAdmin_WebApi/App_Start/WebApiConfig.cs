using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Leprino_Integration_Tool
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
           // config.EnableCors();
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();




      
            config.Routes.MapHttpRoute(
               name: "Message",
               routeTemplate: "api/{controller}/{id}",
               defaults: new { id = RouteParameter.Optional }
           );

//            config.Routes.MapHttpRoute(
//   name: "Message2",
//   routeTemplate: "api/{controller}/{id}",
//   defaults: new { id = RouteParameter.Optional }
//);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }
    }
}
