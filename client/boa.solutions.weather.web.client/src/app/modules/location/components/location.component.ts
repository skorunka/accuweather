import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/finally';

import { CityDto } from '../../../_api/city.dto';
import { LocationService } from '../services/location.service';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
	@Output('citySelected')
	public citySelected = new EventEmitter<string>();

	public working = false;
	public cities: CityDto[];

	constructor(private readonly _locationService: LocationService) { }

	public ngOnInit() {
	}

	public searchCity(searchText: string) {
		this.working = true;

		this._locationService
			.findCities(searchText)
			.finally(() => this.working = false)
			.subscribe(result => this.cities = result);
	}
}
