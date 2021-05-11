import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRdvPageRoutingModule } from './liste-rdv-routing.module';

import { ListeRdvPage } from './liste-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRdvPageRoutingModule
  ],
  declarations: [ListeRdvPage]
})
export class ListeRdvPageModule {}
