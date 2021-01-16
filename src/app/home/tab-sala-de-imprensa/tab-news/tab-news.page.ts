import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../../shared/interfaces/inews.interface';
import { NewsService } from '../../../shared/services/news.service';
import { RouteStateService } from '../../../shared/services/route-state.service';

@Component({
  selector: 'app-news',
  templateUrl: 'tab-news.page.html',
  styleUrls: ['tab-news.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNews {
  
  noticias$: Observable<INews[]>;
  
  constructor(private newsService: NewsService,
              private routeStateService: RouteStateService) {
    this.noticias$ = this.newsService.getAllNews();
  }

  goBack(): void {
    this.routeStateService.loadPrevious();
  }

  detalhe(item: INews): void {    
    this.routeStateService.add("Noticias", "/tabs/news-detalhe/", item, false);    
    console.log(item);
  }

}