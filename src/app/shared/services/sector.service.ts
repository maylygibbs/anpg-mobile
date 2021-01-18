import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISector } from '../interfaces/isector.interface';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  sectors: ISector[] = [
    {
      name: 'INOVACAO'
    },
    {
      name: 'REGULACAO'
    },
    {
      name: 'CAPITAL HUMANO'
    }
  ];

  constructor() { }

  getAllSectors(): Observable<ISector[]> {
    return of(this.sectors);
  }
}
