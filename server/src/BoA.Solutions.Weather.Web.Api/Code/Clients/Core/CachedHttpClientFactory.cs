// ReSharper disable ClassNeverInstantiated.Global
namespace BoA.Solutions.Weather.Web.Api.Code.Clients.Core
{
	using System;
	using System.Collections.Concurrent;
	using System.Net.Http;
	using Core;

	public class CachedHttpClientFactory : IHttpClientFactory
	{
		private static readonly ConcurrentDictionary<string, HttpClient> Cache = new ConcurrentDictionary<string, HttpClient>();

		public HttpClient Create(string endpoint)
		{
			// no guards? We leave the enpoint validation to `new Uri(...)`

			// `.ToLower()` here might be questionable, we can talk about it, for now it is alright
			return Cache.GetOrAdd(endpoint.ToLower(), key => new HttpClient { BaseAddress = new Uri(key) });
		}
	}
}
