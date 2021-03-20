import { Injectable } from '@angular/core';
import { Bacia } from '../models/bacia';
import { Bloco } from '../models/bloco';
import { Empresa } from '../models/empresa';
import { Provincia } from '../models/provincia';
import { BaseService } from './base.service';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})

/**
 * serviço para obter as listas de empresas
 */
export class EmpresaService extends HttpService {


  /**
  * Obtenha a lista de empresas
  */
  getEmpresas(): Promise<Array<Empresa>> {

    return this.resolveWith(
      [
        new Empresa(1, 'SOMOIL'),
        new Empresa(2, 'SONANGOL'),
        new Empresa(3, 'PLUSPRETROL'),
        new Empresa(4, 'EXXONMOBIL'),
        new Empresa(5, 'ENI GROUP'),
        new Empresa(5, 'REPSOL'),
        new Empresa(5, 'TOTAL'),
        new Empresa(5, 'BP'),
        new Empresa(5, 'CHEVRON'),
      ]
    )

  }


}
