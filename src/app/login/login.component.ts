import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logIn = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.minLength(5)]),
    lastName: new FormControl('', [Validators.required]),
    DoB: new FormControl(''),
    
  })
  logForm(){
    console.log('value from logForm');
    
    console.log(this.logIn.value);
  }
}


