import { Injectable } from '@angular/core';
import { OilPrice } from '../interfaces/oil-price.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OilPriceService {

  constructor(private http: HttpClient) { }

  OilPrices: OilPrice[] = [];

  getLatestPrices(): Observable<OilPrice[]> {
    return this.http.get<OilPrice[]>("https://api.oilpriceapi.com/v1/prices/latest");
  }
}
