import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeRdvPage } from './liste-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: ListeRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeRdvPageRoutingModule {}
