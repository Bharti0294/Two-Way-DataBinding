import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component'
const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'form',
  component:FormComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'aboutus',
  component:AboutusComponent
},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
