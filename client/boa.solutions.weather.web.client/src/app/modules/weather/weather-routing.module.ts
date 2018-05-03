import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './components/weather.component';

const routes: Routes = [
	{ path: '5days-forecast/{locationId}', component: WeatherComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [],
})
export class WeatherRoutingModule { }
