import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixerRendezvousPage } from './fixer-rendezvous.page';

const routes: Routes = [
  {
    path: '',
    component: FixerRendezvousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixerRendezvousPageRoutingModule {}
