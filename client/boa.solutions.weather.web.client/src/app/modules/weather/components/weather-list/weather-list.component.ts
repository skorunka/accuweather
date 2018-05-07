import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherForecastDto } from '../../../../_api/weatherForecast.dto';

/** Presentational Component */
@Component({
	selector: 'app-weather-list',
	templateUrl: './weather-list.component.html',
	styleUrls: ['./weather-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherListComponent {
	@Input('weatherForecasts') public weatherForecasts: WeatherForecastDto[];
}
