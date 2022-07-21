import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

import { DndDirective } from '../../firebase/storage/upload/dnd/dnd.directive';
import { SignOutDirective } from '../../firebase/auth/sign-out/sign-out.directive';
import { DeleteUserDirective } from '../../firebase/auth/delete-user/delete-user.directive';
import { ChangePasswordDirective } from '../../firebase/auth/change-password/change-password.directive';


@NgModule({
  declarations: [
    DndDirective,
    UserComponent,
    SignOutDirective,
    DeleteUserDirective,
    ChangePasswordDirective,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
