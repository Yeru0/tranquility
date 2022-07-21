import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyComponent } from "./company.component";



const routes: Routes = [

  //Company route
  {
    path: "",
    component: CompanyComponent
  },

  //Register company route
  {
    path: "register-company",
    loadChildren: () => import("./register-company/register-company.module").then(m => m.RegisterCompanyModule)
  },

  //Car route
  {
    path: "car",
    loadChildren: () => import("./car/car.module").then(m => m.CarModule)
  },

  //End of Routes
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
