import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export abstract class ComponentBase implements OnDestroy {
	/**
	 * Universal container for subscriptions which are unsubscribed on component destroy.
	 */
	protected subscriptions: Subscription;

	public ngOnDestroy() {
		if (this.subscriptions != null) {
			this.subscriptions.unsubscribe();
		}
	}
}
