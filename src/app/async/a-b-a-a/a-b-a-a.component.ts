import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-b-a-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">ABAA</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ABAAComponent { }
