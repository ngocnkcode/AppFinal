import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductPage } from 'src/app/Models/product-page.models';
import { ProductPaging } from 'src/app/Models/product-paging.models';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Output() addToCart:EventEmitter<any> = new EventEmitter<any>();

  productsArr : ProductPaging = new ProductPaging()
  productPage : ProductPage = new ProductPage()

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
      this.productPage.pageNumber = 0;
      this.getProductForPage()
    }

  nextPage(){
    this.productPage.pageNumber = this.productPage.pageNumber + 1;
    this.getProductForPage()
  }

  previousPage(){
    this.productPage.pageNumber = this.productPage.pageNumber - 1;
    this.getProductForPage()
  }

  getProductForPage(){
    this.productService.getProductByPage(this.productPage.pageNumber).subscribe((res) => {
      this.productsArr.listproDTO = []
      this.productsArr.listproDTO = res.listproDTO;
      this.productsArr.totalPage = res.totalPage;
      console.log(this.productsArr.totalPage)
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

