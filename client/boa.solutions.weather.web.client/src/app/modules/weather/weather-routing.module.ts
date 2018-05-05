import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './components/weather.component';

const routes: Routes = [
	{ path: 'weather/{cityName}/{cityId}', component: WeatherComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [],
})
export class WeatherRoutingModule { }
