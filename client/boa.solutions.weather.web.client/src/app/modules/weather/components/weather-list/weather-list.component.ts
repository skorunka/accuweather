import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherForecastDto } from '../../../../_api/weatherForecast.dto';

/** Presentational Component */
@Component({
	selector: 'app-weather-list',
	templateUrl: './weather-list.component.html',
	styleUrls: ['./weather-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherListComponent implements OnInit {
	@Input('weatherForecasts') public weatherForecasts: WeatherForecastDto[];

	constructor() { }

	public ngOnInit() { }
}
