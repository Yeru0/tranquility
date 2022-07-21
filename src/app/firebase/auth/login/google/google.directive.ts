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

  //Set provider
  provider: any;



  constructor(
    @Inject(Auth) private auth: any
  ) {
    //Set provider
    this.provider = new GoogleAuthProvider();
  }



  //Listen to click envent
  @HostListener("click") onClick() {


    //Logging in with popup windiw
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        this.outputMessage.emit(result);
      }).catch((err) => {
        this.outputMessage.emit(err);
      });


    //HostListener End
  };



}
