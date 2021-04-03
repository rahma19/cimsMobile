import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixer-rendezvous',
  templateUrl: './fixer-rendezvous.page.html',
  styleUrls: ['./fixer-rendezvous.page.scss'],
})
export class FixerRendezvousPage implements OnInit {
  currentDate = new Date();
  currentMonth: string;
  test:boolean=true;
  res:boolean=true;

  constructor() { }
  affiche(){
    this.test=false;
  }
  afficher(){
    this.res=false;
  }
  ngOnInit() {
  }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
}
