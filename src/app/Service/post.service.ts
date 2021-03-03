import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/post.models';

const apiUrl = "https://ngocnk-projectapi.herokuapp.com/api/v1/post"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(apiUrl);
  }
}
