// ReSharper disable InconsistentNaming
// ReSharper disable Element must begin with upper-case letter
namespace BoA.Solutions.Weather.Web.Api.UnitTests.Core.CachedHttpClientFactory
{
	using Code.Clients.Core;
	using Xunit;

	public class when_getting_HttpClient_for_endpoint
	{
		[Fact]
		public void cache_created_HttpClient()
		{
			var factory = new CachedHttpClientFactory() as IHttpClientFactory;

			var client1 = factory.GetForEndpoint("http://wwww.bankofamerica.com");
			var client2 = factory.GetForEndpoint("http://wwww.bankofamerica.com");
			var client3 = factory.GetForEndpoint("http://wwww.google.com");

			Assert.Same(client1, client2);
			Assert.NotSame(client1, client3);
			Assert.NotSame(client2, client3);
		}

		[Fact]
		public void set_the_HttpClient_BaseAddress_to_provided_Endpoint()
		{
			var factory = new CachedHttpClientFactory() as IHttpClientFactory;

			var client = factory.GetForEndpoint("http://wwww.bankofamerica.com");

			Assert.Equal("http://wwww.bankofamerica.com/", client.BaseAddress.ToString());
		}
	}
}
