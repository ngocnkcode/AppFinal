import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiURL = "https://ngocnk-projectapi.herokuapp.com/api/v1/orderdetail"

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {

  constructor(
    private httpClient : HttpClient
  ) { }
}
