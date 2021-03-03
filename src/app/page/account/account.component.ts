import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  customer: any

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.customer = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : this.router.navigate([''])
  }
}
