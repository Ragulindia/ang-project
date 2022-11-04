import { Component, OnInit } from '@angular/core';
import { student } from '../clg_details/student';
import { Teacher } from '../clg_details/student';
import{UserServicesService} from'../user-services.service'
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})


export class Component2Component implements OnInit {

  constructor(private serStu: UserServicesService) { }

  ngOnInit(): void {
  }
  public student_details = this.serStu.srvId;
  public Teacher_details: Teacher = {
    teacher_name: "ABC",
    teacher_id: 123,
    teacher_class: 12
  }
  public student: string = "";
  public teacher: string = "";
  stu_details() {
    this.student = "stu";
    this.teacher = "";
  }
  teacher_details() {
    this.teacher = "teacher"
    this.student = ""
  }
  getcolor(clas: string): string {
    if (clas == 'A') {
      return 'red';
    }
    else if (clas == "B") {
      return 'blue';
    }
    else {
      return 'yellow';
    }
  }
  getname(Name: string): string {
    if (Name == 'Ragul') {
      return 'red';
    }
    else if (Name == "Ragu") {
      return 'blue';
    }
    else {
      return 'yellow';
    }
  }

  title: string = "This is the interpolation value from typescript";
  data_binding() {
    this.title = "The value changed by CLICK Event";
  }
}
