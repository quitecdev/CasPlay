import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Ingreso',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  }
  // Add other routes here
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
