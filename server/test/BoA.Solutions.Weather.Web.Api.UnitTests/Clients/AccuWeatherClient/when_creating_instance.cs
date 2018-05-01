// ReSharper disable InconsistentNaming
// ReSharper disable Element must begin with upper-case letter
namespace BoA.Solutions.Weather.Web.Api.UnitTests.Clients.AccuWeatherClient
{
	using System;
	using Code.Clients;
	using Code.Clients.Core;
	using Microsoft.Extensions.Logging;
	using Microsoft.Extensions.Options;
	using NSubstitute;
	using Xunit;

	public class when_creating_instance
	{
		[Fact]
		public void throw_ArgumentException_when_IHttpClientFactory_is_null()
		{
			var options = Substitute.For<IOptions<AccuWeatherClientOptions>>();
			var logger = Substitute.For<ILogger<AccuWeatherClient>>();

			var ex = Assert.Throws<ArgumentNullException>(() => new AccuWeatherClient(null, options, logger));

			Assert.Equal("httpClientFactory", ex.ParamName);
		}

		[Fact]
		public void throw_ArgumentException_when_IOptions_is_null()
		{
			var httpClientFactory = Substitute.For<IHttpClientFactory>();
			var logger = Substitute.For<ILogger<AccuWeatherClient>>();

			var ex = Assert.Throws<ArgumentNullException>(() => new AccuWeatherClient(httpClientFactory, null, logger));

			Assert.Equal("options", ex.ParamName);
		}

		[Fact]
		public void throw_ArgumentException_when_ILogger_is_null()
		{
			var httpClientFactory = Substitute.For<IHttpClientFactory>();
			var options = Substitute.For<IOptions<AccuWeatherClientOptions>>();
			
			options.Value.Returns(new AccuWeatherClientOptions());

			var ex = Assert.Throws<ArgumentNullException>(() => new AccuWeatherClient(httpClientFactory, options, null));

			Assert.Equal("logger", ex.ParamName);
		}

		[Theory]
		[InlineData(null)]
		[InlineData("")]
		[InlineData(" ")]
		[InlineData("\n")]
		public void throw_ArgumentException_when_Options_Endpoint_is_IsNullOrWhiteSpace(string endpoint)
		{
			var httpClientFactory = Substitute.For<IHttpClientFactory>();
			var options = Substitute.For<IOptions<AccuWeatherClientOptions>>();
			var logger = Substitute.For<ILogger<AccuWeatherClient>>();

			options.Value.Returns(new AccuWeatherClientOptions { Endpoint = endpoint, ApiKey = "apikey" });

			var ex = Assert.Throws<ArgumentException>(() => new AccuWeatherClient(httpClientFactory, options, logger));

			Assert.Equal("Endpoint", ex.ParamName);
		}

		[Theory]
		[InlineData(null)]
		[InlineData("")]
		[InlineData(" ")]
		[InlineData("\n")]
		public void throw_ArgumentException_when_Options_ApiKey_is_IsNullOrWhiteSpace(string apiKey)
		{
			var httpClientFactory = Substitute.For<IHttpClientFactory>();
			var options = Substitute.For<IOptions<AccuWeatherClientOptions>>();
			var logger = Substitute.For<ILogger<AccuWeatherClient>>();

			options.Value.Returns(new AccuWeatherClientOptions { Endpoint = "endpoint", ApiKey = apiKey });

			var ex = Assert.Throws<ArgumentException>(() => new AccuWeatherClient(httpClientFactory, options, logger));

			Assert.Equal("ApiKey", ex.ParamName);
		}
	}
}
