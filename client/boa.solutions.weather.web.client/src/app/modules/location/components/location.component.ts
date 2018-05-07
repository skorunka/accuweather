import { Component, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/finally';

import { ComponentBase } from '../../../shared/components/base.component';

import { CityDto } from '../../../_api/city.dto';
import { LocationService } from '../services/location.service';
import { Subscription } from 'rxjs/Subscription';

/** Smart/Router Component */
@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss']
})
export class LocationComponent extends ComponentBase {
	@Output('citySelected')
	public citySelected = new EventEmitter<CityDto>();

	public working = false;
	public wasError = false;
	public cities: CityDto[];

	constructor(private readonly _locationService: LocationService) {
		super();
		this.subscriptions = this._locationService.$citySelected.subscribe(city => {
			this.cities = null;
			this.citySelected.emit(city);
		});
	}

	public searchCity(searchText: string) {
		this.working = true;
		this.wasError = false;

		this._locationService
			.findCities(searchText)
			.finally(() => this.working = false)
			.subscribe(result => this.cities = result, err => this.wasError = true);
	}
}
