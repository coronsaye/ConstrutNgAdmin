import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customer'
    },
    children: [
      {
        path: '',
        redirectTo: 'customers'
      },
      {
        path: 'customers',
        component: CustomersComponent,
        data: {
          title: 'Customers'
        }
      },
      {
        path: 'new-customer',
        component: NewCustomerComponent,
        data: {
          title: 'New Customer'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
