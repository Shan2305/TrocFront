import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHistoricTransactionsComponent } from './index-historic-transactions.component';

describe('IndexHistoricTransactionsComponent', () => {
  let component: IndexHistoricTransactionsComponent;
  let fixture: ComponentFixture<IndexHistoricTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexHistoricTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexHistoricTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
