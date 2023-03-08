import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterTitleComponent } from './login-register-title.component';

describe('LoginRegisterTitleComponent', () => {
  let component: LoginRegisterTitleComponent;
  let fixture: ComponentFixture<LoginRegisterTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
