import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WeatherForecastService } from '../services/weather-forecast.service';
import { WeatherComponent } from './weather.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDayComponent } from './weather-day/weather-day.component';

describe('WeatherComponent', () => {
	let component: WeatherComponent;
	let fixture: ComponentFixture<WeatherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			declarations: [WeatherComponent, WeatherListComponent, WeatherDayComponent],
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
