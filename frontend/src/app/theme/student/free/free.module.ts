import { FreeComponent } from './free.component';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeRoutingModule } from './free-routing.module';


@NgModule({
  declarations: [FreeComponent],
  imports: [
    CommonModule,
    FreeRoutingModule,
    SharedModule
  ]
})
export class FreeModule { }
