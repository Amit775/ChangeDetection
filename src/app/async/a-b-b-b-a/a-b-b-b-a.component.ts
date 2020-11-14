import { Component, 
ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-b-b-b-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">ABBBA</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ABBBAComponent { }
