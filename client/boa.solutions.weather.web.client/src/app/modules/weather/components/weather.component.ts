import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
	@Input('selectedLocationId')
	public selectedLocationId: string;

	constructor() { }

	public ngOnInit() {
	}
}
