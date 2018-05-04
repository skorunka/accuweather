import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { LocationComponent } from './location.component';
import { FindCityComponent } from './find-city/find-city.component';
import { FindCityResultsComponent } from './find-city-results/find-city-results.component';
import { LocationService } from '../services/location.service';

describe('LocationComponent', () => {
	let component: LocationComponent;
	let fixture: ComponentFixture<LocationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, HttpClientTestingModule],
			declarations: [LocationComponent, FindCityComponent, FindCityResultsComponent],
			providers: [LocationService],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LocationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
