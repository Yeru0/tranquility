import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



//Auth guard
import { AuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["user/login"]);



const routes: Routes = [

  //Redirect to home
  { path: "", pathMatch: "full", redirectTo: "home" },



  //Lazy load home module
  { path: "home", loadChildren: () => import("./sites/home/home.module").then(m => m.HomeModule) },

  //Lazy load user module
  { path: "user", loadChildren: () => import("./sites/user/user.module").then(m => m.UserModule) },

  //Lazy load free trial module
  {
    path: "trial",
    loadChildren: () => import("./sites/trial/trial.module").then(m => m.TrialModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

  //End of Routes
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
