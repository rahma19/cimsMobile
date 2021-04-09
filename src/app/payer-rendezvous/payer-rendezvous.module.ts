import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerRendezvousPageRoutingModule } from './payer-rendezvous-routing.module';

import { PayerRendezvousPage } from './payer-rendezvous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerRendezvousPageRoutingModule
  ],
  declarations: [PayerRendezvousPage]
})
export class PayerRendezvousPageModule {}
