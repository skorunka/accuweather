import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import * as th from '../../../../shared/test/helpers';

import { CityDto } from '../../../../_api/city.dto';
import { CityListItemComponent } from './city-list-item.component';
import { LocationService } from '../../services/location.service';
import { LocationPipe } from '../../pipes/location.pipe';

describe('CityListItemComponent', () => {
	let component: CityListItemComponent;
	let fixture: ComponentFixture<CityListItemComponent>;
	const testCity: CityDto = {
		id: 'id', name: 'london', regionName: '',
		countryName: '', administrativeAreaName: '', administrativeAreaTypeName: ''
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			declarations: [CityListItemComponent, LocationPipe],
			providers: [LocationService]
		}).compileComponents();
		TestBed.overrideComponent(CityListItemComponent, { set: { host: { '(click)': 'OnPushFix' } } }).createComponent(CityListItemComponent);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CityListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should not display city if city was not set', () => {
		const cityItem = fixture.debugElement.query(By.css('li'));

		expect(cityItem).toBeFalsy('city item was found');
	});

	it('should select city on item click', async(() => {
		component.city = testCity;
		th.detectChangesInclPush(fixture);

		const cityItemSelector = fixture.debugElement.query(By.css('a'));
		cityItemSelector.triggerEventHandler('click', testCity);

		fixture.whenStable().then(() => expect(component.city).toBe(testCity));
	}));
});
