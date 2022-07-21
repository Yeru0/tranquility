import { Injectable, Inject } from '@angular/core';

import {
  Auth,
  sendSingInLinkToEmail
} from "@angular/fire/auth";





@Injectable({
  providedIn: 'root'
})
export class EmailOnlyService {

  constructor(
    @Inject(Auth) private auth: any
  ) { }

  login(email) {

    alert("Logging in with email only is still in a dummy state!");

    return new Promise((result, reject) => {

      const actionCodeSettings = {
        url: "127.0.0.1/home",
        handleCodeInApp: true,
      };

      sendSingInLinkToEmail(this.auth, email, actionCodeSettings)
        .then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });

    });


  }


}
