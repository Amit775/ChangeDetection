import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-default',
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
export class DefaultComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
