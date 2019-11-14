import { FreeComponent } from './free.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: FreeComponent,
    data: {
      title: 'User Card',
      icon: 'icon-user',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - user card',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeRoutingModule { }
