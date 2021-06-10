import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRdvPageRoutingModule } from './detail-rdv-routing.module';

import { DetailRdvPage } from './detail-rdv.page';
import { BnNgIdleService } from 'bn-ng-idle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRdvPageRoutingModule
  ],
  declarations: [DetailRdvPage],
  providers:[BnNgIdleService]

})
export class DetailRdvPageModule {}
