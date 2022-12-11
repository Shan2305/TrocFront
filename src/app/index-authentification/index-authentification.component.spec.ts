import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAuthentificationComponent } from './index-authentification.component';

describe('IndexAuthentificationComponent', () => {
  let component: IndexAuthentificationComponent;
  let fixture: ComponentFixture<IndexAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
