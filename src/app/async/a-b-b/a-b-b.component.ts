import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-b-b',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">ABB</div>

		<ul>
			<li>
				<app-a-b-b-a></app-a-b-b-a>
			</li>
			<li>
				<app-a-b-b-b></app-a-b-b-b>
			</li>
		</ul>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ABBComponent { }
