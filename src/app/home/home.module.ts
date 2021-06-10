import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {NgxPrintModule} from 'ngx-print';

import { HomePageRoutingModule } from './home-routing.module';
import { BnNgIdleService } from 'bn-ng-idle';
import { NotifPageModule } from '../notif/notif.module';
import { NotifPage } from '../notif/notif.page';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,SidebarModule,
    IonicModule,NgxPrintModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,NotifPage],
  providers:[BnNgIdleService]
})
export class HomePageModule {}
