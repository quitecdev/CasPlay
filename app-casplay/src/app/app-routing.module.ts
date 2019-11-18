import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandpageComponent } from './layout/landpage/landpage.component';
import { RouterResolver } from './router.resolver';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "",
    component: LandpageComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./theme/page/page.module").then(m => m.PageModule),
        resolve: { crisis: RouterResolver }
      }
    ]
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterResolver]
})
export class AppRoutingModule { }
