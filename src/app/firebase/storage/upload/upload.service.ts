import { Injectable, Inject } from '@angular/core';

import {
  Storage,
  ref, uploadBytesResumable
} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    @Inject(Storage) private storage: any,
  ) { }

  upload(where, name, file) {

    const storageRef = `${where}/${name}`;

    return uploadBytesResumable(storageRef, file);

  }

}
