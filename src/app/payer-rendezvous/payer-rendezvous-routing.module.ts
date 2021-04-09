import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerRendezvousPage } from './payer-rendezvous.page';

const routes: Routes = [
  {
    path: '',
    component: PayerRendezvousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerRendezvousPageRoutingModule {}
