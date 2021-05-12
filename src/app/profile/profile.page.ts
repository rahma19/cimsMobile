import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user:any="";

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService,private http:HttpClient) { }

  ngOnInit() {
   this.user=this.dataService.user;
  }

  Submit(f){
    console.log(f.value);
        this.dataService.update(f.value,this.user._id).subscribe( (Response) => {
          console.log("success");
      },
        (error) =>{
          console.log("error");
    });
  }

}
