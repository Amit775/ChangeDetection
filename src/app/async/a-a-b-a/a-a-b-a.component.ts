import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-a-b-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">AABA</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AABAComponent { }
