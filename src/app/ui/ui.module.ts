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
import { SaleDetailsComponent } from './sale-details/sale-details.component';
<<<<<<< HEAD
import { DodajProdukteComponent } from './dodaj-produkte/dodaj-produkte.component';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, FormComponent, TableComponent, OrderComponent, SalesComponent, OrderFormComponent, SalesFormComponent, OrderDetailsComponent, SaleDetailsComponent, DodajProdukteComponent],
=======
import { ProductSelectComponent } from './product-select/product-select.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, FormComponent, TableComponent, OrderComponent, SalesComponent, OrderFormComponent, SalesFormComponent, OrderDetailsComponent, SaleDetailsComponent, ProductSelectComponent],
>>>>>>> 4d4d8a50b7088c16f60ca0f0dcbbfa560c827abc
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'inventorylist', component: TableComponent},
      {path: 'orderList', component: OrderComponent},
      {path: 'saleList', component: SalesComponent},
      {path: 'orderform', component: OrderFormComponent},
      {path: 'orderDetails', component: OrderDetailsComponent},
      {path: 'api/products', component: FormComponent},
      {path: 'saleDetails', component: SaleDetailsComponent},
      {path: 'saleForm', component: SalesFormComponent}

    ])
  ],
  exports: [LayoutComponent]


})
export class UiModule { }
