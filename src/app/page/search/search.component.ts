import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() addToCart:EventEmitter<any> = new EventEmitter<any>();

  search : String= ''

  products: any[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramMethod()
  }

  paramMethod(){
    this.route.params.subscribe(res => 
      this.productService.getProductSearch(res.search).subscribe((res) => {
        console.log(res)
        this.products = res.listproDTO;
      })
    )
  }

  snapShotParamMethod(){
    console.log(this.route.snapshot.params['search'])
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

  
  seachProduct(){
    this.router.navigate(['/search/'+this.search])
  }
}
