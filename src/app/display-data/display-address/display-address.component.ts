import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-address',
  templateUrl: './display-address.component.html',
  styleUrls: ['./display-address.component.css']
})
export class DisplayAddressComponent {

  @Input() addressChild : any = {}
  @Input() role : string = ''
  
}
