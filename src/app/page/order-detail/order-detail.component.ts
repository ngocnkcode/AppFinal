import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';
import { Order } from 'src/app/Models/order';
import { OrderService } from 'src/app/Service/order.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order : Order;
  customer: Customer
  pro: any;
  product: any[] = []

  constructor(
    private orderService:OrderService,
    private route:ActivatedRoute,
    private router:Router,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    // this.snapshotMethod()
    this.order = new Order();
    this.paramMethod();
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')) : this.router.navigate(['/login'])
  }

  snapshotMethod(){
    this.orderService.getOrderById(this.route.snapshot.params['id']).subscribe((res) => {
      this.order = res;
    })
  }

  paramMethod(){
    this.route.params.subscribe(data => {
      this.orderService.getOrderById(data.id).subscribe((res)=>{
        this.order = res;
        for (let i = 0; i < this.order.listODetailDTOs.length; i++) {
          let itemCart = {
            pro : this.pro,
            quantity: 1
          }
          this.productService.getProductById(this.order.listODetailDTOs[i].productId).subscribe((res)=>{
            itemCart.pro = res;
            itemCart.quantity = this.order.listODetailDTOs[i].quantity;
            this.product.push(itemCart)
          })
        }
      })
    })
  }

}
