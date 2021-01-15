import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INews } from '../interfaces/inews.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  itemHeight: number = 0;

  newsItems: INews[] = 
  [
      {
        id: 1,
        expanded: false,
        title: 'NEWS TITLE 1',
        img: 'assets/img/noticia_1_2x.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        id: 2,
        expanded: false,
        title: 'NEWS TITLE 2',
        img: 'assets/img/noticia_2_2x.png',
        sector: 'REGULACAO',
        text: 'NEWS TEXT',        
      },
      {
        id: 3,
        expanded: false,
        title: 'NEWS TITLE 3',
        img: 'assets/img/noticia_3_2x.png',
        sector: 'CAPITAL HUMANO',
        text: 'NEWS TEXT',        
      },
      {
        id: 4,
        expanded: false,
        title: 'NEWS TITLE 4',
        img: 'assets/img/noticia_4_2x.png',
        sector: 'OPERAÇÔES',
        text: 'NEWS TEXT',        
      },
      {
        id: 5,
        expanded: false,
        title: 'NEWS TITLE 5',
        img: 'assets/img/noticia_5_2x.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        id: 6,
        expanded: false,
        title: 'NEWS TITLE 6',
        img: 'assets/img/noticia_1_2x.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        id: 7,
        expanded: false,
        title: 'NEWS TITLE 7',
        img: 'assets/img/noticia_2_2x.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        id: 8,
        expanded: false,
        title: 'NEWS TITLE 8',
        img: 'assets/img/noticia_3_2x.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        id: 8,
        expanded: false,
        title: 'NEWS TITLE 9',
        img: 'assets/img/noticia_4_2x.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
  ];

  constructor() { }

  getAllNews(): Observable<INews[]> {
    return of(this.newsItems);
  }
}
