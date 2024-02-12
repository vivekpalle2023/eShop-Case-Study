import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './product/productslist/productslist.component';
import { CartdetailsComponent } from './product/cartdetails/cartdetails.component';
import { CartComponent } from './product/cart/cart.component';

const routes: Routes = [
  { path: 'productlist', component: ProductslistComponent },
  { path: '', component: ProductslistComponent },
  { path: 'mycart', component: CartComponent },
  {
    path: 'myaccount',
    loadChildren: () => {
      return import('./account/accmodule/accmodule.module')
        .then((m) => m.AccmoduleModule)
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
