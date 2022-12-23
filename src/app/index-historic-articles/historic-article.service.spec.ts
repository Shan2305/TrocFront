import { TestBed } from '@angular/core/testing';

import { HistoricArticleService } from './historic-article.service';

describe('HistoricArticleService', () => {
  let service: HistoricArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
