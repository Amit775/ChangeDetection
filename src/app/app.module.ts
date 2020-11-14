import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AsyncModule } from './async/async.module';
import { DefaultModule } from './default/default.module';
import { ManualModule } from './manual/manual.module';
import { OnpushModule } from './onpush/onpush.module';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DefaultModule,
		OnpushModule,
		AsyncModule,
		ManualModule,
		BrowserAnimationsModule,
		MaterialModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
