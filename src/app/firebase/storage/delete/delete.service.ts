import { Injectable, Inject } from '@angular/core';

import {
  Storage,
  ref, deleteObject
} from "@angular/fire/storage";





@Injectable({
  providedIn: 'root'
})
export class DeleteService {





  constructor(
    @Inject(Storage) private storage: any
  ) { }





  delete(path: string, name: string) {



    return new Promise((resolve, reject) => {



      //File reference
      const fileRef = ref(this.storage, `${path}/${name}`);

      //Delete the file
      deleteObject(fileRef)
        .then((result) => {
          resolve(result);
        }).catch((err) => {
          reject(err);
        });



      //Promise end
    });



    //Delete function end
  }





}
