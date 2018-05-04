import { Component, OnInit, Input } from '@angular/core';

import { CityDto } from '../../../../_api/city.dto';

@Component({
	selector: 'app-location-find-city-results',
	templateUrl: './find-city-results.component.html',
	styleUrls: ['./find-city-results.component.scss']
})
export class FindCityResultsComponent implements OnInit {
	@Input('working')
	public working = false;

	@Input('cities')
	public cities: CityDto[];

	constructor() { }

	public ngOnInit() {
	}
}
