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
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarModule } from 'ion2-calendar';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DecalerRdvPage } from '../decaler-rdv/decaler-rdv.page';
registerLocaleData(localeFr, 'fr');

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);
@NgModule({
  imports: [
    CommonModule,NgCalendarModule,CalendarModule,
    FormsModule,FullCalendarModule,
    IonicModule,
    ListeRdvPageRoutingModule
  ],
  declarations: [ListeRdvPage,DecalerRdvPage]
})
export class ListeRdvPageModule {}
