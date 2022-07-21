import { Component, OnInit, Inject } from "@angular/core";
//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: "app-trial",
  templateUrl: "./trial.component.html",
  styleUrls: ["./trial.component.scss"]
})
export class TrialComponent implements OnInit {



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
        name: "description", content: "Try out Tranquility community car rental website for free!"
      },

      //Keywords
      {
        name: "keywords", contents: "Tranquility, free trial"
      },

      //End of addMetaTags
    ]);



    //Adding a title to the page
    this.title.setTitle("Tranquility: Free Trial");


    //End of ngOnInit
  }





}
