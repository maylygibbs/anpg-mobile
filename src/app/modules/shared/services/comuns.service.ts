import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
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
 * serviço para obter as listas de opções comuns
 */
export class ComunsService extends HttpService {

  protected mesOpcoes = [
    {
      label: "Enero",
      abbreviatedlabel: "enr",
      value: "1",
      isSelected: false
    },
    {
      label: "Febrero",
      abbreviatedlabel: "feb",
      value: "2",
      isSelected: false
    },
    {
      label: "Marzo",
      abbreviatedlabel: "mar",
      value: "3",
      isSelected: false
    },
    {
      label: "Abril",
      abbreviatedlabel: "abr",
      value: "4",
      isSelected: false
    },
    {
      label: "Mayo",
      abbreviatedlabel: "may",
      value: "5",
      isSelected: false
    },
    {
      label: "Junio",
      abbreviatedlabel: "jun",
      value: "6",
      isSelected: false
    },
    {
      label: "Julio",
      abbreviatedlabel: "jul",
      value: "7",
      isSelected: false
    },
    {
      label: "Agosto",
      abbreviatedlabel: "ago",
      value: "8",
      isSelected: false
    },
    {
      label: "Septiembre",
      abbreviatedlabel: "sep",
      value: "9",
      isSelected: false
    },
    {
      label: "Octubre",
      abbreviatedlabel: "oct",
      value: "10",
      isSelected: false
    },
    {
      label: "Noviembre",
      abbreviatedlabel: "nov",
      value: "11",
      isSelected: false
    },
    {
      label: "Diciembre",
      abbreviatedlabel: "dic",
      value: "12",
      isSelected: false
    }
  ]



  /**
   * Obtenha a lista de provincias
   */
  getProvincias(): Promise<Array<Provincia>> {

    return this.resolveWith([
      new Provincia(1, 'Provincia 1'),
      new Provincia(2, 'Provincia 2'),
      new Provincia(3, 'Provincia 3'),
      new Provincia(4, 'Provincia 4'),
      new Provincia(5, 'Provincia 5')
    ]);

  }

  /**
   * Obtenha a label mes
   */
  getLabelMes(id: number): string {

    const objMes = this.mesOpcoes.filter((item) => {
      return item.value == id.toString();
    });
    return objMes[0].abbreviatedlabel;
  }

}
