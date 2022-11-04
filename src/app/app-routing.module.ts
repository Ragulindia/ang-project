import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Companant1Component } from './component1/companant1.component';
import { Component2Component } from './component2/component2.component';
import { headercomponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from './user-auth.guard';


const routes: Routes = [
    {
    path:'home',component:Component2Component,
    canActivate:[UserAuthGuard]
  },
  {
    path:'register',component:Companant1Component
  },
  {
    path:'header',component:headercomponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:"",redirectTo:'header',pathMatch:'full'
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
