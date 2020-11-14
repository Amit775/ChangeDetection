import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-b-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">ABA</div>

		<ul>
			<li>
				<app-a-b-a-a></app-a-b-a-a>
			</li>
			<li>
				<app-a-b-a-b></app-a-b-a-b>
			</li>
		</ul>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ABAComponent { }
