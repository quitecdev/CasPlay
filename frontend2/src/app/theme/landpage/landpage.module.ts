import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandpageRoutingModule } from './landpage-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandpageRoutingModule,
    SharedModule
  ]
})
export class LandpageModule { }
