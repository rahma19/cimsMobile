import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeHopitalPageRoutingModule } from './liste-hopital-routing.module';

import { ListeHopitalPage } from './liste-hopital.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,MatSelectModule,
    FormsModule,Ng2SearchPipeModule,
    IonicModule,MatInputModule,MatFormFieldModule,
    ListeHopitalPageRoutingModule
  ],
  declarations: [ListeHopitalPage]
})
export class ListeHopitalPageModule {}
