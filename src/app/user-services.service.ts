import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from './clg_details/student';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }
  baseURL:string="https://gorest.co.in/public/v2/users";

  public srvId:student[]=[
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
    }
  ]

  
  httpRequest():Observable<any>{
    return this.http.get(this.baseURL);
  }
}
