import { TestBed } from '@angular/core/testing';

import { OilPriceService } from './oil-price.service';

describe('OilPriceService', () => {
  let service: OilPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OilPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
