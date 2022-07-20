import { Component, OnInit, Inject } from '@angular/core';
//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.component.html',
  styleUrls: ['./register-car.component.scss']
})
export class RegisterCarComponent implements OnInit {



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
        name: "description", content: "Register and link a car to your Tranquility community car rental company"
      },

      //Keywords
      {
        name: "keywords", contents: "Tranquility, car, register, register car"
      },

      //End of addMetaTags
    ]);



    //Adding a title to the page
    this.title.setTitle("Tranquility: Free Trial");


    //End of ngOnInit
  }





}
