// ReSharper disable ClassNeverInstantiated.Global
namespace BoA.Solutions.Weather.Web.Api.Code.Clients.Core
{
	using System;
	using System.Collections.Concurrent;
	using System.Net.Http;

	public class CachedHttpClientFactory : IHttpClientFactory
	{
		private static readonly ConcurrentDictionary<string, HttpClient> Cache = new ConcurrentDictionary<string, HttpClient>();

		public HttpClient GetForEndpoint(string endpoint)
		{
			// [FS] NOTE: no guards? We leave the enpoint validation to `new Uri(...)`

			// [FS] NOTE: `.ToLower()` here might be questionable, we can discuss ...
			return Cache.GetOrAdd(endpoint.ToLower(), key => new HttpClient { BaseAddress = new Uri(key) });
		}
	}
}
