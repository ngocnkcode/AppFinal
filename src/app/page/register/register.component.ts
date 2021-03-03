import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: Customer

  constructor(
    private customerService: CustomerService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  registerCustomer(){
    this.customerService.registerCus(this.customer).subscribe(
      res => {
        console.log('Đăng kí thành công')
        localStorage.setItem('customer',JSON.stringify(res))
        this.router.navigate(['']);
      },
      error => console.log('Đăng kí thất bại')
    )
  }

}
