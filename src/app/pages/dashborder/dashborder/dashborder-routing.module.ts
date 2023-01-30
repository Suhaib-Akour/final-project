import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashborderComponent } from './dashborder/dashborder.component';
import { UpdateStartupComponent } from './dashborder/update-startup/update-startup/update-startup.component';

const routes: Routes = [
  {path:'',
  redirectTo:'dashborder',
  pathMatch:'full'
},
{
 path:'dashborder',
 component:DashborderComponent
},
{
  path:'update-startup',
  component:UpdateStartupComponent
 },
{
 path:'**',
 redirectTo:'dashborder',
 pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashborderRoutingModule { }
