import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../myaccount/account.component';
import path from 'path';
import { AddressComponent } from '../address/address.component';

const routes: Routes = [
{path:'',component:AccountComponent},
  {path:'address', component:AddressComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AccRoutingModule { }
