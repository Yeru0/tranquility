import {
  Directive, Inject,
  HostListener,
  Output, EventEmitter
} from '@angular/core';

import {
  Auth,
  signInWithPopup, GoogleAuthProvider
} from "@angular/fire/auth";





@Directive({
  selector: '[appGoogle]'
})
export class GoogleDirective {


  //Output message
  @Output() outputMessage = new EventEmitter<any>();


  provider: any;



  constructor(
    @Inject(Auth) private auth: any
  ) {
    this.provider = new GoogleAuthProvider();
  }


  //Listening ti the click event
  @HostListener("click") onClick() {


    //Signing up with popup
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        this.outputMessage.emit(result);
      }).catch((err) => {
        this.outputMessage.emit(err);
      });


    //HostListener end
  }



}
