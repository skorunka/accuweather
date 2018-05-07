import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListComponent } from './weather-list.component';
import { WeatherDayComponent } from '../weather-day/weather-day.component';
import { TemperaturePipe } from '../../pipes/temperature.pipe';

// NOTE: tests here would be pretty much same as tests in `city-list-item.component.spec.ts`. There would be nothing new to demonstrate.

describe('WeatherListComponent', () => {
	let component: WeatherListComponent;
	let fixture: ComponentFixture<WeatherListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WeatherListComponent, WeatherDayComponent, TemperaturePipe]
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
