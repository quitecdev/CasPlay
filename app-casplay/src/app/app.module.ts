import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandpageComponent } from './layout/landpage/landpage.component';
import { MainComponent } from './layout/main/main.component';
import { AdminComponent } from './layout/admin/admin.component';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './theme/page/page.module';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { BreadcrumbComponent } from './layout/component/breadcrumb/breadcrumb.component';
import { AuthModule } from './theme/auth/auth.module';
import { AuthComponent } from './layout/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    MainComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PageModule,
    AuthModule,
    NgProgressModule,
    NgProgressRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
