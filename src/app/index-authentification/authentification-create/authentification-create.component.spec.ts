import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationCreateComponent } from './authentification-create.component';

describe('AuthentificationCreateComponent', () => {
  let component: AuthentificationCreateComponent;
  let fixture: ComponentFixture<AuthentificationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
