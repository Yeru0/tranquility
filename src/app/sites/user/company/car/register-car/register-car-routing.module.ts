import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterCarComponent } from "./register-car.component";

const routes: Routes = [

  //Register car route
  {
    path: "",
    component: RegisterCarComponent
  }

  //End of Routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCarRoutingModule { }
