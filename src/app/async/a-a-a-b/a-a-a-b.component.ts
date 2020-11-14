import { Component, 
ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-a-a-b',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">AAAB</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AAABComponent { }
