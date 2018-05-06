import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/finally';

import { WeatherForecastDto } from '../../../_api/weatherForecast.dto';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { CityDto } from '../../../_api/city.dto';

/** Container/Smart Component */
@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
	@Input('city')
	public get city(): CityDto {
		return this._city;
	}
	public set city(value: CityDto) {
		this._city = value;

		this.getForecast(this._city);
	}

	public working = false;
	public weatherForecasts: WeatherForecastDto[];

	private _city: CityDto;

	constructor(private readonly _weatherForecastService: WeatherForecastService) { }

	public ngOnInit() { }

	public getForecast(city: CityDto) {
		if (!city) {
			this.weatherForecasts = null;
			return;
		}

		this.working = true;

		this._weatherForecastService
			.getForecastFor5DaysInCity(city.id)
			.finally(() => this.working = false)
			.subscribe(result => this.weatherForecasts = result);
	}
}
