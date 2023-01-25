import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStartupComponent } from './startup/add-startup/add-startup/add-startup.component';
import { StartupComponent } from './startup/startup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'startups',
    pathMatch:'full'
  },
  {
    path:'add-startup',
    component:AddStartupComponent
  },
  {
    path:'startups',
    component:StartupComponent
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupRoutingModule { }
