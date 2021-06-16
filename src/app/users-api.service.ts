import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) {
    console.log('service start');
  }

  getUserApi() {

    return this.http.get("https://jsonplaceholder.typicode.com/photos");

  }
}
