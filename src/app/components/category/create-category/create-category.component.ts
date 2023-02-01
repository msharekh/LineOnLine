import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../../data.service';

//const mysql = require('mysql');

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categorynameLength=0;

  categoryForm: FormGroup;
  constructor(private fb:FormBuilder,private dataService: DataService) { }
  
  products = [];

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryname: ['',Validators.required],
      restaurantname: [''],
      details: this.fb.group({
        a1:[''],
        a2:[''],
        a3:['']
      })
    });

    // this.categoryForm.valueChanges.subscribe((value:any) =>{
    //   console.log(JSON.stringify(value));
    //   this.categorynameLength=value.length;
    // });
  }

 

  onSubmit(): void {
    const categoryname = this.categoryForm.get('categoryname').value;
    const restaurantname = this.categoryForm.get('restaurantname').value;
    // console.log(this.categoryForm);
    // console.log(this.categoryForm.controls.categoryname.valid);
    console.log(categoryname);
    console.log(restaurantname);

    var obj = { 
      owner:categoryname, 
      name:restaurantname ,
      description:"description ........ description", 
      date:"01-02-2023"
     };

    this.dataService.sendGetRequestEVENT(obj).subscribe((data: any[]) => {
      
      //return data from calling API
      
      console.log(data);
      this.products = data;
    })

  }
  
  // onLoadDataClick(): void {
  //   console.log(this.categoryForm);

  //   this.categoryForm.setValue({
  //     categoryname: 'Ch Burger',
  //     restaurantname: 'Hardeez',
  //     details:{
  //       a1:'11111',
  //       a2:'22222',
  //       a3:'33333'
  //     }
  //   })
  // }

}
