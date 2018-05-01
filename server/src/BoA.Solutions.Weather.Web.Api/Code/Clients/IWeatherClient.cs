namespace BoA.Solutions.Weather.Web.Api.Code.Clients
{
	using System.Threading.Tasks;

	public interface IWeatherClient
	{
		Task<string> FindLocationAsync(string text);

		Task<object> GetWeatherForecastForNext5Days(string locationId);
	}
}