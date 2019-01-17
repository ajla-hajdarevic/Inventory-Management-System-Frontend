import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Router} from '@angular/router';
import {Product} from '../../product';
import {SupplierService} from '../../supplier.service';
import {Supplier} from '../../supplier';
declare var myFunction: any;
declare var goTo: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products: Product[];
  suppliers: Supplier[];

  constructor(private router: Router, private productService: ProductService, private supplierService: SupplierService) {}


  ngOnInit() {
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
    this.supplierService.getSuppliers()
      .subscribe(data => {
        this.suppliers = data;
      });
  }



  fun() {
    new goTo;
  }

  f() {
    new myFunction();
  }

}
