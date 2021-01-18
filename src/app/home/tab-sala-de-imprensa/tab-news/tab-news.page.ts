import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISector } from 'src/app/shared/interfaces/isector.interface';
import { News } from 'src/app/shared/models/news.model';
import { SectorService } from 'src/app/shared/services/sector.service';
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

  sectors$: Observable<ISector[]>;
  
  constructor(private newsService: NewsService,
              private sectorService: SectorService,
              private routeStateService: RouteStateService) {
    this.noticias$ = this.newsService.getAllNews();
    this.sectors$ = sectorService.getAllSectors();
  }

  goBack(): void {
    this.routeStateService.loadPrevious();
  }

  detalhe(item: INews): void {        
    console.log(item);
    this.routeStateService.add("Noticias", "/tabs/news-detalhe/", item, false);        
  }

}