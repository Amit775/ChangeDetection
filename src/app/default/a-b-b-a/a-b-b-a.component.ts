import { Component } from '@angular/core';

@Component({
	selector: 'app-a-b-b-a',
	template: `
        <div class="title" toggleOnCheck (click)="null">ABBA</div>

		<ul>
			<li>
				<app-a-b-b-a-a></app-a-b-b-a-a>
			</li>
		</ul>
  	`
})
export class ABBAComponent { }
