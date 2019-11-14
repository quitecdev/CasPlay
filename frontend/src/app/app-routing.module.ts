import { StudentComponent } from './layout/student/student.component';
import { ForgotComponent } from './theme/auth/forgot/forgot.component';
import { RegisterComponent } from './theme/auth/register/register.component';
import { LoginComponent } from './theme/auth/login/login.component';
import { AboutComponent } from './theme/about/about.component';
import { HomeComponent } from './theme/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { PageComponent } from './layout/page/page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'home-three',
        component: HomeComponent
      }
      // {
      //    path: 'products',
      //    loadChildren: './Pages/Products/Products.module#ProductsModule'
      // },
      // {
      //    path: 'cart',
      //    component: CartComponent
      // },
      // {
      //  path: 'not-found',
      //  component: NotFoundComponent
      // },
      // {
      //    path: 'session',
      //    loadChildren: './Pages/Session/Session.module#SessionModule'
      // },
      // {
      //    path: 'checkout',
      //    loadChildren: './Pages/Checkout/Checkout.module#CheckoutModule'
      // },
      // {
      //    path: '',
      //    loadChildren: './Pages/About/About.module#AboutModule'
      // },
      // {
      //    path: 'blogs',
      //    loadChildren: './Pages/Blogs/Blogs.module#BlogsModule'
      // },
      // {
      //    path: 'account',
      //    loadChildren: './Pages/UserAccount/UserAccount.module#UserAccountModule'
      // }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth/login',
        component: LoginComponent
      },
      {
        path: 'auth/register',
        component: RegisterComponent
      },
      {
        path: 'auth/forgot',
        component: ForgotComponent
      }
    ]
  },
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'student',
        loadChildren: './theme/student/student.module#StudentModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
