import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants = [];
  constructor(private dataService: DataService) { }
  ngOnInit() {
   

    this.dataService.sendGetRequestRestaurants().subscribe((data: any[]) => {
      
      //return data from calling API
      
      console.log(data);
      this.restaurants = data;
    })
  }



}
