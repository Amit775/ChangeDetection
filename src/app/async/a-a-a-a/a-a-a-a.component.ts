import { Component, 
ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-a-a-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">AAAA</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AAAAComponent { }
