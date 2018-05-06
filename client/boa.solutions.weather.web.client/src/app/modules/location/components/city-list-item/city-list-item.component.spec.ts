import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CityListItemComponent } from './city-list-item.component';
import { LocationService } from '../../services/location.service';
import { LocationPipe } from '../../pipes/location.pipe';

describe('CityListItemComponent', () => {
	let component: CityListItemComponent;
	let fixture: ComponentFixture<CityListItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			declarations: [CityListItemComponent, LocationPipe],
			providers: [LocationService]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CityListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
