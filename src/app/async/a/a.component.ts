import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">A</div>

		<ul>
			<li>
				<app-a-a></app-a-a>
			</li>
			<li>
				<app-a-b></app-a-b>
			</li>
		</ul>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent { }
