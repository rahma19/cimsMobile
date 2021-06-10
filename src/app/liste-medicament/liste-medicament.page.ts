import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.page.html',
  styleUrls: ['./liste-medicament.page.scss'],
})
export class ListeMedicamentPage implements OnInit {
  codhop:any="h11";
  medics:any[]=[];
  hopitals;
  searchText: string;
user:any;

    constructor(private dataService:DataService,private router:Router,private bnIdle:BnNgIdleService) { }

    ngOnInit(): void {
      this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
        if (isTimedOut) {
          this.router.navigate(['/login']);
          console.log('session expired');
        }
      });
      this.user=this.dataService.user;

      this.dataService.getAllHopitals().subscribe(data=>{
        console.log(data['data']);
        this.hopitals=data['data'];
        console.log(this.hopitals);
      });

      this.dataService.getAllMedicament(this.codhop).subscribe((data)=>{
          this.medics=data['data'];
          console.log(this.medics);
      });
      console.log(this.medics);
    }

}
