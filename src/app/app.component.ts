import { Component } from '@angular/core';
import { ProductserviceService } from './services/productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: ProductserviceService){
      }
  title = 'eShop-it';

  count:number=this.service.getTotal();



}
