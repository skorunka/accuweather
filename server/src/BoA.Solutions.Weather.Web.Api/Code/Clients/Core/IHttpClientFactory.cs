namespace BoA.Solutions.Weather.Web.Api.Code.Clients.Core
{
	using System.Net.Http;

	public interface IHttpClientFactory
	{
		HttpClient GetForEndpoint(string endpoint);
	}
}
