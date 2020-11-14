import { Component, 
ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-b-b-b',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">ABBB</div>

		<ul>
			<li>
				<app-a-b-b-b-a></app-a-b-b-b-a>
			</li>
		</ul>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ABBBComponent { }
