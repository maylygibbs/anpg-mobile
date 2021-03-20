import { Component, OnInit } from '@angular/core';
import { INews } from '../../shared/interfaces/inews.interface';

@Component({
  selector: 'app-news-detalhe',
  templateUrl: './news-detalhe.page.html',
  styleUrls: ['./news-detalhe.page.scss'],
})
export class NewsDetalhePage implements OnInit {

  noticia$: INews;

  constructor() { }

  ngOnInit() {
    this.noticia$=history.state.item;
  }

}
