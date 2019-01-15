import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Router} from '@angular/router';
import {Product} from '../../product';
declare var myFunction: any;
declare var goTo: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) {}


  ngOnInit() {
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
  }

  fun() {
    new goTo;
  }

  f() {
    new myFunction();
  }

}
