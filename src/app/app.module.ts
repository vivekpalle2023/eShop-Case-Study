import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './product/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartdetailsComponent } from './product/cartdetails/cartdetails.component';
import { ProductslistComponent } from './product/productslist/productslist.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    CartComponent,
    CartdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
