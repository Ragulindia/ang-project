import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Companant1Component } from './component1/companant1.component';
import { Component2Component } from './component2/component2.component';
import { headercomponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from './user-auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageaNotFoundComponent } from './pagea-not-found/pagea-not-found.component';
import { ProductsComponent } from './products/products.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {
    path: 'home', component: Component2Component,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'home1', component: Component2Component,
  },
  {
    path: 'register', component: Companant1Component
  },
  {
    path: 'header', component: headercomponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'blank', component: BlankComponent
  },
  {
    path: "", redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', component: PageaNotFoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
