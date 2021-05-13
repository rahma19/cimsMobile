import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-decaler-rdv',
  templateUrl: './decaler-rdv.page.html',
  styleUrls: ['./decaler-rdv.page.scss'],
})

export class DecalerRdvPage implements OnInit {
  title: string;
  imageURL: string;
  decsription: string;
  start: string;
  end: string;

  constructor( public modalController: ModalController, public navParams: NavParams) {
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
  }

}
