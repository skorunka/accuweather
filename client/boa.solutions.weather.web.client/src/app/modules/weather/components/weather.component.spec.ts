import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

describe('WeatherComponent', () => {
	let component: WeatherComponent;
	let fixture: ComponentFixture<WeatherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WeatherComponent, WeatherListComponent],
		})
			.compileComponents();
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
