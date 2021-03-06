import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categorynameLength=0;

  categoryForm: FormGroup;
  constructor(private fb:FormBuilder) { }

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
    // console.log(this.categoryForm);
    console.log(this.categoryForm.get('categoryname').value);
    console.log(this.categoryForm.get('restaurantname').value);
    // console.log(this.categoryForm.controls.categoryname.valid);

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
