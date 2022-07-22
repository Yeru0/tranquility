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
  upload(where: string, name: string, file: File) {



    //Storage reference
    const storageRef = ref(this.storage, `${where}/${name}`);

    //Upload file
    return uploadBytesResumable(storageRef, file);



    //Upload function end
  }



}
