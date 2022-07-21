import { Injectable, Inject } from '@angular/core';

import {
  Auth,
  updateEmail
} from "@angular/fire/auth";





@Injectable({
  providedIn: 'root'
})
export class ChangeEmailService {



  constructor(
    @Inject(Auth) private auth: any
  ) { }





  update(email: string) {



    return new Promise((resolve, reject) => {



      //Update email
      updateEmail(this.auth.currentUser, email)
        .then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });



      //End of promise
    });



    //End of update function
  }



}
