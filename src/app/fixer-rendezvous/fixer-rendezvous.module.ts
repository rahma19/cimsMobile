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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,CalendarModule,MatSelectModule,
    IonicModule,InputModule,MatFormFieldModule,
    FixerRendezvousPageRoutingModule,MatInputModule
  ],
  exports:[ MatFormFieldModule,MatInputModule,MatSelectModule],
  declarations: [FixerRendezvousPage]
})
export class FixerRendezvousPageModule {}
