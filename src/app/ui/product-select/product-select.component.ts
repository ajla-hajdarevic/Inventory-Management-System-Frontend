import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../product.service';
import {Product} from '../../product';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService){}
  selectedLevel;
  ngOnInit() {
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
  }


  selected(){
    alert(this.selectedLevel.name)
  }

}
