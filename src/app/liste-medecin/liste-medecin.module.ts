import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMedecinPageRoutingModule } from './liste-medecin-routing.module';

import { ListeMedecinPage } from './liste-medecin.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,Ng2SearchPipeModule,
    IonicModule,ToastModule,
    ListeMedecinPageRoutingModule
  ],
  declarations: [ListeMedecinPage]
})
export class ListeMedecinPageModule {}
