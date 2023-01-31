using System;
using Telerik.Sitefinity.Abstractions;
using Arekibo.Neptune.Widgets.Code;

namespace SitefinityWebApp
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            Bootstrapper.Bootstrapped += Bootstrapper_Bootstrapped;
        }

        protected void Bootstrapper_Bootstrapped(object sender, EventArgs e)
        {
            ArekiboBootstrapped.Register();
        }
    }
}