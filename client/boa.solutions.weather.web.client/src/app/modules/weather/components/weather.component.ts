import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/finally';

import { WeatherForecastDto } from '../../../_api/weatherForecast.dto';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { CityDto } from '../../../_api/city.dto';

/** Smart/Container Component */
@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
	@Input('city')
	public get city(): CityDto {
		return this._city;
	}
	public set city(value: CityDto) {
		this._city = value;

		this.getForecast(this._city);
	}

	public working = false;
	public wasError = false;
	public weatherForecasts: WeatherForecastDto[];

	private _city: CityDto;

	constructor(private readonly _weatherForecastService: WeatherForecastService) { }

	public getForecast(city: CityDto) {
		if (!city) {
			this.weatherForecasts = null;
			return;
		}

		this.working = true;
		this.wasError = false;

		this._weatherForecastService
			.getForecastFor5DaysInCity(city.id)
			.finally(() => this.working = false)
			.subscribe(result => this.weatherForecasts = result, err => this.wasError = true);
	}
}
