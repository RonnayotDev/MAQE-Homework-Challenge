import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseURL: string = 'https://maqe.github.io/json'

  http = inject(HttpClient)

  getAuthors(){
    return this.http.get<any>(`${this.baseURL}/authors.json`)
  }
  getPosts(){
    return this.http.get<any>(`${this.baseURL}/posts.json`)
  }
}
