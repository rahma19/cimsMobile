import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-imprime-recu',
  templateUrl: './imprime-recu.component.html',
  styleUrls: ['./imprime-recu.component.scss'],
})
export class ImprimeRecuComponent implements OnInit {
  display: boolean;

  @Input() rdv:any;

  constructor(private activateroute:ActivatedRoute,private restaurantService:DataService,private http:HttpClient,private router:Router,private bnIdle:BnNgIdleService) {

  }
  closeModal() {
   this.display=false;
 }
 ngOnInit() {
  this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
    if (isTimedOut) {
      this.router.navigate(['/login']);
      console.log('session expired');
    }
  });
   this.display = true;
     console.log(this.rdv);
 }
}
