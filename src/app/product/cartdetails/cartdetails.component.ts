import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';
import { productmodel } from '../../model/product-model';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrl: './cartdetails.component.scss'
})
export class CartdetailsComponent implements OnInit{

  constructor(private service: ProductserviceService){

  }
  ngOnInit() {
    this.cartDetails();
      }

  mycart:Array<any>=[];
  
  cartDetails(){
    this.mycart.push(this.service.getCartDetails());
    console.log(this.mycart)
  }  

}
