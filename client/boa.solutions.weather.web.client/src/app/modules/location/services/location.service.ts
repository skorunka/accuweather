import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiServiceBase } from '../../../shared/services/serviceApiBase';

import { SearchCityResultDto } from '../../../_api/searchCityResult.dto';

@Injectable()
export class LocationService extends ApiServiceBase {
	constructor(private readonly _http: HttpClient) {
		super('search');
	}

	public findCities(searchText: string): Observable<SearchCityResultDto[]> {
		const httpParams = new HttpParams().set('text', searchText);
		return this._http.get<SearchCityResultDto[]>(this.getApiUrl('/city/search'), { params: httpParams });
	}
}
