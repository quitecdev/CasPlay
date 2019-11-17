import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageMenuComponent } from './landpage-menu/landpage-menu.component';
import { LandpageFooterComponent } from './landpage-footer/landpage-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LandpageMenuComponent, LandpageFooterComponent],
  exports: [LandpageMenuComponent,LandpageFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
