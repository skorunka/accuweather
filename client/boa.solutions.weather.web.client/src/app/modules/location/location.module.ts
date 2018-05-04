import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LocationService } from './services/location.service';
import { LocationComponent } from './components/location.component';
import { SearchTextComponent } from './components/search-text/search-text.component';
import { FindCityResultsComponent } from './components/find-city-results/find-city-results.component';

@NgModule({
	imports: [CommonModule, FormsModule, HttpClientModule],
	declarations: [LocationComponent, SearchTextComponent, FindCityResultsComponent],
	exports: [LocationComponent],
	providers: [LocationService]
})
export class LocationModule { }
