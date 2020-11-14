import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-onpush',
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
export class OnpushComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
