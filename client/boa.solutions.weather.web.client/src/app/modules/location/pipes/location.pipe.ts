import { Pipe, PipeTransform } from '@angular/core';
import { CityDto } from '../../../_api/city.dto';

@Pipe({ name: 'location' })
export class LocationPipe implements PipeTransform {

	public transform(city: CityDto, args?: any): any {
		if (!city) {
			return '';
		}

		return city.name + ` (${city.countryName}, ${city.regionName}, ${city.administrativeAreaName} ${city.administrativeAreaTypeName})`;
	}
}
