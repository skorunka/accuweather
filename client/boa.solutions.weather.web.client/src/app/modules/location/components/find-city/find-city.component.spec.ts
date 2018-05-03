import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCityComponent } from './find-city.component';

describe('FindCityComponent', () => {
	let component: FindCityComponent;
	let fixture: ComponentFixture<FindCityComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FindCityComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FindCityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
