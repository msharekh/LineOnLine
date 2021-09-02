import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  private REST_API_SERVER_ANY_PRODUCTS = "http://localhost:3000/any-products";
  private REST_API_SERVER_PRODUCTS = "http://localhost:3000/products";
  private REST_API_SERVER_RESTAURANTS = "http://localhost:3000/restaurants";
  
  //Client
  constructor(private httpClient: HttpClient) { }
  
  //Client calling GET
  public sendGetRequestAnyProducts() {

    return this.httpClient.get(this.REST_API_SERVER_ANY_PRODUCTS);

  }
  public sendGetRequestProducts() {

    return this.httpClient.get(this.REST_API_SERVER_PRODUCTS);

  }

  public sendGetRequestRestaurants() {

    return this.httpClient.get(this.REST_API_SERVER_RESTAURANTS);

  }
}
