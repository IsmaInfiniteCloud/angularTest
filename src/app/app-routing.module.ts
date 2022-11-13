import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { DetailsComponent } from './details/details.component';
import { EmployesComponent } from './employes/employes.component';

const routes: Routes = [
  {path:"employes", component: EmployesComponent},
  {path:"employes/:id", component: DetailsComponent},
  {path:"ajout", component: AjoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
