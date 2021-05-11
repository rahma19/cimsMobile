import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriquePaiePageRoutingModule } from './historique-paie-routing.module';

import { HistoriquePaiePage } from './historique-paie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriquePaiePageRoutingModule
  ],
  declarations: [HistoriquePaiePage]
})
export class HistoriquePaiePageModule {}
