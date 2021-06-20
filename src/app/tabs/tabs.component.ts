import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
user:any;
notifs:any[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.user=this.dataService.user;
    this.dataService.getNotfId(this.user._id).subscribe((data)=>{
      console.log(data['notification']);
      this.notifs=data['notification'][0]['notification_list'];
      console.log(this.notifs);
    });
  }

}
