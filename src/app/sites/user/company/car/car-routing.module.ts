import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car.component';

const routes: Routes = [{ path: '', component: CarComponent }, { path: 'register-car', loadChildren: () => import('./register-car/register-car.module').then(m => m.RegisterCarModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
