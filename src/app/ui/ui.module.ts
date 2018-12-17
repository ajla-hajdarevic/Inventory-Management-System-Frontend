import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, InventoryListComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'inventorylist', component: InventoryListComponent},
      {path: 'addform', component: FormComponent}
    ])
  ],
  exports: [LayoutComponent]


})
export class UiModule { }
