import { Component, OnInit } from '@angular/core';
declare var myFunction: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  f() {
    new myFunction();
  }

}
