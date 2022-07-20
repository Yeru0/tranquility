import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';

const routes: Routes = [{ path: '', component: CompanyComponent }, { path: 'register-company', loadChildren: () => import('./register-company/register-company.module').then(m => m.RegisterCompanyModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
