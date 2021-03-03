import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product.models';
import { ProductService } from 'src/app/Service/product.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  // template: `<div>
  //     {{product.name}}
  // </div>`,
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() addToCart:EventEmitter<any> = new EventEmitter<any>();

  product: Product = new Product()

  relatedProduct : any[] = []

  imageProduct: any[] = []

  constructor( 
    private router:Router,
    private route : ActivatedRoute,
    private productService:ProductService
    ) { }

  ngOnInit(): void {

    // this.snapshotParamMethod();
    this.paramMethod();

  }
  // snapshotParamMethod(){
  //   this.productService.getOne(this.route.snapshot.params['id']).subscribe((res) =>{
  //     this.product = res;
  //   })
  // }

  paramMethod(){
    this.route.params.subscribe(data => {
      this.productService.getProductById(data.id).subscribe((res)=>{
        this.product = res;
        let imageUrl: string
        for (let i = 0; i < res.listImgDTO.length; i++) {
          imageUrl = res.listImgDTO[i].imageUrl
          this.imageProduct.push(imageUrl)
        }
      })
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
    this.addToCart.emit()
  }

}

