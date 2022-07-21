import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { GoogleDirective } from '../../../firebase/auth/login/google/google.directive';


@NgModule({
  declarations: [
    LoginComponent,
    GoogleDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
