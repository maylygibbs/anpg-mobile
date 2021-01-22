import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOilPrice } from '../../interfaces/ioil-price.interface';
import { OilPriceService } from '../../services/oil-price.service';

@Component({
  selector: 'app-oil-sticker',
  templateUrl: './oil-sticker.component.html',
  styleUrls: ['./oil-sticker.component.scss'],
})
export class OilStickerComponent implements OnInit {

  oilPrice$: Observable<IOilPrice[]>;

  brentOil: IOilPrice;

  constructor(private oilPriceService: OilPriceService) {
  }

  ngOnInit() {
    this.getPrice();
  }

  getPrice(): void {
    this.oilPrice$ = this.oilPriceService.getLatestPrices();
    /*
    try {
      this.oilPriceService.getLatestAPI().subscribe(x => {
        if (x) {
          this.brentOil = x['data'];
          this.oilPrice$ = this.oilPriceService.getLatestPrices();
          this.oilPrice$.forEach(element => {    
            element.forEach(x => {
              if (x['code'] = 'BRENT_CRUDE_USD') {
                x['formatted'] = this.brentOil.formatted;
              }})
          });
        }
      });
    }
    catch(error) {
      this.oilPrice$ = this.oilPriceService.getLatestPrices();
    }
    */
  } 
}
