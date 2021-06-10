import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { Router } from '@angular/router';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { DecalerRdvPage } from '../decaler-rdv/decaler-rdv.page';
import { BnNgIdleService } from 'bn-ng-idle';
@Component({
  selector: 'app-liste-rdv',
  templateUrl: './liste-rdv.page.html',
  styleUrls: ['./liste-rdv.page.scss'],
})
export class ListeRdvPage implements OnInit {
  user:any;
  currentDate = new Date();
  currentMonth: string;
  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;
  type:any;
  test=false;
  idMed:any="";
  codhop:any;
  events: any[]=[];
isup:any=false;
rdv:any[]=[];
  options: any;
rv:any="";
showAddEvent: boolean;
id:any="";
allEvents = [];
newEvent = {
  title: '',
  description: '',
  imageURL: '',
  startTime: '',
  endTime: ''
};
    constructor(private http:HttpClient,private dataService:DataService,private router:Router,public modalController: ModalController,private bnIdle:BnNgIdleService ) {
      this.loadEvent();
    }
    showHideForm() {
      this.showAddEvent = !this.showAddEvent;
      this.newEvent = {
        title: '',
        description: '',
        imageURL: '',
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString()
      };
    }
   /* addEvent() {
      console.log(this.newEvent);
      this.allEvents.push({
        title: this.newEvent.title,
        startTime:  new Date(this.newEvent.startTime),
        endTime: new Date(this.newEvent.endTime),
        description: this.newEvent.description,
        imageURL: this.newEvent.imageURL
      });
      console.log(this.allEvents);
      this.showHideForm();
    }*/
    handleEventClick(clickInfo: EventClickArg) {
      /*if (confirm(`Vous etes sur de vouloir annuler ce rendez-vous? '${clickInfo.event.title}'`)) {
        clickInfo.event.remove();
      }*/
      console.log(clickInfo.event.id);
      this.isup=true;
      this.id=clickInfo.event.id;
      this.dataService.getRdvById(clickInfo.event.id).subscribe((data)=>{
        console.log(data['data']);
         this.rv=data['data'];
       });
    }

    logout(){
      this.http.delete(environment.api+"/logout" +`/${this.user._id}`);
      this.router.navigate(['/login']);

   }

    loadEvent() {
      this.allEvents=[];
      this.rdv.forEach(action => {
          console.log('action: ' + action.payload.exportVal().title);
          this.allEvents.push({
            title: action.payload.exportVal().title,
            startTime:  new Date(action.payload.exportVal().startTime),
            endTime: new Date(action.payload.exportVal().endTime),
            description: action.payload.exportVal().description,
            imageURL: action.payload.exportVal().imageURL
          });
          this.myCalendar.loadEvents();
        });
      }

    /*this.events=[
  { title: 'event 1', date: '2021-05-06 11:00' },
  { title: 'event 2', date: '2021-04-02' }
];*/
onViewTitleChanged(title: string) {
  this.currentMonth = title;
  console.log(title);
}
onTimeSelected(ev: any) {
  const selected = new Date(ev.selectedTime);
  this.newEvent.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
 // this.newEvent.endTime = (selected.toISOString());
}
    ngOnInit(): void {
      this.bnIdle.startWatching(7200).subscribe((isTimedOut: boolean) => {
        if (isTimedOut) {
          this.router.navigate(['/login']);
          console.log('session expired');
        }
      });
      this.user=this.dataService.user;
      this.codhop=this.dataService.codhop;

      this.dataService.getRdvBenef(this.user.cod_benef,this.codhop).subscribe((data)=>{
        this.rdv=data['data'];
        console.log(this.rdv);
        for(let i=0;i<this.rdv.length;i++){ //this.rdv[i].title
          let dt=new Date(this.rdv[i].date_rdv+" "+this.rdv[i].heure_rdv);
        console.log(dt);
        this.events.push({title: this.rdv[i].nom_med+" "+this.rdv[i].prenom_med, description: this.rdv[i]._id, imageURL: "iuhy", startTime: new Date(dt), endTime: new Date(this.rdv[i].endTime)});

        }
        console.log(this.events);
      });


    }
    async onEventSelected(event: any) {
      console.log('Event: ' + JSON.stringify(event));
      const modal = await this.modalController.create({
        component: DecalerRdvPage,
        componentProps: event
      });
      return await modal.present();

    }

    onChange($event) {
      console.log($event.target.value);
      console.log($event);
    }
    modif(f){
      console.log(f);
      this.http.patch(environment.api+"rdv/updaterdv"+`/${this.id}`, f).subscribe((res) => {
        console.log("Le rendezvous a été modifié avec succès");
       // this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];

      },
        error => {
          console.log('Erreur lors de la modification du rendez vous');
    //this.msgs = [{severity:'error', summary:'Erreur lors de la modification du restaurant', detail:''}];

        })
     }
}
