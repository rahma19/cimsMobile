import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
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
  constructor(private http:HttpClient, private datePipe: DatePipe,private dataService:DataService,public modalController: ModalController, public navParams: NavParams) {
    this.title = navParams.get('title');
    this.imageURL = navParams.get('imageURL');
    this.decsription = navParams.get('description');
    this.start = formatDate(navParams.get('startTime'), 'medium', 'fr-FR');
    this.end = formatDate(navParams.get('endTime'), 'medium', 'fr-FR');
  }

  close() {
    this.modalController.dismiss();
  }

  Submit(f){
    var dt = this.datePipe.transform(f.value.date_rdv,"yyyy-MM-dd");
    console.log(dt);
    f.value.date_rdv=dt;
    f.endTime=new Date(f.value.endTime);
    console.log(f.value);
    this.http.patch(environment.api+"rdv/updaterdv"+`/${this.decsription}`, f.value).subscribe((res) => {
      console.log("Le rendezvous a été modifié avec succès");
     // this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];

    },
      error => {
        console.log('Erreur lors de la modification du rendez vous');
  //this.msgs = [{severity:'error', summary:'Erreur lors de la modification du restaurant', detail:''}];

      })
  }

  ngOnInit() {
    this.dataService.getRdvById(this.decsription).subscribe((data)=>{
      this.rv=data['data'];
      console.log(this.rv);
    });
  }
  affiche(date:any){
    console.log(date);
   this.tab=[];
   var dt = this.datePipe.transform(date,"yyyy-MM-dd");
   console.log(dt);
   this.dataService.getHeurMedecin(this.rv.cod_med,dt).subscribe(data=>{
     console.log(data['data']);
     this.heurs=data['data'];
     console.log(this.heurs);

     this.afficheDateDispo()

     console.log(this.heurMed.length)  ;
   console.log(this.heurs.length);
   });
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
