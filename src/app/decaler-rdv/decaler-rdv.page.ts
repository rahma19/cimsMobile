import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { DataService } from '../data.service';
@Component({
  selector: 'app-decaler-rdv',
  templateUrl: './decaler-rdv.page.html',
  styleUrls: ['./decaler-rdv.page.scss'],
})

export class DecalerRdvPage implements OnInit {
  title: string;
  id:any;
  imageURL: string;
  decsription: string;
  start: string;
  end: string;
rdv:any;
  constructor(private dataServie:DataService, public modalController: ModalController, public navParams: NavParams) {
    this.title = navParams.get('title');
    this.imageURL = navParams.get('imageURL');
    this.decsription = navParams.get('description');
    this.start = formatDate(navParams.get('startTime'), 'medium', 'fr-FR');
    this.end = formatDate(navParams.get('endTime'), 'medium', 'fr-FR');
  }

  close() {
    this.modalController.dismiss();
  }

  ngOnInit() {
      this.dataServie.getRdvById(this.decsription).subscribe((data)=>{
        this.rdv=data['data'];
        console.log(this.rdv);
      });
  }

}
