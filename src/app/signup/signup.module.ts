import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { InputModule } from '../input/input.module';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,RadioButtonModule,
    IonicModule,
    InputModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
