import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-hopital',
  templateUrl: './liste-hopital.page.html',
  styleUrls: ['./liste-hopital.page.scss'],
})
export class ListeHopitalPage implements OnInit {
hopitals:any[];
selDmn:any="";
user=null;

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {
    this.dataService.getAllHopitals().subscribe(data=>{
      console.log(data['data']);
      this.hopitals=data['data'];
      console.log(this.hopitals);
    });

    this.user=this.dataService.user;
  }

  afficheMed(hopital){
    console.log(hopital);
this.router.navigate(['liste-medecin',hopital.cod_hop]);
  }
}
