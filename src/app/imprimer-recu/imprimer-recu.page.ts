import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-imprimer-recu',
  templateUrl: './imprimer-recu.page.html',
  styleUrls: ['./imprimer-recu.page.scss'],
})
export class ImprimerRecuPage implements OnInit {
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
