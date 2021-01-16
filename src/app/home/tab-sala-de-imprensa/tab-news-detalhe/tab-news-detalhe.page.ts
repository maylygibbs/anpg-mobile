import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { INews } from '../../../shared/interfaces/inews.interface';
import { NewsService } from '../../../shared/services/news.service';
import { RouteStateService } from '../../../shared/services/route-state.service';

@Component({
  selector: 'app-news-detalhe',
  templateUrl: 'tab-news-detalhe.page.html',
  styleUrls: ['tab-news-detalhe.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNewsDetalhe implements OnInit {
  
  noticia$: INews;
  
  constructor(private newsService: NewsService,
              private routeStateService: RouteStateService) {
    
  }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    this.noticia$ = routeState.data;
  }

  goBack(): void {
    this.routeStateService.loadPrevious();
  }
}