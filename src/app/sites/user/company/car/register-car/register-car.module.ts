import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCarRoutingModule } from './register-car-routing.module';
import { RegisterCarComponent } from './register-car.component';


@NgModule({
  declarations: [
    RegisterCarComponent
  ],
  imports: [
    CommonModule,
    RegisterCarRoutingModule
  ]
})
export class RegisterCarModule { }
