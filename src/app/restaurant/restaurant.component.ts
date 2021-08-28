import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name: string = "Steve";

  greet(): void {
      alert("Hello " + this.name);
  };

}
