import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHistoricArticlesComponent } from './index-historic-articles.component';

describe('IndexHistoricArticlesComponent', () => {
  let component: IndexHistoricArticlesComponent;
  let fixture: ComponentFixture<IndexHistoricArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexHistoricArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexHistoricArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
