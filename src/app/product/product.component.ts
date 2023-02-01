import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})    
export class ProductComponent implements OnInit {

  products = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {

     this.dataService.sendGetRequestProducts().subscribe((data: any[]) => {
      
      //return data from calling API
      
      console.log(data);
      this.products = data;
    })

  }

}
