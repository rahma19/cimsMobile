import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMedecinPageRoutingModule } from './liste-medecin-routing.module';

import { ListeMedecinPage } from './liste-medecin.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ToastModule} from 'primeng/toast';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BnNgIdleService } from 'bn-ng-idle';
@NgModule({
  imports: [
    CommonModule,MatInputModule,MatSelectModule,
    FormsModule,Ng2SearchPipeModule,
    IonicModule,ToastModule,MatFormFieldModule,
    ListeMedecinPageRoutingModule
  ],
  declarations: [ListeMedecinPage],
  providers:[BnNgIdleService]

})
export class ListeMedecinPageModule {}
