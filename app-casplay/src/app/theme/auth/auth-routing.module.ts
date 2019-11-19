import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Ingreso',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Registrarse',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
