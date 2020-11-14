import { Component } from '@angular/core';

@Component({
	selector: 'app-async',
	template: `
	<div class="tree">
		<ul>
			<li>
				<app-a></app-a>
			</li>
		</ul>
	</div>
  	`
})
export class AsyncComponent { }
