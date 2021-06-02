import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.page.html',
  styleUrls: ['./liste-medecin.page.scss'],
  providers: [MessageService]

})
export class ListeMedecinPage implements OnInit {
identifiant:any;
medecins:any[];
selDmn:any="";
user:any="";
codhop:any;

  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.identifiant= this.activatedRoute.snapshot.params['cod_hop'];
    console.log(this.identifiant);
    this.user=this.dataService.user;
    this.codhop=this.dataService.codhop;
    this.dataService.getAllMedecinsHop(this.identifiant).subscribe(data=>{
      console.log(data['data']);
      this.medecins=data['data'];
      console.log(this.medecins);
    })
  }

  fixezrdv(medecin:any){
    if (this.user != null && this.user.cod_hop==this.codhop){
      this.router.navigate(['/fixer-rendezvous',medecin._id]);
    }
    else
    this.messageService.add({severity:'error', summary: ' Message', detail:'Vous n"etes pas inscrit dans cet hopital'});

  }
  
  logout(){
    this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
    this.router.navigate(['/login']);

 }
}
