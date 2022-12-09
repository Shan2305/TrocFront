import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCommentaryComponent } from './index-commentary.component';

describe('IndexCommentaryComponent', () => {
  let component: IndexCommentaryComponent;
  let fixture: ComponentFixture<IndexCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCommentaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
