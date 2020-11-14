import { Component, 
ChangeDetectionStrategy } from '@angular/core';

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
  	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent { }
