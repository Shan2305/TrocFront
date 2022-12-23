import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTransactionsComponent } from './index-transactions.component';

describe('IndexTransactionsComponent', () => {
  let component: IndexTransactionsComponent;
  let fixture: ComponentFixture<IndexTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
