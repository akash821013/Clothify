import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Body } from '../dashboard/body/body';
import { Navbar } from './header/navbar/navbar';

const routes: Routes = [

  {
    path: '',
    component: Body,
    title: 'Dashboard'
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { 


}
