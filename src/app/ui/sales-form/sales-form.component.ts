import { Component, OnInit } from '@angular/core';
declare var listofProducts: any;

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  f(){
    new listofProducts();
  }

}
