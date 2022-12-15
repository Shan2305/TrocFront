import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBarreNavComponent } from './index-barre-nav.component';

describe('IndexBarreNavComponent', () => {
  let component: IndexBarreNavComponent;
  let fixture: ComponentFixture<IndexBarreNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBarreNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBarreNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
