import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../clg_details/products';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private getPrd:UserServicesService) { }

  ngOnInit(): void {
  }
  @Input()products:any;
  
   GetPrdLst:any;
prdTable:boolean=false;
 getProductLists(){
     this.getPrd.getProductList().subscribe(
      (lis)=>{
        this.GetPrdLst=lis;
        this.prdTable=true;
      }
     )
     console.log(this.products);
  }
  
  @Input() tableDls:any[]=[];
}
