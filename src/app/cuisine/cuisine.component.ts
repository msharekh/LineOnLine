import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {
  products = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequestAnyProducts().subscribe((data: any[]) => {
      
      //return data from calling API
      
      console.log(data);
      this.products = data;
    })
  }

}
