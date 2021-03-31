import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixerRendezvousPageRoutingModule } from './fixer-rendezvous-routing.module';

import { FixerRendezvousPage } from './fixer-rendezvous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixerRendezvousPageRoutingModule
  ],
  declarations: [FixerRendezvousPage]
})
export class FixerRendezvousPageModule {}
