using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Leprino_Integration_WebApp.Startup))]
namespace Leprino_Integration_WebApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
