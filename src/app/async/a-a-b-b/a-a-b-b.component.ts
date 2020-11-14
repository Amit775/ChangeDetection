import { Component, 
ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-a-b-b',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">AABB</div>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AABBComponent { }
