import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from "./contact-us/ContactUsComponent";
import { StdRegComponent } from './std-reg/std-reg.component';
import { InstRegComponent } from './inst-reg/inst-reg.component';
import { SchlrFormComponent } from './schlr-form/schlr-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    StdRegComponent,
    InstRegComponent,
    SchlrFormComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
