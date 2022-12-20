import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student, usersdetails } from './clg_details/student';
import { Products } from './clg_details/products';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }
  baseURL: string = "https://gorest.co.in/public/v2/users";
  credoURL: string = "https://credo-shoppingcartv5.herokuapp.com/listproducts";

  public srvId: student[] = [
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


  httpRequest(): Observable<usersdetails> {
    var val = this.http.get<usersdetails>(this.baseURL);
    return val;
  }
  getProductList(): Observable<Products> {
    return this.http.get<Products>(this.credoURL);
  }

}
