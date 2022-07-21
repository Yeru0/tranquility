import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrialComponent } from "./trial.component";

const routes: Routes = [

  //Trial route
  {
    path: "",
    component: TrialComponent
  }

  //End of Routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrialRoutingModule { }
