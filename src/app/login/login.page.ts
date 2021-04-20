import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user:any=null;
email:any="";
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  Submit(form) {
    this.dataService.getCurrentUser(form);
  }
 
}
