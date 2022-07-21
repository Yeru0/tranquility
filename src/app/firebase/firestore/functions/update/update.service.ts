import { Injectable, Inject } from '@angular/core';

import {
  Firestore,
  doc, updateDoc
} from "@angular/fire/firestore";





@Injectable({
  providedIn: 'root'
})
export class UpdateService {





  constructor(
    @Inject(Firestore) private db: any,
  ) { }





  update(collectionToUpdate: string, id: string, dataToUpdate: object) {



    return new Promise((resolve, reject) => {



      //Doc ref
      const docRef = doc(this.db, collectionToUpdate, id);

      //Update doc
      updateDoc(docRef, dataToUpdate)
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
