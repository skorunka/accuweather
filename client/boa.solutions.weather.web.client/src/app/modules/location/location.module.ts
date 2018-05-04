import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocationService } from './services/location.service';
import { LocationComponent } from './components/location.component';
import { FindCityComponent } from './components/find-city/find-city.component';
import { FindCityResultsComponent } from './components/find-city-results/find-city-results.component';

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [LocationComponent, FindCityComponent, FindCityResultsComponent],
	exports: [LocationComponent],
	providers: [LocationService]
})
export class LocationModule { }
