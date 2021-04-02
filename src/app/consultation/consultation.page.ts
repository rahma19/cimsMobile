import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage implements OnInit {
test:boolean=true;
firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  
  constructor(private _formBuilder: FormBuilder) { }
affiche(){
  this.test=false;
}
  ngOnInit() {
    this.test=true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
