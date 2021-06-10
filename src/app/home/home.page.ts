import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Printer } from '@ionic-native/printer';
import { MenuController } from '@ionic/angular';
import { BnNgIdleService } from 'bn-ng-idle';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
user:any="";
  constructor(private menu: MenuController,private dataService:DataService,private http:HttpClient,private router:Router,private bnIdle:BnNgIdleService) { }

  logout(){
    this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
    this.router.navigate(['/login']);

 }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
payerCons(){
  console.log(this.user);
  if(this.user!=""){
    this.router.navigate(['/consultation']);
  }
}
  ngOnInit() {
    this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
        console.log('session expired');
      }
    });
    this.user=this.dataService.user;
    console.log(this.user);
  }
}
