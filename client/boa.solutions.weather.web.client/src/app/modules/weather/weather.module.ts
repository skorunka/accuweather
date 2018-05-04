import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherComponent } from './components/weather.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherDayComponent } from './components/weather-day/weather-day.component';

@NgModule({
	imports: [CommonModule, HttpClientModule, WeatherRoutingModule],
	declarations: [WeatherComponent, WeatherListComponent, WeatherDayComponent],
	exports: [WeatherComponent]
})
export class WeatherModule { }
