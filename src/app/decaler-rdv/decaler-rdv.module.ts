import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecalerRdvPageRoutingModule } from './decaler-rdv-routing.module';

import { DecalerRdvPage } from './decaler-rdv.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [
    CommonModule,MatFormFieldModule,
    FormsModule,MatInputModule,InputModule,
    IonicModule,MatSelectModule,
    DecalerRdvPageRoutingModule
  ],
  declarations: [DecalerRdvPage]
})
export class DecalerRdvPageModule {}
