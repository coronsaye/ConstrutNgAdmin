import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Product'
    },
    children: [
      {
        path: '',
        redirectTo: 'products'
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Products'
        }
      },
      {
        path: 'new-product',
        component: NewProductComponent,
        data: {
          title: 'New Product'
        }
      },
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: 'Orders'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
