import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,  MatSort } from '@angular/material';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 22.4,
    description: '21b of tuna',
    isChecked: false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  displayColumns: string[] = ['orderDate', 'orderNumber', 'total', 'description', 'isChecked'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort= this.sort;
  }

  selectAll(){
    
  }
}
