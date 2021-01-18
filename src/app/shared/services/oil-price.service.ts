import { Injectable } from '@angular/core';
import { OilPrice } from '../models/oil-price.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OilPriceService {

  constructor() { }

  OilPrices: OilPrice[] = [
    {
      label: 'Petróleo Brent',
      price: 56.73,
      formatted: '56.73',
      currency: '$',
      code: 'Petróleo Brent',
      type: '',
      created_at: '',
      img: 'assets/icon/TickerBrent.svg'
    },
    {
      label: 'Petróleo WTI',
      price: 56.73,
      formatted: '56.73',
      currency: '$',
      code: 'Petróleo WTI',
      type: '',
      created_at: '',
      img: 'assets/icon/TickerWITI.svg'
    },
    {
      label: 'Gás Natural',
      price: 56.73,
      formatted: '2459.73',
      currency: '$',
      code: 'Gás Natural',
      type: '',
      created_at: '',
      img: 'assets/icon/TickerGas.svg'
    }    
  ];

  getLatestPrices(): Observable<OilPrice[]> {
    return of(this.OilPrices);
    /*return this.http.get<OilPrice[]>("https://api.oilpriceapi.com/v1/prices/latest");*/
  }
}
