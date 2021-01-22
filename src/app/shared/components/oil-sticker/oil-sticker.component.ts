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

  constructor(private oilPriceService: OilPriceService) {
  }

  ngOnInit() {
    this.oilPrice$ = this.oilPriceService.getLatestPrices();
  }
}
