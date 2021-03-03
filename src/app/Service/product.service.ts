import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPage } from '../Models/product-page.models';
import { Product } from '../Models/product.models';

const apiUrl = "https://ngocnk-projectapi.herokuapp.com/api/v1/product"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(apiUrl)
  }

  getProductById(id:String):Observable<Product>{
    return this.httpClient.get<Product>(apiUrl + "/" +id);
  }

  getProductByPage(pageNumber:number): Observable<any>{
    return this.httpClient.get<any>(apiUrl+"/paging"+"/"+pageNumber)
  }

  getProductSearch(search:String): Observable<any>{
    return this.httpClient.get<any>(apiUrl+"/search/"+search);
  }
}
