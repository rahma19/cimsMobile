import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user:any=null;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient,private router:Router) { }

  getAllHopitals(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+"rdv");
}

getAllMedecinsHop(code_hop): Observable<any[]> {
  return this.http.get<any[]>(environment.api+"users/medecins"+`/${code_hop}`);
}


getCurrentUser(f:any,path:any){
let addedData = JSON.stringify(f.value);
       console.log ("addedData", addedData);
  return this.http.post(environment.api+path, addedData,this.httpOptions).subscribe((res:any) => {
        localStorage.setItem("token",res.token)
        this.user=res.user;

        console.log(this.user);
        this.router.navigate(['/home']);
      });
      }



getAllRdvs(){
return this.http.get<any[]>(environment.api+"rdv/rdvs");

}

getRdvBenef(cod_benef):  Observable<any[]> {
  return this.http.get<any[]>(environment.api+"users/RdvBenef"+`/${cod_benef}`);
}

getMedecinById(id): Observable<any[]> {
return this.http.get<any[]>(environment.api+"users/medecin"+`/${id}`);
}

getHeurMedecin(code_med:any,date:any): Observable<any[]>{
return this.http.get<any[]>(environment.api+"rdv/heurs/"+`/${code_med}`+`/${date}`);
}

ajouterHeurMed(f:any){
let addedData = JSON.stringify(f.value);
console.log ("addedData", addedData);
return this.http.post(environment.api+"rdv/heurs", addedData,this.httpOptions);
}

fixerRdv(f:any){
let addedData = JSON.stringify(f.value);
console.log ("addedData", addedData);
return this.http.post(environment.api+"rdv/rdvs", addedData,this.httpOptions);
}

getSoinBenef(cod_benef:any): Observable<any> {
  return this.http.get<any>(environment.api+"rdv/soin"+`/${cod_benef}`);
}

getRegime(reg): Observable<any>{
return this.http.get<any>(environment.api+"users/regimes"+`/${reg}`);

}
getAllRegime(): Observable<any[]>{
return this.http.get<any[]>(environment.api+"users/regimes");
}

getHopitalByCode(cod_hop:any): Observable<any[]>{
return this.http.get<any[]>(environment.api+"users/hopital"+`/${cod_hop}`);
}


updateSoinBenef(f,id){
return this.http.patch(environment.api+"rdv/soins"+`/${id}`,f );
}

getSoinsBenef(cod_benef): Observable<any[]>{
return this.http.get<any[]>(environment.api+"rdv/soin"+`/${cod_benef}`);

}
ajoutSoin(f){
let addedData = JSON.stringify(f.value);
console.log ("addedData", addedData);
return this.http.post(environment.api+"rdv/soins", addedData,this.httpOptions);
}
updateRdv(f,id){
return this.http.patch(environment.api+"rdv/updaterdv"+`/${id}`,f );
}


}
