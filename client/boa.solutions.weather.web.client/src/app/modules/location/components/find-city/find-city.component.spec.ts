import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FindCityComponent } from './find-city.component';
import { LocationService } from '../../services/location.service';

describe('FindCityComponent', () => {
	let component: FindCityComponent;
	let fixture: ComponentFixture<FindCityComponent>;
	let locationService: LocationService;

	const searchButton = () => fixture.debugElement.nativeElement.querySelector('button');

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, HttpClientTestingModule],
			declarations: [FindCityComponent],
			providers: [LocationService]
		}).compileComponents();

		locationService = TestBed.get(LocationService);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FindCityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should disable search button if no text is in search box', () => {
		component.searchText = '';

		fixture.detectChanges();
		const button = searchButton();

		expect(button.disabled).toBeTruthy('search button is not disabled');
	});

	it('should enable search button if any text is in search box', () => {
		component.searchText = 'text';

		fixture.detectChanges();
		const button = searchButton();

		expect(button.disabled).toBeFalsy('search button is not enabled');
	});

	it('should try to find city on search button click', async(() => {
		spyOn(component, 'search');
		component.searchText = 'text';

		fixture.detectChanges();
		const button = searchButton();
		button.click();

		fixture.whenStable().then(() => expect(component.search).toHaveBeenCalled());
	}));

	it('should try to find city with text provided in search box', () => {
		spyOn(locationService, 'findCities').and.returnValue(Observable.of({}));

		component.searchText = 'text';
		component.search();

		expect(locationService.findCities).toHaveBeenCalledWith('text');
	});

	it('should emit found cities', async(() => {
		spyOn(locationService, 'findCities').and.returnValue(Observable.of([{ id: 1, name: 'london' }]));

		let foundCities;
		component.searchCityResult.subscribe(result => foundCities = result);

		component.searchText = 'text';
		component.search();

		fixture.whenStable().then(() => expect(foundCities).toEqual([{ id: 1, name: 'london' }]));
	}));
});
