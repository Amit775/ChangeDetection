import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-a-b-b-a',
	template: `
        <div class="title on-push" toggleOnCheck (click)="null">ABBA</div>

		<ul>
			<li>
				<app-a-b-b-a-a></app-a-b-b-a-a>
			</li>
		</ul>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ABBAComponent { }
