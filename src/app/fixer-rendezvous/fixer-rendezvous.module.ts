import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixerRendezvousPageRoutingModule } from './fixer-rendezvous-routing.module';
import {CalendarModule} from 'primeng/calendar';

import { FixerRendezvousPage } from './fixer-rendezvous.page';
import { InputModule } from '../input/input.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ImprimeRecuComponent } from '../imprime-recu/imprime-recu.component';
import {DialogModule} from 'primeng/dialog';
import { BnNgIdleService } from 'bn-ng-idle';

@NgModule({
  imports: [
    CommonModule,DialogModule,
    FormsModule,CalendarModule,MatSelectModule,
    IonicModule,InputModule,MatFormFieldModule,
    FixerRendezvousPageRoutingModule,MatInputModule
  ],
  exports:[ MatFormFieldModule,MatInputModule,MatSelectModule],
  declarations: [FixerRendezvousPage,ImprimeRecuComponent],
  providers:[BnNgIdleService]

})
export class FixerRendezvousPageModule {}
