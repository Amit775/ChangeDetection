import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-a-a-b',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">AAB</div>

		<ul>
			<li>
				<app-a-a-b-a></app-a-a-b-a>
			</li>
			<li>
				<app-a-a-b-b></app-a-a-b-b>
			</li>
		</ul>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AABComponent { }
