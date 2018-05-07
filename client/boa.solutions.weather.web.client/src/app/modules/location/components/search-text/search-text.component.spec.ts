import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import * as th from '../../../../shared/test/helpers';
import 'rxjs/add/observable/of';

import { SearchTextComponent } from './search-text.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('SearchTextComponent', () => {
	let component: SearchTextComponent;
	let fixture: ComponentFixture<SearchTextComponent>;

	const searchButton = () => fixture.debugElement.nativeElement.querySelector('button');
	const textInput = () => fixture.debugElement.nativeElement.querySelector('input');

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [SearchTextComponent],
		}).compileComponents();
		TestBed.overrideComponent(SearchTextComponent, { set: { host: { '(click)': 'OnPushFix' } } }).createComponent(SearchTextComponent);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should disable search button if no text is in search box', () => {
		component.text = '';

		fixture.detectChanges();
		const button = searchButton();

		expect(button.disabled).toBeTruthy('search button is enabled');
	});

	it('should enable search button if any text is in search box', () => {
		component.text = 'text';

		th.detectChangesInclPush(fixture);
		const button = searchButton();

		expect(button.disabled).toBeFalsy('search button is disabled');
	});

	it('should disable search button when is busy', () => {
		component.text = 'text';
		component.working = true;

		fixture.detectChanges();
		const button = searchButton();

		expect(button.disabled).toBeTruthy('search button is enabled');
	});

	it('should enable search button when is not busy', () => {
		component.text = 'text';
		component.working = false;

		th.detectChangesInclPush(fixture);
		const button = searchButton();

		expect(button.disabled).toBeFalsy('search button is disabled');
	});

	it('should not emit text if text is not set', () => {
		spyOn(component.search, 'emit');
		component.text = undefined;

		component.searchText();

		expect(component.search.emit).not.toHaveBeenCalled();
	});

	it('should not emit text if text is empty', () => {
		spyOn(component.search, 'emit');
		component.text = '';

		component.searchText();

		expect(component.search.emit).not.toHaveBeenCalled();
	});

	it('should emit text on search button click', async(() => {
		spyOn(component, 'searchText').and.callThrough();
		component.text = 'text';
		let emitedText;
		component.search.subscribe(x => emitedText = x);

		th.detectChangesInclPush(fixture);
		const button = searchButton();
		button.click();

		fixture.whenStable().then(() => {
			expect(component.searchText).toHaveBeenCalled();
			expect(emitedText).toEqual('text');
		});
	}));

	it('should start search on enter key press on text box', fakeAsync(() => {
		spyOn(component, 'searchText');
		component.text = 'text';

		fixture.detectChanges();
		tick(1);

		const input = textInput();
		input.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }));

		tick(1);

		fixture.whenStable().then(() => expect(component.searchText).toHaveBeenCalled());
	}));
});
