import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	public selectedLocationId: string;

	constructor() { }

	public ngOnInit() {
	}
}
