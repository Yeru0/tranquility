import { Injectable, Inject } from '@angular/core';

import {
  Auth,
  sendPasswordResetEmail
} from "@angular/fire/auth";





@Injectable({
  providedIn: 'root'
})
export class PasswordResetEmailService {



  constructor(
    @Inject(Auth) private auth: any,
  ) { }


  //Send a password reset email
  sendEmail(email) {



    return new Promise((resolve, reject) => {


      //Send the email
      sendPasswordResetEmail(this.auth, email)
        .then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });



      //Promise end
    });



    //sendEmail function end
  }



}
