import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-detail-rdv',
  templateUrl: './detail-rdv.page.html',
  styleUrls: ['./detail-rdv.page.scss'],
})
export class DetailRdvPage implements OnInit {

  @Input() public rdv: string;

  constructor(public modalCtrl: ModalController,private router:Router,private bnIdle:BnNgIdleService) {}

  ngOnInit() {
    this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
        console.log('session expired');
      }
    });
console.log(this.rdv);

  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
