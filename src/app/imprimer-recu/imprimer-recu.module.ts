import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprimerRecuPageRoutingModule } from './imprimer-recu-routing.module';
import {NgxPrintModule} from 'ngx-print';

import { ImprimerRecuPage } from './imprimer-recu.page';
import {ButtonModule} from 'primeng/button';
import { BnNgIdleService } from 'bn-ng-idle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ButtonModule,
    IonicModule,NgxPrintModule,
    ImprimerRecuPageRoutingModule
  ],
  declarations: [ImprimerRecuPage],
  providers:[BnNgIdleService]

})
export class ImprimerRecuPageModule {}
