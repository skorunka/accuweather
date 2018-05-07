import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { CityDto } from '../../../../_api/city.dto';

/** Presentational Component */
@Component({
	selector: 'app-location-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityListComponent {
	@Input('working')
	public working = false;

	@Input('cities')
	public cities: CityDto[];
}
