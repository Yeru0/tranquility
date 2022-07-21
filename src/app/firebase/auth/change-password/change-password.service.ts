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

  }

}
