import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationModule } from './modules/location/location.module';
import { WeatherModule } from './modules/weather/weather.module';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout.component';

@NgModule({
	declarations: [AppComponent, LayoutComponent],
	imports: [BrowserModule, AppRoutingModule, LocationModule, WeatherModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
