import { Component, OnInit } from '@angular/core';

import { CityDto } from '../_api/city.dto';

/** Container Component */
@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	public city: CityDto;

	constructor() { }

	public ngOnInit() { }

	public citySelected(city: CityDto) {
		this.city = city;
	}
}
