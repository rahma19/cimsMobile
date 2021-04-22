import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ConsultationPage implements OnInit {
test:boolean=true;
firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  rdv:any[]=[];
  user=null;
  i:any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private _formBuilder: FormBuilder,private dataService: DataService,private router:Router,private http:HttpClient) { }

affiche(){
  this.test=false;
}
  ngOnInit() {
    this.user=this.dataService.user;
    console.log(this.user);
    this.dataService.getAllRdvs().subscribe(data=>{
      for(let i=0;i<data['data'].length;i++)
      if (((this.user._id) == (data['data'][i].cod_benef)))
{
  if (data['data'][i].etat==false){
      console.log(data['data']);
      this.rdv.push(data['data'][i]);
      console.log(this.rdv);}
      (error) =>{
        console.log("error");
      }

    }

    })
    this.test=true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.user=this.dataService.user;
  }
}