import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeMedicamentPage } from './liste-medicament.page';

const routes: Routes = [
  {
    path: '',
    component: ListeMedicamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeMedicamentPageRoutingModule {}
