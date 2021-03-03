import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `<div *ngFor='let p of products'> 
  //  <div class="container">
  //  <div>
  //  <div>
  //   <p>
  //   Mã nhân viên: {{p.id}}
  //   <br>
  //   Tên nhân viên: {{p.name}}
  //   <br>
  //   Ảnh sản phẩm: <img src="{{p.images[0]}}" alt="">
  //   </p>
  //  </div>
  //  </div>
  //  </div>
  // </div>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() addToCart:EventEmitter<any> = new EventEmitter<any>();

  products: any[] = [];

  productCollections: any[] = [];

  posts: any[] = [];

  constructor(
    private productService:ProductService,
    private postService: PostService
  ) { 
   
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((res)=>{
      this.products = res.filter((item:any)=> item.catalogId === 1);
      this.productCollections = res.filter((item:any) => item.productId === 'P0012')
    })
    this.postService.getAll().subscribe((res) => {
      this.posts = res
    })
  }

  buyItem(product : any){
    // Lấy dữ liệu giỏ hàng trong localStorage
    let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    const itemCart = {
      product: product,
      quantity: 1
    };
    // Kiểm tra sản phẩm có trong giỏ chưa
    let flag = false;
    carts = carts.map(x => {
      if(x.product.productId === product.productId){
        x.quantity +=1
        flag = true;
      }
      return x;
    })
    if(!flag){
      carts.push(itemCart)
    }
    // Lưu giỏ hàng vào storage
    localStorage.setItem('carts',JSON.stringify(carts));
    this.addToCart.emit();
  }

}
