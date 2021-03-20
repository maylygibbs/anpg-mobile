import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { INews } from '../../shared/interfaces/inews.interface';
import { ISector } from '../../shared/interfaces/isector.interface';
import { NewsService } from '../../shared/services/news.service';
import { SectorService } from '../../shared/services/sector.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {

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
   
    this.router.navigate(['/tabs/sala-imprensa/news-detalhe'], navigationExtras);      
    
  } 

}
