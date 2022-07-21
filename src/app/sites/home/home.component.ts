import { Component, OnInit, Inject } from "@angular/core";

//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {



  constructor(
    //Meta tags
    @Inject(Meta) private meta: any,
    //Title
    @Inject(Title) private title: any
  ) { }





  ngOnInit(): void {



    //Adding meta tags to the page
    this.meta.addTags([

      //Description
      {
        name: "description", content: "Tranquility community car rental website"
      },

      //Keywords
      {
        name: "keywords", content: "Tranquility, community car rental, car rental"
      },

      //End of addMetaTags
    ]);




    //Adding a title to the page
    this.title.setTitle("Tranquility: Home");



    //End of ngOnInit
  }





}
