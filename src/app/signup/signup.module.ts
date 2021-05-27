import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { InputModule } from '../input/input.module';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,MatInputModule,
    FormsModule,RadioButtonModule,
    IonicModule,CalendarModule,
    InputModule,MatFormFieldModule,
    SignupPageRoutingModule,MatSelectModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
