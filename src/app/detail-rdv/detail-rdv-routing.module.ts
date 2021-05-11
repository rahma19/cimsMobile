import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRdvPage } from './detail-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRdvPageRoutingModule {}
