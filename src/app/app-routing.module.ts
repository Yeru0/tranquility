import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./sites/home/home.module').then(m => m.HomeModule) }, { path: 'user', loadChildren: () => import('./sites/user/user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
