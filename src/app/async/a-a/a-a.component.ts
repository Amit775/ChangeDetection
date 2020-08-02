import { Component } from '@angular/core';

@Component({
	selector: 'app-a-a',
	template: `
        <div class="title" toggleOnCheck (click)="null">AA</div>

		<ul>
			<li>
				<app-a-a-a></app-a-a-a>
			</li>
			<li>
				<app-a-a-b></app-a-a-b>
			</li>
		</ul>
  	`
})
export class AAComponent { }
