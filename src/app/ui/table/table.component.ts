import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Router} from '@angular/router';
import {Product} from '../../product';
import {SupplierService} from '../../supplier.service';
import {Supplier} from '../../supplier';
import {switchMap} from 'rxjs/operators';
declare var myFunction: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products: Product[];
  suppliers: Supplier[];
  supplierMapper = {};


  constructor(private router: Router,
              private productService: ProductService,
              private supplierService: SupplierService) {}


  ngOnInit() {
    this.productService.getProducts()
      .pipe(switchMap(data => {
        this.products = data;
        console.log(this.products);
        return this.supplierService.getSuppliers();
      }))
      .subscribe(data => {
        this.suppliers = data;
        this.suppliers.forEach((item) => {
          this.supplierMapper[item.id] = item;
        });
        console.log(this.suppliers);
      });
  }

  f() {
    new myFunction();
  }

}
