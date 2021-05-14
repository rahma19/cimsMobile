import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprimerRecuPageRoutingModule } from './imprimer-recu-routing.module';

import { ImprimerRecuPage } from './imprimer-recu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImprimerRecuPageRoutingModule
  ],
  declarations: [ImprimerRecuPage]
})
export class ImprimerRecuPageModule {}
