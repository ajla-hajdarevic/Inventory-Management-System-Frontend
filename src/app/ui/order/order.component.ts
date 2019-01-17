import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrdersService} from '../../orders.service';
import {Orders} from '../../orders';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Orders[];

  constructor(private routers: Router, private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe( data => {
        this.orders = data;
      });

  }

}
