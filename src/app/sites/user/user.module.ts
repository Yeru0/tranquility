import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

import { DndDirective } from '../../firebase/storage/upload/dnd/dnd.directive';
import { LogoutDirective } from '../../firebase/auth/logout/logout.directive';
import { DeleteUserDirective } from '../../firebase/auth/delete-user/delete-user.directive';


@NgModule({
  declarations: [
    UserComponent,
    DndDirective,
    DeleteUserDirective,
    LogoutDirective,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
