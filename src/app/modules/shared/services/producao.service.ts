import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationResponse } from '../models/pagination-response';
import { Producao } from '../models/producao';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Serviço que inclui consultas de produção
 */
export class ProducaoService extends HttpService {



  /**
   *Inquérito de produção
   */
  consulteProducao(page: number, rowByPage: number): Promise<PaginationResponse> {
    const response = new PaginationResponse(page, rowByPage);
    return this.get('https://api-qr-payment.herokuapp.com/cobro/gibbsinversiones@gmail.com').toPromise().then(
      (resp:any)=>{
        response.count = 10;
        const listProducao = Array<Producao>();
        listProducao.push(new Producao('ene', '2020', 2344567));
        listProducao.push(new Producao('feb', '2020', 3244566));
        listProducao.push(new Producao('mar', '2020', 2233789));
        listProducao.push(new Producao('abr', '2020', 1344567));
        listProducao.push(new Producao('may', '2020', 2777890));
        listProducao.push(new Producao('nov', '2020', 3445768));
        listProducao.push(new Producao('dic', '2020', 1500789));
        listProducao.push(new Producao('ene', '2021', 4322890));
        listProducao.push(new Producao('feb', '2021', 1870567));
        listProducao.push(new Producao('mar', '2021', 2500567));
        response.count = 10;
        response.data = listProducao;
        return response;
      }
    )

  }

  /*consulteProducao(page: number, rowByPage: number):PaginationResponse {
    const response = new PaginationResponse(page, rowByPage);

    const listProducao: Array<Producao> = Array<Producao>();
    listProducao.push(new Producao('ene', '2020', 2344567));
    listProducao.push(new Producao('feb', '2020', 3244566));
    listProducao.push(new Producao('mar', '2020', 2233789));
    listProducao.push(new Producao('abr', '2020', 1344567));
    listProducao.push(new Producao('may', '2020', 2777890));
    listProducao.push(new Producao('nov', '2020', 3445768));
    listProducao.push(new Producao('dic', '2020', 1500789));
    listProducao.push(new Producao('ene', '2021', 4322890));
    listProducao.push(new Producao('feb', '2021', 1870567));
    listProducao.push(new Producao('mar', '2021', 2500567));
    response.count = 10;
    response.data = listProducao;
    
    return response;
  }*/

  consulteProducao2(page: number, rowByPage: number){
    const response = new PaginationResponse(page, rowByPage);
    return this.get('https://api-qr-payment.herokuapp.com/cobro/gibbsinversiones@gmail.com').toPromise().then(
      (resp:any)=>{
        response.count = 10;
        const listProducao = Array<Producao>();
        listProducao.push(new Producao('ene', '2020', 2344567));
        listProducao.push(new Producao('feb', '2020', 3244566));
        listProducao.push(new Producao('mar', '2020', 2233789));
        listProducao.push(new Producao('abr', '2020', 1344567));
        listProducao.push(new Producao('may', '2020', 2777890));
        listProducao.push(new Producao('nov', '2020', 3445768));
        listProducao.push(new Producao('dic', '2020', 1500789));
        listProducao.push(new Producao('ene', '2021', 4322890));
        listProducao.push(new Producao('feb', '2021', 1870567));
        listProducao.push(new Producao('mar', '2021', 2500567));
        response.count = 10;
        response.data = listProducao;
        return response;
      }
    )

  }

}
