import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';
import { Order } from 'src/app/Models/order';
import { OrderDetail } from 'src/app/Models/order-detail';
import { CustomerService } from 'src/app/Service/customer.service';
import { OrderService } from 'src/app/Service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() addToCart:EventEmitter<any> = new EventEmitter<any>();

  data: any[];
  flag: boolean;
  totalAmount: number;
  order: Order;
  customer: Customer;
  orderDetail: OrderDetail;

  constructor(
    private orderService:OrderService,
    private router:Router,
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.loadCart()
    this.getTotalAmount()
  }
  loadCart(){
    this.data = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    if(this.data.length == 0) {
      this.flag = false
    } else {
      this.flag = true;
    }
    this.totalAmount = localStorage.getItem('totalAmount')? JSON.parse(localStorage.getItem('totalAmount')): 0
  }
  addCart(itemCart){
    itemCart.quantity += 1
    localStorage.setItem('carts',JSON.stringify(this.data))
    this.getTotalAmount()
  }

  reduceCart(itemCart){
    itemCart.quantity -= 1
    localStorage.setItem('carts',JSON.stringify(this.data))
    this.getTotalAmount()
  }

  deleteCart(index : number){
    this.data.splice(index,1)
    localStorage.setItem('carts',JSON.stringify(this.data))
    this.loadCart()
    this.getTotalAmount()
  }

  getTotalAmount(){
    this.totalAmount = 0
    for (let i = 0; i < this.data.length; i++) {
      this.totalAmount += this.data[i].product.price*this.data[i].quantity  
    }
  }

  loadCustomer(){
    this.customer = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : this.router.navigate(['/login'])
  }

  getPayment(){
    this.loadCustomer()
    this.order = new Order()
    this.order.customerId = this.customer.customerId
    this.order.totalAmount = this.totalAmount
    this.order.listODetailDTOs = []
    for (let i = 0; i < this.data.length; i++) {
      this.orderDetail = new OrderDetail()
      this.orderDetail.productId = this.data[i].product.productId
      this.orderDetail.quantity = this.data[i].quantity
      this.order.listODetailDTOs.push(this.orderDetail)
    }
    this.orderService.addOrder(this.order).subscribe((res) => {
      this.customerService.loginCus(this.customer).subscribe((res) => {
        localStorage.setItem('customer',JSON.stringify(res));
        localStorage.removeItem('carts')
        this.addToCart.emit()
        this.router.navigate([''])
      })
    })
  }
}
