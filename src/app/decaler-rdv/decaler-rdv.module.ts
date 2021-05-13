import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecalerRdvPageRoutingModule } from './decaler-rdv-routing.module';

import { DecalerRdvPage } from './decaler-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecalerRdvPageRoutingModule
  ],
  declarations: [DecalerRdvPage]
})
export class DecalerRdvPageModule {}
