import { Pipe, PipeTransform } from '@angular/core';
import { WeatherForecastDto } from '../../../_api/weatherForecast.dto';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {

	transform(value: WeatherForecastDto, args?: any): any {
		if (!value) {
			return '';
		}

		return `From ${value.temperatureMin} to ${value.temperatureMax} ${value.temperatureUnit}`;
	}
}
