import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/finally';

import { WeatherForecastDto } from '../../../_api/weatherForecast.dto';
import { WeatherForecastService } from '../services/weather-forecast.service';

/** Container/Smart Component */
@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
	@Input('cityId')
	public get cityId(): string {
		return this._cityId;
	}
	public set cityId(value: string) {
		this._cityId = value;

		this.getForecast();
	}

	public working = false;
	public forecast: WeatherForecastDto[];

	private _cityId: string;

	constructor(private readonly _weatherForecastService: WeatherForecastService) { }

	public ngOnInit() {
	}

	public getForecast() {
		this.working = true;

		this._weatherForecastService
			.getForecastFor5DaysInCity(this._cityId)
			.finally(() => this.working = false)
			.subscribe(result => this.forecast = result);
	}
}
