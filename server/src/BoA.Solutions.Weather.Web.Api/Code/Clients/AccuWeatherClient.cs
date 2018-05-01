namespace BoA.Solutions.Weather.Web.Api.Code.Clients
{
	using System;
	using System.Net.Http;
	using System.Threading.Tasks;
	using Core;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.Logging;

	public class AccuWeatherClient : IWeatherClient
	{
		private readonly HttpClient _client;
		private readonly string _apiKey;
		private readonly ILogger<AccuWeatherClient> _logger;

		public AccuWeatherClient(IHttpClientFactory httpClientFactory, IConfiguration config, ILogger<AccuWeatherClient> logger)
		{
			const string endpoint = "https://api.simplecast.com";

			this._client = httpClientFactory.Create(endpoint);
			this._apiKey = config[$"{nameof(AccuWeatherClient)}:SimpleCastAPIKey"];
			this._logger = logger;
		}

		public Task<string> FindLocationAsync(string text)
		{
			throw new NotImplementedException();
			//try
			//{
			//	var episodesUrl = new Uri($"/v1/podcasts/shownum/episodes.json?api_key={this._apiKey}", UriKind.Relative);
			//	this._logger.LogWarning($"HttpClient: Loading {episodesUrl}");
			//	var res = await this._client.GetAsync(episodesUrl);
			//	res.EnsureSuccessStatusCode();
			//	return await res.Content.ReadAsAsync<List<Show>>();
			//}
			//catch (HttpRequestException ex)
			//{
			//	this._logger.LogError($"An error occurred connecting to AccuWeatherClient API: {ex}");
			//	throw;
			//}
		}

		public Task<object> GetWeatherForecastForNext5Days(string locationId)
		{
			throw new NotImplementedException();
		}
	}
}