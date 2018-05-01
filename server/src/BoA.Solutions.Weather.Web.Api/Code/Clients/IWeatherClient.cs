namespace BoA.Solutions.Weather.Web.Api.Code.Clients
{
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using Models;

	public interface IWeatherClient
	{
		Task<ICollection<CityModel>> FindCityAsync(string searchText);

		Task<ICollection<WeatherForecastModel>> GetWeatherForecastForNext5DaysInCity(string cityId);
	}
}
