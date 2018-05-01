// ReSharper disable ClassNeverInstantiated.Global
namespace BoA.Solutions.Weather.Web.Api.Code.Clients
{
	using System;
	using System.Collections.Generic;
	using System.Diagnostics.CodeAnalysis;
	using System.Linq;
	using System.Net.Http;
	using System.Threading.Tasks;
	using Core;
	using Microsoft.AspNetCore.WebUtilities;
	using Microsoft.Extensions.Logging;
	using Microsoft.Extensions.Options;
	using Models;
	using Newtonsoft.Json;

	public class AccuWeatherClient : IWeatherClient
	{
		private readonly IHttpClientFactory _httpClientFactory;
		private readonly ILogger<AccuWeatherClient> _logger;

		private readonly AccuWeatherClientOptions _options;

		#region ctor

		public AccuWeatherClient(IHttpClientFactory httpClientFactory, IOptions<AccuWeatherClientOptions> options, ILogger<AccuWeatherClient> logger)
		{
			this._httpClientFactory = httpClientFactory ?? throw new ArgumentNullException(nameof(httpClientFactory));
			this._options = options?.Value ?? throw new ArgumentNullException(nameof(options));
			this._logger = logger ?? throw new ArgumentNullException(nameof(logger));

			if (string.IsNullOrWhiteSpace(this._options.Endpoint))
			{
				throw new ArgumentException("Value cannot be null or whitespace.", nameof(AccuWeatherClientOptions.Endpoint));
			}

			if (string.IsNullOrWhiteSpace(this._options.ApiKey))
			{
				throw new ArgumentException("Value cannot be null or whitespace.", nameof(AccuWeatherClientOptions.ApiKey));
			}
		}

		#endregion

		public async Task<ICollection<CityModel>> FindCityAsync(string searchText)
		{
			if (string.IsNullOrWhiteSpace(searchText))
			{
				throw new ArgumentException("Value cannot be null or whitespace.", nameof(searchText));
			}

			var requestUri = QueryHelpers.AddQueryString("locations/v1/cities/search",
														new Dictionary<string, string>
														{
															["apikey"] = this._options.ApiKey,
															["q"] = searchText
														});

			var locations = await this.GetRequestResultAsync<LocationDto[]>(requestUri);

			return locations.Select(x => new CityModel
			{
				Id = x.Key,
				Name = x.EnglishName,
				RegionName = x.Region?.EnglishName,
				CountryName = x.Country?.EnglishName,
				AdministrativeAreaName = x.AdministrativeArea?.EnglishName,
				AdministrativeAreaTypeName = x.AdministrativeArea?.EnglishType
			}).ToList();
		}

		public async Task<ICollection<WeatherForecastModel>> GetWeatherForecastForNext5DaysInCity(string cityId)
		{
			if (string.IsNullOrWhiteSpace(cityId))
			{
				throw new ArgumentException("Value cannot be null or whitespace.", nameof(cityId));
			}

			var requestUri = QueryHelpers.AddQueryString($"forecasts/v1/daily/5day/{cityId}", new Dictionary<string, string> { ["apikey"] = this._options.ApiKey });

			var dailyForecasts = await this.GetRequestResultAsync<ForecastDto>(requestUri);

			return dailyForecasts.DailyForecasts?.Select(x => new WeatherForecastModel
			{
				Date = x.Date,
				TemperatureMin = x.Temperature?.Minimum?.Value,
				TemperatureMax = x.Temperature?.Maximum?.Value,
				// [FS] TODO: what if Minimum.Unit != Maximum.Unit -> that would mean bug in AccuWeather API I think
				TemperatureUnit = (x.Temperature?.Minimum?.Unit) ?? (x.Temperature?.Maximum?.Unit)
			}).ToList();
		}

		private async Task<T> GetRequestResultAsync<T>(string requestUri)
		{
			string requestResult;

			this._logger.LogInformation("Executing request: {requestUri}", requestUri);

			using (var response = await this.GetHttpClient().GetAsync(requestUri))
			{
				response.EnsureSuccessStatusCode();

				requestResult = await response.Content.ReadAsStringAsync();
			}

			this._logger.LogInformation("Response: {requestResult}", requestResult);

			return JsonConvert.DeserializeObject<T>(requestResult);
		}

		private HttpClient GetHttpClient()
		{
			var client = this._httpClientFactory.GetForEndpoint(this._options.Endpoint);
			return client;
		}

		[ExcludeFromCodeCoverage]
		internal class LocationDto
		{
			public string Key { get; set; }

			public string EnglishName { get; set; }

			public RegionDto Region { get; set; }

			public CountryDto Country { get; set; }

			public AdministrativeAreaDto AdministrativeArea { get; set; }

			internal class RegionDto
			{
				public string EnglishName { get; set; }
			}

			internal class CountryDto
			{
				public string EnglishName { get; set; }
			}

			internal class AdministrativeAreaDto
			{
				public string EnglishName { get; set; }

				public string EnglishType { get; set; }
			}
		}

		[ExcludeFromCodeCoverage]
		internal class ForecastDto
		{
			public DailyForecastDto[] DailyForecasts { get; set; }

			internal class DailyForecastDto
			{
				public DateTime Date { get; set; }

				public TemperatureDto Temperature { get; set; }

				internal class TemperatureDto
				{
					public TemperatureValueDto Minimum { get; set; }

					public TemperatureValueDto Maximum { get; set; }

					internal class TemperatureValueDto
					{
						public decimal? Value { get; set; }

						public string Unit { get; set; }
					}
				}
			}
		}
	}
}
