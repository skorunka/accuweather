import { environment } from '../../../environments/environment';

export abstract class ApiServiceBase {
	protected constructor(private readonly _api: string, private readonly _resource: string = null) { }

	protected getApiUrl(action?: string) {
		if (!environment.endpoints[this._api]) {
			throw new Error(`Endpoint not defined for API '${this._api}'. Please, check the 'environment' configuration.`);
		}

		return environment.endpoints[this._api] + (this._resource || '') + (action || '');
	}
}
