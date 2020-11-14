import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ManualComponent } from './manual.component';

import { AComponent } from './a/a.component';
import { AAComponent } from './a-a/a-a.component';
import { AAAComponent } from './a-a-a/a-a-a.component';
import { AAAAComponent } from './a-a-a-a/a-a-a-a.component';
import { AAABComponent } from './a-a-a-b/a-a-a-b.component';
import { AAACComponent } from './a-a-a-c/a-a-a-c.component';
import { AABComponent } from './a-a-b detached/a-a-b.component';
import { AABAComponent } from './a-a-b-a/a-a-b-a.component';
import { AABBComponent } from './a-a-b-b/a-a-b-b.component';
import { ABComponent } from './a-b detached/a-b.component';
import { ABAComponent } from './a-b-a/a-b-a.component';
import { ABAAComponent } from './a-b-a-a/a-b-a-a.component';
import { ABABComponent } from './a-b-a-b/a-b-a-b.component';
import { ABBComponent } from './a-b-b/a-b-b.component';
import { ABBAComponent } from './a-b-b-a detached/a-b-b-a.component';
import { ABBAAComponent } from './a-b-b-a-a/a-b-b-a-a.component';
import { ABBBComponent } from './a-b-b-b/a-b-b-b.component';
import { ABBBAComponent } from './a-b-b-b-a/a-b-b-b-a.component';


@NgModule({
	declarations: [ManualComponent, AComponent, AAComponent, AAAComponent, AAAAComponent, AAABComponent, AAACComponent, AABComponent, AABAComponent, AABBComponent, ABComponent, ABAComponent, ABAAComponent, ABABComponent, ABBComponent, ABBAComponent, ABBAAComponent, ABBBComponent, ABBBAComponent],
	imports: [
		CommonModule,
		SharedModule
	]
})
export class ManualModule { }
