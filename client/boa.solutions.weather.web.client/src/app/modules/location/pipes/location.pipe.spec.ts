import { LocationPipe } from './location.pipe';

describe('LocationPipe', () => {
	it('create an instance', () => {
		const pipe = new LocationPipe();
		expect(pipe).toBeTruthy();
	});

	it('return empty string if city is not set', () => {
		const pipe = new LocationPipe();
		expect(pipe.transform(null)).toEqual('');
	});

	it('return formatted city', () => {
		const pipe = new LocationPipe();
		expect(pipe.transform({
			id: null, name: 'CITY_NAME',
			countryName: 'COUNTRY_NAME', regionName: 'REGION_NAME', administrativeAreaName: 'ADMIN_NAME', administrativeAreaTypeName: 'ADMIN_TYPE'
		})).toEqual('CITY_NAME (COUNTRY_NAME, REGION_NAME, ADMIN_NAME ADMIN_TYPE)');
	});
});
