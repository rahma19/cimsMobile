import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BnNgIdleService } from 'bn-ng-idle';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user:any="";

  constructor(private toastCntrl:ToastController,private dataService:DataService,private router:Router,private http:HttpClient,private bnIdle:BnNgIdleService) { }

  async openToast(msg) {
    const toast = await this.toastCntrl.create({
      message:msg,
      duration: 2000,
      animated:true,
      color:"warning",
    });
    toast.present();
  }

  logout(){
    this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
    this.router.navigate(['/login']);

 }
  ngOnInit() {
    this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
        console.log('session expired');
      }
    });
   this.user=this.dataService.user;
  }

  Submit(f){
    console.log(f.value);
        this.dataService.update(f.value,this.user._id).subscribe( (Response) => {
          this.openToast('votre compte a été modifié avec succés')
          console.log("success");
      },
        (error) =>{
          this.openToast('Erreur lors du modification')
          console.log("error");
    });
  }

}
