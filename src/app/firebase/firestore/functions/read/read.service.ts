import { Injectable, Inject } from '@angular/core';

import {
  Firestore,
  collection, collectionData,
  where, query, getDocs
} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ReadService {





  constructor(
    @Inject(Firestore) private db: any
  ) { }





  //Read a whole collection
  readCollection(collectionToRead: string) {



    //Colelction reference
    const colRef = collection(this.db, collectionToRead);
    //Return collection data
    return collectionData(colRef);



    //End of read collection
  }





  //Read a single doc or multiple docs (where field condition search (e. g. "name" ""==" " "Yeru"))
  readDoc(collectionToRead: string, field: string, condition: string, search: string) {



    //Create a colelction reference
    const colRef = collection(this.db, collectionToRead);
    //Create a query
    const q = query(colRef, where(field, condition, search));

    const documents: Array<Object> = [];

    //Get the docs by the query
    const querySnapshot = getDocs(q);
    //Push the document to the "documents" array
    querySnapshot.forEach((doc) => {
      documents.push(doc);
    });

    //Return documents
    return documents;



    //End of readDoc function
  };





}
