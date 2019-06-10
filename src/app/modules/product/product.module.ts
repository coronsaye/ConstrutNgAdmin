import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductsComponent, NewProductComponent, ReviewsComponent, QoutesComponent, OrdersComponent, OrderComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
