import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-ancien',
  templateUrl: './login-ancien.page.html',
  styleUrls: ['./login-ancien.page.scss'],
})
export class LoginAncienPage implements OnInit {
  test:any=true;
  hopitals:any[]=[];
  codhop:any="";
code:any="";
codben:any="";
mail:any="";

  constructor(private dataService:DataService) { }
  affiche(){
    this.test=false;
  }
  ngOnInit() {
    this.dataService.getAllHopitals().subscribe(data=>{
      console.log(data['data']);
      this.hopitals=data['data'];
      console.log(this.hopitals);
    })
  }
                              
  Submit(f:any){
    console.log(f.value);
  }
}
