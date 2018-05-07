import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WeatherDayComponent } from './weather-day.component';
import { TemperaturePipe } from '../../pipes/temperature.pipe';

// NOTE: tests here would be pretty much same as tests in `city-list.component.spec.ts`. There would be nothing new to demonstrate.

describe('WeatherDayComponent', () => {
	let component: WeatherDayComponent;
	let fixture: ComponentFixture<WeatherDayComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WeatherDayComponent, TemperaturePipe]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherDayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
