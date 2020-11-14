import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-a-a-b',
	template: `
        <div class="title detached" toggleOnCheck (click)="null">AAB</div>

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
export class AABComponent implements OnInit {
	constructor(private cdr: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.cdr.detach();
	}
}
