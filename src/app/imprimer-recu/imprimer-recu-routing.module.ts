import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImprimerRecuPage } from './imprimer-recu.page';

const routes: Routes = [
  {
    path: '',
    component: ImprimerRecuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprimerRecuPageRoutingModule {}
