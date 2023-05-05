import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  addresses : any[] = [
    {
      name : "ajith@gmail.com",
      role : 'Student',
      address : 'Manjeera colony, JNTU',
      city : 'Hyderabad',
      pincode : 500012
    },
    {
      name : "ajith@gmail.com",
      role : 'Professor',
      address : 'Manjeera colony, JNTU',
      city : 'Hyderabad',
      pincode : 500012
    },
    {
      name : "ajith@gmail.com",
      role : 'HOD',
      address : 'Manjeera colony, JNTU',
      city : 'Hyderabad',
      pincode : 500012
    },
    {
      name : "ajith@gmail.com",
      role : 'HOD',
      address : 'Manjeera colony, JNTU',
      city : 'Hyderabad',
      pincode : 500012
    },
  ]

  updateAddress(obj : any){
    this.addresses.push(obj)
  }

  getAddress(){
    return this.addresses
  }

}
