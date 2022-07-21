import { Component, OnInit, Inject } from "@angular/core";
//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: "app-register-company",
  templateUrl: "./register-company.component.html",
  styleUrls: ["./register-company.component.scss"]
})
export class RegisterCompanyComponent implements OnInit {



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
        name: "description", content: "Register and link a company to your Tranquility community car rental page account."
      },

      //Keywords
      {
        name: "keywords", contents: "Tranquility, register company"
      },

      //End of addMetaTags
    ]);



    //Adding a title to the page
    this.title.setTitle("Tranquility: Register Company");


    //End of ngOnInit
  }





}
