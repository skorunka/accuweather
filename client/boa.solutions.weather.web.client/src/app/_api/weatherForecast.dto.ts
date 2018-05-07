/**
 * Weather API. GET: /api/weather-forecast/5day/2103794
 */
export class WeatherForecastDto {
	date: string;
	temperatureMin?: number;
	temperatureMax?: number;
	temperatureUnit: string;
}
