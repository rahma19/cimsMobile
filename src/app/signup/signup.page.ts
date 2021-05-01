import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  providers:[MessageService]
})
export class SignupPage implements OnInit {
  nom_pren_benef?:any="";
  pren_benef?:any="";
  tel_benef?:any="";
  cod:any="";
  code=Math.floor(Math.random() * 999999) + 100000;
  password?:any="";
  date_nai_benef:any="";
  email:any="";
  pren_pere_benef?:any="";
  sexe?:any="";
  pren_mere_benef?:any="";
  codhop?:any="";
  mfisc?:any="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  hopitals:any[];
  test: boolean=true;
  
    constructor(private dataService: DataService,private router:Router,private http:HttpClient,private messageService:MessageService) { }
  
    ngOnInit() {
      this.dataService.getAllHopitals().subscribe(data=>{
        console.log(data['data']);
        this.hopitals=data['data'];
        console.log(this.hopitals);
      })
    }

    notify(subject,code){
      this.test=false;
      let ch=this.email;
      
      let object={"to":ch,"sub":"Confirmation","text":code+subject};
      return this.http.post(environment.api+"users/mailing", object).subscribe((res:any) => {
        console.log("success");
        console.log(code);
        
        this.messageService.add({severity:'success', summary: 'Success', detail: 'email envoyée avec succées'});
       },
         error => {
          this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
          console.log("error");
      });
     
    }


    Submit(form){
      console.log(this.code);     
      console.log(form.value.code);  
     if(this.code==form.value.code){
       form.value.cod_benef=Math.floor(Math.random() * 999999) + 100000+form.value.nom_pren_benef;
     console.log ("form.value", form.value)
     let month=form.value.date_nai_benef.getMonth();
     let date =form.value.date_nai_benef.getDate()+"-"+month+"-"+form.value.date_nai_benef.getFullYear();
     form.value.date_nai_benef=date;
     let addedData = JSON.stringify(form.value);
     console.log ("addedData", addedData);
   this.http.post(environment.api+"auth/signupPatientanc", addedData,this.httpOptions).subscribe((res) => {
     this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});
     //this.notify("voici votre index",res['user']._id); 
     this.notify("voici votre index",form.value.cod_benef); 
     this.router.navigate(['/login']);
     },
       error => {
       this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
       });
    } else {
     this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
      console.log("erreruurr"); 
    }}

}