import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixer-rendezvous',
  templateUrl: './fixer-rendezvous.page.html',
  styleUrls: ['./fixer-rendezvous.page.scss'],
})
export class FixerRendezvousPage implements OnInit {
  currentDate = new Date();
  currentMonth: string;
  constructor() { }

  ngOnInit() {
  }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
}
