import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [MessageService]
})
export class LoginPage implements OnInit {
user:any=null;
hopitals:any[]=[];
email:any;
codhop:any;
confemail:any;
selDmn:any;
sexe:any;
cod_benef:any;
code=Math.floor(Math.random() * 999999) + 100000;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
  test: boolean=true;
  constructor(private dataService:DataService,private router:Router,private http:HttpClient, private messageService: MessageService,public toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getAllHopitals().subscribe(data=>{
      console.log(data['data']);
      this.hopitals=data['data'];
      console.log(this.hopitals);
    })
  }
  async openToast(msg) {
    const toast = await this.toastCtrl.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }
  notify(){
    console.log(this.cod_benef,this.selDmn);
    this.dataService.getBenef(this.cod_benef,this.selDmn).subscribe((res) => {
      console.log(res['data']);
      if(res['data'].length!=0){
        this.openToast('Email envoyée avec succées');
        this.email=res['data'][0].email;
        let object={"to":res['data'][0].email,"sub":"Confirmation","text":this.code+" est le code de confirmation de votre nouveau compte sur CIMS "};
        return this.http.post(environment.api+"users/mailing", object).subscribe((res:any) => {
          console.log("success");
          this.test=false;
          console.log(this.code);
         },
           error => {
            this.messageService.add({severity:'error', summary: ' Message', detail:'Code invalide'});
            console.log("error");
        });
      }
      else{
        this.openToast('Index introuvable');
      }
      },
       error => {
        this.messageService.add({severity:'error', summary: ' Message', detail:'Index invalide'});
       console.log("error");
    })

  }

  async Submit(form) {
    console.log(this.code);
    console.log(form.value.code);

   if(this.code==form.value.code){
   console.log ("form.value", form.value)
   let addedData = JSON.stringify(form.value);
   console.log ("addedData", addedData);
   console.log(this.selDmn);
    this.dataService.getCurrentUser(form,"auth/loginPatientanc",this.selDmn);
   await this.router.navigate(['/home']);

 /*this.http.post(environment.api+"auth/loginPatientanc", addedData,this.httpOptions).subscribe((res) => {
   this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});
   this.router.navigate(['/Home']);
   },
     error => {
     this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
     });*/
     } else {
   this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
    console.log("erreruurr");
  }

  }
}
