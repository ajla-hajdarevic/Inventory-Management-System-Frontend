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
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, FormComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'inventorylist', component: TableComponent},
      {path: 'api/products', component: FormComponent}
    ])
  ],
  exports: [LayoutComponent]


})
export class UiModule { }
