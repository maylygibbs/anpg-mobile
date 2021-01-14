import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: 'tabNews.page.html',
  styleUrls: ['tabNews.page.scss']
})
export class TabNews {
  items: any = [];
  itemHeight: number = 0;

  constructor() {
    this.items = [
      {
        expanded: false,
        title: 'NEWS TITLE 1',
        img: 'assets/img/noticia_1.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 2',
        img: 'assets/img/noticia_2.png',
        sector: 'REGULACAO',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 3',
        img: 'assets/img/noticia_3.png"',
        sector: 'CAPITAL HUMANO',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 4',
        img: 'assets/img/noticia_4.png',
        sector: 'OPERAÇÔES',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 5',
        img: 'assets/img/noticia_5.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 6',
        img: 'assets/img/noticia_1.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 7',
        img: 'assets/img/noticia_2.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 8',
        img: 'assets/img/noticia_3.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
      {
        expanded: false,
        title: 'NEWS TITLE 9',
        img: 'assets/img/noticia_4.png',
        sector: 'INOVACAO',
        text: 'NEWS TEXT',        
      },
  ];
  }

  expandItem(item){ 
    this.items.map((listItem) => {
        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
    });
  }
}