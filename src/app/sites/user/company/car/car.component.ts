import { Component, OnInit, Inject } from '@angular/core';
//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {



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
        name: "description", content: "Check out this car on Tranquility community car rental"
      },

      //Keywords
      {
        name: "keywords", contents: "Tranquility, car, settings, car settings, display, car display"
      },

      //End of addMetaTags
    ]);



    //Adding a title to the page
    this.title.setTitle("Tranquility: Car");


    //End of ngOnInit
  }





}
