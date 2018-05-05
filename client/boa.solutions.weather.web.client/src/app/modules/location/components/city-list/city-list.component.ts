import { Component, OnInit, Input } from '@angular/core';

import { CityDto } from '../../../../_api/city.dto';

@Component({
	selector: 'app-location-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
	@Input('working')
	public working = false;

	@Input('cities')
	public cities: CityDto[];

	constructor() { }

	public ngOnInit() { }
}
