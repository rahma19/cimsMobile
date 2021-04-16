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
  heurs: any[] = [
    {value: '08', viewValue: '08'},
    {value: '09', viewValue: '09'},
    {value: '10', viewValue: '10'},
    {value: '11', viewValue: '11'},
    {value: '12', viewValue: '12'},
    {value: '13', viewValue: '13'},
    {value: '14', viewValue: '14'},
    {value: '15', viewValue: '15'},
    {value: '16', viewValue: '16'},
    {value: '17', viewValue: '17'},
    {value: '18', viewValue: '18'}
  ];
  identifiant:any="";
  selectedValue:any="";
  medecin:any="";
  user=null;

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService) { }

  affiche(){
    this.test=false;
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
