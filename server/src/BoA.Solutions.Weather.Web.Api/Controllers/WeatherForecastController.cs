namespace BoA.Solutions.Weather.Web.Api.Controllers
{
	using System;
	using System.Diagnostics.CodeAnalysis;
	using System.Threading.Tasks;
	using Code.Clients;
	using Microsoft.AspNetCore.Mvc;

	[ExcludeFromCodeCoverage]
	[Route("api/weather-forecast")]
	public class WeatherForecastController : Controller
	{
		private readonly IWeatherClient _weatherClient;

		#region ctors

		public WeatherForecastController(IWeatherClient weatherClient)
		{
			this._weatherClient = weatherClient ?? throw new ArgumentNullException(nameof(weatherClient));
		}

		#endregion

		[HttpGet("5day/{cityId}")]
		public async Task<IActionResult> Search(string cityId)
		{
			var result = await this._weatherClient.GetWeatherForecastForNext5DaysInCity(cityId);

			return this.Ok(result);
		}
	}
}
