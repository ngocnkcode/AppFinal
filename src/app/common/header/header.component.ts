import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/order';
import { OrderDetail } from 'src/app/Models/order-detail';
import { CustomerService } from 'src/app/Service/customer.service';
import { OrderService } from 'src/app/Service/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() addToCart:EventEmitter<any> = new EventEmitter<any>();

  @Input() data: any[] = [];
  @Input() totalAmount:number = 0;
  @Input() customer: any;
  order: Order;
  orderDetail: OrderDetail;
  search:string;

  constructor(
    private router: Router,
    private orderService:OrderService,
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.data = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    this.getTotalAmount()
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')) : null
  }

  getTotalAmount(){
    this.totalAmount = 0;
    for (let i = 0; i < this.data.length; i++) {
      this.totalAmount += this.data[i].product.price*this.data[i].quantity  
    }
  }

  addQuantity(itemCart: any){
    itemCart.quantity +=1
    localStorage.setItem('carts',JSON.stringify(this.data));
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
    this.data = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    this.getTotalAmount()
  }

  loadCustomer(){
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')) : this.router.navigate(['/login'])
  }

  getPayment(){
    this.loadCustomer()
    this.order = new Order();
    this.order.customerId = this.customer.customerId
    this.order.totalAmount = this.totalAmount
    this.order.listODetailDTOs = []
    for (let i = 0; i < this.data.length; i++) {
      this.orderDetail = new OrderDetail();
      this.orderDetail.productId = this.data[i].product.productId
      this.orderDetail.quantity = this.data[i].quantity
      this.order.listODetailDTOs.push(this.orderDetail)
    }
    this.orderService.addOrder(this.order).subscribe((res)=>{
      this.customerService.loginCus(this.customer).subscribe((res)=>{
        localStorage.setItem('customer',JSON.stringify(res))
        localStorage.removeItem('carts')
        this.ngOnInit()
      })
    })
  }

  findProduct(sreach:string){
    this.router.navigate(['/search/'+sreach])
  }

  logoutAccount(){
    localStorage.removeItem('customer')
    this.ngOnInit()
  }
}
