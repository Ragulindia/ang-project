import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: '.app-blank',
  templateUrl: './blank.component.html',
  // template:"<app-component2></app-component2>",
  // styleUrls: ['./blank.component.css']
  styles: [`
  h3 {color:red;text-decoration:underline}
  h2 { color:blue;}
  h3:hover {
    color:#66ffff;
  }
  `]
})
export class BlankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  databind: string = "this valu from typescript";

  dataFindingFun: string = "this is the data binding value from the function";
  dataFun() {
    return this.dataFindingFun;
  }
  server: boolean = false;
  addserver() {
    this.server = true;
  }
  addval: string = ''
  eventinterpolation() {
    this.addval = "asddfjsghhtognvnv,thfhreuvhrqehvllnvefruioqrjrjehro"
  }
  event1: string = "ragul";
  updateName(event: any) {
    // console.log(event);

    this.event1 = (<HTMLInputElement>event.target).value;
  }
  showDetail: boolean = false;
  log1:any = [];
  onToggle() {
    this.showDetail = !this.showDetail;
    this.log1.push(this.log1.length + 1)
  }
}
