import { Component, OnInit, Input } from '@angular/core';
import { CityDto } from '../../../../_api/city.dto';

@Component({
	selector: 'app-location-city-list-item',
	templateUrl: './city-list-item.component.html',
	styleUrls: ['./city-list-item.component.scss']
})
export class CityListItemComponent implements OnInit {
	@Input('city')
	public city: CityDto;

	constructor() { }

	public ngOnInit() {
	}
}
