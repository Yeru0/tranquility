import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterCompanyComponent } from "./register-company.component";

const routes: Routes = [

  //REgister company path
  {
    path: "",
    component: RegisterCompanyComponent
  },

  //End of Routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCompanyRoutingModule { }
