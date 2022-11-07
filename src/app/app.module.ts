import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Companant1Component } from './component1/companant1.component';
import { Component2Component } from './component2/component2.component';
import { headercomponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserAuthGuard } from './user-auth.guard';
import { LoginComponent } from './login/login.component';
import { UserServicesService } from './user-services.service';
import {  HttpClientModule } from '@angular/common/http';
import { PageaNotFoundComponent } from './pagea-not-found/pagea-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    Companant1Component,
    Component2Component,
    headercomponent,
    AboutUsComponent,
    ProductsComponent,
    ServicesComponent,
    LoginComponent,
    PageaNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [UserAuthGuard,UserServicesService],
  bootstrap: [headercomponent],
  
 
})
export class AppModule { }
