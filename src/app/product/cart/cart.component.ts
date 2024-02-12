import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';
import { productmodel } from '../../model/product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit
{

  constructor(private service: ProductserviceService){}

  ngOnInit() {
    this.getCartDetails();
    this.getTotalPrice()
  }

//@Input("cartitem") cart:Array<any> =[];

cart: productmodel[]=[];
statusofcart: string="Cart is Empty!";

totalPrice: number=0;

getCartDetails(){
this.cart=this.service.getCartDetails();
}

getTotalPrice(){
    if(this.cart.length!==0)
    {this.totalPrice=this.service.getTotal(); }
  }

  removeItem(cartitem:productmodel)
  {
   let index=this.cart.indexOf(cartitem)
   console.log(index)
    if(index>-1){
      this.totalPrice=this.totalPrice-cartitem.Price
      this.cart.splice(index,1)
      
    }     
  
}
  
}


