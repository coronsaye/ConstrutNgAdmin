import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersComponent } from './customers/customers.component';


// Components Routing
import { CustomerRoutingModule } from './customer-routing.module';

import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [

    NewCustomerComponent,
    CustomersComponent,

    DeleteCustomersComponent,
    ViewCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

