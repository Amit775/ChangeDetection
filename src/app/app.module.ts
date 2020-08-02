import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AsyncModule } from './async/async.module';
import { DefaultModule } from './default/default.module';
import { ManualModule } from './manual/manual.module';
import { OnpushModule } from './onpush/onpush.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DefaultModule,
		OnpushModule,
		AsyncModule,
		ManualModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
