import {
  Directive, Inject,
  HostListener,
  EventEmitter, Output
} from '@angular/core';

import {
  Auth,
  deleteUser,
} from "@angular/fire/auth";





@Directive({
  selector: '[appDeleteUser]'
})
export class DeleteUserDirective {



  //Output message
  @Output() outputMessage = new EventEmitter<string>();



  constructor(
    @Inject(Auth) private auth: any
  ) { }



  //Click listener
  @HostListener("click") onClick() {


    //User reference
    const user = this.auth.currentUser;

    //Delete user
    deleteUser(user)
      .then((result) => {
        outputMessage.emit(result);
      }).catch((err) => {
        outputMessage.emit(err);
      });


    //End of HostListener
  }



}
