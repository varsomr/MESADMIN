﻿using System.Web;
using System.Web.Mvc;

namespace Leprino_Integration_Tool
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
