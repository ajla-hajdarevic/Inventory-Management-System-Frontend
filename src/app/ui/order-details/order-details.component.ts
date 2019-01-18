import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderDetails} from '../../orderDetails';
import {OrderDetailsService} from '../../order-details.service';
import {Product} from '../../product';
import {ProductService} from '../../product.service';
import {switchMap} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';
import {SupplierService} from '../../supplier.service';
import {Supplier} from '../../supplier';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: OrderDetails[];
  products: Product[];
  productMapper = {};
  suppliers: Supplier[];
  supplierMapper = {};

  constructor(private routers: Router,
              private orderDetailsService: OrderDetailsService,
              private productService: ProductService,
              private supplierService: SupplierService) { }

  ngOnInit() {
    this.orderDetailsService.getOrderDetails()
      .pipe(switchMap( data => {
        this.orderDetails = data;
        return this.productService.getProducts();
      }))
      .subscribe( data =>{
        this.products = data;
        this.products.forEach( (item) => {
          this.productMapper[item.id] = item;
        })
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
