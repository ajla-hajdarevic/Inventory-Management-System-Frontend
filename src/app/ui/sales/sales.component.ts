import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Sales} from '../../sales';
import {SalesService} from '../../sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sales[];

  constructor(private routers: Router, private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getSales()
      .subscribe( data => {
        this.sales = data;
      });

  }
}
