import { Component, Input, OnInit } from '@angular/core';
import{ student, Teacher} from '../clg_details/student'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() clgStudentDts:student[]=[];

  
}
