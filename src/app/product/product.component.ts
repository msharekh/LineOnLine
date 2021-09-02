import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  /* <tr>
    <td>1010101000018</td>
    <td>برغر مع جبن</td>
    <td>26.00 رس</td>
  </tr>
  <tr>
    <td>1010333000018</td>
    <td>بيتزا خضراوات</td>
    <td>16.00 رس</td>
  </tr>
  <tr>
    <td>1010101034518</td>
    <td>شوربة ذرة</td>
    <td>11.00 رس</td>
  </tr> */
  products = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {

    // this.products.push({
    //   id: '1010101000018',
    //   name: 'برغر مع جبن',
    //   description: 'برغر مع جبن ـ وصف المنتج/*  */',
    //   price: '16.00 رس',
    //   imageUrl: "https://source.unsplash.com/1600x900/?product",
    //   quantity: 5
    // })

    this.dataService.sendGetRequestProdcut().subscribe((data: any[]) => {
      
      //return data from calling API
      
      console.log(data);
      this.products = data;
    })

  }

}
