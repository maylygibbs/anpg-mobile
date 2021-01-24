import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INews } from '../interfaces/inews.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  itemHeight: number = 0;

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<INews[]> {


    const httpOptions = {
      headers: new HttpHeaders(
        { 
          'Authorization': `Token ${environment.oilPriceApiToken}`
        })
    };    
    const urlService = environment.apiUrl + "Noticias";
    return this.http.get<INews[]>(urlService, httpOptions);

//    return of(this.newsItems);
  }
}
