import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-register-title',
  templateUrl: './login-register-title.component.html',
  styleUrls: ['./login-register-title.component.scss']
})
export class LoginRegisterTitleComponent {
  @Input() content:string="content";

}
