// ReSharper disable ClassNeverInstantiated.Global
namespace BoA.Solutions.Weather.Web.Api
{
	using System.Diagnostics.CodeAnalysis;
	using Microsoft.AspNetCore;
	using Microsoft.AspNetCore.Hosting;

	[ExcludeFromCodeCoverage]
	public class Program
	{
		public static void Main(string[] args)
		{
			BuildWebHost(args).Run();
		}

		public static IWebHost BuildWebHost(string[] args) =>
			WebHost.CreateDefaultBuilder(args)
					.UseStartup<Startup>()
					.Build();
	}
}
