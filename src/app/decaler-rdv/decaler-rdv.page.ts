import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { BnNgIdleService } from 'bn-ng-idle';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
@Component({
  selector: 'app-decaler-rdv',
  templateUrl: './decaler-rdv.page.html',
  styleUrls: ['./decaler-rdv.page.scss'],
})

export class DecalerRdvPage implements OnInit {
  title: string;
  imageURL: string;
  decsription: string;
  start: string;
  heure:any;
  end: string;
rv:any;
tab:any[]=[];
heurMed:any[]=[
  {heur:'08:00',value:'08:00'},
  {heur:'08:30',value:'08:30'},
  {heur:'09:00',value:'09:00'},
  {heur:'09:30',value:'09:30'},
  {heur:'10:00',value:'10:00'},
  {heur:'10:30',value:'10:30'},
  {heur:'11:00',value:'11:00'},
  {heur:'11:30',value:'11:30'},
  {heur:'12:00',value:'12:00'},
]
heurs: any[] = [];
date:any="";
benef:any;
user:any="";
codhop:any="";
  constructor(private router:Router,private bnIdle:BnNgIdleService,private toastCtrl:ToastController,private http:HttpClient, private datePipe: DatePipe,private dataService:DataService,public modalController: ModalController, public navParams: NavParams) {
    this.title = navParams.get('title');
    this.imageURL = navParams.get('imageURL');
    this.decsription = navParams.get('description');
    this.start = formatDate(navParams.get('startTime'), 'medium', 'fr-FR');
    this.end = formatDate(navParams.get('endTime'), 'medium', 'fr-FR');
  }

  close() {
    this.modalController.dismiss();
  }
  async openToast(msg) {
    const toast = await this.toastCtrl.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }

  Submit(f,benef){
    console.log(this.user._id);
   var dt = this.datePipe.transform(this.date,"yyyy-MM-dd");
   f.value.date_rdv=dt

       f.value.userId=this.rv.cod_med;
   f.value.title=this.rv.nom_pren_benef+" "+this.rv.pren_benef;
   f.value.message=f.value.date_rdv+" a "+f.value.heure_rdv;
   f.value.ancrdv=this.rv.date_rdv;

   console.log(f.value);
   this.http.patch(environment.api+"rdv/updaterdv"+`/${this.decsription}`, f.value).subscribe((res) => {
     console.log("Le rendezvous a ??t?? modifi?? avec succ??s");
this.openToast('Votre rendez-vous a ete decal?? avec succ??s');
   },
     error => {
       console.log('Erreur lors de la modification du rendez vous');
this.openToast('Erreur lors du modification');
     })
 }

  ngOnInit() {
    this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
        console.log('session expired');
      }
    });
    this.codhop=this.dataService.codhop;
    this.user=this.dataService.user;
    this.dataService.getRdvById(this.decsription).subscribe((data:any)=>{
      console.log(data['data']);
       this.rv=data['data'];
       console.log(this.rv);
       /*this.dataService.getBenef(this.rv.cod_benef,this.codhop).subscribe((data)=>{
        this.benef=data['data'];
        console.log(this.benef);
      });*/
    });
  }

  affiche(date:any){
    console.log(date);
   this.tab=[];
   var dt = this.datePipe.transform(date,"yyyy-MM-dd");
   let datejour = new Date();

   console.log(new Date(dt),datejour);
let dte=new Date(dt);
    if (dte > datejour) {
  //     if(date.getDay() == 6 || date.getDay() == 0){
  //       this.openToast('Veuillez selectionner une date valide');
  //     }
  //     else
  // {
   this.dataService.getHeurMedecin(this.rv.cod_med,dt).subscribe(data=>{
     console.log(data['data']);
     this.heurs=data['data'];
     console.log(this.heurs);

     this.afficheDateDispo()

     console.log(this.heurMed.length)  ;
   console.log(this.heurs.length);
   });}
 //}
  }
 afficheDateDispo(){

 for(let i=0;i<this.heurMed.length;i++)
 {
   let j=0;
   let teste=true;
    while(j<this.heurs.length && teste==true)
       {
         console.log(j+"ggg"+this.heurs[j].heure_rdv);
         if(this.heurMed[i].value==this.heurs[j].heure_rdv)
         { console.log(this.heurMed[i].value+"/ "+this.heurs[j].heure_rdv);
           teste=false;
           j++;
          }
     else
       j++;
        }
          if(j>=this.heurs.length)
               { this.tab.push(this.heurMed[i].value);}
 }
 }
}
