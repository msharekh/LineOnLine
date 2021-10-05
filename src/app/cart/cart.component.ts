import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


//import {  } from "CartService";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    //private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
