import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-manual',
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
export class ManualComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
