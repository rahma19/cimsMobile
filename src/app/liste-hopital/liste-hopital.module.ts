import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeHopitalPageRoutingModule } from './liste-hopital-routing.module';

import { ListeHopitalPage } from './liste-hopital.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,Ng2SearchPipeModule,
    IonicModule,
    ListeHopitalPageRoutingModule
  ],
  declarations: [ListeHopitalPage]
})
export class ListeHopitalPageModule {}
