import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexArticlesComponent } from './index-articles.component';

describe('IndexArticlesComponent', () => {
  let component: IndexArticlesComponent;
  let fixture: ComponentFixture<IndexArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
