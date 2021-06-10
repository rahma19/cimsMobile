import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { environment } from 'src/environments/environment';
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
regions:any[]=[{value:'ariana'},{value:'ben arous'},{value:'la marssa'}];
region:any="";

  constructor(private dataService: DataService,private router:Router,private http:HttpClient,private bnIdle:BnNgIdleService) { }

  ngOnInit() {
    this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
        console.log('session expired');
      }
    });
    this.dataService.getAllHopitals().subscribe(data=>{
      console.log(data['data']);
      this.hopitals=data['data'];
      console.log(this.hopitals);
    });

    this.user=this.dataService.user;
  }
  logout(){
    this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
    this.router.navigate(['/login']);

 }
  afficheMed(hopital){
    console.log(hopital);
this.router.navigate(['liste-medecin',hopital.cod_hop]);
  }
}
