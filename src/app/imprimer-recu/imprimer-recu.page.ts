import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-imprimer-recu',
  templateUrl: './imprimer-recu.page.html',
  styleUrls: ['./imprimer-recu.page.scss'],
})
export class ImprimerRecuPage implements OnInit {
  display: boolean;
  id:any;
  rdv:any;
codmed:any;
codbenef:any;
nom:any;
montant:any;
tel_benef:any;
adr_hop:any;
nom_hop:any
service:any;
nomed:any;
prenom:any;
dte:any;
pren_med:any;
daterdv:any;
heure:any;

  constructor(private dataServie:DataService, public modalController: ModalController, public navParams: NavParams) {
    this.id = navParams.get('_id');
    this.codbenef = navParams.get('cod_benef');
    this.prenom= navParams.get('pren_med');
    this.nom_hop= navParams.get('nom_hop');
    this.adr_hop= navParams.get('adr_hop');
    this.tel_benef= navParams.get('gsm');
    this.service= navParams.get('service');
    this.dte= navParams.get('date_nai_benef');
    this.nom = navParams.get('nom_pren_benef');
    this.montant= navParams.get('montant_rdv');
    this.daterdv = navParams.get('date_rdv');
    this.heure = navParams.get('heure_rdv');
  }

  close() {
    this.modalController.dismiss();
  }
 ngOnInit() {
   this.display = true;
   console.log(this.id);
    if(this.id!=null){
      this.dataServie.getRdvById(this.id).subscribe((data)=>{
        this.rdv=data['data'];
        console.log(this.rdv);
      });
    }
    else
    {
      this.rdv={
        nom_pren_benef:this.nom,
        pren_benef:this.prenom,
        date_nai_benef:this.dte,
        nom_med: this.nomed,
        pren_med: this.pren_med,
        service: this.service,
        nom_hop: this.nom_hop,
        adr_hop: this.adr_hop,
        gsm: this.tel_benef,
        montant_rdv: this.montant,
        heure_rdv:this.heure,
        date_rdv:this.daterdv
      };
      console.log(this.rdv);
     /*this.dataServie.getRdvPatient(this.codbenef,this.codmed).subscribe((data)=>{
        this.rdv=data['data'];
        console.log(this.rdv);
      });*/

    }
  }
}
