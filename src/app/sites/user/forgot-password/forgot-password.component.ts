import { Component, OnInit, Inject } from '@angular/core';
//SEO
import { Meta, Title } from "@angular/platform-browser";





@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {



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
        name: "description", content: "Reset your password for your Tranquility community car rental page account."
      },

      //Keywords
      {
        name: "keywords", contents: "Tranquility, reset password, forgot password"
      },

      //End of addMetaTags
    ]);



    //Adding a title to the page
    this.title.setTitle("Tranquility: Forgot Password");


    //End of ngOnInit
  }





}
