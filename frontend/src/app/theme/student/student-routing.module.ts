import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student',
      status: false
    },
    children: [
      {
        path: 'free',
        // loadChildren: './user-profile/user-profile.module#UserProfileModule'
        loadChildren: './free/free.module#FreeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
