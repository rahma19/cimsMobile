import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  nom_pren_benef?:any="";
  pren_benef?:any="";
  tel_benef?:any="";
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
  code=Math.floor(Math.random() * 999999) + 100000;
  
    constructor(private dataService: DataService,private router:Router,private http:HttpClient) { }
  
    ngOnInit() {
      this.dataService.getAllHopitals().subscribe(data=>{
        console.log(data['data']);
        this.hopitals=data['data'];
        console.log(this.hopitals);
      })
    }

    notify(){
      this.test=false;
      let ch=this.email;
      
      let object={"to":ch,"sub":"Confirmation","text":this.code+" est le code de confirmation de votre nouveau compte sur CIMS "};
      return this.http.post(environment.api+"users/mailing", object).subscribe((res:any) => {
        console.log("success");
        console.log(this.code);
       // this.messageService.add({severity:'success', summary: 'Success', detail: 'email envoyée avec succées'});
       },
         error => {
         // this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
          console.log("error");
      })
    }


  Submit(form) {
    if(this.code==form.value.confemail){
    console.log ("form.value", form.value)
         let addedData = JSON.stringify(form.value);
         console.log ("addedData", addedData);
       this.http.post(environment.api+"auth/signupPatient", addedData,this.httpOptions).subscribe((res) => {
         this.router.navigate(['/login']);
         //  this.messageService.add({severity:'success', summary: 'Message', detail:'Succes'});  
          
         },
           error => {
             //this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
           });
   } else {
   // this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
     console.log("erreruurr"); 
  }
}
}