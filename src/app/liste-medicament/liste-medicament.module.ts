import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMedicamentPageRoutingModule } from './liste-medicament-routing.module';

import { ListeMedicamentPage } from './liste-medicament.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    ListeMedicamentPageRoutingModule
  ],
  declarations: [ListeMedicamentPage]
})
export class ListeMedicamentPageModule {}
