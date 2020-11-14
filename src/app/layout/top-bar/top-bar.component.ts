import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.less']
})
export class TopBarComponent implements OnInit {

	routes = routes.filter(route => !route.redirectTo).map(route => route.path);
	ngOnInit(): void { console.log(this.routes) }
}
