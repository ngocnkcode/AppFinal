import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = []
  title = 'BTL';
  totalAmount: number = 0;
  customer: any;
  onActive(componetRef){
  componetRef.addToCart.subscribe(()=>{
    this.data = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    this.getTotalAmount();
    this.customer = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : null
  })
  }
  getTotalAmount(){
    this.totalAmount = 0;
    for (let i = 0; i < this.data.length; i++) {
      this.totalAmount += this.data[i].product.price*this.data[i].quantity  
    }
    return this.totalAmount
  }
}
