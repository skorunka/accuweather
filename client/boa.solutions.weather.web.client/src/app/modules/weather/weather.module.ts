import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocationModule } from '../location/location.module';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherForecastService } from './services/weather-forecast.service';
import { WeatherComponent } from './components/weather.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherDayComponent } from './components/weather-day/weather-day.component';
import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
	imports: [CommonModule, HttpClientModule, WeatherRoutingModule, LocationModule],
	declarations: [WeatherComponent, WeatherListComponent, WeatherDayComponent, TemperaturePipe],
	exports: [WeatherComponent, TemperaturePipe],
	providers: [WeatherForecastService]
})
export class WeatherModule { }
