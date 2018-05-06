import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiServiceBase } from '../../../shared/services/serviceApiBase';

import { WeatherForecastDto } from '../../../_api/weatherForecast.dto';

@Injectable()
export class WeatherForecastService extends ApiServiceBase {
	constructor(private readonly _http: HttpClient) {
		super('weather', '/weather-forecast');
	}

	public getForecastFor5DaysInCity(cityId: string): Observable<WeatherForecastDto[]> {
		return this._http.get<WeatherForecastDto[]>(this.getApiUrl(`/5day/${cityId}`));
	}
}
