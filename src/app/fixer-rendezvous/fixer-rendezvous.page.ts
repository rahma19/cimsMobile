import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fixer-rendezvous',
  templateUrl: './fixer-rendezvous.page.html',
  styleUrls: ['./fixer-rendezvous.page.scss'],
  providers:[MessageService]
})
export class FixerRendezvousPage implements OnInit {
  identifiant:any="";
  medecin?:any=null;
  soin?:any[];
  soins?:any;
  testsoin?:Boolean;
  hop?:any[];
  isup=false;
  reg:any="";
  numC:any="";
  numA:any="";
  dateV:any="";
  montant:any;
  selectedValue: string;
  heurs: any[] = [];
  user:any="";
  heur:any="";
  montants:any[]=[];
  test:boolean=true;
  res:boolean=true;
  aff:boolean=true;
  eta:any=false;
  rdv:any;
  value:any="";
  tab:any[]=[];
heurMed:any[]=[
  {heur:'8:00',value:'8:00'},
  {heur:'8:30',value:'8:30'},
  {heur:'9:00',value:'9:00'},
  {heur:'9:30',value:'9:30'},
  {heur:'10:00',value:'10:00'},
  {heur:'10:30',value:'10:30'},
  {heur:'11:00',value:'11:00'},
  {heur:'11:30',value:'11:30'},
  {heur:'12:00',value:'12:00'},
]
  date: Date;

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService) { }


  ngOnInit(): void {
    this.identifiant= this.activatedRoute.snapshot.params['id'];
    console.log(this.identifiant);
    this.user=this.dataService.user;

    this.dataService.getMedecinById(this.identifiant).subscribe(data=>{
      console.log(data['data']);
      this.medecin=data['data'];
      console.log(this.medecin);
      this.dataService.getHopitalByCode(this.medecin.cod_hop).subscribe(data=>{
        console.log(data['data']);
        this.hop=data['data'];
        console.log(this.hop);
      });
    });

    this.dataService.getSoinsBenef(this.user.cod_benef).subscribe(data=>{
      console.log(data['data']);
      this.soin=data['data'];
      console.log(this.soin);
      this.soins=this.soin[0];
      if(this.soin.length==0)
        {this.testsoin=false}

      if(this.soin.length!=0)
        {
        this.testsoin=true;
        this.reg=this.soin[0].regime;
        this.dateV=this.soin[0].date_valide;
        }
    });

console.log(this.testsoin);

    this.dataService.getAllRegime().subscribe(data=>{
      console.log(data['data']);
      this.montants=data['data'];
      console.log(this.montants);
    });

  }


  affiche(date:any){
    this.tab=[];
    this.test=false;
    let month=date.getMonth()+1;
    let dt=date.getDate()+"-"+month+"-"+date.getFullYear();
    this.dataService.getHeurMedecin(this.identifiant,dt).subscribe(data=>{
      console.log(data['data']);
      this.heurs=data['data'];
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

calculerMontant(montant){
  if(this.medecin.specialite=="generaliste")
  montant+=5000;
else
if(this.medecin.specialite=="specialiste")
  montant+=7000;
  this.montant=montant;
}

  afficher(){
    this.res=false;
   if(this.testsoin==true)
    { console.log(this.soin[0].regime);

      this.dataService.getRegime(this.soin[0].regime).subscribe(data=>{
        console.log(data['data'][0].montant);
        this.montant=data['data'][0].montant;
        console.log(this.montant);
        if(this.medecin.specialite=="generaliste")
  this.montant+=5000;
else
if(this.medecin.specialite=="specialiste")
  this.montant+=7000;
      });
    }

  }

Submit(f){
  let form={
    nom_med:this.medecin.nom_med,
    pren_med:this.medecin.pren_med,
    cod_med:this.medecin._id,
    service:this.medecin.service,
    specialite:this.medecin.specialite,
    nom_hop:this.hop[0].nom_hop,
    adr_hop:this.hop[0].adr_hop,
    date_nai_benef:this.user.date_nai_benef,
    nom_pren_benef:this.user.nom_pren_benef,
    pren_benef:this.user.pren_benef,
    cod_benef:this.user.cod_benef,
    gsm:this.user.tel_benef,
    regime:f.regime,
    num_carnet:f.num_carnet,
    date_valide:f.date_valide,
    num_assure:f.value.num_assure,
    montant_rdv:this.montant,


  }
 let month=f.value.date_rdv.getMonth()+1;
  let date =f.value.date_rdv.getDate()+"-"+month+"-"+f.value.date_rdv.getFullYear();
  f.value.date_rdv=date;

  f.value.etat=true;
  console.log(f.value);
  this.dataService.fixerRdv(f).subscribe((res:any) => {
    this.messageService.add({severity:'success', summary: ' Message', detail:'Ajout avec succes'});
    this.rdv=f.value;
    this.isup=true;
    if(this.testsoin==true)
        this.dataService.updateSoinBenef(f.value,this.soin[0]._id).subscribe( (Response) => {
        console.log("success");
     },
      (error) =>{
        console.log("error");
  });
  else
  if(this.testsoin==false)
 { let m=f.value.date_valide.getMonth()+1;
  let dt =f.value.date_valide.getDate()+"-"+m+"-"+f.value.date_valide.getFullYear();
  f.value.date_valide=dt;
      this.dataService.ajoutSoin(f).subscribe((res) => {
        console.log("success");
         },
          error => {
            console.log("error");
          });
        }
  },
  err =>{
    this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});

  });
}
}
