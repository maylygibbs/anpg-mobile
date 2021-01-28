import { Component, OnInit } from '@angular/core';
import { INews } from '../../../shared/interfaces/inews.interface';


@Component({
  selector: 'app-news-detalhe',
  templateUrl: 'tab-news-detalhe.page.html',
  styleUrls: ['tab-news-detalhe.page.scss']
})
export class TabNewsDetalhe implements OnInit {
  
  noticia$: INews;

  constructor() {  }
  
  ngOnInit() {
    this.noticia$=history.state.item;
  }
   
}