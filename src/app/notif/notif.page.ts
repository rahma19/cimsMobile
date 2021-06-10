import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.page.html',
  styleUrls: ['./notif.page.scss'],
})
export class NotifPage implements OnInit {
  test:boolean=true;
  auth:boolean=false;
  display=false;
  @Input()user:any;
  constructor(private menu: MenuController,private dataService:DataService,private http:HttpClient,private router:Router) { }

logout(){
  this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
  this.router.navigate(['/loginAncien']);

}

goToProfile(param){
 console.log(param);
 this.router.navigate(['profile']);
}

verifprofil(){
this.router.navigate(['/profile',this.user._id]);
}

affiche(){
  this.display=true;

}

 ngOnInit(): void {

  if(this.user!=null)
  {
   this.auth=true;
   this.test=false;

/*this.msg=this.user.name;
    console.log(this.user);
    //this.test=false;
  //  this.auth=true;
    if (this.user.role=='US')
  {this.unite=false;}

  if (this.user.role=='S')
  {this.societe=false;}*/
  }

 }

}
