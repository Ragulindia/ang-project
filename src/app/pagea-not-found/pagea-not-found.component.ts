import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagea-not-found',
  templateUrl: './pagea-not-found.component.html',
  styleUrls: ['./pagea-not-found.component.css']
})
export class PageaNotFoundComponent implements OnInit {

  constructor(private rou: Router) { }

  ngOnInit(): void {
  }

  navByUrl(){
    this.rou.navigateByUrl('/home')
  }
  
}
