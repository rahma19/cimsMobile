import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeHopitalPage } from './liste-hopital.page';

const routes: Routes = [
  {
    path: '',
    component: ListeHopitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeHopitalPageRoutingModule {}
