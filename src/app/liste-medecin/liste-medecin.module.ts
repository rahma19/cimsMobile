import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMedecinPageRoutingModule } from './liste-medecin-routing.module';

import { ListeMedecinPage } from './liste-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeMedecinPageRoutingModule
  ],
  declarations: [ListeMedecinPage]
})
export class ListeMedecinPageModule {}
