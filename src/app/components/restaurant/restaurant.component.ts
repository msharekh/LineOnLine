import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'Model/Restaurant/Restaurant';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants = [];
  //categories = [];
  constructor(private dataService: DataService) { }
  ngOnInit() {
   
    // import { Restaurant } from "./Restaurant";

let r = new Restaurant();

    console.log('testtt');
  console.log(r.Name);


      //RESTAURANTS

    this.dataService.sendGetRequestRestaurants().subscribe((data: any[]) => {
      
      //return data from calling API
      
      console.log(data);
      this.restaurants = data;
    })

    // //CATEGORIES
    // this.dataService.sendGetRequestCategories().subscribe((data: any[]) => {
      
    //   //return data from calling API
      
    //   console.log(data);
    //   this.categories = data;
    // })
  }



}
