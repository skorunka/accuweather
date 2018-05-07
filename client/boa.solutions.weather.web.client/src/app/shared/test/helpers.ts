import { ComponentFixture } from '@angular/core/testing';

/**
 * Make sure you configure the TestBed like:
 * 		TestBed.overrideComponent(<COMPONENT>, { set: { host: { '(click)': 'OnPushFix' } } }).createComponent(<COMPONENT>);
 * More info: https://github.com/angular/angular/issues/12313#issuecomment-263978801
 */
export const detectChangesInclPush = (fixture: ComponentFixture<any>) => {
	fixture.debugElement.triggerEventHandler('click', null); fixture.detectChanges();
	fixture.detectChanges();
};
