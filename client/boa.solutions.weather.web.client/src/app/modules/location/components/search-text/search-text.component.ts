import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/** Presentational Component */
@Component({
	selector: 'app-search-text',
	templateUrl: './search-text.component.html',
	styleUrls: ['./search-text.component.scss']
})
export class SearchTextComponent implements OnInit {
	@Input('working')
	public working = false;

	@Input('placeholder')
	public placeholder: string;

	@Output('search')
	public search = new EventEmitter<string>();

	public text: string;

	constructor() { }

	public ngOnInit() { }

	public searchText() {
		if (!this.text) {
			return;
		}

		this.search.emit(this.text);
	}
}
