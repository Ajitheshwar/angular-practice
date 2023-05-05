import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayDataRoutingModule } from './display-data-routing.module';
import { DisplayDataComponent } from './display-data.component';
import { DisplayAddressComponent } from './display-address/display-address.component';


@NgModule({
  declarations: [
    DisplayDataComponent,
    DisplayAddressComponent
  ],
  imports: [
    CommonModule,
    DisplayDataRoutingModule
  ]
})
export class DisplayDataModule { }
