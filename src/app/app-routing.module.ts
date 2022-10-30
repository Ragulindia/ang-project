import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Companant1Component } from './component1/companant1.component';
import { Component2Component } from './component2/component2.component';
import { headercomponent } from './header/header.component';


const routes: Routes = [
    {
    path:'links',component:Component2Component
  },
  {
    path:'home',component:Companant1Component
  },
  {
    path:'header',component:headercomponent
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
