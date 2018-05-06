import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { LocationService } from '../services/location.service';
import { LocationPipe } from '../pipes/location.pipe';

import { LocationComponent } from './location.component';
import { SearchTextComponent } from './search-text/search-text.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityListItemComponent } from './city-list-item/city-list-item.component';

describe('LocationComponent', () => {
	let component: LocationComponent;
	let fixture: ComponentFixture<LocationComponent>;
	let locationService: LocationService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
			declarations: [LocationComponent, SearchTextComponent, CityListComponent, CityListItemComponent, LocationPipe],
			providers: [LocationService],
		}).compileComponents();

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
		const city = { id: 'id', name: 'london', regionName: '', countryName: '', administrativeAreaName: '', administrativeAreaTypeName: '' };
		spyOn(locationService, 'findCities').and.returnValue(Observable.of([city]));

		component.searchCity('text');

		expect(component.cities).toEqual([city]);
	}));

	it('should set working to true before search starts', () => {
		spyOn(locationService, 'findCities').and.callFake(x => {
			expect(component.working).toBeTruthy('workign is set to false');
			return Observable.of([]);
		});

		component.searchCity('text');
	});

	it('should enable search button after search ends', async(() => {
		spyOn(locationService, 'findCities').and.returnValue(Observable.of([]));

		component.searchCity('text');

		fixture.whenStable().then(() => expect(component.working).toBeFalsy('working is set tu true'));
	}));
});
