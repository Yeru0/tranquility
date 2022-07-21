import { Injectable, Inject } from '@angular/core';

import {
  Auth,
  loginWithEmailAndPassword
} from "@angular/fire/auth";





@Injectable({
  providedIn: 'root'
})
export class EmailAndPasswordService {



  constructor(
    @Inject(Auth) private auth: any
  ) { }



  login(email, password) {


    return new Promise((resolve, reject) => {


      //Login with email and password
      loginWithEmailAndPassword(this.auth, email, password)
        .then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });


      //Promise end
    });

    //Login function end
  }


}
