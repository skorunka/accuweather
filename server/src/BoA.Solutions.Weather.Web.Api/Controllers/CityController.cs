namespace BoA.Solutions.Weather.Web.Api.Controllers
{
	using System;
	using System.Threading.Tasks;
	using Code.Clients;
	using Microsoft.AspNetCore.Mvc;

	[Route("api/[controller]")]
	public class CityController : Controller
	{
		private readonly IWeatherClient _weatherClient;

		#region ctors

		public CityController(IWeatherClient weatherClient)
		{
			this._weatherClient = weatherClient ?? throw new ArgumentNullException(nameof(weatherClient));
		}

		#endregion

		[HttpGet("search")]
		public async Task<IActionResult> Search(string text)
		{
			var result = await this._weatherClient.FindCityAsync(text);

			return this.Ok(result);
		}
	}
}
