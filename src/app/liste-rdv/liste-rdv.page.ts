import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';@Component({
  selector: 'app-liste-rdv',
  templateUrl: './liste-rdv.page.html',
  styleUrls: ['./liste-rdv.page.scss'],
})
export class ListeRdvPage implements OnInit {
  user:any;
  role:any;
  test=false;
  idMed:any="";
  events: any[]=[];
isup:any=false;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    eventClick: function(info) {
      alert('clicked ' + info.event.title);
    },
        selectable: true

  };

rdv:any[]=[];
  options: any;
rv:any="";
id:any="";
    constructor(private http:HttpClient,private dataService:DataService,private router:Router) {

    }
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

    /*this.events=[
  { title: 'event 1', date: '2021-05-06 11:00' },
  { title: 'event 2', date: '2021-04-02' }
];*/

    ngOnInit(): void {
      this.user=this.dataService.user;

      this.dataService.getRdvBenef(this.user.cod_benef).subscribe((data)=>{
        this.rdv=data['data'];
        console.log(this.rdv);
        for(let i=0;i<this.rdv.length;i++){ //this.rdv[i].title
          this.events.push({title:this.rdv[i].nom_med+" "+this.rdv[i].prenom_med,date:this.rdv[i].date_rdv+' '+this.rdv[i].heure_rdv });
        }
        console.log(this.events);

        this.calendarOptions={
          events: this.events,
          dateClick: (e) =>  {
            console.log(e.dateStr);
          },
        }
      });


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
