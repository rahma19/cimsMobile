import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BnNgIdleService } from 'bn-ng-idle';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { DecalerRdvPage } from '../decaler-rdv/decaler-rdv.page';
import { ImprimerRecuPage } from '../imprimer-recu/imprimer-recu.page';

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

  constructor(private dataService: DataService,private router:Router,private http:HttpClient,private modalController:ModalController,private bnIdle:BnNgIdleService) { }

  ngOnInit() {
    this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
        console.log('session expired');
      }
    });
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
 async onEventSelected(event: any) {
  console.log('Event: ' + JSON.stringify(event));
  const modal = await this.modalController.create({
    component: ImprimerRecuPage,
    componentProps: event
  });
  return await modal.present();

}

 imprimer(item){
this.rdv=item;
console.log(this.rdv);
this.isup=true;
 }
}
