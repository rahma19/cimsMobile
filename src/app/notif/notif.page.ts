import { DatePipe } from '@angular/common';
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
  notifs:any[]=[];
  date:any;
  new:any[]=[];
  late:any[]=[];

  constructor(private datePipe:DatePipe,private dataService:DataService,private http:HttpClient,private router:Router) { }

logout(){
  this.http.delete(environment.api+"logout" +`/${this.user._id}`);
  this.router.navigate(['/login']);

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
  this.user=this.dataService.user;

  if(this.user!=null)
  {
   this.auth=true;
   this.test=false;
   this.dataService.getNotfId(this.user._id).subscribe((data)=>{
    console.log(data['notification']);
    this.notifs=data['notification'][0]['notification_list'];
    console.log(this.notifs);

    for(let i=0;i<this.notifs.length;i++){
      let date=new Date();
      var ddMMyyyy = this.datePipe.transform(date, "yyyy-MM-dd");
      var dt = this.datePipe.transform(this.notifs[i].date, "yyyy-MM-dd");
      var comp=ddMMyyyy.localeCompare(dt);
      if(comp==0){
          this.new.push(this.notifs[i]);
          this.new.reverse();
      }
      else{
        this.late.push(this.notifs[i]);
        this.late.reverse();
      }
    console.log(comp);
    }
  });
  }
 }

}
