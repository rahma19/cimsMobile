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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,MatStepperModule,MatFormFieldModule,
    IonicModule,MatInputModule,ReactiveFormsModule,
    ConsultationPageRoutingModule,MatIconModule,MatSelectModule
  ],
  exports: [
        MatStepperModule,MatFormFieldModule,
    MatInputModule,MatIconModule,MatSelectModule
  ],
  declarations: [ConsultationPage]
})
export class ConsultationPageModule {}
