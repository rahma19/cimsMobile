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
  nombenef:any;
  @Input() rdv:any;

  constructor(private dataServie:DataService, public modalController: ModalController, public navParams: NavParams) {
    this.nombenef = navParams.get('nom_pren_benef');

  }

  close() {
    this.modalController.dismiss();
  }
 ngOnInit() {
   this.display = true;
     console.log(this.nombenef);
 }
}
