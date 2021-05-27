import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-historique-paie',
  templateUrl: './historique-paie.page.html',
  styleUrls: ['./historique-paie.page.scss'],
})
export class HistoriquePaiePage implements OnInit {
  selDmn:any="";
  user=null;
rdv:any
isup=false;
codhop:any;
rv:any[]=[];

  constructor(private dataService: DataService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.user=this.dataService.user;
    this.codhop=this.dataService.codhop;
    console.log(this.user.cod_benef,this.codhop);
    this.dataService.getRdvBenef(this.user.cod_benef,this.codhop).subscribe(data=>{
      console.log(data['data']);
      for(let i=0;i<data['data'].length;i++)
    {
       if (data['data'][i].etat==true){
          console.log(data['data']);
          this.rv.push(data['data'][i]);
           console.log(this.rv);
          }
      }
    },
    (error) =>{
      console.log("error");
    } );
  }
  logout(){
    this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
    this.router.navigate(['/login']);

 }

 imprimer(item){
this.rdv=item;
console.log(this.rdv);
this.isup=true;
 }
}
