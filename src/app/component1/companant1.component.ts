import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companant1',
  templateUrl: './companant1.component.html',
  styleUrls: ['./companant1.component.css']
})
export class Companant1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public RegisterPage: boolean = false;
  public LoginPage: boolean = true;

  register(){
     this.RegisterPage = true;
    this.LoginPage= false;

  }
   signin(){
    this.RegisterPage=false;
    this.LoginPage= true;

  }

}

