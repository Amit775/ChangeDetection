import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-a-b',
	template: `
        <div class="title detached" toggleOnCheck (click)="null">AB</div>

		<ul>
			<li>
				<app-a-b-a></app-a-b-a>
			</li>
			<li>
				<app-a-b-b></app-a-b-b>
			</li>
		</ul>
  	`
})
export class ABComponent implements OnInit {
	constructor(private cdr: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.cdr.detach();
	}
}
