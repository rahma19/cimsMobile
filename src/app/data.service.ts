import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getAllHopitals(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+"rdv");
}
getAllMedecinsHop(code_hop): Observable<any[]> {
  return this.http.get<any[]>(environment.api+"users/medecins"+`/${code_hop}`);
}
}
