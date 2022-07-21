import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

//Unauthorized route protection
import { AuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

//Unsubscribed route protection
import { SubscribedGuard } from "../../guards/subscribed/subscribed.guard";


//Unauthorized route protection
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['user/login']);



const routes: Routes = [



  //Main route protection
  {
    path: '', component: UserComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },


  //Sing up module lazy loading
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
  },


  //Login module lazy loading
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },


  //Company module lazy loading
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
    canActivate: [SubscribedGuard],
  },


  //Forgot password module lazy loading
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  }



  //End of routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
