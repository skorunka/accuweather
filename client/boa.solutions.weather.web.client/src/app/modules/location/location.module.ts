import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LocationComponent } from './components/location.component';
import { SearchTextComponent } from './components/search-text/search-text.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityListItemComponent } from './components/city-list-item/city-list-item.component';
import { LocationService } from './services/location.service';
import { LocationPipe } from './pipes/location.pipe';

@NgModule({
	imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
	declarations: [LocationComponent, SearchTextComponent, CityListComponent, CityListItemComponent, LocationPipe],
	exports: [LocationComponent, LocationPipe],
	providers: [LocationService]
})
export class LocationModule { }
