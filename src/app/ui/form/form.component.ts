import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product:Product = new Product();
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsList()
      .subscribe(() => {
        console.log(456);
      })
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    console.log(this.product);
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
