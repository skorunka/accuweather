import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FindCityComponent } from './find-city.component';

describe('FindCityComponent', () => {
	let component: FindCityComponent;
	let fixture: ComponentFixture<FindCityComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FindCityComponent],
			imports: [FormsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FindCityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should disable search button if no text is in search box', () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('button').disabled).toBeTruthy('search button is disabled');
	});

	it('should enable search button if any text is in search box', () => {
		component.searchText = 'text';
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('button').disabled).toBeFalsy('search button is enabled');
	});
});
