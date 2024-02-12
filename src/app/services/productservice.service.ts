import { Injectable, OnInit } from '@angular/core';
import { productmodel } from '../model/product-model';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  productDetails: productmodel[] = [];
  total: number = 0;
  totalCart: number=0;

  getCartDetails() {return this.productDetails;}

  setCartDetails(products: any) {this.productDetails.push(products);}
  
  getTotal() {return this.total;}

  setTotal(price: number) {this.total = this.total + price;}

    getCartCount(){  this.totalCart=this.productDetails.length
    console.log(this.totalCart)
    return this.totalCart
  }



  phoneProductList: productmodel[] = [{
    ProductName: "Apple iPhone 15",
    Price: 20000,
    imgurl: "assets/iPhone15.PNG"
  },
  {
    ProductName: "Samsung Phone",
    Price: 18000,
    imgurl: "assets/Samsung.PNG"
  },
  {
    ProductName: "Vivo Phone",
    Price: 15000,
    imgurl: "assets/vivo.PNG"
  },
  {
    ProductName: "OnePlus Phone",
    Price: 38000,
    imgurl: "assets/oneplus.PNG"
  },
  {
    ProductName: "Redmi Phone",
    Price: 12000,
    imgurl: "assets/redmi.PNG"
  },

  ]

}
