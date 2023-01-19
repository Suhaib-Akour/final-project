import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorsComponent } from './sectors/sectors.component';

const routes: Routes = [
  {path:'',
   redirectTo:'all-sectors',
   pathMatch:'full'
},
{
  path:'all-sectors',
  component:SectorsComponent
},
{
  path:'**',
  redirectTo:'all-sectors',
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorsRoutingModule { }
