import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPage {

  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'petróleo',
      'poço',
      'produção',
      'licitações',
      'notícias',
      'relatório',
      'dados',
      'plataforma',
      'mapa'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }  

}
