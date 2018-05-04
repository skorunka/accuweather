import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../services/location.service';
import 'rxjs/add/operator/finally';

@Component({
	selector: 'app-location-find-city',
	templateUrl: './find-city.component.html',
	styleUrls: ['./find-city.component.scss']
})
export class FindCityComponent implements OnInit {
	@Output('searchCityResult') public searchCityResult = new EventEmitter<any[]>();

	public working = false;
	public searchText: string;

	constructor(private readonly _locationService: LocationService) { }

	public ngOnInit() { }

	public search() {
		this.working = true;

		this._locationService
			.findCities(this.searchText)
			.finally(() => this.working = false)
			.subscribe(result => this.searchCityResult.emit(result));
	}
}
