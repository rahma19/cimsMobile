import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user:any;
  codhop:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient,private router:Router) { }

  getAllHopitals(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+"rdv");
}

getAllMedicament(cod_hop:any): Observable<any[]>{
  return this.http.get<any[]>(environment.api+"users/medics"+`/${cod_hop}`);
 }
 
getBenef(cod_benef,code_hop){
  return this.http.get<any[]>(environment.api+"auth/benef"+`/${cod_benef}`+`/${code_hop}`);
}

getAllMedecinsHop(code_hop): Observable<any[]> {
  return this.http.get<any[]>(environment.api+"users/medecins"+`/${code_hop}`);
}


async getCurrentUser(f:any,path:any,codhop:any){
let addedData = JSON.stringify(f.value);
       console.log ("addedData", addedData);
 await this.http.post(environment.api+path, addedData,this.httpOptions).subscribe((res:any) => {
        localStorage.setItem("token",res.token)
        this.user=res.user;
        this.codhop=codhop,
        console.log(this.user);
      });
      }



getAllRdvs(){
return this.http.get<any[]>(environment.api+"rdv/rdvs");

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

getRdvById(id){
  return this.http.get<any[]>(environment.api+"rdv/rv"+`/${id}`);
 }

getHopitalByCode(cod_hop:any): Observable<any[]>{
return this.http.get<any[]>(environment.api+"users/hopital"+`/${cod_hop}`);
}
update(f,id){
  return this.http.patch(environment.api+"auth/modifPat"+`/${id}`,f );
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
getRdvBenef(cod_benef,codhop):  Observable<any[]> {
  return this.http.get<any[]>(environment.api+"rdv/RdvBenef"+`/${cod_benef}`+`/${codhop}`);
}

}
