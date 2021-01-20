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

  constructor(private http: HttpClient) { 
  }

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
      code: 'WTI_CRUDE_USD',
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

  getLatestPrices(): Observable<OilPrice[]> {
    return of(this.OilPrices);    
  }

  getLatestAPI(): Observable<IOilPrice[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 
          'Authorization': `Token ${environment.oilPriceApiToken}`,
          'Access-Control-Allow-Origin': '*'
        })
    };    
    const req = this.http.get<any>("https://api.oilpriceapi.com/v1/prices/latest", httpOptions);
    return req;
  }
}
