import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER_ANY_PRODUCTS = "http://localhost:3000/any-products";
  private REST_API_SERVER_PRODUCTS = "http://localhost:3000/products";
  private REST_API_SERVER_RESTAURANTS = "http://localhost:3000/restaurants";
  private REST_API_SERVER_CATEGORIES = "http://localhost:3000/categories";

  //Client
  constructor(private httpClient: HttpClient) { }

  //Client calling GET

  //ANY_PRODUCTS
  public sendGetRequestAnyProducts() {

    return this.httpClient.get(this.REST_API_SERVER_ANY_PRODUCTS);

  }
  // PRODUCTS
  public sendGetRequestProducts() {

    return this.httpClient.get(this.REST_API_SERVER_PRODUCTS);

  }

  //RESTAURANTS
  public sendGetRequestRestaurants() {

    return this.httpClient.get(this.REST_API_SERVER_RESTAURANTS);

  }

  //CATEGORIES
  public sendGetRequestCategories() {

    return this.httpClient.get(this.REST_API_SERVER_CATEGORIES);

  }
}
