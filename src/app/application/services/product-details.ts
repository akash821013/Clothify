import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDetails {
  constructor(private http: HttpClient) {}

  getProductDetails() {
    return this.http.get(`https://api.example.com/products`);
  }

}
