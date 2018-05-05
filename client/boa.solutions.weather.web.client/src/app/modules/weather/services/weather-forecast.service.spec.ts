import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherForecastService } from './weather-forecast.service';

describe('WeatherForecastService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [WeatherForecastService]
		});
	});

	it('should be created', inject([WeatherForecastService], (service: WeatherForecastService) => {
		expect(service).toBeTruthy();
	}));
});
