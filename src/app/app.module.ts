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

@NgModule({
  declarations: [AppComponent,TabsComponent],
  entryComponents: [],
  imports: [BrowserModule,ReactiveFormsModule, IonicModule.forRoot(), MatIconModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatStepperModule,BrowserAnimationsModule,
    MatIconModule,CalendarModule],
  exports:[ MatFormFieldModule,MatInputModule,MatStepperModule,BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}