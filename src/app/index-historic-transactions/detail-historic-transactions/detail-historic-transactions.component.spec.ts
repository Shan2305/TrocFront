import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHistoricTransactionsComponent } from './detail-historic-transactions.component';

describe('DetailHistoricTransactionsComponent', () => {
  let component: DetailHistoricTransactionsComponent;
  let fixture: ComponentFixture<DetailHistoricTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHistoricTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailHistoricTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
