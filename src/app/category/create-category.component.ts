import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.categoryForm = new FormGroup({
      categoryname: new FormControl(),
      restaurantname: new FormControl(),
      details: new FormGroup({
        a1:new FormControl(),
        a2:new FormControl(),
        a3:new FormControl()
      })
    });
  }

  onSubmit(): void {
    console.log(this.categoryForm);
    console.log(this.categoryForm.get('categoryname'));
    console.log(this.categoryForm.controls.categoryname.touched);

  }

  onLoadDataClick(): void {
    console.log(this.categoryForm);

    this.categoryForm.setValue({
      categoryname: 'Ch Burger',
      restaurantname: 'Hardeez',
      details:{
        a1:'11111',
        a2:'22222',
        a3:'33333'
      }
    })
  }

}
