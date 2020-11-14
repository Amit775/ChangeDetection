import { Component } from '@angular/core';

@Component({
	selector: 'app-a-a-b',
	template: `
        <div class="title" toggleOnCheck (click)="null">AAB</div>

		<ul>
			<li>
				<app-a-a-b-a></app-a-a-b-a>
			</li>
			<li>
				<app-a-a-b-b></app-a-a-b-b>
			</li>
		</ul>
	`
})
export class AABComponent { }
