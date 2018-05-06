import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDayComponent } from './weather-day.component';
import { TemperaturePipe } from '../../pipes/temperature.pipe';

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
