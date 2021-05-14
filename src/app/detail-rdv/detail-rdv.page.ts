import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-rdv',
  templateUrl: './detail-rdv.page.html',
  styleUrls: ['./detail-rdv.page.scss'],
})
export class DetailRdvPage implements OnInit {

  @Input() public rdv: string;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
console.log(this.rdv);

  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
