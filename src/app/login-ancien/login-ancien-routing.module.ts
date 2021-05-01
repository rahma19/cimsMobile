import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAncienPage } from './login-ancien.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAncienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAncienPageRoutingModule {}
