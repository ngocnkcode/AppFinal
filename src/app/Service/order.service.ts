import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';

const apiURL = 'https://ngocnk-projectapi.herokuapp.com/api/v1/order'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient:HttpClient
  ) { }

  addOrder(order:Order): Observable<Order>{
    return this.httpClient.post<Order>(apiURL+"/add",order)
  }

  getOrderById(id:number): Observable<Order>{
    return this.httpClient.get<Order>(apiURL+"/"+id);
  }
}
