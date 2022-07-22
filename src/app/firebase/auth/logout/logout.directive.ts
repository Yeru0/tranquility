import {
  Directive, Inject,
  HostListener,
  Output, EventEmitter
} from '@angular/core';

import {
  Auth,
  signOut
} from "@angular/fire/auth";





@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective {



  //Output message
  @Output() outputMessage = new EventEmitter<void>();



  constructor(
    @Inject(Auth) private auth: any,
  ) { }



  //Listening to the click event
  @HostListener("click") onClick() {



    //Logout
    signOut(this.auth)
      .then((result) => {
        this.outputMessage.emit(result);
      }).catch((err) => {
        this.outputMessage.emit(err);
      });



    //HostListener end
  }



}
