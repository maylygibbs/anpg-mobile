import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { INews } from '../shared/interfaces/inews.interface';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'app-news-detalhe',
  templateUrl: 'tab-news-detalhe.page.html',
  styleUrls: ['tab-news-detalhe.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNewsDetalhe {
  
  noticia$: INews;
  
  constructor(private newsService: NewsService) {
    //this.noticia$ = this.newsService.getAllNews();
  }

  detalhe(item: INews): void {
    //navegar para 
    this.noticia$  = item;
    console.log(item);
  }

}