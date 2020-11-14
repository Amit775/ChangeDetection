import { Component } from '@angular/core';

@Component({
	selector: 'app-a-b-b-b',
	template: `
        <div class="title" toggleOnCheck (click)="null">ABBB</div>

		<ul>
			<li>
				<app-a-b-b-b-a></app-a-b-b-b-a>
			</li>
		</ul>
	`
})
export class ABBBComponent { }
