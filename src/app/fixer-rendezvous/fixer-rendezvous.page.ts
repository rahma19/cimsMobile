import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { loadStripe } from '@stripe/stripe-js';
import { BnNgIdleService } from 'bn-ng-idle';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { ImprimerRecuPage } from '../imprimer-recu/imprimer-recu.page';

@Component({
  selector: 'app-fixer-rendezvous',
  templateUrl: './fixer-rendezvous.page.html',
  styleUrls: ['./fixer-rendezvous.page.scss'],
  providers: [MessageService]
})
export class FixerRendezvousPage implements OnInit {
//stripe elements
title = 'angular-stripe';
priceId = 'price_1IkbegIPiJHJ7ZlGzziXTGtn';
product = {
  title: 'Consultation',
  subTitle: 'payer votre rendez-vous',
  description: '',
  price: 18.00
};
quantity = 1;
stripePromise = loadStripe(environment.stripe_key);
  identifiant: any = "";
  medecin?: any = "";
  soin?: any[];
  soins?: any;
  testsoin?: Boolean;
  hop?: any[];
  isup = false;
  reg: any = "";
  numC: any = "";
  numA: any = "";
  dateV: any = "";
  montant: any;
  selectedValue: string;
  heurs: any[] = [];
  user: any = "";
  heur: any = "";
  montants: any[] = [];
  test: boolean = true;
  res: boolean = true;
  aff: boolean = true;
  eta: any = false;
  rdv: any;
  value: any = "";
  tab: any[] = [];
  heurMed: any[] = [
    { heur: '8:00', value: '8:00' },
    { heur: '8:30', value: '8:30' },
    { heur: '9:00', value: '9:00' },
    { heur: '9:30', value: '9:30' },
    { heur: '10:00', value: '10:00' },
    { heur: '10:30', value: '10:30' },
    { heur: '11:00', value: '11:00' },
    { heur: '11:30', value: '11:30' },
    { heur: '12:00', value: '12:00' },
  ]
  date: Date;
  fiche: any[];

  constructor(private bnIdle:BnNgIdleService,private modalController: ModalController, public toastCtrl: ToastController, private datePipe: DatePipe, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private messageService: MessageService, private dataService: DataService) { }

  async openToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async onEventSelected(event: any) {
    console.log('Event: ' + JSON.stringify(event));
    const modal = await this.modalController.create({
      component: ImprimerRecuPage,
      componentProps: event
    });
    return await modal.present();

  }

  ngOnInit(): void {
    this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
        console.log('session expired');
      }
    });
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    console.log(this.identifiant);
    this.user = this.dataService.user;

    this.dataService.getMedecinById(this.identifiant).subscribe(data => {
      console.log(data['data']);
      this.medecin = data['data'];
      console.log(this.medecin);
      this.dataService.getHopitalByCode(this.medecin.cod_hop).subscribe(data => {
        console.log(data['data']);
        this.hop = data['data'];
        console.log(this.hop);
      });
    });

    console.log(this.user.cod_benef);
    this.http.get(environment.api+"rdv/soin"+`/${this.user.cod_benef}`).subscribe(data=>{
      console.log(data['data']);
      this.soin=data['data'];
      console.log(this.soin);
      this.soins = this.soin[0];
      if (this.soin.length == 0) { this.testsoin = false }

      if (this.soin.length != 0) {
        this.testsoin = true;
        this.reg = this.soin[0].regime;
        this.dateV = this.soin[0].date_valide;
      }
    });

    console.log(this.testsoin);

    this.dataService.getAllRegime().subscribe(data => {
      console.log(data['data']);
      this.montants = data['data'];
      console.log(this.montants);
    });

  }


  affiche(date: any) {
    this.tab = [];
    let datejour = new Date();
    if (date > datejour) {
      if(date.getDay() == 6 || date.getDay() == 0){
        this.openToast('Veuillez selectionner une date valide');
      }
      else
   { this.test = false;
    let month = date.getMonth() + 1;
    let dt = this.datePipe.transform(date, "yyyy-MM-dd");
    this.dataService.getHeurMedecin(this.identifiant, dt).subscribe(data => {
      console.log(data['data']);
      this.heurs = data['data'];
      console.log(this.heurs);
      this.afficheDateDispo()
      /*   for(let i=0;i<this.heurMed.length;i++)
          {
            let j=0;
            let test=true;
             while(j<this.heurs.length || test==true)

                {
                  console.log(this.heurs[j].heur);
                  if(this.heurMed[i].value==this.heurs[j].heur)
                       { console.log(this.heurMed[i].value+"/ "+this.heurs[j].heur);
                         test=false;
                         j++;
                        }
                   else
                     j++;
                 }
                   if(j>this.heurs.length)
                        { this.tab.push(this.heurMed[i].value);}
         }*/
    });}
  }else
    this.openToast('Veuillez selectionner une date valide');
  }

  afficheDateDispo() {
    for (let i = 0; i < this.heurMed.length; i++) {
      let j = 0;
      let teste = true;
      while (j < this.heurs.length ) {

        if (this.heurMed[i].value == this.heurs[j].heure_rdv) {
          console.log(this.heurMed[i].value + "/ " + this.heurs[j].heure_rdv);
          teste = false;
          break;
        }
        j++;
      }
      if (teste==true) { this.tab.push(this.heurMed[i].value); }
    }
    console.log(this.tab);
  }

  calculerMontant(montant) {
    if (this.medecin.specialite == "generaliste")
      montant += 5000;
    else
      if (this.medecin.specialite == "specialiste")
        montant += 7000;
    this.montant = montant;
  }

  afficher() {
    this.res = false;
    if (this.testsoin == true) {
      console.log(this.soin[0].regime);

      this.dataService.getRegime(this.soin[0].regime).subscribe(data => {
        console.log(data['data'][0].montant);
        this.montant = data['data'][0].montant;
        console.log(this.montant);
        if (this.medecin.specialite == "generaliste")
          this.montant += 5000;
        else
          if (this.medecin.specialite == "specialiste")
            this.montant += 7000;
      });
    }

  }

  verifFiche(f) {
    this.dataService.getFichePatient(f.value.cod_med, this.user.cod_benef).subscribe((res) => {
      console.log(res['data']);
      this.fiche = res['data'];
      console.log(this.fiche);
      if (this.fiche.length == 0) {
        this.dataService.ajouterFichePatient(f).subscribe((res) => {
          console.log("succeess");
        }, (error) => {
          console.log("ororo");
        });
      }
    });
  }

  Submit(f) {
    let form = {
      nom_med: this.medecin.nom_med,
      pren_med: this.medecin.pren_med,
      cod_med: this.medecin._id,
      service: this.medecin.service,
      specialite: this.medecin.specialite,
      nom_hop: this.hop[0].nom_hop,
      adr_hop: this.hop[0].adr_hop,
      date_nai_benef: this.user.date_nai_benef,
      nom_pren_benef: this.user.nom_pren_benef,
      pren_benef: this.user.pren_benef,
      cod_benef: this.user.cod_benef,
      gsm: this.user.tel_benef,
      regime: f.regime,
      num_carnet: f.value.num_carnet,
      date_valide: f.date_valide,
      num_assure: f.value.num_assure,
      montant_rdv: this.montant,
      endTime: new Date(f.value.endTime),
      //etat:f.value.etat
    }
    var ddMMyyyy = this.datePipe.transform(f.value.date_rdv, "yyyy-MM-dd");
    f.value.date_rdv = ddMMyyyy;
    f.value.etat = true;
    console.log(f.value);
    this.dataService.fixerRdv(f).subscribe((res: any) => {
      this.openToast('rendez-vous fixé avec succés');
      this.rdv = f.value;
      //this.isup=true;
      this.onEventSelected(this.rdv);
      if (this.testsoin == true)
        this.dataService.updateSoinBenef(f.value, this.soin[0]._id).subscribe((Response) => {
          console.log("success");
        },
          (error) => {
            console.log("error");
          });
      else
        if (this.testsoin == false) {
         // let m = f.value.date_valide.getMonth() + 1;
          //let dt = f.value.date_valide.getDate() + "-" + m + "-" + f.value.date_valide.getFullYear();
          //f.value.date_valide = dt;
          this.dataService.ajoutSoin(f).subscribe((res) => {
            console.log("success");
          },
            error => {
              console.log("error");
            });
        }
      this.verifFiche(f);

    },
      err => {
        this.openToast('Erreur lors du paiement');
      });
  }
  logout() {
    this.http.delete(environment.api + "/logout" + `/${this.user._id}`);
    this.router.navigate(['/login']);

  }


  //fonction paiement stripe
async checkout() {
  // Call your backend to create the Checkout session.
  // When the customer clicks on the button, redirect them to Checkout.
  let stripe = await this.stripePromise;

  let { error } = await stripe.redirectToCheckout({
    mode: "payment",
    lineItems: [{ price: this.priceId, quantity: this.quantity }],
    successUrl: "http://localhost:5000/",
    cancelUrl: "http://localhost:5000/",
  });
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
  if (error) {
    console.log(error);
  }
}

}
