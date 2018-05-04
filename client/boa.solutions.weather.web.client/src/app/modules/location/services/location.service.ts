import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiServiceBase } from '../../../shared/services/serviceApiBase';

import { CityDto } from '../../../_api/city.dto';

@Injectable()
export class LocationService extends ApiServiceBase {
	constructor(private readonly _http: HttpClient) {
		super('search');
	}

	public findCities(searchText: string): Observable<CityDto[]> {
		const httpParams = new HttpParams().set('text', searchText);
		return this._http.get<CityDto[]>(this.getApiUrl('/city/search'), { params: httpParams });
	}
}
