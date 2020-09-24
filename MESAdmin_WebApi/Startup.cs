using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Leprino_Integration_Tool.Startup))]
namespace Leprino_Integration_Tool
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
