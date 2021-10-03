import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.categoryForm = new FormGroup({
      categoryname: new FormControl(),
      restaurantname: new FormControl(),
    });
  }

}
