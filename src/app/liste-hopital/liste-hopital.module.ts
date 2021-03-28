import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeHopitalPageRoutingModule } from './liste-hopital-routing.module';

import { ListeHopitalPage } from './liste-hopital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeHopitalPageRoutingModule
  ],
  declarations: [ListeHopitalPage]
})
export class ListeHopitalPageModule {}
