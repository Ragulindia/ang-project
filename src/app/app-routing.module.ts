import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Companant1Component } from './component1/companant1.component';


const routes: Routes = [
  {
    path:'home',component:Companant1Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
