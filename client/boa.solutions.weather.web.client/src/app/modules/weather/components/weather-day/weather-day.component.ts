import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherForecastDto } from '../../../../_api/weatherForecast.dto';

/** Presentational Component */
@Component({
	selector: 'app-weather-day',
	templateUrl: './weather-day.component.html',
	styleUrls: ['./weather-day.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherDayComponent implements OnInit {
	@Input('weatherForecast')
	public weatherForecast: WeatherForecastDto;

	constructor() { }

	public ngOnInit() { }
}
