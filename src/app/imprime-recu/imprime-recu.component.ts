import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-imprime-recu',
  templateUrl: './imprime-recu.component.html',
  styleUrls: ['./imprime-recu.component.scss'],
})
export class ImprimeRecuComponent implements OnInit {
  display: boolean;

  @Input() rdv:any;

  constructor(private activateroute:ActivatedRoute,private restaurantService:DataService,private http:HttpClient,private router:Router) {

  }
  closeModal() {
   this.display=false;
 }
 ngOnInit() {
   this.display = true;
     console.log(this.rdv);
 }
}
