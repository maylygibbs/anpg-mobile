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
 * serviço para obter as listas de bacia
 */
export class BaciaService extends HttpService {


  /**
 * Obtenha a lista de bacias
 */
  getBacias(): Promise<Array<Bacia>> {

    return this.resolveWith(
      [
        new Bacia(1, 'BACIA DO CONGO'),
        new Bacia(2, 'BACIA DO KWANZA'),
        //new Bacia(3, 'BACIA DE NAMIBE'),
        // new Bacia(4, 'BACIA DO KASSANGE'),
        //new Bacia(5, 'ACIA DE ETOSHA'),
        //new Bacia(5, 'BACIA DE OKAVANGO*/')
      ]
    );
  }



}
