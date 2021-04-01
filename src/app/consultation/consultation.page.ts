import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage implements OnInit {
test:boolean=true;
  constructor() { }
affiche(){
  this.test=false;
}
  ngOnInit() {
    this.test=true;
  }

}
