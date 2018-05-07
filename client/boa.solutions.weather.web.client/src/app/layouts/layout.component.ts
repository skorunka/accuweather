import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ComponentBase } from '../shared/components/base.component';
import { CityDto } from '../_api/city.dto';

/** Router Component */
@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends ComponentBase {
	public city: CityDto;

	public citySelected(city: CityDto) {
		this.city = city;
	}
}
