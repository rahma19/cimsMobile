import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAncienPageRoutingModule } from './login-ancien-routing.module';

import { LoginAncienPage } from './login-ancien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAncienPageRoutingModule
  ],
  declarations: [LoginAncienPage]
})
export class LoginAncienPageModule {}
