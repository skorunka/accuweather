import { Pipe, PipeTransform } from '@angular/core';
import { WeatherForecastDto } from '../../../_api/weatherForecast.dto';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {

	transform(value: WeatherForecastDto, args?: any): any {
		if (!value) {
			return '';
		}

		return `From ${value.temperatureMin} to ${value.temperatureMax} ${this.getUnitText(value.temperatureUnit)}`;
	}

	private getUnitText(unit: string) {
		if (unit == null) {
			return '';
		}

		switch (unit.toUpperCase()) {
			case 'C': return '℃';
			case 'F': return '℉';
			default: return unit;
		}
	}
}
