/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { saleService } from './sale.service';

describe('Service: sale', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [saleService]
    });
  });

  it('should ...', inject([saleService], (service: saleService) => {
    expect(service).toBeTruthy();
  }));
});
