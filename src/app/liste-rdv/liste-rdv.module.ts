import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRdvPageRoutingModule } from './liste-rdv-routing.module';

import { ListeRdvPage } from './liste-rdv.page';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,FullCalendarModule,
    IonicModule,
    ListeRdvPageRoutingModule
  ],
  declarations: [ListeRdvPage]
})
export class ListeRdvPageModule {}
