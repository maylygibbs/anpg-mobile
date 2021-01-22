import { Injectable } from '@angular/core';
import { OilPrice } from '../models/oil-price.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { IOilPrice } from '../interfaces/ioil-price.interface';
import { environment } from 'src/environments/environment';
import { IOilPriceRequest } from '../interfaces/ioil-price-request.interface';


@Injectable({
  providedIn: 'root'
})
export class OilPriceService {

  OilPrices: OilPrice[] = [
    {
      label: 'Petróleo Brent',
      price: 56.73,
      formatted: '56.73$',
      currency: '$',
      code: 'BRENT_CRUDE_USD',
      type: '',
      created_at: '',
      img: 'assets/icon/TickerBrent.svg'
    },
    {
      label: 'Petróleo WTI',
      price: 56.73,
      formatted: '56.73$',
      currency: '$',
      code: 'WTI_USD',
      type: '',
      created_at: '',
      img: 'assets/icon/TickerWITI.svg'
    },
    {
      label: 'Gás Natural',
      price: 56.73,
      formatted: '2.489$',
      currency: '$',
      code: 'GAS_CRUDE_USD',
      type: '',
      created_at: '',
      img: 'assets/icon/TickerGas.svg'
    }    
  ];

  constructor(private http: HttpClient) { 
  }

  getLatestPrices(): Observable<OilPrice[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 
          'Access-Control-Allow-Origin': '*'
        })
    };    
    return this.http.get<OilPrice[]>("https://anpgwebapi.azurewebsites.net/api/OilPrices");
    /*return of(this.OilPrices);*/
  }
}
