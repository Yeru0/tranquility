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



  //Upload a fiel
  upload(path: string, name: string, file: File) {



    //Storage reference
    const storageRef = ref(this.storage, `${path}/${name}`);

    //Upload file
    return uploadBytesResumable(storageRef, file);



    //Upload function end
  }



}
