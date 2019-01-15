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
import { OrderComponent } from './order/order.component';
import { SalesComponent } from './sales/sales.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, FormComponent, TableComponent, OrderComponent, SalesComponent, OrderFormComponent, SalesFormComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'inventorylist', component: TableComponent},
      {path: 'addform', component: FormComponent},
      {path: 'orderList', component: OrderComponent},
      {path: 'saleList', component: SalesComponent},
      {path: 'orderform', component: OrderFormComponent},
      {path: 'orderDetails', component: OrderDetailsComponent}
    ])
  ],
  exports: [LayoutComponent]


})
export class UiModule { }
