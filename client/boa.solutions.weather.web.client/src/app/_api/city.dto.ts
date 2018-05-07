/**
 * Location API. GET: /api/city/search?text=london
 */
export class CityDto {
	id: string;
	name: string;
	regionName: string;
	countryName: string;
	administrativeAreaName: string;
	administrativeAreaTypeName: string;
}
