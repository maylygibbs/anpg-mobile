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
          'Access-Control-Allow-Origin': '*'
        })
    };
    const req = this.http.post( environment.apiUrl + "Agenda", agendamento, httpOptions);
    return req;
   }

}
