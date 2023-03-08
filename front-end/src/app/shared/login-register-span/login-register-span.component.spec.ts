import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterSpanComponent } from './login-register-span.component';

describe('LoginRegisterSpanComponent', () => {
  let component: LoginRegisterSpanComponent;
  let fixture: ComponentFixture<LoginRegisterSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterSpanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
