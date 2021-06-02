import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Printer } from '@ionic-native/printer';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
user:any="";
  constructor(private menu: MenuController,private dataService:DataService,private http:HttpClient,private router:Router) { }

  print(){

    Printer.isAvailable().then(function(){
        Printer.print("https://www.techiediaries.com").then(function(){
        alert("printing done successfully !");
        },function(){
        alert("Error while printing !");
        });
    }, function(){
    alert('Error : printing is unavailable on your device ');
    });

}

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
    this.user=this.dataService.user;
  }
}
