import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: 'home', loadChildren: () => import('./sites/home/home.module').then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./sites/user/user.module').then(m => m.UserModule) },
  { path: 'trial', loadChildren: () => import('./sites/trial/trial.module').then(m => m.TrialModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
