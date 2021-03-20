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
export class BlocoService extends HttpService {

/**
* Obtenha a lista de blocos por bacias
*/
  getAllBlocos(bacias: Array<Bacia>): Promise<Array<Bloco>> {

    const respoBlocos = Array<Bloco>();

    bacias.forEach(bacia => {
      respoBlocos.push(...this.getBlocos(bacia.id))
      
    });

    return this.resolveWith(respoBlocos);


  }
/**
* Obtenha a lista de blocos de uma bacia
*/
  private getBlocos(idBacia:number):Array<Bloco>{
    switch (idBacia.toString()) {
      case '1':
        return [
            new Bloco(1, 'CON1'),
            new Bloco(2, 'CON5'),
            new Bloco(3, 'CON6')
          ];
        break;
      case '2':
        return [
            new Bloco(1, 'KON5'),
            new Bloco(2, 'KON6'),
            new Bloco(3, 'KON8'),
            new Bloco(1, 'KON9'),
            new Bloco(2, 'KON17'),
            new Bloco(3, 'KON20')
          ];
        break;

    }
  }
}
