import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdministrationPanelComponent } from './views/administration-panel/administration-panel.component';
import { EnrollmentComponent } from './views/enrollment/enrollment.component';
import { LoginRegisterBtnComponent } from './shared/login-register-btn/login-register-btn.component';
import { LoginRegisterInputComponent } from './shared/login-register-input/login-register-input.component';
import { LoginRegisterTitleComponent } from './shared/login-register-title/login-register-title.component';
import { LoginRegisterSpanComponent } from './shared/login-register-span/login-register-span.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdministrationPanelComponent,
    EnrollmentComponent,
    LoginRegisterBtnComponent,
    LoginRegisterInputComponent,
    LoginRegisterTitleComponent,
    LoginRegisterSpanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
