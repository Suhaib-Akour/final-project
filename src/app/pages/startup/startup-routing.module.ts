import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupComponent } from './startup/startup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'all-startup',
    pathMatch:'full'
  },
  {
    path:'all-startup',
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
