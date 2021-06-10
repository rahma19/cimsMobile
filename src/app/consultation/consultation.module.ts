import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationPageRoutingModule } from './consultation-routing.module';
import { MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultationPage } from './consultation.page';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ImprimeRecuComponent } from '../imprime-recu/imprime-recu.component';
import {DialogModule} from 'primeng/dialog';
import { InputModule } from '../input/input.module';
import { BnNgIdleService } from 'bn-ng-idle';

@NgModule({
  imports: [
    CommonModule,DialogModule,InputModule,
    FormsModule,MatStepperModule,MatFormFieldModule,
    IonicModule,MatInputModule,ReactiveFormsModule,
    ConsultationPageRoutingModule,MatIconModule,MatSelectModule
  ],
  exports: [
        MatStepperModule,MatFormFieldModule,
    MatInputModule,MatIconModule,MatSelectModule
  ],
  declarations: [ConsultationPage,ImprimeRecuComponent],
  providers:[BnNgIdleService]

})
export class ConsultationPageModule {}
