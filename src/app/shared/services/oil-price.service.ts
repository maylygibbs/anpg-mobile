import { Injectable } from '@angular/core';
import { OilPrice } from '../models/oil-price.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OilPriceService {

  constructor(private http: HttpClient) { 
  }

  getLatestPrices(): Observable<OilPrice[]> {
    const urlService = environment.apiUrl + "OilPrices";
    return this.http.get<OilPrice[]>(urlService);
  }
}
