import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

import { DndDirective } from '../../firebase/storage/upload/dnd/dnd.directive';


@NgModule({
  declarations: [
    DndDirective,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
