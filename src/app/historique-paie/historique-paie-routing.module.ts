import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriquePaiePage } from './historique-paie.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriquePaiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriquePaiePageRoutingModule {}
