import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-register-input',
  templateUrl: './login-register-input.component.html',
  styleUrls: ['./login-register-input.component.scss']
})
export class LoginRegisterInputComponent {
  @Input() content:string="content";
  @Input() type:string="text";
}
