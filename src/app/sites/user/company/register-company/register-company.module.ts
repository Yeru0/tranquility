import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCompanyRoutingModule } from './register-company-routing.module';
import { RegisterCompanyComponent } from './register-company.component';


@NgModule({
  declarations: [
    RegisterCompanyComponent
  ],
  imports: [
    CommonModule,
    RegisterCompanyRoutingModule
  ]
})
export class RegisterCompanyModule { }
