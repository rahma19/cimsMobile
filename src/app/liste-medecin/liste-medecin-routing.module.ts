import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeMedecinPage } from './liste-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: ListeMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeMedecinPageRoutingModule {}
