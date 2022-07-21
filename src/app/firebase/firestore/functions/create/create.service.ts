import { Injectable, Inject } from '@angular/core';

//Firebase
import {
  Firestore,
  collection, addDoc,
  doc, updateDoc
} from "@angular/fire/firestore";

//Datr.js
import * as Date from "datr.js";





@Injectable({
  providedIn: 'root'
})
export class CreateService {





  constructor(
    @Inject(Firestore) private db: any,
    @Inject(Date) private date: any,
  ) { }





  add(collectionToAdd: string, dataToAdd: object) {

    return new Promise((resolve, reject) => {

      const colRef = collection(this.db, collectionToAdd);

      addDoc(colRef, dataToAdd)
        .then((result) => {


          //Doc reference
          const docRef = doc(this.db, collectionToAdd, result.id);

          //Current time
          const time = this.date.get("YYMDdhhhhmmmssssssZ");



          //Updating the crated doc with it's ID an the time that it was created
          updateDoc(docRef, {

            id: result.id,
            createdAt: time

          })
            .then((result) => {

              resolve(result);

            }).catch((err) => {

              reject(err);

              //End of updateDo then catch block
            });



        }).catch((err) => {

          reject(err);



          //End of addDoc then catch block
        });



      //End of Promise
    });



    //End of Add function
  }



}
