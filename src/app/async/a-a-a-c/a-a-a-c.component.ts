import { Component, 
ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-a-a-c',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">AAAC</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AAACComponent { }
