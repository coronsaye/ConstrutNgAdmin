import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { NewSupplierComponent } from './new-supplier/new-supplier.component';
import { ViewSuppierComponent } from './view-suppier/view-suppier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { DeleteSuppliersComponent } from './delete-suppliers/delete-suppliers.component';

@NgModule({
  declarations: [SuppliersComponent, NewSupplierComponent, ViewSuppierComponent, EditSupplierComponent, DeleteSuppliersComponent],
  imports: [
    CommonModule
  ]
})
export class SupplierModule { }
