import { Component, OnInit } from '@angular/core';
import { student } from '../clg_details/student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headercomponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
   clgParent:student[]=[
    {
      stu_name: "Ragul",
      stu_rollNo: 101,
      stu_class: 12,
      stu_section: "A",
      stu_contact: 12345
    },
    {
      stu_name: "Raj",
      stu_rollNo: 102,
      stu_class: 10,
      stu_section: "B",
      stu_contact: 12345
    },
    {
      stu_name: "Ragu",
      stu_rollNo: 101,
      stu_class: 11,
      stu_section: "C",
      stu_contact: 12345
    },
    {
      stu_name: "Ramesh",
      stu_rollNo: 101,
      stu_class: 12,
      stu_section: "A",
      stu_contact: 12345
    },
    {
      stu_name: "Shiek",
      stu_rollNo: 102,
      stu_class: 10,
      stu_section: "B",
      stu_contact: 12345
    },
    {
      stu_name: "madhu",
      stu_rollNo: 101,
      stu_class: 11,
      stu_section: "C",
      stu_contact: 12345
    }
   ]
}
