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
  pseudo:any="";
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
  
    constructor(private dataService: DataService,private router:Router,private http:HttpClient) { }
  
    ngOnInit() {
      this.dataService.getAllHopitals().subscribe(data=>{
        console.log(data['data']);
        this.hopitals=data['data'];
        console.log(this.hopitals);
      })
    }
  Submit(form) {
    
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
   }
}
