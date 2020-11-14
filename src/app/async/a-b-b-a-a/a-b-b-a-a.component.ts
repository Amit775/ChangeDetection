import { Component, 
ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-b-b-a-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">ABBAA</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ABBAAComponent { }
