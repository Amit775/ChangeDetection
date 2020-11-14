import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { DefaultComponent } from './default/default.component';
import { ManualComponent } from './manual/manual.component';
import { OnpushComponent } from './onpush/onpush.component';

export const routes: Routes = [
	{ path: 'defualt', component: DefaultComponent },
	{ path: 'on-push', component: OnpushComponent },
	{ path: 'async', component: AsyncComponent },
	{ path: 'manual', component: ManualComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'defualt' },
	{ path: '**', redirectTo: 'default' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
