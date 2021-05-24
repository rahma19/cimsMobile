import { Component, OnInit } from '@angular/core';
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

    constructor(private dataService:DataService) { }

    ngOnInit(): void {
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
