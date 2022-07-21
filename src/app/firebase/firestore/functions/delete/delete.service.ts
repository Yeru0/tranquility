import { Injectable, Inject } from '@angular/core';

import {
  Firestore,
  doc, deleteDoc
} from "@angular/fire/firestore";





@Injectable({
  providedIn: 'root'
})
export class DeleteService {





  constructor(
    @Inject(Firestore) private db,
  ) { }



  delete(collectionFromDelete: string, id: string) {


    return new Promise((resolve, reject) => {

      //Doc ref
      const docRef = doc(this.db, collectionFromDelete, id);

      //Delete the doc
      deleteDoc(docRef)
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
