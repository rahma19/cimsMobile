import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule} from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './data.service';
import { GlobalHttpInterceptorService } from './GlobalHttpInterceptorService';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MatSelectModule } from '@angular/material/select';
import {ToastModule} from 'primeng/toast';
import { NgxStripeModule } from 'ngx-stripe';
import {DialogModule} from 'primeng/dialog';
import { ImprimeRecuComponent } from './imprime-recu/imprime-recu.component';
import { DetailRdvPage } from './detail-rdv/detail-rdv.page';
import { DetailRdvPageModule } from './detail-rdv/detail-rdv.module';
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
  declarations: [AppComponent,TabsComponent,ImprimeRecuComponent],
  entryComponents: [],
  imports: [BrowserModule,ReactiveFormsModule, IonicModule.forRoot(), MatIconModule,RadioButtonModule,MatSelectModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatStepperModule,BrowserAnimationsModule,ToastModule,DetailRdvPageModule,
    MatIconModule,CalendarModule,HttpClientModule,Ng2SearchPipeModule,MatFormFieldModule,CalendarModule,DialogModule,FullCalendarModule,
    NgxStripeModule.forRoot('pk_test_51Ij5m9IPiJHJ7ZlG94Xwog7FwWTBzW7P2b7Ikx3yyIoVYqD08gTA2owW2b0NGZPi538y1As1nRb8eJvX8wlVHPqQ004GAY8dTY')
  ],
  exports:[ MatFormFieldModule,MatInputModule,MatStepperModule,BrowserAnimationsModule,MatSelectModule],
  providers: [StatusBar,SplashScreen,DataService, { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  },{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
