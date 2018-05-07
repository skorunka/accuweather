import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { CityDto } from '../../../../_api/city.dto';
import { LocationService } from '../../services/location.service';

/** Presentational Component */
@Component({
	selector: 'app-location-city-list-item',
	templateUrl: './city-list-item.component.html',
	styleUrls: ['./city-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityListItemComponent {
	@Input('city')
	public city: CityDto;

	constructor(private readonly _locationService: LocationService) { }

	public selectCity(selectedCity: CityDto) {
		if (!selectedCity) {
			return;
		}

		this._locationService.$citySelected.next(selectedCity);
	}
}
