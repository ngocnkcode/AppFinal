import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer.models';

const apiUrl = "https://ngocnk-projectapi.herokuapp.com/api/v1/customer"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  loginCus(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(apiUrl+'/login',customer);
  }

  registerCus(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(apiUrl,customer)
  }
}
