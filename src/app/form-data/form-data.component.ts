import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  constructor (private fb : FormBuilder, private data : DataService, private router : Router){}

  addressForm = this.fb.group({
    email : [''],
    role : [''],
    address : [''],
    city  : [''],
    state : [''],
    pincode : ['']
  })

  submitForm(){
    console.log(this.addressForm.value)
    this.data.updateAddress(this.addressForm.value)
    this.router.navigateByUrl("/displayData")
  }
}
