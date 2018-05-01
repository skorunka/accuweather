// ReSharper disable InconsistentNaming
// ReSharper disable Element must begin with upper-case letter
namespace BoA.Solutions.Weather.Web.Api.UnitTests.Clients.AccuWeatherClient
{
	using System;
	using System.Threading.Tasks;
	using Code.Clients;
	using Code.Clients.Core;
	using Microsoft.Extensions.Logging;
	using Microsoft.Extensions.Options;
	using NSubstitute;
	using Xunit;

	public class when_getting_forecast_for_5_days_in_city
	{
		[Theory]
		[InlineData(null)]
		[InlineData("")]
		[InlineData(" ")]
		[InlineData("\n")]
		public async Task throw_ArgumentException_when_SearchText_is_IsNullOrWhiteSpace(string cityId)
		{
			var httpClientFactory = Substitute.For<IHttpClientFactory>();
			var options = Substitute.For<IOptions<AccuWeatherClientOptions>>();
			var logger = Substitute.For<ILogger<AccuWeatherClient>>();

			options.Value.Returns(new AccuWeatherClientOptions { Endpoint = "enpoint", ApiKey = "apikey" });

			var client = new AccuWeatherClient(httpClientFactory, options, logger) as IWeatherClient;

			var ex = await Assert.ThrowsAsync<ArgumentException>(() => client.GetWeatherForecastForNext5DaysInCity(cityId));

			Assert.Equal("cityId", ex.ParamName);
		}
	}
}
