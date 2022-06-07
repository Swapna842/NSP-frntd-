import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from "./contact-us/ContactUsComponent";
import { HomeComponent } from './home/home.component';
import { InstRegComponent } from './inst-reg/inst-reg.component';
import { LoginComponent } from './login/login.component';
import { StdRegComponent } from './std-reg/std-reg.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutUs",component:AboutUsComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"std_reg",component:StdRegComponent},
  {path:"inst_reg",component:InstRegComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
