import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-order',
  templateUrl: './account-order.component.html',
  styleUrls: ['./account-order.component.css']
})
export class AccountOrderComponent implements OnInit {

  customer: any

  constructor() { }

  ngOnInit(): void {
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')) : null;
  }

}
