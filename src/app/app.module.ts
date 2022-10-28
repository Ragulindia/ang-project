import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Companant1Component } from './component1/companant1.component';
import { Component2Component } from './component2/component2.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    Companant1Component,
    Component2Component,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ServicesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [Component2Component ],
  
 
})
export class AppModule { }
