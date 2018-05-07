import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

/** Presentational Component */
@Component({
	selector: 'app-search-text',
	templateUrl: './search-text.component.html',
	styleUrls: ['./search-text.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTextComponent {
	@Input('working')
	public working = false;

	@Input('placeholder')
	public placeholder: string;

	@Output('search')
	public search = new EventEmitter<string>();

	public text: string;

	public searchText() {
		if (!this.text) {
			return;
		}

		this.search.emit(this.text);
	}
}
