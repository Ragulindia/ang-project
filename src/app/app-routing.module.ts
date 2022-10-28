import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { Companant1Component } from './component1/companant1.component';
import { homeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'home',component:homeComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
