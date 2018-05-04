import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
	selector: 'app-location-find-city',
	templateUrl: './find-city.component.html',
	styleUrls: ['./find-city.component.scss']
})
export class FindCityComponent implements OnInit {
	@Output('searchCityResult') public searchCityResult = new EventEmitter<any[]>();

	public searchText: string;

	constructor(private readonly _locationService: LocationService) { }

	public ngOnInit() { }

	public search() {
		this._locationService
			.findCities(this.searchText)
			.subscribe(result => this.searchCityResult.emit(result));
	}
}
