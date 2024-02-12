import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountComponent } from '../myaccount/account.component';
import { AccRoutingModule } from './acc-routing.module';
import { AddressComponent } from '../address/address.component';



@NgModule({
  declarations: [AccountComponent, AddressComponent],
  imports: [CommonModule,RouterModule,AccRoutingModule],
  bootstrap: [AccountComponent]
})
export class AccmoduleModule { }
