import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import * as th from '../../../shared/test/helpers';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { LocationService } from '../services/location.service';
import { LocationPipe } from '../pipes/location.pipe';

import { CityDto } from '../../../_api/city.dto';
import { LocationComponent } from './location.component';
import { SearchTextComponent } from './search-text/search-text.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityListItemComponent } from './city-list-item/city-list-item.component';

describe('LocationComponent', () => {
	let component: LocationComponent;
	let fixture: ComponentFixture<LocationComponent>;
	let locationService: LocationService;
	const testCity: CityDto = {
		id: 'id', name: 'london', regionName: '',
		countryName: '', administrativeAreaName: '', administrativeAreaTypeName: ''
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
			declarations: [LocationComponent, SearchTextComponent, CityListComponent, CityListItemComponent, LocationPipe],
			providers: [LocationService],
		}).compileComponents();
		TestBed.overrideComponent(LocationComponent, { set: { host: { '(click)': 'OnPushFix' } } }).createComponent(LocationComponent);

		locationService = TestBed.get(LocationService);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LocationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should try to find city with provided text', () => {
		spyOn(locationService, 'findCities').and.returnValue(Observable.of([]));

		component.searchCity('text');

		expect(locationService.findCities).toHaveBeenCalledWith('text');
	});

	it('should use found cities', async(() => {
		spyOn(locationService, 'findCities').and.returnValue(Observable.of([testCity]));

		component.searchCity('text');

		expect(component.cities).toEqual([testCity]);
	}));

	it('should set working to true before search starts', () => {
		spyOn(locationService, 'findCities').and.callFake(x => {
			expect(component.working).toBeTruthy('workign is set to false');
			return Observable.of([]);
		});

		component.searchCity('text');
	});

	it('should reset error flag before search starts', () => {
		spyOn(locationService, 'findCities').and.callFake(x => {
			expect(component.wasError).toBeFalsy('error flag is set');
			return Observable.of([]);
		});
		component.wasError = true;

		component.searchCity('text');
	});

	it('should set error flag when error occured during search', () => {
		spyOn(locationService, 'findCities').and.returnValue(Observable.throw({ status: 500 }));

		component.searchCity('text');

		expect(component.wasError).toBeTruthy('error flag was not set');
	});

	it('should enable search button after search ends', async(() => {
		spyOn(locationService, 'findCities').and.returnValue(Observable.of([]));

		component.searchCity('text');

		fixture.whenStable().then(() => expect(component.working).toBeFalsy('working is set tu true'));
	}));

	it('should display error on error', () => {
		component.wasError = true;

		th.detectChangesInclPush(fixture);
		const cityItem = fixture.debugElement.query(By.css('div.alert.alert-danger'));

		expect(cityItem).toBeTruthy('error display was not found');
	});

	it('should not display error if there is no error', () => {
		const cityItem = fixture.debugElement.query(By.css('div.alert.alert-danger'));

		expect(cityItem).toBeFalsy('error display was found');
	});

	it('should empty existing cities on new city selection', () => {
		spyOn(component.citySelected, 'emit').and.callThrough();

		component.cities = [testCity];
		locationService.$citySelected.next(testCity);

		expect(component.cities).toBeNull();
	});

	it('should subscribe to selected city and emit', () => {
		spyOn(component.citySelected, 'emit').and.callThrough();

		locationService.$citySelected.next(testCity);

		expect(component.citySelected.emit).toHaveBeenCalledWith(testCity);
	});
});
