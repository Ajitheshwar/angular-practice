import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  constructor(private data : DataService, public router: Router){}

  ngOnInit(): void {
    this.addresses = this.data.getAddress()
  }

  role : string = ''
  addresses : any[] = []

  updateRole(event : any){
    console.log(event.target.value)
    this.role = event.target.value
  }
}
