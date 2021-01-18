import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/shared/models/news.model';
import { INews } from '../../../shared/interfaces/inews.interface';
import { NewsService } from '../../../shared/services/news.service';
import { RouteStateService } from '../../../shared/services/route-state.service';

@Component({
  selector: 'app-news-detalhe',
  templateUrl: 'tab-news-detalhe.page.html',
  styleUrls: ['tab-news-detalhe.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNewsDetalhe implements OnInit, AfterViewInit {
  
  noticia$: INews;
  
  constructor(private newsService: NewsService,
              private routeStateService: RouteStateService) {
  }
  ngOnInit(): void {
    var routeState = this.routeStateService.getCurrent();
    this.noticia$ = routeState.data;
    console.log(routeState.data);
  }
  ngAfterViewInit(): void {
  }

  goBack(): void {
    this.routeStateService.loadPrevious();
  }
}