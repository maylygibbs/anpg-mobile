import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { INews } from '../shared/interfaces/inews.interface';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: 'tabNews.page.html',
  styleUrls: ['tabNews.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNews {
  
  noticias$: Observable<INews[]>;
  
  constructor(private newsService: NewsService) {
    this.noticias$ = this.newsService.getAllNews();
  }

  detalhe(item: INews): void {
    //navegar para 
    console.log(item);
  }

}