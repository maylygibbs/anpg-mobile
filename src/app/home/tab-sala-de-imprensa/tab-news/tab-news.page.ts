import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ISector } from 'src/app/shared/interfaces/isector.interface';
import { SectorService } from 'src/app/shared/services/sector.service';
import { INews } from '../../../shared/interfaces/inews.interface';
import { NewsService } from '../../../shared/services/news.service';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';


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
              private router: Router,private route:ActivatedRoute) {
    this.noticias$ = this.newsService.getAllNews();
    this.sectors$ = sectorService.getAllSectors();
  }

  detalhe(itemtosend: INews): void {        
    let navigationExtras: NavigationExtras = {
      state: {
        item: itemtosend
      }
    };
   
    this.router.navigate(['/tabs/sala-de-imprensa/news-detalhe'], navigationExtras);      
    
  } 

}