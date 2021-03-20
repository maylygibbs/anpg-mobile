import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAgendamento } from '../interfaces/iagendamento.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  
  constructor(private http: HttpClient) { }

   gravarAgendamento(agendamento: IAgendamento): any {
    const httpOptions = {
      headers: new HttpHeaders(
        { 
            'Authorization': `Token ${environment.apiToken}`
          , 'Content-Type': 'application/json'
          , 'Accept': 'application/json'
          , 'Access-Control-Allow-Origin': '*'
        })
    };    

    const urlService = environment.apiUrl + "Agenda";
    const req = this.http.post( urlService, agendamento, httpOptions).toPromise();
    //.then(response => response.toString(), this.gravarAgendamento);

    return req;
   }

}
