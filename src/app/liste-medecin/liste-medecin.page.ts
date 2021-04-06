import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.page.html',
  styleUrls: ['./liste-medecin.page.scss'],
})
export class ListeMedecinPage implements OnInit {
identifiant:any;
medecins:any[];
selDmn:any="";
  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.identifiant= this.activatedRoute.snapshot.params['cod_hop'];
    console.log(this.identifiant);
    this.dataService.getAllMedecinsHop(this.identifiant).subscribe(data=>{
      console.log(data['data']);
      this.medecins=data['data'];
      console.log(this.medecins);
    })
  }

}
