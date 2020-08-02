import { Component } from '@angular/core';

@Component({
	selector: 'app-a-b-a',
	template: `
        <div class="title" toggleOnCheck (click)="null">ABA</div>

		<ul>
			<li>
				<app-a-b-a-a></app-a-b-a-a>
			</li>
			<li>
				<app-a-b-a-b></app-a-b-a-b>
			</li>
		</ul>
  	`
})
export class ABAComponent { }
