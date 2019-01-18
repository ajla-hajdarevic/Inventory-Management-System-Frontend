import { Component, OnInit } from '@angular/core';
import {OrderDetails} from '../../orderDetails';
import {Product} from '../../product';
import {Supplier} from '../../supplier';
import {Router} from '@angular/router';
import {OrderDetailsService} from '../../order-details.service';
import {ProductService} from '../../product.service';
import {SupplierService} from '../../supplier.service';
import {switchMap} from 'rxjs/operators';
import {SalesDetailsService} from '../../sales-details.service';
import {SalesDetails} from '../../salesDetails';
import {Sales} from '../../sales';
import {SalesService} from '../../sales.service';
declare var e: any;
@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css']
})
export class SaleDetailsComponent implements OnInit {
  saleDetails: SalesDetails[];
  products: Product[];
  productMapper = {};
  sales: Sales[];
  salesMapper = {};
  suppliers: Supplier[];
  supplierMapper = {};

  constructor(private routers: Router,
              private saleDetailsService: SalesDetailsService,
              private productService: ProductService,
              private saleService: SalesService,
              private supplierService: SupplierService) { }

  ngOnInit() {
    this.saleDetailsService.getSalesDetails()
      .pipe(switchMap(data => {
        this.saleDetails = data;
        return this.productService.getProducts();
      }))
      .subscribe(data => {
        this.products = data;
        this.products.forEach((item) => {
          this.productMapper[item.id] = item;
        })
      });

    this.saleDetailsService.getSalesDetails()
      .pipe(switchMap(data => {
        this.saleDetails = data;
        return this.saleService.getSales();
      }))
      .subscribe(data => {
        this.sales = data;
        this.sales.forEach((item) => {
          this.salesMapper[item.id] = item;
        });
        console.log(this.sales);
      });

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
}
