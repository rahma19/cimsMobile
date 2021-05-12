import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { StripeService } from "ngx-stripe";
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';
import { ModalController } from '@ionic/angular';
import { DetailRdvPage } from '../detail-rdv/detail-rdv.page';
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

//app
reg:any="";
numC:any="";
numA:any="";
dateV:any="";
  test:boolean=true;
firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  montantrdv: any;
  isup: boolean;
  eta:boolean=false;
  testsoin: any;

  handler:any = null;
rdv:any;
rv:any[]=[];
user:any=null;
i:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
//champs des paiement
montant:any[]=[];
regime:any;
num_assure:any;
date_valide:any;
num_carnet:any;
rendezvous:any;
soins:any[]=[];
soin:any;
disabled: boolean = true;
 somme:Number;


  constructor(public modalCtrl: ModalController,private _formBuilder: FormBuilder,private router:Router,private http:HttpClient, private dataservice: DataService, private stripeService: StripeService) { }
  logout(){
    this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
    this.router.navigate(['/login']);

 }

  async showModal(item) {
    const modal = await this.modalCtrl.create({
      component: DetailRdvPage,
      componentProps: {
        rdv: item
      }
    });
    return await modal.present();
  }

  ngOnInit(): void {
    this.user=this.dataservice.user;
    console.log(this.user);
   console.log(this.user.cod_benef);

    this.dataservice.getRdvBenef(this.user.cod_benef).subscribe(data=>{
      console.log(data['data']);
      for(let i=0;i<data['data'].length;i++)
    {
       if (data['data'][i].etat==false){
          console.log(data['data']);
          this.rv.push(data['data'][i]);
           console.log(this.rv);
          }
      }
    },
    (error) =>{
      console.log("error");
    } );

  //  this.test=true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });





      //recuperer tout les type du regime
      this.dataservice.getAllRegime().subscribe(data=>{
        console.log(data['data']);
        this.montant=data['data'];
        this.somme=data['data'][0].montant;
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
  this.rdv=rdv;
  console.log(this.rdv);
  this.http.get(environment.api+"rdv/soin"+`/${this.user.cod_benef}`).subscribe(data=>{
    console.log(data['data']);
    this.soins=data['data'];
    this.soin=this.soins[0];
    console.log(this.soin);

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
    console.log(this.somme);
  }


Submit(f){
   f.value.etat=true;
   this.dataservice.updateRdv(f.value,this.rdv._id).subscribe((res:any) => {
     console.log("succes");
   //  this.messageService.add({severity:'success', summary: ' Message', detail:'Ajout avec succes'});
     this.rdv=f.value;
     this.isup=true;
    if(this.testsoin==true)

         this.dataservice.updateSoinBenef(f.value,this.soin._id).subscribe( (Response) => {
         console.log("success");
      },
       (error) =>{
         console.log("error");
   });
   else
   if(this.testsoin==false)
       this.dataservice.ajoutSoin(f).subscribe((res) => {
         console.log("success");
          },
           error => {
             console.log("error");
           });
   },
   err =>{
    // this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
 console.log(err);
   });
 }


 unread(item){
   console.log("hiuhiuhu")
 }


  }







