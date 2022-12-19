import { TestBed } from '@angular/core/testing';

import { HistoricTransactionsService } from './historic-transactions.service';

describe('HistoricTransactionsService', () => {
  let service: HistoricTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
