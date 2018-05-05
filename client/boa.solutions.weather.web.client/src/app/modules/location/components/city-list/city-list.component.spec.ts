import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { CityListComponent } from './city-list.component';
import { CityListItemComponent } from '../city-list-item/city-list-item.component';

describe('CityListComponent', () => {
	let component: CityListComponent;
	let fixture: ComponentFixture<CityListComponent>;
	const testCity = { id: 'id', name: 'london', regionName: '', countryName: '', administrativeAreaName: '', administrativeAreaTypeName: '' };

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [CityListComponent, CityListItemComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CityListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display `no result` alert if result is empty', () => {
		component.cities = [];

		fixture.detectChanges();
		const noResult = fixture.debugElement.query(By.css('div.alert'));

		expect(noResult).toBeTruthy();
	});

	it('should not display `no results` alert if result is not empty', () => {
		component.cities = [testCity];

		fixture.detectChanges();
		const noResult = fixture.debugElement.query(By.css('div.alert'));

		expect(noResult == null).toBeTruthy();
	});

	it('should not display `no results` alert if no results were yet provided', () => {
		component.cities = undefined;

		fixture.detectChanges();
		const noResult = fixture.debugElement.query(By.css('div.alert'));

		expect(noResult == null).toBeTruthy();
	});

	it('should display provided results', () => {
		component.cities = [testCity, testCity];

		fixture.detectChanges();
		const citiyComponents = fixture.debugElement.queryAll(By.css('app-location-city-list-item'));

		expect(citiyComponents.length).toBe(2);
		// we could also check here if we pass city to a corresponsing component
	});

	it('should not display empty result', () => {
		component.cities = [];

		fixture.detectChanges();
		const cityList = fixture.debugElement.query(By.css('ul'));

		expect(cityList == null).toBeTruthy();
	});

	it('should not display result when working', () => {
		component.cities = [testCity];
		component.working = true;

		fixture.detectChanges();
		const cityList = fixture.debugElement.query(By.css('ul'));

		expect(cityList == null).toBeTruthy();
	});
});
