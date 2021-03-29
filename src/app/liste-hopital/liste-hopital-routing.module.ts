import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeMedecinPage } from '../liste-medecin/liste-medecin.page';

import { ListeHopitalPage } from './liste-hopital.page';

const routes: Routes = [
  {
    path: '',
    component: ListeHopitalPage
  },
  {
    path:'list-medecin',
    component:ListeMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeHopitalPageRoutingModule {}
