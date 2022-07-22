import { Injectable, Inject } from '@angular/core';

import {
  Storage,
  ref, getDownloadURL
} from "@angular/fire/storage";





@Injectable({
  providedIn: 'root'
})
export class DownloadService {



  constructor(
    @Inject(Storage) private storage: any,
  ) { }





  //Download a file
  download(path: string, name: string) {


    return new Promise((resolve, reject) => {


      //File reference
      const fileRef = ref(this.storage, `${path}/${name}`);

      //Download
      getDownloadURL(fileRef)
        .then((url) => {
          resolve(url);
        }).catch((err) => {
          reject(err);
        });


      //Promise end
    });


    //Download function end
  };





}
