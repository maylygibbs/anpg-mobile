import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OilPrice } from '../../models/oil-price.model';
import { OilPriceService } from '../../services/oil-price.service';

@Component({
  selector: 'app-oil-sticker',
  templateUrl: './oil-sticker.component.html',
  styleUrls: ['./oil-sticker.component.scss'],
})
export class OilStickerComponent implements OnInit {

  oilPrice$: Observable<OilPrice[]>;

  constructor(private oilPriceService: OilPriceService) { 
    this.oilPrice$ = this.getPrice();
  }

  ngOnInit() {}

  getPrice(): Observable<OilPrice[]> {
    const prices = this.oilPriceService.getLatestPrices();
    console.log(prices);
    return prices;
  } 

}
