import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() addToCart:EventEmitter<any> = new EventEmitter<any>();

  customer: Customer

  constructor(
    private customerService:CustomerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  loginCustomer(){
    this.customerService.loginCus(this.customer).subscribe(
      res => {
        console.log('Đăng nhập thành công')
        localStorage.setItem('customer',JSON.stringify(res))
        this.addToCart.emit()
        this.router.navigate([''])
      },
      error => console.log('Đăng nhập thất bại')
    )
  }

}
