import { Component } from '@angular/core';

@Component({
	selector: 'app-a',
	template: `
        <div class="title" toggleOnCheck (click)="null">A</div>

		<ul>
			<li>
				<app-a-a></app-a-a>
			</li>
			<li>
				<app-a-b></app-a-b>
			</li>
		</ul>
  	`
})
export class AComponent { }
