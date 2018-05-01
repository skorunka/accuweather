// ReSharper disable ClassNeverInstantiated.Global
// ReSharper disable UnusedMember.Global
namespace BoA.Solutions.Weather.Web.Api
{
	using System.Diagnostics.CodeAnalysis;
	using Code.Clients;
	using Code.Clients.Core;
	using Microsoft.AspNetCore.Builder;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;

	[ExcludeFromCodeCoverage]
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			this.Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.Configure<AccuWeatherClientOptions>(this.Configuration.GetSection($"Clients:{nameof(AccuWeatherClientOptions)}"));

			services.AddTransient<IWeatherClient, AccuWeatherClient>();
			services.AddSingleton<IHttpClientFactory, CachedHttpClientFactory>();

			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			app.UseMvc();
		}
	}
}
