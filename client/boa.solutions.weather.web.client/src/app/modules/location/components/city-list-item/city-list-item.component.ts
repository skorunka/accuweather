import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CityDto } from '../../../../_api/city.dto';

/** Presentational Component */
@Component({
	selector: 'app-location-city-list-item',
	templateUrl: './city-list-item.component.html',
	styleUrls: ['./city-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityListItemComponent implements OnInit {
	@Input('city')
	public city: CityDto;

	constructor() { }

	public ngOnInit() {
	}
}
