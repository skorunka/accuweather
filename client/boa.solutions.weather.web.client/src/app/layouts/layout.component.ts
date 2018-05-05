import { Component, OnInit } from '@angular/core';

/** Container Component */
@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	public cityId: string;

	constructor() { }

	public ngOnInit() {
	}
}
