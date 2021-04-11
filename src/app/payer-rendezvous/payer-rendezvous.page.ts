import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payer-rendezvous',
  templateUrl: './payer-rendezvous.page.html',
  styleUrls: ['./payer-rendezvous.page.scss'],
})
export class PayerRendezvousPage implements OnInit {
  identifiant:any="";
  selectedValue:any="";
  medecin:any="";
  user:any="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  
  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService,private http:HttpClient) { }


  ngOnInit() {
    this.identifiant= this.activatedRoute.snapshot.params['id'];
    this.user=this.dataService.user;
    console.log(this.identifiant);
    this.dataService.getMedecinById(this.identifiant).subscribe(data=>{
      console.log(data['data']);
      this.medecin=data['data'];
      console.log(this.user);
      console.log(this.medecin);
    })
  }
fixezRdv(){
let f ={
cod_med:this.medecin._id,
cod_benef:this.user._id,
service:this.medecin.service
}
console.log(f);
  let addedData = JSON.stringify(f);
         console.log ("addedData", addedData);
    return this.http.post(environment.api+"rdv/rdvs", addedData,this.httpOptions).subscribe( (Response) => {
      console.log("success");
      // this.router.navigate(['/listeOffres']);
    },
      (error) =>{
        console.log("error");
    });
    }
}
