namespace BoA.Solutions.Weather.Web.Api.Models
{
	using System;

	public class WeatherForecastModel
	{
		public DateTime Date { get; set; }

		public decimal? TemperatureMin { get; set; }

		public decimal? TemperatureMax { get; set; }

		public string TemperatureUnit { get; set; }
	}
}
