import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCityResultsComponent } from './find-city-results.component';

describe('FindCityResultsComponent', () => {
	let component: FindCityResultsComponent;
	let fixture: ComponentFixture<FindCityResultsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FindCityResultsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FindCityResultsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
