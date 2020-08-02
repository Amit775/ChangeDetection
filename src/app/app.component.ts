import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<app-async></app-async>
    <router-outlet></router-outlet>
  `,
	styles: []
})
export class AppComponent {
	title = 'change-detection';
}
