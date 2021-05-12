import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriquePaiePageRoutingModule } from './historique-paie-routing.module';
import { ImprimeRecuComponent } from '../imprime-recu/imprime-recu.component';
import { HistoriquePaiePage } from './historique-paie.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,Ng2SearchPipeModule,
    HistoriquePaiePageRoutingModule
  ],
  declarations: [HistoriquePaiePage,ImprimeRecuComponent]
})
export class HistoriquePaiePageModule {}
