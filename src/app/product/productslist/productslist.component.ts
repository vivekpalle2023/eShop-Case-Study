import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';
import { productmodel } from '../../model/product-model';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.scss'
})
export class ProductslistComponent{

constructor(private service: ProductserviceService){}

Products:productmodel[]=this.service.phoneProductList;

isCartOpen:boolean=false;
cartitems: productmodel[]=[]

togglecartview(){
  this.isCartOpen=!this.isCartOpen;
}
addtocart(product:any){
window.alert(product.ProductName + " has been added to cart. Please go to Cart tab to proceed further. ")
this.service.setCartDetails(product);
this.service.setTotal(product.Price);
}

}
