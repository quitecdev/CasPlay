import { ForgotComponent } from './theme/auth/forgot/forgot.component';
import { RegisterComponent } from './theme/auth/register/register.component';
import { AboutComponent } from './theme/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './theme/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthComponent } from './layout/auth/auth.component';
import { PageComponent } from './layout/page/page.component';
import { LoginComponent } from './theme/auth/login/login.component';
import { StudentComponent } from './layout/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    AuthComponent,
    PageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
