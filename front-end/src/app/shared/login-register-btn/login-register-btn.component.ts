import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-register-btn',
  templateUrl: './login-register-btn.component.html',
  styleUrls: ['./login-register-btn.component.scss']
})
export class LoginRegisterBtnComponent {
  @Input() content:string = "content";
}
