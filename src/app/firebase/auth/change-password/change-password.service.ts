import { Injectable, Inject } from '@angular/core';

import {
  Auth,
  updatePassword
} from "@angular/fire/auth";





@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {





  constructor(
    @Inject(Auth) private auth: any,
  ) { }


  changePassword(password) {



    return new Promise((resolve, reject) => {

      //Get the current user
      const currentUser = this.auth.currentUser;

      //Update password
      updatePassword(currentUser, password)
        .then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });


      //Promise end
    });


    //Change password function end
  }





}
