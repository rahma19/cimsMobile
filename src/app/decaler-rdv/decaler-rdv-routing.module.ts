import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecalerRdvPage } from './decaler-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: DecalerRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecalerRdvPageRoutingModule {}
