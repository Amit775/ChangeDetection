import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-a-a-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">AAA</div>

		<ul>
			<li>
				<app-a-a-a-a></app-a-a-a-a>
			</li>
			<li>
				<app-a-a-a-b></app-a-a-a-b>
			</li>
			<li>
				<app-a-a-a-c></app-a-a-a-c>
			</li>
		</ul>
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AAAComponent { }
