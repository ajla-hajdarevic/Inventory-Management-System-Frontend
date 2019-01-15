import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
<<<<<<< HEAD
import { OrderComponent } from './order/order.component';
import { SalesComponent } from './sales/sales.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
=======
import {FormsModule} from '@angular/forms';
>>>>>>> 7c1b1bca18d45303c8b01b61eb9642f2be51f968

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, FormComponent, TableComponent, OrderComponent, SalesComponent, OrderFormComponent, SalesFormComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'inventorylist', component: TableComponent},
<<<<<<< HEAD
      {path: 'addform', component: FormComponent},
      {path: 'orderList', component: OrderComponent},
      {path: 'saleList', component: SalesComponent},
      {path: 'orderform', component: OrderFormComponent},
      {path: 'orderDetails', component: OrderDetailsComponent}
=======
      {path: 'api/products', component: FormComponent}
>>>>>>> 7c1b1bca18d45303c8b01b61eb9642f2be51f968
    ])
  ],
  exports: [LayoutComponent]


})
export class UiModule { }
