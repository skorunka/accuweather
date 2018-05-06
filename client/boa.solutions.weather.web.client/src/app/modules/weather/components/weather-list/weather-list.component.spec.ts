import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListComponent } from './weather-list.component';
import { WeatherDayComponent } from '../weather-day/weather-day.component';

describe('WeatherListComponent', () => {
	let component: WeatherListComponent;
	let fixture: ComponentFixture<WeatherListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WeatherListComponent, WeatherDayComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
