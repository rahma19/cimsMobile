import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { StripeService } from "ngx-stripe";
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ConsultationPage implements OnInit {
//stripe elements
title = "angular-stripe";
  priceId = "price_1IkbegIPiJHJ7ZlGzziXTGtn";
  product = {
    title: "Classic Peace Lily",
    subTitle: "Popular House Plant",
    description:
      "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.",
    price: 18.0,
  };
  quantity = 1;
  stripePromise = loadStripe(environment.stripe_key);


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
//app
  reg:any="";
numC:any="";
numA:any="";
dateV:any="";



 
  montantrdv: any;
  isup: boolean;
  eta:boolean=false;
  testsoin: any;
 
  handler:any = null;


//champs des paiement
montant:any[]=[];
regime:any;
num_assure:any;
date_valide:any;
num_carnet:any;
rendezvous:any;
soins:any[]=[];
disabled: boolean = true;
 somme:Number;
  constructor(private _formBuilder: FormBuilder,private dataService: DataService,private router:Router,private http:HttpClient, private stripeService: StripeService) { }

  ngOnInit() {
    this.user=this.dataService.user;
    console.log(this.user);
    this.dataService.getRdvBenef(this.user.cod_benef).subscribe(data=>{
      console.log(data['data']);
      for(let i=0;i<data['data'].length;i++)
    {
       if (data['data'][i].etat==false){
          console.log(data['data']);
          this.rdv.push(data['data'][i]);
           console.log(this.rdv);
          }
      } 
    },
    (error) =>{
      console.log("error");
    } );

    this.http.get(environment.api+"rdv/soin"+`/${this.user.cod_benef}`).subscribe(data=>{
      console.log(data['data']);
      this.soins=data['data'];
      console.log(this.soins);
      
      if(this.soins.length==0)
        this.testsoin=false
      else
      if(this.soins.length!=0)
        {
        this.testsoin=true;
        this.reg=this.soins[0].regime;
       // this.dateV=this.soin[0].date_valide;
        }
    });
console.log(this.testsoin);

      console.log(this.rdv);

    this.test=true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


      //recuperer tout les type du regime
      this.dataService.getAllRegime().subscribe(data=>{
        console.log(data['data']);
        this.montant=data['data'];
        console.log(this.montant);
      })

}

//fonction paiement stripe
async checkout() {
  // Call your backend to create the Checkout session.
  // When the customer clicks on the button, redirect them to Checkout.
  let stripe = await this.stripePromise;

  let { error } = await stripe.redirectToCheckout({
    mode: "payment",
    lineItems: [{ price: this.priceId, quantity: this.quantity }],
    successUrl: `${window.location.href}/success`,
    cancelUrl: `${window.location.href}/failure`,
  });
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
  if (error) {
    console.log(error);
  }
}

passrdv(rdv){
  this.rendezvous=rdv;
  console.log(this.rendezvous);
}




 /* if(this.soins==null){
   this.dataservice.addSoin(this.soins).subscribe((res:any) => {
      console.log("success");
     // this.messageService.add({severity:'success', summary: 'Success', detail: 'email envoyée avec succées'});
     },
       error => {
   //     this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
        console.log("error");
    });
  }
  /*else{
    this.dataservice.updateSoin(this.soins[0]._id,f).subscribe(
      (res :any) => {
         //   this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];
        console.log(res['data']);
        console.log("success");
       
      },
        (error) =>{
             //   this.msgs = [{severity:'error', summary:'Erreur lors de la modification du l offre ', detail:''}];

      console.log("error");
    });
  }*/

  calculerMontant(somme){
  console.log(somme);
  console.log(this.rendezvous.specialite);
    if(this.rendezvous.specialite=="generaliste")
    somme+=5000;
  else
  if(this.rendezvous.specialite=="specialiste")
    somme+=7000;
    this.somme=somme;
  }


Submit(f){
   f.value.etat=true;
   console.log(f.value);
   this.dataService.updateRdv(f,this.rendezvous._id).subscribe((res:any) => {
   //  this.messageService.add({severity:'success', summary: ' Message', detail:'Ajout avec succes'});
     this.rdv=f.value;
     this.isup=true;
     if(this.testsoin==true)
     
         this.dataService.updateSoinBenef(f.value,this.soins[0]._id).subscribe( (Response) => {
         console.log("success");
      },
       (error) =>{
         console.log("error");
   });
   else
   if(this.testsoin==false)
       this.dataService.ajoutSoin(f).subscribe((res) => {
         console.log("success");   
          },
           error => {
             console.log("error");
           });
   },
   err =>{
    // this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
 
   });
 }



  }
  
  





