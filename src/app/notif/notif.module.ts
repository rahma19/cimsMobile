import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifPageRoutingModule } from './notif-routing.module';

import { NotifPage } from './notif.page';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,SidebarModule,
    NotifPageRoutingModule
  ],
  declarations: [NotifPage]
})
export class NotifPageModule {}
