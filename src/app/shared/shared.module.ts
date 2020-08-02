import { NgModule } from '@angular/core';

import { ToggleOnCheckDirective } from './toggle-on-check.directive';

@NgModule({
	declarations: [ToggleOnCheckDirective],
	exports: [ToggleOnCheckDirective]
})
export class SharedModule { }
