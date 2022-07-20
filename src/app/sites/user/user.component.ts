import { Component, OnInit, Inject } from '@angular/core';
//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  constructor(
    //Meta tags
    @Inject(Meta) private meta: any,
    //Title
    @Inject(Title) private title: any,
  ) { }





  ngOnInit(): void {



    //Adding meta tags to the page
    this.meta.addTags([

      //Description
      {
        name: "description", content: "Checkout this user on Tranquility community car rental"
      },

      //Keywords
      {
        name: "keywords", contents: "Tranquility, user setings, settings, user, display, display user"
      },

      //End of addMetaTags
    ]);



    //Adding a title to the page
    this.title.setTitle("Tranquility: Settings");


    //End of ngOnInit
  }





}
