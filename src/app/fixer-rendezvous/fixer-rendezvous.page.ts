import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fixer-rendezvous',
  templateUrl: './fixer-rendezvous.page.html',
  styleUrls: ['./fixer-rendezvous.page.scss'],
})
export class FixerRendezvousPage implements OnInit {
  currentDate = new Date();
  currentMonth: string;
  test:boolean=true;
  date:Date;
  res:boolean=true;
  value:any="";
  heurs:any[]=[];
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
  identifiant:any="";
  selectedValue:any="";
  medecin:any="";
  user=null;

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService) { }

  
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
    });
     console.log(this.tab);
  }

afficheDateDispo(){
  
  for(let i=0;i<this.heurMed.length;i++)
  {
    let j=0;
    let teste=true;
     while(j<this.heurs.length && teste==true)
        { 
          if(this.heurMed[i].value==this.heurs[j].heur)
               { console.log(this.heurMed[i].value+"/ "+this.heurs[j].heur);
                 teste=false;
                 j++;
                }
           else
             j++;  
         }
           if(j>=this.heurs.length )
                { this.tab.push(this.heurMed[i].value);}          
 }
}

  afficher(){
    this.res=false;
  }
  ngOnInit() {
    this.identifiant= this.activatedRoute.snapshot.params['id'];
    console.log(this.identifiant);
    this.dataService.getMedecinById(this.identifiant).subscribe(data=>{
      console.log(data['data']);
      this.medecin=data['data'];
      console.log(this.medecin);
    });

    this.user=this.dataService.user;
  }

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
}
