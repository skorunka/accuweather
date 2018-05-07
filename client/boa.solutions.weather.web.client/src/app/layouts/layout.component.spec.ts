import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LayoutComponent } from './layout.component';
import { LocationModule } from '../modules/location/location.module';
import { WeatherModule } from '../modules/weather/weather.module';

describe('LayoutComponent', () => {
	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [LocationModule, WeatherModule],
			declarations: [LayoutComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display weather component if city set', () => {
		component.city = { id: 'id', name: 'name', countryName: '', regionName: '', administrativeAreaName: '', administrativeAreaTypeName: '' };

		fixture.detectChanges();
		const weatherComponent = fixture.debugElement.query(By.css('app-weather'));

		expect(weatherComponent).toBeTruthy();
	});

	it('should not display weather component if city is not set', () => {
		const weatherComponent = fixture.debugElement.query(By.css('app-weather'));

		expect(weatherComponent).toBeFalsy();
	});
});
