import { Component, OnInit, Inject } from "@angular/core";
//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"]
})
export class CompanyComponent implements OnInit {



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
        name: "description", content: "Check out this company on Tranquility community car rental"
      },

      //Keywords
      {
        name: "keywords", contents: "Tranquility, company settings, settings, company, display, display company"
      },

      //End of addMetaTags
    ]);



    //Adding a title to the page
    this.title.setTitle("Tranquility: Company");


    //End of ngOnInit
  }





}
