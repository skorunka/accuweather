import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';

import { SearchTextComponent } from './search-text.component';

describe('SearchTextComponent', () => {
	let component: SearchTextComponent;
	let fixture: ComponentFixture<SearchTextComponent>;

	const searchButton = () => fixture.debugElement.nativeElement.querySelector('button');

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [SearchTextComponent],
		}).compileComponents();
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

		fixture.detectChanges();
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

		fixture.detectChanges();
		const button = searchButton();

		expect(button.disabled).toBeFalsy('search button is disabled');
	});

	it('should emit text on search button click', async(() => {
		spyOn(component, 'searchText').and.callThrough();
		component.text = 'text';
		let emitedText;
		component.search.subscribe(x => emitedText = x);

		fixture.detectChanges();
		const button = searchButton();
		button.click();

		fixture.whenStable().then(() => {
			expect(component.searchText).toHaveBeenCalled();
			expect(emitedText).toEqual('text');
		});
	}));
});
