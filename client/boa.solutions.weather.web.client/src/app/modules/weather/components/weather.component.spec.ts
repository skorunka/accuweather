import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LocationModule } from '../../location/location.module';
import { WeatherComponent } from './weather.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDayComponent } from './weather-day/weather-day.component';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { TemperaturePipe } from '../pipes/temperature.pipe';

// NOTE: tests here would be pretty much same as tests in `location.component.spec.ts`. There would be nothing new to demonstrate.

describe('WeatherComponent', () => {
	let component: WeatherComponent;
	let fixture: ComponentFixture<WeatherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule, LocationModule],
			declarations: [WeatherComponent, WeatherListComponent, WeatherDayComponent, TemperaturePipe],
			providers: [WeatherForecastService]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
